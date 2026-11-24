import React, { useRef, useState } from 'react';
import {
  Send,
  Image as ImageIcon,
  X,
  Loader2,
  Sparkles,
} from 'lucide-react';
import { SAMPLE_PROBLEMS } from '../physics/physicsEngine';
import { generateProblemDiagramDataUrl } from '../physics/problemImageGenerator';

export default function BedrockPhysicsChat({
  messages,
  isLoading,
  onSendMessage,
  onSelectSampleProblem,
}) {
  const [input, setInput] = useState('');
  const [imagePreview, setImagePreview] = useState(null);
  const [imageMime, setImageMime] = useState('image/png');
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const fileInputRef = useRef(null);
  const messagesEndRef = useRef(null);

  const handleFile = (file) => {
    if (!file || !file.type.startsWith('image/')) return;
    setImageMime(file.type);
    const reader = new FileReader();
    reader.onload = (ev) => {
      setImagePreview(ev.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handlePaste = (e) => {
    const items = e.clipboardData?.items;
    if (!items) return;
    for (const item of items) {
      if (item.type.startsWith('image/')) {
        const file = item.getAsFile();
        handleFile(file);
        break;
      }
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDraggingOver(false);
    const file = e.dataTransfer?.files?.[0];
    if (file) handleFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((!input.trim() && !imagePreview) || isLoading) return;
    onSendMessage({
      text:
        input.trim() ||
        'Analiza esta imagen del problema de mecánica, genera el simulador interactivo, los diagramas de cuerpo libre (DCL) y resuélvelo paso a paso.',
      imageBase64: imagePreview,
      imageMimeType: imageMime,
    });
    setInput('');
    setImagePreview(null);
  };

  const handleLoadSampleImage = (sample) => {
    const dataUrl = generateProblemDiagramDataUrl(sample);
    setImagePreview(dataUrl);
    setImageMime('image/png');
    setInput(sample.statement);
    if (onSelectSampleProblem) {
      onSelectSampleProblem(sample);
    }
  };

  return (
    <div
      onPaste={handlePaste}
      onDragOver={(e) => {
        e.preventDefault();
        setIsDraggingOver(true);
      }}
      onDragLeave={() => setIsDraggingOver(false)}
      onDrop={handleDrop}
      className="relative flex flex-col h-full bg-[#050507] border border-white/15 rounded-2xl overflow-hidden"
    >
      {/* Overlay sutil al arrastrar una imagen */}
      {isDraggingOver && (
        <div className="absolute inset-0 z-30 bg-black/85 backdrop-blur-sm border-2 border-dashed border-white/50 rounded-2xl flex items-center justify-center">
          <p className="text-xs tracking-[0.26em] uppercase text-white font-tech">
            SUELTA LA IMAGEN AQUÍ
          </p>
        </div>
      )}

      {/* Cabecera minimalista */}
      <div className="px-5 py-3.5 bg-black border-b border-white/15 flex items-center justify-between">
        <div>
          <h2 className="text-xs font-medium text-white uppercase tracking-[0.22em]">
            ASISTENTE DE FÍSICA
          </h2>
          <p className="text-[10px] text-white/45 tracking-[0.14em] uppercase font-tech mt-0.5">
            ANÁLISIS Y VISIÓN ARTIFICIAL
          </p>
        </div>
        <div className="flex items-center gap-2 text-[9.5px] font-tech tracking-[0.2em] uppercase text-white/60">
          <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
          <span>BEDROCK</span>
        </div>
      </div>

      {/* Área limpia de conversación */}
      <div className="flex-1 min-h-0 overflow-y-auto px-5 py-5 space-y-6">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col animate-fade-up ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
          >
            {msg.role === 'user' ? (
              <div className="max-w-[85%] bg-[#141418] border border-white/15 rounded-2xl rounded-br-sm px-4 py-3 text-xs text-white leading-relaxed">
                {msg.image && (
                  <img
                    src={msg.image}
                    alt="Problema enviado"
                    className="max-h-40 rounded-xl border border-white/15 mb-2.5 object-contain bg-black"
                  />
                )}
                <p className="whitespace-pre-wrap">{msg.content}</p>
              </div>
            ) : (
              <div className="max-w-[94%] border-l border-white/25 pl-4 py-0.5 text-xs text-white/80 leading-relaxed space-y-2.5">
                {msg.image && (
                  <img
                    src={msg.image}
                    alt="Imagen"
                    className="max-h-40 rounded-xl border border-white/15 mb-2 object-contain bg-black"
                  />
                )}
                <FormattedMarkdown text={msg.content} />
                {msg.graphRag && (
                  <div className="mt-2 pt-2 border-t border-white/10 flex flex-wrap items-center gap-2 text-[9.5px] font-tech tracking-[0.1em] uppercase text-white/50">
                    <span className="px-2 py-0.5 rounded-full border border-white/20 text-white/80">
                      GRAPH RAG · {msg.graphRag.nodesUsed} NODOS · {msg.graphRag.factsVerified} HECHOS VERIFICADOS
                    </span>
                    {msg.graphRag.laws?.slice(0, 2).map((law) => (
                      <span key={law} className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10">
                        {law}
                      </span>
                    ))}
                  </div>
                )}
                {msg.graphData && <PhysicsSystemGraph graphData={msg.graphData} />}
              </div>
            )}
          </div>
        ))}

        {isLoading && (
          <div className="flex items-center gap-2.5 text-[11px] font-tech tracking-[0.14em] uppercase text-white/65 pl-4 border-l border-white/25 py-1">
            <Loader2 className="w-3.5 h-3.5 animate-spin text-white" />
            <span>ANALIZANDO PROBLEMA...</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Vista previa de imagen adjunta (solo visible si hay imagen) */}
      {imagePreview && (
        <div className="mx-5 mb-2 p-2 bg-black border border-white/20 rounded-xl flex items-center gap-3">
          <img
            src={imagePreview}
            alt="Vista previa"
            className="h-12 w-20 object-cover rounded-lg border border-white/15"
          />
          <div className="flex-1 min-w-0">
            <p className="text-[10.5px] text-white font-tech tracking-[0.12em] uppercase">
              IMAGEN ADJUNTA
            </p>
            <p className="text-[10px] text-white/50 truncate">
              Lista para analizar y cargar en el simulador
            </p>
          </div>
          <button
            type="button"
            onClick={() => setImagePreview(null)}
            className="p-1.5 text-white/50 hover:text-white transition cursor-pointer"
            title="Quitar imagen"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Barra inferior limpia de entrada */}
      <form
        onSubmit={handleSubmit}
        className="p-4 bg-black border-t border-white/15 space-y-2.5"
      >
        <div className="flex items-end gap-2.5">
          <textarea
            rows={2}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
            placeholder="Escribe un problema o pega una imagen (Ctrl+V)..."
            className="flex-1 bg-[#0a0a0d] border border-white/15 focus:border-white/50 focus:outline-none rounded-2xl px-4 py-2.5 text-xs text-white placeholder-white/35 resize-none transition"
          />
          <button
            type="submit"
            disabled={isLoading || (!input.trim() && !imagePreview)}
            className="h-10 w-10 rounded-full bg-white text-black hover:bg-white/90 disabled:opacity-25 flex items-center justify-center transition cursor-pointer shrink-0"
            title="Enviar"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center justify-between text-[10px] font-tech tracking-[0.16em] uppercase text-white/50">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex items-center gap-1.5 hover:text-white transition cursor-pointer"
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>SUBIR IMAGEN</span>
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleFile(e.target.files?.[0])}
            />

            <button
              type="button"
              onClick={() => {
                const randomProb =
                  SAMPLE_PROBLEMS[Math.floor(Math.random() * SAMPLE_PROBLEMS.length)];
                handleLoadSampleImage(randomProb);
              }}
              className="inline-flex items-center gap-1.5 hover:text-white transition cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>EJEMPLO</span>
            </button>
          </div>
          <span className="hidden sm:inline text-white/35">ENTER PARA ENVIAR</span>
        </div>
      </form>
    </div>
  );
}

function FormattedMarkdown({ text }) {
  if (!text) return null;
  const blocks = text.split(/(```[\s\S]*?```)/g);

  return (
    <div className="space-y-2.5">
      {blocks.map((block, idx) => {
        if (block.startsWith('```') && block.endsWith('```')) {
          const inner = block.replace(/^```\w*\n?/, '').replace(/```$/, '');
          return (
            <pre
              key={idx}
              className="bg-black border border-white/15 text-white/90 font-tech text-[11px] p-3 overflow-x-auto"
            >
              {inner}
            </pre>
          );
        }

        const lines = block.split('\n');
        return (
          <div key={idx} className="space-y-1.5">
            {lines.map((line, lIdx) => {
              const trimmed = line.trim();
              if (!trimmed) return <div key={lIdx} className="h-1" />;
              if (trimmed === '---') {
                return <hr key={lIdx} className="border-white/15 my-2.5" />;
              }
              if (trimmed.startsWith('### ')) {
                return (
                  <h4 key={lIdx} className="text-[11.5px] font-semibold text-white pt-1 tracking-[0.14em] uppercase">
                    {trimmed.replace('### ', '')}
                  </h4>
                );
              }
              if (trimmed.startsWith('#### ')) {
                return (
                  <h5 key={lIdx} className="text-xs font-medium text-white/90 pt-1">
                    {trimmed.replace('#### ', '')}
                  </h5>
                );
              }
              if (trimmed.startsWith('- ')) {
                return (
                  <div key={lIdx} className="flex items-start gap-2 pl-1">
                    <span className="text-white/50">•</span>
                    <span dangerouslySetInnerHTML={{ __html: formatInline(trimmed.slice(2)) }} />
                  </div>
                );
              }
              return (
                <p
                  key={lIdx}
                  dangerouslySetInnerHTML={{ __html: formatInline(line) }}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

function formatInline(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em class="text-white/75">$1</em>')
    .replace(
      /`(.*?)`/g,
      '<code class="font-tech text-[11px] bg-white/10 text-white px-1.5 py-0.5 rounded">$1</code>'
    );
}

function PhysicsSystemGraph({ graphData }) {
  if (!graphData || !graphData.nodes?.length) return null;
  const { title, nodes, edges = [] } = graphData;
  const nodeById = Object.fromEntries(nodes.map((n) => [n.id, n]));

  return (
    <div className="mt-3 bg-black border border-white/15 rounded-xl p-3">
      <div className="text-[10px] font-tech tracking-[0.16em] uppercase text-white/60 mb-2">
        {title || 'GRAFO DE INTERACCIÓN FÍSICA'}
      </div>
      <svg viewBox="0 0 510 165" className="w-full h-auto">
        <defs>
          <marker
            id="graph-arrow"
            markerWidth="6"
            markerHeight="6"
            refX="5"
            refY="3"
            orient="auto"
          >
            <path d="M0,0 L6,3 L0,6 Z" fill="rgba(255,255,255,0.55)" />
          </marker>
        </defs>

        {edges.map((e, idx) => {
          const n1 = nodeById[e.from];
          const n2 = nodeById[e.to];
          if (!n1 || !n2) return null;
          const mx = (n1.x + n2.x) / 2;
          const my = (n1.y + n2.y) / 2 - 6;
          return (
            <g key={idx}>
              <line
                x1={n1.x}
                y1={n1.y}
                x2={n2.x}
                y2={n2.y}
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="1.2"
                markerEnd="url(#graph-arrow)"
              />
              {e.label && (
                <text
                  x={mx}
                  y={my}
                  textAnchor="middle"
                  fill="rgba(255,255,255,0.75)"
                  fontSize="8.5"
                  fontFamily="Chivo Mono, monospace"
                >
                  {e.label}
                </text>
              )}
            </g>
          );
        })}

        {nodes.map((n) => {
          const isMass = n.kind === 'mass';
          return (
            <g key={n.id} transform={`translate(${n.x}, ${n.y})`}>
              <rect
                x="-40"
                y="-13"
                width="80"
                height="26"
                rx="13"
                fill={isMass ? '#ffffff' : '#0b0b0f'}
                stroke={isMass ? '#ffffff' : 'rgba(255,255,255,0.4)'}
                strokeWidth="1.2"
              />
              <text
                x="0"
                y="3.5"
                textAnchor="middle"
                fill={isMass ? '#000000' : '#ffffff'}
                fontSize="9.5"
                fontWeight={isMass ? '700' : '500'}
                fontFamily="Montserrat, sans-serif"
              >
                {n.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
