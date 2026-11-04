# PhysiLab OS — Workbench de Mecánica Clásica & Visión IA con AWS Bedrock

> **Laboratorio interactivo y simulador físico 2D para la resolución automatizada de problemas de mecánica mediante visión computacional multimodal (AWS Bedrock), proyección en tiempo real de Diagramas de Cuerpo Libre (DCL) y constructor sandbox de sistemas dinámicos acoplados.**

---

## 📋 Tabla de Contenido
1. [Descripción General](#-descripción-general)
2. [Características Principales](#-características-principales)
3. [Arquitectura del Sistema](#-arquitectura-del-sistema)
4. [Módulos Físicos Implementados](#-módulos-físicos-implementados)
5. [Instalación y Puesta en Marcha](#-instalación-y-puesta-en-marcha)
6. [Configuración de AWS Bedrock](#-configuración-de-aws-bedrock)
7. [Estructura del Proyecto](#-estructura-del-proyecto)
8. [Tratamiento de Datos y Algoritmos Físicos](#-tratamiento-de-datos-y-algoritmos-físicos)
9. [Licencia](#-licencia)

---

## 🔬 Descripción General

**PhysiLab OS** es una plataforma educativa y de ingeniería diseñada para cerrar la brecha entre los enunciados teóricos de física mecánica y su comprensión visual intuitiva. Permite a estudiantes, docentes e investigadores:

- **Subir o pegar capturas (`Ctrl + V`) de problemas de libros de texto o exámenes.**
- **Procesar automáticamente la imagen** utilizando modelos fundacionales de visión e inferencia a través de **AWS Bedrock Runtime** (Claude 3.5 Sonnet / Amazon Nova Pro).
- **Sintetizar y calibrar un simulador dinámico en tiempo real**, reproduciendo el movimiento exacto del sistema bajo las leyes de Newton.
- **Visualizar de forma superpuesta y aislada los Diagramas de Cuerpo Libre (DCL)** con cálculo vectorial de fuerzas (peso, componentes trigonométricas, fuerza normal, tensión en cuerdas y fricción estática/cinética).
- **Experimentar en un modo Sandbox/Juego** agregando bloques, masas colgantes, rampas y tensores con el mouse para luego pedirle a la IA que resuelva analíticamente el ensamble resultante.

---

## ⚡ Características Principales

- **Visión Computacional & LLM (AWS Bedrock):** Extracción automatizada de parámetros físicos ($m_1, m_2, \theta, \mu_k, F_{ext}, k, x_0, v_0, h_0$) a partir de imágenes o texto.
- **Simulación Dinámica de Alta Precisión:** Integración numérica basada en *Semi-Implicit Euler* y *Verlet* a 60 FPS con rebote inelástico, rotación angular física de poleas y emisión de partículas térmicas por rozamiento.
- **Inspector Aislado DCL:** Proyección cartesiana rotada en el centro de masa ($X'-Y'$) de cada partícula puntual con desglose tabular de magnitudes en Newtons.
- **Balance Energético Instantáneo:** Monitor continuo de Energía Cinética ($K$), Potencial Elástica ($U_e$) y Energía Térmica disipada por fricción ($E_f$).
- **Selector de Micro-Gravedad:** Conmutación instantánea entre campos gravitatorios planetarios (Tierra $9.81\text{ m/s}^2$, Luna $1.62\text{ m/s}^2$, Marte $3.72\text{ m/s}^2$ y Júpiter $24.79\text{ m/s}^2$).
- **Constructor Sandbox Interactivo:** Diseña configuraciones dinámicas libres con bloques en pendiente y masas suspendidas conectadas por poleas.

---

## 🏗️ Arquitectura del Sistema

```
┌─────────────────────────────────────────────────────────────┐
│                       INTERFAZ DE USUARIO                   │
│   (React 18 + Vite + Tailwind CSS + HTML5 Canvas 2D)       │
├──────────────────────────────┬──────────────────────────────┤
│      CANVAS SIMULATOR        │       TERMINAL DE IA         │
│  - Renderizado cinemático    │  - Ingestión de capturas     │
│  - Proyección de tensores    │  - Prompt engineering físico │
│  - Control de parámetros     │  - Formateo LaTeX/Markdown   │
├──────────────────────────────┴──────────────────────────────┤
│                     MOTOR FÍSICO CLIENTE                    │
│   (Leyes de Newton, Integradores numéricos, DCL vector)     │
└──────────────────────────────┬──────────────────────────────┘
                               │ HTTP / JSON Bridge
┌──────────────────────────────▼──────────────────────────────┐
│                  BACKEND NODE.JS (EXPRESS)                  │
│                Servidor API Local (Puerto 3001)             │
├─────────────────────────────────────────────────────────────┤
│                     CONECTOR AWS BEDROCK                    │
│   - @aws-sdk/client-bedrock-runtime (ConverseCommand)       │
│   - Soporte para API Gateway / Lambda Endpoint HTTP         │
│   - Motor heurístico y analítico local de fallback          │
└─────────────────────────────────────────────────────────────┘
```

---

## 📦 Módulos Físicos Implementados

1. **[01] Plano Inclinado con Polea y Dos Bloques (`incline_pulley`):** Masa $m_1$ sobre rampa inclinada con rozamiento $\mu$, unida por cuerda inextensible a masa colgante $m_2$. Descomposición trigonométrica $mg\sin\theta$ y $mg\cos\theta$.
2. **[02] Mesa Horizontal con Polea (`horizontal_table`):** Deslizamiento sobre superficie horizontal con fuerza externa orientable $F_{ext}$ y masa colgante.
3. **[03] Máquina de Atwood (`atwood`):** Dos masas verticales conectadas sobre polea ideal libre de fricción.
4. **[04] Oscilador Masa-Resorte (`spring_block`):** Movimiento armónico con amortiguamiento coulombiano (Ley de Hooke: $F = -kx$).
5. **[05] Tiro Parabólico 2D (`projectile`):** Lanzamiento balístico con altura inicial $h_0$, cálculo de alcance horizontal $R$, altura máxima $y_{máx}$ y tiempo de vuelo $t_v$.
6. **[06] Péndulo Simple no Lineal (`pendulum`):** Dinámica circular con aceleración centrípeta y descomposición radial/tangencial del peso.
7. **[07] Modo Juego / Constructor Libre (`sandbox_game`):** Entorno abierto de ensamble interactivo con resolución analítica por IA.

---

## 🚀 Instalación y Puesta en Marcha

### Prerrequisitos
- **Node.js** (v18.0.0 o superior)
- **npm** (v9.0.0 o superior)

### 1. Clonar o acceder a la carpeta del proyecto
```bash
cd Fisica_Project
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Iniciar el entorno de desarrollo
El proyecto ejecuta concurrentemente el frontend (Vite en puerto `5173`) y el backend puente de AWS Bedrock (Express en puerto `3001`):
```bash
npm run dev
```

Abre tu navegador en:
```
http://localhost:5173
```

---

## 🔑 Configuración de AWS Bedrock

El sistema incluye un motor analítico inteligente local que funciona de inmediato sin necesidad de credenciales. Para habilitar la inferencia con los modelos fundacionales de **AWS Bedrock**, crea un archivo `.env` en la raíz del proyecto (puedes basarte en `.env.example`):

```env
# Opción A: Conexión directa mediante SDK de AWS
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=tu_access_key_aqui
AWS_SECRET_ACCESS_KEY=tu_secret_access_key_aqui
AWS_SESSION_TOKEN=  # Opcional, solo si usas AWS SSO / STS
BEDROCK_MODEL_ID=us.anthropic.claude-3-5-sonnet-20241022-v2:0

# Opción B: Conexión mediante Endpoint HTTP personalizado (API Gateway / Lambda)
AWS_CUSTOM_ENDPOINT_URL=
AWS_CUSTOM_API_KEY=

PORT=3001
```

---

## 📁 Estructura del Proyecto

```
Fisica_Project/
├── .env.example                     # Plantilla de variables de entorno para AWS
├── index.html                       # Documento principal HTML5
├── package.json                     # Scripts y dependencias
├── vite.config.js                   # Configuración del empaquetador Vite + Proxy API
├── server/
│   └── index.js                     # Servidor Express y cliente BedrockRuntimeClient
├── src/
│   ├── main.jsx                     # Punto de entrada de React
│   ├── index.css                    # Estilos Tailwind CSS + directivas de ingeniería
│   ├── App.jsx                      # Layout principal y orquestación del estado
│   ├── components/
│   │   ├── PhysicsCanvasSimulator.jsx    # Motor gráfico de renderizado Canvas 2D
│   │   ├── FreeBodyDiagramInspector.jsx  # Inspector de vectores DCL y ecuaciones
│   │   └── BedrockPhysicsChat.jsx        # Terminal de interacción multimodal e IA
│   └── physics/
│       ├── physicsEngine.js              # Modelos matemáticos de física clásica
│       └── problemImageGenerator.js      # Generador de capturas sintéticas de examen
└── README.md                        # Documentación técnica del proyecto
```

---

## 📐 Tratamiento de Datos y Algoritmos Físicos

### Segunda Ley de Newton para Sistemas Acoplados
Para el plano inclinado con rozamiento conectado a una masa colgante:

$$\sum F_{x'} = m_2 g + F_{ext} - m_1 g \sin\theta \pm f_k = (m_1 + m_2) a$$

Donde la fuerza normal y la fricción cinética límite están dadas por:

$$N_1 = m_1 g \cos\theta$$

$$f_k = \mu_k N_1 = \mu_k m_1 g \cos\theta$$

Y la tensión interna $T$ del tensor inextensible se determina sustituyendo la aceleración $a$ en la ecuación dinámica de la masa suspendida:

$$T = m_2 (g - a)$$

---


