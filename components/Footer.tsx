'use client';

import React from 'react';
import { ArrowUp, ShieldCheck, Zap, Mail, Linkedin, Lock } from 'lucide-react';
import { I18N_STRINGS, Language } from '@/lib/portfolio-data';
import { PersonalInfo } from '@/lib/portfolio-store';
import Link from 'next/link';

interface FooterProps {
  currentLang: Language;
  personalInfo?: PersonalInfo;
  onOpenAdminLogin?: () => void;
}

export function Footer({ currentLang, personalInfo, onOpenAdminLogin }: FooterProps) {
  const t = I18N_STRINGS[currentLang];
  const name = personalInfo?.name || 'Allan Luiz Silveira Lima';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200 text-slate-500 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-extrabold text-base shadow-xs">
              AL
            </div>
            <div>
              <div className="text-slate-900 font-bold text-base">
                {name}
              </div>
              <div className="text-xs text-slate-500 font-medium">
                {currentLang === 'pt' ? 'Oficial de Manutenção Predial | Desenvolvedor Full-Stack' : currentLang === 'es' ? 'Oficial de Mantenimiento | Desarrollador Full-Stack' : 'Facilities Maintenance Officer | Full-Stack Developer'}
              </div>
            </div>
          </div>

          {/* Standards Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 font-mono text-[11px]">
            <span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-700 font-semibold">
              NR-10 / SEP
            </span>
            <span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-700 font-semibold">
              NR-35
            </span>
            <span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-700 font-semibold">
              NBR 5410
            </span>
            <span className="px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-700 font-semibold">
              LOTO OSHA
            </span>
            <span className="px-2.5 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 font-bold">
              JLL 1a 1m
            </span>
          </div>

          {/* Back to top & CMS link */}
          <div className="flex items-center gap-3">
            {onOpenAdminLogin && (
              <button
                onClick={onOpenAdminLogin}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200 transition-all text-xs font-semibold"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>Admin CMS</span>
              </button>
            )}

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 transition-all text-xs font-bold"
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5 text-blue-600" />
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <span>© {new Date().getFullYear()} Allan Luiz Silveira Lima. {t.footer.rights}</span>
            <span className="hidden sm:inline">•</span>
            <a
              href="https://allan-lima.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-semibold"
            >
              allan-lima.vercel.app
            </a>
          </div>
          <div className="text-slate-600 italic">
            &ldquo;{t.footer.quote}&rdquo;
          </div>
        </div>

      </div>
    </footer>
  );
}
