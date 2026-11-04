import React, { useRef, useState } from 'react';
import {
  Upload,
  Send,
  Image as ImageIcon,
  Sparkles,
  Bot,
  User,
  X,
  Wand2,
  Loader2,
  Cpu,
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

  // Generar una imagen PNG de un problema de examen real para probar el flujo visual de inmediato
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
      className="flex flex-col h-full bg-slate-900/95 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl"
    >
      {/* Cabecera del Chatbot y Subida de Imagen */}
      <div className="px-4 py-3 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20">
            <Bot className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-slate-100 flex items-center gap-1.5">
              Tutor IA de Física & Visión (AWS Bedrock)
            </h2>
            <p className="text-[11px] text-slate-400">
              Sube o pega (Ctrl+V) la foto de un problema o resuelve lo que armaste en el simulador
            </p>
          </div>
        </div>
      </div>

      {/* Zona rápida de Subida de Imagen + Problemas de Ejemplo */}
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setIsDraggingOver(true);
        }}
        onDragLeave={() => setIsDraggingOver(false)}
        onDrop={handleDrop}
        className={`mx-3 mt-3 p-3 rounded-xl border-2 border-dashed transition ${
          isDraggingOver
            ? 'border-cyan-400 bg-cyan-500/10'
            : 'border-slate-800 bg-slate-950/60 hover:border-slate-700'
        }`}
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-200 border border-cyan-500/40 transition cursor-pointer"
            >
              <Upload className="w-3.5 h-3.5" />
              Subir Imagen de Problema
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleFile(e.target.files?.[0])}
            />
            <span className="text-[11px] text-slate-400 hidden sm:inline">
              o arrastra/pega captura aquí
            </span>
          </div>

          <button
            type="button"
            onClick={() => {
              const randomProb =
                SAMPLE_PROBLEMS[Math.floor(Math.random() * SAMPLE_PROBLEMS.length)];
              handleLoadSampleImage(randomProb);
            }}
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-medium bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-200 border border-indigo-500/30 transition cursor-pointer"
          >
            <Wand2 className="w-3 h-3" />
            Cargar Imagen de Examen Demo
          </button>
        </div>

        {/* Vista previa si hay una imagen cargada lista para enviar */}
        {imagePreview && (
          <div className="mt-2.5 relative rounded-lg overflow-hidden border border-cyan-500/40 bg-slate-900 p-1.5 flex items-center gap-3">
            <img
              src={imagePreview}
              alt="Problema subido"
              className="h-20 w-32 object-cover rounded border border-slate-700"
            />
            <div className="flex-1 min-w-0">
              <div className="text-xs font-semibold text-cyan-300 flex items-center gap-1">
                <ImageIcon className="w-3.5 h-3.5" /> Imagen lista para analizar y simular
              </div>
              <p className="text-[11px] text-slate-400 truncate mt-0.5">
                Presiona &quot;Resolver y Simular&quot; para construir la escena y ver los DCL.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setImagePreview(null)}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-rose-500/30 text-slate-300 hover:text-rose-200 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Historial de Mensajes del Chatbot */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[380px]">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex gap-2.5 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {msg.role !== 'user' && (
              <div className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 flex items-center justify-center shrink-0 mt-0.5">
                <Bot className="w-4 h-4" />
              </div>
            )}

            <div
              className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed ${
                msg.role === 'user'
                  ? 'bg-cyan-600/25 border border-cyan-500/40 text-slate-100'
                  : 'bg-slate-950/90 border border-slate-800 text-slate-200'
              }`}
            >
              {msg.image && (
                <img
                  src={msg.image}
                  alt="Problema enviado"
                  className="max-h-40 rounded-lg border border-slate-700 mb-2 object-contain bg-slate-900"
                />
              )}

              {msg.provider && (
                <div className="mb-1.5 flex items-center gap-1.5">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-cyan-400 border border-slate-800">
                    ⚡ {msg.provider}
                  </span>
                </div>
              )}

              <FormattedMarkdown text={msg.content} />
            </div>

            {msg.role === 'user' && (
              <div className="w-7 h-7 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 flex items-center justify-center shrink-0 mt-0.5">
                <User className="w-4 h-4" />
              </div>
            )}
          </div>
        ))}

        {isLoading && (
          <div className="flex items-center gap-2 text-xs text-cyan-300 bg-slate-950/80 border border-slate-800 rounded-xl px-3.5 py-2.5">
            <Loader2 className="w-4 h-4 animate-spin text-cyan-400" />
            <span>
              Analizando problema físico, calculando Diagramas de Cuerpo Libre y sincronizando simulador...
            </span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Formulario de Entrada de Pregunta / Enunciado */}
      <form
        onSubmit={handleSubmit}
        className="p-3 bg-slate-950/90 border-t border-slate-800 space-y-2"
      >
        <div className="flex gap-2">
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
            placeholder="Escribe un problema (ej: 'Un bloque de 8 kg en rampa de 35° con fricción 0.18 unido por polea a 5 kg') o sube una imagen..."
            className="flex-1 bg-slate-900 border border-slate-800 focus:border-cyan-500/60 focus:outline-none rounded-xl px-3 py-2 text-xs text-slate-100 placeholder-slate-500 resize-none"
          />
          <button
            type="submit"
            disabled={isLoading || (!input.trim() && !imagePreview)}
            className="px-4 rounded-xl font-semibold text-xs bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-40 text-white flex flex-col items-center justify-center gap-1 shadow-lg shadow-cyan-500/20 transition cursor-pointer shrink-0"
          >
            {imagePreview ? <Sparkles className="w-4 h-4" /> : <Send className="w-4 h-4" />}
            <span>{imagePreview ? 'Simular' : 'Enviar'}</span>
          </button>
        </div>
      </form>
    </div>
  );
}

/**
 * Renderizador ligero y limpio de Markdown para ecuaciones, bloques de código, títulos y listas
 */
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
              className="bg-slate-900/95 border border-slate-800 text-amber-300 font-mono text-[11px] p-2.5 rounded-lg overflow-x-auto"
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
                return <hr key={lIdx} className="border-slate-800 my-2" />;
              }
              if (trimmed.startsWith('### ')) {
                return (
                  <h4 key={lIdx} className="text-xs font-bold text-cyan-300 pt-1">
                    {trimmed.replace('### ', '')}
                  </h4>
                );
              }
              if (trimmed.startsWith('#### ')) {
                return (
                  <h5 key={lIdx} className="text-xs font-semibold text-indigo-300 pt-1">
                    {trimmed.replace('#### ', '')}
                  </h5>
                );
              }
              if (trimmed.startsWith('- ')) {
                return (
                  <div key={lIdx} className="flex items-start gap-1.5 pl-1">
                    <span className="text-cyan-400 mt-0.5">•</span>
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
    .replace(/\*(.*?)\*/g, '<em class="text-slate-300">$1</em>')
    .replace(
      /`(.*?)`/g,
      '<code class="font-mono text-[11px] bg-slate-900 text-emerald-300 px-1.5 py-0.5 rounded border border-slate-800">$1</code>'
    );
}

