'use client';

import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Hero, TrackType } from '@/components/Hero';
import { AboutAndQualifications } from '@/components/AboutAndQualifications';
import { ExperienceTimeline } from '@/components/ExperienceTimeline';
import { FieldActivityGallery } from '@/components/FieldActivityGallery';
import { ProjectGallery } from '@/components/ProjectGallery';
import { BlogWorkLogs } from '@/components/BlogWorkLogs';
import { InteractiveDiagnosticTool } from '@/components/InteractiveDiagnosticTool';
import { ProfessionalReferences } from '@/components/ProfessionalReferences';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { ResumeModal } from '@/components/ResumeModal';
import { AdminLoginModal } from '@/components/admin/AdminLoginModal';
import { AdminDashboard } from '@/components/admin/AdminDashboard';
import { QuickPhotoUploadModal } from '@/components/QuickPhotoUploadModal';
import {
  PortfolioDatabase,
  getPortfolioData,
  DEFAULT_PORTFOLIO_DATA,
  ADMIN_AUTH_TOKEN_KEY,
} from '@/lib/portfolio-store';
import { Language } from '@/lib/portfolio-data';

export default function HomePage() {
  const [currentLang, setCurrentLang] = useState<Language>('pt');
  const [currentTrack, setCurrentTrack] = useState<TrackType>('all');
  const [portfolioData, setPortfolioData] = useState<PortfolioDatabase>(DEFAULT_PORTFOLIO_DATA);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState<boolean>(false);
  const [resumeModalTrack, setResumeModalTrack] = useState<TrackType>('all');
  const [isAdminModalOpen, setIsAdminModalOpen] = useState<boolean>(false);
  const [isAdminDashboardOpen, setIsAdminDashboardOpen] = useState<boolean>(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(false);
  const [isQuickPhotoModalOpen, setIsQuickPhotoModalOpen] = useState<boolean>(false);

  /* eslint-disable */
  useEffect(() => {
    try {
      setPortfolioData(getPortfolioData());
      const handleDataUpdate = () => {
        setPortfolioData(getPortfolioData());
      };
      window.addEventListener('portfolio-data-updated', handleDataUpdate);

      const savedLang = localStorage.getItem('allan_portfolio_lang') as Language;
      if (savedLang && (savedLang === 'pt' || savedLang === 'en' || savedLang === 'es')) {
        setCurrentLang(savedLang);
      }
      const savedTrack = localStorage.getItem('allan_portfolio_track') as TrackType;
      if (savedTrack && (savedTrack === 'maintenance' || savedTrack === 'developer' || savedTrack === 'all')) {
        setCurrentTrack(savedTrack);
      }
      const token = localStorage.getItem(ADMIN_AUTH_TOKEN_KEY);
      if (token && token.startsWith('admin_session_')) {
        setIsAdminLoggedIn(true);
      }
      return () => {
        window.removeEventListener('portfolio-data-updated', handleDataUpdate);
      };
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

  const handleTrackChange = (track: TrackType) => {
    setCurrentTrack(track);
    try {
      localStorage.setItem('allan_portfolio_track', track);
    } catch {
      // Ignore
    }
  };

  const handleOpenResume = (track?: TrackType) => {
    setResumeModalTrack(track || currentTrack);
    setIsResumeModalOpen(true);
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
        currentTrack={currentTrack}
        onTrackChange={handleTrackChange}
        onOpenResumeModal={() => handleOpenResume()}
        onOpenAdminLogin={handleAdminTrigger}
        isAdminLoggedIn={isAdminLoggedIn}
      />

      {/* Main Content Flow */}
      <main className="flex-grow">
        {/* 1. Hero & Professional Summary with Dual-Track Selector */}
        <Hero
          currentLang={currentLang}
          currentTrack={currentTrack}
          onTrackChange={handleTrackChange}
          onOpenResumeModal={(t) => handleOpenResume(t)}
          personalInfo={portfolioData.personalInfo}
        />

        {/* 2. About Me & Technical Qualifications (Education, Certifications, Skills Matrix) */}
        <AboutAndQualifications
          currentLang={currentLang}
          certifications={portfolioData.certifications}
          skillsMatrix={portfolioData.skillsMatrix}
        />

        {/* 3. Professional Experience Timeline (ATS, JLL, ITC, Edgar Santana, JCS, Concrepoxi, Capanema, Madam Mad) */}
        <ExperienceTimeline
          currentLang={currentLang}
          experiences={portfolioData.experiences}
        />

        {/* 4. Track A: Official Field Maintenance Photographic Gallery */}
        {(currentTrack === 'all' || currentTrack === 'maintenance') && (
          <section className="py-16 md:py-24 bg-slate-100/70 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <FieldActivityGallery
                currentLang={currentLang}
                activities={portfolioData.fieldActivities}
                onOpenQuickUpload={() => {
                  if (isAdminLoggedIn) {
                    setIsQuickPhotoModalOpen(true);
                  } else {
                    setIsAdminModalOpen(true);
                  }
                }}
              />
            </div>
          </section>
        )}

        {/* 5. Track B: Full-Stack Software Projects Showcase */}
        {(currentTrack === 'all' || currentTrack === 'developer') && (
          <ProjectGallery
            currentLang={currentLang}
            projects={portfolioData.projects}
          />
        )}

        {/* 6. Technical Work Logs & Maintenance Case Studies */}
        <BlogWorkLogs
          currentLang={currentLang}
          posts={portfolioData.blogPosts}
        />

        {/* 7. Interactive Diagnostic & Electrical Sizing Tool */}
        <InteractiveDiagnosticTool currentLang={currentLang} />

        {/* 8. Professional Reference Contact for Recruiters */}
        <ProfessionalReferences currentLang={currentLang} />

        {/* 9. Direct Contact & Socials */}
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
        initialTrack={resumeModalTrack}
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

      {/* Quick Mobile Field Photo Capture & Google Drive Upload */}
      <QuickPhotoUploadModal
        isOpen={isQuickPhotoModalOpen}
        onClose={() => setIsQuickPhotoModalOpen(false)}
        currentLang={currentLang}
        onSuccess={() => {
          setPortfolioData(getPortfolioData());
        }}
      />
    </div>
  );
}
