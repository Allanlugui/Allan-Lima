'use client';

import React, { useState, useMemo } from 'react';
import {
  Search,
  Filter,
  Eye,
  X,
  Zap,
  Activity,
  Layers,
  Wrench,
  ShieldCheck,
  Building,
  ArrowUpRight,
  Tag,
  CheckCircle,
  Code2,
  ExternalLink,
  Globe,
} from 'lucide-react';
import { I18N_STRINGS, Language } from '@/lib/portfolio-data';
import { ProjectItem } from '@/lib/portfolio-store';
import { TrackType } from '@/components/Hero';

interface ProjectGalleryProps {
  currentLang: Language;
  projects?: ProjectItem[];
  currentTrack?: TrackType;
}

export function ProjectGallery({ currentLang, projects, currentTrack = 'all' }: ProjectGalleryProps) {
  const t = I18N_STRINGS[currentLang];
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const categories = useMemo(() => {
    if (currentTrack === 'developer') {
      return [
        { id: 'all', label: currentLang === 'pt' ? 'Todos os Softwares' : currentLang === 'es' ? 'Todos los Software' : 'All Software', icon: Code2 },
        { id: 'fullstack', label: t.projects.catFullStack, icon: Code2 },
      ];
    }
    if (currentTrack === 'maintenance') {
      return [
        { id: 'all', label: t.projects.allCategories, icon: Layers },
        { id: 'electrical', label: t.projects.catElectrical, icon: Zap },
        { id: 'generators_ups', label: t.projects.catGenerators, icon: Zap },
        { id: 'predictive', label: t.projects.catPredictive, icon: Activity },
        { id: 'hydraulic', label: t.projects.catHydraulic, icon: Wrench },
        { id: 'civil_painting', label: t.projects.catCivil, icon: Building },
      ];
    }
    return [
      { id: 'all', label: t.projects.allCategories, icon: Layers },
      { id: 'fullstack', label: t.projects.catFullStack, icon: Code2 },
      { id: 'electrical', label: t.projects.catElectrical, icon: Zap },
      { id: 'generators_ups', label: t.projects.catGenerators, icon: Zap },
      { id: 'predictive', label: t.projects.catPredictive, icon: Activity },
      { id: 'hydraulic', label: t.projects.catHydraulic, icon: Wrench },
      { id: 'civil_painting', label: t.projects.catCivil, icon: Building },
    ];
  }, [currentTrack, currentLang, t]);

  // Filter projects by currentTrack, category, and query
  const filteredProjects = useMemo(() => {
    const list = projects || [];
    return list.filter((proj) => {
      // Track-level strict separation
      if (currentTrack === 'developer' && proj.category !== 'fullstack') {
        return false;
      }
      if (currentTrack === 'maintenance' && proj.category === 'fullstack') {
        return false;
      }

      // Category check
      const matchesCategory =
        selectedCategory === 'all' || proj.category === selectedCategory;

      if (!matchesCategory) return false;

      // Query check across title, summary, equipment, standards
      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const title = (proj.title[currentLang] || proj.title.pt || '').toLowerCase();
      const summary = (proj.summary[currentLang] || proj.summary.pt || '').toLowerCase();
      const equipmentMatch = proj.equipment.some((eq) =>
        eq.toLowerCase().includes(q)
      );
      const standardsMatch = proj.standards.some((st) =>
        st.toLowerCase().includes(q)
      );

      return title.includes(q) || summary.includes(q) || equipmentMatch || standardsMatch;
    });
  }, [projects, currentTrack, selectedCategory, searchQuery, currentLang]);

  return (
    <section id="projects" className="py-16 md:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200 mb-3">
            {currentTrack === 'developer' ? <Code2 className="w-3.5 h-3.5" /> : <Wrench className="w-3.5 h-3.5" />}
            <span>
              {currentTrack === 'developer'
                ? currentLang === 'pt'
                  ? 'Aplicações Web, Plataformas SaaS & APIs'
                  : currentLang === 'es'
                  ? 'Aplicaciones Web, SaaS y APIs'
                  : 'Web Applications, SaaS & APIs'
                : currentLang === 'pt'
                ? 'Obras & Intervenções Práticas'
                : currentLang === 'es'
                ? 'Obras y Trabajos Prácticos'
                : 'Hands-on Projects & Interventions'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {currentTrack === 'developer'
              ? currentLang === 'pt'
                ? 'Projetos de Desenvolvimento de Software'
                : currentLang === 'es'
                ? 'Proyectos de Desarrollo de Software'
                : 'Software Engineering Projects'
              : t.projects.sectionTitle}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-2">
            {currentTrack === 'developer'
              ? currentLang === 'pt'
                ? 'Plataformas completas em produção desenvolvidas com Next.js 15, React 19, TypeScript, Node.js e Tailwind CSS com deploys ativos na Vercel.'
                : currentLang === 'es'
                ? 'Plataformas completas en producción desarrolladas con Next.js 15, React 19, TypeScript, Node.js y Tailwind CSS.'
                : 'Production-ready web applications built with Next.js 15, React 19, TypeScript, Node.js, and Tailwind CSS.'
              : t.projects.sectionSubtitle}
          </p>
        </div>

        {/* Filter Toolbar & Search Bar */}
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Category Filter Chips */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap flex items-center gap-2 transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-blue-600'}`} />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Live Search Input */}
            <div className="relative min-w-[280px] sm:min-w-[340px]">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.projects.searchPlaceholder}
                className="w-full pl-10 pr-9 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Search Result Count */}
          <div className="flex items-center justify-between text-xs text-slate-500 px-1">
            <span>
              {currentLang === 'pt'
                ? `Exibindo ${filteredProjects.length} projeto(s)`
                : currentLang === 'es'
                ? `Mostrando ${filteredProjects.length} proyecto(s)`
                : `Showing ${filteredProjects.length} project(s)`}
            </span>
            {searchQuery && (
              <span className="text-blue-600 font-semibold">
                {currentLang === 'pt' ? `Filtrado por: "${searchQuery}"` : `Filtered by: "${searchQuery}"`}
              </span>
            )}
          </div>
        </div>

        {/* Project Cards Grid */}
        {filteredProjects.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <Search className="w-10 h-10 text-slate-400 mx-auto" />
            <div className="text-slate-800 font-bold text-base">
              {t.projects.noProjectsFound}
            </div>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="text-xs text-blue-600 font-bold hover:underline"
            >
              {currentLang === 'pt' ? 'Limpar filtros de busca' : currentLang === 'es' ? 'Limpiar filtros' : 'Reset search filters'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setActiveProject(project)}
                className="group cursor-pointer rounded-2xl bg-white border border-slate-200 hover:border-blue-400 transition-all flex flex-col justify-between overflow-hidden shadow-2xs hover:shadow-md hover:-translate-y-1"
              >
                <div>
                  {/* Category Ribbon */}
                  <div className="p-5 pb-3 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
                      <Tag className="w-3 h-3" />
                      <span>{project.categoryLabel[currentLang] || project.categoryLabel.pt}</span>
                    </span>

                    <div className="flex items-center gap-1">
                      {project.standards.map((std, idx) => (
                        <span
                          key={idx}
                          className="px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-slate-100 text-slate-600 border border-slate-200"
                        >
                          {std}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Title & Summary */}
                  <div className="px-5 space-y-2">
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                      {project.title[currentLang] || project.title.pt}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {project.summary[currentLang] || project.summary.pt}
                    </p>
                  </div>
                </div>

                {/* Bottom Equipment tags & CTA */}
                <div className="p-5 pt-4 mt-4 border-t border-slate-100 flex flex-col gap-3 bg-slate-50/50">
                  <div className="flex flex-wrap gap-1">
                    {project.equipment.slice(0, 2).map((eq, eIdx) => (
                      <span
                        key={eIdx}
                        className="px-2 py-0.5 rounded text-[10px] bg-white text-slate-700 border border-slate-200 truncate max-w-[180px] font-medium"
                      >
                        {eq}
                      </span>
                    ))}
                    {project.equipment.length > 2 && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] bg-white text-blue-600 font-mono border border-slate-200 font-bold">
                        +{project.equipment.length - 2}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-xs font-bold pt-1">
                    <span className="text-blue-600 group-hover:text-blue-700 flex items-center gap-1">
                      {t.projects.viewDetails}
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-bold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors shadow-2xs cursor-pointer"
                        title={currentLang === 'pt' ? 'Abrir projeto na Vercel' : currentLang === 'es' ? 'Abrir proyecto en Vercel' : 'Open project on Vercel'}
                      >
                        <Globe className="w-3 h-3" />
                        <span>{currentLang === 'pt' ? 'Ver Online ↗' : currentLang === 'es' ? 'Ver Online ↗' : 'Live Demo ↗'}</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Project Detail Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200 mb-2">
                  {activeProject.categoryLabel[currentLang] || activeProject.categoryLabel.pt}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
                  {activeProject.title[currentLang] || activeProject.title.pt}
                </h3>
              </div>

              <button
                onClick={() => setActiveProject(null)}
                className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Sections */}
            <div className="space-y-4 text-sm">
              
              {/* Challenge */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-1.5 flex items-center gap-1.5">
                  <Activity className="w-4 h-4" />
                  <span>{t.projects.modalChallenge}</span>
                </h4>
                <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                  {activeProject.challenge[currentLang] || activeProject.challenge.pt}
                </p>
              </div>

              {/* Solution */}
              <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-blue-800 mb-1.5 flex items-center gap-1.5">
                  <Wrench className="w-4 h-4" />
                  <span>{t.projects.modalSolution}</span>
                </h4>
                <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                  {activeProject.solution[currentLang] || activeProject.solution.pt}
                </p>
              </div>

              {/* Results */}
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1.5 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4" />
                  <span>{t.projects.modalResults}</span>
                </h4>
                <p className="text-slate-800 leading-relaxed text-xs sm:text-sm font-medium">
                  {activeProject.results[currentLang] || activeProject.results.pt}
                </p>
              </div>

              {/* Equipment & Standards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    {t.projects.modalEquipment}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeProject.equipment.map((eq, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-xs bg-white text-slate-700 border border-slate-200 font-medium"
                      >
                        {eq}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    {t.projects.modalStandards}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeProject.standards.map((std, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-blue-50 text-blue-700 border border-blue-200"
                      >
                        {std}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end pt-4 border-t border-slate-100">
              <button
                onClick={() => setActiveProject(null)}
                className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors"
              >
                {t.projects.closeModal}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
