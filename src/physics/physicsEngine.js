// Motor Analítico y Numérico de Mecánica Clásica + Generador de Diagramas de Cuerpo Libre (DCL)

export const GRAVITY_PRESETS = [
  { id: 'earth', name: 'Tierra', g: 9.81, badge: '🌍 9.81 m/s²' },
  { id: 'moon', name: 'Luna', g: 1.62, badge: '🌙 1.62 m/s²' },
  { id: 'mars', name: 'Marte', g: 3.72, badge: '🔴 3.72 m/s²' },
  { id: 'jupiter', name: 'Júpiter', g: 24.79, badge: '🟠 24.79 m/s²' },
];

export const SCENE_TEMPLATES = {
  incline_pulley: {
    id: 'incline_pulley',
    name: 'Plano Inclinado + Polea y Cuerda',
    shortName: 'Plano Inclinado / Polea',
    category: 'Dinámica & Leyes de Newton',
    description:
      'Bloque m₁ sobre rampa inclinada un ángulo θ con fricción μ, conectado mediante una cuerda ideal y polea a un bloque colgante m₂ (pon m₂ = 0 para plano inclinado simple).',
    params: {
      m1: 6.0, // kg (en la rampa)
      m2: 4.5, // kg (colgando, 0 = sin bloque colgante)
      angle: 30, // grados
      muK: 0.15, // coef. fricción cinética
      muS: 0.22, // coef. fricción estática
      fExt: 0, // Fuerza externa paralela a la rampa (N)
      g: 9.81,
    },
  },
  horizontal_table: {
    id: 'horizontal_table',
    name: 'Mesa Horizontal con Polea y Dos Bloques',
    shortName: 'Mesa + Polea',
    category: 'Sistemas Conectados',
    description:
      'Bloque m₁ sobre una superficie horizontal con fricción μ y fuerza externa opcional F_ext a un ángulo α, conectado por cuerda y polea a una masa colgante m₂.',
    params: {
      m1: 5.0,
      m2: 3.0,
      muK: 0.2,
      muS: 0.28,
      fExt: 10,
      fAngle: 0, // ángulo de la fuerza externa en grados
      g: 9.81,
    },
  },
  atwood: {
    id: 'atwood',
    name: 'Máquina de Atwood (Polea Ideal)',
    shortName: 'Máquina de Atwood',
    category: 'Tensión y Poleas',
    description:
      'Dos masas m₁ y m₂ suspendidas verticalmente de una cuerda inextensible que pasa por una polea sin fricción.',
    params: {
      m1: 7.0,
      m2: 4.0,
      g: 9.81,
    },
  },
  spring_block: {
    id: 'spring_block',
    name: 'Sistema Masa-Resorte (Ley de Hooke)',
    shortName: 'Masa-Resorte',
    category: 'Energía & Oscilaciones',
    description:
      'Bloque de masa m acoplado a un resorte de constante elástica k sobre una superficie con fricción μ_k.',
    params: {
      m1: 3.0,
      k: 45.0, // N/m
      x0: 2.2, // estiramiento inicial (m)
      muK: 0.04,
      g: 9.81,
    },
  },
  projectile: {
    id: 'projectile',
    name: 'Tiro Parabólico / Proyectil 2D',
    shortName: 'Proyectil 2D',
    category: 'Cinemática 2D',
    description:
      'Lanzamiento de un proyectil de masa m desde una altura h₀ con velocidad inicial v₀ y ángulo de elevación θ.',
    params: {
      m1: 2.0,
      v0: 22.0, // m/s
      angle: 45, // grados
      h0: 2.0, // m
      g: 9.81,
    },
  },
  pendulum: {
    id: 'pendulum',
    name: 'Péndulo Simple & Tensión Radial',
    shortName: 'Péndulo Simple',
    category: 'Dinámica Circular',
    description:
      'Esfera de masa m suspendida de una cuerda de longitud L que oscila bajo gravedad mostrando tensión y componentes radial/tangencial del peso.',
    params: {
      m1: 2.5,
      length: 3.5, // m
      angle0: 40, // grados inicial
      damping: 0.02,
      g: 9.81,
    },
  },
  sandbox_game: {
    id: 'sandbox_game',
    name: 'Modo Juego: Constructor Libre de Cuerdas y Objetos',
    shortName: '🎮 Constructor / Juego',
    category: 'Laboratorio Libre',
    description:
      'Agrega bloques, rampas, poleas, cuerdas y fuerzas con el mouse. Conéctalos libremente, simula en tiempo real y pídele al LLM de AWS Bedrock que resuelva lo que armaste.',
    params: {
      g: 9.81,
    },
  },
  ai_custom_code: {
    id: 'ai_custom_code',
    name: 'Simulación Programada Dinámicamente por el LLM (AWS Bedrock)',
    shortName: '✨ Código IA Dinámico',
    category: 'Generación de Código con LLM',
    description:
      'Pídele al LLM en el chat cualquier problema físico especial (ej. colisión de dos esferas, doble polea, rizo de montaña rusa) y el LLM programará el código Canvas 2D en vivo.',
    params: {
      m1: 4.0,
      m2: 2.5,
      g: 9.81,
    },
  },
};

/**
 * Calcula todas las fuerzas, aceleraciones, tensiones, energías, Diagramas de Cuerpo Libre (DCL)
 * y la solución paso a paso exacta para cualquier configuración de escena.
 */
export function solveMechanicsScene(sceneType, rawParams, simState = {}) {
  const g = Number(rawParams.g ?? 9.81);

  if (sceneType === 'incline_pulley') {
    const m1 = Math.max(0.1, Number(rawParams.m1 ?? 6));
    const m2 = Math.max(0, Number(rawParams.m2 ?? 4.5));
    const angleDeg = Number(rawParams.angle ?? 30);
    const theta = (angleDeg * Math.PI) / 180;
    const muK = Math.max(0, Number(rawParams.muK ?? 0.15));
    const muS = Math.max(muK, Number(rawParams.muS ?? 0.2));
    const fExt = Number(rawParams.fExt ?? 0); // positivo = subiendo la rampa

    const W1 = m1 * g;
    const W1x = W1 * Math.sin(theta); // componente que tira hacia abajo de la rampa
    const W1y = W1 * Math.cos(theta);
    const N1 = W1y;
    const W2 = m2 * g;

    const fsMax = muS * N1;
    const fkMag = muK * N1;

    // Fuerza impulsora neta sin fricción (positiva = m1 sube por la rampa y m2 baja)
    const drivingUpRamp = W2 + fExt - W1x;
    let a = 0;
    let friction = 0; // signo: positivo si apunta subiendo la rampa, negativo si apunta bajando la rampa
    let motionState = 'En reposo (Equilibrio Estático)';

    const currentVel = Number(simState.v ?? 0);

    if (Math.abs(currentVel) > 0.01) {
      // Ya está en movimiento
      const dir = Math.sign(currentVel); // +1 subiendo rampa, -1 bajando rampa
      friction = -dir * fkMag;
      a = (drivingUpRamp + friction) / (m1 + m2);
      motionState =
        dir > 0
          ? 'm₁ sube por la rampa / m₂ desciende'
          : 'm₁ se desliza rampa abajo / m₂ asciende';
    } else {
      // Evaluar si rompe fricción estática
      if (Math.abs(drivingUpRamp) <= fsMax) {
        a = 0;
        friction = -drivingUpRamp; // se opone exactamente a la tendencia
        motionState = 'Equilibrio Estático (|F_impulsora| ≤ f_s,máx)';
      } else {
        const dir = Math.sign(drivingUpRamp); // +1 sube, -1 baja
        friction = -dir * fkMag;
        a = (drivingUpRamp + friction) / (m1 + m2);
        motionState =
          dir > 0
            ? 'm₁ acelera rampa arriba / m₂ baja'
            : 'm₁ acelera rampa abajo / m₂ sube';
      }
    }

    // Tensión de la cuerda (si m2 > 0)
    // Para m2 (positivo hacia abajo): W2 - T = m2 * a  =>  T = m2 * (g - a)
    const T = m2 > 0 ? Math.max(0, m2 * (g - a)) : 0;

    // Diagramas de cuerpo libre (vectores con ángulo en grados en el sistema global y local)
    const fbdBodies = [
      {
        id: 'm1',
        label: `Bloque m₁ (${m1.toFixed(1)} kg)`,
        mass: m1,
        axisAngleDeg: angleDeg,
        subtitle: `Sobre plano inclinado θ = ${angleDeg}°`,
        vectors: [
          {
            id: 'W1',
            symbol: 'W₁ = m₁g',
            name: 'Peso',
            magnitude: W1,
            angleDeg: -90, // hacia abajo
            color: '#f43f5e',
            formula: `${m1} × ${g.toFixed(2)} = ${W1.toFixed(2)} N`,
          },
          {
            id: 'W1x',
            symbol: 'W₁ₓ = m₁g·senθ',
            name: 'Comp. Peso paralela',
            magnitude: W1x,
            angleDeg: 180 + angleDeg, // rampa abajo
            color: '#fb7185',
            dashed: true,
            formula: `${W1.toFixed(1)}·sen(${angleDeg}°) = ${W1x.toFixed(2)} N`,
          },
          {
            id: 'W1y',
            symbol: 'W₁ᵧ = m₁g·cosθ',
            name: 'Comp. Peso perpendicular',
            magnitude: W1y,
            angleDeg: -90 + angleDeg, // perpendicular hacia adentro de la rampa
            color: '#fda4af',
            dashed: true,
            formula: `${W1.toFixed(1)}·cos(${angleDeg}°) = ${W1y.toFixed(2)} N`,
          },
          {
            id: 'N1',
            symbol: 'N₁',
            name: 'Fuerza Normal',
            magnitude: N1,
            angleDeg: 90 + angleDeg, // perpendicular saliendo de la rampa
            color: '#38bdf8',
            formula: `m₁g·cos(${angleDeg}°) = ${N1.toFixed(2)} N`,
          },
          ...(m2 > 0
            ? [
                {
                  id: 'T',
                  symbol: 'T',
                  name: 'Tensión de Cuerda',
                  magnitude: T,
                  angleDeg: angleDeg, // rampa arriba hacia la polea
                  color: '#fbbf24',
                  formula: `m₂(g - a) = ${T.toFixed(2)} N`,
                },
              ]
            : []),
          ...(Math.abs(fExt) > 0.01
            ? [
                {
                  id: 'Fext',
                  symbol: 'F_ext',
                  name: 'Fuerza Aplicada',
                  magnitude: Math.abs(fExt),
                  angleDeg: fExt >= 0 ? angleDeg : 180 + angleDeg,
                  color: '#34d399',
                  formula: `${Math.abs(fExt).toFixed(2)} N`,
                },
              ]
            : []),
          ...(Math.abs(friction) > 0.01
            ? [
                {
                  id: 'fr',
                  symbol: Math.abs(a) === 0 ? 'f_s' : 'f_k',
                  name: Math.abs(a) === 0 ? 'Fricción Estática' : 'Fricción Cinética',
                  magnitude: Math.abs(friction),
                  angleDeg: friction >= 0 ? angleDeg : 180 + angleDeg,
                  color: '#fb923c',
                  formula:
                    Math.abs(a) === 0
                      ? `|F_imp| = ${Math.abs(friction).toFixed(2)} N (≤ ${fsMax.toFixed(2)} N)`
                      : `μ_k·N₁ = ${muK} × ${N1.toFixed(2)} = ${Math.abs(friction).toFixed(2)} N`,
                },
              ]
            : []),
        ],
        equations: [
          `∑F_y' = N₁ - m₁g·cos(${angleDeg}°) = 0  ⇒  N₁ = ${N1.toFixed(2)} N`,
          `∑F_x' = ${m2 > 0 ? 'T + ' : ''}${fExt !== 0 ? 'F_ext + ' : ''}f_r - m₁g·sen(${angleDeg}°) = m₁·a`,
        ],
      },
    ];

    if (m2 > 0) {
      fbdBodies.push({
        id: 'm2',
        label: `Bloque Colgante m₂ (${m2.toFixed(1)} kg)`,
        mass: m2,
        axisAngleDeg: 0,
        subtitle: 'Suspendido verticalmente de la polea',
        vectors: [
          {
            id: 'W2',
            symbol: 'W₂ = m₂g',
            name: 'Peso de m₂',
            magnitude: W2,
            angleDeg: -90,
            color: '#f43f5e',
            formula: `${m2} × ${g.toFixed(2)} = ${W2.toFixed(2)} N`,
          },
          {
            id: 'T2',
            symbol: 'T',
            name: 'Tensión de Cuerda',
            magnitude: T,
            angleDeg: 90,
            color: '#fbbf24',
            formula: `T = ${T.toFixed(2)} N`,
          },
        ],
        equations: [
          `∑F_y = m₂g - T = m₂·a`,
          `T = m₂(g - a) = ${m2.toFixed(1)}(${g.toFixed(2)} - (${a.toFixed(2)})) = ${T.toFixed(2)} N`,
        ],
      });
    }

    const steps = [
      {
        title: '1. Descomposición del Peso y Fuerza Normal en la Rampa',
        detail: `Rotamos el eje X' paralelo al plano inclinado (${angleDeg}°). El peso W₁ = m₁g = ${W1.toFixed(2)} N se descompone en:`,
        formula: `W₁ₓ = m₁g·sen(${angleDeg}°) = ${W1x.toFixed(2)} N   |   W₁ᵧ = m₁g·cos(${angleDeg}°) = ${W1y.toFixed(2)} N`,
      },
      {
        title: '2. Cálculo de la Normal y Fricción Límite',
        detail: `Como no hay movimiento perpendicular a la rampa (∑F_y' = 0), la Normal equilibra a W₁ᵧ:`,
        formula: `N₁ = ${N1.toFixed(2)} N   ⇒   f_{s,máx} = μ_s·N₁ = ${fsMax.toFixed(2)} N,   f_k = μ_k·N₁ = ${fkMag.toFixed(2)} N`,
      },
      {
        title: '3. Segunda Ley de Newton al Sistema Acoplado',
        detail:
          m2 > 0
            ? `Sumando las ecuaciones de m₁ (eje X' subiendo rampa) y m₂ (eje Y bajando), la tensión interna T se cancela:`
            : `Aplicando ∑F_x' = m₁·a a lo largo del plano inclinado:`,
        formula:
          m2 > 0
            ? `a = (m₂g + F_ext - m₁g·senθ + f_r) / (m₁ + m₂) = ${a.toFixed(3)} m/s²`
            : `a = (F_ext - m₁g·senθ + f_r) / m₁ = ${a.toFixed(3)} m/s²`,
      },
      ...(m2 > 0
        ? [
            {
              title: '4. Determinación de la Tensión en la Cuerda (T)',
              detail: `Sustituyendo la aceleración a = ${a.toFixed(3)} m/s² en la ecuación del bloque colgante m₂:`,
              formula: `T = m₂(g - a) = ${m2} × (${g.toFixed(2)} - ${a.toFixed(3)}) = ${T.toFixed(2)} N`,
            },
          ]
        : []),
    ];

    return {
      sceneType,
      motionState,
      summary: {
        acceleration: a,
        tension: T,
        normal1: N1,
        friction: Math.abs(friction),
        w1x: W1x,
        w1y: W1y,
        w2: W2,
      },
      fbdBodies,
      steps,
    };
  }

  if (sceneType === 'horizontal_table') {
    const m1 = Math.max(0.1, Number(rawParams.m1 ?? 5));
    const m2 = Math.max(0, Number(rawParams.m2 ?? 3));
    const muK = Math.max(0, Number(rawParams.muK ?? 0.2));
    const muS = Math.max(muK, Number(rawParams.muS ?? 0.28));
    const fExt = Number(rawParams.fExt ?? 0);
    const fAngleDeg = Number(rawParams.fAngle ?? 0);
    const fAngleRad = (fAngleDeg * Math.PI) / 180;

    const W1 = m1 * g;
    const FextX = fExt * Math.cos(fAngleRad);
    const FextY = fExt * Math.sin(fAngleRad);
    const N1 = Math.max(0, W1 - FextY);
    const W2 = m2 * g;

    const fsMax = muS * N1;
    const fkMag = muK * N1;

    const drivingRight = W2 + FextX;
    let a = 0;
    let friction = 0;
    let motionState = 'En reposo';

    if (Math.abs(drivingRight) <= fsMax && Math.abs(simState.v ?? 0) < 0.01) {
      a = 0;
      friction = -drivingRight;
      motionState = 'Equilibrio Estático (Fricción estática retiene el sistema)';
    } else {
      const dir = Math.sign(drivingRight || 1);
      friction = -dir * fkMag;
      a = (drivingRight + friction) / (m1 + m2);
      motionState =
        a > 0
          ? 'm₁ acelera a la derecha y m₂ desciende'
          : 'Sistema desacelera o se mueve a la izquierda';
    }

    const T = m2 > 0 ? Math.max(0, m2 * (g - a)) : 0;

    const fbdBodies = [
      {
        id: 'm1',
        label: `Bloque en Mesa m₁ (${m1.toFixed(1)} kg)`,
        mass: m1,
        axisAngleDeg: 0,
        subtitle: `Superficie horizontal (μ_k = ${muK})`,
        vectors: [
          {
            id: 'W1',
            symbol: 'W₁ = m₁g',
            name: 'Peso',
            magnitude: W1,
            angleDeg: -90,
            color: '#f43f5e',
            formula: `${W1.toFixed(2)} N`,
          },
          {
            id: 'N1',
            symbol: 'N₁',
            name: 'Fuerza Normal',
            magnitude: N1,
            angleDeg: 90,
            color: '#38bdf8',
            formula: `m₁g - F_ext·senα = ${N1.toFixed(2)} N`,
          },
          ...(m2 > 0
            ? [
                {
                  id: 'T',
                  symbol: 'T',
                  name: 'Tensión',
                  magnitude: T,
                  angleDeg: 0,
                  color: '#fbbf24',
                  formula: `${T.toFixed(2)} N`,
                },
              ]
            : []),
          ...(Math.abs(fExt) > 0.01
            ? [
                {
                  id: 'Fext',
                  symbol: 'F_ext',
                  name: 'Fuerza Externa',
                  magnitude: Math.abs(fExt),
                  angleDeg: fExt >= 0 ? fAngleDeg : 180 + fAngleDeg,
                  color: '#34d399',
                  formula: `${fExt.toFixed(1)} N ∠ ${fAngleDeg}°`,
                },
              ]
            : []),
          ...(Math.abs(friction) > 0.01
            ? [
                {
                  id: 'fr',
                  symbol: 'f_r',
                  name: 'Fricción',
                  magnitude: Math.abs(friction),
                  angleDeg: friction >= 0 ? 0 : 180,
                  color: '#fb923c',
                  formula: `${Math.abs(friction).toFixed(2)} N`,
                },
              ]
            : []),
        ],
        equations: [
          `∑F_y = N₁ + F_ext·sen(${fAngleDeg}°) - m₁g = 0  ⇒  N₁ = ${N1.toFixed(2)} N`,
          `∑F_x = T + F_ext·cos(${fAngleDeg}°) - f_k = m₁·a`,
        ],
      },
      ...(m2 > 0
        ? [
            {
              id: 'm2',
              label: `Bloque Colgante m₂ (${m2.toFixed(1)} kg)`,
              mass: m2,
              axisAngleDeg: 0,
              subtitle: 'Colgando de la polea en el borde',
              vectors: [
                {
                  id: 'W2',
                  symbol: 'W₂ = m₂g',
                  name: 'Peso de m₂',
                  magnitude: W2,
                  angleDeg: -90,
                  color: '#f43f5e',
                  formula: `${W2.toFixed(2)} N`,
                },
                {
                  id: 'T2',
                  symbol: 'T',
                  name: 'Tensión',
                  magnitude: T,
                  angleDeg: 90,
                  color: '#fbbf24',
                  formula: `${T.toFixed(2)} N`,
                },
              ],
              equations: [`∑F_y = m₂g - T = m₂·a  ⇒  T = ${T.toFixed(2)} N`],
            },
          ]
        : []),
    ];

    const steps = [
      {
        title: '1. Equilibrio Vertical sobre el Bloque m₁ (Fuerza Normal)',
        detail: `Considerando la componente vertical de la fuerza externa F_ext·sen(${fAngleDeg}°):`,
        formula: `N₁ = m₁g - F_ext·sen(${fAngleDeg}°) = ${W1.toFixed(2)} - ${FextY.toFixed(2)} = ${N1.toFixed(2)} N`,
      },
      {
        title: '2. Fuerza de Fricción en la Mesa',
        detail: `Calculamos la fricción máxima estática y cinética con N₁ = ${N1.toFixed(2)} N:`,
        formula: `f_{s,máx} = ${fsMax.toFixed(2)} N   |   f_k = μ_k·N₁ = ${fkMag.toFixed(2)} N`,
      },
      {
        title: '3. Aceleración y Tensión del Sistema',
        detail: `Combinando las ecuaciones de movimiento de ambos bloques:`,
        formula: `a = ${a.toFixed(3)} m/s²   |   T = m₂(g - a) = ${T.toFixed(2)} N`,
      },
    ];

    return {
      sceneType,
      motionState,
      summary: {
        acceleration: a,
        tension: T,
        normal1: N1,
        friction: Math.abs(friction),
        w2: W2,
      },
      fbdBodies,
      steps,
    };
  }

  if (sceneType === 'atwood') {
    const m1 = Math.max(0.1, Number(rawParams.m1 ?? 7));
    const m2 = Math.max(0.1, Number(rawParams.m2 ?? 4));
    const W1 = m1 * g;
    const W2 = m2 * g;
    // Positivo si m1 baja y m2 sube
    const a = ((m1 - m2) * g) / (m1 + m2);
    const T = (2 * m1 * m2 * g) / (m1 + m2);

    const motionState =
      Math.abs(a) < 0.001
        ? 'Equilibrio (m₁ = m₂)'
        : a > 0
        ? 'm₁ desciende y m₂ asciende con aceleración constante'
        : 'm₂ desciende y m₁ asciende con aceleración constante';

    const fbdBodies = [
      {
        id: 'm1',
        label: `Masa Izquierda m₁ (${m1.toFixed(1)} kg)`,
        mass: m1,
        axisAngleDeg: 0,
        subtitle: `Aceleración vertical: ${(-a).toFixed(2)} m/s²`,
        vectors: [
          {
            id: 'W1',
            symbol: 'W₁ = m₁g',
            name: 'Peso m₁',
            magnitude: W1,
            angleDeg: -90,
            color: '#f43f5e',
            formula: `${W1.toFixed(2)} N`,
          },
          {
            id: 'T1',
            symbol: 'T',
            name: 'Tensión',
            magnitude: T,
            angleDeg: 90,
            color: '#fbbf24',
            formula: `${T.toFixed(2)} N`,
          },
        ],
        equations: [`∑F_y = T - m₁g = -m₁·a`],
      },
      {
        id: 'm2',
        label: `Masa Derecha m₂ (${m2.toFixed(1)} kg)`,
        mass: m2,
        axisAngleDeg: 0,
        subtitle: `Aceleración vertical: ${a.toFixed(2)} m/s²`,
        vectors: [
          {
            id: 'W2',
            symbol: 'W₂ = m₂g',
            name: 'Peso m₂',
            magnitude: W2,
            angleDeg: -90,
            color: '#f43f5e',
            formula: `${W2.toFixed(2)} N`,
          },
          {
            id: 'T2',
            symbol: 'T',
            name: 'Tensión',
            magnitude: T,
            angleDeg: 90,
            color: '#fbbf24',
            formula: `${T.toFixed(2)} N`,
          },
        ],
        equations: [`∑F_y = T - m₂g = m₂·a`],
      },
    ];

    const steps = [
      {
        title: '1. Ecuaciones de Newton para cada Masa',
        detail: `Tomando el sentido de movimiento de m₁ hacia abajo y m₂ hacia arriba:`,
        formula: `m₁g - T = m₁·a     y     T - m₂g = m₂·a`,
      },
      {
        title: '2. Cálculo de la Aceleración (a)',
        detail: `Sumando ambas ecuaciones para eliminar la tensión T:`,
        formula: `a = ((m₁ - m₂) / (m₁ + m₂))·g = ((${m1} - ${m2}) / (${m1 + m2})) × ${g.toFixed(2)} = ${a.toFixed(3)} m/s²`,
      },
      {
        title: '3. Cálculo de la Tensión en la Cuerda (T)',
        detail: `Sustituyendo la aceleración en cualquiera de las dos ecuaciones:`,
        formula: `T = (2·m₁·m₂ / (m₁ + m₂))·g = ${T.toFixed(2)} N`,
      },
    ];

    return {
      sceneType,
      motionState,
      summary: {
        acceleration: a,
        tension: T,
        w1: W1,
        w2: W2,
      },
      fbdBodies,
      steps,
    };
  }

  if (sceneType === 'spring_block') {
    const m1 = Math.max(0.1, Number(rawParams.m1 ?? 3));
    const k = Math.max(1, Number(rawParams.k ?? 45));
    const x0 = Number(rawParams.x0 ?? 2.2);
    const muK = Math.max(0, Number(rawParams.muK ?? 0.04));
    const x = Number(simState.x ?? x0);
    const v = Number(simState.v ?? 0);

    const W1 = m1 * g;
    const N1 = W1;
    const Fe = -k * x;
    const fk = Math.abs(v) > 0.01 ? -Math.sign(v) * muK * N1 : 0;
    const a = (Fe + fk) / m1;
    const omega = Math.sqrt(k / m1);
    const period = (2 * Math.PI) / omega;

    const fbdBodies = [
      {
        id: 'm1',
        label: `Bloque Acoplado m (${m1.toFixed(1)} kg)`,
        mass: m1,
        axisAngleDeg: 0,
        subtitle: `Posición instantánea x = ${x.toFixed(2)} m`,
        vectors: [
          {
            id: 'W1',
            symbol: 'W = mg',
            name: 'Peso',
            magnitude: W1,
            angleDeg: -90,
            color: '#f43f5e',
            formula: `${W1.toFixed(2)} N`,
          },
          {
            id: 'N1',
            symbol: 'N',
            name: 'Fuerza Normal',
            magnitude: N1,
            angleDeg: 90,
            color: '#38bdf8',
            formula: `${N1.toFixed(2)} N`,
          },
          {
            id: 'Fe',
            symbol: 'F_e = -kx',
            name: 'Fuerza Restauradora del Resorte',
            magnitude: Math.abs(Fe),
            angleDeg: Fe >= 0 ? 0 : 180,
            color: '#34d399',
            formula: `-${k} × (${x.toFixed(2)}) = ${Fe.toFixed(2)} N`,
          },
          ...(Math.abs(fk) > 0.01
            ? [
                {
                  id: 'fk',
                  symbol: 'f_k',
                  name: 'Fricción Cinética',
                  magnitude: Math.abs(fk),
                  angleDeg: fk >= 0 ? 0 : 180,
                  color: '#fb923c',
                  formula: `${Math.abs(fk).toFixed(2)} N`,
                },
              ]
            : []),
        ],
        equations: [
          `F_e = -k·x = -${k}·(${x.toFixed(2)}) = ${Fe.toFixed(2)} N`,
          `ω₀ = √(k/m) = ${omega.toFixed(2)} rad/s   |   Periodo T = ${period.toFixed(2)} s`,
        ],
      },
    ];

    const steps = [
      {
        title: '1. Ley de Hooke y Fuerza Restauradora',
        detail: `Para una elongación inicial x₀ = ${x0.toFixed(2)} m y constante k = ${k} N/m:`,
        formula: `F_{e,máx} = -k·x₀ = ${(-k * x0).toFixed(2)} N`,
      },
      {
        title: '2. Frecuencia Angular y Periodo de Oscilación',
        detail: `A partir de la ecuación diferencial m·x'' + k·x = 0:`,
        formula: `ω = √(k / m) = √(${k} / ${m1}) = ${omega.toFixed(3)} rad/s   ⇒   T = 2π/ω = ${period.toFixed(3)} s`,
      },
      {
        title: '3. Energía Mecánica del Oscilador',
        detail: `Energía potencial elástica máxima almacenada al inicio:`,
        formula: `E_m = ½·k·x₀² = 0.5 × ${k} × (${x0})² = ${(0.5 * k * x0 * x0).toFixed(2)} J`,
      },
    ];

    return {
      sceneType,
      motionState: `Oscilación Armónica (ω = ${omega.toFixed(2)} rad/s, T = ${period.toFixed(2)} s)`,
      summary: {
        acceleration: a,
        springForce: Fe,
        normal1: N1,
        omega,
        period,
        maxEnergy: 0.5 * k * x0 * x0,
      },
      fbdBodies,
      steps,
    };
  }

  if (sceneType === 'projectile') {
    const m1 = Math.max(0.1, Number(rawParams.m1 ?? 2));
    const v0 = Math.max(1, Number(rawParams.v0 ?? 22));
    const angleDeg = Number(rawParams.angle ?? 45);
    const theta = (angleDeg * Math.PI) / 180;
    const h0 = Math.max(0, Number(rawParams.h0 ?? 2));

    const v0x = v0 * Math.cos(theta);
    const v0y = v0 * Math.sin(theta);

    // Tiempo total de vuelo: h0 + v0y*t - 0.5*g*t^2 = 0
    const tFlight = (v0y + Math.sqrt(v0y * v0y + 2 * g * h0)) / g;
    const maxRange = v0x * tFlight;
    const maxHeight = h0 + (v0y * v0y) / (2 * g);
    const W1 = m1 * g;

    const currentVy = Number(simState.vy ?? v0y);
    const currentSpeed = Math.hypot(v0x, currentVy);
    const velAngleDeg = (Math.atan2(currentVy, v0x) * 180) / Math.PI;

    const fbdBodies = [
      {
        id: 'm1',
        label: `Proyectil en Vuelo (${m1.toFixed(1)} kg)`,
        mass: m1,
        axisAngleDeg: 0,
        subtitle: `En vuelo libre la única fuerza es el peso W = mg`,
        vectors: [
          {
            id: 'W1',
            symbol: 'W = mg',
            name: 'Fuerza Gravitatoria (Peso)',
            magnitude: W1,
            angleDeg: -90,
            color: '#f43f5e',
            formula: `${m1} × ${g.toFixed(2)} = ${W1.toFixed(2)} N`,
          },
          {
            id: 'vx',
            symbol: 'vₓ (cte)',
            name: 'Velocidad Horizontal',
            magnitude: v0x,
            angleDeg: 0,
            color: '#38bdf8',
            dashed: true,
            formula: `v₀·cos(${angleDeg}°) = ${v0x.toFixed(2)} m/s`,
          },
          {
            id: 'vy',
            symbol: 'vᵧ(t)',
            name: 'Velocidad Vertical',
            magnitude: Math.abs(currentVy),
            angleDeg: currentVy >= 0 ? 90 : -90,
            color: '#a78bfa',
            dashed: true,
            formula: `v₀ᵧ - g·t = ${currentVy.toFixed(2)} m/s`,
          },
          {
            id: 'v',
            symbol: 'v⃗(t)',
            name: 'Vector Velocidad Total',
            magnitude: currentSpeed,
            angleDeg: velAngleDeg,
            color: '#34d399',
            formula: `|v⃗| = ${currentSpeed.toFixed(2)} m/s`,
          },
        ],
        equations: [
          `∑F_x = 0  ⇒  a_x = 0,  v_x = ${v0x.toFixed(2)} m/s (MRU)`,
          `∑F_y = -mg  ⇒  a_y = -${g.toFixed(2)} m/s² (MRUA)`,
        ],
      },
    ];

    const steps = [
      {
        title: '1. Componentes Iniciales de la Velocidad',
        detail: `Descomponiendo v₀ = ${v0} m/s con ángulo θ = ${angleDeg}°:`,
        formula: `v₀ₓ = v₀·cos(${angleDeg}°) = ${v0x.toFixed(2)} m/s   |   v₀ᵧ = v₀·sen(${angleDeg}°) = ${v0y.toFixed(2)} m/s`,
      },
      {
        title: '2. Altura Máxima (y_máx)',
        detail: `En el punto más alto de la parábola, v_y = 0:`,
        formula: `y_{máx} = h₀ + v₀ᵧ² / (2g) = ${h0} + (${v0y.toFixed(2)})² / (2 × ${g.toFixed(2)}) = ${maxHeight.toFixed(2)} m`,
      },
      {
        title: '3. Tiempo de Vuelo y Alcance Horizontal (R)',
        detail: `Resolviendo y(t) = h₀ + v₀ᵧ·t - ½g·t² = 0:`,
        formula: `t_{vuelo} = ${tFlight.toFixed(2)} s   ⇒   Alcance R = v₀ₓ · t_{vuelo} = ${maxRange.toFixed(2)} m`,
      },
    ];

    return {
      sceneType,
      motionState: `Trayectoria Parabólica (Alcance: ${maxRange.toFixed(1)} m, H_máx: ${maxHeight.toFixed(1)} m)`,
      summary: {
        acceleration: -g,
        v0x,
        v0y,
        tFlight,
        maxRange,
        maxHeight,
      },
      fbdBodies,
      steps,
    };
  }

  if (sceneType === 'pendulum') {
    const m1 = Math.max(0.1, Number(rawParams.m1 ?? 2.5));
    const L = Math.max(0.5, Number(rawParams.length ?? 3.5));
    const angle0Deg = Number(rawParams.angle0 ?? 40);
    const currentThetaRad = Number(simState.theta ?? (angle0Deg * Math.PI) / 180);
    const currentOmega = Number(simState.omega ?? 0);

    const angleDeg = (currentThetaRad * 180) / Math.PI;
    const W1 = m1 * g;
    const Wr = W1 * Math.cos(currentThetaRad);
    const Wt = W1 * Math.sin(currentThetaRad);
    const v = Math.abs(currentOmega * L);
    const T = Wr + (m1 * v * v) / L;
    const aTangential = -g * Math.sin(currentThetaRad);
    const aCentripetal = (v * v) / L;
    const periodSmall = 2 * Math.PI * Math.sqrt(L / g);

    // Ángulo de la cuerda hacia el pivote desde la masa: 90 + angleDeg
    const ropeAngleDeg = 90 - angleDeg;

    const fbdBodies = [
      {
        id: 'm1',
        label: `Esfera del Péndulo (${m1.toFixed(1)} kg)`,
        mass: m1,
        axisAngleDeg: -angleDeg,
        subtitle: `Ángulo instantáneo θ = ${angleDeg.toFixed(1)}°`,
        vectors: [
          {
            id: 'W',
            symbol: 'W = mg',
            name: 'Peso',
            magnitude: W1,
            angleDeg: -90,
            color: '#f43f5e',
            formula: `${W1.toFixed(2)} N`,
          },
          {
            id: 'T',
            symbol: 'T',
            name: 'Tensión de la Cuerda',
            magnitude: T,
            angleDeg: ropeAngleDeg,
            color: '#fbbf24',
            formula: `mg·cosθ + m·v²/L = ${T.toFixed(2)} N`,
          },
          {
            id: 'Wt',
            symbol: 'W_t = mg·senθ',
            name: 'Componente Tangencial (Restauradora)',
            magnitude: Math.abs(Wt),
            angleDeg: currentThetaRad >= 0 ? 180 - angleDeg : -angleDeg,
            color: '#fb7185',
            dashed: true,
            formula: `${Math.abs(Wt).toFixed(2)} N`,
          },
          {
            id: 'Wr',
            symbol: 'W_r = mg·cosθ',
            name: 'Componente Radial',
            magnitude: Math.abs(Wr),
            angleDeg: ropeAngleDeg - 180,
            color: '#fda4af',
            dashed: true,
            formula: `${Math.abs(Wr).toFixed(2)} N`,
          },
        ],
        equations: [
          `∑F_radial = T - mg·cosθ = m·v²/L  ⇒  T = ${T.toFixed(2)} N`,
          `∑F_tangencial = -mg·senθ = m·a_t  ⇒  a_t = ${aTangential.toFixed(2)} m/s²`,
        ],
      },
    ];

    const steps = [
      {
        title: '1. Descomposición en Ejes Radial y Tangencial',
        detail: `En un ángulo θ = ${angleDeg.toFixed(1)}°, descomponemos el peso W = ${W1.toFixed(2)} N:`,
        formula: `W_r = mg·cosθ = ${Wr.toFixed(2)} N   |   W_t = mg·senθ = ${Math.abs(Wt).toFixed(2)} N`,
      },
      {
        title: '2. Tensión de la Cuerda (Fuerza Centrípeta)',
        detail: `La tensión debe equilibrar W_r y proveer la aceleración centrípeta a_c = v²/L:`,
        formula: `T = mg·cosθ + m·v²/L = ${T.toFixed(2)} N`,
      },
      {
        title: '3. Periodo de Oscilación',
        detail: `Para una longitud L = ${L} m y gravedad g = ${g.toFixed(2)} m/s²:`,
        formula: `T₀ ≈ 2π·√(L / g) = ${periodSmall.toFixed(3)} s`,
      },
    ];

    return {
      sceneType,
      motionState: `Oscilación Pendular (Tensión T = ${T.toFixed(1)} N, Periodo ≈ ${periodSmall.toFixed(2)} s)`,
      summary: {
        acceleration: aTangential,
        centripetalAcc: aCentripetal,
        tension: T,
        period: periodSmall,
      },
      fbdBodies,
      steps,
    };
  }

  // Modo Sandbox / Constructor de Juego
  return solveSandboxGameScene(rawParams, simState);
}

/**
 * Resuelve dinámicamente el grafo de bloques, rampas, poleas y cuerdas creado por el usuario en el Modo Juego / Constructor.
 */
export function solveSandboxGameScene(rawParams, simState = {}) {
  const g = Number(rawParams.g ?? 9.81);
  const objects = simState.sandboxObjects || [];
  const ropes = simState.sandboxRopes || [];

  const blocks = objects.filter((o) => o.type === 'block' || o.type === 'hanging_mass');

  const fbdBodies = [];
  const steps = [];
  let totalSystemAcc = 0;
  let mainTension = 0;

  if (blocks.length === 0) {
    return {
      sceneType: 'sandbox_game',
      motionState: 'Agrega bloques, poleas y cuerdas en el lienzo',
      summary: { acceleration: 0, tension: 0 },
      fbdBodies: [],
      steps: [
        {
          title: 'Constructor Interactivo Listo',
          detail:
            'Usa la barra de herramientas del Modo Juego para añadir bloques, rampas, poleas y conectarlos con cuerdas.',
          formula: '∑F⃗ = m·a⃗',
        },
      ],
    };
  }

  // Verificar si hay dos bloques conectados por una cuerda
  const connectedRope = ropes[0];
  let b1 = connectedRope ? blocks.find((b) => b.id === connectedRope.fromId) : null;
  let b2 = connectedRope ? blocks.find((b) => b.id === connectedRope.toId) : null;

  if (b1 && b2) {
    // Calcular dinámica acoplada entre b1 y b2
    const m1 = Number(b1.mass || 5);
    const m2 = Number(b2.mass || 4);
    const theta1 = ((Number(b1.angleDeg) || 0) * Math.PI) / 180;
    const theta2 = ((Number(b2.angleDeg) || 0) * Math.PI) / 180;
    const mu1 = Number(b1.mu || 0.15);
    const mu2 = Number(b2.mu || 0);

    const W1 = m1 * g;
    const W2 = m2 * g;
    const N1 = b1.type === 'hanging_mass' ? 0 : W1 * Math.cos(theta1);
    const N2 = b2.type === 'hanging_mass' ? 0 : W2 * Math.cos(theta2);
    const fk1 = mu1 * N1;
    const fk2 = mu2 * N2;

    const pull1 =
      b1.type === 'hanging_mass' ? W1 : W1 * Math.sin(theta1) - Number(b1.fExt || 0);
    const pull2 =
      b2.type === 'hanging_mass' ? W2 : W2 * Math.sin(theta2) + Number(b2.fExt || 0);

    const netDrive = pull2 - pull1;
    const totalFriction = fk1 + fk2;

    if (Math.abs(netDrive) <= totalFriction) {
      totalSystemAcc = 0;
    } else {
      const dir = Math.sign(netDrive);
      totalSystemAcc = (netDrive - dir * totalFriction) / (m1 + m2);
    }

    mainTension =
      b2.type === 'hanging_mass'
        ? Math.max(0, m2 * (g - totalSystemAcc))
        : Math.max(0, m1 * totalSystemAcc + pull1 + fk1);

    steps.push({
      title: `1. Sistema Acoplado por Cuerda (${b1.label} ↔ ${b2.label})`,
      detail: `Dos cuerpos conectados por cuerda ideal comparten la misma magnitud de aceleración |a| y tensión T:`,
      formula: `m₁ = ${m1} kg,  m₂ = ${m2} kg   ⇒   a = ${totalSystemAcc.toFixed(2)} m/s²,   T = ${mainTension.toFixed(2)} N`,
    });
  }

  blocks.forEach((blk, idx) => {
    const m = Number(blk.mass || 4);
    const angleDeg = Number(blk.angleDeg || 0);
    const theta = (angleDeg * Math.PI) / 180;
    const mu = Number(blk.mu ?? 0.15);
    const fExt = Number(blk.fExt || 0);
    const isHanging = blk.type === 'hanging_mass';

    const W = m * g;
    const Wx = isHanging ? W : W * Math.sin(theta);
    const Wy = isHanging ? 0 : W * Math.cos(theta);
    const N = isHanging ? 0 : Wy;
    const fk = isHanging ? 0 : mu * N;

    const isConnected = ropes.some((r) => r.fromId === blk.id || r.toId === blk.id);
    const T = isConnected ? mainTension : 0;

    const localAcc = isConnected
      ? totalSystemAcc
      : isHanging
      ? g
      : (fExt - Wx + (Math.abs(fExt - Wx) > fk ? -Math.sign(fExt - Wx) * fk : -(fExt - Wx))) / m;

    if (!isConnected && idx === 0) {
      totalSystemAcc = localAcc;
    }

    const vectors = [
      {
        id: `W_${blk.id}`,
        symbol: `W = mg`,
        name: 'Peso',
        magnitude: W,
        angleDeg: -90,
        color: '#f43f5e',
        formula: `${m} × ${g.toFixed(2)} = ${W.toFixed(2)} N`,
      },
    ];

    if (!isHanging) {
      vectors.push({
        id: `N_${blk.id}`,
        symbol: 'N',
        name: 'Fuerza Normal',
        magnitude: N,
        angleDeg: 90 + angleDeg,
        color: '#38bdf8',
        formula: `${N.toFixed(2)} N`,
      });
      if (angleDeg !== 0) {
        vectors.push({
          id: `Wx_${blk.id}`,
          symbol: 'mg·senθ',
          name: 'Comp. Peso Paralela',
          magnitude: Math.abs(Wx),
          angleDeg: 180 + angleDeg,
          color: '#fb7185',
          dashed: true,
          formula: `${Math.abs(Wx).toFixed(2)} N`,
        });
      }
      if (fk > 0.01) {
        vectors.push({
          id: `fk_${blk.id}`,
          symbol: 'f_r',
          name: 'Fricción',
          magnitude: fk,
          angleDeg: angleDeg + (localAcc >= 0 ? 180 : 0),
          color: '#fb923c',
          formula: `μ·N = ${fk.toFixed(2)} N`,
        });
      }
    }

    if (isConnected) {
      vectors.push({
        id: `T_${blk.id}`,
        symbol: 'T',
        name: 'Tensión de Cuerda',
        magnitude: T,
        angleDeg: isHanging ? 90 : angleDeg,
        color: '#fbbf24',
        formula: `${T.toFixed(2)} N`,
      });
    }

    if (Math.abs(fExt) > 0.01) {
      vectors.push({
        id: `Fext_${blk.id}`,
        symbol: 'F_ext',
        name: 'Fuerza Aplicada',
        magnitude: Math.abs(fExt),
        angleDeg: fExt >= 0 ? angleDeg : 180 + angleDeg,
        color: '#34d399',
        formula: `${fExt.toFixed(1)} N`,
      });
    }

    fbdBodies.push({
      id: blk.id,
      label: `${blk.label || `Objeto ${idx + 1}`} (${m.toFixed(1)} kg)`,
      mass: m,
      axisAngleDeg: isHanging ? 0 : angleDeg,
      subtitle: isHanging
        ? 'Masa suspendida por cuerda'
        : angleDeg !== 0
        ? `En rampa θ = ${angleDeg}°, μ = ${mu}`
        : `Superficie horizontal, μ = ${mu}`,
      vectors,
      equations: isHanging
        ? [`∑F_y = T - mg = m·a  ⇒  W = ${W.toFixed(2)} N`]
        : [
            `∑F_y' = N - mg·cos(${angleDeg}°) = 0  ⇒  N = ${N.toFixed(2)} N`,
            `∑F_x' = ${isConnected ? 'T + ' : ''}${fExt ? 'F_ext ' : ''}- mg·sen(${angleDeg}°) - f_r = m·a`,
          ],
    });

    steps.push({
      title: `Análisis Dinámico de ${blk.label || `Bloque ${idx + 1}`} (${m} kg)`,
      detail: isHanging
        ? `Cuerpo colgante sometido a su peso W = ${W.toFixed(2)} N y tensión T = ${T.toFixed(2)} N.`
        : `Sobre plano a ${angleDeg}°: Normal N = ${N.toFixed(2)} N, Fricción f_r = ${fk.toFixed(2)} N.`,
      formula: `a = ${localAcc.toFixed(2)} m/s²`,
    });
  });

  return {
    sceneType: 'sandbox_game',
    motionState:
      ropes.length > 0
        ? `Sistema con ${blocks.length} cuerpos y ${ropes.length} cuerda(s) activa(s)`
        : `Escena libre con ${blocks.length} cuerpo(s)`,
    summary: {
      acceleration: totalSystemAcc,
      tension: mainTension,
      bodiesCount: blocks.length,
      ropesCount: ropes.length,
    },
    fbdBodies,
    steps,
  };
}

/**
 * Ejemplos de problemas visuales de examen listos para cargar con 1 clic o generar imagen de prueba
 */
export const SAMPLE_PROBLEMS = [
  {
    id: 'prob_incline_pulley',
    title: 'Problema Clásico: Dos bloques en plano inclinado con polea',
    badge: 'Dinámica + Polea',
    statement:
      'Un bloque m₁ = 8.0 kg descansa sobre un plano inclinado a θ = 35° respecto a la horizontal con coeficiente de fricción cinética μ_k = 0.18. Está unido mediante una cuerda ligera que pasa por una polea sin fricción a una masa colgante m₂ = 6.5 kg. Calcula: a) Los diagramas de cuerpo libre de ambos bloques, b) La magnitud de la aceleración del sistema y c) La tensión T en la cuerda.',
    sceneType: 'incline_pulley',
    params: {
      m1: 8.0,
      m2: 6.5,
      angle: 35,
      muK: 0.18,
      muS: 0.25,
      fExt: 0,
      g: 9.81,
    },
  },
  {
    id: 'prob_table_pulley',
    title: 'Bloque en mesa rugosa conectado a masa colgante',
    badge: 'Sistemas Conectados',
    statement:
      'Un bloque m₁ = 5.0 kg sobre una mesa horizontal con coeficiente de fricción μ_k = 0.20 es jalado por una cuerda conectada a un bloque colgante m₂ = 3.5 kg que pasa por una polea en el borde. Además se aplica una fuerza externa F_ext = 12 N hacia la derecha. Halla la aceleración y la tensión.',
    sceneType: 'horizontal_table',
    params: {
      m1: 5.0,
      m2: 3.5,
      muK: 0.2,
      muS: 0.25,
      fExt: 12,
      fAngle: 0,
      g: 9.81,
    },
  },
  {
    id: 'prob_atwood',
    title: 'Máquina de Atwood con masas de 9 kg y 5 kg',
    badge: 'Poleas & Tensión',
    statement:
      'En una máquina de Atwood ideal, dos bloques de masas m₁ = 9.0 kg y m₂ = 5.0 kg cuelgan verticalmente a ambos lados de una polea sin masa ni fricción. Determina la aceleración de cada bloque y la tensión en la cuerda.',
    sceneType: 'atwood',
    params: {
      m1: 9.0,
      m2: 5.0,
      g: 9.81,
    },
  },
  {
    id: 'prob_projectile',
    title: 'Lanzamiento de proyectil desde plataforma a 4 m',
    badge: 'Cinemática 2D',
    statement:
      'Se dispara una esfera de 2.0 kg desde una plataforma de h₀ = 4.0 m de altura con velocidad inicial v₀ = 24 m/s y ángulo de elevación de 40°. Determina la altura máxima, el tiempo total de vuelo y el alcance horizontal.',
    sceneType: 'projectile',
    params: {
      m1: 2.0,
      v0: 24.0,
      angle: 40,
      h0: 4.0,
      g: 9.81,
    },
  },
  {
    id: 'prob_spring',
    title: 'Oscilador Masa-Resorte con fricción ligera',
    badge: 'Ley de Hooke',
    statement:
      'Un bloque de m = 4.0 kg está sujeto a un resorte horizontal de constante elástica k = 64 N/m. Se estira x₀ = 2.0 m desde el equilibrio y se suelta desde el reposo sobre una pista con μ_k = 0.03. Determina la fuerza restauradora máxima, la frecuencia angular ω y el periodo T.',
    sceneType: 'spring_block',
    params: {
      m1: 4.0,
      k: 64.0,
      x0: 2.0,
      muK: 0.03,
      g: 9.81,
    },
  },
];
