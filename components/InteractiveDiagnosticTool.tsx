'use client';

import React, { useState } from 'react';
import {
  Calculator,
  Bot,
  Zap,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Send,
  Loader2,
  Info,
  CheckCircle,
} from 'lucide-react';
import { I18N_STRINGS, Language } from '@/lib/portfolio-data';

interface DiagnosticToolProps {
  currentLang: Language;
}

export function InteractiveDiagnosticTool({ currentLang }: DiagnosticToolProps) {
  const t = I18N_STRINGS[currentLang];
  const [activeTab, setActiveTab] = useState<'calc' | 'ai'>('calc');

  // Calculator State
  const [voltage, setVoltage] = useState<number>(220); // Volts
  const [isThreePhase, setIsThreePhase] = useState<boolean>(false);
  const [currentAmps, setCurrentAmps] = useState<number>(25); // Amperes
  const [distanceMeters, setDistanceMeters] = useState<number>(30); // Metros
  const [maxDropPct, setMaxDropPct] = useState<number>(3); // 3% conforme NBR 5410

  // AI Assistant State
  const [question, setQuestion] = useState<string>('');
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [isLoadingAi, setIsLoadingAi] = useState<boolean>(false);
  const [aiError, setAiError] = useState<string | null>(null);

  // Electrical calculation based on NBR 5410 ampacity and voltage drop formula
  const standardGauges = [1.5, 2.5, 4.0, 6.0, 10.0, 16.0, 25.0, 35.0, 50.0, 70.0, 95.0, 120.0];
  const standardBreakers = [10, 16, 20, 25, 32, 40, 50, 63, 80, 100, 125, 160, 200];

  const ampacitiesSinglePhase: Record<number, number> = {
    1.5: 17.5,
    2.5: 24.0,
    4.0: 32.0,
    6.0: 41.0,
    10.0: 57.0,
    16.0: 76.0,
    25.0: 101.0,
    35.0: 125.0,
    50.0: 151.0,
    70.0: 192.0,
    95.0: 232.0,
    120.0: 269.0,
  };

  const ampacitiesThreePhase: Record<number, number> = {
    1.5: 15.5,
    2.5: 21.0,
    4.0: 28.0,
    6.0: 36.0,
    10.0: 50.0,
    16.0: 68.0,
    25.0: 89.0,
    35.0: 110.0,
    50.0: 134.0,
    70.0: 171.0,
    95.0: 207.0,
    120.0: 239.0,
  };

  const rhoCu = 0.0178; // Resistividade do cobre a 20°C
  const deltaVAllowed = (voltage * maxDropPct) / 100;
  const factor = isThreePhase ? Math.sqrt(3) : 2;
  const minGaugeByDrop = (factor * rhoCu * distanceMeters * currentAmps) / deltaVAllowed;

  const activeAmpacities = isThreePhase ? ampacitiesThreePhase : ampacitiesSinglePhase;

  let selectedGauge = standardGauges[standardGauges.length - 1];
  for (const g of standardGauges) {
    if (g >= minGaugeByDrop && activeAmpacities[g] >= currentAmps) {
      selectedGauge = g;
      break;
    }
  }

  const actualDeltaV = (factor * rhoCu * distanceMeters * currentAmps) / selectedGauge;
  const actualDropPct = ((actualDeltaV / voltage) * 100).toFixed(2);

  let suggestedBreaker = 200;
  for (const b of standardBreakers) {
    if (b >= currentAmps && b <= activeAmpacities[selectedGauge] * 1.1) {
      suggestedBreaker = b;
      break;
    }
  }

  // Handle AI Question Submit
  const handleAskAi = async (queryText?: string) => {
    const textToSend = queryText || question;
    if (!textToSend.trim()) return;

    setIsLoadingAi(true);
    setAiError(null);
    setAiResponse(null);

    try {
      const res = await fetch('/api/gemini/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: textToSend, language: currentLang }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Erro na requisição');
      }

      setAiResponse(data.answer);
    } catch (err: unknown) {
      console.error(err);
      setAiError(
        currentLang === 'pt'
          ? 'Não foi possível obter resposta no momento. Entre em contato direto via jallanluiz@gmail.com.'
          : 'Could not fetch response right now. Please contact jallanluiz@gmail.com directly.'
      );
    } finally {
      setIsLoadingAi(false);
    }
  };

  return (
    <section id="diagnostic" className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{currentLang === 'pt' ? 'Ferramentas Técnicas' : currentLang === 'es' ? 'Herramientas Técnicas' : 'Engineering Tools'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.diagnostic.sectionTitle}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-2">
            {t.diagnostic.sectionSubtitle}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 p-1.5 bg-white border border-slate-200 rounded-2xl max-w-xl shadow-2xs">
          <button
            onClick={() => setActiveTab('calc')}
            className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
              activeTab === 'calc'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <Calculator className="w-4 h-4" />
            <span>{t.diagnostic.calcTab}</span>
          </button>

          <button
            onClick={() => setActiveTab('ai')}
            className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
              activeTab === 'ai'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <Bot className="w-4 h-4" />
            <span>{t.diagnostic.aiTab}</span>
          </button>
        </div>

        {/* Tab 1: Wire Gauge Calculator */}
        {activeTab === 'calc' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Input Controls (Col 1-7) */}
            <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 space-y-6 shadow-2xs">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Zap className="w-4 h-4 text-blue-600" />
                <span>{currentLang === 'pt' ? 'Parâmetros do Circuito Elétrico' : currentLang === 'es' ? 'Parámetros del Circuito' : 'Circuit Design Parameters'}</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Voltage & Phase */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    {t.diagnostic.calcVoltageLabel}
                  </label>
                  <select
                    value={`${voltage}-${isThreePhase ? '3' : '1'}`}
                    onChange={(e) => {
                      const [v, p] = e.target.value.split('-');
                      setVoltage(Number(v));
                      setIsThreePhase(p === '3');
                    }}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-blue-600 focus:outline-none"
                  >
                    <option value="127-1">127V Monofásico (Fase-Neutro)</option>
                    <option value="220-1">220V Monofásico / Bifásico</option>
                    <option value="220-3">220V Trifásico (3F+T)</option>
                    <option value="380-3">380V Trifásico (3F+N+T)</option>
                    <option value="440-3">440V Trifásico Industrial</option>
                  </select>
                </div>

                {/* Current */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <label className="font-bold text-slate-700">
                      {t.diagnostic.calcCurrentLabel}
                    </label>
                    <span className="font-mono text-blue-700 font-extrabold">{currentAmps} A</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="150"
                    value={currentAmps}
                    onChange={(e) => setCurrentAmps(Number(e.target.value))}
                    className="w-full accent-blue-600 mt-2"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-medium">
                    <span>1A (Iluminação)</span>
                    <span>50A</span>
                    <span>150A (Alimentador)</span>
                  </div>
                </div>

                {/* Distance */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <label className="font-bold text-slate-700">
                      {t.diagnostic.calcDistanceLabel}
                    </label>
                    <span className="font-mono text-blue-700 font-extrabold">{distanceMeters} m</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="200"
                    value={distanceMeters}
                    onChange={(e) => setDistanceMeters(Number(e.target.value))}
                    className="w-full accent-blue-600 mt-2"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-medium">
                    <span>2m</span>
                    <span>100m</span>
                    <span>200m</span>
                  </div>
                </div>

                {/* Max Voltage Drop Limit */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs">
                    <label className="font-bold text-slate-700">
                      {t.diagnostic.calcVoltageDropLimit}
                    </label>
                    <span className="font-mono text-blue-700 font-extrabold">{maxDropPct}%</span>
                  </div>
                  <select
                    value={maxDropPct}
                    onChange={(e) => setMaxDropPct(Number(e.target.value))}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-blue-600 focus:outline-none"
                  >
                    <option value={2}>2% (Cargas Críticas / TI / No-break)</option>
                    <option value={3}>3% (Padrão NBR 5410 Circuitos Terminais)</option>
                    <option value={4}>4% (Alimentadores Primários)</option>
                    <option value={5}>5% (Total Quadro de Entrada)</option>
                  </select>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-900 flex items-start gap-2">
                <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>{t.diagnostic.calcNote}</span>
              </div>
            </div>

            {/* Results Output Card (Col 8-12) */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-white border border-blue-200 space-y-6 shadow-md">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-blue-700">
                  {t.diagnostic.calcResultSection}
                </h4>
                <span className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 text-[11px] font-bold border border-blue-200">
                  NBR 5410
                </span>
              </div>

              <div className="space-y-4">
                {/* Recommended Wire Gauge */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs text-slate-600 font-semibold">
                    {t.diagnostic.calcMinGauge}
                  </div>
                  <div className="text-3xl font-black text-blue-700 mt-1">
                    {selectedGauge} mm²
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    {currentLang === 'pt'
                      ? `Capacidade de condução: até ${activeAmpacities[selectedGauge]}A contínuo`
                      : `Conductor ampacity: up to ${activeAmpacities[selectedGauge]}A continuous`}
                  </div>
                </div>

                {/* Breaker & Drop */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-[11px] text-slate-600 font-semibold">
                      {t.diagnostic.calcBreaker}
                    </div>
                    <div className="text-xl font-extrabold text-slate-900 mt-1">
                      {suggestedBreaker} A
                    </div>
                    <div className="text-[10px] text-slate-500 mt-0.5">
                      Curva C Termomagnético
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-[11px] text-slate-600 font-semibold">
                      {t.diagnostic.calcDropActual}
                    </div>
                    <div className={`text-xl font-extrabold mt-1 ${Number(actualDropPct) <= maxDropPct ? 'text-emerald-700' : 'text-rose-600'}`}>
                      {actualDropPct}%
                    </div>
                    <div className="text-[10px] text-slate-500 mt-0.5">
                      {actualDeltaV.toFixed(2)} Volts queda
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2 text-xs text-slate-600 flex items-center gap-1.5 font-medium">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  {currentLang === 'pt'
                    ? 'Dimensionamento balanceado com margem de segurança térmica.'
                    : 'Balanced sizing complying with thermal safety margins.'}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: AI Scope & Technical Assistant */}
        {activeTab === 'ai' && (
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 space-y-6 shadow-2xs">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                  <Bot className="w-5 h-5 text-blue-600" />
                  <span>{currentLang === 'pt' ? 'Assistente Técnico Especializado em Manutenção' : 'Maintenance Scope & Standards AI Assistant'}</span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {currentLang === 'pt'
                    ? 'Consulte detalhes sobre a atuação de Allan na JLL, rotinas de gerador/UPS, conformidade NR-10 e escopo geral.'
                    : 'Ask about Allan’s track record at JLL, generator/UPS routine inspections, NR-10 compliance, and maintenance scope.'}
                </p>
              </div>
            </div>

            {/* Quick Sample Queries */}
            <div className="space-y-2">
              <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                {currentLang === 'pt' ? 'Perguntas Rápidas Frequentes:' : 'Frequently Asked Technical Questions:'}
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => {
                    setQuestion(t.diagnostic.aiSample1);
                    handleAskAi(t.diagnostic.aiSample1);
                  }}
                  className="px-3.5 py-1.5 rounded-xl text-xs bg-slate-50 text-slate-700 border border-slate-200 hover:border-blue-300 hover:text-blue-700 transition-all text-left font-medium"
                >
                  ⚡ {t.diagnostic.aiSample1}
                </button>
                <button
                  onClick={() => {
                    setQuestion(t.diagnostic.aiSample2);
                    handleAskAi(t.diagnostic.aiSample2);
                  }}
                  className="px-3.5 py-1.5 rounded-xl text-xs bg-slate-50 text-slate-700 border border-slate-200 hover:border-blue-300 hover:text-blue-700 transition-all text-left font-medium"
                >
                  🛡️ {t.diagnostic.aiSample2}
                </button>
                <button
                  onClick={() => {
                    setQuestion(t.diagnostic.aiSample3);
                    handleAskAi(t.diagnostic.aiSample3);
                  }}
                  className="px-3.5 py-1.5 rounded-xl text-xs bg-slate-50 text-slate-700 border border-slate-200 hover:border-blue-300 hover:text-blue-700 transition-all text-left font-medium"
                >
                  🔧 {t.diagnostic.aiSample3}
                </button>
              </div>
            </div>

            {/* Input Form */}
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleAskAi();
                }}
                placeholder={t.diagnostic.aiPlaceholder}
                className="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-blue-600"
              />
              <button
                onClick={() => handleAskAi()}
                disabled={isLoadingAi || !question.trim()}
                className="px-5 py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 transition-all shrink-0 cursor-pointer shadow-xs"
              >
                {isLoadingAi ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>{currentLang === 'pt' ? 'Consultando...' : 'Querying...'}</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>{t.diagnostic.aiButton}</span>
                  </>
                )}
              </button>
            </div>

            {/* AI Response Card */}
            {isLoadingAi && (
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3 text-slate-700 text-sm animate-pulse">
                <Loader2 className="w-5 h-5 text-blue-600 animate-spin" />
                <span>{t.diagnostic.aiLoading}</span>
              </div>
            )}

            {aiResponse && (
              <div className="p-6 rounded-2xl bg-slate-50 border border-blue-200 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                  <span className="text-xs font-bold text-blue-700 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Resposta do Assistente Técnico</span>
                  </span>
                  <span className="text-[11px] font-mono text-slate-500 font-semibold">Gemini Flash</span>
                </div>
                <div className="text-xs sm:text-sm text-slate-800 leading-relaxed whitespace-pre-line">
                  {aiResponse}
                </div>
              </div>
            )}

            {aiError && (
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold">
                {aiError}
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
