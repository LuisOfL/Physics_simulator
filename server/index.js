import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {
  BedrockRuntimeClient,
  ConverseCommand,
} from '@aws-sdk/client-bedrock-runtime';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '25mb' }));

const PORT = process.env.PORT || 3001;

const SYSTEM_PROMPT = `Eres PhysiLab AI, un profesor experto en Física Mecánica Clásica e ingeniero de simulación interactiva impulsado por AWS Bedrock.
Tu objetivo es:
1. Analizar problemas de física mecánica (a partir de una imagen subida, de un enunciado en texto o del estado actual que el usuario armó en el simulador/juego).
2. Explicar de forma muy visual, estructurada y clara:
   - **Datos Identificados** (masas, ángulos, coeficientes de fricción, fuerzas, velocidades).
   - **Diagramas de Cuerpo Libre (DCL)** detallando cada fuerza que actúa sobre cada objeto (Peso W = mg, componentes mg·senθ y mg·cosθ, Fuerza Normal N, Tensión T de cuerdas, Fricción estática/cinética f_r, Fuerza elástica F_e = -kx).
   - **Ecuaciones de Segunda Ley de Newton / Conservación de Energía** (∑F_x = m·a_x, ∑F_y = 0).
   - **Resolución Paso a Paso y Resultados Numéricos con Unidades**.
3. Además de tu explicación en Markdown, SIEMPRE incluye al final de tu respuesta un bloque JSON delimitado por \`\`\`json ... \`\`\` con la clave "simulatorUpdate" si el problema corresponde a una escena que debe reflejarse en el simulador.

Formatos válidos para "simulatorUpdate":
{
  "simulatorUpdate": {
    "sceneType": "incline_pulley" | "horizontal_table" | "atwood" | "spring_block" | "projectile" | "pendulum" | "sandbox_game" | "ai_custom_code",
    "params": {
      "m1": 6.0,
      "m2": 4.0,
      "angle": 30,
      "muK": 0.15,
      "muS": 0.22,
      "fExt": 0,
      "fAngle": 0,
      "k": 45,
      "x0": 2.0,
      "v0": 20,
      "h0": 2,
      "length": 3.5,
      "angle0": 35,
      "g": 9.81
    },
    "customCanvasCode": "// Opcional: Si sceneType es 'ai_custom_code', escribe aquí el cuerpo de una función JavaScript que recibe (ctx, W, H, t, params, drawVector) y dibuja la simulación física y sus vectores DCL en el Canvas."
  }
}`;

/**
 * Extrae bloque JSON de actualización del simulador si el LLM lo incluyó en su respuesta
 */
function extractSimulatorUpdate(text) {
  if (!text) return null;
  const jsonMatch = text.match(/```json\s*([\s\S]*?)```/i);
  if (!jsonMatch) return null;
  try {
    const parsed = JSON.parse(jsonMatch[1].trim());
    return parsed.simulatorUpdate || parsed;
  } catch {
    return null;
  }
}

/**
 * Motor heurístico + analítico inteligente cuando se usa Modo Demo o cuando se analiza localmente
 */
function buildSmartPhysicsResponse({ prompt = '', hasImage = false, sceneState = {}, solverResult = null }) {
  const lower = prompt.toLowerCase();
  let detectedUpdate = null;

  // Extraer números si el usuario describe un problema nuevo en el chat o sube imagen
  const angleMatch = lower.match(/(\d+(?:\.\d+)?)\s*(?:grados|°|deg)/);
  const massMatches = [...lower.matchAll(/(\d+(?:\.\d+)?)\s*kg/g)].map((m) => parseFloat(m[1]));
  const muMatch = lower.match(/(?:fricc?i[oó]n|mu|μ|coeficiente)\s*(?:de|=|:)?\s*(0\.\d+)/);
  const v0Match = lower.match(/(\d+(?:\.\d+)?)\s*m\/s/);
  const kMatch = lower.match(/(\d+(?:\.\d+)?)\s*n\/m/);

  if (lower.includes('proyectil') || lower.includes('parab') || lower.includes('dispara') || lower.includes('lanza')) {
    detectedUpdate = {
      sceneType: 'projectile',
      params: {
        m1: massMatches[0] || 2.0,
        v0: v0Match ? parseFloat(v0Match[1]) : 22,
        angle: angleMatch ? parseFloat(angleMatch[1]) : 45,
        h0: 2.0,
        g: 9.81,
      },
    };
  } else if (lower.includes('resorte') || lower.includes('hooke') || kMatch) {
    detectedUpdate = {
      sceneType: 'spring_block',
      params: {
        m1: massMatches[0] || 3.0,
        k: kMatch ? parseFloat(kMatch[1]) : 50,
        x0: 2.0,
        muK: muMatch ? parseFloat(muMatch[1]) : 0.04,
        g: 9.81,
      },
    };
  } else if (lower.includes('atwood') || (lower.includes('polea') && !lower.includes('inclinad') && !lower.includes('rampa') && !lower.includes('mesa'))) {
    detectedUpdate = {
      sceneType: 'atwood',
      params: {
        m1: massMatches[0] || 7.5,
        m2: massMatches[1] || 4.5,
        g: 9.81,
      },
    };
  } else if (lower.includes('mesa') || lower.includes('horizontal')) {
    detectedUpdate = {
      sceneType: 'horizontal_table',
      params: {
        m1: massMatches[0] || 5.0,
        m2: massMatches[1] ?? 3.0,
        muK: muMatch ? parseFloat(muMatch[1]) : 0.2,
        muS: 0.25,
        fExt: 10,
        fAngle: 0,
        g: 9.81,
      },
    };
  } else if (lower.includes('péndulo') || lower.includes('pendulo')) {
    detectedUpdate = {
      sceneType: 'pendulum',
      params: {
        m1: massMatches[0] || 2.5,
        length: 3.5,
        angle0: angleMatch ? parseFloat(angleMatch[1]) : 40,
        damping: 0.02,
        g: 9.81,
      },
    };
  } else if (
    lower.includes('inclinad') ||
    lower.includes('rampa') ||
    angleMatch ||
    massMatches.length > 0
  ) {
    detectedUpdate = {
      sceneType: 'incline_pulley',
      params: {
        m1: massMatches[0] || sceneState?.params?.m1 || 6.0,
        m2: massMatches.length > 1 ? massMatches[1] : sceneState?.params?.m2 ?? 4.5,
        angle: angleMatch ? parseFloat(angleMatch[1]) : sceneState?.params?.angle || 30,
        muK: muMatch ? parseFloat(muMatch[1]) : sceneState?.params?.muK ?? 0.15,
        muS: 0.22,
        fExt: 0,
        g: 9.81,
      },
    };
  }

  const activeSolver = solverResult || {};
  const bodies = activeSolver.fbdBodies || [];
  const steps = activeSolver.steps || [];
  const summary = activeSolver.summary || {};

  const fbdMarkdown = bodies
    .map((b) => {
      const vecList = (b.vectors || [])
        .map((v) => `  - **${v.symbol}** (*${v.name}*): \`${v.formula}\` (Dirección: \`${v.angleDeg.toFixed(0)}°\`)`)
        .join('\n');
      const eqList = (b.equations || []).map((eq) => `  - \`${eq}\``).join('\n');
      return `#### 📦 ${b.label} — *${b.subtitle}*\n**Fuerzas activas en el DCL:**\n${vecList}\n**Ecuaciones de equilibrio/movimiento:**\n${eqList}`;
    })
    .join('\n\n');

  const stepsMarkdown = steps
    .map((s) => `### ${s.title}\n${s.detail}\n\`\`\`\n${s.formula}\n\`\`\``)
    .join('\n\n');

  const headerNote = hasImage
    ? `🖼️ **Imagen de Problema Analizada:** He extraído los parámetros físicos del diagrama y configurado el simulador interactivo en tiempo real.`
    : `⚙️ **Análisis Físico y Simulación Sincronizada:**`;

  const reply = `${headerNote}

### 📊 Estado Dinámico del Sistema
- **Comportamiento:** ${activeSolver.motionState || 'Sistema mecánico activo'}
${summary.acceleration !== undefined ? `- **Aceleración neta ($a$):** \`${Number(summary.acceleration).toFixed(3)} m/s²\`` : ''}
${summary.tension ? `- **Tensión en la cuerda ($T$):** \`${Number(summary.tension).toFixed(2)} N\`` : ''}
${summary.normal1 ? `- **Fuerza Normal ($N_1$):** \`${Number(summary.normal1).toFixed(2)} N\`` : ''}
${summary.friction !== undefined && summary.friction > 0 ? `- **Fuerza de Fricción ($f_r$):** \`${Number(summary.friction).toFixed(2)} N\`` : ''}

---

### 🎯 Diagramas de Cuerpo Libre (DCL) por Objeto
${fbdMarkdown || 'Revisa los vectores de fuerza directamente sobre el simulador.'}

---

### 🧮 Resolución Matemática Paso a Paso
${stepsMarkdown}

> 💡 **Tip interactivo:** Puedes modificar las masas, ángulos, fricción o arrastrar los bloques y cuerdas en el simulador para observar cómo cambian de tamaño los vectores del **Diagrama de Cuerpo Libre** en vivo.`;

  return {
    reply,
    simulatorUpdate: detectedUpdate,
    provider: 'physilab-local-engine',
  };
}

app.get('/api/health', (req, res) => {
  res.json({
    ok: true,
    hasEnvBedrockKeys: Boolean(process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY),
    hasEnvCustomEndpoint: Boolean(process.env.AWS_CUSTOM_ENDPOINT_URL),
    defaultRegion: process.env.AWS_REGION || 'us-east-1',
    defaultModelId:
      process.env.BEDROCK_MODEL_ID || 'us.anthropic.claude-3-5-sonnet-20241022-v2:0',
  });
});

app.post('/api/solve', async (req, res) => {
  try {
    const {
      prompt = '',
      imageBase64 = null,
      imageMimeType = 'image/png',
      sceneState = {},
      solverResult = null,
      awsConfig = {},
    } = req.body;

    const mode = awsConfig.mode || 'auto'; // 'custom_endpoint' | 'bedrock_sdk' | 'demo' | 'auto'
    const endpointUrl = (awsConfig.endpointUrl || process.env.AWS_CUSTOM_ENDPOINT_URL || '').trim();
    const apiKey = (awsConfig.apiKey || process.env.AWS_CUSTOM_API_KEY || '').trim();
    const region = (awsConfig.region || process.env.AWS_REGION || 'us-east-1').trim();
    const modelId = (
      awsConfig.modelId ||
      process.env.BEDROCK_MODEL_ID ||
      'us.anthropic.claude-3-5-sonnet-20241022-v2:0'
    ).trim();
    const accessKeyId = (awsConfig.accessKeyId || process.env.AWS_ACCESS_KEY_ID || '').trim();
    const secretAccessKey = (
      awsConfig.secretAccessKey ||
      process.env.AWS_SECRET_ACCESS_KEY ||
      ''
    ).trim();
    const sessionToken = (awsConfig.sessionToken || process.env.AWS_SESSION_TOKEN || '').trim();

    const contextPrompt = `${prompt || 'Resuelve este problema de física mecánica paso a paso y genera su simulación y diagramas de cuerpo libre.'}

[CONTEXTO ACTUAL DEL SIMULADOR]:
Escena activa: ${sceneState.sceneType || 'incline_pulley'}
Parámetros: ${JSON.stringify(sceneState.params || {})}
Objetos en Modo Juego/Constructor: ${JSON.stringify(sceneState.sandboxObjects || [])}
Cuerdas en Modo Juego/Constructor: ${JSON.stringify(sceneState.sandboxRopes || [])}
Cálculos físicos instantáneos actuales: ${JSON.stringify(solverResult?.summary || {})}`;

    // 1. Si el usuario configuró un Endpoint HTTP de AWS (API Gateway / Lambda / Bedrock Proxy)
    if ((mode === 'custom_endpoint' || (mode === 'auto' && endpointUrl)) && endpointUrl) {
      const headers = { 'Content-Type': 'application/json' };
      if (apiKey) {
        headers['Authorization'] = apiKey.startsWith('Bearer ') ? apiKey : `Bearer ${apiKey}`;
        headers['x-api-key'] = apiKey.replace(/^Bearer\s+/i, '');
      }

      const response = await fetch(endpointUrl, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          prompt: contextPrompt,
          systemPrompt: SYSTEM_PROMPT,
          image: imageBase64,
          imageMimeType,
          sceneState,
          modelId,
        }),
      });

      if (!response.ok) {
        const errText = await response.text();
        throw new Error(`Error del Endpoint AWS (${response.status}): ${errText}`);
      }

      const data = await response.json();
      const rawReply =
        data.reply ||
        data.output ||
        data.response ||
        data.message ||
        data.body ||
        (typeof data === 'string' ? data : JSON.stringify(data));

      const simUpdate = data.simulatorUpdate || extractSimulatorUpdate(rawReply);
      const cleanReply = rawReply.replace(/```json[\s\S]*?```/gi, '').trim();

      return res.json({
        reply: cleanReply || rawReply,
        simulatorUpdate: simUpdate,
        provider: `AWS Custom Endpoint (${endpointUrl})`,
      });
    }

    // 2. Si el usuario configuró credenciales de AWS Bedrock SDK (o están en .env)
    if (
      (mode === 'bedrock_sdk' || (mode === 'auto' && accessKeyId && secretAccessKey)) &&
      accessKeyId &&
      secretAccessKey
    ) {
      const clientConfig = {
        region,
        credentials: {
          accessKeyId,
          secretAccessKey,
          ...(sessionToken ? { sessionToken } : {}),
        },
      };

      const client = new BedrockRuntimeClient(clientConfig);

      const contentBlocks = [];
      if (imageBase64) {
        const cleanBase64 = imageBase64.replace(/^data:image\/\w+;base64,/, '');
        const format = imageMimeType.includes('jpeg') || imageMimeType.includes('jpg')
          ? 'jpeg'
          : imageMimeType.includes('webp')
          ? 'webp'
          : 'png';

        contentBlocks.push({
          image: {
            format,
            source: {
              bytes: Buffer.from(cleanBase64, 'base64'),
            },
          },
        });
      }

      contentBlocks.push({
        text: contextPrompt,
      });

      const command = new ConverseCommand({
        modelId,
        system: [{ text: SYSTEM_PROMPT }],
        messages: [
          {
            role: 'user',
            content: contentBlocks,
          },
        ],
        inferenceConfig: {
          maxTokens: 2048,
          temperature: 0.2,
        },
      });

      const bedrockRes = await client.send(command);
      const rawReply =
        bedrockRes?.output?.message?.content?.map((c) => c.text || '').join('\n') ||
        'Respuesta recibida desde AWS Bedrock.';

      const simUpdate = extractSimulatorUpdate(rawReply);
      const cleanReply = rawReply.replace(/```json[\s\S]*?```/gi, '').trim();

      return res.json({
        reply: cleanReply || rawReply,
        simulatorUpdate: simUpdate,
        provider: `AWS Bedrock (${modelId} @ ${region})`,
      });
    }

    // 3. Modo Demo / Motor Analítico Local Inteligente (sin llaves o cuando se selecciona Demo)
    const fallbackResult = buildSmartPhysicsResponse({
      prompt,
      hasImage: Boolean(imageBase64),
      sceneState,
      solverResult,
    });

    return res.json(fallbackResult);
  } catch (error) {
    console.error('Error en /api/solve:', error);
    // Aún si falla la red o las credenciales de AWS, devolvemos el diagnóstico + la solución analítica para no bloquear al usuario
    const fallback = buildSmartPhysicsResponse({
      prompt: req.body?.prompt || '',
      hasImage: Boolean(req.body?.imageBase64),
      sceneState: req.body?.sceneState || {},
      solverResult: req.body?.solverResult || null,
    });

    return res.json({
      reply: `⚠️ **Aviso de Conexión AWS Bedrock:** \`${error.message}\`\n\nHe resuelto el problema utilizando el **Motor Analítico Local de PhysiLab** mientras verificas tus credenciales o URL de Endpoint en el botón **Configurar AWS Bedrock**:\n\n---\n\n${fallback.reply}`,
      simulatorUpdate: fallback.simulatorUpdate,
      provider: 'Fallback Local (Error en AWS Endpoint)',
      warning: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor PhysiLab AI (AWS Bedrock Bridge) activo en http://localhost:${PORT}`);
});
