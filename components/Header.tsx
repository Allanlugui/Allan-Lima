'use client';

import React, { useState } from 'react';
import { ShieldCheck, FileDown, X, Globe, Mail, Lock, UserCheck, ChevronDown, ChevronUp } from 'lucide-react';
import { PERSONAL_INFO, I18N_STRINGS, Language } from '@/lib/portfolio-data';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenResumeModal: () => void;
  onOpenAdminLogin: () => void;
  isAdminLoggedIn?: boolean;
}

export function Header({
  currentLang,
  onLanguageChange,
  onOpenResumeModal,
  onOpenAdminLogin,
  isAdminLoggedIn = false,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = I18N_STRINGS[currentLang];

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'pt', label: 'Português', flag: '🇧🇷' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
  ];

  const navLinks = [
    { href: '#summary', label: t.nav.summary },
    { href: '#about', label: t.nav.about },
    { href: '#experience', label: t.nav.experience },
    { href: '#projects', label: t.nav.projects },
    { href: '#worklogs', label: currentLang === 'pt' ? 'Diário Técnico' : currentLang === 'es' ? 'Diario Técnico' : 'Work Logs' },
    { href: '#diagnostic', label: t.nav.diagnostic },
    { href: '#references', label: currentLang === 'pt' ? 'Referências' : currentLang === 'es' ? 'Referencias' : 'References' },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs transition-colors">
      {/* Top micro banner for corporate availability */}
      <div className="bg-slate-900 text-slate-100 text-xs px-4 py-1.5 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-2 max-w-7xl mx-auto w-full justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-slate-200 font-semibold tracking-tight text-[11px] sm:text-xs">
              {PERSONAL_INFO.availability[currentLang]}
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-slate-300 font-medium text-xs">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-blue-400 flex items-center gap-1 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-blue-400" /> {PERSONAL_INFO.email}
            </a>
            <span className="text-slate-700">|</span>
            <span className="flex items-center gap-1 font-semibold text-slate-200">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" /> NR-10 • NR-35 • LOTO
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand / Name */}
          <a href="#summary" className="flex items-center gap-2.5 min-w-0 group py-2">
            <div className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-xl bg-blue-600 flex items-center justify-center text-white font-extrabold text-sm sm:text-base shadow-xs group-hover:bg-blue-700 transition-colors" title="Allan Luiz - Iniciais / Logo">
              AL
            </div>
            <div className="min-w-0">
              <div className="text-slate-900 font-bold text-xs sm:text-base tracking-tight truncate group-hover:text-blue-600 transition-colors">
                Allan Luiz
              </div>
              <div className="text-[10px] sm:text-xs text-slate-500 font-medium truncate flex items-center gap-1">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></span>
                <span className="truncate">{currentLang === 'pt' ? 'Manutenção & Full-Stack' : currentLang === 'es' ? 'Mantenimiento & Full-Stack' : 'Facilities & Full-Stack'}</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-blue-600 hover:bg-slate-100/80 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs & Language Switcher */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Language Selector */}
            <div className="relative flex items-center bg-slate-100 border border-slate-200 rounded-lg p-0.5">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => onLanguageChange(l.code)}
                  className={`px-2.5 py-1 text-xs font-bold rounded-md flex items-center gap-1 transition-all ${
                    currentLang === l.code
                      ? 'bg-white text-blue-700 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                  title={l.label}
                >
                  <span>{l.flag}</span>
                  <span className="uppercase">{l.code}</span>
                </button>
              ))}
            </div>

            {/* Admin CMS Access Button */}
            <button
              onClick={onOpenAdminLogin}
              title="Acesso Administrativo (CMS)"
              className={`p-2 rounded-lg border text-xs font-bold transition-all flex items-center gap-1.5 ${
                isAdminLoggedIn
                  ? 'bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100'
                  : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {isAdminLoggedIn ? <UserCheck className="w-3.5 h-3.5 text-blue-600" /> : <Lock className="w-3.5 h-3.5" />}
              <span className="text-[11px] hidden md:inline">{isAdminLoggedIn ? 'Painel CMS' : 'Área do Dono'}</span>
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResumeModal}
              id="header-download-cv-btn"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-xs hover:shadow transition-all"
            >
              <FileDown className="w-4 h-4" />
              <span>{t.nav.downloadCv}</span>
            </button>
          </div>

          {/* Mobile menu trigger button */}
          <div className="flex sm:hidden items-center gap-1.5 shrink-0">
            <button
              onClick={onOpenAdminLogin}
              className="p-2 text-xs font-bold text-slate-700 bg-slate-100 border border-slate-200 rounded-lg"
              title="Acesso Admin"
            >
              <Lock className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => {
                const nextLang: Language = currentLang === 'pt' ? 'en' : currentLang === 'en' ? 'es' : 'pt';
                onLanguageChange(nextLang);
              }}
              className="px-2 py-2 text-xs font-bold text-blue-600 bg-blue-50 border border-blue-200 rounded-lg flex items-center gap-1"
              title="Mudar idioma"
            >
              <Globe className="w-3.5 h-3.5" />
              <span className="uppercase">{currentLang}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center gap-1 px-2.5 py-2 text-xs font-bold text-slate-700 bg-white hover:text-blue-600 hover:bg-slate-50 border border-slate-200 rounded-lg transition-all shadow-xs"
              aria-label="Toggle menu"
            >
              <span>Menu</span>
              {mobileMenuOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 animate-in slide-in-from-top duration-200 shadow-lg">
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
                <span>{l.label.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-600 rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 text-white font-bold text-xs rounded-xl shadow-xs"
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
