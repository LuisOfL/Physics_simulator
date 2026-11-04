import React from 'react';
import { Compass, CheckCircle2, Layers } from 'lucide-react';

export default function FreeBodyDiagramInspector({ solver }) {
  if (!solver) return null;
  const bodies = solver.fbdBodies || [];
  const steps = solver.steps || [];

  return (
    <div className="space-y-4">
      {/* Tarjetas de Diagramas de Cuerpo Libre Aislados por Cuerpo */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-100">
                Diagramas de Cuerpo Libre Aislados (DCL)
              </h3>
              <p className="text-xs text-slate-400">
                Cada cuerpo aislado como partícula puntual en su sistema de coordenadas (X&apos;-Y&apos;)
              </p>
            </div>
          </div>
          <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-slate-800 text-cyan-300 border border-slate-700">
            {bodies.length} {bodies.length === 1 ? 'Cuerpo' : 'Cuerpos'}
          </span>
        </div>

        <div className={`grid gap-4 ${bodies.length > 1 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
          {bodies.map((body) => (
            <div
              key={body.id}
              className="bg-slate-950/85 border border-slate-800/90 rounded-xl p-3.5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-2 mb-3">
                  <div>
                    <h4 className="text-xs font-bold text-cyan-300">{body.label}</h4>
                    <p className="text-[11px] text-slate-400">{body.subtitle}</p>
                  </div>
                  {body.axisAngleDeg !== 0 && (
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                      Ejes rotados {body.axisAngleDeg}°
                    </span>
                  )}
                </div>

                {/* Diagrama SVG interactivo del cuerpo aislado */}
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <div className="w-44 h-44 shrink-0 bg-slate-900/90 rounded-xl border border-slate-800/80 flex items-center justify-center relative">
                    <IsolatedFbdSvg body={body} />
                  </div>

                  {/* Tabla de Fuerzas del Cuerpo */}
                  <div className="flex-1 w-full space-y-1.5">
                    {body.vectors.map((vec) => (
                      <div
                        key={vec.id}
                        className="flex items-center justify-between text-xs px-2.5 py-1.5 rounded-lg bg-slate-900/70 border border-slate-800/60"
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <span
                            className="w-2.5 h-2.5 rounded-full shrink-0"
                            style={{ backgroundColor: vec.color }}
                          />
                          <div className="truncate">
                            <span className="font-mono font-bold text-slate-200">{vec.symbol}</span>
                            <span className="text-slate-400 text-[11px] ml-1.5">({vec.name})</span>
                          </div>
                        </div>
                        <span
                          className="font-mono font-semibold text-[11px] ml-2 shrink-0"
                          style={{ color: vec.color }}
                        >
                          {vec.magnitude.toFixed(2)} N
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Ecuaciones de Newton para este cuerpo */}
              <div className="mt-3 pt-2.5 border-t border-slate-800/80 space-y-1">
                <div className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">
                  Sumatoria de Fuerzas (2ª Ley de Newton):
                </div>
                {body.equations.map((eq, i) => (
                  <div
                    key={i}
                    className="font-mono text-xs text-emerald-300 bg-emerald-950/30 border border-emerald-500/20 rounded-lg px-2.5 py-1"
                  >
                    {eq}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Resolución Paso a Paso en Tiempo Real */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-xl">
        <div className="flex items-center gap-2 mb-3">
          <div className="p-1.5 rounded-lg bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-100">
              Resolución Analítica Paso a Paso en Vivo
            </h3>
            <p className="text-xs text-slate-400">
              Se recalcula instantáneamente al mover cualquier control o cuerda del simulador
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {steps.map((st, idx) => (
            <div
              key={idx}
              className="bg-slate-950/80 border border-slate-800/90 rounded-xl p-3 space-y-1.5"
            >
              <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{st.title}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">{st.detail}</p>
              <div className="font-mono text-xs text-amber-300 bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 overflow-x-auto">
                {st.formula}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Renderiza el Diagrama de Cuerpo Libre aislado en coordenadas cartesianas / rotadas en SVG limpio
 */
function IsolatedFbdSvg({ body }) {
  const cx = 88;
  const cy = 88;
  const maxMag = Math.max(10, ...body.vectors.map((v) => v.magnitude));
  const axisAngle = -(body.axisAngleDeg || 0);

  return (
    <svg viewBox="0 0 176 176" className="w-full h-full">
      {/* Círculo de referencia trigonométrica */}
      <circle
        cx={cx}
        cy={cy}
        r={64}
        fill="none"
        stroke="rgba(148, 163, 184, 0.12)"
        strokeDasharray="3 3"
      />

      {/* Ejes X'-Y' (rotados si está en plano inclinado) */}
      <g transform={`rotate(${axisAngle} ${cx} ${cy})`}>
        <line
          x1={cx - 72}
          y1={cy}
          x2={cx + 72}
          y2={cy}
          stroke="rgba(148, 163, 184, 0.35)"
          strokeWidth="1"
          strokeDasharray="4 3"
        />
        <line
          x1={cx}
          y1={cy - 72}
          x2={cx}
          y2={cy + 72}
          stroke="rgba(148, 163, 184, 0.35)"
          strokeWidth="1"
          strokeDasharray="4 3"
        />
        <text x={cx + 62} y={cy - 5} fill="#64748b" fontSize="9" fontFamily="monospace">
          +X&apos;
        </text>
        <text x={cx + 5} y={cy - 62} fill="#64748b" fontSize="9" fontFamily="monospace">
          +Y&apos;
        </text>
      </g>

      {/* Vectores de fuerza que parten del centro de masa */}
      {body.vectors.map((vec) => {
        if (vec.magnitude < 0.05) return null;
        const len = Math.max(24, Math.min(64, (vec.magnitude / maxMag) * 60));
        const rad = (-vec.angleDeg * Math.PI) / 180;
        const x2 = cx + len * Math.cos(rad);
        const y2 = cy + len * Math.sin(rad);

        // Puntas de flecha
        const head = 6;
        const angle = Math.atan2(y2 - cy, x2 - cx);
        const p1x = x2 - head * Math.cos(angle - Math.PI / 6);
        const p1y = y2 - head * Math.sin(angle - Math.PI / 6);
        const p2x = x2 - head * Math.cos(angle + Math.PI / 6);
        const p2y = y2 - head * Math.sin(angle + Math.PI / 6);

        const lx = cx + (len + 13) * Math.cos(rad);
        const ly = cy + (len + 13) * Math.sin(rad);
        const shortLabel = vec.symbol.split('=')[0].trim();

        return (
          <g key={vec.id}>
            <line
              x1={cx}
              y1={cy}
              x2={x2}
              y2={y2}
              stroke={vec.color}
              strokeWidth={vec.dashed ? '1.8' : '2.6'}
              strokeDasharray={vec.dashed ? '3 2' : undefined}
            />
            <polygon points={`${x2},${y2} ${p1x},${p1y} ${p2x},${p2y}`} fill={vec.color} />
            <text
              x={lx}
              y={ly + 3}
              fill={vec.color}
              fontSize="9.5"
              fontWeight="bold"
              fontFamily="monospace"
              textAnchor="middle"
            >
              {shortLabel}
            </text>
          </g>
        );
      })}

      {/* Partícula puntual central (Centro de Masa) */}
      <circle cx={cx} cy={cy} r={5.5} fill="#f8fafc" stroke="#0284c7" strokeWidth="2.5" />
    </svg>
  );
}

