'use client';

import React from 'react';
import {
  ShieldCheck,
  Zap,
  Activity,
  ArrowRight,
  FileDown,
  Building2,
  CheckCircle2,
  Wrench,
  Gauge,
  Layers,
  MapPin,
  Clock,
  Sparkles,
} from 'lucide-react';
import { I18N_STRINGS, Language } from '@/lib/portfolio-data';
import { PersonalInfo } from '@/lib/portfolio-store';

interface HeroProps {
  currentLang: Language;
  onOpenResumeModal: () => void;
  personalInfo: PersonalInfo;
}

export function Hero({ currentLang, onOpenResumeModal, personalInfo }: HeroProps) {
  const t = I18N_STRINGS[currentLang];

  return (
    <section id="summary" className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-slate-50 border-b border-slate-200">
      {/* Subtle crisp engineering grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Copy (Col 1-7) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Badges container */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200 shadow-2xs">
                <Zap className="w-3.5 h-3.5 text-blue-600" />
                {currentLang === 'pt' ? 'Técnico em Eletrotécnica' : currentLang === 'es' ? 'Técnico en Electrotecnia' : 'Certified Electrotechnics'}
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200 shadow-2xs">
                <Building2 className="w-3.5 h-3.5 text-amber-600" />
                <span>JLL Facilities ({personalInfo.stats?.jllDuration || '1a 1m'})</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>NR-10 • NR-35 • LOTO</span>
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
              {t.hero.headline}
            </h1>

            {/* Subheadline & Bio Summary */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              {personalInfo.bio[currentLang]}
            </p>

            {/* Key Specialized Domains Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs text-xs font-bold text-slate-800">
                <Gauge className="w-4 h-4 text-blue-600 shrink-0" />
                <span>QGBT & Barramentos</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs text-xs font-bold text-slate-800">
                <Activity className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Geradores & No-breaks</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs text-xs font-bold text-slate-800">
                <Layers className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Termografia Preditiva</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs text-xs font-bold text-slate-800">
                <Wrench className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Comandos de Motores</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs text-xs font-bold text-slate-800">
                <Building2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Hidráulica & Bombas</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs text-xs font-bold text-slate-800">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Drywall & Pintura Epóxi</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button
                onClick={onOpenResumeModal}
                id="hero-download-cv-btn"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-sm hover:shadow transition-all hover:-translate-y-0.5"
              >
                <FileDown className="w-4 h-4" />
                <span>{t.hero.ctaDownloadCv}</span>
              </button>

              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-2xs"
              >
                <span>{t.hero.ctaProjects}</span>
                <ArrowRight className="w-4 h-4 text-blue-600" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-slate-600 hover:text-blue-600 text-xs sm:text-sm font-bold transition-colors"
              >
                <span>{t.hero.ctaContact}</span>
              </a>
            </div>
          </div>

          {/* Right Card (Col 8-12) - Technical Profile Summary Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 shadow-lg shadow-slate-200/50">
              
              {/* Header inside card */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-xl shadow-xs">
                    AL
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-extrabold text-base leading-tight">
                      {personalInfo.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-semibold mt-0.5">
                      {currentLang === 'pt' ? personalInfo.titlePt : currentLang === 'es' ? personalInfo.titleEs : personalInfo.titleEn}
                    </p>
                  </div>
                </div>

                <div className="px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>DISPONÍVEL</span>
                </div>
              </div>

              {/* Verified Career Credentials */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-600 border border-blue-200 shrink-0 mt-0.5">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div className="text-xs">
                    <div className="font-bold text-slate-900">
                      JLL (Jones Lang LaSalle) - Facilities
                    </div>
                    <div className="text-slate-600 mt-0.5 leading-snug">
                      {personalInfo.jllExperience[currentLang]}
                    </div>
                    <div className="text-blue-700 font-bold mt-1">
                      {currentLang === 'pt'
                        ? 'Oficial de Manutenção Geral em Edifícios Corporativos A+'
                        : currentLang === 'es'
                        ? 'Oficial de Mantenimiento en Edificios Corporativos A+'
                        : 'General Maintenance Officer in Corporate Class A+ Real Estate'}
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-amber-50 text-amber-700 border border-amber-200 shrink-0 mt-0.5">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div className="text-xs">
                    <div className="font-bold text-slate-900">
                      {currentLang === 'pt' ? 'Curso Técnico em Eletrotécnica' : currentLang === 'es' ? 'Curso Técnico en Electrotecnia' : 'Technical Course in Electrotechnics'}
                    </div>
                    <div className="text-slate-600 mt-0.5 leading-snug">
                      {currentLang === 'pt'
                        ? 'Projetos elétricos, cálculos de demanda, comandos e máquinas rotativas'
                        : currentLang === 'es'
                        ? 'Diseño eléctrico, cálculo de demanda, cuadros y máquinas rotativas'
                        : 'Power distribution, wire sizing, motor control, and single-line schematics'}
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className="text-xs">
                    <div className="font-bold text-slate-900">
                      NR-10, NR-35 & Procedimento LOTO
                    </div>
                    <div className="text-slate-600 mt-0.5 leading-snug">
                      {currentLang === 'pt'
                        ? 'Desenergização segura, bloqueio mecânico com cadeados e trabalho em altura'
                        : currentLang === 'es'
                        ? 'Desconexión segura, bloqueo LOTO y trabajos seguros en altura'
                        : 'Zero-voltage verification, lockout-tagout padlocks & certified harness at heights'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Quick Contact inside Card */}
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1.5 text-slate-700">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span>{personalInfo.location}</span>
                </span>

                <a
                  href="#contact"
                  className="font-bold text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-1"
                >
                  <span>{currentLang === 'pt' ? 'Contatar Agora' : currentLang === 'es' ? 'Contactar' : 'Direct Message'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Symmetrical 4-Metric Strip */}
        <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
            <div className="text-2xl sm:text-3xl font-black text-blue-600 tracking-tight">
              {t.hero.stat1Val}
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
              {t.hero.stat1Label}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
            <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {t.hero.stat2Val}
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
              {t.hero.stat2Label}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
            <div className="text-2xl sm:text-3xl font-black text-emerald-600 tracking-tight">
              {t.hero.stat3Val}
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
              {t.hero.stat3Label}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
            <div className="text-2xl sm:text-3xl font-black text-amber-600 tracking-tight">
              {t.hero.stat4Val}
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
              {t.hero.stat4Label}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
