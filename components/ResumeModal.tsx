'use client';

import React, { useState } from 'react';
import {
  X,
  Printer,
  FileDown,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  ShieldCheck,
  Check,
  Building2,
  GraduationCap,
  Award,
  Zap,
  Code2,
  Layers,
} from 'lucide-react';
import {
  EDUCATION,
  I18N_STRINGS,
  Language,
} from '@/lib/portfolio-data';
import { PersonalInfo, ExperienceItem, CertificationItem } from '@/lib/portfolio-store';
import { TrackType } from '@/components/Hero';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  initialTrack?: TrackType;
  personalInfo?: PersonalInfo;
  experiences?: ExperienceItem[];
  certifications?: CertificationItem[];
}

export function ResumeModal({
  isOpen,
  onClose,
  currentLang,
  initialTrack = 'all',
  personalInfo,
  experiences,
  certifications,
}: ResumeModalProps) {
  const [selectedFormat, setSelectedFormat] = useState<TrackType>(initialTrack);
  const t = I18N_STRINGS[currentLang];

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const name = personalInfo?.name || 'Allan Luiz Silveira Lima';
  const email = personalInfo?.email || 'jallanluiz@gmail.com';
  const location = personalInfo?.location || 'São Paulo - SP, Brasil';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200 overflow-y-auto">
      <div
        className="relative w-full max-w-4xl max-h-[94vh] bg-white border border-slate-200 rounded-2xl shadow-2xl flex flex-col overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar (Hidden on print) */}
        <div className="p-4 sm:px-6 bg-slate-900 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 print:hidden">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-xl bg-blue-600 text-white shadow-xs">
              <FileDown className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-sm font-bold text-white">
                {t.resume.modalTitle}
              </h3>
              <p className="text-xs text-slate-400">
                {name} • Formato Oficial Impresso / PDF
              </p>
            </div>
          </div>

          {/* Format Selector Pills & Actions */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Format toggle */}
            <div className="flex items-center bg-slate-800 p-0.5 rounded-lg border border-slate-700 text-xs font-bold">
              <button
                onClick={() => setSelectedFormat('maintenance')}
                className={`px-2.5 py-1 rounded-md transition-all cursor-pointer flex items-center gap-1 ${
                  selectedFormat === 'maintenance'
                    ? 'bg-amber-600 text-white'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Zap className="w-3 h-3" />
                <span>CV Manutenção</span>
              </button>

              <button
                onClick={() => setSelectedFormat('developer')}
                className={`px-2.5 py-1 rounded-md transition-all cursor-pointer flex items-center gap-1 ${
                  selectedFormat === 'developer'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Code2 className="w-3 h-3" />
                <span>CV Developer</span>
              </button>

              <button
                onClick={() => setSelectedFormat('all')}
                className={`px-2.5 py-1 rounded-md transition-all cursor-pointer flex items-center gap-1 ${
                  selectedFormat === 'all'
                    ? 'bg-slate-700 text-white'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Layers className="w-3 h-3" />
                <span>Completo</span>
              </button>
            </div>

            <button
              onClick={handlePrint}
              id="modal-print-btn"
              className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg flex items-center gap-1.5 shadow-xs transition-all cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{t.resume.printAction}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Document Body */}
        <div className="overflow-y-auto p-6 sm:p-10 bg-white text-slate-900 font-sans print:p-0 print:m-0 print:text-black">
          
          {/* Resume Header */}
          <div className="border-b-2 border-slate-900 pb-5 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {name}
                </h1>
                <h2 className="text-base sm:text-lg font-bold text-blue-700 mt-0.5">
                  {selectedFormat === 'maintenance'
                    ? 'Oficial de Manutenção Predial & Eletricista Instalador Residencial'
                    : selectedFormat === 'developer'
                    ? 'Desenvolvedor Full-Stack (Next.js, TypeScript, Node.js & REST APIs)'
                    : 'Oficial de Manutenção Predial & Eletricista | Desenvolvedor Full-Stack'}
                </h2>
                <div className="text-xs font-semibold text-slate-700 mt-1">
                  {selectedFormat === 'developer'
                    ? 'Transição de Carreira Técnica • Foco em Engenharia Web & APIs Robustas'
                    : 'Atuação Comprovada na ATS Serviços Especiais e JLL (Jones Lang LaSalle)'}
                </div>
              </div>

              {/* Contact Block */}
              <div className="text-xs text-slate-700 space-y-1 sm:text-right font-medium">
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-blue-600" />
                  <a href={`mailto:${email}`} className="hover:text-blue-600">{email}</a>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-blue-600" />
                  <span>{personalInfo?.phone || '(11) 91577-7803'}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Linkedin className="w-3.5 h-3.5 text-blue-600" />
                  <a
                    href={personalInfo?.linkedin || 'https://www.linkedin.com/in/allan-ls-lima'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:underline"
                  >
                    linkedin.com/in/allan-ls-lima
                  </a>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-600" />
                  <span>{location}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="font-bold text-emerald-800">
                    {selectedFormat === 'developer' ? 'Clean Code • Git • CI/CD' : 'NR-10 SEP • NR-35 • LOTO • NR-20'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-6">
            <h3 className="text-xs font-black uppercase tracking-wider text-blue-800 border-b border-slate-300 pb-1 mb-2">
              {t.resume.summaryTitle}
            </h3>
            <p className="text-xs text-slate-800 leading-relaxed text-justify">
              {selectedFormat === 'maintenance'
                ? 'Profissional com sólida formação técnica em Eletricista Instalador Residencial e certificações de segurança ativas (NR-10, NR-10 SEP, NR-35, NR-20, NR-12, NR-18, NR-6 e LOTO). Experiência comprovada na ATS Serviços Especiais e JLL (Jones Lang LaSalle), atuando na operação, manutenção preventiva e corretiva de grupos geradores diesel (GMG), sistemas no-break/UPS, quadros gerais de baixa tensão (QGBT), comandos de motores, termografia infravermelha preditiva, sistemas hidráulicos, civil e ar-condicionado.'
                : selectedFormat === 'developer'
                ? 'Desenvolvedor Full-Stack com sólida capacidade analítica e raciocínio estruturado, especializado no desenvolvimento de aplicações modernas com TypeScript, Next.js (App Router, Server Actions), React, Node.js, REST APIs, bancos de dados PostgreSQL/Firestore e Tailwind CSS. Focado em padrões arquiteturais limpos, alta performance, segurança de autenticação e deploy em nuvem.'
                : personalInfo?.bio[currentLang] || personalInfo?.bio.pt}
            </p>
          </div>

          {/* Experience Section */}
          <div className="mb-6">
            <h3 className="text-xs font-black uppercase tracking-wider text-blue-800 border-b border-slate-300 pb-1 mb-3">
              {t.resume.experienceTitle}
            </h3>

            <div className="space-y-4">
              {(experiences || []).map((exp) => (
                <div key={exp.id} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                    <div>
                      <span className="font-extrabold text-slate-900 text-sm">
                        {exp.company}
                      </span>{' '}
                      - <span className="font-bold text-blue-700">{exp.role[currentLang] || exp.role.pt}</span>
                    </div>
                    <div className="font-semibold text-slate-600">
                      {exp.period[currentLang] || exp.period.pt} | {exp.location}
                    </div>
                  </div>

                  <p className="text-xs text-slate-700 leading-normal">
                    {exp.description[currentLang] || exp.description.pt}
                  </p>

                  <div className="space-y-1 pt-1">
                    {(exp.achievements[currentLang] || exp.achievements.pt || []).slice(0, 4).map((ach, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-1.5 text-xs text-slate-700">
                        <span className="font-bold text-blue-600">•</span>
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications (2 Cols) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            
            {/* Education */}
            <div>
              <h3 className="text-xs font-black uppercase tracking-wider text-blue-800 border-b border-slate-300 pb-1 mb-2">
                {t.resume.educationTitle}
              </h3>
              <div className="space-y-3 text-xs text-slate-800">
                {EDUCATION.map((edu) => (
                  <div key={edu.id} className="border-b border-slate-100 pb-2 last:border-0 last:pb-0">
                    <div className="font-bold text-slate-900">
                      {edu.degree[currentLang]}
                    </div>
                    <div className="text-slate-600 font-medium text-[11px]">
                      {edu.institution} • {edu.year}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xs font-black uppercase tracking-wider text-blue-800 border-b border-slate-300 pb-1 mb-2">
                {selectedFormat === 'developer' ? 'Certificações & Habilidades Técnicas' : t.resume.certificationsTitle}
              </h3>
              <div className="space-y-2 text-xs text-slate-800">
                {(certifications || []).map((cert) => (
                  <div key={cert.id} className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900">{cert.name}</span>{' '}
                      <span className="text-slate-500">({cert.code})</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Core Technical Skills Matrix */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-wider text-blue-800 border-b border-slate-300 pb-1 mb-2">
              {t.resume.technicalSkillsTitle}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-800">
              <div>
                <span className="font-bold">Sistemas Elétricos:</span>{' '}
                <span className="text-slate-700">
                  QGBT, Grupos Geradores (GMG), No-breaks (UPS), Chaves QTA/ATS, Barramentos, Motores e Comandos.
                </span>
              </div>
              <div>
                <span className="font-bold">Manutenção & Predial:</span>{' '}
                <span className="text-slate-700">
                  Termografia Fluke, Bombas de Recalque, Válvulas Bermad, PMOC Climatização, Pintura Epóxi, Drywall.
                </span>
              </div>
              <div>
                <span className="font-bold">Full-Stack & TI:</span>{' '}
                <span className="text-slate-700">
                  TypeScript, Next.js 15, React 19, Node.js, Express, REST APIs, PostgreSQL, Firestore, Git.
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
