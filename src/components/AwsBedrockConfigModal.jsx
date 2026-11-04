import React from 'react';
import { X, Server, KeyRound, Sparkles, Check } from 'lucide-react';

export default function AwsBedrockConfigModal({ isOpen, onClose, awsConfig, setAwsConfig }) {
  if (!isOpen) return null;

  const update = (patch) => setAwsConfig((prev) => ({ ...prev, ...patch }));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4">
      <div className="w-full max-w-xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 bg-slate-950 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              <Server className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-100">
                Configuración de Endpoint AWS Bedrock & IA
              </h3>
              <p className="text-xs text-slate-400">
                Conecta tu propio Endpoint (API Gateway / Lambda) o el SDK directo de AWS Bedrock
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-5 space-y-4 max-h-[80vh] overflow-y-auto">
          {/* Selector de Modo */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {[
              {
                id: 'custom_endpoint',
                title: 'Endpoint HTTP AWS',
                desc: 'API Gateway / Lambda URL',
                icon: Server,
              },
              {
                id: 'bedrock_sdk',
                title: 'AWS Bedrock SDK',
                desc: 'Credenciales IAM / Claude / Nova',
                icon: KeyRound,
              },
              {
                id: 'demo',
                title: 'Modo Demo / Local',
                desc: 'Funciona sin llaves AWS',
                icon: Sparkles,
              },
            ].map((item) => {
              const Icon = item.icon;
              const active = awsConfig.mode === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => update({ mode: item.id })}
                  className={`p-3 rounded-xl border text-left transition cursor-pointer ${
                    active
                      ? 'bg-cyan-500/15 border-cyan-500/50 text-cyan-200'
                      : 'bg-slate-950/70 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <Icon className="w-4 h-4 text-cyan-400" />
                    {active && <Check className="w-3.5 h-3.5 text-cyan-400" />}
                  </div>
                  <div className="text-xs font-bold text-slate-100">{item.title}</div>
                  <div className="text-[11px] text-slate-400">{item.desc}</div>
                </button>
              );
            })}
          </div>

          {awsConfig.mode === 'custom_endpoint' && (
            <div className="space-y-3 bg-slate-950/70 border border-slate-800 rounded-xl p-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  URL de tu Endpoint AWS (API Gateway / Lambda Function URL)
                </label>
                <input
                  type="url"
                  value={awsConfig.endpointUrl}
                  onChange={(e) => update({ endpointUrl: e.target.value })}
                  placeholder="https://xxxx.execute-api.us-east-1.amazonaws.com/prod/solve"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-100 font-mono"
                />
                <p className="text-[11px] text-slate-400 mt-1">
                  Recibirá un POST JSON con <code>{`{ prompt, image, sceneState, modelId }`}</code>.
                </p>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  API Key / Bearer Token (Opcional)
                </label>
                <input
                  type="password"
                  value={awsConfig.apiKey}
                  onChange={(e) => update({ apiKey: e.target.value })}
                  placeholder="x-api-key o Bearer token..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-100 font-mono"
                />
              </div>
            </div>
          )}

          {awsConfig.mode === 'bedrock_sdk' && (
            <div className="space-y-3 bg-slate-950/70 border border-slate-800 rounded-xl p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    AWS Region
                  </label>
                  <input
                    type="text"
                    value={awsConfig.region}
                    onChange={(e) => update({ region: e.target.value })}
                    placeholder="us-east-1"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-100 font-mono"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Bedrock Model ID (Converse API)
                  </label>
                  <input
                    type="text"
                    value={awsConfig.modelId}
                    onChange={(e) => update({ modelId: e.target.value })}
                    placeholder="us.anthropic.claude-3-5-sonnet-20241022-v2:0"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-100 font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  AWS Access Key ID
                </label>
                <input
                  type="text"
                  value={awsConfig.accessKeyId}
                  onChange={(e) => update({ accessKeyId: e.target.value })}
                  placeholder="AKIA..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-100 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  AWS Secret Access Key
                </label>
                <input
                  type="password"
                  value={awsConfig.secretAccessKey}
                  onChange={(e) => update({ secretAccessKey: e.target.value })}
                  placeholder="Tu Secret Access Key..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-100 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  AWS Session Token (Opcional, para credenciales temporales SSO)
                </label>
                <input
                  type="password"
                  value={awsConfig.sessionToken}
                  onChange={(e) => update({ sessionToken: e.target.value })}
                  placeholder="IQoJb3JpZ2luX2Vj..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-100 font-mono"
                />
              </div>
            </div>
          )}

          {awsConfig.mode === 'demo' && (
            <div className="bg-emerald-950/30 border border-emerald-500/30 rounded-xl p-4 text-xs text-emerald-200 space-y-1.5">
              <div className="font-bold flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                Motor Analítico Híbrido Activo
              </div>
              <p className="text-slate-300 leading-relaxed">
                Puedes probar de inmediato la subida de imágenes, el generador de escenas en el
                simulador, los Diagramas de Cuerpo Libre (DCL) y el Modo Juego / Constructor sin
                necesidad de llaves. Cuando quieras conectar tu endpoint de AWS Bedrock, solo cambia
                a una de las pestañas superiores.
              </p>
            </div>
          )}
        </div>

        <div className="px-5 py-3 bg-slate-950 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition cursor-pointer"
          >
            Guardar y Continuar
          </button>
        </div>
      </div>
    </div>
  );
}

