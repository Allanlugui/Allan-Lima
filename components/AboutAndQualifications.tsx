'use client';

import React from 'react';
import {
  GraduationCap,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Lock,
  Building,
  ShieldAlert,
  Award,
  Sliders,
  Check,
  Code2,
  Terminal,
  Server,
  Database,
  Laptop,
} from 'lucide-react';
import {
  EDUCATION,
  DEVELOPER_EDUCATION,
  DEVELOPER_CERTIFICATIONS,
  DEVELOPER_SKILLS_MATRIX,
  EducationItem,
  I18N_STRINGS,
  Language,
} from '@/lib/portfolio-data';
import { CertificationItem, SkillCategory } from '@/lib/portfolio-store';
import { TrackType } from '@/components/Hero';

interface AboutProps {
  currentLang: Language;
  currentTrack?: TrackType;
  certifications?: CertificationItem[];
  skillsMatrix?: SkillCategory[];
  education?: EducationItem[];
}

export function AboutAndQualifications({
  currentLang,
  currentTrack = 'all',
  certifications,
  skillsMatrix,
  education,
}: AboutProps) {
  const t = I18N_STRINGS[currentLang];

  const educationList =
    currentTrack === 'developer'
      ? DEVELOPER_EDUCATION
      : education && education.length > 0
      ? education
      : EDUCATION;

  const getCertIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-amber-600" />;
      case 'Building':
        return <Building className="w-5 h-5 text-blue-600" />;
      case 'Lock':
        return <Lock className="w-5 h-5 text-emerald-600" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-blue-600" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-indigo-600" />;
      case 'Server':
        return <Server className="w-5 h-5 text-purple-600" />;
      case 'Database':
        return <Database className="w-5 h-5 text-emerald-600" />;
      case 'Laptop':
        return <Laptop className="w-5 h-5 text-blue-600" />;
      case 'Zap':
      default:
        return <Zap className="w-5 h-5 text-blue-600" />;
    }
  };

  const defaultMaintenanceCerts: CertificationItem[] = [
    {
      id: 'nr10',
      name: 'NR-10 - Segurança em Instalações e Serviços em Eletricidade',
      code: 'NR-10 / SEP',
      authority: 'MTE / Normas Regulamentadoras',
      validity: { pt: 'Reciclagem Periódica Atualizada', en: 'Certified & Current', es: 'Certificado al Día' },
      description: {
        pt: 'Habilitação completa para intervenções seguras em baixa e média tensão, desenergização, bloqueio LOTO, aterramento temporário e EPIs/EPCs dielétricos.',
        en: 'Complete qualification for safe interventions in low/medium voltage, de-energization, LOTO lockout, temporary grounding, and certified dielectric PPE.',
        es: 'Habilitación integral para maniobras seguras en baja y media tensión, bloqueo LOTO, puesta a tierra y EPIs dieléctricos.',
      },
      iconName: 'ShieldAlert',
    },
    {
      id: 'nr35',
      name: 'NR-35 - Trabalho em Altura',
      code: 'NR-35',
      authority: 'MTE / Normas Regulamentadoras',
      validity: { pt: 'Ativo e Habilitado', en: 'Certified & Active', es: 'Activo y Habilitado' },
      description: {
        pt: 'Capacitação para execução de serviços de infraestrutura elétrica e civil em altura superior a 2 metros, ancoragem, linhas de vida e inspeção de talabartes.',
        en: 'Trained for high-altitude electrical and civil infrastructure repairs above 2m, anchor point calculation, lifelines, and harness inspection.',
        es: 'Capacitación para tareas eléctricas y civiles a más de 2 metros de altura, anclajes y uso de arnés de seguridad.',
      },
      iconName: 'Building',
    },
    {
      id: 'loto',
      name: 'LOTO - Lockout & Tagout (Bloqueio de Energias Perigosas)',
      code: 'LOTO / OSHA Protocol',
      authority: 'Padrão Corporativo de Facilities',
      validity: { pt: 'Procedimento Operacional Padrão', en: 'Standard Operating Procedure', es: 'Procedimiento Estándar' },
      description: {
        pt: 'Aplicação de cadeados, garras de bloqueio e etiquetas de aviso antes de qualquer manutenção preventiva ou corretiva.',
        en: 'Application of safety padlocks, multi-lock hasps, and warning tags before executing any preventive or corrective task.',
        es: 'Aplicación de candados y etiquetas de advertencia antes de cualquier maniobra preventiva o correctiva.',
      },
      iconName: 'Lock',
    },
    {
      id: 'eletricista_residencial',
      name: 'Eletricista Instalador Residencial & Normas (NR-10, NR-35, NR-18, NR-20, NR-12)',
      code: 'Certificação Profissional',
      authority: 'Formação Profissionalizante & Normas Regulamentadoras',
      validity: { pt: 'Certificações Ativas', en: 'Certified & Active', es: 'Certificado y Activo' },
      description: {
        pt: 'Instalações elétricas residenciais e prediais, dimensionamento de circuitos, montagem de quadros, comandos e rigoroso cumprimento de normas regulamentadoras.',
        en: 'Residential and building electrical installations, circuit sizing, panel assembly, control circuits, and strict adherence to safety regulations.',
        es: 'Instalaciones eléctricas residenciales y edilicias, dimensionamiento, montaje de tableros y cumplimiento de normativas.',
      },
      iconName: 'Zap',
    },
  ];

  const certList: CertificationItem[] =
    currentTrack === 'developer'
      ? DEVELOPER_CERTIFICATIONS
      : certifications && certifications.length > 0
      ? certifications
      : defaultMaintenanceCerts;

  const currentSkills =
    currentTrack === 'developer'
      ? DEVELOPER_SKILLS_MATRIX.map((g) => ({
          id: g.id,
          title: g.category,
          skills: g.skills,
        }))
      : (skillsMatrix || []);

  return (
    <section id="about" className="py-16 md:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200 mb-3">
            {currentTrack === 'developer' ? <Code2 className="w-3.5 h-3.5" /> : <Award className="w-3.5 h-3.5" />}
            <span>
              {currentTrack === 'developer'
                ? currentLang === 'pt'
                  ? 'Qualificações Técnicas em Software'
                  : currentLang === 'es'
                  ? 'Cualificaciones Técnicas en Software'
                  : 'Technical Software Qualifications'
                : currentLang === 'pt'
                ? 'Qualificação & Formação'
                : currentLang === 'es'
                ? 'Cualificación y Formación'
                : 'Qualifications & Education'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {currentTrack === 'developer'
              ? currentLang === 'pt'
                ? 'Formação Acadêmica, Certificações & Stack Tecnológica'
                : currentLang === 'es'
                ? 'Educación, Certificaciones y Stack Tecnológico'
                : 'Education, Certifications & Tech Stack'
              : t.about.sectionTitle}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-2">
            {currentTrack === 'developer'
              ? currentLang === 'pt'
                ? 'Competência técnica em engenharia de software full-stack, certificações em Next.js/React, TypeScript, APIs RESTful e computação moderna.'
                : currentLang === 'es'
                ? 'Competencia técnica en ingeniería de software full-stack, Next.js, React, TypeScript y arquitecturas web modernas.'
                : 'Technical competence in full-stack software engineering, Next.js, React, TypeScript, and modern scalable web architecture.'
              : t.about.sectionSubtitle}
          </p>
        </div>

        {/* Education & Certifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Education Card (Col 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 mb-2">
              <GraduationCap className="w-5 h-5 text-blue-600" />
              <span>
                {currentTrack === 'developer'
                  ? currentLang === 'pt'
                    ? 'Formação & Especializações em TI'
                    : currentLang === 'es'
                    ? 'Formación y Especialización en TI'
                    : 'IT Education & Specializations'
                  : currentLang === 'pt'
                  ? 'Formação & Cursos Técnicos'
                  : currentLang === 'es'
                  ? 'Educación y Cursos Técnicos'
                  : 'Education & Technical Courses'}
              </span>
            </h3>

            <div className="space-y-3.5">
              {educationList.map((edu, eIdx) => (
                <div
                  key={edu.id}
                  className={`p-4 sm:p-5 rounded-2xl bg-slate-50 border ${
                    eIdx === 0 ? 'border-blue-300 bg-blue-50/40 shadow-xs' : 'border-slate-200'
                  } transition-all`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className={`p-2 rounded-xl ${eIdx === 0 ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-700'}`}>
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-extrabold text-slate-900 leading-tight">
                          {edu.degree[currentLang] || edu.degree.pt}
                        </h4>
                        <p className="text-[11px] font-semibold text-blue-700 mt-0.5">
                          {edu.institution}
                        </p>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-600 shrink-0">
                      {edu.year}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mt-2">
                    {edu.description[currentLang] || edu.description.pt}
                  </p>

                  {edu.topics && (edu.topics[currentLang] || edu.topics.pt) && (
                    <div className="mt-3 pt-2.5 border-t border-slate-200/80 space-y-1.5">
                      {(edu.topics[currentLang] || edu.topics.pt).slice(0, 4).map((topic, tIdx) => (
                        <div key={tIdx} className="flex items-start gap-1.5 text-[11px] text-slate-700">
                          <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications (Col 6-12) */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 mb-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span>
                {currentTrack === 'developer'
                  ? currentLang === 'pt'
                    ? 'Habilitações & Certificados Técnicos'
                    : currentLang === 'es'
                    ? 'Habilitaciones y Certificados Técnicos'
                    : 'Technical Certifications & Badges'
                  : t.about.certificationsTitle}
              </span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certList.map((cert) => (
                <div
                  key={cert.id}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:bg-white transition-all flex flex-col justify-between shadow-2xs group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="p-2 rounded-lg bg-white border border-slate-200 shadow-2xs">
                        {getCertIcon(cert.iconName)}
                      </div>
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                        {cert.validity[currentLang]}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                      {cert.name}
                    </h4>
                    <div className="text-[11px] font-mono text-slate-500 mt-0.5">
                      {cert.code} • {cert.authority}
                    </div>

                    <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                      {cert.description[currentLang]}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>
                      {currentTrack === 'developer'
                        ? currentLang === 'pt'
                          ? 'Práticas Alinhadas à Engenharia Moderna'
                          : currentLang === 'es'
                          ? 'Prácticas Alineadas a la Ingeniería Moderna'
                          : 'Modern Engineering Standards Compliant'
                        : currentLang === 'pt'
                        ? 'Conforme Normas Regulamentadoras'
                        : currentLang === 'es'
                        ? 'Conforme Normativa Laboral'
                        : 'Labor Standard Compliant'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Skills Matrix */}
        {currentSkills.length > 0 && (
          <div className="pt-6">
            <div className="flex items-center gap-2 mb-6">
              <Sliders className="w-5 h-5 text-blue-600" />
              <h3 className="text-xl font-extrabold text-slate-900">
                {currentTrack === 'developer'
                  ? currentLang === 'pt'
                    ? 'Matriz de Habilidades & Proficiência Técnica'
                    : currentLang === 'es'
                    ? 'Matriz de Habilidades y Competencias Técnicas'
                    : 'Software Skills & Proficiency Matrix'
                  : t.about.skillsTitle}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {currentSkills.map((group) => (
                <div
                  key={group.id}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between shadow-2xs"
                >
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-blue-700 border-b border-slate-200 pb-2 mb-4">
                      {group.title[currentLang] || group.title.pt}
                    </h4>

                    <div className="space-y-3.5">
                      {group.skills.map((skill, sIdx) => (
                        <div key={sIdx}>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-slate-800 font-semibold">{skill.name}</span>
                            <span className="text-slate-500 font-mono text-[11px]">{skill.level}%</span>
                          </div>
                          <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-blue-600 rounded-full transition-all"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Philosophy Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-md relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            {currentTrack === 'developer' ? (
              <Code2 className="w-48 h-48 text-blue-400" />
            ) : (
              <ShieldCheck className="w-48 h-48 text-amber-400" />
            )}
          </div>

          <div className="relative max-w-3xl">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
              {currentTrack === 'developer' ? <Terminal className="w-4 h-4 text-blue-400" /> : <ShieldCheck className="w-4 h-4" />}
              <span className={currentTrack === 'developer' ? 'text-blue-400' : 'text-amber-400'}>
                {currentTrack === 'developer'
                  ? currentLang === 'pt'
                    ? 'Princípios de Desenvolvimento'
                    : currentLang === 'es'
                    ? 'Principios de Desarrollo'
                    : 'Engineering Philosophy'
                  : t.about.philosophyTitle}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white leading-snug">
              {currentTrack === 'developer'
                ? currentLang === 'pt'
                  ? '"Código limpo, arquitetura desacoplada, alta performance e foco total na experiência do usuário."'
                  : currentLang === 'es'
                  ? '"Código limpio, arquitectura desacoplada, alto rendimiento y enfoque en la experiencia de usuario."'
                  : '"Clean code, decoupled architecture, top-tier performance, and relentless focus on user experience."'
                : currentLang === 'pt'
                ? '"Segurança em primeiro lugar e disponibilidade contínua da infraestrutura."'
                : currentLang === 'es'
                ? '"La seguridad como máxima prioridad y la disponibilidad continua."'
                : '"Safety first, zero compromises, and 100% operational continuity."'}
            </h3>

            <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
              {currentTrack === 'developer'
                ? currentLang === 'pt'
                  ? 'Compromisso com soluções escaláveis, documentadas, orientadas a boas práticas e entrega contínua com máxima estabilidade em produção.'
                  : currentLang === 'es'
                  ? 'Compromiso con soluciones escalables, documentadas, buenas prácticas y despliegue continuo con alta estabilidad.'
                  : 'Committed to building scalable, documented, and resilient applications with automated deployment and reliable uptime.'
                : t.about.philosophyText}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
