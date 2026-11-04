import React, { useState, useCallback } from 'react';
import {
  Atom,
  Gamepad2,
  Globe2,
} from 'lucide-react';
import {
  SCENE_TEMPLATES,
  GRAVITY_PRESETS,
  solveMechanicsScene,
} from './physics/physicsEngine';
import PhysicsCanvasSimulator from './components/PhysicsCanvasSimulator';
import FreeBodyDiagramInspector from './components/FreeBodyDiagramInspector';
import BedrockPhysicsChat from './components/BedrockPhysicsChat';

export default function App() {
  const [sceneType, setSceneType] = useState('incline_pulley');
  const [paramsByScene, setParamsByScene] = useState(() => {
    const initial = {};
    Object.keys(SCENE_TEMPLATES).forEach((k) => {
      initial[k] = { ...SCENE_TEMPLATES[k].params };
    });
    return initial;
  });

  // Objetos iniciales del Modo Juego / Constructor Libre
  const [sandboxObjects, setSandboxObjects] = useState([
    {
      id: 'b1',
      type: 'block',
      label: 'm₁',
      mass: 6.0,
      angleDeg: 28,
      mu: 0.15,
      fExt: 0,
      x: 270,
      y: 255,
    },
    {
      id: 'b2',
      type: 'hanging_mass',
      label: 'm₂',
      mass: 4.5,
      angleDeg: 0,
      mu: 0,
      fExt: 0,
      x: 560,
      y: 265,
    },
  ]);

  const [sandboxRopes, setSandboxRopes] = useState([
    { id: 'r1', fromId: 'b1', toId: 'b2' },
  ]);

  const [customCanvasCode, setCustomCanvasCode] = useState(`// Simulación generada por IA: Colisión Elástica 1D con Vectores DCL
const floorY = 310;
ctx.strokeStyle = '#64748b';
ctx.lineWidth = 3;
ctx.beginPath();
ctx.moveTo(60, floorY);
ctx.lineTo(W - 60, floorY);
ctx.stroke();

const m1 = params.m1 || 4;
const m2 = params.m2 || 2.5;
const g = params.g || 9.81;
const cycle = (t % 4) - 2; // oscila entre -2 y 2
const gap = Math.abs(cycle) * 140;

const x1 = W / 2 - 36 - (cycle < 0 ? gap : gap * (m2 / m1) * 0.7);
const x2 = W / 2 + 36 + (cycle > 0 ? gap : gap * (m1 / m2) * 0.4);
const y = floorY - 30;

// Esfera 1
ctx.fillStyle = '#0284c7';
ctx.beginPath();
ctx.arc(x1, y, 28, 0, Math.PI * 2);
ctx.fill();
ctx.fillStyle = '#fff';
ctx.font = 'bold 12px monospace';
ctx.fillText('m1=' + m1 + 'kg', x1 - 24, y + 4);

// Esfera 2
ctx.fillStyle = '#e11d48';
ctx.beginPath();
ctx.arc(x2, y, 24, 0, Math.PI * 2);
ctx.fill();
ctx.fillStyle = '#fff';
ctx.fillText('m2=' + m2 + 'kg', x2 - 22, y + 4);

// Vectores DCL (Peso y Normal) + Impulso en el choque
drawVector(x1, y, -90, m1 * g * 0.7, '#f43f5e', 'W1');
drawVector(x1, y, 90, m1 * g * 0.7, '#38bdf8', 'N1');
drawVector(x2, y, -90, m2 * g * 0.7, '#f43f5e', 'W2');
drawVector(x2, y, 90, m2 * g * 0.7, '#38bdf8', 'N2');
if (Math.abs(cycle) < 0.18) {
  drawVector(x1, y, 180, 45, '#fbbf24', 'F_21');
  drawVector(x2, y, 0, 45, '#fbbf24', 'F_12');
}`);

  // Configuración automática de AWS Bedrock (se lee desde variables de entorno en el servidor)
  const awsConfig = { mode: 'auto' };

  const currentParams = paramsByScene[sceneType] || SCENE_TEMPLATES.incline_pulley.params;

  const [liveSolver, setLiveSolver] = useState(() =>
    solveMechanicsScene('incline_pulley', SCENE_TEMPLATES.incline_pulley.params, {})
  );

  const handleParamsChange = (patch) => {
    setParamsByScene((prev) => ({
      ...prev,
      [sceneType]: {
        ...prev[sceneType],
        ...patch,
      },
    }));
  };

  const handleLiveSolverUpdate = useCallback((solverData) => {
    setLiveSolver(solverData);
  }, []);

  // Mensajes iniciales del Chatbot
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      role: 'assistant',
      provider: 'PhysiLab AI + AWS Bedrock Ready',
      content: `¡Bienvenido a **PhysiLab AI**! Soy tu laboratorio interactivo y solucionador visual de Física Mecánica.

Puedes usar la plataforma de **3 formas combinadas**:
- **1. Sube o pega una imagen de un problema**: Extraigo los datos del diagrama, construyo la escena en el simulador en tiempo real y te muestro los **Diagramas de Cuerpo Libre (DCL)** junto con la solución paso a paso.
- **2. Explora y modifica cualquier fenómeno en vivo**: Usa los deslizadores para cambiar masas ($m_1, m_2$), ángulos ($\theta$), fricción ($\mu_k$) o gravedad y observa cómo se ajustan los vectores de fuerza ($\vec{W}, \vec{N}, \vec{T}, \vec{f}_r$).
- **3. Modo Juego / Constructor Libre (🎮)**: Arrastra bloques, rampas, poleas y únelos con cuerdas a tu gusto; luego presiona **"Resolver Escena con IA"** para que resuelva el problema exacto que armaste.`,
    },
  ]);
  const [isChatLoading, setIsChatLoading] = useState(false);

  // Enviar mensaje o imagen al backend de AWS Bedrock (con fallback local automático)
  const handleSendMessage = async ({ text, imageBase64 = null, imageMimeType = 'image/png' }) => {
    const userMsg = {
      id: `user_${Date.now()}`,
      role: 'user',
      content: text,
      image: imageBase64,
    };
    setMessages((prev) => [...prev, userMsg]);
    setIsChatLoading(true);

    const freshSolver = solveMechanicsScene(sceneType, currentParams, {
      sandboxObjects,
      sandboxRopes,
    });

    try {
      const response = await fetch('/api/solve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: text,
          imageBase64,
          imageMimeType,
          sceneState: {
            sceneType,
            params: currentParams,
            sandboxObjects,
            sandboxRopes,
          },
          solverResult: freshSolver,
          awsConfig,
        }),
      });

      const data = await response.json();

      // Si el LLM o el analizador devolvió una actualización de escena para el simulador, aplicarla de inmediato
      if (data.simulatorUpdate) {
        if (data.simulatorUpdate.customCanvasCode) {
          setCustomCanvasCode(data.simulatorUpdate.customCanvasCode);
          setSceneType('ai_custom_code');
        } else if (data.simulatorUpdate.sceneType && SCENE_TEMPLATES[data.simulatorUpdate.sceneType]) {
          const nextType = data.simulatorUpdate.sceneType;
          setSceneType(nextType);
          if (data.simulatorUpdate.params) {
            setParamsByScene((prev) => ({
              ...prev,
              [nextType]: {
                ...prev[nextType],
                ...data.simulatorUpdate.params,
              },
            }));
          }
        }
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `bot_${Date.now()}`,
          role: 'assistant',
          content: data.reply || 'Problema analizado y sincronizado con el simulador.',
          provider: data.provider || 'AWS Bedrock / PhysiLab Engine',
        },
      ]);
    } catch {
      // Si el servidor Express no está corriendo, resolver directamente en el cliente
      const fallbackText = `### 📊 Solución Analítica Instantánea (${SCENE_TEMPLATES[sceneType]?.name})\n- **Estado:** ${freshSolver.motionState}\n- **Aceleración:** \`${Number(freshSolver.summary.acceleration || 0).toFixed(3)} m/s²\`\n${freshSolver.summary.tension ? `- **Tensión (T):** \`${Number(freshSolver.summary.tension).toFixed(2)} N\`\n` : ''}\n---\n` +
        freshSolver.steps.map((s) => `### ${s.title}\n${s.detail}\n\`\`\`\n${s.formula}\n\`\`\``).join('\n\n');

      setMessages((prev) => [
        ...prev,
        {
          id: `bot_${Date.now()}`,
          role: 'assistant',
          content: fallbackText,
          provider: 'Motor Físico Local (Cliente)',
        },
      ]);
    } finally {
      setIsChatLoading(false);
    }
  };

  // Botón directo: "Resolver lo que hay actualmente en el simulador / Modo Juego"
  const handleSolveCurrentSceneWithAI = () => {
    const templateName = SCENE_TEMPLATES[sceneType]?.name || sceneType;
    const promptDesc =
      sceneType === 'sandbox_game'
        ? `Resuelve paso a paso el sistema que armé en el Modo Juego/Constructor: tengo ${sandboxObjects.length} cuerpos (${sandboxObjects
            .map(
              (o) =>
                `${o.label}=${o.mass}kg en ${
                  o.type === 'hanging_mass' ? 'suspensión vertical' : `rampa de ${o.angleDeg}° con μ=${o.mu}`
                }`
            )
            .join(', ')}) y ${sandboxRopes.length} cuerda(s) conectadas. Explica los Diagramas de Cuerpo Libre y calcula la aceleración y tensión.`
        : `Explica detalladamente y resuelve el problema actual del simulador (${templateName}) con parámetros ${JSON.stringify(
            currentParams
          )}, mostrando cada fuerza del Diagrama de Cuerpo Libre (DCL) y las ecuaciones de Newton.`;

    handleSendMessage({ text: promptDesc });
  };

  const handleSelectSampleProblem = (sample) => {
    if (sample.sceneType && SCENE_TEMPLATES[sample.sceneType]) {
      setSceneType(sample.sceneType);
      setParamsByScene((prev) => ({
        ...prev,
        [sample.sceneType]: {
          ...prev[sample.sceneType],
          ...sample.params,
        },
      }));
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Barra de Navegación Principal */}
      <header className="sticky top-0 z-30 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/90 px-4 lg:px-6 py-3">
        <div className="max-w-[1600px] mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Logo y Título */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-cyan-400 via-sky-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-500/25">
              <Atom className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base sm:text-lg font-extrabold tracking-tight bg-gradient-to-r from-white via-cyan-200 to-sky-400 bg-clip-text text-transparent">
                  PhysiLab AI
                </h1>
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                  AWS Bedrock + Simulador DCL
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                Resolución de problemas por Imagen, Diagramas de Cuerpo Libre en Vivo y Constructor de Física
              </p>
            </div>
          </div>

          {/* Selector de Gravedad Planetaria */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="hidden md:flex items-center gap-1 bg-slate-900 border border-slate-800 rounded-xl p-1">
              <Globe2 className="w-3.5 h-3.5 text-slate-400 ml-2 mr-1" />
              {GRAVITY_PRESETS.map((gp) => {
                const isSelected = Math.abs((currentParams.g ?? 9.81) - gp.g) < 0.05;
                return (
                  <button
                    key={gp.id}
                    onClick={() => handleParamsChange({ g: gp.g })}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium transition cursor-pointer ${
                      isSelected
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {gp.name} ({gp.g})
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Pestañas de Escenarios del Simulador + Modo Juego */}
        <div className="max-w-[1600px] mx-auto mt-3 flex items-center gap-1.5 overflow-x-auto pb-1">
          {Object.values(SCENE_TEMPLATES).map((tpl) => {
            const active = sceneType === tpl.id;
            const isGame = tpl.id === 'sandbox_game';
            return (
              <button
                key={tpl.id}
                onClick={() => setSceneType(tpl.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer border ${
                  active
                    ? isGame
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-indigo-400 shadow-lg shadow-indigo-500/25'
                      : 'bg-cyan-500/20 text-cyan-200 border-cyan-500/50 shadow-sm'
                    : isGame
                    ? 'bg-indigo-950/50 text-indigo-300 border-indigo-500/30 hover:bg-indigo-900/50'
                    : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                {isGame && <Gamepad2 className="w-3.5 h-3.5" />}
                <span>{tpl.shortName}</span>
              </button>
            );
          })}
        </div>
      </header>

      {/* Contenido Principal en Grid de 12 Columnas */}
      <main className="flex-1 max-w-[1600px] w-full mx-auto p-4 lg:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Columna Izquierda (7 cols): Simulador Visual + Inspector de Diagramas de Cuerpo Libre */}
        <div className="lg:col-span-7 space-y-5">
          {/* Banner descriptivo de la escena activa */}
          <div className="bg-slate-900/80 border border-slate-800/90 rounded-2xl px-4 py-3 flex flex-wrap items-center justify-between gap-2">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono uppercase px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                  {SCENE_TEMPLATES[sceneType]?.category}
                </span>
                <h2 className="text-sm font-bold text-white">
                  {SCENE_TEMPLATES[sceneType]?.name}
                </h2>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                {SCENE_TEMPLATES[sceneType]?.description}
              </p>
            </div>
          </div>

          {/* Simulador Interactivo con Vectores DCL superpuestos */}
          <PhysicsCanvasSimulator
            sceneType={sceneType}
            params={currentParams}
            onParamsChange={handleParamsChange}
            sandboxObjects={sandboxObjects}
            setSandboxObjects={setSandboxObjects}
            sandboxRopes={sandboxRopes}
            setSandboxRopes={setSandboxRopes}
            customCanvasCode={customCanvasCode}
            setCustomCanvasCode={setCustomCanvasCode}
            onSolveCurrentSceneWithAI={handleSolveCurrentSceneWithAI}
            onLiveSolverUpdate={handleLiveSolverUpdate}
          />

          {/* Inspector de Diagramas de Cuerpo Libre Aislados y Ecuaciones Paso a Paso */}
          <FreeBodyDiagramInspector solver={liveSolver} />
        </div>

        {/* Columna Derecha (5 cols): Chatbot IA & Analizador de Problemas de Física */}
        <div className="lg:col-span-5 flex flex-col min-h-[620px]">
          <div className="flex-1 flex flex-col h-full">
            <BedrockPhysicsChat
              messages={messages}
              isLoading={isChatLoading}
              onSendMessage={handleSendMessage}
              onSelectSampleProblem={handleSelectSampleProblem}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
