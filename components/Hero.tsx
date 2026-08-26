'use client';

import React from 'react';
import {
  ShieldCheck,
  Zap,
  Activity,
  ArrowRight,
  FileDown,
  Building2,
  Wrench,
  Gauge,
  Layers,
  MapPin,
  Sparkles,
  Code2,
  Database,
  Globe,
  Terminal,
  Cpu,
  Server,
  Briefcase,
  CheckCircle2,
} from 'lucide-react';
import { I18N_STRINGS, Language } from '@/lib/portfolio-data';
import { PersonalInfo } from '@/lib/portfolio-store';

export type TrackType = 'all' | 'maintenance' | 'developer';

interface HeroProps {
  currentLang: Language;
  currentTrack: TrackType;
  onTrackChange: (track: TrackType) => void;
  onOpenResumeModal: (track?: TrackType) => void;
  personalInfo: PersonalInfo;
}

export function Hero({
  currentLang,
  currentTrack,
  onTrackChange,
  onOpenResumeModal,
  personalInfo,
}: HeroProps) {
  const t = I18N_STRINGS[currentLang];

  return (
    <section id="summary" className="relative pt-6 pb-14 md:pt-12 md:pb-20 overflow-hidden bg-slate-50 border-b border-slate-200">
      {/* Subtle crisp engineering grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Dual-Track Primary Selector Banner */}
        <div className="bg-white rounded-2xl border border-slate-200 p-2 sm:p-2.5 shadow-sm max-w-3xl mx-auto">
          <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider px-3 pt-1 pb-1.5 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5 text-blue-600" />
              {currentLang === 'pt' ? 'Selecione a Área de Avaliação Profissional:' : currentLang === 'es' ? 'Seleccione el Área de Evaluación:' : 'Select Professional Profile Track:'}
            </span>
            <span className="text-[10px] font-extrabold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
              {currentTrack === 'maintenance' ? 'TRILHA A' : currentTrack === 'developer' ? 'TRILHA B' : 'VISÃO GERAL'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5">
            {/* Track A Button */}
            <button
              onClick={() => onTrackChange('maintenance')}
              className={`p-3 rounded-xl text-left transition-all cursor-pointer flex items-center gap-3 border ${
                currentTrack === 'maintenance'
                  ? 'bg-amber-600 text-white border-amber-600 shadow-sm'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200/80'
              }`}
            >
              <div className={`p-2 rounded-lg shrink-0 ${currentTrack === 'maintenance' ? 'bg-amber-700 text-white' : 'bg-amber-100 text-amber-800'}`}>
                <Zap className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-black leading-tight truncate">
                  {currentLang === 'pt' ? 'Trilha A: Eletricista & Manutenção' : currentLang === 'es' ? 'Pista A: Electricista y Mantenimiento' : 'Track A: Electrician & Facilities'}
                </div>
                <div className={`text-[11px] truncate mt-0.5 ${currentTrack === 'maintenance' ? 'text-amber-100' : 'text-slate-500 font-medium'}`}>
                  ATS • JLL Facilities • NR-10/35
                </div>
              </div>
            </button>

            {/* Track B Button */}
            <button
              onClick={() => onTrackChange('developer')}
              className={`p-3 rounded-xl text-left transition-all cursor-pointer flex items-center gap-3 border ${
                currentTrack === 'developer'
                  ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200/80'
              }`}
            >
              <div className={`p-2 rounded-lg shrink-0 ${currentTrack === 'developer' ? 'bg-blue-700 text-white' : 'bg-blue-100 text-blue-800'}`}>
                <Code2 className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-black leading-tight truncate">
                  {currentLang === 'pt' ? 'Trilha B: Full-Stack Developer' : currentLang === 'es' ? 'Pista B: Desarrollador Full-Stack' : 'Track B: Full-Stack Developer'}
                </div>
                <div className={`text-[11px] truncate mt-0.5 ${currentTrack === 'developer' ? 'text-blue-100' : 'text-slate-500 font-medium'}`}>
                  React • Next.js • Node • Cloud
                </div>
              </div>
            </button>

            {/* Dual / Combined View */}
            <button
              onClick={() => onTrackChange('all')}
              className={`p-3 rounded-xl text-left transition-all cursor-pointer flex items-center gap-3 border ${
                currentTrack === 'all'
                  ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200/80'
              }`}
            >
              <div className={`p-2 rounded-lg shrink-0 ${currentTrack === 'all' ? 'bg-slate-800 text-white' : 'bg-slate-200 text-slate-700'}`}>
                <Layers className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-black leading-tight truncate">
                  {currentLang === 'pt' ? 'Visão Completa Integrada' : currentLang === 'es' ? 'Visión Integral Completa' : 'Full Integrated Dual Profile'}
                </div>
                <div className={`text-[11px] truncate mt-0.5 ${currentTrack === 'all' ? 'text-slate-300' : 'text-slate-500 font-medium'}`}>
                  {currentLang === 'pt' ? 'Ambos os pilares profissionais' : currentLang === 'es' ? 'Ambos pilares' : 'Both professional tracks'}
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Copy (Col 1-7) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Badges container */}
            <div className="flex flex-wrap items-center gap-2">
              {currentTrack === 'maintenance' ? (
                <>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-amber-50 text-amber-900 border border-amber-200 shadow-2xs">
                    <Zap className="w-3.5 h-3.5 text-amber-600" />
                    {currentLang === 'pt' ? 'Oficial de Manutenção & Eletricista' : currentLang === 'es' ? 'Oficial de Mantenimiento y Electricista' : 'Maintenance Officer & Electrician'}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-blue-50 text-blue-800 border border-blue-200 shadow-2xs">
                    <Building2 className="w-3.5 h-3.5 text-blue-600" />
                    <span>ATS Serviços Especiais & JLL Facilities</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 shadow-2xs">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>NR-10 SEP • NR-35 • LOTO</span>
                  </span>
                </>
              ) : currentTrack === 'developer' ? (
                <>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-blue-50 text-blue-800 border border-blue-200 shadow-2xs">
                    <Code2 className="w-3.5 h-3.5 text-blue-600" />
                    <span>Full-Stack Software Developer</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-indigo-50 text-indigo-800 border border-indigo-200 shadow-2xs">
                    <Cpu className="w-3.5 h-3.5 text-indigo-600" />
                    <span>TypeScript • Next.js 15 • React 19</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 shadow-2xs">
                    <Database className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Node.js • PostgreSQL • APIs</span>
                  </span>
                </>
              ) : (
                <>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-amber-50 text-amber-900 border border-amber-200 shadow-2xs">
                    <Zap className="w-3.5 h-3.5 text-amber-600" />
                    <span>Trilha A: Eletrotécnica & Facilities</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-blue-50 text-blue-800 border border-blue-200 shadow-2xs">
                    <Code2 className="w-3.5 h-3.5 text-blue-600" />
                    <span>Trilha B: Full-Stack Software</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-slate-100 text-slate-800 border border-slate-300 shadow-2xs">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>NR-10 • NR-35 • Clean Code</span>
                  </span>
                </>
              )}
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
              {currentTrack === 'maintenance'
                ? currentLang === 'pt'
                  ? 'Operação, Manutenção Elétrica e Infraestrutura Crítica'
                  : currentLang === 'es'
                  ? 'Operación, Mantenimiento Eléctrico e Infraestructura'
                  : 'Electrical Maintenance, Operations & Critical Facilities'
                : currentTrack === 'developer'
                ? currentLang === 'pt'
                  ? 'Desenvolvimento Full-Stack, Arquitetura Web e Cloud'
                  : currentLang === 'es'
                  ? 'Desarrollo Full-Stack, Arquitectura Web y Cloud'
                  : 'Full-Stack Software Development & Cloud Web Systems'
                : t.hero.headline}
            </h1>

            {/* Subheadline & Bio Summary */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              {currentTrack === 'maintenance'
                ? currentLang === 'pt'
                  ? 'Oficial de Manutenção com atuação em prédios corporativos e indústrias (ATS Serviços Especiais e JLL). Formação técnica em Eletricista Instalador Residencial, NR-10 SEP, NR-35, NR-20, NR-12 e LOTO. Especialista em grupos geradores diesel, nobreaks UPS, painéis QGBT, comandos de bombas, hidráulica e civil.'
                  : currentLang === 'es'
                  ? 'Oficial de Mantenimiento con experiencia en ATS y JLL Facilities. Formación técnica en Electricista, NR-10 SEP, NR-35, NR-20, NR-12 y LOTO. Especialista en generadores, SAI/UPS, tableros QGBT y fontanería.'
                  : 'Maintenance Officer with hands-on track record at ATS Serviços Especiais and JLL Facilities. Technical education in electrical installations, NR-10 SEP, NR-35, NR-20, NR-12, and LOTO safety protocols.'
                : currentTrack === 'developer'
                ? currentLang === 'pt'
                  ? 'Desenvolvedor Full-Stack em transição técnica ativa, combinando raciocínio lógico rigoroso de engenharia prática com ecossistemas modernos de software: TypeScript, Next.js, React, Node.js, REST APIs, bancos relacionais (PostgreSQL/SQL) e cloud.'
                  : currentLang === 'es'
                  ? 'Desarrollador Full-Stack enfocado en software moderno: TypeScript, Next.js, React, Node.js, APIs REST, PostgreSQL y arquitectura de código limpio.'
                  : 'Full-Stack Developer pairing rigorous engineering logic with modern software stacks: TypeScript, Next.js, React, Node.js, REST APIs, SQL/PostgreSQL databases, and cloud.'
                : personalInfo.bio[currentLang]}
            </p>

            {/* Key Specialized Domains Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
              {currentTrack === 'maintenance' ? (
                <>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs text-xs font-bold text-slate-800">
                    <Gauge className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>QGBT & Barramentos</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs text-xs font-bold text-slate-800">
                    <Activity className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Geradores & No-breaks</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs text-xs font-bold text-slate-800">
                    <Layers className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Termografia Preditiva</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs text-xs font-bold text-slate-800">
                    <Wrench className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Comandos de Motores</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs text-xs font-bold text-slate-800">
                    <Building2 className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Hidráulica & Bombas</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs text-xs font-bold text-slate-800">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Drywall & Pintura Epóxi</span>
                  </div>
                </>
              ) : currentTrack === 'developer' ? (
                <>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs text-xs font-bold text-slate-800">
                    <Code2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Next.js 15 & React 19</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs text-xs font-bold text-slate-800">
                    <Terminal className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>TypeScript Moderno</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs text-xs font-bold text-slate-800">
                    <Server className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Node.js & REST APIs</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs text-xs font-bold text-slate-800">
                    <Database className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>PostgreSQL & Firestore</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs text-xs font-bold text-slate-800">
                    <Globe className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Tailwind CSS & UI</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs text-xs font-bold text-slate-800">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Git, CI/CD & Clean Arch</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs text-xs font-bold text-slate-800">
                    <Gauge className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>QGBT & Geradores</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs text-xs font-bold text-slate-800">
                    <Code2 className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Next.js & TypeScript</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs text-xs font-bold text-slate-800">
                    <Activity className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Termografia Preditiva</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs text-xs font-bold text-slate-800">
                    <Server className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>Node.js & REST APIs</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs text-xs font-bold text-slate-800">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>NR-10 SEP • NR-35</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs text-xs font-bold text-slate-800">
                    <Database className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>PostgreSQL & SQL</span>
                  </div>
                </>
              )}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button
                onClick={() => onOpenResumeModal(currentTrack)}
                id="hero-download-cv-btn"
                className={`inline-flex items-center justify-center gap-2 px-6 py-3 font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-sm hover:shadow transition-all hover:-translate-y-0.5 cursor-pointer ${
                  currentTrack === 'maintenance'
                    ? 'bg-amber-600 hover:bg-amber-700 text-white'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                <FileDown className="w-4 h-4" />
                <span>
                  {currentTrack === 'maintenance'
                    ? currentLang === 'pt' ? 'Baixar CV Manutenção' : currentLang === 'es' ? 'Descargar CV Mantenimiento' : 'Download Facilities CV'
                    : currentTrack === 'developer'
                    ? currentLang === 'pt' ? 'Baixar CV Developer' : currentLang === 'es' ? 'Descargar CV Developer' : 'Download Developer CV'
                    : t.hero.ctaDownloadCv}
                </span>
              </button>

              <a
                href={currentTrack === 'maintenance' ? '#field-gallery' : '#projects'}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-bold text-xs sm:text-sm rounded-xl transition-all shadow-2xs"
              >
                <span>
                  {currentTrack === 'maintenance'
                    ? currentLang === 'pt' ? 'Ver Registros de Campo' : currentLang === 'es' ? 'Ver Registros de Campo' : 'View Field Records'
                    : currentLang === 'pt' ? 'Ver Projetos de Software' : currentLang === 'es' ? 'Ver Proyectos Software' : 'View Software Projects'}
                </span>
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
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-xs ${
                    currentTrack === 'maintenance' ? 'bg-amber-600' : 'bg-blue-600'
                  }`}>
                    AL
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-extrabold text-base leading-tight">
                      {personalInfo.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-semibold mt-0.5">
                      {currentTrack === 'maintenance'
                        ? 'Oficial de Manutenção & Eletricista'
                        : currentTrack === 'developer'
                        ? 'Desenvolvedor Full-Stack (Next.js & Node)'
                        : currentLang === 'pt' ? personalInfo.titlePt : currentLang === 'es' ? personalInfo.titleEs : personalInfo.titleEn}
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
                {currentTrack === 'maintenance' ? (
                  <>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-amber-50 text-amber-700 border border-amber-200 shrink-0 mt-0.5">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div className="text-xs">
                        <div className="font-bold text-slate-900">
                          ATS Serviços Especiais & JLL Facilities
                        </div>
                        <div className="text-slate-600 mt-0.5 leading-snug">
                          Operação e manutenção em prédios corporativos de alto padrão e infraestrutura crítica.
                        </div>
                        <div className="text-amber-800 font-bold mt-1">
                          Oficial de Manutenção Geral & Predial
                        </div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-amber-50 text-amber-700 border border-amber-200 shrink-0 mt-0.5">
                        <Zap className="w-4 h-4" />
                      </div>
                      <div className="text-xs">
                        <div className="font-bold text-slate-900">
                          Eletricista Instalador Residencial
                        </div>
                        <div className="text-slate-600 mt-0.5 leading-snug">
                          QGBT, geradores diesel, nobreaks, comandos de bombas e termografia.
                        </div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0 mt-0.5">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div className="text-xs">
                        <div className="font-bold text-slate-900">
                          NR-10 SEP, NR-35, NR-20 & LOTO
                        </div>
                        <div className="text-slate-600 mt-0.5 leading-snug">
                          Desenergização segura, bloqueio mecânico com cadeados e zero acidentes.
                        </div>
                      </div>
                    </div>
                  </>
                ) : currentTrack === 'developer' ? (
                  <>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 shrink-0 mt-0.5">
                        <Code2 className="w-4 h-4" />
                      </div>
                      <div className="text-xs">
                        <div className="font-bold text-slate-900">
                          Ecossistema React & Next.js 15
                        </div>
                        <div className="text-slate-600 mt-0.5 leading-snug">
                          App Router, Server Components, TypeScript estrito e design responsivo com Tailwind CSS.
                        </div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 shrink-0 mt-0.5">
                        <Server className="w-4 h-4" />
                      </div>
                      <div className="text-xs">
                        <div className="font-bold text-slate-900">
                          Backend & APIs RESTful
                        </div>
                        <div className="text-slate-600 mt-0.5 leading-snug">
                          Node.js, Express, autenticação segura por tokens e integração com PostgreSQL e Firestore.
                        </div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0 mt-0.5">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div className="text-xs">
                        <div className="font-bold text-slate-900">
                          Engenharia de Software de Alta Confiabilidade
                        </div>
                        <div className="text-slate-600 mt-0.5 leading-snug">
                          Disciplinas de código limpo, controle de versão Git, boas práticas e deploy contínuo.
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-amber-50 text-amber-700 border border-amber-200 shrink-0 mt-0.5">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div className="text-xs">
                        <div className="font-bold text-slate-900">
                          ATS Serviços Especiais & JLL Facilities
                        </div>
                        <div className="text-slate-600 mt-0.5 leading-snug">
                          Oficial de Manutenção Geral & Predial em edifícios corporativos A+.
                        </div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 shrink-0 mt-0.5">
                        <Code2 className="w-4 h-4" />
                      </div>
                      <div className="text-xs">
                        <div className="font-bold text-slate-900">
                          Desenvolvimento Full-Stack
                        </div>
                        <div className="text-slate-600 mt-0.5 leading-snug">
                          TypeScript, Next.js, Node.js, REST APIs e bancos de dados modernos.
                        </div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0 mt-0.5">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div className="text-xs">
                        <div className="font-bold text-slate-900">
                          Certificações NR-10 SEP, NR-35 & LOTO
                        </div>
                        <div className="text-slate-600 mt-0.5 leading-snug">
                          Segurança operacional rigorosa e zero acidentes em campo.
                        </div>
                      </div>
                    </div>
                  </>
                )}
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
        <div className="pt-6 border-t border-slate-200 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
            <div className="text-2xl sm:text-3xl font-black text-amber-600 tracking-tight">
              {currentTrack === 'developer' ? 'Next.js 15' : 'ATS & JLL'}
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
              {currentTrack === 'developer' ? 'Stack Principal Web' : 'Facilities Corporativo'}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
            <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {currentTrack === 'developer' ? 'TypeScript' : '60+ Quadros'}
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
              {currentTrack === 'developer' ? 'Tipagem Estrita & Node' : 'QGBT & Comandos'}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
            <div className="text-2xl sm:text-3xl font-black text-emerald-600 tracking-tight">
              {currentTrack === 'developer' ? 'REST & SQL' : 'Zero'}
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
              {currentTrack === 'developer' ? 'APIs & Bancos de Dados' : 'Acidentes de Trabalho'}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
            <div className="text-2xl sm:text-3xl font-black text-blue-600 tracking-tight">
              {currentTrack === 'developer' ? '100% Code' : 'NR-10 / 35'}
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
              {currentTrack === 'developer' ? 'Testes & Clean Arch' : 'Certificações Ativas'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
