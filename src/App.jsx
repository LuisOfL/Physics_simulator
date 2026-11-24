import React, { useState, useCallback } from 'react';
import {
  Gamepad2,
  Globe2,
  ArrowLeft,
} from 'lucide-react';
import {
  SCENE_TEMPLATES,
  GRAVITY_PRESETS,
  solveMechanicsScene,
} from './physics/physicsEngine';
import LandingPage from './components/LandingPage';
import PhysicsCanvasSimulator from './components/PhysicsCanvasSimulator';
import FreeBodyDiagramInspector from './components/FreeBodyDiagramInspector';
import BedrockPhysicsChat from './components/BedrockPhysicsChat';

export default function App() {
  const [showLanding, setShowLanding] = useState(true);
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
      content: `### Asistente de Mecánica Clásica

Sistema calibrado en **${(currentParams.g || 9.81).toFixed(2)} m/s²**.

Puedes escribir un enunciado físico, pegar una imagen con \`Ctrl+V\` o cargar un ejemplo para generar la simulación 3D y su solución paso a paso.`,
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
          graphData: data.graphData || null,
          graphRag: data.graphRag || null,
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

  if (showLanding) {
    return (
      <LandingPage
        onEnterSimulator={(targetScene) => {
          if (targetScene && SCENE_TEMPLATES[targetScene]) {
            setSceneType(targetScene);
          }
          setShowLanding(false);
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-white/20 selection:text-white">
      {/* Barra de Navegación Superior Limpia */}
      <nav className="sticky top-0 z-40 bg-black/95 backdrop-blur-md border-b border-white/10 px-4 sm:px-6 py-3">
        <div className="max-w-[1680px] mx-auto flex items-center justify-between gap-4 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setShowLanding(true)}
            className="flex items-center gap-2 pr-4 border-r border-white/15 text-white/75 hover:text-white transition cursor-pointer shrink-0"
            title="Volver al inicio"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="text-xs font-semibold tracking-[0.28em] uppercase">PHYSILAB</span>
          </button>

          <div className="flex items-center gap-1.5">
            {sceneKeys.map((key) => {
              const tpl = SCENE_TEMPLATES[key];
              const active = sceneType === tpl.id;
              const isGame = tpl.id === 'sandbox_game';
              const cleanNames = {
                incline_pulley: 'Plano Inclinado',
                horizontal_table: 'Mesa + Polea',
                atwood: 'Atwood',
                spring_block: 'Resorte',
                projectile: 'Proyectil',
                pendulum: 'Péndulo',
                sandbox_game: 'Constructor',
              };

              return (
                <button
                  key={tpl.id}
                  onClick={() => setSceneType(tpl.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-medium whitespace-nowrap transition cursor-pointer ${
                    active
                      ? 'bg-white text-black font-semibold'
                      : 'text-white/55 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isGame && <Gamepad2 className={`w-3.5 h-3.5 ${active ? 'text-black' : 'text-white/60'}`} />}
                  <span>{cleanNames[tpl.id] || tpl.shortName}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Área de Trabajo Principal */}
      <main className="flex-1 max-w-[1680px] w-full mx-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Lado Izquierdo (7 Columnas): Panel del Simulador + Inspector de Fuerzas DCL */}
        <div className="lg:col-span-7 space-y-5">
          {/* Cabecera Simple: Título + Selector compacto de Gravedad */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-1">
            <div>
              <h2 className="font-heading text-base font-medium text-white tracking-[0.08em]">
                {SCENE_TEMPLATES[sceneType]?.name}
              </h2>
            </div>

            <div className="flex items-center gap-1.5 bg-[#0a0a0d] border border-white/15 rounded-full px-3 py-1">
              <Globe2 className="w-3.5 h-3.5 text-white/60" />
              <select
                value={currentParams.g ?? 9.81}
                onChange={(e) => handleParamsChange({ g: Number(e.target.value) })}
                className="bg-transparent text-xs text-white focus:outline-none cursor-pointer pr-1"
                aria-label="Campo gravitatorio"
              >
                {GRAVITY_PRESETS.map((gp) => (
                  <option key={gp.id} value={gp.g} className="bg-black text-white">
                    {gp.name} ({gp.g} m/s²)
                  </option>
                ))}
              </select>
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
        <div className="lg:col-span-5 lg:sticky lg:top-16 lg:h-[calc(100vh-5.5rem)] flex flex-col">
          <div className="flex-1 min-h-0 flex flex-col h-full">
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
