import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

/**
 * Crea un bloque de masa 3D detallado (cuerpo metálico/anodizado, biseles visuales,
 * argolla superior para cuerda y placa frontal con etiqueta).
 */
function createMassBlock3D(width, height, depth, colorHex, accentHex) {
  const group = new THREE.Group();

  const bodyMat = new THREE.MeshStandardMaterial({
    color: colorHex,
    metalness: 0.45,
    roughness: 0.32,
  });
  const body = new THREE.Mesh(new THREE.BoxGeometry(width, height, depth), bodyMat);
  body.castShadow = true;
  body.receiveShadow = true;
  group.add(body);

  // Marco / bisel metálico superior e inferior
  const trimMat = new THREE.MeshStandardMaterial({
    color: accentHex,
    metalness: 0.75,
    roughness: 0.25,
  });
  const topCap = new THREE.Mesh(
    new THREE.BoxGeometry(width + 0.04, 0.08, depth + 0.04),
    trimMat
  );
  topCap.position.y = height / 2 - 0.02;
  topCap.castShadow = true;
  group.add(topCap);

  const bottomCap = new THREE.Mesh(
    new THREE.BoxGeometry(width + 0.04, 0.08, depth + 0.04),
    trimMat
  );
  bottomCap.position.y = -height / 2 + 0.02;
  bottomCap.castShadow = true;
  group.add(bottomCap);

  // Argolla metálica superior (eyebolt) para enganchar cuerdas
  const hookMat = new THREE.MeshStandardMaterial({
    color: 0xe2e8f0,
    metalness: 0.85,
    roughness: 0.2,
  });
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.11, 0.03, 10, 20), hookMat);
  ring.position.set(0, height / 2 + 0.11, 0);
  ring.castShadow = true;
  group.add(ring);

  return group;
}

/**
 * Crea una pesa cilíndrica 3D (ideal para masas colgantes m2) con ranura y argolla.
 */
function createHangingWeight3D(radius, height, colorHex, accentHex) {
  const group = new THREE.Group();

  const mat = new THREE.MeshStandardMaterial({
    color: colorHex,
    metalness: 0.5,
    roughness: 0.3,
  });
  const cyl = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius * 1.04, height, 28), mat);
  cyl.castShadow = true;
  cyl.receiveShadow = true;
  group.add(cyl);

  const bandMat = new THREE.MeshStandardMaterial({
    color: accentHex,
    metalness: 0.8,
    roughness: 0.22,
  });
  const band = new THREE.Mesh(
    new THREE.CylinderGeometry(radius * 1.06, radius * 1.06, height * 0.16, 28),
    bandMat
  );
  band.castShadow = true;
  group.add(band);

  const hookMat = new THREE.MeshStandardMaterial({
    color: 0xe2e8f0,
    metalness: 0.88,
    roughness: 0.18,
  });
  const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.16, 12), hookMat);
  stem.position.y = height / 2 + 0.08;
  group.add(stem);

  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.1, 0.028, 10, 20), hookMat);
  ring.position.y = height / 2 + 0.22;
  group.add(ring);

  return group;
}

/**
 * Crea una polea mecánica 3D con aro acanalado, 6 rayos giratorios y eje central.
 */
function createPulley3D(radius = 0.42) {
  const root = new THREE.Group();
  const wheel = new THREE.Group();

  const rimMat = new THREE.MeshStandardMaterial({
    color: 0x94a3b8,
    metalness: 0.85,
    roughness: 0.25,
  });
  const grooveMat = new THREE.MeshStandardMaterial({
    color: 0x334155,
    metalness: 0.7,
    roughness: 0.4,
  });
  const spokeMat = new THREE.MeshStandardMaterial({
    color: 0xf59e0b,
    metalness: 0.7,
    roughness: 0.3,
  });

  // Aro exterior (toro)
  const outerRim = new THREE.Mesh(new THREE.TorusGeometry(radius, 0.07, 14, 36), rimMat);
  outerRim.castShadow = true;
  wheel.add(outerRim);

  // Disco interior ranurado
  const innerDisc = new THREE.Mesh(
    new THREE.CylinderGeometry(radius * 0.88, radius * 0.88, 0.08, 28),
    grooveMat
  );
  innerDisc.rotation.x = Math.PI / 2;
  wheel.add(innerDisc);

  // 6 rayos para visualizar claramente el giro
  for (let i = 0; i < 6; i++) {
    const spoke = new THREE.Mesh(
      new THREE.BoxGeometry(0.055, radius * 1.65, 0.1),
      spokeMat
    );
    spoke.rotation.z = (i * Math.PI) / 3;
    spoke.castShadow = true;
    wheel.add(spoke);
  }

  // Eje central
  const hub = new THREE.Mesh(
    new THREE.CylinderGeometry(0.11, 0.11, 0.22, 16),
    new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.9, roughness: 0.2 })
  );
  hub.rotation.x = Math.PI / 2;
  wheel.add(hub);

  root.add(wheel);
  root.userData.wheel = wheel;
  return root;
}

/**
 * Crea un cilindro de cuerda dinámico entre dos puntos 3D.
 */
function createRopeSegment3D(colorHex = 0xfbbf24) {
  const mat = new THREE.MeshStandardMaterial({
    color: colorHex,
    metalness: 0.15,
    roughness: 0.7,
  });
  const geo = new THREE.CylinderGeometry(0.032, 0.032, 1, 10);
  const mesh = new THREE.Mesh(geo, mat);
  mesh.castShadow = true;
  return mesh;
}

function updateRopeBetween(mesh, p1, p2) {
  const dir = new THREE.Vector3().subVectors(p2, p1);
  const len = dir.length();
  if (len < 0.001) {
    mesh.visible = false;
    return;
  }
  mesh.visible = true;
  mesh.position.copy(p1).addScaledVector(dir, 0.5);
  mesh.scale.set(1, len, 1);
  mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize());
}

/**
 * Crea la geometría de un resorte helicoidal 3D entre startX y endX.
 */
function buildHelixGeometry(startX, endX, yCenter, coils = 10, radius = 0.26) {
  const points = [];
  const totalSteps = coils * 16;
  const span = Math.max(0.4, endX - startX);
  for (let i = 0; i <= totalSteps; i++) {
    const t = i / totalSteps;
    const x = startX + t * span;
    const angle = t * coils * Math.PI * 2;
    // Extremos rectos para acoplamiento limpio
    const taper = t < 0.06 ? t / 0.06 : t > 0.94 ? (1 - t) / 0.06 : 1;
    const y = yCenter + Math.sin(angle) * radius * taper;
    const z = Math.cos(angle) * radius * taper;
    points.push(new THREE.Vector3(x, y, z));
  }
  const curve = new THREE.CatmullRomCurve3(points);
  return new THREE.TubeGeometry(curve, totalSteps, 0.045, 8, false);
}

/**
 * Mapea colores hex de vectores DCL a números para Three.js.
 */
function parseHexColor(hexStr, fallback = 0x38bdf8) {
  if (!hexStr) return fallback;
  try {
    return new THREE.Color(hexStr).getHex();
  } catch {
    return fallback;
  }
}

export default function Physics3DViewport({
  sceneType,
  params,
  simRef,
  solverRef,
  showVectors,
  sandboxObjects,
  sandboxRopes,
  resetCameraTrigger,
}) {
  const mountRef = useRef(null);

  // Refs para acceder al último estado sin recrear el contexto WebGL
  const propsRef = useRef({
    sceneType,
    params,
    showVectors,
    sandboxObjects,
    sandboxRopes,
  });
  propsRef.current = { sceneType, params, showVectors, sandboxObjects, sandboxRopes };

  const cameraRef = useRef(null);
  const controlsRef = useRef(null);

  const setDefaultCameraForScene = (type) => {
    const cam = cameraRef.current;
    const ctrl = controlsRef.current;
    if (!cam || !ctrl) return;

    if (type === 'incline_pulley') {
      cam.position.set(1.5, 4.4, 9.2);
      ctrl.target.set(0.3, 1.6, 0);
    } else if (type === 'horizontal_table') {
      cam.position.set(1.8, 4.2, 8.8);
      ctrl.target.set(0.5, 1.2, 0);
    } else if (type === 'atwood') {
      cam.position.set(0, 3.2, 8.6);
      ctrl.target.set(0, 2.2, 0);
    } else if (type === 'spring_block') {
      cam.position.set(1.2, 3.3, 7.6);
      ctrl.target.set(0.4, 1.0, 0);
    } else if (type === 'projectile') {
      cam.position.set(4.5, 4.5, 11.5);
      ctrl.target.set(4.0, 2.0, 0);
    } else if (type === 'pendulum') {
      cam.position.set(0, 2.8, 8.2);
      ctrl.target.set(0, 2.0, 0);
    } else {
      cam.position.set(0, 4.8, 10.5);
      ctrl.target.set(0, 1.6, 0);
    }
    ctrl.update();
  };

  useEffect(() => {
    setDefaultCameraForScene(sceneType);
  }, [sceneType, resetCameraTrigger]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 920;
    const height = container.clientHeight || 500;

    // Escena y niebla atmosférica de laboratorio oscuro
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x07090f);
    scene.fog = new THREE.FogExp2(0x07090f, 0.022);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 120);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.07;
    controls.maxPolarAngle = Math.PI * 0.52;
    controls.minDistance = 3;
    controls.maxDistance = 26;
    controlsRef.current = controls;

    setDefaultCameraForScene(propsRef.current.sceneType);

    // Iluminación de estudio de laboratorio
    const ambient = new THREE.AmbientLight(0xcbd5e1, 0.65);
    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight(0xfffbeb, 1.8);
    keyLight.position.set(6, 11, 7);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 2048;
    keyLight.shadow.mapSize.height = 2048;
    keyLight.shadow.camera.near = 1;
    keyLight.shadow.camera.far = 35;
    const d = 10;
    keyLight.shadow.camera.left = -d;
    keyLight.shadow.camera.right = d;
    keyLight.shadow.camera.top = d;
    keyLight.shadow.camera.bottom = -d;
    keyLight.shadow.bias = -0.0005;
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x38bdf8, 0.75);
    rimLight.position.set(-7, 5, -6);
    scene.add(rimLight);

    const fillLight = new THREE.PointLight(0xf59e0b, 0.45, 20);
    fillLight.position.set(0, 4, 5);
    scene.add(fillLight);

    // Suelo del laboratorio + Grilla técnica
    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(60, 60),
      new THREE.MeshStandardMaterial({
        color: 0x0b0f19,
        roughness: 0.82,
        metalness: 0.15,
      })
    );
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = 0;
    floor.receiveShadow = true;
    scene.add(floor);

    const grid = new THREE.GridHelper(40, 40, 0x1e293b, 0x111827);
    grid.position.y = 0.005;
    scene.add(grid);

    // Grupo dinámico que se reconstruye cuando cambia sceneType o parámetros estructurales
    const dynamicGroup = new THREE.Group();
    scene.add(dynamicGroup);

    // Grupo para vectores 3D (ArrowHelpers)
    const vectorGroup = new THREE.Group();
    scene.add(vectorGroup);

    let activeSignature = '';
    let sceneHandles = {};

    const clearGroup = (grp) => {
      while (grp.children.length > 0) {
        const child = grp.children[0];
        grp.remove(child);
        child.traverse((obj) => {
          if (obj.geometry) obj.geometry.dispose();
          if (obj.material) {
            if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose());
            else obj.material.dispose();
          }
        });
      }
    };

    const rebuildSceneObjects = () => {
      clearGroup(dynamicGroup);
      sceneHandles = {};
      const { sceneType: st, params: p, sandboxObjects: sbObjs, sandboxRopes: sbRopes } = propsRef.current;

      if (st === 'incline_pulley') {
        const angleDeg = Number(p.angle ?? 30);
        const theta = (angleDeg * Math.PI) / 180;
        const m1 = Number(p.m1 ?? 6);
        const m2 = Number(p.m2 ?? 4.5);

        const baseLen = 4.0;
        const rampH = Math.max(0.9, baseLen * Math.tan(theta));
        const clampedH = Math.min(3.8, rampH);
        const effBase = clampedH / Math.max(0.18, Math.tan(theta));
        const slopeLen = Math.hypot(effBase, clampedH);

        // Prisma triangular (dos rampas unidas formando un triángulo)
        const shape = new THREE.Shape();
        shape.moveTo(-effBase, 0);
        shape.lineTo(effBase, 0);
        shape.lineTo(0, clampedH);
        shape.closePath();

        const wedgeGeo = new THREE.ExtrudeGeometry(shape, {
          depth: 1.8,
          bevelEnabled: true,
          bevelThickness: 0.04,
          bevelSize: 0.04,
          bevelSegments: 2,
        });
        wedgeGeo.translate(0, 0, -0.9);
        const wedgeMat = new THREE.MeshStandardMaterial({
          color: 0x1e293b,
          metalness: 0.35,
          roughness: 0.55,
        });
        const wedge = new THREE.Mesh(wedgeGeo, wedgeMat);
        wedge.castShadow = true;
        wedge.receiveShadow = true;
        dynamicGroup.add(wedge);

        // Dos superficies de rodadura unidas en la cima del triángulo
        const trackMat = new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.5, roughness: 0.4 });
        const leftTrack = new THREE.Mesh(new THREE.BoxGeometry(slopeLen + 0.06, 0.08, 1.86), trackMat);
        leftTrack.position.set(-effBase / 2, clampedH / 2, 0);
        leftTrack.rotation.z = theta;
        leftTrack.receiveShadow = true;
        dynamicGroup.add(leftTrack);

        const rightTrack = new THREE.Mesh(new THREE.BoxGeometry(slopeLen + 0.06, 0.08, 1.86), trackMat);
        rightTrack.position.set(effBase / 2, clampedH / 2, 0);
        rightTrack.rotation.z = -theta;
        rightTrack.receiveShadow = true;
        dynamicGroup.add(rightTrack);

        // Polea en el vértice superior del triángulo
        const apexY = clampedH;
        const pulleyPos = new THREE.Vector3(0, apexY + 0.44, 0);
        const pulley = createPulley3D(0.36);
        pulley.position.copy(pulleyPos);
        dynamicGroup.add(pulley);

        // Soporte vertical de la polea en la cima
        const bracket = new THREE.Mesh(
          new THREE.BoxGeometry(0.18, 0.52, 0.24),
          new THREE.MeshStandardMaterial({ color: 0x64748b, metalness: 0.8, roughness: 0.3 })
        );
        bracket.position.set(0, apexY + 0.22, 0);
        dynamicGroup.add(bracket);

        // Bloque m1 sobre la rampa izquierda
        const s1 = Math.min(1.25, Math.max(0.72, 0.62 + m1 * 0.042));
        const block1 = createMassBlock3D(s1 * 1.25, s1 * 0.85, s1, 0x0284c7, 0x38bdf8);
        dynamicGroup.add(block1);

        // Bloque m2 sobre la rampa derecha del triángulo
        let block2 = null;
        let rope1 = null;
        let rope2 = null;
        const s2 = Math.min(1.25, Math.max(0.7, 0.6 + m2 * 0.042));
        if (m2 > 0) {
          block2 = createMassBlock3D(s2 * 1.25, s2 * 0.85, s2, 0xe11d48, 0xfb7185);
          dynamicGroup.add(block2);
          rope1 = createRopeSegment3D(0xfbbf24);
          rope2 = createRopeSegment3D(0xfbbf24);
          dynamicGroup.add(rope1, rope2);
        }

        sceneHandles = {
          theta,
          effBase,
          clampedH,
          slopeLen,
          pulleyPos,
          pulley,
          block1,
          block2,
          rope1,
          rope2,
          s1,
          s2,
        };
      } else if (st === 'horizontal_table') {
        const m1 = Number(p.m1 ?? 5);
        const m2 = Number(p.m2 ?? 3);
        const tableY = 2.6;
        const tableW = 6.2;

        // Tablero de la mesa de laboratorio
        const tableTop = new THREE.Mesh(
          new THREE.BoxGeometry(tableW, 0.22, 2.2),
          new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.35, roughness: 0.5 })
        );
        tableTop.position.set(-0.6, tableY, 0);
        tableTop.castShadow = true;
        tableTop.receiveShadow = true;
        dynamicGroup.add(tableTop);

        // Patas metálicas de la mesa
        const legMat = new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.75, roughness: 0.3 });
        const legPositions = [
          [-3.4, tableY / 2 - 0.05, -0.85],
          [-3.4, tableY / 2 - 0.05, 0.85],
          [2.2, tableY / 2 - 0.05, -0.85],
          [2.2, tableY / 2 - 0.05, 0.85],
        ];
        legPositions.forEach(([lx, ly, lz]) => {
          const leg = new THREE.Mesh(new THREE.BoxGeometry(0.18, tableY - 0.1, 0.18), legMat);
          leg.position.set(lx, ly, lz);
          leg.castShadow = true;
          dynamicGroup.add(leg);
        });

        // Polea en el borde derecho
        const edgeX = -0.6 + tableW / 2;
        const pulleyPos = new THREE.Vector3(edgeX + 0.36, tableY + 0.34, 0);
        const pulley = createPulley3D(0.34);
        pulley.position.copy(pulleyPos);
        dynamicGroup.add(pulley);

        const bracket = new THREE.Mesh(
          new THREE.BoxGeometry(0.45, 0.12, 0.2),
          legMat
        );
        bracket.position.set(edgeX + 0.18, tableY + 0.16, 0);
        bracket.rotation.z = Math.PI / 5;
        dynamicGroup.add(bracket);

        const s1 = Math.min(1.25, Math.max(0.75, 0.65 + m1 * 0.045));
        const block1 = createMassBlock3D(s1 * 1.25, s1 * 0.85, s1, 0x0284c7, 0x38bdf8);
        dynamicGroup.add(block1);

        const r2 = Math.min(0.58, Math.max(0.32, 0.26 + m2 * 0.03));
        const block2 = createHangingWeight3D(r2, r2 * 1.6, 0xe11d48, 0xfb7185);
        dynamicGroup.add(block2);

        const rope1 = createRopeSegment3D(0xfbbf24);
        const rope2 = createRopeSegment3D(0xfbbf24);
        dynamicGroup.add(rope1, rope2);

        sceneHandles = { tableY, pulleyPos, pulley, block1, block2, rope1, rope2, s1 };
      } else if (st === 'atwood') {
        const m1 = Number(p.m1 ?? 7);
        const m2 = Number(p.m2 ?? 4);
        const frameMat = new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.75, roughness: 0.3 });

        // Pórtico vertical de soporte
        const beam = new THREE.Mesh(new THREE.BoxGeometry(4.2, 0.24, 0.4), frameMat);
        beam.position.set(0, 5.2, -0.35);
        beam.castShadow = true;
        dynamicGroup.add(beam);

        [-1.9, 1.9].forEach((px) => {
          const col = new THREE.Mesh(new THREE.BoxGeometry(0.24, 5.2, 0.3), frameMat);
          col.position.set(px, 2.6, -0.35);
          col.castShadow = true;
          dynamicGroup.add(col);
        });

        const pulleyPos = new THREE.Vector3(0, 4.7, 0);
        const pulley = createPulley3D(0.55);
        pulley.position.copy(pulleyPos);
        dynamicGroup.add(pulley);

        const axleMount = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.55, 0.45), frameMat);
        axleMount.position.set(0, 4.95, -0.18);
        dynamicGroup.add(axleMount);

        const r1 = Math.min(0.62, Math.max(0.34, 0.28 + m1 * 0.03));
        const r2 = Math.min(0.62, Math.max(0.34, 0.28 + m2 * 0.03));
        const block1 = createHangingWeight3D(r1, r1 * 1.65, 0x0284c7, 0x38bdf8);
        const block2 = createHangingWeight3D(r2, r2 * 1.65, 0xe11d48, 0xfb7185);
        dynamicGroup.add(block1, block2);

        const rope1 = createRopeSegment3D(0xfbbf24);
        const rope2 = createRopeSegment3D(0xfbbf24);
        dynamicGroup.add(rope1, rope2);

        sceneHandles = { pulleyPos, pulley, block1, block2, rope1, rope2, r1, r2 };
      } else if (st === 'spring_block') {
        const m1 = Number(p.m1 ?? 3);

        // Riel / mesa base
        const track = new THREE.Mesh(
          new THREE.BoxGeometry(9.2, 0.28, 2.4),
          new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.4, roughness: 0.5 })
        );
        track.position.set(0.4, 0.14, 0);
        track.receiveShadow = true;
        dynamicGroup.add(track);

        // Pared de anclaje izquierda
        const wall = new THREE.Mesh(
          new THREE.BoxGeometry(0.45, 2.6, 2.4),
          new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.65, roughness: 0.35 })
        );
        wall.position.set(-4.0, 1.3, 0);
        wall.castShadow = true;
        wall.receiveShadow = true;
        dynamicGroup.add(wall);

        // Marcador de equilibrio x = 0
        const eqMarker = new THREE.Mesh(
          new THREE.BoxGeometry(0.05, 0.04, 2.45),
          new THREE.MeshStandardMaterial({ color: 0x10b981, emissive: 0x059669, emissiveIntensity: 0.5 })
        );
        eqMarker.position.set(0.2, 0.29, 0);
        dynamicGroup.add(eqMarker);

        // Bloque m1
        const s1 = Math.min(1.3, Math.max(0.78, 0.68 + m1 * 0.05));
        const block1 = createMassBlock3D(s1 * 1.2, s1 * 0.9, s1, 0x0284c7, 0x38bdf8);
        dynamicGroup.add(block1);

        // Resorte helicoidal 3D (se actualiza su geometría en cada frame)
        const springMat = new THREE.MeshStandardMaterial({
          color: 0xf59e0b,
          metalness: 0.85,
          roughness: 0.22,
        });
        const springMesh = new THREE.Mesh(buildHelixGeometry(-3.75, -0.4, 0.72), springMat);
        springMesh.castShadow = true;
        dynamicGroup.add(springMesh);

        sceneHandles = { wallX: -3.77, eqX: 0.2, block1, springMesh, s1 };
      } else if (st === 'projectile') {
        const h0 = Number(p.h0 ?? 2.0);
        const angleDeg = Number(p.angle ?? 45);
        const scale = 0.22;
        const hWorld = Math.max(0.2, h0 * scale);

        // Pedestal de lanzamiento
        const pedestal = new THREE.Mesh(
          new THREE.CylinderGeometry(0.45, 0.6, hWorld, 20),
          new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.65, roughness: 0.35 })
        );
        pedestal.position.set(-4.5, hWorld / 2, 0);
        pedestal.castShadow = true;
        dynamicGroup.add(pedestal);

        // Tubo lanzador inclinado
        const barrel = new THREE.Mesh(
          new THREE.CylinderGeometry(0.18, 0.22, 0.95, 16),
          new THREE.MeshStandardMaterial({ color: 0xf59e0b, metalness: 0.75, roughness: 0.25 })
        );
        barrel.position.set(-4.5, hWorld + 0.15, 0);
        barrel.rotation.z = -(Math.PI / 2 - (angleDeg * Math.PI) / 180);
        barrel.castShadow = true;
        dynamicGroup.add(barrel);

        // Esfera proyectil metálica 3D
        const ball = new THREE.Mesh(
          new THREE.SphereGeometry(0.28, 28, 28),
          new THREE.MeshStandardMaterial({
            color: 0x38bdf8,
            metalness: 0.75,
            roughness: 0.2,
          })
        );
        ball.castShadow = true;
        dynamicGroup.add(ball);

        // Estela 3D de la trayectoria
        const trailGeo = new THREE.BufferGeometry();
        const trailMat = new THREE.LineBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.8 });
        const trailLine = new THREE.Line(trailGeo, trailMat);
        dynamicGroup.add(trailLine);

        sceneHandles = { originX: -4.5, scale, ball, trailLine };
      } else if (st === 'pendulum') {
        const m1 = Number(p.m1 ?? 2.5);
        const lengthM = Number(p.length ?? 3.5);
        const Lworld = Math.min(4.2, Math.max(2.0, lengthM * 0.85));
        const pivotY = 5.0;

        const frameMat = new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.75, roughness: 0.3 });
        const topBeam = new THREE.Mesh(new THREE.BoxGeometry(4.4, 0.24, 0.4), frameMat);
        topBeam.position.set(0, pivotY + 0.14, 0);
        topBeam.castShadow = true;
        dynamicGroup.add(topBeam);

        [-2.0, 2.0].forEach((px) => {
          const leg = new THREE.Mesh(new THREE.BoxGeometry(0.22, pivotY + 0.2, 0.28), frameMat);
          leg.position.set(px, (pivotY + 0.2) / 2, 0);
          leg.castShadow = true;
          dynamicGroup.add(leg);
        });

        const pivotSphere = new THREE.Mesh(
          new THREE.SphereGeometry(0.14, 16, 16),
          new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.9, roughness: 0.2 })
        );
        pivotSphere.position.set(0, pivotY, 0);
        dynamicGroup.add(pivotSphere);

        const bobR = Math.min(0.55, Math.max(0.28, 0.24 + m1 * 0.04));
        const bob = new THREE.Mesh(
          new THREE.SphereGeometry(bobR, 32, 32),
          new THREE.MeshStandardMaterial({
            color: 0x0284c7,
            metalness: 0.7,
            roughness: 0.2,
          })
        );
        bob.castShadow = true;
        dynamicGroup.add(bob);

        const rod = createRopeSegment3D(0xfbbf24);
        dynamicGroup.add(rod);

        const trailGeo = new THREE.BufferGeometry();
        const trailLine = new THREE.Line(
          trailGeo,
          new THREE.LineBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.65 })
        );
        dynamicGroup.add(trailLine);

        sceneHandles = { pivotY, Lworld, bob, rod, trailLine };
      } else if (st === 'sandbox_game') {
        const objHandles = {};
        const ropeHandles = [];

        sbObjs.forEach((obj) => {
          const angleRad = ((Number(obj.angleDeg) || 0) * Math.PI) / 180;
          const m = Number(obj.mass || 5);
          const baseX = (obj.x - 460) / 85;
          const baseY = (440 - obj.y) / 85;

          let platform = null;
          if (obj.type !== 'hanging_mass') {
            platform = new THREE.Mesh(
              new THREE.BoxGeometry(2.6, 0.14, 1.4),
              new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.5, roughness: 0.45 })
            );
            platform.position.set(baseX, baseY - 0.48, 0);
            platform.rotation.z = angleRad;
            platform.receiveShadow = true;
            dynamicGroup.add(platform);
          }

          const mesh =
            obj.type === 'hanging_mass'
              ? createHangingWeight3D(
                  Math.min(0.5, 0.26 + m * 0.025),
                  0.75,
                  0xe11d48,
                  0xfb7185
                )
              : createMassBlock3D(
                  Math.min(1.15, 0.65 + m * 0.04),
                  0.72,
                  0.8,
                  0x0284c7,
                  0x38bdf8
                );
          dynamicGroup.add(mesh);
          objHandles[obj.id] = { obj, mesh, baseX, baseY, angleRad };
        });

        sbRopes.forEach((r) => {
          const o1 = sbObjs.find((o) => o.id === r.fromId);
          const o2 = sbObjs.find((o) => o.id === r.toId);
          if (!o1 || !o2) return;

          const pX = ((o1.x + o2.x) / 2 - 460) / 85;
          const pY = (440 - (Math.min(o1.y, o2.y) - 65)) / 85;
          const pulley = createPulley3D(0.32);
          pulley.position.set(pX, pY, 0);
          dynamicGroup.add(pulley);

          const rope1 = createRopeSegment3D(0xfbbf24);
          const rope2 = createRopeSegment3D(0xfbbf24);
          dynamicGroup.add(rope1, rope2);
          ropeHandles.push({ fromId: r.fromId, toId: r.toId, pulley, rope1, rope2 });
        });

        sceneHandles = { objHandles, ropeHandles };
      }
    };

    const getSignature = () => {
      const { sceneType: st, params: p, sandboxObjects: sbObjs, sandboxRopes: sbRopes } = propsRef.current;
      return JSON.stringify({
        st,
        m1: p.m1,
        m2: p.m2,
        angle: p.angle,
        h0: p.h0,
        length: p.length,
        sbObjs,
        sbRopes,
      });
    };

    // Pool de ArrowHelpers para vectores 3D
    const syncVectors3D = (bodyPositions) => {
      clearGroup(vectorGroup);
      if (!propsRef.current.showVectors) return;
      const solver = solverRef?.current;
      if (!solver || !solver.fbdBodies) return;

      solver.fbdBodies.forEach((body) => {
        const origin = bodyPositions[body.id];
        if (!origin) return;

        body.vectors.forEach((vec) => {
          if (vec.id === 'W1x' || vec.id === 'W1y') return; // evitar saturar en 3D
          const mag = Number(vec.magnitude || 0);
          if (mag < 0.2) return;

          const len = Math.min(2.2, Math.max(0.55, mag * 0.025));
          const rad = (vec.angleDeg * Math.PI) / 180;
          const dir = new THREE.Vector3(Math.cos(rad), Math.sin(rad), 0).normalize();
          const arrow = new THREE.ArrowHelper(
            dir,
            origin.clone().add(new THREE.Vector3(0, 0, 0.35)),
            len,
            parseHexColor(vec.color),
            0.22,
            0.14
          );
          vectorGroup.add(arrow);
        });
      });
    };

    let rafId = 0;
    const animate = () => {
      rafId = requestAnimationFrame(animate);

      const sig = getSignature();
      if (sig !== activeSignature) {
        activeSignature = sig;
        rebuildSceneObjects();
      }

      const sim = simRef.current;
      const { sceneType: st, params: p } = propsRef.current;
      const bodyPositions = {};

      if (st === 'incline_pulley' && sceneHandles.block1) {
        const { theta, effBase, clampedH, pulleyPos, pulley, block1, block2, rope1, rope2, s1, s2 } = sceneHandles;
        const offsetMeters = Math.max(-1.4, Math.min(1.4, sim.s * 0.45));

        const normalOffset1 = (s1 * 0.85) / 2 + 0.05;
        const bx = -effBase / 2 + offsetMeters * Math.cos(theta) - normalOffset1 * Math.sin(theta);
        const by = clampedH / 2 + offsetMeters * Math.sin(theta) + normalOffset1 * Math.cos(theta);

        block1.position.set(bx, by, 0);
        block1.rotation.z = theta;
        bodyPositions.m1 = new THREE.Vector3(bx, by, 0);

        if (pulley.userData.wheel) {
          pulley.userData.wheel.rotation.z = -sim.pulleyAngle;
        }

        if (block2 && rope1 && rope2) {
          const normalOffset2 = (s2 * 0.85) / 2 + 0.05;
          const b2x = effBase / 2 + offsetMeters * Math.cos(theta) + normalOffset2 * Math.sin(theta);
          const b2y = clampedH / 2 - offsetMeters * Math.sin(theta) + normalOffset2 * Math.cos(theta);

          block2.position.set(b2x, b2y, 0);
          block2.rotation.z = -theta;
          bodyPositions.m2 = new THREE.Vector3(b2x, b2y, 0);

          const b1Attach = new THREE.Vector3(
            bx + (s1 * 0.6) * Math.cos(theta),
            by + (s1 * 0.6) * Math.sin(theta),
            0
          );
          const pLeft = new THREE.Vector3(
            pulleyPos.x - 0.25 * Math.sin(theta),
            pulleyPos.y + 0.25 * Math.cos(theta),
            0
          );
          const pRight = new THREE.Vector3(
            pulleyPos.x + 0.25 * Math.sin(theta),
            pulleyPos.y + 0.25 * Math.cos(theta),
            0
          );
          const b2Attach = new THREE.Vector3(
            b2x - (s2 * 0.6) * Math.cos(theta),
            b2y + (s2 * 0.6) * Math.sin(theta),
            0
          );

          updateRopeBetween(rope1, b1Attach, pLeft);
          updateRopeBetween(rope2, pRight, b2Attach);
        }
      } else if (st === 'horizontal_table' && sceneHandles.block1) {
        const { tableY, pulleyPos, pulley, block1, block2, rope1, rope2, s1 } = sceneHandles;
        const offset = Math.max(-1.8, Math.min(1.8, sim.s * 0.52));

        const bx = -0.8 + offset;
        const by = tableY + 0.11 + (s1 * 0.85) / 2;
        block1.position.set(bx, by, 0);
        bodyPositions.m1 = new THREE.Vector3(bx, by, 0);

        if (pulley.userData.wheel) {
          pulley.userData.wheel.rotation.z = -sim.pulleyAngle;
        }

        const hangX = pulleyPos.x + 0.32;
        const hangY = Math.max(0.55, tableY - 0.9 - offset);
        block2.position.set(hangX, hangY, 0);
        bodyPositions.m2 = new THREE.Vector3(hangX, hangY, 0);

        updateRopeBetween(
          rope1,
          new THREE.Vector3(bx + (s1 * 0.6), by + 0.1, 0),
          new THREE.Vector3(pulleyPos.x, pulleyPos.y + 0.3, 0)
        );
        updateRopeBetween(
          rope2,
          new THREE.Vector3(hangX, pulleyPos.y, 0),
          new THREE.Vector3(hangX, hangY + 0.42, 0)
        );
      } else if (st === 'atwood' && sceneHandles.block1) {
        const { pulleyPos, pulley, block1, block2, rope1, rope2 } = sceneHandles;
        const offset = Math.max(-1.45, Math.min(1.45, sim.s * 0.48));
        const x1 = -0.53;
        const x2 = 0.53;
        const y1 = 2.4 - offset;
        const y2 = 2.4 + offset;

        block1.position.set(x1, y1, 0);
        block2.position.set(x2, y2, 0);
        bodyPositions.m1 = new THREE.Vector3(x1, y1, 0);
        bodyPositions.m2 = new THREE.Vector3(x2, y2, 0);

        if (pulley.userData.wheel) {
          pulley.userData.wheel.rotation.z = -sim.pulleyAngle;
        }

        updateRopeBetween(
          rope1,
          new THREE.Vector3(x1, pulleyPos.y, 0),
          new THREE.Vector3(x1, y1 + 0.42, 0)
        );
        updateRopeBetween(
          rope2,
          new THREE.Vector3(x2, pulleyPos.y, 0),
          new THREE.Vector3(x2, y2 + 0.42, 0)
        );
      } else if (st === 'spring_block' && sceneHandles.block1) {
        const { wallX, eqX, block1, springMesh, s1 } = sceneHandles;
        const bx = eqX + Math.max(-2.1, Math.min(2.6, sim.x * 0.85));
        const by = 0.28 + (s1 * 0.9) / 2;
        block1.position.set(bx, by, 0);
        bodyPositions.m1 = new THREE.Vector3(bx, by, 0);

        // Actualizar geometría helicoidal del resorte
        const springEndX = bx - (s1 * 1.2) / 2;
        springMesh.geometry.dispose();
        springMesh.geometry = buildHelixGeometry(wallX, springEndX, by, 10, 0.24);
      } else if (st === 'projectile' && sceneHandles.ball) {
        const { originX, scale, ball, trailLine } = sceneHandles;
        const px = originX + sim.px * scale;
        const py = Math.max(0.28, sim.py * scale);
        ball.position.set(px, py, 0);
        bodyPositions.m1 = new THREE.Vector3(px, py, 0);

        if (sim.trail && sim.trail.length > 1) {
          const pts = sim.trail.map((pt) => new THREE.Vector3(originX + pt.x * scale, Math.max(0.1, pt.y * scale), 0));
          trailLine.geometry.dispose();
          trailLine.geometry = new THREE.BufferGeometry().setFromPoints(pts);
        }
      } else if (st === 'pendulum' && sceneHandles.bob) {
        const { pivotY, Lworld, bob, rod, trailLine } = sceneHandles;
        const bx = Lworld * Math.sin(sim.theta);
        const by = pivotY - Lworld * Math.cos(sim.theta);
        bob.position.set(bx, by, 0);
        bodyPositions.m1 = new THREE.Vector3(bx, by, 0);

        updateRopeBetween(rod, new THREE.Vector3(0, pivotY, 0), new THREE.Vector3(bx, by, 0));

        if (sim.pendulumTrail && sim.pendulumTrail.length > 1) {
          const pts = sim.pendulumTrail.map(
            (pt) => new THREE.Vector3(Lworld * Math.sin(pt.theta), pivotY - Lworld * Math.cos(pt.theta), 0)
          );
          trailLine.geometry.dispose();
          trailLine.geometry = new THREE.BufferGeometry().setFromPoints(pts);
        }
      } else if (st === 'sandbox_game' && sceneHandles.objHandles) {
        const { objHandles, ropeHandles } = sceneHandles;
        const offset = sim.s * 0.4;

        Object.entries(objHandles).forEach(([id, h]) => {
          const { obj, mesh, baseX, baseY, angleRad } = h;
          const curX = obj.type === 'hanging_mass' ? baseX : baseX + offset * Math.cos(angleRad);
          const curY = obj.type === 'hanging_mass' ? baseY - offset : baseY + offset * Math.sin(angleRad);
          mesh.position.set(curX, curY, 0);
          mesh.rotation.z = obj.type === 'hanging_mass' ? 0 : angleRad;
          bodyPositions[id] = new THREE.Vector3(curX, curY, 0);
        });

        ropeHandles.forEach((rh) => {
          const p1 = bodyPositions[rh.fromId];
          const p2 = bodyPositions[rh.toId];
          if (!p1 || !p2) return;
          if (rh.pulley.userData.wheel) {
            rh.pulley.userData.wheel.rotation.z = -sim.pulleyAngle;
          }
          updateRopeBetween(rh.rope1, p1, rh.pulley.position);
          updateRopeBetween(rh.rope2, rh.pulley.position, p2);
        });
      }

      syncVectors3D(bodyPositions);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 920;
      const h = container.clientHeight || 500;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', handleResize);
      controls.dispose();
      clearGroup(dynamicGroup);
      clearGroup(vectorGroup);
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-full cursor-grab active:cursor-grabbing"
      title="Arrastra para rotar en 3D · Rueda para zoom · Clic derecho para desplazar"
    />
  );
}
