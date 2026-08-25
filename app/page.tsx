'use client';

import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { AboutAndQualifications } from '@/components/AboutAndQualifications';
import { ExperienceTimeline } from '@/components/ExperienceTimeline';
import { ProjectGallery } from '@/components/ProjectGallery';
import { BlogWorkLogs } from '@/components/BlogWorkLogs';
import { InteractiveDiagnosticTool } from '@/components/InteractiveDiagnosticTool';
import { ProfessionalReferences } from '@/components/ProfessionalReferences';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { ResumeModal } from '@/components/ResumeModal';
import { AdminLoginModal } from '@/components/admin/AdminLoginModal';
import { AdminDashboard } from '@/components/admin/AdminDashboard';
import {
  PortfolioDatabase,
  getPortfolioData,
  ADMIN_AUTH_TOKEN_KEY,
} from '@/lib/portfolio-store';
import { Language } from '@/lib/portfolio-data';

export default function HomePage() {
  const [currentLang, setCurrentLang] = useState<Language>('pt');
  const [portfolioData, setPortfolioData] = useState<PortfolioDatabase>(() => getPortfolioData());
  const [isResumeModalOpen, setIsResumeModalOpen] = useState<boolean>(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState<boolean>(false);
  const [isAdminDashboardOpen, setIsAdminDashboardOpen] = useState<boolean>(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(false);

  /* eslint-disable */
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('allan_portfolio_lang') as Language;
      if (savedLang && (savedLang === 'pt' || savedLang === 'en' || savedLang === 'es')) {
        setCurrentLang(savedLang);
      }
      const token = localStorage.getItem(ADMIN_AUTH_TOKEN_KEY);
      if (token && token.startsWith('admin_session_')) {
        setIsAdminLoggedIn(true);
      }
    } catch {
      // Ignore
    }
  }, []);
  /* eslint-enable */

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
    try {
      localStorage.setItem('allan_portfolio_lang', lang);
    } catch {
      // Ignore
    }
  };

  const handleAdminTrigger = () => {
    if (isAdminLoggedIn) {
      setIsAdminDashboardOpen(true);
    } else {
      setIsAdminModalOpen(true);
    }
  };

  const handleAdminLoginSuccess = () => {
    setIsAdminLoggedIn(true);
    setIsAdminDashboardOpen(true);
    setPortfolioData(getPortfolioData());
  };

  const handleAdminLogout = async () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(ADMIN_AUTH_TOKEN_KEY);
    }
    await fetch('/api/auth/logout', { method: 'POST' }).catch(() => {});
    setIsAdminLoggedIn(false);
    setIsAdminDashboardOpen(false);
  };

  // If the owner requested to open the CMS Dashboard modal/overlay
  if (isAdminDashboardOpen && isAdminLoggedIn) {
    return (
      <AdminDashboard
        initialData={portfolioData}
        onLogout={handleAdminLogout}
        onClose={() => {
          setIsAdminDashboardOpen(false);
          // Reload latest state from store
          setPortfolioData(getPortfolioData());
        }}
      />
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white font-sans antialiased">
      {/* Top Navbar */}
      <Header
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
        onOpenAdminLogin={handleAdminTrigger}
        isAdminLoggedIn={isAdminLoggedIn}
      />

      {/* Main Content Flow */}
      <main className="flex-grow">
        {/* 1. Hero & Professional Summary */}
        <Hero
          currentLang={currentLang}
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
          personalInfo={portfolioData.personalInfo}
        />

        {/* 2. About Me & Technical Qualifications (Education, Certifications, Skills Matrix) */}
        <AboutAndQualifications
          currentLang={currentLang}
          certifications={portfolioData.certifications}
          skillsMatrix={portfolioData.skillsMatrix}
        />

        {/* 3. Professional Experience (JLL 1 year 1 month + Projects) */}
        <ExperienceTimeline
          currentLang={currentLang}
          experiences={portfolioData.experiences}
        />

        {/* 4. Featured Projects & Work Gallery (Filterable & Searchable) */}
        <ProjectGallery
          currentLang={currentLang}
          projects={portfolioData.projects}
        />

        {/* 5. Technical Work Logs & Maintenance Blog Case Studies */}
        <BlogWorkLogs
          currentLang={currentLang}
          posts={portfolioData.blogPosts}
        />

        {/* 6. Interactive Diagnostic & Electrical Sizing Tool + AI Assistant */}
        <InteractiveDiagnosticTool currentLang={currentLang} />

        {/* 7. Professional Reference Contact for Recruiters */}
        <ProfessionalReferences currentLang={currentLang} />

        {/* 8. Direct Contact & Socials */}
        <ContactSection
          currentLang={currentLang}
          personalInfo={portfolioData.personalInfo}
        />
      </main>

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        personalInfo={portfolioData.personalInfo}
        onOpenAdminLogin={handleAdminTrigger}
      />

      {/* Downloadable / Printable Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        currentLang={currentLang}
        personalInfo={portfolioData.personalInfo}
        experiences={portfolioData.experiences}
        certifications={portfolioData.certifications}
      />

      {/* Owner Admin Login Modal */}
      <AdminLoginModal
        isOpen={isAdminModalOpen}
        onClose={() => setIsAdminModalOpen(false)}
        onSuccess={handleAdminLoginSuccess}
      />
    </div>
  );
}
