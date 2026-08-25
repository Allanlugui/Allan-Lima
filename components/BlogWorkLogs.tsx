'use client';

import React, { useState } from 'react';
import { BlogPostItem } from '@/lib/portfolio-store';
import { Language, I18N_STRINGS } from '@/lib/portfolio-data';
import { BookOpen, Clock, Tag, ChevronRight, X, Sparkles, CheckCircle2, ShieldCheck, Wrench } from 'lucide-react';

interface BlogWorkLogsProps {
  posts: BlogPostItem[];
  currentLang: Language;
}

export function BlogWorkLogs({ posts, currentLang }: BlogWorkLogsProps) {
  const [selectedPost, setSelectedPost] = useState<BlogPostItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: currentLang === 'pt' ? 'Todos os Relatórios' : currentLang === 'es' ? 'Todos los Reportes' : 'All Reports' },
    { id: 'case_study', label: currentLang === 'pt' ? 'Estudos de Caso' : currentLang === 'es' ? 'Estudios de Caso' : 'Case Studies' },
    { id: 'preventive_routine', label: currentLang === 'pt' ? 'Rotinas Preventivas' : currentLang === 'es' ? 'Rutinas Preventivas' : 'Preventive Routines' },
    { id: 'technical_norm', label: currentLang === 'pt' ? 'Segurança & Normas' : currentLang === 'es' ? 'Seguridad y Normas' : 'Safety & Norms' },
  ];

  const filteredPosts = posts.filter((p) => {
    if (!p.published) return false;
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  return (
    <section id="worklogs" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200 mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{currentLang === 'pt' ? 'Diário Técnico & Relatórios de Campo' : currentLang === 'es' ? 'Diario Técnico y Reportes de Campo' : 'Technical Work Logs & Field Reports'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {currentLang === 'pt'
              ? 'Estudos de Caso e Procedimentos Práticos'
              : currentLang === 'es'
              ? 'Estudios de Caso y Procedimientos Prácticos'
              : 'Practical Case Studies & Procedures'}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            {currentLang === 'pt'
              ? 'Documentação técnica de intervenções preventivas, boas práticas em termografia de quadros e procedimentos rigorosos de segurança aplicados no dia a dia operacional.'
              : currentLang === 'es'
              ? 'Documentación técnica de intervenciones preventivas, buenas prácticas en termografía y procedimientos de seguridad en instalaciones.'
              : 'Technical documentation of preventive procedures, switchboard thermography best practices, and strict safety workflows applied in real-world facilities.'}
          </p>
        </div>

        {/* Category filter pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md hover:border-blue-300 transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-0.5 rounded-md text-[10px] font-extrabold bg-blue-50 text-blue-700 border border-blue-200">
                    {post.categoryLabel[currentLang] || post.categoryLabel.pt}
                  </span>
                  <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {post.readTime}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                  {post.title[currentLang] || post.title.pt}
                </h3>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {post.summary[currentLang] || post.summary.pt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-blue-700">
                <span>{currentLang === 'pt' ? 'Ler Relatório Técnico' : currentLang === 'es' ? 'Leer Reporte Técnico' : 'Read Full Report'}</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>

        {/* Modal for Reading Post */}
        {selectedPost && (
          <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 my-8 max-h-[90vh] overflow-y-auto relative animate-in fade-in zoom-in-95 duration-200">
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-md text-[10px] font-extrabold bg-blue-50 text-blue-700 border border-blue-200">
                    {selectedPost.categoryLabel[currentLang] || selectedPost.categoryLabel.pt}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {selectedPost.date} • {selectedPost.readTime}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  {selectedPost.title[currentLang] || selectedPost.title.pt}
                </h2>
              </div>

              {/* Tags & Equipment */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {selectedPost.tags.map((t, i) => (
                  <span key={i} className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md font-medium">
                    #{t}
                  </span>
                ))}
              </div>

              {/* Formatted Content */}
              <div className="text-sm text-slate-700 leading-relaxed whitespace-pre-line border-t border-slate-100 pt-4 space-y-3">
                {selectedPost.content[currentLang] || selectedPost.content.pt}
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Procedimento validado com normas NR-10 e padrão JLL</span>
                </div>

                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition-colors"
                >
                  {currentLang === 'pt' ? 'Fechar Leitura' : currentLang === 'es' ? 'Cerrar' : 'Close'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
