import React, { useEffect, useRef, useState } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  Eye,
  Plus,
  Link2,
  Trash2,
  Sparkles,
  Sliders,
  Hand,
  Box,
  Layers,
  Camera,
} from 'lucide-react';
import { solveMechanicsScene } from '../physics/physicsEngine';
import Physics3DViewport from './Physics3DViewport';

export default function PhysicsCanvasSimulator({
  sceneType,
  params,
  onParamsChange,
  sandboxObjects,
  setSandboxObjects,
  sandboxRopes,
  setSandboxRopes,
  onSolveCurrentSceneWithAI,
  onLiveSolverUpdate,
}) {
  const canvasRef = useRef(null);
  const solverRef = useRef(null);
  const [viewMode, setViewMode] = useState('3d');
  const [resetCamTrigger, setResetCamTrigger] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [timeScale, setTimeScale] = useState(1.0);
  const [showVectors, setShowVectors] = useState(true);
  const [showComponents, setShowComponents] = useState(true);
  const [showValues, setShowValues] = useState(true);

  // Estado para el Modo Juego / Constructor Libre
  const [selectedObjId, setSelectedObjId] = useState('b1');
  const [connectingFromId, setConnectingFromId] = useState(null);
  const dragRef = useRef({ draggingId: null, offsetX: 0, offsetY: 0 });

  // Estado cinemático y de partículas realista a 60 FPS
  const simRef = useRef({
    t: 0,
    s: 0, // desplazamiento físico en metros
    v: 0, // velocidad lineal en m/s
    pulleyAngle: 0, // rotación acumulada de la polea en radianes
    thermalWork: 0, // energía disipada por fricción (J)
    x: params.x0 ?? 2.0, // elongación de resorte (m)
    px: 0, // proyectil x (m)
    py: params.h0 ?? 2.0, // proyectil y (m)
    vx: 0,
    vy: 0,
    trail: [],
    strobePoints: [],
    lastStrobeT: 0,
    theta: ((params.angle0 ?? 40) * Math.PI) / 180,
    omega: 0,
    pendulumTrail: [],
    particles: [], // chispas/polvo de fricción realista
  });

  const resetSimulation = () => {
    const thetaRad = ((params.angle ?? 45) * Math.PI) / 180;
    const v0 = Number(params.v0 ?? 22);
    const h0 = Number(params.h0 ?? 2.0);
    simRef.current = {
      t: 0,
      s: 0,
      v: 0,
      pulleyAngle: 0,
      thermalWork: 0,
      x: Number(params.x0 ?? 2.2),
      px: 0,
      py: h0,
      vx: v0 * Math.cos(thetaRad),
      vy: v0 * Math.sin(thetaRad),
      trail: [{ x: 0, y: h0 }],
      strobePoints: [{ x: 0, y: h0, vx: v0 * Math.cos(thetaRad), vy: v0 * Math.sin(thetaRad), t: 0 }],
      lastStrobeT: 0,
      theta: ((Number(params.angle0 ?? 40)) * Math.PI) / 180,
      omega: 0,
      pendulumTrail: [],
      particles: [],
    };
  };

  useEffect(() => {
    resetSimulation();
  }, [
    sceneType,
    params.m1,
    params.m2,
    params.angle,
    params.muK,
    params.fExt,
    params.k,
    params.x0,
    params.v0,
    params.h0,
    params.length,
    params.angle0,
    params.g,
  ]);

  useEffect(() => {
    let animationFrameId;
    let lastTime = performance.now();

    const renderLoop = (now) => {
      const rawDt = Math.min(0.035, (now - lastTime) / 1000);
      lastTime = now;
      const dt = isPlaying ? rawDt * timeScale : 0;

      const sim = simRef.current;
      const solver = solveMechanicsScene(sceneType, params, {
        v: sim.v,
        x: sim.x,
        vy: sim.vy,
        theta: sim.theta,
        omega: sim.omega,
        sandboxObjects,
        sandboxRopes,
      });

      solverRef.current = solver;
      if (onLiveSolverUpdate) {
        onLiveSolverUpdate(solver);
      }

      if (dt > 0) {
        sim.t += dt;

        // Actualizar partículas de fricción / impacto
        sim.particles = sim.particles
          .map((p) => ({
            ...p,
            x: p.x + p.vx * dt,
            y: p.y + p.vy * dt,
            vy: p.vy + 180 * dt,
            life: p.life - dt,
          }))
          .filter((p) => p.life > 0);

        if (
          sceneType === 'incline_pulley' ||
          sceneType === 'horizontal_table' ||
          sceneType === 'atwood' ||
          sceneType === 'sandbox_game'
        ) {
          const a = Number(solver.summary.acceleration || 0);
          // Integración Velocity-Verlet / Semi-implicit Euler en metros reales
          sim.v += a * dt;
          const ds = sim.v * dt;
          sim.s += ds;
          sim.pulleyAngle += (ds * 28) / 22; // rotación física real de la polea

          const fk = Number(solver.summary.friction || 0);
          if (Math.abs(sim.v) > 0.05 && fk > 0.1) {
            sim.thermalWork += fk * Math.abs(ds);
          }

          // Topes físicos realistas con restitución inelástica (amortiguamiento de impacto)
          const maxMeters = 2.6;
          if (sim.s > maxMeters) {
            sim.s = maxMeters;
            sim.v = -sim.v * 0.22; // rebote realista amortiguado
            if (Math.abs(sim.v) < 0.15) sim.v = 0;
          } else if (sim.s < -maxMeters) {
            sim.s = -maxMeters;
            sim.v = -sim.v * 0.22;
            if (Math.abs(sim.v) < 0.15) sim.v = 0;
          }
        } else if (sceneType === 'spring_block') {
          const m = Math.max(0.1, Number(params.m1 ?? 3));
          const k = Math.max(1, Number(params.k ?? 45));
          const muK = Math.max(0, Number(params.muK ?? 0.04));
          const g = Number(params.g ?? 9.81);
          // Sub-stepping para precisión en el oscilador armónico
          const steps = 4;
          const subDt = dt / steps;
          for (let i = 0; i < steps; i++) {
            const fk = Math.abs(sim.v) > 0.008 ? -Math.sign(sim.v) * muK * m * g : 0;
            const a = (-k * sim.x + fk) / m;
            sim.v += a * subDt;
            const dx = sim.v * subDt;
            sim.x += dx;
            sim.thermalWork += Math.abs(fk * dx);
          }
        } else if (sceneType === 'projectile') {
          const g = Number(params.g ?? 9.81);
          if (sim.py > 0 || sim.vy > 0 || Math.abs(sim.vx) > 0.05) {
            sim.px += sim.vx * dt;
            sim.vy -= g * dt;
            sim.py += sim.vy * dt;

            // Rebote realista con el suelo y fricción de rodadura
            if (sim.py <= 0) {
              sim.py = 0;
              if (Math.abs(sim.vy) > 1.2) {
                sim.vy = -sim.vy * 0.35; // coeficiente de restitución con el suelo
                sim.vx *= 0.78;
              } else {
                sim.vy = 0;
                sim.vx *= Math.max(0, 1 - 2.5 * dt);
                if (Math.abs(sim.vx) < 0.08) sim.vx = 0;
              }
            }

            if (
              sim.trail.length === 0 ||
              Math.hypot(
                sim.px - sim.trail[sim.trail.length - 1].x,
                sim.py - sim.trail[sim.trail.length - 1].y
              ) > 0.35
            ) {
              sim.trail.push({ x: sim.px, y: sim.py });
            }

            // Puntos estroboscópicos cada 0.45 s para apreciar cinemática 2D
            if (sim.t - sim.lastStrobeT >= 0.45 && (sim.py > 0 || Math.abs(sim.vy) > 0.2)) {
              sim.lastStrobeT = sim.t;
              sim.strobePoints.push({
                x: sim.px,
                y: sim.py,
                vx: sim.vx,
                vy: sim.vy,
                t: sim.t,
              });
            }
          }
        } else if (sceneType === 'pendulum') {
          const g = Number(params.g ?? 9.81);
          const L = Math.max(0.5, Number(params.length ?? 3.5));
          const damping = Number(params.damping ?? 0.02);
          // Integración RK2 / punto medio para péndulo no lineal exacto
          const steps = 4;
          const subDt = dt / steps;
          for (let i = 0; i < steps; i++) {
            const alpha = -(g / L) * Math.sin(sim.theta) - damping * sim.omega;
            sim.omega += alpha * subDt;
            sim.theta += sim.omega * subDt;
          }
          sim.pendulumTrail.push({ theta: sim.theta });
          if (sim.pendulumTrail.length > 45) sim.pendulumTrail.shift();
        }
      }

      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        drawRealisticScene(ctx, canvas.width, canvas.height, sceneType, params, sim, solver, {
          showVectors,
          showComponents,
          showValues,
          sandboxObjects,
          sandboxRopes,
          selectedObjId,
          connectingFromId,
          isPlaying,
        });
      }

      animationFrameId = requestAnimationFrame(renderLoop);
    };

    animationFrameId = requestAnimationFrame(renderLoop);
    return () => cancelAnimationFrame(animationFrameId);
  }, [
    sceneType,
    params,
    isPlaying,
    timeScale,
    showVectors,
    showComponents,
    showValues,
    sandboxObjects,
    sandboxRopes,
    selectedObjId,
    connectingFromId,
  ]);

  const handleMouseDown = (e) => {
    if (sceneType !== 'sandbox_game') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const mx = (e.clientX - rect.left) * scaleX;
    const my = (e.clientY - rect.top) * scaleY;

    for (let i = sandboxObjects.length - 1; i >= 0; i--) {
      const obj = sandboxObjects[i];
      const dist = Math.hypot(mx - obj.x, my - obj.y);
      if (dist <= 48) {
        if (connectingFromId) {
          if (connectingFromId !== obj.id) {
            const exists = sandboxRopes.some(
              (r) =>
                (r.fromId === connectingFromId && r.toId === obj.id) ||
                (r.fromId === obj.id && r.toId === connectingFromId)
            );
            if (!exists) {
              setSandboxRopes((prev) => [
                ...prev,
                { id: `rope_${Date.now()}`, fromId: connectingFromId, toId: obj.id },
              ]);
            }
          }
          setConnectingFromId(null);
          return;
        }

        setSelectedObjId(obj.id);
        dragRef.current = {
          draggingId: obj.id,
          offsetX: mx - obj.x,
          offsetY: my - obj.y,
        };
        return;
      }
    }
  };

  const handleMouseMove = (e) => {
    if (sceneType !== 'sandbox_game' || !dragRef.current.draggingId) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const mx = (e.clientX - rect.left) * scaleX;
    const my = (e.clientY - rect.top) * scaleY;

    const id = dragRef.current.draggingId;
    setSandboxObjects((prev) =>
      prev.map((o) =>
        o.id === id
          ? {
              ...o,
              x: Math.max(60, Math.min(canvas.width - 60, mx - dragRef.current.offsetX)),
              y: Math.max(70, Math.min(canvas.height - 60, my - dragRef.current.offsetY)),
            }
          : o
      )
    );
  };

  const handleMouseUp = () => {
    dragRef.current.draggingId = null;
  };

  const addSandboxBlock = (type = 'block') => {
    const idx = sandboxObjects.length + 1;
    const newObj =
      type === 'hanging_mass'
        ? {
            id: `obj_${Date.now()}`,
            type: 'hanging_mass',
            label: `m_${idx}`,
            mass: 4.5,
            angleDeg: 0,
            mu: 0,
            fExt: 0,
            x: 580,
            y: 255,
          }
        : {
            id: `obj_${Date.now()}`,
            type: 'block',
            label: `m_${idx}`,
            mass: 6.0,
            angleDeg: idx === 1 ? 25 : 0,
            mu: 0.15,
            fExt: 0,
            x: 240 + (idx % 3) * 95,
            y: 235,
          };
    setSandboxObjects((prev) => [...prev, newObj]);
    setSelectedObjId(newObj.id);
    simRef.current.s = 0;
    simRef.current.v = 0;
  };

  const selectedSandboxObj =
    sandboxObjects.find((o) => o.id === selectedObjId) || sandboxObjects[0];

  const updateSelectedSandboxObj = (patch) => {
    if (!selectedSandboxObj) return;
    setSandboxObjects((prev) =>
      prev.map((o) => (o.id === selectedSandboxObj.id ? { ...o, ...patch } : o))
    );
    simRef.current.s = 0;
    simRef.current.v = 0;
  };

  const deleteSelectedSandboxObj = () => {
    if (!selectedSandboxObj) return;
    const id = selectedSandboxObj.id;
    setSandboxObjects((prev) => prev.filter((o) => o.id !== id));
    setSandboxRopes((prev) => prev.filter((r) => r.fromId !== id && r.toId !== id));
  };

  return (
    <div className="flex flex-col bg-[#050507] border border-white/15 rounded-2xl overflow-hidden">
      {/* Barra superior minimalista (una sola fila limpia) */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-2.5 bg-black border-b border-white/10">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition cursor-pointer ${
              isPlaying
                ? 'bg-white text-black hover:bg-white/90'
                : 'bg-white/10 text-white border border-white/25 hover:bg-white/20'
            }`}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            {isPlaying ? 'Pausar' : 'Iniciar'}
          </button>

          <button
            onClick={resetSimulation}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs text-white/70 hover:text-white hover:bg-white/10 transition cursor-pointer"
            title="Reiniciar simulación"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reiniciar
          </button>

          <button
            onClick={() => setTimeScale(timeScale === 1 ? 0.5 : timeScale === 0.5 ? 0.25 : 1)}
            className="px-2.5 py-1 rounded-full text-xs text-white/70 hover:text-white border border-white/15 hover:border-white/35 transition cursor-pointer font-tech"
            title="Cambiar velocidad de simulación"
          >
            {timeScale}x
          </button>
        </div>

        {/* Vista 3D/2D y Vectores */}
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-[#0a0a0d] border border-white/15 rounded-full p-0.5 text-xs">
            <button
              onClick={() => setViewMode('3d')}
              className={`flex items-center gap-1 px-3 py-1 rounded-full transition cursor-pointer ${
                viewMode === '3d' ? 'bg-white text-black font-semibold' : 'text-white/60 hover:text-white'
              }`}
            >
              <Box className="w-3 h-3" />
              3D
            </button>
            <button
              onClick={() => setViewMode('2d')}
              className={`flex items-center gap-1 px-3 py-1 rounded-full transition cursor-pointer ${
                viewMode === '2d' ? 'bg-white text-black font-semibold' : 'text-white/60 hover:text-white'
              }`}
            >
              <Layers className="w-3 h-3" />
              2D
            </button>
          </div>

          <button
            onClick={() => setShowVectors(!showVectors)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs border transition cursor-pointer ${
              showVectors
                ? 'bg-white/15 text-white border-white/35'
                : 'text-white/50 border-white/15 hover:text-white'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            Vectores
          </button>
        </div>
      </div>

      {/* Barra especial cuando está activo el Modo Juego / Constructor Libre */}
      {sceneType === 'sandbox_game' && (
        <div className="flex flex-wrap items-center justify-between gap-2 px-3.5 py-2 bg-[#120f1f] border-b border-purple-500/30 font-tech">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[11px] font-bold text-purple-300 flex items-center gap-1 mr-1 uppercase">
              <Hand className="w-3.5 h-3.5" /> Ensamblador:
            </span>
            <button
              onClick={() => addSandboxBlock('block')}
              className="flex items-center gap-1 px-2.5 py-1 rounded text-[11px] bg-sky-500/15 hover:bg-sky-500/25 text-sky-200 border border-sky-500/40 transition cursor-pointer"
            >
              <Plus className="w-3 h-3" /> + BLOQUE RAMPA
            </button>
            <button
              onClick={() => addSandboxBlock('hanging_mass')}
              className="flex items-center gap-1 px-2.5 py-1 rounded text-[11px] bg-rose-500/15 hover:bg-rose-500/25 text-rose-200 border border-rose-500/40 transition cursor-pointer"
            >
              <Plus className="w-3 h-3" /> + MASA COLGANTE
            </button>
            <button
              onClick={() => {
                if (connectingFromId) {
                  setConnectingFromId(null);
                } else if (selectedSandboxObj) {
                  setConnectingFromId(selectedSandboxObj.id);
                }
              }}
              className={`flex items-center gap-1 px-2.5 py-1 rounded text-[11px] border transition cursor-pointer ${
                connectingFromId
                  ? 'bg-amber-400 text-black font-bold border-amber-300 animate-pulse'
                  : 'bg-amber-400/15 hover:bg-amber-400/25 text-amber-200 border-amber-400/40'
              }`}
            >
              <Link2 className="w-3 h-3" />
              {connectingFromId
                ? 'CLICK EN 2° CUERPO PARA UNIR CUERDA...'
                : 'ACOPLAR CON CUERDA'}
            </button>
            {sandboxRopes.length > 0 && (
              <button
                onClick={() => setSandboxRopes([])}
                className="px-2 py-1 rounded text-[10.5px] bg-[#1a1e2b] hover:bg-[#252c3f] text-zinc-400 border border-[#2b3348] cursor-pointer"
              >
                CORTAR TENSORES
              </button>
            )}
          </div>

          <button
            onClick={onSolveCurrentSceneWithAI}
            className="flex items-center gap-1.5 px-3 py-1 rounded text-[11px] font-bold bg-purple-500/25 hover:bg-purple-500/40 text-purple-200 border border-purple-500/60 shadow-sm transition cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            RESOLVER ENSAMBLE CON IA
          </button>
        </div>
      )}

      {/* Lienzo Principal 3D (Three.js) o HTML5 Canvas 2D */}
      <div className="relative w-full aspect-[16/9] max-h-[480px] bg-slate-950 select-none overflow-hidden">
        {viewMode === '3d' ? (
          <>
            <Physics3DViewport
              sceneType={sceneType}
              params={params}
              simRef={simRef}
              solverRef={solverRef}
              showVectors={showVectors}
              sandboxObjects={sandboxObjects}
              sandboxRopes={sandboxRopes}
              resetCameraTrigger={resetCamTrigger}
            />
            <div className="absolute top-3 right-3">
              <button
                onClick={() => setResetCamTrigger((n) => n + 1)}
                className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 hover:bg-white hover:text-black backdrop-blur-md border border-white/20 text-[11px] text-white/85 cursor-pointer transition"
                title="Restablecer ángulo de cámara 3D"
              >
                <Camera className="w-3 h-3" />
                Centrar
              </button>
            </div>
          </>
        ) : (
          <canvas
            ref={canvasRef}
            width={920}
            height={500}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            className={`w-full h-full object-contain ${
              sceneType === 'sandbox_game' ? 'cursor-grab active:cursor-grabbing' : ''
            }`}
          />
        )}

        {/* Leyenda discreta y acceso rápido al chat */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 px-4 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-[11px]">
          <div className="flex items-center gap-3.5 text-white/70">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-400 inline-block" /> Peso
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-sky-400 inline-block" /> Normal
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-300 inline-block" /> Tensión
            </span>
            <span className="flex items-center gap-1.5 hidden sm:flex">
              <span className="w-2 h-2 rounded-full bg-orange-400 inline-block" /> Fricción
            </span>
          </div>
          <button
            onClick={onSolveCurrentSceneWithAI}
            className="text-white/90 hover:text-white font-medium flex items-center gap-1.5 cursor-pointer text-[11px]"
          >
            <Sparkles className="w-3.5 h-3.5" /> Explicar en el Chat
          </button>
        </div>
      </div>

      {/* Panel de Controles Deslizantes en Vivo */}
      <div className="p-4 bg-black border-t border-white/15">
        {sceneType === 'sandbox_game' ? (
          selectedSandboxObj ? (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-300 flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5" /> Propiedades de{' '}
                  {selectedSandboxObj.label} (
                  {selectedSandboxObj.type === 'hanging_mass'
                    ? 'Masa Colgante'
                    : 'Bloque en Superficie'}
                  ) — Arrástralo libremente con el mouse
                </span>
                {sandboxObjects.length > 1 && (
                  <button
                    onClick={deleteSelectedSandboxObj}
                    className="flex items-center gap-1 text-xs text-rose-400 hover:text-rose-300 cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" /> Eliminar objeto
                  </button>
                )}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <SliderControl
                  label={`Masa (${selectedSandboxObj.label})`}
                  value={selectedSandboxObj.mass}
                  min={0.5}
                  max={25}
                  step={0.5}
                  unit="kg"
                  onChange={(v) => updateSelectedSandboxObj({ mass: v })}
                />
                {selectedSandboxObj.type !== 'hanging_mass' && (
                  <>
                    <SliderControl
                      label="Ángulo Rampa (θ)"
                      value={selectedSandboxObj.angleDeg}
                      min={0}
                      max={65}
                      step={1}
                      unit="°"
                      onChange={(v) => updateSelectedSandboxObj({ angleDeg: v })}
                    />
                    <SliderControl
                      label="Fricción (μ_k)"
                      value={selectedSandboxObj.mu}
                      min={0}
                      max={0.8}
                      step={0.02}
                      unit=""
                      onChange={(v) => updateSelectedSandboxObj({ mu: v })}
                    />
                    <SliderControl
                      label="Fuerza Externa (F)"
                      value={selectedSandboxObj.fExt}
                      min={-50}
                      max={50}
                      step={1}
                      unit="N"
                      onChange={(v) => updateSelectedSandboxObj({ fExt: v })}
                    />
                  </>
                )}
              </div>
            </div>
          ) : null
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {params.m1 !== undefined && (
              <SliderControl
                label="Masa m₁"
                value={params.m1}
                min={0.5}
                max={25}
                step={0.5}
                unit="kg"
                onChange={(v) => onParamsChange({ m1: v })}
              />
            )}
            {params.m2 !== undefined && (
              <SliderControl
                label="Masa m₂ (Colgante)"
                value={params.m2}
                min={0}
                max={25}
                step={0.5}
                unit="kg"
                onChange={(v) => onParamsChange({ m2: v })}
              />
            )}
            {params.angle !== undefined && (
              <SliderControl
                label="Ángulo θ"
                value={params.angle}
                min={5}
                max={75}
                step={1}
                unit="°"
                onChange={(v) => onParamsChange({ angle: v })}
              />
            )}
            {params.muK !== undefined && (
              <SliderControl
                label="Fricción μ_k"
                value={params.muK}
                min={0}
                max={0.75}
                step={0.01}
                unit=""
                onChange={(v) =>
                  onParamsChange({ muK: v, muS: Math.max(v + 0.05, params.muS || 0.2) })
                }
              />
            )}
            {params.fExt !== undefined && (
              <SliderControl
                label="Fuerza F_ext"
                value={params.fExt}
                min={-60}
                max={60}
                step={1}
                unit="N"
                onChange={(v) => onParamsChange({ fExt: v })}
              />
            )}
            {params.k !== undefined && (
              <SliderControl
                label="Constante k"
                value={params.k}
                min={5}
                max={150}
                step={1}
                unit="N/m"
                onChange={(v) => onParamsChange({ k: v })}
              />
            )}
            {params.x0 !== undefined && (
              <SliderControl
                label="Elongación x₀"
                value={params.x0}
                min={-3.5}
                max={3.5}
                step={0.1}
                unit="m"
                onChange={(v) => onParamsChange({ x0: v })}
              />
            )}
            {params.v0 !== undefined && (
              <SliderControl
                label="Velocidad v₀"
                value={params.v0}
                min={5}
                max={45}
                step={1}
                unit="m/s"
                onChange={(v) => onParamsChange({ v0: v })}
              />
            )}
            {params.h0 !== undefined && (
              <SliderControl
                label="Altura h₀"
                value={params.h0}
                min={0}
                max={15}
                step={0.5}
                unit="m"
                onChange={(v) => onParamsChange({ h0: v })}
              />
            )}
            {params.length !== undefined && (
              <SliderControl
                label="Longitud Cuerda L"
                value={params.length}
                min={1}
                max={7}
                step={0.2}
                unit="m"
                onChange={(v) => onParamsChange({ length: v })}
              />
            )}
            {params.angle0 !== undefined && (
              <SliderControl
                label="Ángulo Inicial θ₀"
                value={params.angle0}
                min={-75}
                max={75}
                step={1}
                unit="°"
                onChange={(v) => onParamsChange({ angle0: v })}
              />
            )}
            <SliderControl
              label="Gravedad g"
              value={params.g ?? 9.81}
              min={1.6}
              max={25}
              step={0.1}
              unit="m/s²"
              onChange={(v) => onParamsChange({ g: v })}
            />
          </div>
        )}
      </div>
    </div>
  );
}

function SliderControl({ label, value, min, max, step, unit, onChange }) {
  return (
    <div className="bg-[#050507] border border-white/15 hover:border-white/35 rounded-xl px-3 py-2.5 transition group">
      <div className="flex items-center justify-between text-[11px] mb-1 font-tech">
        <span className="text-white/55 group-hover:text-white/85 transition font-medium truncate uppercase tracking-[0.12em] text-[9.5px]">
          {label}
        </span>
        <span className="font-semibold text-white">
          {Number(value).toFixed(step < 0.1 ? 2 : step < 1 ? 1 : 0)}
          <span className="text-white/45 font-normal ml-0.5 text-[9.5px]">{unit}</span>
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full accent-amber-400 h-1 bg-[#171b26] rounded cursor-pointer"
      />
    </div>
  );
}

/* ============================================================================
 * PRIMITIVAS GRÁFICAS DE INGENIERÍA Y FÍSICA REALISTA
 * ============================================================================ */

/**
 * Dibuja una polea metálica realista con canaleta, soporte de acero y rayos que giran con el desplazamiento de la cuerda
 */
function drawRealisticPulley(ctx, x, y, radius, rotationRad, anchorX = null, anchorY = null) {
  ctx.save();

  // Soporte estructural de acero si se provee punto de anclaje
  if (anchorX !== null && anchorY !== null) {
    const gradStrut = ctx.createLinearGradient(anchorX, anchorY, x, y);
    gradStrut.addColorStop(0, '#334155');
    gradStrut.addColorStop(0.5, '#94a3b8');
    gradStrut.addColorStop(1, '#475569');
    ctx.strokeStyle = gradStrut;
    ctx.lineWidth = 7;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(anchorX, anchorY);
    ctx.lineTo(x, y);
    ctx.stroke();

    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(anchorX, anchorY);
    ctx.lineTo(x, y);
    ctx.stroke();
  }

  // Sombra exterior de la polea
  ctx.shadowColor = 'rgba(0, 0, 0, 0.55)';
  ctx.shadowBlur = 10;
  ctx.shadowOffsetY = 4;

  // Rueda exterior biselada (canaleta de bronce/acero)
  const rimGrad = ctx.createRadialGradient(x - radius * 0.25, y - radius * 0.25, 2, x, y, radius);
  rimGrad.addColorStop(0, '#475569');
  rimGrad.addColorStop(0.72, '#1e293b');
  rimGrad.addColorStop(0.88, '#f59e0b');
  rimGrad.addColorStop(1, '#b45309');

  ctx.fillStyle = rimGrad;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();

  ctx.shadowColor = 'transparent';

  // Rayos internos giratorios según el movimiento real de la cuerda
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotationRad);
  ctx.strokeStyle = '#94a3b8';
  ctx.lineWidth = 2.2;
  const spokes = 6;
  for (let i = 0; i < spokes; i++) {
    const ang = (i * Math.PI * 2) / spokes;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo((radius - 4) * Math.cos(ang), (radius - 4) * Math.sin(ang));
    ctx.stroke();
  }

  // Agujeros de aligeramiento mecánico
  ctx.fillStyle = '#0f172a';
  for (let i = 0; i < spokes; i++) {
    const ang = ((i + 0.5) * Math.PI * 2) / spokes;
    const rHole = radius * 0.52;
    ctx.beginPath();
    ctx.arc(rHole * Math.cos(ang), rHole * Math.sin(ang), radius * 0.14, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();

  // Eje central metálico (rodamiento)
  ctx.fillStyle = '#e2e8f0';
  ctx.strokeStyle = '#0f172a';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(x, y, Math.max(4.5, radius * 0.22), 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  ctx.restore();
}

/**
 * Dibuja una cuerda trenzada bajo tensión entre dos puntos
 */
function drawBraidedRope(ctx, x1, y1, x2, y2) {
  ctx.save();
  // Sombra sutil de la cuerda
  ctx.strokeStyle = 'rgba(0, 0, 0, 0.45)';
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(x1, y1 + 2);
  ctx.lineTo(x2, y2 + 2);
  ctx.stroke();

  // Núcleo de la cuerda
  ctx.strokeStyle = '#d97706';
  ctx.lineWidth = 4;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();

  // Hebras trenzadas brillantes
  ctx.strokeStyle = '#fde68a';
  ctx.lineWidth = 2;
  ctx.setLineDash([4, 4]);
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.restore();
}

/**
 * Dibuja un bloque físico realista en 3D con bisel metálico, remaches, marcador de centro de masa y tamaño proporcional a su masa
 */
function drawRealisticMassBlock(ctx, w, h, label, massKg, theme = 'blue', isHighlighted = false) {
  ctx.save();

  const palettes = {
    blue: {
      top: '#38bdf8',
      mid: '#0284c7',
      bot: '#0369a1',
      border: isHighlighted ? '#fde047' : '#bae6fd',
    },
    crimson: {
      top: '#fb7185',
      mid: '#e11d48',
      bot: '#9f1239',
      border: isHighlighted ? '#fde047' : '#fecdd3',
    },
  };
  const pal = palettes[theme] || palettes.blue;

  // Sombra de contacto
  ctx.shadowColor = 'rgba(0, 0, 0, 0.55)';
  ctx.shadowBlur = 12;
  ctx.shadowOffsetY = 4;

  const grad = ctx.createLinearGradient(0, -h / 2, 0, h / 2);
  grad.addColorStop(0, pal.top);
  grad.addColorStop(0.18, pal.mid);
  grad.addColorStop(1, pal.bot);

  ctx.fillStyle = grad;
  ctx.strokeStyle = pal.border;
  ctx.lineWidth = isHighlighted ? 3 : 2;
  ctx.beginPath();
  ctx.roundRect(-w / 2, -h / 2, w, h, 7);
  ctx.fill();
  ctx.stroke();

  ctx.shadowColor = 'transparent';

  // Bisel interior metálico
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.22)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.roundRect(-w / 2 + 4, -h / 2 + 4, w - 8, h - 8, 4);
  ctx.stroke();

  // Remaches en las 4 esquinas
  ctx.fillStyle = 'rgba(15, 23, 42, 0.55)';
  const rx = w / 2 - 7;
  const ry = h / 2 - 7;
  [
    [-rx, -ry],
    [rx, -ry],
    [-rx, ry],
    [rx, ry],
  ].forEach(([cx, cy]) => {
    ctx.beginPath();
    ctx.arc(cx, cy, 2, 0, Math.PI * 2);
    ctx.fill();
  });

  // Placa central de identificación de masa
  ctx.fillStyle = 'rgba(2, 6, 23, 0.55)';
  ctx.beginPath();
  ctx.roundRect(-w * 0.38, -14, w * 0.76, 28, 5);
  ctx.fill();

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 12px JetBrains Mono, monospace';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(label, 0, -4);

  ctx.fillStyle = '#e2e8f0';
  ctx.font = '10.5px JetBrains Mono, monospace';
  ctx.fillText(`${Number(massKg).toFixed(1)} kg`, 0, 9);

  // Marcador de Centro de Masa (CM)
  ctx.fillStyle = '#fde047';
  ctx.beginPath();
  ctx.arc(0, 0, 2.8, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
}

/**
 * Dibuja el achurado de ingeniería (líneas diagonales de tierra/empotramiento) bajo una superficie
 */
function drawEngineeringHatch(ctx, x1, y1, x2, y2, spacing = 14, depth = 10) {
  ctx.save();
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy);
  const angle = Math.atan2(dy, dx);

  ctx.translate(x1, y1);
  ctx.rotate(angle);
  ctx.strokeStyle = 'rgba(148, 163, 184, 0.32)';
  ctx.lineWidth = 1.3;
  for (let s = 6; s < len - 4; s += spacing) {
    ctx.beginPath();
    ctx.moveTo(s, 0);
    ctx.lineTo(s - depth * 0.7, depth);
    ctx.stroke();
  }
  ctx.restore();
}

/**
 * Dibuja rugosidad física proporcional al coeficiente de fricción μ
 */
function drawFrictionRoughness(ctx, x1, y1, x2, y2, mu) {
  if (!mu || mu <= 0.01) return;
  ctx.save();
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy);
  const angle = Math.atan2(dy, dx);
  const amp = Math.min(4.5, 1.2 + mu * 6);

  ctx.translate(x1, y1);
  ctx.rotate(angle);
  ctx.strokeStyle = 'rgba(251, 146, 60, 0.65)';
  ctx.lineWidth = 1.4;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  for (let x = 0; x <= len; x += 6) {
    ctx.lineTo(x, (x / 6) % 2 === 0 ? -amp : 0);
  }
  ctx.stroke();
  ctx.restore();
}

/**
 * Dibuja una flecha vectorial de física con resplandor sutil, punta triangular y etiqueta matemática clara
 */
function drawForceVector(
  ctx,
  x,
  y,
  angleDeg,
  magnitude,
  color,
  label,
  showValues,
  dashed = false,
  scale = 1.45
) {
  if (magnitude < 0.05) return;
  const len = Math.min(142, Math.max(36, magnitude * scale));
  const rad = (-angleDeg * Math.PI) / 180;
  const ex = x + len * Math.cos(rad);
  const ey = y + len * Math.sin(rad);

  ctx.save();
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = dashed ? 2.2 : 3.2;
  if (dashed) {
    ctx.setLineDash([5, 4]);
  } else {
    ctx.shadowColor = color;
    ctx.shadowBlur = 6;
  }

  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(ex, ey);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.shadowColor = 'transparent';

  // Punta de flecha cónica
  const headLen = 11;
  const angle = Math.atan2(ey - y, ex - x);
  ctx.beginPath();
  ctx.moveTo(ex, ey);
  ctx.lineTo(
    ex - headLen * Math.cos(angle - Math.PI / 6.5),
    ey - headLen * Math.sin(angle - Math.PI / 6.5)
  );
  ctx.lineTo(
    ex - headLen * Math.cos(angle + Math.PI / 6.5),
    ey - headLen * Math.sin(angle + Math.PI / 6.5)
  );
  ctx.closePath();
  ctx.fill();

  // Etiqueta del vector con pastilla de alto contraste
  const text = showValues ? `${label} (${magnitude.toFixed(1)}N)` : label;
  ctx.font = 'bold 11px JetBrains Mono, monospace';
  const textWidth = ctx.measureText(text).width;
  const tx = ex + 16 * Math.cos(angle);
  const ty = ey + 16 * Math.sin(angle);

  ctx.fillStyle = 'rgba(2, 6, 23, 0.9)';
  ctx.beginPath();
  ctx.roundRect(tx - textWidth / 2 - 5, ty - 9.5, textWidth + 10, 19, 5);
  ctx.fill();
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.1;
  ctx.stroke();

  ctx.fillStyle = color;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, tx, ty);
  ctx.restore();

  return { ex, ey, len };
}

/**
 * Dibuja el rectángulo trigonométrico de descomposición del Peso (W = Wx + Wy) en planos inclinados
 */
function drawWeightDecompositionBox(ctx, cx, cy, W1, angleDeg, scale = 1.45) {
  if (angleDeg <= 1 || W1 < 0.5) return;
  const lenW = Math.min(142, Math.max(36, W1 * scale));
  const theta = (angleDeg * Math.PI) / 180;
  const lenWx = lenW * Math.sin(theta);
  const lenWy = lenW * Math.cos(theta);

  // Coordenadas del extremo de W (hacia abajo: 0, +lenW)
  const wxEndX = cx - lenWx * Math.cos(theta);
  const wxEndY = cy + lenWx * Math.sin(theta);
  const wyEndX = cx + lenWy * Math.sin(theta);
  const wyEndY = cy + lenWy * Math.cos(theta);
  const wEndX = cx;
  const wEndY = cy + lenW;

  ctx.save();
  ctx.strokeStyle = 'rgba(251, 113, 133, 0.45)';
  ctx.lineWidth = 1.5;
  ctx.setLineDash([3, 3]);

  // Líneas de proyección que cierran el rectángulo trigonométrico
  ctx.beginPath();
  ctx.moveTo(wxEndX, wxEndY);
  ctx.lineTo(wEndX, wEndY);
  ctx.lineTo(wyEndX, wyEndY);
  ctx.stroke();

  // Arco del ángulo θ entre Wy y W
  ctx.setLineDash([]);
  ctx.strokeStyle = '#fda4af';
  ctx.beginPath();
  const arcR = Math.min(34, lenWy * 0.45);
  const startAng = Math.PI / 2 - theta;
  const endAng = Math.PI / 2;
  ctx.arc(cx, cy, arcR, startAng, endAng);
  ctx.stroke();

  ctx.fillStyle = '#fda4af';
  ctx.font = 'bold 10px JetBrains Mono, monospace';
  ctx.fillText(`θ=${angleDeg}°`, cx + 8, cy + arcR + 11);
  ctx.restore();
}

/**
 * Renderizado completo del escenario físico realista
 */
function drawRealisticScene(ctx, W, H, sceneType, params, sim, solver, opts) {
  ctx.clearRect(0, 0, W, H);

  // Fondo de laboratorio de física con iluminación ambiental radial
  const bgGrad = ctx.createRadialGradient(W * 0.5, H * 0.35, 40, W * 0.5, H * 0.5, W * 0.75);
  bgGrad.addColorStop(0, '#0f172a');
  bgGrad.addColorStop(1, '#020617');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, W, H);

  // Cuadrícula milimétrica de ingeniería (escala doble: cada 25px y cada 100px)
  ctx.strokeStyle = 'rgba(56, 189, 248, 0.045)';
  ctx.lineWidth = 1;
  for (let x = 0; x < W; x += 25) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, H);
    ctx.stroke();
  }
  for (let y = 0; y < H; y += 25) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(W, y);
    ctx.stroke();
  }
  ctx.strokeStyle = 'rgba(56, 189, 248, 0.09)';
  for (let x = 0; x < W; x += 100) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, H);
    ctx.stroke();
  }
  for (let y = 0; y < H; y += 100) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(W, y);
    ctx.stroke();
  }

  // HUD Superior Izquierdo: Telemetría Cinemática y Dinámica en Vivo
  ctx.save();
  ctx.fillStyle = 'rgba(2, 6, 23, 0.88)';
  ctx.strokeStyle = 'rgba(56, 189, 248, 0.35)';
  ctx.lineWidth = 1.2;
  ctx.beginPath();
  ctx.roundRect(14, 12, 420, 66, 12);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = '#38bdf8';
  ctx.font = 'bold 12px Inter, sans-serif';
  ctx.fillText(solver.motionState || 'Simulación Activa', 26, 30);

  ctx.fillStyle = '#f8fafc';
  ctx.font = 'bold 11.5px JetBrains Mono, monospace';
  const accVal = Number(solver.summary.acceleration || 0);
  const tenTxt = solver.summary.tension
    ? `  |  T = ${Number(solver.summary.tension).toFixed(1)} N`
    : '';
  const normTxt = solver.summary.normal1
    ? `  |  N = ${Number(solver.summary.normal1).toFixed(1)} N`
    : '';
  ctx.fillText(`a = ${accVal.toFixed(2)} m/s²${tenTxt}${normTxt}`, 26, 49);

  ctx.fillStyle = '#94a3b8';
  ctx.font = '11px JetBrains Mono, monospace';
  ctx.fillText(
    `t = ${sim.t.toFixed(2)} s   |   v = ${sim.v.toFixed(2)} m/s   |   Δs = ${sim.s.toFixed(2)} m`,
    26,
    67
  );
  ctx.restore();

  // HUD Superior Derecho: Medidor de Energías en Tiempo Real (Cinética K y Disipada E_th)
  const mTotal = Number(params.m1 || 4) + Number(params.m2 || 0);
  const kineticE =
    sceneType === 'projectile'
      ? 0.5 * Number(params.m1 || 2) * (sim.vx * sim.vx + sim.vy * sim.vy)
      : sceneType === 'pendulum'
      ? 0.5 *
        Number(params.m1 || 2.5) *
        Math.pow(sim.omega * Number(params.length || 3.5), 2)
      : 0.5 * mTotal * sim.v * sim.v;
  const potentialSpringE =
    sceneType === 'spring_block' ? 0.5 * Number(params.k || 45) * sim.x * sim.x : 0;

  ctx.save();
  ctx.fillStyle = 'rgba(2, 6, 23, 0.88)';
  ctx.strokeStyle = 'rgba(148, 163, 184, 0.25)';
  ctx.beginPath();
  ctx.roundRect(W - 245, 12, 230, 58, 12);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = '#cbd5e1';
  ctx.font = 'bold 10.5px Inter, sans-serif';
  ctx.fillText('BALANCE ENERGÉTICO EN VIVO', W - 232, 28);

  ctx.font = '11px JetBrains Mono, monospace';
  ctx.fillStyle = '#34d399';
  ctx.fillText(`K = ${kineticE.toFixed(1)} J`, W - 232, 46);
  ctx.fillStyle = sceneType === 'spring_block' ? '#38bdf8' : '#fb923c';
  ctx.fillText(
    sceneType === 'spring_block'
      ? `U_e = ${potentialSpringE.toFixed(1)} J`
      : `E_f = ${sim.thermalWork.toFixed(1)} J`,
    W - 135,
    46
  );

  // Barra visual de energía
  const totalBarE = Math.max(10, kineticE + potentialSpringE + sim.thermalWork);
  const kWidth = Math.min(204, (kineticE / totalBarE) * 204);
  ctx.fillStyle = '#1e293b';
  ctx.fillRect(W - 232, 54, 204, 7);
  ctx.fillStyle = '#34d399';
  ctx.fillRect(W - 232, 54, kWidth, 7);
  ctx.restore();

  // Renderizador de vectores DCL de un cuerpo
  const renderBodyVectors = (cx, cy, bodyId) => {
    if (!opts.showVectors) return;
    const body = solver.fbdBodies.find((b) => b.id === bodyId);
    if (!body) return;
    body.vectors.forEach((vec) => {
      if (vec.dashed && !opts.showComponents) return;
      drawForceVector(
        ctx,
        cx,
        cy,
        vec.angleDeg,
        vec.magnitude,
        vec.color,
        vec.symbol.split('=')[0].trim(),
        opts.showValues,
        vec.dashed
      );
    });
  };

  // Dibujar partículas de fricción activas
  sim.particles.forEach((p) => {
    ctx.save();
    ctx.fillStyle = `rgba(251, 146, 60, ${Math.min(1, p.life * 2.5)})`;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  });

  /* ==========================================================================
   * 1. ESCENA: PLANO INCLINADO CON POLEA Y DOS BLOQUES (incline_pulley)
   * ========================================================================== */
  if (sceneType === 'incline_pulley') {
    const angleDeg = Number(params.angle ?? 30);
    const theta = (angleDeg * Math.PI) / 180;
    const rampBaseX = 115;
    const rampBaseY = 408;
    const rampLen = 410;
    const topX = rampBaseX + rampLen * Math.cos(theta);
    const topY = rampBaseY - rampLen * Math.sin(theta);

    // Suelo de concreto con achurado de ingeniería
    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(45, rampBaseY);
    ctx.lineTo(W - 45, rampBaseY);
    ctx.stroke();
    drawEngineeringHatch(ctx, 45, rampBaseY, W - 45, rampBaseY, 16, 11);

    // Estructura metálica 3D del plano inclinado
    const rampGrad = ctx.createLinearGradient(rampBaseX, topY, topX, rampBaseY);
    rampGrad.addColorStop(0, 'rgba(30, 41, 59, 0.95)');
    rampGrad.addColorStop(1, 'rgba(15, 23, 42, 0.95)');
    ctx.fillStyle = rampGrad;
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 2.8;
    ctx.beginPath();
    ctx.moveTo(rampBaseX, rampBaseY);
    ctx.lineTo(topX, rampBaseY);
    ctx.lineTo(topX, topY);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Vigas internas del plano inclinado para realismo mecánico
    ctx.strokeStyle = 'rgba(71, 85, 105, 0.45)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(rampBaseX + (topX - rampBaseX) * 0.45, rampBaseY);
    ctx.lineTo(
      rampBaseX + (topX - rampBaseX) * 0.45,
      rampBaseY - rampLen * 0.45 * Math.sin(theta)
    );
    ctx.moveTo(rampBaseX + (topX - rampBaseX) * 0.75, rampBaseY);
    ctx.lineTo(
      rampBaseX + (topX - rampBaseX) * 0.75,
      rampBaseY - rampLen * 0.75 * Math.sin(theta)
    );
    ctx.stroke();

    // Rugosidad superficial proporcional a μ_k
    drawFrictionRoughness(ctx, rampBaseX, rampBaseY, topX, topY, params.muK);

    // Arco del ángulo θ con transportador graduado
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 2.2;
    ctx.beginPath();
    ctx.arc(rampBaseX, rampBaseY, 68, -theta, 0);
    ctx.stroke();
    ctx.fillStyle = 'rgba(56, 189, 248, 0.12)';
    ctx.beginPath();
    ctx.moveTo(rampBaseX, rampBaseY);
    ctx.arc(rampBaseX, rampBaseY, 68, -theta, 0);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 13px JetBrains Mono, monospace';
    ctx.fillText(`θ = ${angleDeg}°`, rampBaseX + 76, rampBaseY - 15);

    // Dimensiones del bloque m1 proporcionales a su masa
    const m1 = Number(params.m1 ?? 6);
    const blockW = Math.min(92, Math.max(62, 54 + m1 * 2.2));
    const blockH = Math.min(62, Math.max(42, 36 + m1 * 1.4));

    // Escala física: 1 metro = 42 píxeles a lo largo de la rampa
    const pxOffset = sim.s * 42;
    const distAlongRamp = Math.max(
      75,
      Math.min(rampLen - 65, rampLen * 0.52 + pxOffset)
    );
    const bx = rampBaseX + distAlongRamp * Math.cos(theta);
    const by = rampBaseY - distAlongRamp * Math.sin(theta);

    // Emitir chispas/partículas térmicas si se desliza con fricción
    if (opts.isPlaying && Math.abs(sim.v) > 0.15 && Number(params.muK) > 0.02 && Math.random() < 0.55) {
      sim.particles.push({
        x: bx + (Math.random() - 0.5) * 20,
        y: by + (Math.random() - 0.5) * 6,
        vx: -Math.sign(sim.v) * (35 + Math.random() * 45) * Math.cos(theta),
        vy: -25 - Math.random() * 35,
        size: 1.5 + Math.random() * 2,
        life: 0.35 + Math.random() * 0.25,
      });
    }

    const cm1X = bx - (blockH / 2) * Math.sin(theta);
    const cm1Y = by - (blockH / 2) * Math.cos(theta);

    const m2 = Number(params.m2 ?? 0);
    const pulleyR = 22;
    const pulleyX = topX + 26 * Math.cos(theta - Math.PI / 5);
    const pulleyY = topY - 26 * Math.sin(theta + Math.PI / 5);

    if (m2 > 0) {
      const m2W = Math.min(76, Math.max(52, 44 + m2 * 2.0));
      const m2H = Math.min(60, Math.max(42, 36 + m2 * 1.5));
      const m2X = pulleyX + pulleyR;
      const m2Y = Math.max(
        pulleyY + 58,
        Math.min(rampBaseY - m2H / 2 - 4, pulleyY + 145 + pxOffset)
      );

      // Puntos tangentes de la cuerda en la polea
      const ropeStart1X = cm1X + (blockW / 2) * Math.cos(theta);
      const ropeStart1Y = cm1Y - (blockW / 2) * Math.sin(theta);
      const pulleyTan1X = pulleyX - pulleyR * Math.sin(theta);
      const pulleyTan1Y = pulleyY - pulleyR * Math.cos(theta);

      drawBraidedRope(ctx, ropeStart1X, ropeStart1Y, pulleyTan1X, pulleyTan1Y);
      drawBraidedRope(ctx, m2X, pulleyY, m2X, m2Y - m2H / 2);

      // Polea metálica con rayos giratorios y soporte anclado al vértice
      drawRealisticPulley(ctx, pulleyX, pulleyY, pulleyR, sim.pulleyAngle, topX, topY);

      // Bloque colgante m2
      ctx.save();
      ctx.translate(m2X, m2Y);
      drawRealisticMassBlock(ctx, m2W, m2H, 'm₂', m2, 'crimson');
      ctx.restore();

      renderBodyVectors(m2X, m2Y, 'm2');
    }

    // Dibujar Bloque m1 rotado sobre el plano inclinado
    ctx.save();
    ctx.translate(cm1X, cm1Y);
    ctx.rotate(-theta);
    drawRealisticMassBlock(ctx, blockW, blockH, 'm₁', m1, 'blue');
    ctx.restore();

    // Ejes rotados X'-Y' y caja trigonométrica de descomposición del peso
    if (opts.showComponents) {
      ctx.save();
      ctx.translate(cm1X, cm1Y);
      ctx.rotate(-theta);
      ctx.strokeStyle = 'rgba(148, 163, 184, 0.35)';
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(-125, 0);
      ctx.lineTo(125, 0);
      ctx.moveTo(0, -125);
      ctx.lineTo(0, 125);
      ctx.stroke();
      ctx.restore();

      drawWeightDecompositionBox(ctx, cm1X, cm1Y, m1 * (params.g || 9.81), angleDeg);
    }

    renderBodyVectors(cm1X, cm1Y, 'm1');
    return;
  }

  /* ==========================================================================
   * 2. ESCENA: MESA HORIZONTAL CON POLEA Y DOS BLOQUES (horizontal_table)
   * ========================================================================== */
  if (sceneType === 'horizontal_table') {
    const tableY = 250;
    const tableLeft = 95;
    const tableRight = 565;

    // Tablero y estructura de la mesa de laboratorio
    const tblGrad = ctx.createLinearGradient(0, tableY, 0, tableY + 28);
    tblGrad.addColorStop(0, '#334155');
    tblGrad.addColorStop(1, '#0f172a');
    ctx.fillStyle = tblGrad;
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.roundRect(tableLeft, tableY, tableRight - tableLeft, 26, 4);
    ctx.fill();
    ctx.stroke();

    // Patas metálicas con base
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(tableLeft + 28, tableY + 26, 20, 175);
    ctx.fillRect(tableRight - 48, tableY + 26, 20, 175);
    ctx.strokeRect(tableLeft + 28, tableY + 26, 20, 175);
    ctx.strokeRect(tableRight - 48, tableY + 26, 20, 175);

    drawFrictionRoughness(ctx, tableLeft + 10, tableY, tableRight - 10, tableY, params.muK);

    const m1 = Number(params.m1 ?? 5);
    const b1W = Math.min(92, Math.max(64, 54 + m1 * 2.2));
    const b1H = Math.min(62, Math.max(44, 36 + m1 * 1.4));

    const pxOffset = sim.s * 42;
    const b1X = Math.max(
      tableLeft + b1W / 2 + 15,
      Math.min(tableRight - b1W / 2 - 20, 325 + pxOffset)
    );
    const b1Y = tableY - b1H / 2;

    if (opts.isPlaying && Math.abs(sim.v) > 0.15 && Number(params.muK) > 0.02 && Math.random() < 0.5) {
      sim.particles.push({
        x: b1X + (Math.random() - 0.5) * 28,
        y: tableY - 2,
        vx: -Math.sign(sim.v) * (35 + Math.random() * 40),
        vy: -20 - Math.random() * 35,
        size: 1.5 + Math.random() * 2,
        life: 0.35,
      });
    }

    const pulleyR = 22;
    const pulleyX = tableRight + 22;
    const pulleyY = tableY - 8;
    const m2 = Number(params.m2 ?? 3);

    if (m2 > 0) {
      const b2W = Math.min(76, Math.max(52, 44 + m2 * 2));
      const b2H = Math.min(60, Math.max(42, 36 + m2 * 1.5));
      const b2X = pulleyX + pulleyR;
      const b2Y = Math.max(pulleyY + 60, Math.min(410, 310 + pxOffset));

      drawBraidedRope(ctx, b1X + b1W / 2, b1Y, pulleyX, pulleyY - pulleyR);
      drawBraidedRope(ctx, b2X, pulleyY, b2X, b2Y - b2H / 2);

      drawRealisticPulley(ctx, pulleyX, pulleyY, pulleyR, sim.pulleyAngle, tableRight, tableY + 8);

      ctx.save();
      ctx.translate(b2X, b2Y);
      drawRealisticMassBlock(ctx, b2W, b2H, 'm₂', m2, 'crimson');
      ctx.restore();

      renderBodyVectors(b2X, b2Y, 'm2');
    }

    ctx.save();
    ctx.translate(b1X, b1Y);
    drawRealisticMassBlock(ctx, b1W, b1H, 'm₁', m1, 'blue');
    ctx.restore();

    renderBodyVectors(b1X, b1Y, 'm1');
    return;
  }

  /* ==========================================================================
   * 3. ESCENA: MÁQUINA DE ATWOOD (atwood)
   * ========================================================================== */
  if (sceneType === 'atwood') {
    const pulleyX = W / 2;
    const pulleyY = 135;
    const R = 52;

    // Viga de acero superior con achurado
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(pulleyX - 140, 62);
    ctx.lineTo(pulleyX + 140, 62);
    ctx.stroke();
    drawEngineeringHatch(ctx, pulleyX + 140, 62, pulleyX - 140, 62, 14, 10);

    const m1 = Number(params.m1 ?? 7);
    const m2 = Number(params.m2 ?? 4);
    const w1 = Math.min(82, Math.max(56, 46 + m1 * 2));
    const h1 = Math.min(64, Math.max(44, 36 + m1 * 1.5));
    const w2 = Math.min(82, Math.max(56, 46 + m2 * 2));
    const h2 = Math.min(64, Math.max(44, 36 + m2 * 1.5));

    const pxOffset = sim.s * 42;
    const y1 = Math.max(205, Math.min(410, 295 + pxOffset));
    const y2 = Math.max(205, Math.min(410, 295 - pxOffset));
    const x1 = pulleyX - R;
    const x2 = pulleyX + R;

    // Escala vertical graduada en metros a la izquierda
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.3)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(pulleyX - 165, 190);
    ctx.lineTo(pulleyX - 165, 415);
    for (let ry = 200; ry <= 410; ry += 42) {
      ctx.moveTo(pulleyX - 172, ry);
      ctx.lineTo(pulleyX - 158, ry);
    }
    ctx.stroke();

    drawBraidedRope(ctx, x1, pulleyY, x1, y1 - h1 / 2);
    drawBraidedRope(ctx, x2, pulleyY, x2, y2 - h2 / 2);

    drawRealisticPulley(ctx, pulleyX, pulleyY, R, -sim.pulleyAngle, pulleyX, 62);

    ctx.save();
    ctx.translate(x1, y1);
    drawRealisticMassBlock(ctx, w1, h1, 'm₁', m1, 'blue');
    ctx.restore();

    ctx.save();
    ctx.translate(x2, y2);
    drawRealisticMassBlock(ctx, w2, h2, 'm₂', m2, 'crimson');
    ctx.restore();

    renderBodyVectors(x1, y1, 'm1');
    renderBodyVectors(x2, y2, 'm2');
    return;
  }

  /* ==========================================================================
   * 4. ESCENA: SISTEMA MASA-RESORTE (spring_block)
   * ========================================================================== */
  if (sceneType === 'spring_block') {
    const wallX = 115;
    const floorY = 325;
    const eqX = 465;

    const m1 = Number(params.m1 ?? 3);
    const blockW = Math.min(92, Math.max(66, 56 + m1 * 2.5));
    const blockH = Math.min(68, Math.max(48, 40 + m1 * 1.8));
    const bx = Math.max(wallX + 95, Math.min(W - 95, eqX + sim.x * 78));
    const by = floorY - blockH / 2;

    // Pared de empotramiento y suelo con achurado técnico
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(wallX, 145);
    ctx.lineTo(wallX, floorY);
    ctx.lineTo(W - 55, floorY);
    ctx.stroke();
    drawEngineeringHatch(ctx, wallX, 145, wallX, floorY, 14, -10);
    drawEngineeringHatch(ctx, wallX, floorY, W - 55, floorY, 16, 11);
    drawFrictionRoughness(ctx, wallX + 10, floorY, W - 65, floorY, params.muK);

    // Línea de equilibrio x = 0 y regla de elongación
    ctx.strokeStyle = 'rgba(52, 211, 153, 0.5)';
    ctx.setLineDash([6, 5]);
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(eqX, 155);
    ctx.lineTo(eqX, floorY + 28);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = '#34d399';
    ctx.font = 'bold 12px JetBrains Mono, monospace';
    ctx.fillText('x = 0 (Equilibrio)', eqX - 58, 146);

    // Dibujar resorte helicoidal metálico 3D con sombreado de bobinas
    const coils = 16;
    const startX = wallX + 8;
    const endX = bx - blockW / 2 - 6;
    const springY = by;

    // Placas de anclaje del resorte
    ctx.fillStyle = '#64748b';
    ctx.fillRect(wallX, springY - 18, 8, 36);
    ctx.fillRect(endX, springY - 18, 6, 36);

    const step = (endX - startX) / coils;
    for (let i = 0; i < coils; i++) {
      const xA = startX + i * step;
      const xB = startX + (i + 0.5) * step;
      const xC = startX + (i + 1) * step;

      // Parte trasera de la espira (más oscura)
      ctx.strokeStyle = '#0369a1';
      ctx.lineWidth = 4.5;
      ctx.beginPath();
      ctx.moveTo(xB, springY - 20);
      ctx.lineTo(xC, springY + 20);
      ctx.stroke();

      // Parte frontal de la espira (brillo metálico)
      ctx.strokeStyle = '#7dd3fc';
      ctx.lineWidth = 4.5;
      ctx.beginPath();
      ctx.moveTo(xA, springY + 20);
      ctx.lineTo(xB, springY - 20);
      ctx.stroke();
    }

    ctx.save();
    ctx.translate(bx, by);
    drawRealisticMassBlock(ctx, blockW, blockH, 'm', m1, 'blue');
    ctx.restore();

    // Cota dinámica de elongación x(t)
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 1.8;
    ctx.beginPath();
    ctx.moveTo(eqX, floorY + 22);
    ctx.lineTo(bx, floorY + 22);
    ctx.stroke();
    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 11.5px JetBrains Mono, monospace';
    ctx.textAlign = 'center';
    ctx.fillText(`x = ${sim.x.toFixed(2)} m`, (eqX + bx) / 2, floorY + 38);

    renderBodyVectors(bx, by, 'm1');
    return;
  }

  /* ==========================================================================
   * 5. ESCENA: TIRO PARABÓLICO / PROYECTIL 2D (projectile)
   * ========================================================================== */
  if (sceneType === 'projectile') {
    const groundY = 415;
    const originX = 105;
    const maxR = Math.max(30, solver.summary.maxRange || 50);
    const maxH = Math.max(14, solver.summary.maxHeight || 20);
    const scale = Math.min((W - 210) / maxR, (groundY - 115) / maxH);

    // Suelo con achurado y marcas de distancia cada 10 m
    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(40, groundY);
    ctx.lineTo(W - 40, groundY);
    ctx.stroke();
    drawEngineeringHatch(ctx, 40, groundY, W - 40, groundY, 18, 10);

    const stepMeters = maxR > 80 ? 20 : maxR > 35 ? 10 : 5;
    ctx.fillStyle = '#94a3b8';
    ctx.font = '10px JetBrains Mono, monospace';
    ctx.textAlign = 'center';
    for (let m = 0; m <= maxR * 1.1; m += stepMeters) {
      const mx = originX + m * scale;
      if (mx < W - 45) {
        ctx.beginPath();
        ctx.moveTo(mx, groundY - 4);
        ctx.lineTo(mx, groundY + 5);
        ctx.stroke();
        ctx.fillText(`${m}m`, mx, groundY + 17);
      }
    }

    // Plataforma inicial de altura h0
    const h0Px = (params.h0 || 0) * scale;
    if (h0Px > 2) {
      const platGrad = ctx.createLinearGradient(originX - 28, 0, originX + 28, 0);
      platGrad.addColorStop(0, '#1e293b');
      platGrad.addColorStop(0.5, '#475569');
      platGrad.addColorStop(1, '#1e293b');
      ctx.fillStyle = platGrad;
      ctx.strokeStyle = '#94a3b8';
      ctx.lineWidth = 2;
      ctx.fillRect(originX - 28, groundY - h0Px, 56, h0Px);
      ctx.strokeRect(originX - 28, groundY - h0Px, 56, h0Px);
    }

    // Cañón / Lanzador basculante orientado al ángulo θ
    const launchAngleRad = ((params.angle ?? 45) * Math.PI) / 180;
    ctx.save();
    ctx.translate(originX, groundY - h0Px);
    ctx.rotate(-launchAngleRad);
    ctx.fillStyle = '#334155';
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(-8, -9, 38, 18, 4);
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    // Parábola teórica completa punteada
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.25)';
    ctx.setLineDash([5, 5]);
    ctx.lineWidth = 2;
    ctx.beginPath();
    const totalT = solver.summary.tFlight || 3;
    for (let i = 0; i <= 60; i++) {
      const tt = (i / 60) * totalT;
      const tx = solver.summary.v0x * tt;
      const ty = (params.h0 || 0) + solver.summary.v0y * tt - 0.5 * (params.g || 9.81) * tt * tt;
      const px = originX + tx * scale;
      const py = groundY - Math.max(0, ty) * scale;
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.stroke();
    ctx.setLineDash([]);

    // Puntos estroboscópicos fantasma cada 0.45 s a lo largo del vuelo
    sim.strobePoints.forEach((sp) => {
      const sx = originX + sp.x * scale;
      const sy = groundY - sp.y * scale;
      ctx.fillStyle = 'rgba(56, 189, 248, 0.28)';
      ctx.beginPath();
      ctx.arc(sx, sy, 7, 0, Math.PI * 2);
      ctx.fill();
    });

    // Estela activa recorrida
    ctx.strokeStyle = '#34d399';
    ctx.lineWidth = 3;
    ctx.beginPath();
    sim.trail.forEach((pt, idx) => {
      const px = originX + pt.x * scale;
      const py = groundY - pt.y * scale;
      if (idx === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    });
    ctx.stroke();

    // Sombra proyectada en el suelo justo debajo de la esfera
    const curX = originX + sim.px * scale;
    const curY = groundY - sim.py * scale;
    ctx.fillStyle = 'rgba(0, 0, 0, 0.45)';
    ctx.beginPath();
    ctx.ellipse(curX, groundY, Math.max(5, 14 - sim.py * 0.2), 3.5, 0, 0, Math.PI * 2);
    ctx.fill();

    // Esfera proyectil metálica 3D
    const ballGrad = ctx.createRadialGradient(curX - 4, curY - 4, 2, curX, curY, 14);
    ballGrad.addColorStop(0, '#bae6fd');
    ballGrad.addColorStop(0.4, '#0284c7');
    ballGrad.addColorStop(1, '#0f172a');
    ctx.fillStyle = ballGrad;
    ctx.strokeStyle = '#7dd3fc';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(curX, curY, 13, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Marcador de altura máxima H_máx
    const tPeak = (solver.summary.v0y || 0) / (params.g || 9.81);
    const peakX = originX + (solver.summary.v0x || 0) * tPeak * scale;
    const peakY = groundY - (solver.summary.maxHeight || 0) * scale;
    ctx.strokeStyle = 'rgba(251, 191, 36, 0.45)';
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.moveTo(peakX, peakY);
    ctx.lineTo(peakX, groundY);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = '#fbbf24';
    ctx.font = 'bold 11px JetBrains Mono, monospace';
    ctx.fillText(`H_máx = ${(solver.summary.maxHeight || 0).toFixed(1)}m`, peakX, peakY - 10);

    renderBodyVectors(curX, curY, 'm1');
    return;
  }

  /* ==========================================================================
   * 6. ESCENA: PÉNDULO SIMPLE NO LINEAL (pendulum)
   * ========================================================================== */
  if (sceneType === 'pendulum') {
    const pivotX = W / 2;
    const pivotY = 98;
    const Lpx = Math.min(255, Math.max(130, Number(params.length ?? 3.5) * 60));

    const bobX = pivotX + Lpx * Math.sin(sim.theta);
    const bobY = pivotY + Lpx * Math.cos(sim.theta);

    // Soporte de techo con achurado y transportador angular
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(pivotX - 110, pivotY);
    ctx.lineTo(pivotX + 110, pivotY);
    ctx.stroke();
    drawEngineeringHatch(ctx, pivotX + 110, pivotY, pivotX - 110, pivotY, 14, 10);

    // Arco del transportador en el pivote
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.35)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(pivotX, pivotY, 56, 0, Math.PI);
    ctx.stroke();

    // Línea vertical de equilibrio punteada
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.3)';
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(pivotX, pivotY);
    ctx.lineTo(pivotX, pivotY + Lpx + 35);
    ctx.stroke();
    ctx.setLineDash([]);

    // Estela de oscilación circular
    if (sim.pendulumTrail.length > 1) {
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.35)';
      ctx.lineWidth = 3;
      ctx.beginPath();
      sim.pendulumTrail.forEach((pt, i) => {
        const tx = pivotX + Lpx * Math.sin(pt.theta);
        const ty = pivotY + Lpx * Math.cos(pt.theta);
        if (i === 0) ctx.moveTo(tx, ty);
        else ctx.lineTo(tx, ty);
      });
      ctx.stroke();
    }

    // Cuerda trenzada y articulación del pivote
    drawBraidedRope(ctx, pivotX, pivotY, bobX, bobY);
    ctx.fillStyle = '#e2e8f0';
    ctx.beginPath();
    ctx.arc(pivotX, pivotY, 6, 0, Math.PI * 2);
    ctx.fill();

    // Esfera metálica 3D del péndulo con tamaño proporcional a la masa
    const m1 = Number(params.m1 ?? 2.5);
    const bobR = Math.min(34, Math.max(22, 18 + m1 * 2.5));
    const sphereGrad = ctx.createRadialGradient(
      bobX - bobR * 0.3,
      bobY - bobR * 0.3,
      3,
      bobX,
      bobY,
      bobR
    );
    sphereGrad.addColorStop(0, '#bae6fd');
    sphereGrad.addColorStop(0.45, '#0284c7');
    sphereGrad.addColorStop(1, '#0f172a');

    ctx.fillStyle = sphereGrad;
    ctx.strokeStyle = '#7dd3fc';
    ctx.lineWidth = 2.2;
    ctx.beginPath();
    ctx.arc(bobX, bobY, bobR, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 11.5px JetBrains Mono, monospace';
    ctx.textAlign = 'center';
    ctx.fillText(`${m1}kg`, bobX, bobY + 4);

    renderBodyVectors(bobX, bobY, 'm1');
    return;
  }

  /* ==========================================================================
   * 7. MODO JUEGO / CONSTRUCTOR LIBRE REALISTA (sandbox_game)
   * ========================================================================== */
  if (sceneType === 'sandbox_game') {
    const objects = opts.sandboxObjects || [];
    const ropes = opts.sandboxRopes || [];
    const pxOffset = sim.s * 32;

    // Dibujar cuerdas trenzadas y poleas con rayos giratorios
    ropes.forEach((r) => {
      const o1 = objects.find((o) => o.id === r.fromId);
      const o2 = objects.find((o) => o.id === r.toId);
      if (!o1 || !o2) return;

      const a1 = ((Number(o1.angleDeg) || 0) * Math.PI) / 180;
      const a2 = ((Number(o2.angleDeg) || 0) * Math.PI) / 180;

      const x1 = o1.x + (o1.type === 'hanging_mass' ? 0 : pxOffset * Math.cos(a1));
      const y1 = o1.y + (o1.type === 'hanging_mass' ? pxOffset : -pxOffset * Math.sin(a1));
      const x2 = o2.x + (o2.type === 'hanging_mass' ? 0 : pxOffset * Math.cos(a2));
      const y2 = o2.y + (o2.type === 'hanging_mass' ? pxOffset : -pxOffset * Math.sin(a2));

      const pulleyX = (o1.x + o2.x) / 2;
      const pulleyY = Math.min(o1.y, o2.y) - 65;

      drawBraidedRope(ctx, x1, y1, pulleyX, pulleyY);
      drawBraidedRope(ctx, pulleyX, pulleyY, x2, y2);
      drawRealisticPulley(ctx, pulleyX, pulleyY, 19, sim.pulleyAngle, pulleyX, pulleyY - 28);
    });

    objects.forEach((obj) => {
      const angleRad = ((Number(obj.angleDeg) || 0) * Math.PI) / 180;
      const isSelected = opts.selectedObjId === obj.id;
      const isConnecting = opts.connectingFromId === obj.id;

      const curX =
        obj.type === 'hanging_mass' ? obj.x : obj.x + pxOffset * Math.cos(angleRad);
      const curY =
        obj.type === 'hanging_mass' ? obj.y + pxOffset : obj.y - pxOffset * Math.sin(angleRad);

      const m = Number(obj.mass || 5);
      const bw = Math.min(88, Math.max(60, 50 + m * 2));
      const bh = Math.min(60, Math.max(44, 36 + m * 1.4));

      ctx.save();
      ctx.translate(curX, curY);

      if (obj.type !== 'hanging_mass') {
        ctx.rotate(-angleRad);
        // Plataforma / Rampa de soporte con achurado bajo el bloque
        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 3.5;
        ctx.beginPath();
        ctx.moveTo(-105, bh / 2 + 2);
        ctx.lineTo(105, bh / 2 + 2);
        ctx.stroke();
        drawEngineeringHatch(ctx, -105, bh / 2 + 2, 105, bh / 2 + 2, 14, 9);
        drawFrictionRoughness(ctx, -100, bh / 2 + 2, 100, bh / 2 + 2, obj.mu);
      }

      drawRealisticMassBlock(
        ctx,
        bw,
        bh,
        obj.label,
        m,
        obj.type === 'hanging_mass' ? 'crimson' : 'blue',
        isSelected || isConnecting
      );
      ctx.restore();

      if (opts.showComponents && obj.type !== 'hanging_mass' && Number(obj.angleDeg) > 0) {
        drawWeightDecompositionBox(ctx, curX, curY, m * (params.g || 9.81), Number(obj.angleDeg));
      }

      renderBodyVectors(curX, curY, obj.id);
    });
    return;
  }
}
