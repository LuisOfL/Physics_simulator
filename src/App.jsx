import React, { useState, useCallback } from 'react';
import {
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

  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      role: 'assistant',
      provider: 'PhysiLab Neural Engine // AWS Bedrock',
      content: `### 🛰️ CONSOLA DE CONTROL Y ANÁLISIS DE MECÁNICA CLÁSICA

El sistema se encuentra en línea y calibrado en **${(currentParams.g || 9.81).toFixed(2)} m/s²**.

**MODOS OPERATIVOS DISPONIBLES:**
- **[01] INFERENCIA POR IMAGEN:** Arrastra o pega (\`Ctrl+V\`) una captura de un examen o diagrama físico. El LLM decodifica variables cinemáticas y dinámicas para sintetizar la escena en vivo.
- **[02] VECTORIZACIÓN DCL:** Los Diagramas de Cuerpo Libre proyectan en tiempo real los tensores de fuerza ($\vec{W}, \vec{N}, \vec{T}, \vec{f}_r, \vec{F}_{ext}$).
- **[03] EXPERIMENTACIÓN MODULAR (🎮):** Ensambla masas y poleas personalizadas en el simulador.`,
    },
  ]);
  const [isChatLoading, setIsChatLoading] = useState(false);

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

      if (data.simulatorUpdate && data.simulatorUpdate.sceneType && SCENE_TEMPLATES[data.simulatorUpdate.sceneType]) {
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

      setMessages((prev) => [
        ...prev,
        {
          id: `bot_${Date.now()}`,
          role: 'assistant',
          content: data.reply || 'Problema procesado e inyectado al simulador.',
          provider: data.provider || 'AWS Bedrock Runtime',
        },
      ]);
    } catch {
      const fallbackText = `### 📊 DEDUCCIÓN ANALÍTICA LOCAL (${SCENE_TEMPLATES[sceneType]?.name})\n- **Estado Dinámico:** ${freshSolver.motionState}\n- **Aceleración Neta:** \`${Number(freshSolver.summary.acceleration || 0).toFixed(3)} m/s²\`\n${freshSolver.summary.tension ? `- **Tensión en Tensor (T):** \`${Number(freshSolver.summary.tension).toFixed(2)} N\`\n` : ''}\n---\n` +
        freshSolver.steps.map((s) => `### ${s.title}\n${s.detail}\n\`\`\`\n${s.formula}\n\`\`\``).join('\n\n');

      setMessages((prev) => [
        ...prev,
        {
          id: `bot_${Date.now()}`,
          role: 'assistant',
          content: fallbackText,
          provider: 'Local Solver Core // Offline',
        },
      ]);
    } finally {
      setIsChatLoading(false);
    }
  };

  const handleSolveCurrentSceneWithAI = () => {
    const templateName = SCENE_TEMPLATES[sceneType]?.name || sceneType;
    const promptDesc =
      sceneType === 'sandbox_game'
        ? `Resuelve analíticamente el sistema personalizado: ${sandboxObjects.length} cuerpos (${sandboxObjects
            .map(
              (o) =>
                `${o.label}=${o.mass}kg en ${
                  o.type === 'hanging_mass' ? 'suspensión vertical' : `rampa θ=${o.angleDeg}° con μ=${o.mu}`
                }`
            )
            .join(', ')}) y ${sandboxRopes.length} acoplamientos con cuerda. Desglosa los Diagramas de Cuerpo Libre (DCL), la sumatoria de fuerzas en coordenadas rotadas y calcula la aceleración y tensión numéricas.`
        : `Resuelve paso a paso el problema actual (${templateName}) con parámetros ${JSON.stringify(
            currentParams
          )}, detallando cada vector de fuerza en el Diagrama de Cuerpo Libre (DCL) y aplicando las leyes de Newton.`;

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

  const sceneKeys = Object.keys(SCENE_TEMPLATES);

  return (
    <div className="min-h-screen bg-[#08090d] text-zinc-100 flex flex-col font-sans selection:bg-amber-400/20 selection:text-amber-200">
      {/* Barra de Navegación de Escenarios Limpia */}
      <nav className="sticky top-0 z-40 bg-[#0d0f14]/95 backdrop-blur-md border-b border-[#202430] px-3 sm:px-5 py-2">
        <div className="max-w-[1680px] mx-auto flex items-center gap-1.5 overflow-x-auto pb-0.5 scrollbar-none">
          {sceneKeys.map((key, idx) => {
            const tpl = SCENE_TEMPLATES[key];
            const active = sceneType === tpl.id;
            const isGame = tpl.id === 'sandbox_game';
            const codeNum = `0${idx + 1}`.slice(-2);

            return (
              <button
                key={tpl.id}
                onClick={() => setSceneType(tpl.id)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded text-[11.5px] font-tech font-semibold whitespace-nowrap transition cursor-pointer border ${
                  active
                    ? isGame
                      ? 'bg-[#1b172a] text-purple-300 border-purple-500/70 shadow-sm shadow-purple-500/20'
                      : 'bg-[#171b26] text-amber-300 border-amber-400/60 shadow-xs'
                    : isGame
                    ? 'bg-[#12111d] text-purple-400/70 border-[#28213a] hover:text-purple-300 hover:border-purple-500/40'
                    : 'bg-[#0f1118] text-zinc-400 border-[#1f2330] hover:text-zinc-200 hover:border-[#2e3447]'
                }`}
              >
                <span className={`text-[10px] font-mono opacity-60 ${active ? 'text-amber-400' : ''}`}>
                  [{codeNum}]
                </span>
                {isGame && <Gamepad2 className="w-3.5 h-3.5 text-purple-400" />}
                <span>{tpl.shortName.toUpperCase()}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Área de Trabajo Principal */}
      <main className="flex-1 max-w-[1680px] w-full mx-auto p-3 sm:p-5 grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Lado Izquierdo (7 Columnas): Panel del Simulador + Inspector de Fuerzas DCL */}
        <div className="lg:col-span-7 space-y-4">
          {/* Cabecera Técnica del Módulo Activo + Selector de Gravedad Separado */}
          <div className="relative bg-[#0d0f15] border border-[#202534] rounded-xl px-4 py-3 flex flex-wrap items-center justify-between gap-3 overflow-hidden">
            <div className="absolute top-1.5 left-1.5 w-1 h-1 rounded-full bg-[#353c52]" />
            <div className="absolute top-1.5 right-1.5 w-1 h-1 rounded-full bg-[#353c52]" />
            <div className="absolute bottom-1.5 left-1.5 w-1 h-1 rounded-full bg-[#353c52]" />
            <div className="absolute bottom-1.5 right-1.5 w-1 h-1 rounded-full bg-[#353c52]" />

            <div className="flex-1 min-w-[280px]">
              <div className="flex items-center gap-2">
                <span className="font-tech text-[10px] uppercase px-2 py-0.5 rounded bg-amber-400/10 text-amber-300 border border-amber-400/30">
                  {SCENE_TEMPLATES[sceneType]?.category}
                </span>
                <h2 className="font-heading text-sm font-bold text-zinc-100 uppercase tracking-wide">
                  {SCENE_TEMPLATES[sceneType]?.name}
                </h2>
              </div>
              <p className="text-[11.5px] text-zinc-400 mt-1 max-w-2xl leading-relaxed">
                {SCENE_TEMPLATES[sceneType]?.description}
              </p>
            </div>

            {/* Selector de Campo Gravitatorio Ubicado Abajo y Separado */}
            <div className="flex items-center gap-1 bg-[#12151e] border border-[#232838] p-1 rounded-lg shrink-0">
              <div className="flex items-center gap-1.5 px-2 text-[10px] font-tech text-zinc-400 uppercase tracking-wider">
                <Globe2 className="w-3.5 h-3.5 text-amber-400/90" />
                <span>CAMPO g:</span>
              </div>
              {GRAVITY_PRESETS.map((gp) => {
                const isSelected = Math.abs((currentParams.g ?? 9.81) - gp.g) < 0.05;
                return (
                  <button
                    key={gp.id}
                    onClick={() => handleParamsChange({ g: gp.g })}
                    className={`font-tech text-[10.5px] px-2 py-1 rounded transition cursor-pointer ${
                      isSelected
                        ? 'bg-amber-400/20 text-amber-300 font-bold border border-amber-400/50 shadow-xs'
                        : 'text-zinc-400 hover:text-zinc-200 hover:bg-[#181d2a]'
                    }`}
                    title={`${gp.name}: ${gp.g} m/s²`}
                  >
                    {gp.name.toUpperCase()} <span className="opacity-70 text-[9px]">[{gp.g}]</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Simulador Físico Oscuro con Estética de Consola de Laboratorio */}
          <PhysicsCanvasSimulator
            sceneType={sceneType}
            params={currentParams}
            onParamsChange={handleParamsChange}
            sandboxObjects={sandboxObjects}
            setSandboxObjects={setSandboxObjects}
            sandboxRopes={sandboxRopes}
            setSandboxRopes={setSandboxRopes}
            onSolveCurrentSceneWithAI={handleSolveCurrentSceneWithAI}
            onLiveSolverUpdate={handleLiveSolverUpdate}
          />

          {/* Inspector Aislado de Vectores y Ecuaciones Newtonianas */}
          <FreeBodyDiagramInspector solver={liveSolver} />
        </div>

        {/* Lado Derecho (5 Columnas): Consola de Inferencia IA & Visión */}
        <div className="lg:col-span-5 flex flex-col min-h-[640px]">
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

      {/* Pie de Página Minimalista de Consola de Laboratorio */}
      <footer className="border-t border-[#1b1f2b] bg-[#090b10] px-4 py-2 text-[11px] font-tech text-zinc-500 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-4">
          <span>PHYSILAB BENCH // CLASSICAL DYNAMICS SIMULATOR</span>
          <span className="hidden sm:inline text-zinc-600">|</span>
          <span className="hidden sm:inline">COORDINATES: DCL-LOCAL (X&apos;-Y&apos;)</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-zinc-400">AWS BEDROCK RUNTIME: <strong className="text-emerald-400 font-normal">ENABLED</strong></span>
        </div>
      </footer>
    </div>
  );
}
