'use client';

import React from 'react';
import {
  Building2,
  Calendar,
  MapPin,
  CheckCircle2,
  Briefcase,
  Layers,
  Clock,
  Activity,
  Code2,
  Terminal,
  Sparkles,
} from 'lucide-react';
import { I18N_STRINGS, Language, DEVELOPER_EXPERIENCES, EXPERIENCES } from '@/lib/portfolio-data';
import { ExperienceItem } from '@/lib/portfolio-store';
import { TrackType } from '@/components/Hero';

interface ExperienceProps {
  currentLang: Language;
  currentTrack?: TrackType;
  experiences?: ExperienceItem[];
}

export function ExperienceTimeline({
  currentLang,
  currentTrack = 'all',
  experiences,
}: ExperienceProps) {
  const t = I18N_STRINGS[currentLang];

  // Pick dataset according to currentTrack
  const expList =
    currentTrack === 'developer'
      ? DEVELOPER_EXPERIENCES
      : currentTrack === 'maintenance'
      ? (experiences || EXPERIENCES).filter((e) => !e.id.startsWith('dev_'))
      : (experiences || EXPERIENCES);

  return (
    <section id="experience" className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200 mb-3">
            {currentTrack === 'developer' ? <Code2 className="w-3.5 h-3.5" /> : <Briefcase className="w-3.5 h-3.5" />}
            <span>
              {currentTrack === 'developer'
                ? currentLang === 'pt'
                  ? 'Trajetória em Desenvolvimento de Software'
                  : currentLang === 'es'
                  ? 'Trayectoria en Desarrollo de Software'
                  : 'Software Engineering Experience'
                : currentLang === 'pt'
                ? 'Histórico Profissional'
                : currentLang === 'es'
                ? 'Historial Profesional'
                : 'Work Experience'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {currentTrack === 'developer'
              ? currentLang === 'pt'
                ? 'Experiência em Desenvolvimento Full-Stack & Sistemas Web'
                : currentLang === 'es'
                ? 'Experiencia en Desarrollo Full-Stack y Sistemas Web'
                : 'Full-Stack Development & Web Systems Experience'
              : t.experience.sectionTitle}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-2">
            {currentTrack === 'developer'
              ? currentLang === 'pt'
                ? 'Histórico prático em arquitetura web, desenvolvimento de plataformas SaaS, ERPs operacionais, APIs RESTful e interfaces modernas de alta performance.'
                : currentLang === 'es'
                ? 'Historial práctico en arquitectura web, plataformas SaaS, ERPs, APIs RESTful e interfaces modernas.'
                : 'Practical track record in web architecture, SaaS platforms, ERPs, RESTful APIs, and modern high-performance interfaces.'
              : t.experience.sectionSubtitle}
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {expList.map((exp, idx) => (
            <div
              key={exp.id}
              className={`relative rounded-2xl p-6 sm:p-8 bg-white border ${
                idx === 0
                  ? currentTrack === 'developer'
                    ? 'border-blue-300 shadow-md ring-1 ring-blue-100'
                    : 'border-blue-300 shadow-md'
                  : 'border-slate-200 shadow-2xs'
              } transition-all`}
            >
              {/* Highlight ribbon */}
              {idx === 0 && (
                <div className="absolute top-0 right-6 -translate-y-1/2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-600 text-white font-extrabold text-xs uppercase tracking-wider shadow-xs">
                    {currentTrack === 'developer' ? <Code2 className="w-3.5 h-3.5" /> : <Activity className="w-3.5 h-3.5" />}
                    <span>
                      {currentTrack === 'developer'
                        ? currentLang === 'pt'
                          ? 'Atuação Full-Stack Ativa'
                          : currentLang === 'es'
                          ? 'Desarrollo Full-Stack Activo'
                          : 'Active Full-Stack Role'
                        : currentLang === 'pt'
                        ? 'Atuação Chave JLL'
                        : currentLang === 'es'
                        ? 'Experiencia Clave JLL'
                        : 'Key JLL Experience'}
                    </span>
                  </span>
                </div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Meta details (Col 1-4) */}
                <div className="lg:col-span-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-blue-50 text-blue-700 border border-blue-200 shrink-0">
                      {currentTrack === 'developer' ? <Terminal className="w-6 h-6" /> : <Building2 className="w-6 h-6" />}
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold text-slate-900 leading-tight">
                        {exp.company}
                      </h3>
                      <p className="text-xs text-blue-700 font-bold tracking-wide mt-0.5">
                        {exp.role[currentLang] || exp.role.pt}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                      <span className="font-bold text-slate-800">{exp.period[currentLang] || exp.period.pt}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>{exp.location}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Layers className="w-4 h-4 text-slate-400 shrink-0" />
                      <span className="text-slate-500">{exp.duration[currentLang] || exp.duration.pt}</span>
                    </div>
                  </div>

                  {/* Skills tags */}
                  <div className="pt-3">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                      {t.experience.technologiesUsed}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-100 text-slate-700 border border-slate-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Scope & Detailed Achievements (Col 5-12) */}
                <div className="lg:col-span-8 space-y-4 lg:pl-6 lg:border-l lg:border-slate-100">
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    {exp.description[currentLang] || exp.description.pt}
                  </p>

                  <div className="pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-600" />
                      <span>
                        {currentTrack === 'developer'
                          ? currentLang === 'pt'
                            ? 'Principais Entregas & Soluções Desenvolvidas'
                            : currentLang === 'es'
                            ? 'Principales Entregas y Soluciones Desarrolladas'
                            : 'Key Deliverables & Developed Solutions'
                          : t.experience.keyResponsibilities}
                      </span>
                    </h4>

                    <div className="space-y-2">
                      {(exp.achievements[currentLang] || exp.achievements.pt || []).map((item, aIdx) => (
                        <div
                          key={aIdx}
                          className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-700 leading-relaxed hover:border-slate-300 transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-2"></span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
