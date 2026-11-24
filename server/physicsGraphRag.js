/**
 * Grafo de Conocimiento de Mecánica Clásica + Motor Graph RAG
 * Recupera subgrafos verificados (Leyes, Fuerzas, Ecuaciones y Restricciones)
 * mediante búsqueda BFS de 2 saltos para fundamentar respuestas y evitar alucinaciones.
 */

const GRAPH_NODES = [
  // Escenas
  { id: 'scene_incline_pulley', type: 'scene', label: 'Plano Inclinado + Polea', keywords: ['inclinad', 'rampa', 'pendiente', 'triangulo', 'triángulo'] },
  { id: 'scene_horizontal_table', type: 'scene', label: 'Mesa Horizontal + Polea', keywords: ['mesa', 'horizontal'] },
  { id: 'scene_atwood', type: 'scene', label: 'Máquina de Atwood', keywords: ['atwood', 'polea', 'colgante'] },
  { id: 'scene_spring_block', type: 'scene', label: 'Sistema Masa-Resorte', keywords: ['resorte', 'muelle', 'hooke', 'oscil'] },
  { id: 'scene_projectile', type: 'scene', label: 'Tiro Parabólico 2D', keywords: ['proyectil', 'parab', 'lanza', 'dispara', 'alcance'] },
  { id: 'scene_pendulum', type: 'scene', label: 'Péndulo Simple', keywords: ['péndulo', 'pendulo', 'oscilación', 'radial'] },
  { id: 'scene_sandbox_game', type: 'scene', label: 'Constructor Libre', keywords: ['constructor', 'ensamble', 'libre'] },

  // Leyes físicas
  {
    id: 'law_newton2',
    type: 'law',
    label: '2ª Ley de Newton',
    formula: '∑F = m · a',
    keywords: ['newton', 'aceleración', 'aceleracion', 'fuerza', 'dinámica', 'dinamica'],
  },
  {
    id: 'law_friction',
    type: 'law',
    label: 'Leyes de Fricción',
    formula: 'f_s,máx = μ_s · N ; f_k = μ_k · N',
    keywords: ['fricción', 'friccion', 'rozamiento', 'mu', 'μ'],
  },
  {
    id: 'law_hooke',
    type: 'law',
    label: 'Ley de Hooke',
    formula: 'F_e = -k · x',
    keywords: ['hooke', 'resorte', 'elástica', 'elastica', 'constante k'],
  },
  {
    id: 'law_kinematics_2d',
    type: 'law',
    label: 'Cinemática Parabólica',
    formula: 'x(t) = v₀·cosθ·t ; y(t) = h₀ + v₀·senθ·t - ½g·t²',
    keywords: ['proyectil', 'altura', 'alcance', 'velocidad', 'parab'],
  },
  {
    id: 'law_pendulum',
    type: 'law',
    label: 'Dinámica del Péndulo',
    formula: 'α = -(g/L)·senθ ; T = m·g·cosθ + m·v²/L',
    keywords: ['péndulo', 'pendulo', 'radial', 'tangencial', 'periodo'],
  },

  // Conceptos / Fuerzas
  {
    id: 'force_tension',
    type: 'force',
    label: 'Tensión (T)',
    formula: 'T = m₂ · (g - a) (cuerda ideal)',
    keywords: ['tensión', 'tension', 'cuerda', 'polea'],
  },
  {
    id: 'force_normal',
    type: 'force',
    label: 'Fuerza Normal (N)',
    formula: 'N = m · g · cos(θ)',
    keywords: ['normal', 'superficie', 'contacto'],
  },
  {
    id: 'force_weight',
    type: 'force',
    label: 'Peso (W)',
    formula: 'W = m · g (W_x = m·g·senθ, W_y = m·g·cosθ)',
    keywords: ['peso', 'gravedad', 'masa'],
  },

  // Restricciones anti-alucinación
  {
    id: 'guard_static_eq',
    type: 'constraint',
    label: 'Guardia Equilibrio Estático',
    formula: 'Si |F_impulsora| ≤ μ_s·N ⇒ a = 0 y f_s = -F_impulsora',
    keywords: ['reposo', 'equilibrio', 'estática', 'estatica', 'fricción'],
  },
  {
    id: 'guard_ideal_rope',
    type: 'constraint',
    label: 'Guardia Cuerda Ideal',
    formula: 'Polea sin masa ni fricción ⇒ T₁ = T₂ y |a₁| = |a₂|',
    keywords: ['cuerda', 'polea', 'tensión', 'tension'],
  },
  {
    id: 'guard_solver_grounding',
    type: 'constraint',
    label: 'Anclaje Numérico Exacto',
    formula: 'Usar únicamente magnitudes verificadas por solveMechanicsScene',
    keywords: [],
  },
];

const GRAPH_EDGES = [
  // Leyes aplican a escenas
  { from: 'law_newton2', to: 'scene_incline_pulley', relation: 'RIGE' },
  { from: 'law_newton2', to: 'scene_horizontal_table', relation: 'RIGE' },
  { from: 'law_newton2', to: 'scene_atwood', relation: 'RIGE' },
  { from: 'law_newton2', to: 'scene_sandbox_game', relation: 'RIGE' },
  { from: 'law_friction', to: 'scene_incline_pulley', relation: 'ACTÚA_EN' },
  { from: 'law_friction', to: 'scene_horizontal_table', relation: 'ACTÚA_EN' },
  { from: 'law_friction', to: 'scene_spring_block', relation: 'ACTÚA_EN' },
  { from: 'law_hooke', to: 'scene_spring_block', relation: 'RIGE' },
  { from: 'law_kinematics_2d', to: 'scene_projectile', relation: 'RIGE' },
  { from: 'law_pendulum', to: 'scene_pendulum', relation: 'RIGE' },

  // Fuerzas conectadas
  { from: 'force_tension', to: 'scene_incline_pulley', relation: 'ACOPLA' },
  { from: 'force_tension', to: 'scene_horizontal_table', relation: 'ACOPLA' },
  { from: 'force_tension', to: 'scene_atwood', relation: 'ACOPLA' },
  { from: 'force_tension', to: 'law_pendulum', relation: 'COMPONE' },
  { from: 'force_normal', to: 'law_friction', relation: 'DETERMINA' },
  { from: 'force_weight', to: 'law_newton2', relation: 'IMPULSA' },
  { from: 'force_weight', to: 'force_normal', relation: 'EQUILIBRA_Y' },

  // Restricciones anti-alucinación
  { from: 'guard_static_eq', to: 'law_friction', relation: 'RESTRINGE' },
  { from: 'guard_ideal_rope', to: 'force_tension', relation: 'RESTRINGE' },
  { from: 'guard_solver_grounding', to: 'law_newton2', relation: 'VERIFICA' },
  { from: 'guard_solver_grounding', to: 'law_hooke', relation: 'VERIFICA' },
  { from: 'guard_solver_grounding', to: 'law_kinematics_2d', relation: 'VERIFICA' },
  { from: 'guard_solver_grounding', to: 'law_pendulum', relation: 'VERIFICA' },
];

const NODE_MAP = Object.fromEntries(GRAPH_NODES.map((n) => [n.id, n]));

/**
 * Ejecuta recuperación Graph RAG (BFS 2 saltos) a partir de la escena activa y el prompt.
 */
export function retrievePhysicsGraphContext(prompt = '', sceneState = {}, solverResult = null) {
  const lower = prompt.toLowerCase();
  const activeSceneNodeId = `scene_${sceneState?.sceneType || 'incline_pulley'}`;

  const seeds = new Set();
  if (NODE_MAP[activeSceneNodeId]) {
    seeds.add(activeSceneNodeId);
  }
  seeds.add('guard_solver_grounding');

  // Detectar nodos semilla por palabras clave del usuario
  for (const node of GRAPH_NODES) {
    if (node.keywords.some((kw) => lower.includes(kw))) {
      seeds.add(node.id);
    }
  }

  // BFS de 2 saltos sobre el grafo no dirigido para recuperar contexto completo
  const visited = new Set(seeds);
  let frontier = [...seeds];

  for (let hop = 0; hop < 2; hop++) {
    const nextFrontier = [];
    for (const currentId of frontier) {
      for (const edge of GRAPH_EDGES) {
        if (edge.from === currentId && !visited.has(edge.to)) {
          visited.add(edge.to);
          nextFrontier.push(edge.to);
        } else if (edge.to === currentId && !visited.has(edge.from)) {
          visited.add(edge.from);
          nextFrontier.push(edge.from);
        }
      }
    }
    frontier = nextFrontier;
  }

  const retrievedNodes = [...visited].map((id) => NODE_MAP[id]).filter(Boolean);
  const retrievedEdges = GRAPH_EDGES.filter((e) => visited.has(e.from) && visited.has(e.to));

  // Hechos numéricos verificados directamente del motor físico
  const summary = solverResult?.summary || {};
  const verifiedFacts = [];
  if (solverResult?.motionState) verifiedFacts.push(`Estado: ${solverResult.motionState}`);
  if (summary.acceleration !== undefined) verifiedFacts.push(`a = ${Number(summary.acceleration).toFixed(3)} m/s²`);
  if (summary.tension !== undefined && summary.tension > 0) verifiedFacts.push(`T = ${Number(summary.tension).toFixed(2)} N`);
  if (summary.normal1 !== undefined) verifiedFacts.push(`N₁ = ${Number(summary.normal1).toFixed(2)} N`);
  if (summary.friction !== undefined) verifiedFacts.push(`f_r = ${Number(summary.friction).toFixed(2)} N`);
  if (summary.maxHeight !== undefined) verifiedFacts.push(`H_máx = ${Number(summary.maxHeight).toFixed(2)} m`);
  if (summary.range !== undefined) verifiedFacts.push(`Alcance R = ${Number(summary.range).toFixed(2)} m`);

  // Texto de grounding para inyectar al LLM (AWS Bedrock)
  const groundedPromptBlock = [
    '=== CONTEXTO VERIFICADO POR GRAPH RAG (NO INVENTAR DATOS FUERA DE ESTE GRAFO) ===',
    `Escena activa: ${NODE_MAP[activeSceneNodeId]?.label || sceneState?.sceneType || 'desconocida'}`,
    'Leyes y fórmulas recuperadas:',
    ...retrievedNodes
      .filter((n) => n.formula)
      .map((n) => `- [${n.type.toUpperCase()}] ${n.label}: ${n.formula}`),
    'Relaciones del grafo:',
    ...retrievedEdges.map((e) => `- ${NODE_MAP[e.from]?.label} --(${e.relation})--> ${NODE_MAP[e.to]?.label}`),
    'Valores numéricos exactos calculados por el motor determinista:',
    ...(verifiedFacts.length ? verifiedFacts.map((f) => `- ${f}`) : ['- Sin valores numéricos calculados aún']),
    'REGLA ANTI-ALUCINACIÓN: Responde de forma coherente a la pregunta del usuario. Si es un saludo o pregunta conceptual, responde directamente sin volcar ecuaciones innecesarias. Si das cifras, usa EXCLUSIVAMENTE los valores verificados arriba.',
  ].join('\n');

  return {
    retrievedNodes,
    retrievedEdges,
    verifiedFacts,
    groundedPromptBlock,
    ragStats: {
      nodesUsed: retrievedNodes.length,
      edgesUsed: retrievedEdges.length,
      factsVerified: verifiedFacts.length,
      laws: retrievedNodes.filter((n) => n.type === 'law').map((n) => n.label),
      constraints: retrievedNodes.filter((n) => n.type === 'constraint').map((n) => n.label),
    },
  };
}
