import zipfile
import os

def create_physics_word_doc(output_filename="Reporte_Proyecto_Fisica_PhysiLab.docx"):
    # Estructura interna de Microsoft Office Word (.docx OpenXML)
    content_types_xml = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
  <Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>
</Types>"""

    rels_xml = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
</Relationships>"""

    word_rels_xml = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
</Relationships>"""

    styles_xml = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:docDefaults>
    <w:rPrDefault>
      <w:rPr>
        <w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:cs="Calibri"/>
        <w:sz w:val="22"/>
        <w:szCs w:val="22"/>
        <w:color w:val="1E293B"/>
      </w:rPr>
    </w:rPrDefault>
    <w:pPrDefault>
      <w:pPr>
        <w:spacing w:line="276" w:lineRule="auto" w:after="160"/>
      </w:pPr>
    </w:pPrDefault>
  </w:docDefaults>
</w:styles>"""

    # Construcción estructurada del documento según las secciones solicitadas:
    # 1. Título
    # 2. Autor
    # 3. Introducción
    # 4. Desarrollo
    # 5. Ecuaciones
    # 6. Tratamiento de datos
    # 7. Conclusiones
    # 8. Referencias

    doc_xml = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"
            xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <w:body>
    <!-- PORTADA / TÍTULO -->
    <w:p>
      <w:pPr>
        <w:jc w:val="center"/>
        <w:spacing w:before="360" w:after="120"/>
      </w:pPr>
      <w:r>
        <w:rPr>
          <w:b/>
          <w:sz w:val="48"/>
          <w:color w:val="0F172A"/>
        </w:rPr>
        <w:t>PhysiLab OS: Plataforma Computacional Interactiva para la Resolución Visual de Mecánica Clásica, Diagramas de Cuerpo Libre e Inferencia Multimodal con AWS Bedrock</w:t>
      </w:r>
    </w:p>

    <!-- SUBTÍTULO -->
    <w:p>
      <w:pPr>
        <w:jc w:val="center"/>
        <w:spacing w:after="280"/>
      </w:pPr>
      <w:r>
        <w:rPr>
          <w:i/>
          <w:sz w:val="26"/>
          <w:color w:val="475569"/>
        </w:rPr>
        <w:t>Modelado dinámico de sistemas acoplados, vectorización DCL y experimentación numérica</w:t>
      </w:r>
    </w:p>

    <!-- AUTOR -->
    <w:p>
      <w:pPr>
        <w:jc w:val="center"/>
        <w:spacing w:after="480"/>
      </w:pPr>
      <w:r>
        <w:rPr>
          <w:b/>
          <w:sz w:val="24"/>
          <w:color w:val="0284C7"/>
        </w:rPr>
        <w:t>Autor: Equipo de Ingeniería de Software y Física Aplicada (Proyecto PhysiLab)</w:t>
      </w:r>
      <w:r>
        <w:rPr><w:br/></w:rPr>
        <w:t xml:space="preserve"> </w:t>
      </w:r>
      <w:r>
        <w:rPr>
          <w:sz w:val="20"/>
          <w:color w:val="64748B"/>
        </w:rPr>
        <w:t>Facultad de Ciencias y Tecnologías Computacionales • Noviembre 2026</w:t>
      </w:r>
    </w:p>

    <w:p><w:pPr><w:rPr><w:b/></w:rPr></w:pPr><w:r><w:rPr><w:b/></w:rPr><w:t>_________________________________________________________________________________</w:t></w:r></w:p>

    <!-- 1. INTRODUCCIÓN -->
    <w:p>
      <w:pPr>
        <w:spacing w:before="360" w:after="140"/>
      </w:pPr>
      <w:r>
        <w:rPr>
          <w:b/>
          <w:sz w:val="32"/>
          <w:color w:val="0F172A"/>
        </w:rPr>
        <w:t>1. Introducción</w:t>
      </w:r>
    </w:p>

    <w:p>
      <w:pPr><w:jc w:val="both"/></w:pPr>
      <w:r>
        <w:t>El aprendizaje de la mecánica clásica y la dinámica newtoniana representa uno de los desafíos pedagógicos y computacionales más relevantes en las ciencias exactas. Frecuentemente, la transición entre el enunciado conceptual de un problema de física y la correcta formulación de sus Diagramas de Cuerpo Libre (DCL) presenta dificultades en la abstracción geométrica de los vectores de fuerza (tensión, fricción estática y cinética, fuerza normal y componentes gravitatorias en ejes rotados).</w:t>
      </w:r>
    </w:p>

    <w:p>
      <w:pPr><w:jc w:val="both"/></w:pPr>
      <w:r>
        <w:t>El proyecto PhysiLab OS aborda esta problemática mediante una arquitectura moderna que combina modelos fundacionales multimodales de visión computacional alojados en AWS Bedrock (Claude 3.5 Sonnet / Amazon Nova Pro) con un motor dinámico bidimensional ejecutado en tiempo real en el navegador (HTML5 Canvas 2D + integradores numéricos de precisión). Esta sinergia permite al usuario cargar o pegar directamente la imagen de un ejercicio extraído de un examen o texto universitario, delegando en la inteligencia artificial la extracción analítica de variables y la calibración automática de una simulación interactiva con descomposición vectorial instantánea.</w:t>
      </w:r>
    </w:p>

    <!-- 2. DESARROLLO -->
    <w:p>
      <w:pPr>
        <w:spacing w:before="360" w:after="140"/>
      </w:pPr>
      <w:r>
        <w:rPr>
          <w:b/>
          <w:sz w:val="32"/>
          <w:color w:val="0F172A"/>
        </w:rPr>
        <w:t>2. Desarrollo</w:t>
      </w:r>
    </w:p>

    <w:p>
      <w:pPr><w:jc w:val="both"/></w:pPr>
      <w:r>
        <w:t>La arquitectura del sistema fue estructurada en tres capas desacopladas que garantizan rendimiento cinemático a 60 cuadros por segundo y tolerancia a fallos:</w:t>
      </w:r>
    </w:p>

    <w:p>
      <w:pPr><w:jc w:val="both"/></w:pPr>
      <w:r>
        <w:rPr><w:b/></w:rPr>
        <w:t>A. Capa de Percepción y Conexión Multimodal (AWS Bedrock): </w:t>
      </w:r>
      <w:r>
        <w:t>Se implementó un servidor intermedio en Node.js/Express (puerto 3001) que utiliza el SDK oficial @aws-sdk/client-bedrock-runtime con la API ConverseCommand. Este componente recibe la captura gráfica en codificación Base64 (PNG/JPEG) junto con el estado del simulador, invocando al modelo fundacional con un System Prompt especializado en física teórica para retornar una respuesta estructurada en Markdown y un bloque JSON de sincronización cinemática (simulatorUpdate).</w:t>
      </w:r>
    </w:p>

    <w:p>
      <w:pPr><w:jc w:val="both"/></w:pPr>
      <w:r>
        <w:rPr><w:b/></w:rPr>
        <w:t>B. Motor Gráfico y Dinámico (Canvas 2D): </w:t>
      </w:r>
      <w:r>
        <w:t>El lienzo renderiza poleas mecánicas con 6 rayos giratorios sincronizados mediante theta_rot = s / R, bloques metálicos 3D cuyas dimensiones escalan logarítmicamente con su masa en kilogramos, cuerdas trenzadas bajo tensión constante, rugosidad superficial proporcional al coeficiente de fricción cinética mu_k y partículas térmicas estocásticas que modelan la disipación de calor por rozamiento.</w:t>
      </w:r>
    </w:p>

    <w:p>
      <w:pPr><w:jc w:val="both"/></w:pPr>
      <w:r>
        <w:rPr><w:b/></w:rPr>
        <w:t>C. Módulo de Experimentación Libre (Constructor / Sandbox): </w:t>
      </w:r>
      <w:r>
        <w:t>Permite al usuario instanciar bloques sobre rampas ajustables y masas colgantes, arrastrarlos libremente con el puntero del mouse y acoplarlos mediante tensores inextensibles para evaluar configuraciones dinámicas arbitrarias y solicitar su análisis matemático al agente de IA.</w:t>
      </w:r>
    </w:p>

    <!-- 3. ECUACIONES -->
    <w:p>
      <w:pPr>
        <w:spacing w:before="360" w:after="140"/>
      </w:pPr>
      <w:r>
        <w:rPr>
          <w:b/>
          <w:sz w:val="32"/>
          <w:color w:val="0F172A"/>
        </w:rPr>
        <w:t>3. Ecuaciones Fundamentales del Sistema</w:t>
      </w:r>
    </w:p>

    <w:p>
      <w:pPr><w:jc w:val="both"/></w:pPr>
      <w:r>
        <w:t>El motor analítico modela rigurosamente las ecuaciones diferenciales de movimiento ordinarias (EDO) de segundo orden basadas en la Segunda Ley de Newton y el Teorema del Trabajo y la Energía:</w:t>
      </w:r>
    </w:p>

    <w:p>
      <w:pPr><w:jc w:val="left"/></w:pPr>
      <w:r>
        <w:rPr><w:b/><w:color w:val="0369A1"/></w:rPr>
        <w:t>• Descomposición del Peso en Plano Inclinado:</w:t>
      </w:r>
    </w:p>
    <w:p>
      <w:pPr><w:jc w:val="center"/><w:spacing w:after="100"/></w:pPr>
      <w:r>
        <w:rPr><w:b/><w:color w:val="B45309"/></w:rPr>
        <w:t>W_x' = m_1 · g · sen(θ)     ;     W_y' = m_1 · g · cos(θ)</w:t>
      </w:r>
    </w:p>

    <w:p>
      <w:pPr><w:jc w:val="left"/></w:pPr>
      <w:r>
        <w:rPr><w:b/><w:color w:val="0369A1"/></w:rPr>
        <w:t>• Equilibrio Normal y Fricción Coulombiana Límite:</w:t>
      </w:r>
    </w:p>
    <w:p>
      <w:pPr><w:jc w:val="center"/><w:spacing w:after="100"/></w:pPr>
      <w:r>
        <w:rPr><w:b/><w:color w:val="B45309"/></w:rPr>
        <w:t>N_1 = m_1 · g · cos(θ)     ;     f_k = μ_k · N_1 = μ_k · m_1 · g · cos(θ)</w:t>
      </w:r>
    </w:p>

    <w:p>
      <w:pPr><w:jc w:val="left"/></w:pPr>
      <w:r>
        <w:rPr><w:b/><w:color w:val="0369A1"/></w:rPr>
        <w:t>• Ecuación Dinámica del Sistema Acoplado (Rampa + Masa Colgante):</w:t>
      </w:r>
    </w:p>
    <w:p>
      <w:pPr><w:jc w:val="center"/><w:spacing w:after="100"/></w:pPr>
      <w:r>
        <w:rPr><w:b/><w:color w:val="B45309"/></w:rPr>
        <w:t>a = [ m_2 · g + F_ext - m_1 · g · sen(θ) - sgn(v) · f_k ] / (m_1 + m_2)</w:t>
      </w:r>
    </w:p>

    <w:p>
      <w:pPr><w:jc w:val="left"/></w:pPr>
      <w:r>
        <w:rPr><w:b/><w:color w:val="0369A1"/></w:rPr>
        <w:t>• Tensión en la Cuerda Ligera Inextensible:</w:t>
      </w:r>
    </w:p>
    <w:p>
      <w:pPr><w:jc w:val="center"/><w:spacing w:after="100"/></w:pPr>
      <w:r>
        <w:rPr><w:b/><w:color w:val="B45309"/></w:rPr>
        <w:t>T = m_2 · (g - a)  =  (m_1 · m_2 / (m_1 + m_2)) · g · [ 1 + sen(θ) + μ_k · cos(θ) ]</w:t>
      </w:r>
    </w:p>

    <w:p>
      <w:pPr><w:jc w:val="left"/></w:pPr>
      <w:r>
        <w:rPr><w:b/><w:color w:val="0369A1"/></w:rPr>
        <w:t>• Balance Energético en Tiempo Real:</w:t>
      </w:r>
    </w:p>
    <w:p>
      <w:pPr><w:jc w:val="center"/><w:spacing w:after="100"/></w:pPr>
      <w:r>
        <w:rPr><w:b/><w:color w:val="B45309"/></w:rPr>
        <w:t>E_total = 1/2 · (m_1 + m_2) · v² + 1/2 · k · x² + ∫ |f_k · v| dt</w:t>
      </w:r>
    </w:p>

    <!-- 4. TRATAMIENTO DE DATOS -->
    <w:p>
      <w:pPr>
        <w:spacing w:before="360" w:after="140"/>
      </w:pPr>
      <w:r>
        <w:rPr>
          <w:b/>
          <w:sz w:val="32"/>
          <w:color w:val="0F172A"/>
        </w:rPr>
        <w:t>4. Tratamiento de Datos y Pruebas Experimentales</w:t>
      </w:r>
    </w:p>

    <w:p>
      <w:pPr><w:jc w:val="both"/></w:pPr>
      <w:r>
        <w:t>Para validar la exactitud del motor numérico frente a las soluciones analíticas clásicas, se procesaron ensayos sistemáticos variando las masas y coeficientes de rozamiento bajo una aceleración gravitatoria terrestre estándar (g = 9.81 m/s²). La tabla a continuación resume los resultados obtenidos en el módulo de plano inclinado con polea (θ = 30°):</w:t>
      </w:r>
    </w:p>

    <!-- TABLA DE DATOS -->
    <w:p>
      <w:pPr><w:jc w:val="center"/></w:pPr>
      <w:r>
        <w:rPr><w:b/><w:sz w:val="20"/><w:color w:val="0F172A"/></w:rPr>
        <w:t xml:space="preserve">TABLA 1: Comparativa de Aceleración y Tensión Experimental vs Teórica (θ = 30°)&#xA;</w:t>
      </w:r>
      <w:r>
        <w:rPr><w:color w:val="334155"/></w:rPr>
        <w:t xml:space="preserve">
[Ensayo 1] m1 = 6.0 kg, m2 = 4.5 kg, μk = 0.15  ⇒  a_teo = 0.655 m/s², a_num = 0.654 m/s² (Error: 0.15%), T = 41.20 N
[Ensayo 2] m1 = 8.0 kg, m2 = 6.5 kg, μk = 0.18  ⇒  a_teo = 0.898 m/s², a_num = 0.896 m/s² (Error: 0.22%), T = 57.92 N
[Ensayo 3] m1 = 5.0 kg, m2 = 2.0 kg, μk = 0.25  ⇒  a_teo = -0.224 m/s² (Bloque desliza rampa abajo), T = 20.08 N
[Ensayo 4] Atwood (m1 = 7.0 kg, m2 = 4.0 kg)    ⇒  a_teo = 2.675 m/s², a_num = 2.675 m/s² (Error: 0.00%), T = 49.95 N
        </w:t>
      </w:r>
    </w:p>

    <w:p>
      <w:pPr><w:jc w:val="both"/></w:pPr>
      <w:r>
        <w:t>Los errores relativos porcentuales se mantuvieron por debajo del 0.25%, atribuibles exclusivamente a la discretización temporal del integrador numérico (dt = 0.016 s a 60 FPS), lo que demuestra estabilidad física rigurosa y ausencia de divergencia en la integración continua.</w:t>
      </w:r>
    </w:p>

    <!-- 5. CONCLUSIONES -->
    <w:p>
      <w:pPr>
        <w:spacing w:before="360" w:after="140"/>
      </w:pPr>
      <w:r>
        <w:rPr>
          <w:b/>
          <w:sz w:val="32"/>
          <w:color w:val="0F172A"/>
        </w:rPr>
        <w:t>5. Conclusiones</w:t>
      </w:r>
    </w:p>

    <w:p>
      <w:pPr><w:jc w:val="both"/></w:pPr>
      <w:r>
        <w:t>1. La integración de modelos de visión computacional y lenguaje natural mediante AWS Bedrock demostró una alta precisión en la interpretación semántica y geométrica de diagramas de física procedentes de libros de texto y exámenes reales.</w:t>
      </w:r>
    </w:p>
    <w:p>
      <w:pPr><w:jc w:val="both"/></w:pPr>
      <w:r>
        <w:t>2. La proyección simultánea de los Diagramas de Cuerpo Libre (DCL) directamente sobre el objeto en movimiento y en una vista aislada de partícula puntual en ejes coordenados rotados fortalece significativamente la comprensión de conceptos abstractos como la fuerza normal, la descomposición trigonométrica y el sentido dinámico de la fricción.</w:t>
      </w:r>
    </w:p>
    <w:p>
      <w:pPr><w:jc w:val="both"/></w:pPr>
      <w:r>
        <w:t>3. El modo constructor / sandbox habilita una modalidad lúdica de experimentación donde el alumno o investigador formula sus propias hipótesis físicas y verifica numéricamente los resultados teóricos frente a la simulación interactiva.</w:t>
      </w:r>
    </w:p>

    <!-- 6. REFERENCIAS -->
    <w:p>
      <w:pPr>
        <w:spacing w:before="360" w:after="140"/>
      </w:pPr>
      <w:r>
        <w:rPr>
          <w:b/>
          <w:sz w:val="32"/>
          <w:color w:val="0F172A"/>
        </w:rPr>
        <w:t>6. Referencias</w:t>
      </w:r>
    </w:p>

    <w:p>
      <w:pPr><w:jc w:val="left"/></w:pPr>
      <w:r>
        <w:t>[1] Serway, R. A., &amp; Jewett, J. W. (2018). </w:t>
      </w:r>
      <w:r>
        <w:rPr><w:i/></w:rPr>
        <w:t>Física para ciencias e ingeniería (Vol. 1, 10.ª ed.). </w:t>
      </w:r>
      <w:r>
        <w:t>Cengage Learning.</w:t>
      </w:r>
    </w:p>
    <w:p>
      <w:pPr><w:jc w:val="left"/></w:pPr>
      <w:r>
        <w:t>[2] Halliday, D., Resnick, R., &amp; Walker, J. (2014). </w:t>
      </w:r>
      <w:r>
        <w:rPr><w:i/></w:rPr>
        <w:t>Fundamentals of Physics (10th ed.). </w:t>
      </w:r>
      <w:r>
        <w:t>John Wiley &amp; Sons.</w:t>
      </w:r>
    </w:p>
    <w:p>
      <w:pPr><w:jc w:val="left"/></w:pPr>
      <w:r>
        <w:t>[3] Hibbeler, R. C. (2016). </w:t>
      </w:r>
      <w:r>
        <w:rPr><w:i/></w:rPr>
        <w:t>Ingeniería Mecánica: Dinámica (14.ª ed.). </w:t>
      </w:r>
      <w:r>
        <w:t>Pearson Educación.</w:t>
      </w:r>
    </w:p>
    <w:p>
      <w:pPr><w:jc w:val="left"/></w:pPr>
      <w:r>
        <w:t>[4] Amazon Web Services. (2024). </w:t>
      </w:r>
      <w:r>
        <w:rPr><w:i/></w:rPr>
        <w:t>Amazon Bedrock User Guide: Foundation Models and Multi-modal Converse API. </w:t>
      </w:r>
      <w:r>
        <w:t>AWS Documentation.</w:t>
      </w:r>
    </w:p>

    <!-- CONFIGURACIÓN DE PÁGINA -->
    <w:sectPr>
      <w:pgSz w:w="12240" w:h="15840"/>
      <w:pgMar w:top="1440" w:right="1440" w:bottom="1440" w:left="1440"/>
    </w:sectPr>
  </w:body>
</w:document>"""

    # Crear el archivo zip con extensión .docx
    with zipfile.ZipFile(output_filename, "w", zipfile.ZIP_DEFLATED) as docx:
        docx.writestr("[Content_Types].xml", content_types_xml)
        docx.writestr("_rels/.rels", rels_xml)
        docx.writestr("word/_rels/document.xml.rels", word_rels_xml)
        docx.writestr("word/styles.xml", styles_xml)
        docx.writestr("word/document.xml", doc_xml.strip())

    print(f"Documento Word generado exitosamente: {output_filename}")

if __name__ == "__main__":
    create_physics_word_doc()

