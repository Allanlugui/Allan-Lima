'use client';

import React, { useState } from 'react';
import {
  ShieldCheck,
  FileDown,
  Globe,
  Mail,
  Lock,
  UserCheck,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { PERSONAL_INFO, I18N_STRINGS, Language } from '@/lib/portfolio-data';
import { TrackType } from '@/components/Hero';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  currentTrack?: TrackType;
  onTrackChange?: (track: TrackType) => void;
  onOpenResumeModal: () => void;
  onOpenAdminLogin: () => void;
  isAdminLoggedIn?: boolean;
}

export function Header({
  currentLang,
  onLanguageChange,
  currentTrack = 'all',
  onOpenResumeModal,
  onOpenAdminLogin,
  isAdminLoggedIn = false,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = I18N_STRINGS[currentLang];

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'pt', label: 'Português', flag: 'BR' },
    { code: 'en', label: 'English', flag: 'EN' },
    { code: 'es', label: 'Español', flag: 'ES' },
  ];

  const navLinks = [
    { href: '#summary', label: t.nav.summary },
    { href: '#about', label: t.nav.about },
    { href: '#experience', label: currentLang === 'pt' ? 'Experiência' : currentLang === 'es' ? 'Experiencia' : 'Experience' },
    { href: '#field-gallery', label: currentLang === 'pt' ? 'Fotos' : currentLang === 'es' ? 'Fotos' : 'Field Photos' },
    { href: '#projects', label: currentLang === 'pt' ? 'Projetos' : currentLang === 'es' ? 'Proyectos' : 'Projects' },
    { href: '#worklogs', label: currentLang === 'pt' ? 'Diário' : currentLang === 'es' ? 'Diario' : 'Work Logs' },
    { href: '#diagnostic', label: currentLang === 'pt' ? 'Diagnóstico' : currentLang === 'es' ? 'Diagnóstico' : 'Diagnostic' },
    { href: '#references', label: currentLang === 'pt' ? 'Referências' : currentLang === 'es' ? 'Referencias' : 'References' },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs transition-colors">
      {/* Top micro banner for corporate availability */}
      <div className="bg-slate-900 text-slate-100 text-xs px-4 py-1.5 border-b border-slate-800">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <span className="flex h-2 w-2 relative shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-slate-200 font-semibold tracking-tight text-[11px] sm:text-xs truncate">
              {PERSONAL_INFO.availability[currentLang]}
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-3.5 text-slate-300 font-medium text-xs shrink-0">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-blue-400 flex items-center gap-1.5 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>{PERSONAL_INFO.email}</span>
            </a>
            <span className="text-slate-700">|</span>
            <span className="flex items-center gap-1.5 font-semibold text-slate-200">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>NR-10 • NR-35 • LOTO</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 gap-3">
          {/* Brand / Name */}
          <a href="#summary" className="flex items-center gap-2.5 min-w-0 group shrink-0">
            <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center text-white font-black text-xs sm:text-sm shadow-xs transition-colors shrink-0 ${
              currentTrack === 'maintenance' ? 'bg-amber-600' : 'bg-blue-600'
            }`}>
              AL
            </div>
            <div className="min-w-0">
              <div className="text-slate-900 font-extrabold text-xs sm:text-sm tracking-tight truncate group-hover:text-blue-600 transition-colors">
                Allan Luiz
              </div>
              <div className="text-[10px] text-slate-500 font-medium truncate flex items-center gap-1">
                <span className={`inline-block w-1.5 h-1.5 rounded-full shrink-0 ${
                  currentTrack === 'maintenance' ? 'bg-amber-500' : 'bg-blue-600'
                }`}></span>
                <span className="truncate hidden sm:inline">
                  {currentTrack === 'maintenance'
                    ? 'Eletrotécnica & Facilities'
                    : currentTrack === 'developer'
                    ? 'Full-Stack Software'
                    : 'Manutenção & Full-Stack'}
                </span>
                <span className="truncate sm:hidden">Portfólio</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-2.5 py-1.5 text-xs font-semibold text-slate-600 hover:text-blue-600 hover:bg-slate-100/80 rounded-lg transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            {/* Language Selector */}
            <div className="flex items-center bg-slate-100 border border-slate-200/80 rounded-lg p-0.5 h-9">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => onLanguageChange(l.code)}
                  className={`px-2 h-7.5 text-[11px] font-bold rounded-md flex items-center justify-center transition-all cursor-pointer ${
                    currentLang === l.code
                      ? 'bg-white text-blue-700 shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title={l.label}
                >
                  <span>{l.flag}</span>
                </button>
              ))}
            </div>

            {/* Admin CMS Access Button */}
            <button
              onClick={onOpenAdminLogin}
              title="Acesso Administrativo (CMS)"
              className={`h-9 px-3 rounded-lg border text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shrink-0 ${
                isAdminLoggedIn
                  ? 'bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100'
                  : 'bg-white border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {isAdminLoggedIn ? (
                <UserCheck className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              ) : (
                <Lock className="w-3.5 h-3.5 text-slate-500 shrink-0" />
              )}
              <span className="text-xs">{isAdminLoggedIn ? 'Painel CMS' : 'Área do Dono'}</span>
            </button>

            {/* Resume Download CTA */}
            <button
              onClick={onOpenResumeModal}
              id="header-download-cv-btn"
              className="h-9 inline-flex items-center gap-1.5 px-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-lg shadow-xs hover:shadow transition-all cursor-pointer shrink-0"
            >
              <FileDown className="w-3.5 h-3.5 shrink-0" />
              <span>{t.nav.downloadCv}</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex sm:hidden items-center gap-1.5 shrink-0">
            <button
              onClick={onOpenAdminLogin}
              className="h-8 w-8 flex items-center justify-center text-xs font-bold text-slate-700 bg-slate-100 border border-slate-200 rounded-lg"
              title="Acesso Admin"
            >
              <Lock className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => {
                const nextLang: Language = currentLang === 'pt' ? 'en' : currentLang === 'en' ? 'es' : 'pt';
                onLanguageChange(nextLang);
              }}
              className="h-8 px-2 text-xs font-bold text-blue-600 bg-blue-50 border border-blue-200 rounded-lg flex items-center gap-1"
              title="Mudar idioma"
            >
              <Globe className="w-3.5 h-3.5" />
              <span className="uppercase">{currentLang}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="h-8 flex items-center gap-1 px-2.5 text-xs font-bold text-slate-700 bg-white hover:text-blue-600 hover:bg-slate-50 border border-slate-200 rounded-lg transition-all shadow-2xs cursor-pointer"
              aria-label="Toggle menu"
            >
              <span>Menu</span>
              {mobileMenuOpen ? <ChevronUp className="w-3.5 h-3.5 text-blue-600" /> : <ChevronDown className="w-3.5 h-3.5 text-blue-600" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-5 space-y-3 shadow-lg">
          {/* Languages */}
          <div className="grid grid-cols-3 gap-1 p-1 bg-slate-100 border border-slate-200 rounded-xl">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => {
                  onLanguageChange(l.code);
                  setMobileMenuOpen(false);
                }}
                className={`py-1.5 text-xs font-bold rounded-lg flex items-center justify-center gap-1 ${
                  currentLang === l.code
                    ? 'bg-white text-blue-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>{l.flag}</span>
                <span>{l.label}</span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-1 pt-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-600 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="w-full flex items-center justify-center gap-2 h-10 bg-blue-600 text-white font-bold text-xs rounded-xl shadow-xs"
            >
              <FileDown className="w-4 h-4" />
              <span>{t.nav.downloadCv}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
