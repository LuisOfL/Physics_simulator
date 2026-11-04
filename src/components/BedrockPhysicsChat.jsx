import React, { useRef, useState } from 'react';
import {
  Upload,
  Send,
  Image as ImageIcon,
  Sparkles,
  Terminal,
  Cpu,
  User,
  X,
  Wand2,
  Loader2,
  Scan,
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
      className="flex flex-col h-full bg-[#0b0d13] border border-[#212738] rounded-xl overflow-hidden shadow-2xl"
    >
      {/* Cabecera Técnica de la Terminal de Inferencia */}
      <div className="px-4 py-2.5 bg-[#0e111a] border-b border-[#1f2537] flex items-center justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded bg-[#161a26] border border-[#273046] flex items-center justify-center text-amber-400">
            <Terminal className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-heading text-xs font-bold text-zinc-100 uppercase tracking-wide">
                NEURAL COGNITION // AWS BEDROCK
              </span>
              <span className="font-tech text-[9px] uppercase px-1.5 py-0.2 rounded bg-emerald-400/10 text-emerald-400 border border-emerald-400/30">
                ACTIVE
              </span>
            </div>
            <p className="font-tech text-[10px] text-zinc-500">
              RECEPTOR MULTIMODAL & RESOLUTOR DCL DE MECÁNICA
            </p>
          </div>
        </div>
      </div>

      {/* Bahía de Ingestión de Capturas / Imágenes Ópticas */}
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setIsDraggingOver(true);
        }}
        onDragLeave={() => setIsDraggingOver(false)}
        onDrop={handleDrop}
        className={`mx-3 mt-3 p-2.5 rounded-lg border border-dashed transition ${
          isDraggingOver
            ? 'border-amber-400 bg-amber-400/10'
            : 'border-[#262c3e] bg-[#080a0f] hover:border-[#3b4460]'
        }`}
      >
        <div className="flex flex-wrap items-center justify-between gap-2 font-tech">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-semibold bg-[#171b26] hover:bg-[#1f2537] text-zinc-200 border border-[#2b3348] transition cursor-pointer"
            >
              <Upload className="w-3 h-3 text-amber-400" />
              INGESTAR IMAGEN
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleFile(e.target.files?.[0])}
            />
            <span className="text-[10px] text-zinc-500 hidden sm:inline">
              // ARRASTRAR O PEGAR [CTRL+V]
            </span>
          </div>

          <button
            type="button"
            onClick={() => {
              const randomProb =
                SAMPLE_PROBLEMS[Math.floor(Math.random() * SAMPLE_PROBLEMS.length)];
              handleLoadSampleImage(randomProb);
            }}
            className="flex items-center gap-1 px-2 py-1 rounded text-[10.5px] font-medium bg-[#141926] hover:bg-[#1a2133] text-sky-300 border border-[#242f4c] transition cursor-pointer"
          >
            <Scan className="w-3 h-3 text-sky-400" />
            CARGAR MUESTRA DEMO
          </button>
        </div>

        {/* Vista previa de imagen acoplada */}
        {imagePreview && (
          <div className="mt-2 relative rounded border border-amber-400/40 bg-[#0e111a] p-1.5 flex items-center gap-3">
            <img
              src={imagePreview}
              alt="Problema acoplado"
              className="h-16 w-28 object-cover rounded border border-[#242b3d]"
            />
            <div className="flex-1 min-w-0 font-tech">
              <div className="text-[11px] font-bold text-amber-300 flex items-center gap-1">
                <ImageIcon className="w-3 h-3" /> CAPTURA LISTA PARA DECODIFICACIÓN
              </div>
              <p className="text-[10px] text-zinc-400 truncate mt-0.5">
                Presiona &quot;EJECUTAR RESOLUCIÓN&quot; para calibrar la escena física.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setImagePreview(null)}
              className="p-1 rounded bg-[#171b27] hover:bg-rose-900/40 text-zinc-400 hover:text-rose-300 transition cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>

      {/* Visor de Mensajes y Registros de Inferencia */}
      <div className="flex-1 overflow-y-auto p-3.5 space-y-3.5 min-h-[380px]">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex gap-2.5 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {msg.role !== 'user' && (
              <div className="w-6 h-6 rounded bg-[#161a26] border border-[#262f44] text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                <Cpu className="w-3 h-3" />
              </div>
            )}

            <div
              className={`max-w-[90%] rounded-lg px-3.5 py-2.5 text-xs leading-relaxed border ${
                msg.role === 'user'
                  ? 'bg-[#151c2c] border-[#293655] text-zinc-100'
                  : 'bg-[#0e111a] border-[#1d2333] text-zinc-200'
              }`}
            >
              {msg.image && (
                <img
                  src={msg.image}
                  alt="Problema enviado"
                  className="max-h-40 rounded border border-[#2b3348] mb-2 object-contain bg-black"
                />
              )}

              {msg.provider && (
                <div className="mb-2 flex items-center gap-1.5 font-tech">
                  <span className="text-[9.5px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-[#161a25] text-amber-300 border border-[#2b344a]">
                    // {msg.provider}
                  </span>
                </div>
              )}

              <FormattedMarkdown text={msg.content} />
            </div>

            {msg.role === 'user' && (
              <div className="w-6 h-6 rounded bg-[#192236] border border-[#29395b] text-sky-300 flex items-center justify-center shrink-0 mt-0.5 font-tech text-[10px] font-bold">
                <User className="w-3 h-3" />
              </div>
            )}
          </div>
        ))}

        {isLoading && (
          <div className="flex items-center gap-2.5 font-tech text-[11px] text-amber-300 bg-[#0e1119] border border-amber-400/30 rounded-lg px-3 py-2">
            <Loader2 className="w-3.5 h-3.5 animate-spin text-amber-400" />
            <span>
              EXTRAYENDO TENSORES DINÁMICOS & CALIBRANDO ESCENA INTERACTIVA...
            </span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Terminal de Comando / Entrada de Enunciado */}
      <form
        onSubmit={handleSubmit}
        className="p-3 bg-[#0a0c12] border-t border-[#1c2232] space-y-2 font-tech"
      >
        <div className="flex gap-2">
          <div className="relative flex-1">
            <span className="absolute left-3 top-2.5 text-amber-400/80 font-bold text-xs select-none">
              &gt;
            </span>
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
              placeholder="Ingresa parámetros o enunciado (ej: 'Masa de 9kg conectada por polea a rampa de 40° con fricción 0.15')..."
              className="w-full bg-[#08090e] border border-[#20273a] focus:border-amber-400/70 focus:outline-none rounded-lg pl-7 pr-3 py-2 text-[11.5px] text-zinc-100 placeholder-zinc-600 resize-none font-tech transition"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading || (!input.trim() && !imagePreview)}
            className="px-3.5 rounded-lg font-bold text-[11px] bg-[#1a1f2e] hover:bg-[#252c42] disabled:opacity-40 text-amber-300 border border-amber-400/40 flex flex-col items-center justify-center gap-1 transition cursor-pointer shrink-0 uppercase tracking-wider"
          >
            {imagePreview ? <Sparkles className="w-3.5 h-3.5 text-amber-400" /> : <Send className="w-3.5 h-3.5 text-amber-400" />}
            <span>{imagePreview ? 'RESOLVER' : 'ENVIAR'}</span>
          </button>
        </div>
      </form>
    </div>
  );
}

function FormattedMarkdown({ text }) {
  if (!text) return null;
  const blocks = text.split(/(```[\s\S]*?```)/g);

  return (
    <div className="space-y-2">
      {blocks.map((block, idx) => {
        if (block.startsWith('```') && block.endsWith('```')) {
          const inner = block.replace(/^```\w*\n?/, '').replace(/```$/, '');
          return (
            <pre
              key={idx}
              className="bg-[#07090e] border border-[#202638] text-amber-300 font-tech text-[10.5px] p-2.5 rounded overflow-x-auto"
            >
              {inner}
            </pre>
          );
        }

        const lines = block.split('\n');
        return (
          <div key={idx} className="space-y-1">
            {lines.map((line, lIdx) => {
              const trimmed = line.trim();
              if (!trimmed) return <div key={lIdx} className="h-1" />;
              if (trimmed === '---') {
                return <hr key={lIdx} className="border-[#1e2434] my-2" />;
              }
              if (trimmed.startsWith('### ')) {
                return (
                  <h4 key={lIdx} className="font-tech text-xs font-bold text-amber-300 pt-1 tracking-wider uppercase">
                    {trimmed.replace('### ', '')}
                  </h4>
                );
              }
              if (trimmed.startsWith('#### ')) {
                return (
                  <h5 key={lIdx} className="font-tech text-xs font-semibold text-sky-300 pt-1">
                    {trimmed.replace('#### ', '')}
                  </h5>
                );
              }
              if (trimmed.startsWith('- ')) {
                return (
                  <div key={lIdx} className="flex items-start gap-1.5 pl-1">
                    <span className="text-amber-400 font-bold">•</span>
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
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-zinc-100 font-bold">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em class="text-zinc-300">$1</em>')
    .replace(
      /`(.*?)`/g,
      '<code class="font-tech text-[11px] bg-[#141824] text-emerald-300 px-1.5 py-0.5 rounded border border-[#242b3e]">$1</code>'
    );
}
