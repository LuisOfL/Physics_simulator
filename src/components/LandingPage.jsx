import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { ArrowRight, Menu, Box } from 'lucide-react';

/**
 * Fondo cinematográfico 3D en tiempo real (60 FPS) con física real de un Péndulo de Newton
 * cromado y anillos orbitales en iluminación de estudio estilo automotriz de lujo.
 */
function PhysicsHeroVideoCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    scene.fog = new THREE.FogExp2(0x000000, 0.045);

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 1.8, 10.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // Iluminación dramática de estudio oscuro (blanco frío + acento azul hielo)
    const ambient = new THREE.AmbientLight(0xffffff, 0.25);
    scene.add(ambient);

    const keyLight = new THREE.SpotLight(0xffffff, 65, 30, Math.PI / 4, 0.5, 1.5);
    keyLight.position.set(5, 8, 6);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x93c5fd, 1.6);
    rimLight.position.set(-7, 4, -5);
    scene.add(rimLight);

    const backLight = new THREE.PointLight(0xffffff, 18, 22);
    backLight.position.set(0, 3, -6);
    scene.add(backLight);

    // Suelo reflectante oscuro
    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(50, 50),
      new THREE.MeshStandardMaterial({
        color: 0x030305,
        metalness: 0.85,
        roughness: 0.22,
      })
    );
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -2.2;
    scene.add(floor);

    // Péndulo de Newton cromado central (5 esferas)
    const cradleGroup = new THREE.Group();
    cradleGroup.position.set(0, 0.4, 0);
    scene.add(cradleGroup);

    const chromeMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      metalness: 0.96,
      roughness: 0.08,
    });
    const darkMetalMat = new THREE.MeshStandardMaterial({
      color: 0x18181b,
      metalness: 0.85,
      roughness: 0.28,
    });
    const wireMat = new THREE.MeshStandardMaterial({
      color: 0xa1a1aa,
      metalness: 0.8,
      roughness: 0.2,
    });

    // Barra superior del pórtico
    const topBar = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 5.2, 16), darkMetalMat);
    topBar.rotation.z = Math.PI / 2;
    topBar.position.y = 2.6;
    cradleGroup.add(topBar);

    const sphereR = 0.42;
    const ropeLen = 2.8;
    const pivotY = 2.6;
    const pivots = [];

    for (let i = 0; i < 5; i++) {
      const x = (i - 2) * (sphereR * 2.02);
      const pivot = new THREE.Group();
      pivot.position.set(x, pivotY, 0);

      const wire = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, ropeLen, 8), wireMat);
      wire.position.y = -ropeLen / 2;
      pivot.add(wire);

      const ball = new THREE.Mesh(new THREE.SphereGeometry(sphereR, 40, 40), chromeMat);
      ball.position.y = -ropeLen;
      pivot.add(ball);

      cradleGroup.add(pivot);
      pivots.push(pivot);
    }

    // Anillos orbitales de precisión alrededor (efecto giroscopio)
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0x52525b,
      metalness: 0.9,
      roughness: 0.18,
    });
    const outerRing = new THREE.Mesh(new THREE.TorusGeometry(4.4, 0.018, 12, 120), ringMat);
    outerRing.rotation.x = Math.PI / 2.6;
    scene.add(outerRing);

    const innerRing = new THREE.Mesh(new THREE.TorusGeometry(3.6, 0.014, 12, 120), ringMat);
    innerRing.rotation.y = Math.PI / 3;
    scene.add(innerRing);

    // Partículas de polvo estelar / cinemática en suspensión
    const starCount = 280;
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 26;
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 14 + 1;
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 18 - 2;
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const stars = new THREE.Points(
      starGeo,
      new THREE.PointsMaterial({ color: 0xffffff, size: 0.035, transparent: true, opacity: 0.45 })
    );
    scene.add(stars);

    let rafId = 0;
    const clock = new THREE.Clock();
    const mouse = { x: 0, y: 0 };
    const onMouseMove = (e) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouseMove);

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Oscilación física realista del Péndulo de Newton
      const freq = 2.65;
      const amp = 0.52;
      const phase = Math.sin(t * freq);

      // Esfera izquierda (0) se eleva cuando phase < 0, derecha (4) cuando phase > 0
      pivots[0].rotation.z = phase < 0 ? phase * amp : 0;
      pivots[1].rotation.z = phase < 0 ? phase * 0.03 : 0;
      pivots[2].rotation.z = phase * 0.012;
      pivots[3].rotation.z = phase > 0 ? phase * 0.03 : 0;
      pivots[4].rotation.z = phase > 0 ? phase * amp : 0;

      // Rotación lenta cinematográfica de anillos y cámara con parallax suave del mouse
      outerRing.rotation.z = t * 0.08;
      innerRing.rotation.x = t * 0.11;
      stars.rotation.y = t * 0.015;

      const targetX = Math.sin(t * 0.18) * 1.4 + mouse.x * 1.1;
      const targetY = 1.6 + Math.cos(t * 0.14) * 0.35 - mouse.y * 0.55;
      camera.position.x += (targetX - camera.position.x) * 0.04;
      camera.position.y += (targetY - camera.position.y) * 0.04;
      camera.lookAt(0, 0.2, 0);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
}

/**
 * Mini visor 3D interactivo para cada tarjeta de módulo en la página de inicio.
 */
function Mini3DShowcase({ variant }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const w = container.clientWidth || 320;
    const h = container.clientHeight || 180;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, w / h, 0.1, 50);
    camera.position.set(0, 0.9, 4.2);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 0.55));
    const dir = new THREE.DirectionalLight(0xffffff, 1.8);
    dir.position.set(3, 5, 4);
    scene.add(dir);
    const rim = new THREE.DirectionalLight(0x93c5fd, 0.9);
    rim.position.set(-4, -2, -3);
    scene.add(rim);

    const group = new THREE.Group();
    scene.add(group);

    const chrome = new THREE.MeshStandardMaterial({ color: 0xf8fafc, metalness: 0.9, roughness: 0.15 });
    const dark = new THREE.MeshStandardMaterial({ color: 0x27272a, metalness: 0.75, roughness: 0.3 });

    if (variant === 'dynamics') {
      // Polea 3D cromada + bloque inclinado
      const torus = new THREE.Mesh(new THREE.TorusGeometry(0.75, 0.14, 16, 48), chrome);
      group.add(torus);
      for (let i = 0; i < 4; i++) {
        const spoke = new THREE.Mesh(new THREE.BoxGeometry(0.08, 1.35, 0.1), dark);
        spoke.rotation.z = (i * Math.PI) / 4;
        group.add(spoke);
      }
      const cube = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.65, 0.65), chrome);
      cube.position.set(1.15, -0.55, 0.2);
      group.add(cube);
    } else if (variant === 'oscillations') {
      // Resorte helicoidal 3D + esfera
      const pts = [];
      for (let i = 0; i <= 80; i++) {
        const t = i / 80;
        const a = t * 6 * Math.PI * 2;
        pts.push(new THREE.Vector3((t - 0.5) * 2.2, Math.sin(a) * 0.35, Math.cos(a) * 0.35));
      }
      const curve = new THREE.CatmullRomCurve3(pts);
      const spring = new THREE.Mesh(new THREE.TubeGeometry(curve, 80, 0.06, 10, false), chrome);
      group.add(spring);
      const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.42, 28, 28), dark);
      sphere.position.set(1.25, 0, 0);
      group.add(sphere);
    } else {
      // Giroscopio / átomo 3D de IA y Mecánica
      const core = new THREE.Mesh(new THREE.IcosahedronGeometry(0.48, 1), chrome);
      group.add(core);
      const r1 = new THREE.Mesh(new THREE.TorusGeometry(0.95, 0.025, 12, 64), chrome);
      r1.rotation.x = Math.PI / 3;
      const r2 = new THREE.Mesh(new THREE.TorusGeometry(1.15, 0.025, 12, 64), dark);
      r2.rotation.y = Math.PI / 3;
      group.add(r1, r2);
    }

    let rafId = 0;
    const clock = new THREE.Clock();
    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      group.rotation.y = t * 0.55;
      group.rotation.x = Math.sin(t * 0.7) * 0.18;
      group.position.y = Math.sin(t * 1.4) * 0.08;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(rafId);
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [variant]);

  return <div ref={mountRef} className="w-full h-44" />;
}

export default function LandingPage({ onEnterSimulator }) {
  const modules = [
    {
      code: '01',
      variant: 'dynamics',
      category: 'DINÁMICA & POLEAS',
      title: 'SISTEMAS EN EQUILIBRIO Y MOVIMIENTO',
      description:
        'Planos inclinados con fricción estática/cinética, mesas horizontales y máquina de Atwood en modelado 3D en tiempo real.',
      sceneId: 'incline_pulley',
    },
    {
      code: '02',
      variant: 'oscillations',
      category: 'OSCILACIONES & CINEMÁTICA',
      title: 'LEY DE HOOKE, PÉNDULO Y PROYECTILES',
      description:
        'Resortes helicoidales dinámicos, péndulos no lineales y trayectorias parabólicas con estela tridimensional.',
      sceneId: 'spring_block',
    },
    {
      code: '03',
      variant: 'ai',
      category: 'LABORATORIO & GRAPH RAG',
      title: 'CONSTRUCTOR LIBRE + ASISTENTE IA',
      description:
        'Ensambla cuerpos, cuerdas y poleas personalizadas o sube una fotografía de un problema para resolverlo sin alucinaciones.',
      sceneId: 'sandbox_game',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Navegación Superior Minimalista Estilo Bugatti */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/85 via-black/35 to-transparent">
        <div className="max-w-[1680px] mx-auto px-6 sm:px-10 h-20 flex items-center justify-between">
          <button
            onClick={() => {
              const el = document.getElementById('landing-modules');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2.5 text-[10.5px] tracking-[0.26em] uppercase text-white/80 hover:text-white transition cursor-pointer"
          >
            <Menu className="w-4 h-4 stroke-[1.5]" />
            <span>MENÚ</span>
          </button>

          {/* Marca Central */}
          <div className="text-center">
            <span className="text-lg sm:text-xl font-bold tracking-[0.26em] text-white uppercase">
              PHYSILAB
            </span>
          </div>

          <button
            onClick={() => onEnterSimulator('incline_pulley')}
            className="inline-flex items-center gap-2 text-[10.5px] tracking-[0.24em] uppercase text-white/80 hover:text-white transition cursor-pointer"
          >
            <span className="hidden sm:inline">SIMULADOR</span>
            <Box className="w-4 h-4 stroke-[1.5]" />
          </button>
        </div>
      </header>

      {/* Hero Full-Screen con "Video" 3D de Física en Tiempo Real */}
      <section className="relative h-screen w-full flex items-center justify-center px-6 overflow-hidden border-b border-white/10">
        <PhysicsHeroVideoCanvas />

        {/* Viñetas oscuras sutiles para máximo contraste de la firma blanca */}
        <div className="absolute inset-0 bg-radial from-black/25 via-black/45 to-black/85 pointer-events-none" />

        {/* Composición Central Estilo Bugatti */}
        <div className="relative z-10 text-center flex flex-col items-center max-w-4xl mx-auto">
          <h1 className="font-script text-6xl sm:text-8xl lg:text-[7.5rem] text-white leading-none tracking-normal drop-shadow-[0_6px_32px_rgba(0,0,0,0.9)] select-none">
            PhysiLab
          </h1>

          <p className="mt-6 text-[10px] sm:text-[11px] tracking-[0.32em] uppercase text-white/80 font-tech">
            UNA HISTORIA DE FUERZA, PROPORCIÓN Y MOVIMIENTO.
          </p>

          <button
            onClick={() => onEnterSimulator('incline_pulley')}
            className="mt-8 rounded-full border border-white/55 px-8 py-3 text-[10px] font-medium tracking-[0.26em] uppercase text-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
          >
            DESCUBRIR EL SIMULADOR
          </button>
        </div>
      </section>

      {/* Sección Editorial de Módulos (Estilo Galería Automotriz) */}
      <section id="landing-modules" className="max-w-[1600px] mx-auto w-full px-6 sm:px-12 py-20 sm:py-28">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12 border-b border-white/15">
          <div>
            <p className="text-[10px] tracking-[0.32em] uppercase text-white/50 font-tech">
              ARQUITECTURA DEL LABORATORIO
            </p>
            <h2 className="text-2xl sm:text-3xl font-light tracking-[0.2em] uppercase text-white mt-3">
              PRECISIÓN EN CADA VECTOR
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-white/60 max-w-md leading-relaxed">
            Cada escena integra cálculo newtoniano exacto a 60 FPS con modelos tridimensionales interactivos y telemetría en vivo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {modules.map((mod) => (
            <div
              key={mod.code}
              className="bg-[#060609] border border-white/15 hover:border-white/40 rounded-2xl p-6 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] font-tech tracking-[0.26em] text-white/45 mb-2">
                  <span>[{mod.code}]</span>
                  <span>{mod.category}</span>
                </div>
                <Mini3DShowcase variant={mod.variant} />
                <h3 className="text-base font-medium tracking-[0.14em] uppercase text-white leading-snug mt-2">
                  {mod.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-white/60 mt-3 leading-relaxed">
                  {mod.description}
                </p>
              </div>

              <button
                onClick={() => onEnterSimulator(mod.sceneId)}
                className="mt-7 inline-flex items-center gap-2 text-[10.5px] tracking-[0.22em] uppercase text-white/80 group-hover:text-white transition cursor-pointer w-fit border-b border-white/25 pb-1 group-hover:border-white"
              >
                ABRIR MÓDULO
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Pie de Página Minimalista */}
      <footer className="mt-auto border-t border-white/15 px-6 sm:px-12 py-6 text-[10px] font-tech tracking-[0.24em] uppercase text-white/45 flex flex-wrap items-center justify-between gap-4">
        <span>PHYSILAB // CLASSICAL MECHANICS &amp; 3D SIMULATION</span>
        <span>POWERED BY THREE.JS &amp; AWS BEDROCK</span>
      </footer>
    </div>
  );
}
