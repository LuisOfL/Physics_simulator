import React from 'react';
import { Compass, CheckCircle2, Cpu } from 'lucide-react';

export default function FreeBodyDiagramInspector({ solver }) {
  if (!solver) return null;
  const bodies = solver.fbdBodies || [];
  const steps = solver.steps || [];

  return (
    <div className="space-y-3.5">
      {/* Rack de Diagramas de Cuerpo Libre Aislados */}
      <div className="bg-[#0b0d13] border border-[#212738] rounded-xl p-3.5 sm:p-4 shadow-xl">
        <div className="flex items-center justify-between mb-3 border-b border-[#1c2230] pb-2.5">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
              <Compass className="w-3.5 h-3.5" />
            </div>
            <div>
              <h3 className="font-heading text-xs sm:text-sm font-bold text-zinc-100 tracking-wide uppercase">
                VECTORES DE CUERPO LIBRE // PARTICULA PUNTUAL (DCL)
              </h3>
              <p className="font-tech text-[10.5px] text-zinc-500">
                PROYECCIÓN CARTESIANA ROTADA EN EL CENTRO DE MASA (CM)
              </p>
            </div>
          </div>
          <span className="font-tech text-[10px] px-2 py-0.5 rounded bg-[#151924] text-amber-300 border border-[#283248]">
            NODOS ACTIVOS: 0{bodies.length}
          </span>
        </div>

        <div className={`grid gap-3.5 ${bodies.length > 1 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
          {bodies.map((body) => (
            <div
              key={body.id}
              className="bg-[#0e1119] border border-[#202637] rounded-lg p-3 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-[#1c2232] pb-2 mb-2.5">
                  <div>
                    <h4 className="font-tech text-xs font-bold text-zinc-100 uppercase">{body.label}</h4>
                    <p className="font-tech text-[10px] text-zinc-500">{body.subtitle}</p>
                  </div>
                  {body.axisAngleDeg !== 0 && (
                    <span className="font-tech text-[10px] px-2 py-0.5 rounded bg-indigo-500/15 text-indigo-300 border border-indigo-500/35 font-semibold">
                      θ = {body.axisAngleDeg}°
                    </span>
                  )}
                </div>

                {/* Diagrama SVG de la partícula puntual */}
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <div className="w-40 h-40 shrink-0 bg-[#07090e] rounded-lg border border-[#1f2536] flex items-center justify-center relative shadow-inner">
                    <IsolatedFbdSvg body={body} />
                  </div>

                  {/* Tabla de Tensores de Fuerza */}
                  <div className="flex-1 w-full space-y-1 font-tech">
                    {body.vectors.map((vec) => (
                      <div
                        key={vec.id}
                        className="flex items-center justify-between text-[11px] px-2 py-1 rounded bg-[#131722] border border-[#20273a]"
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <span
                            className="w-2 h-2 rounded-full shrink-0 shadow-xs"
                            style={{ backgroundColor: vec.color }}
                          />
                          <div className="truncate">
                            <span className="font-bold text-zinc-200">{vec.symbol}</span>
                            <span className="text-zinc-500 text-[10px] ml-1.5 hidden xs:inline">({vec.name})</span>
                          </div>
                        </div>
                        <span
                          className="font-bold text-[10.5px] ml-2 shrink-0"
                          style={{ color: vec.color }}
                        >
                          {vec.magnitude.toFixed(1)} N
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Ecuaciones Newtonianas de Equilibrio */}
              <div className="mt-3 pt-2 border-t border-[#1a1f2c] space-y-1">
                <div className="font-tech text-[9.5px] uppercase tracking-wider text-zinc-500 font-semibold">
                  ∑F⃗ = m·a⃗ (2ª LEY DE NEWTON):
                </div>
                {body.equations.map((eq, i) => (
                  <div
                    key={i}
                    className="font-tech text-[11px] text-emerald-300 bg-[#07130e] border border-emerald-900/60 rounded px-2.5 py-1 font-medium"
                  >
                    {eq}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Rack de Resolución Matemática Paso a Paso */}
      <div className="bg-[#0b0d13] border border-[#212738] rounded-xl p-3.5 sm:p-4 shadow-xl">
        <div className="flex items-center gap-2 mb-3 border-b border-[#1c2230] pb-2.5">
          <div className="w-6 h-6 rounded bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400">
            <Cpu className="w-3.5 h-3.5" />
          </div>
          <div>
            <h3 className="font-heading text-xs sm:text-sm font-bold text-zinc-100 tracking-wide uppercase">
              DESGLOSE ANALÍTICO SECUENCIAL
            </h3>
            <p className="font-tech text-[10.5px] text-zinc-500">
              RECALCULADO DINÁMICO EN VIVO ANTE CUALQUIER VARIACIÓN
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {steps.map((st, idx) => (
            <div
              key={idx}
              className="bg-[#0e1119] border border-[#202637] rounded-lg p-3 space-y-1.5"
            >
              <div className="flex items-center gap-1.5 font-tech text-xs font-bold text-amber-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{st.title}</span>
              </div>
              <p className="text-[11.5px] text-zinc-400 leading-relaxed">{st.detail}</p>
              <div className="font-tech text-[11px] text-amber-200 bg-[#07090f] border border-[#1e2434] rounded px-2.5 py-1.5 overflow-x-auto">
                {st.formula}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function IsolatedFbdSvg({ body }) {
  const cx = 80;
  const cy = 80;
  const maxMag = Math.max(10, ...body.vectors.map((v) => v.magnitude));
  const axisAngle = -(body.axisAngleDeg || 0);

  return (
    <svg viewBox="0 0 160 160" className="w-full h-full">
      {/* Retícula de radar polar */}
      <circle
        cx={cx}
        cy={cy}
        r={58}
        fill="none"
        stroke="rgba(245, 158, 11, 0.1)"
        strokeDasharray="2 3"
      />
      <circle
        cx={cx}
        cy={cy}
        r={32}
        fill="none"
        stroke="rgba(255, 255, 255, 0.05)"
      />

      {/* Ejes X'-Y' */}
      <g transform={`rotate(${axisAngle} ${cx} ${cy})`}>
        <line
          x1={cx - 65}
          y1={cy}
          x2={cx + 65}
          y2={cy}
          stroke="rgba(148, 163, 184, 0.28)"
          strokeWidth="1.2"
          strokeDasharray="3 3"
        />
        <line
          x1={cx}
          y1={cy - 65}
          x2={cx}
          y2={cy + 65}
          stroke="rgba(148, 163, 184, 0.28)"
          strokeWidth="1.2"
          strokeDasharray="3 3"
        />
        <text x={cx + 54} y={cy - 4} fill="#64748b" fontSize="8.5" fontFamily="monospace">
          +X&apos;
        </text>
        <text x={cx + 4} y={cy - 54} fill="#64748b" fontSize="8.5" fontFamily="monospace">
          +Y&apos;
        </text>
      </g>

      {/* Vectores */}
      {body.vectors.map((vec) => {
        if (vec.magnitude < 0.05) return null;
        const len = Math.max(22, Math.min(56, (vec.magnitude / maxMag) * 54));
        const rad = (-vec.angleDeg * Math.PI) / 180;
        const x2 = cx + len * Math.cos(rad);
        const y2 = cy + len * Math.sin(rad);

        const head = 5.5;
        const angle = Math.atan2(y2 - cy, x2 - cx);
        const p1x = x2 - head * Math.cos(angle - Math.PI / 6);
        const p1y = y2 - head * Math.sin(angle - Math.PI / 6);
        const p2x = x2 - head * Math.cos(angle + Math.PI / 6);
        const p2y = y2 - head * Math.sin(angle + Math.PI / 6);

        const lx = cx + (len + 12) * Math.cos(rad);
        const ly = cy + (len + 12) * Math.sin(rad);
        const shortLabel = vec.symbol.split('=')[0].trim();

        return (
          <g key={vec.id}>
            <line
              x1={cx}
              y1={cy}
              x2={x2}
              y2={y2}
              stroke={vec.color}
              strokeWidth={vec.dashed ? '1.6' : '2.4'}
              strokeDasharray={vec.dashed ? '3 2' : undefined}
            />
            <polygon points={`${x2},${y2} ${p1x},${p1y} ${p2x},${p2y}`} fill={vec.color} />
            <text
              x={lx}
              y={ly + 3}
              fill={vec.color}
              fontSize="9"
              fontWeight="bold"
              fontFamily="monospace"
              textAnchor="middle"
            >
              {shortLabel}
            </text>
          </g>
        );
      })}

      {/* Partícula puntual central */}
      <circle cx={cx} cy={cy} r={4.5} fill="#f59e0b" stroke="#000000" strokeWidth="2" />
    </svg>
  );
}
