'use client';

import React, { useState } from 'react';
import {
  LayoutDashboard,
  FolderGit2,
  Briefcase,
  Wrench,
  BookOpen,
  UserCheck,
  Plus,
  Trash2,
  Edit3,
  Save,
  CheckCircle2,
  AlertCircle,
  Download,
  Upload,
  RefreshCw,
  Eye,
  LogOut,
  Sparkles,
  ShieldCheck,
  ArrowUpRight,
  Search,
  Star,
  Clock,
  Layers,
  FileText
} from 'lucide-react';
import {
  PortfolioDatabase,
  ProjectItem,
  ExperienceItem,
  BlogPostItem,
  savePortfolioData,
  DEFAULT_PORTFOLIO_DATA,
} from '@/lib/portfolio-store';
import { Language } from '@/lib/portfolio-data';

interface AdminDashboardProps {
  initialData: PortfolioDatabase;
  onLogout: () => void;
  onClose?: () => void;
}

export function AdminDashboard({ initialData, onLogout, onClose }: AdminDashboardProps) {
  const [data, setData] = useState<PortfolioDatabase>(initialData);
  const [activeTab, setActiveTab] = useState<'overview' | 'projects' | 'experience' | 'skills' | 'blog' | 'profile' | 'backup'>('overview');
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Editing state for modals/forms
  const [editingProject, setEditingProject] = useState<ProjectItem | null>(null);
  const [isNewProject, setIsNewProject] = useState(false);

  const [editingExperience, setEditingExperience] = useState<ExperienceItem | null>(null);
  const [isNewExperience, setIsNewExperience] = useState(false);

  const [editingPost, setEditingPost] = useState<BlogPostItem | null>(null);
  const [isNewPost, setIsNewPost] = useState(false);

  const showToast = (type: 'success' | 'error', message: string) => {
    setFeedback({ type, message });
    setTimeout(() => {
      setFeedback(null);
    }, 4000);
  };

  const persistChanges = (updated: PortfolioDatabase, message = 'Alterações salvas com sucesso!') => {
    setData(updated);
    savePortfolioData(updated);
    // Sync with server API
    fetch('/api/portfolio/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${typeof window !== 'undefined' ? localStorage.getItem('allan_portfolio_admin_token') || '' : ''}`,
      },
      body: JSON.stringify(updated),
    }).catch((err) => console.warn('Server sync background notice:', err));

    showToast('success', message);
  };

  // Handlers for Projects
  const handleSaveProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProject) return;

    let updatedProjects = [...data.projects];
    if (isNewProject) {
      updatedProjects = [editingProject, ...updatedProjects];
    } else {
      updatedProjects = updatedProjects.map((p) => (p.id === editingProject.id ? editingProject : p));
    }

    persistChanges({ ...data, projects: updatedProjects }, 'Projeto atualizado com sucesso no portfólio!');
    setEditingProject(null);
  };

  const handleDeleteProject = (id: string) => {
    if (confirm('Tem certeza de que deseja excluir este projeto?')) {
      const updatedProjects = data.projects.filter((p) => p.id !== id);
      persistChanges({ ...data, projects: updatedProjects }, 'Projeto removido.');
    }
  };

  const handleToggleHighlight = (id: string) => {
    const updatedProjects = data.projects.map((p) => (p.id === id ? { ...p, highlight: !p.highlight } : p));
    persistChanges({ ...data, projects: updatedProjects }, 'Status de destaque atualizado.');
  };

  // Handlers for Experience
  const handleSaveExperience = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingExperience) return;

    let updatedExp = [...data.experiences];
    if (isNewExperience) {
      updatedExp = [editingExperience, ...updatedExp];
    } else {
      updatedExp = updatedExp.map((exp) => (exp.id === editingExperience.id ? editingExperience : exp));
    }

    persistChanges({ ...data, experiences: updatedExp }, 'Experiência profissional atualizada!');
    setEditingExperience(null);
  };

  const handleDeleteExperience = (id: string) => {
    if (confirm('Tem certeza de que deseja excluir esta experiência?')) {
      const updatedExp = data.experiences.filter((exp) => exp.id !== id);
      persistChanges({ ...data, experiences: updatedExp }, 'Experiência removida.');
    }
  };

  // Handlers for Blog / Work Logs
  const handleSavePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingPost) return;

    let updatedPosts = [...data.blogPosts];
    if (isNewPost) {
      updatedPosts = [editingPost, ...updatedPosts];
    } else {
      updatedPosts = updatedPosts.map((post) => (post.id === editingPost.id ? editingPost : post));
    }

    persistChanges({ ...data, blogPosts: updatedPosts }, 'Artigo/Relatório técnico salvo com sucesso!');
    setEditingPost(null);
  };

  const handleDeletePost = (id: string) => {
    if (confirm('Tem certeza de que deseja excluir este artigo/relatório?')) {
      const updatedPosts = data.blogPosts.filter((post) => post.id !== id);
      persistChanges({ ...data, blogPosts: updatedPosts }, 'Relatório técnico excluído.');
    }
  };

  // Handlers for Profile Info
  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    persistChanges(data, 'Dados de perfil e contatos atualizados com sucesso!');
  };

  // Export / Import
  const handleExportJSON = () => {
    const jsonStr = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `portfolio-allan-luiz-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (parsed.personalInfo && parsed.projects) {
          persistChanges(parsed, 'Backup restaurado com sucesso!');
        } else {
          showToast('error', 'Formato de arquivo JSON inválido.');
        }
      } catch {
        showToast('error', 'Falha ao processar arquivo JSON.');
      }
    };
    reader.readAsText(file);
  };

  const handleResetDefaults = () => {
    if (confirm('Atenção: Isso redefinirá todas as informações para a versão inicial de fábrica. Deseja continuar?')) {
      persistChanges(DEFAULT_PORTFOLIO_DATA, 'Dados restaurados para o padrão de fábrica.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans">
      {/* Top Admin Bar */}
      <header className="bg-slate-900 text-white border-b border-slate-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
              CMS
            </div>
            <div>
              <div className="font-bold text-sm tracking-tight flex items-center gap-2">
                Painel Administrativo & Gestão de Conteúdo
                <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-blue-500/20 text-blue-300 border border-blue-500/30 uppercase">
                  Proprietário
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Allan Luiz Silveira Lima • {data.personalInfo.email}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {onClose && (
              <button
                onClick={onClose}
                className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors"
              >
                <Eye className="w-3.5 h-3.5 text-blue-400" />
                <span>Ver Portfólio</span>
              </button>
            )}

            <button
              onClick={onLogout}
              className="px-3 py-1.5 bg-red-500/10 hover:bg-red-500/20 text-red-300 border border-red-500/30 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Sair da Conta</span>
            </button>
          </div>
        </div>
      </header>

      {/* Toast Feedback */}
      {feedback && (
        <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom duration-300">
          <div
            className={`flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg border text-sm font-medium ${
              feedback.type === 'success'
                ? 'bg-emerald-50 text-emerald-900 border-emerald-300'
                : 'bg-red-50 text-red-900 border-red-300'
            }`}
          >
            {feedback.type === 'success' ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            ) : (
              <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
            )}
            <span>{feedback.message}</span>
          </div>
        </div>
      )}

      {/* Main Admin Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Navigation Sidebar */}
          <aside className="lg:col-span-1 space-y-1 bg-white p-3 rounded-2xl border border-slate-200 shadow-xs h-fit">
            <button
              onClick={() => setActiveTab('overview')}
              className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'overview'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Visão Geral</span>
            </button>

            <button
              onClick={() => setActiveTab('projects')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'projects'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <FolderGit2 className="w-4 h-4" />
                <span>Projetos & Obras</span>
              </div>
              <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-slate-200 text-slate-800 group-hover:bg-slate-300">
                {data.projects.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('experience')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'experience'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Briefcase className="w-4 h-4" />
                <span>Experiências</span>
              </div>
              <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-slate-200 text-slate-800">
                {data.experiences.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('skills')}
              className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'skills'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <Wrench className="w-4 h-4" />
              <span>Habilidades & Normas</span>
            </button>

            <button
              onClick={() => setActiveTab('blog')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'blog'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <BookOpen className="w-4 h-4" />
                <span>Diário / Artigos</span>
              </div>
              <span className="px-1.5 py-0.5 rounded-full text-[10px] bg-slate-200 text-slate-800">
                {data.blogPosts.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('profile')}
              className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'profile'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <UserCheck className="w-4 h-4" />
              <span>Dados & Contatos</span>
            </button>

            <div className="pt-2 border-t border-slate-200">
              <button
                onClick={() => setActiveTab('backup')}
                className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === 'backup'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <RefreshCw className="w-4 h-4" />
                <span>Backup & Sincronização</span>
              </button>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="lg:col-span-4 space-y-6">
            {/* TAB 1: OVERVIEW */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Welcome Card */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs relative overflow-hidden">
                  <div className="max-w-2xl">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200 mb-3">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Painel Ativo em Tempo Real</span>
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                      Olá, Allan Luiz Silveira Lima
                    </h2>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                      Gerencie todo o conteúdo exibido no seu portfólio profissional (projetos realizados, histórico de atuação na JLL, competências técnicas e relatórios de campo). Qualquer alteração feita aqui entra em vigor imediatamente para todos os visitantes.
                    </p>
                  </div>
                </div>

                {/* KPI Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                    <div className="text-xs font-medium text-slate-500 flex items-center justify-between">
                      <span>Projetos em Destaque</span>
                      <FolderGit2 className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-slate-900 mt-2">
                      {data.projects.length}
                    </div>
                    <div className="text-[11px] text-emerald-600 font-medium mt-1 flex items-center gap-1">
                      <span>{data.projects.filter((p) => p.highlight).length} marcados com estrela</span>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                    <div className="text-xs font-medium text-slate-500 flex items-center justify-between">
                      <span>Experiências Registradas</span>
                      <Briefcase className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-slate-900 mt-2">
                      {data.experiences.length}
                    </div>
                    <div className="text-[11px] text-slate-500 font-medium mt-1">
                      {data.personalInfo.stats.jllDuration} na JLL
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                    <div className="text-xs font-medium text-slate-500 flex items-center justify-between">
                      <span>Artigos & Diário</span>
                      <BookOpen className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-slate-900 mt-2">
                      {data.blogPosts.length}
                    </div>
                    <div className="text-[11px] text-blue-600 font-medium mt-1">
                      Casos de estudo de campo
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
                    <div className="text-xs font-medium text-slate-500 flex items-center justify-between">
                      <span>Certificações Ativas</span>
                      <ShieldCheck className="w-4 h-4 text-amber-600" />
                    </div>
                    <div className="text-2xl font-bold text-slate-900 mt-2">
                      {data.certifications.length}
                    </div>
                    <div className="text-[11px] text-emerald-600 font-medium mt-1">
                      NR-10, NR-35, LOTO, CFT
                    </div>
                  </div>
                </div>

                {/* Quick Action Shortcuts */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-xs">
                    Ações Rápidas
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <button
                      onClick={() => {
                        setIsNewProject(true);
                        setEditingProject({
                          id: `proj-${Date.now()}`,
                          title: { pt: '', en: '', es: '' },
                          category: 'electrical',
                          categoryLabel: { pt: 'Painéis & Elétrica', en: 'Panels & Electrical', es: 'Tableros y Eléctrica' },
                          summary: { pt: '', en: '', es: '' },
                          challenge: { pt: '', en: '', es: '' },
                          solution: { pt: '', en: '', es: '' },
                          results: { pt: '', en: '', es: '' },
                          equipment: [],
                          standards: ['NR-10', 'NBR 5410'],
                          highlight: false,
                        });
                        setActiveTab('projects');
                      }}
                      className="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50 hover:border-blue-300 text-left transition-all group"
                    >
                      <Plus className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform mb-2" />
                      <div className="text-sm font-bold text-slate-900">Novo Projeto</div>
                      <div className="text-xs text-slate-500 mt-0.5">Adicionar caso de manutenção ou obra</div>
                    </button>

                    <button
                      onClick={() => {
                        setIsNewPost(true);
                        setEditingPost({
                          id: `post-${Date.now()}`,
                          title: { pt: '', en: '', es: '' },
                          slug: `relatorio-${Date.now()}`,
                          category: 'case_study',
                          categoryLabel: { pt: 'Estudo de Caso Prático', en: 'Case Study', es: 'Estudio de Caso' },
                          date: new Date().toISOString().slice(0, 10),
                          readTime: '3 min',
                          summary: { pt: '', en: '', es: '' },
                          content: { pt: '', en: '', es: '' },
                          tags: ['Manutenção', 'Elétrica'],
                          equipment: [],
                          published: true,
                        });
                        setActiveTab('blog');
                      }}
                      className="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50 hover:border-blue-300 text-left transition-all group"
                    >
                      <Plus className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform mb-2" />
                      <div className="text-sm font-bold text-slate-900">Novo Artigo Técnico</div>
                      <div className="text-xs text-slate-500 mt-0.5">Publicar rotina preventiva ou dica</div>
                    </button>

                    <button
                      onClick={() => setActiveTab('profile')}
                      className="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50 hover:border-blue-300 text-left transition-all group"
                    >
                      <Edit3 className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform mb-2" />
                      <div className="text-sm font-bold text-slate-900">Editar Perfil</div>
                      <div className="text-xs text-slate-500 mt-0.5">Atualizar telefones, links e biografia</div>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: PROJECTS MANAGEMENT */}
            {activeTab === 'projects' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
                  <div>
                    <h2 className="text-base font-bold text-slate-900">Gerenciar Projetos & Obras</h2>
                    <p className="text-xs text-slate-500">Adicione, edite ou altere a ordem dos projetos exibidos na galeria pública.</p>
                  </div>
                  <button
                    onClick={() => {
                      setIsNewProject(true);
                      setEditingProject({
                        id: `proj-${Date.now()}`,
                        title: { pt: '', en: '', es: '' },
                        category: 'electrical',
                        categoryLabel: { pt: 'Painéis & Elétrica', en: 'Panels & Electrical', es: 'Tableros y Eléctrica' },
                        summary: { pt: '', en: '', es: '' },
                        challenge: { pt: '', en: '', es: '' },
                        solution: { pt: '', en: '', es: '' },
                        results: { pt: '', en: '', es: '' },
                        equipment: [],
                        standards: ['NR-10', 'NBR 5410'],
                        highlight: false,
                      });
                    }}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl flex items-center gap-1.5 shadow-sm transition-all shrink-0"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Adicionar Projeto</span>
                  </button>
                </div>

                {/* Project List */}
                <div className="space-y-3">
                  {data.projects.map((proj) => (
                    <div
                      key={proj.id}
                      className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs hover:border-slate-300 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <div className="space-y-1 max-w-2xl">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
                            {proj.categoryLabel.pt}
                          </span>
                          {proj.highlight && (
                            <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200 flex items-center gap-1">
                              <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                              Destaque
                            </span>
                          )}
                        </div>
                        <h3 className="text-sm font-bold text-slate-900">{proj.title.pt}</h3>
                        <p className="text-xs text-slate-600 line-clamp-2">{proj.summary.pt}</p>
                        <div className="flex flex-wrap gap-1 pt-1">
                          {proj.equipment.map((eq, i) => (
                            <span key={i} className="text-[10px] bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded">
                              {eq}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                        <button
                          onClick={() => handleToggleHighlight(proj.id)}
                          title={proj.highlight ? 'Remover destaque' : 'Destacar projeto'}
                          className={`p-2 rounded-lg border text-xs font-semibold transition-colors ${
                            proj.highlight
                              ? 'bg-amber-50 border-amber-300 text-amber-600 hover:bg-amber-100'
                              : 'bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100'
                          }`}
                        >
                          <Star className={`w-4 h-4 ${proj.highlight ? 'fill-amber-500 text-amber-500' : ''}`} />
                        </button>
                        <button
                          onClick={() => {
                            setIsNewProject(false);
                            setEditingProject(JSON.parse(JSON.stringify(proj)));
                          }}
                          className="p-2 bg-slate-100 hover:bg-blue-50 hover:text-blue-600 text-slate-700 rounded-lg text-xs font-semibold transition-colors border border-slate-200"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteProject(proj.id)}
                          className="p-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg text-xs font-semibold transition-colors border border-red-200"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Edit / Add Project Modal */}
                {editingProject && (
                  <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-3xl w-full p-6 space-y-4 my-8 max-h-[90vh] overflow-y-auto">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                        <h3 className="text-base font-bold text-slate-900">
                          {isNewProject ? 'Novo Projeto Técnico' : 'Editar Projeto'}
                        </h3>
                        <button
                          onClick={() => setEditingProject(null)}
                          className="text-slate-400 hover:text-slate-600 text-sm font-bold"
                        >
                          ✕
                        </button>
                      </div>

                      <form onSubmit={handleSaveProject} className="space-y-4">
                        {/* Category & Title */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                              Categoria Técnica
                            </label>
                            <select
                              value={editingProject.category}
                              onChange={(e) => {
                                const cat = e.target.value as ProjectItem['category'];
                                const labels: Record<ProjectItem['category'], Record<Language, string>> = {
                                  electrical: { pt: 'Painéis & Elétrica', en: 'Panels & Electrical', es: 'Tableros y Eléctrica' },
                                  generators_ups: { pt: 'Geradores & UPS', en: 'Generators & UPS', es: 'Grupos y SAI/UPS' },
                                  predictive: { pt: 'Preditiva & Termografia', en: 'Predictive & Thermal', es: 'Predictiva y Termografía' },
                                  hydraulic: { pt: 'Hidráulica & Bombas', en: 'Hydraulics & Pumps', es: 'Hidráulica y Bombas' },
                                  civil_painting: { pt: 'Civil & Pintura', en: 'Civil & Painting', es: 'Civil y Pintura' },
                                  fullstack: { pt: 'Desenvolvimento Full-Stack', en: 'Full-Stack Development', es: 'Desarrollo Full-Stack' },
                                };
                                setEditingProject({
                                  ...editingProject,
                                  category: cat,
                                  categoryLabel: labels[cat],
                                });
                              }}
                              className="w-full text-xs font-semibold px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-blue-600"
                            >
                              <option value="predictive">Preditiva & Termografia</option>
                              <option value="generators_ups">Geradores & No-breaks (UPS)</option>
                              <option value="electrical">Painéis QGBT & Elétrica</option>
                              <option value="hydraulic">Hidráulica & Bombas</option>
                              <option value="civil_painting">Civil, Drywall & Pintura Epóxi</option>
                              <option value="fullstack">Desenvolvimento Full-Stack & TI</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                              Destaque no Portfólio
                            </label>
                            <label className="flex items-center gap-2 mt-2 text-xs font-semibold text-slate-700 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={editingProject.highlight || false}
                                onChange={(e) => setEditingProject({ ...editingProject, highlight: e.target.checked })}
                                className="w-4 h-4 text-blue-600 rounded"
                              />
                              <span>Exibir com selo de destaque no topo</span>
                            </label>
                          </div>
                        </div>

                        {/* Title PT */}
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                            Título do Projeto (Português)
                          </label>
                          <input
                            type="text"
                            required
                            value={editingProject.title.pt}
                            onChange={(e) =>
                              setEditingProject({
                                ...editingProject,
                                title: { ...editingProject.title, pt: e.target.value },
                              })
                            }
                            className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-blue-600"
                            placeholder="Ex: Termografia e Manutenção em QGBT 800A"
                          />
                        </div>

                        {/* Summary PT */}
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                            Resumo Executivo (Português)
                          </label>
                          <textarea
                            rows={2}
                            required
                            value={editingProject.summary.pt}
                            onChange={(e) =>
                              setEditingProject({
                                ...editingProject,
                                summary: { ...editingProject.summary, pt: e.target.value },
                              })
                            }
                            className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-blue-600"
                            placeholder="Breve descrição do escopo executado..."
                          />
                        </div>

                        {/* Challenge / Solution / Results Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <div>
                            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                              Desafio Técnico
                            </label>
                            <textarea
                              rows={3}
                              value={editingProject.challenge.pt}
                              onChange={(e) =>
                                setEditingProject({
                                  ...editingProject,
                                  challenge: { ...editingProject.challenge, pt: e.target.value },
                                })
                              }
                              className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-blue-600"
                              placeholder="Problema encontrado ou risco..."
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                              Solução & Procedimento
                            </label>
                            <textarea
                              rows={3}
                              value={editingProject.solution.pt}
                              onChange={(e) =>
                                setEditingProject({
                                  ...editingProject,
                                  solution: { ...editingProject.solution, pt: e.target.value },
                                })
                              }
                              className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-blue-600"
                              placeholder="Ação executada com normas..."
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                              Resultado Mensurado
                            </label>
                            <textarea
                              rows={3}
                              value={editingProject.results.pt}
                              onChange={(e) =>
                                setEditingProject({
                                  ...editingProject,
                                  results: { ...editingProject.results, pt: e.target.value },
                                })
                              }
                              className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-blue-600"
                              placeholder="Impacto positivo e estabilidade..."
                            />
                          </div>
                        </div>

                        {/* Equipment & Standards (comma separated) */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                              Equipamentos & Ferramental (separar por vírgula)
                            </label>
                            <input
                              type="text"
                              value={editingProject.equipment.join(', ')}
                              onChange={(e) =>
                                setEditingProject({
                                  ...editingProject,
                                  equipment: e.target.value.split(',').map((s) => s.trim()).filter(Boolean),
                                })
                              }
                              className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-blue-600"
                              placeholder="Ex: Câmera Fluke, Torquímetro, Multímetro"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                              Normas Aplicadas (separar por vírgula)
                            </label>
                            <input
                              type="text"
                              value={editingProject.standards.join(', ')}
                              onChange={(e) =>
                                setEditingProject({
                                  ...editingProject,
                                  standards: e.target.value.split(',').map((s) => s.trim()).filter(Boolean),
                                })
                              }
                              className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-blue-600"
                              placeholder="Ex: NR-10, NBR 5410, LOTO"
                            />
                          </div>
                        </div>

                        {/* Modal Action Buttons */}
                        <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
                          <button
                            type="button"
                            onClick={() => setEditingProject(null)}
                            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-colors"
                          >
                            Cancelar
                          </button>
                          <button
                            type="submit"
                            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-sm transition-all flex items-center gap-1.5"
                          >
                            <Save className="w-4 h-4" />
                            <span>Salvar Alterações</span>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB 3: EXPERIENCES MANAGEMENT */}
            {activeTab === 'experience' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
                  <div>
                    <h2 className="text-base font-bold text-slate-900">Histórico de Atuação Profissional</h2>
                    <p className="text-xs text-slate-500">Edite as responsabilidades e conquistas na JLL e em projetos corporativos.</p>
                  </div>
                  <button
                    onClick={() => {
                      setIsNewExperience(true);
                      setEditingExperience({
                        id: `exp-${Date.now()}`,
                        role: { pt: '', en: '', es: '' },
                        company: '',
                        location: 'São Paulo, Brasil',
                        period: { pt: '', en: '', es: '' },
                        duration: { pt: '', en: '', es: '' },
                        type: { pt: 'Tempo Integral', en: 'Full-time', es: 'Tiempo Completo' },
                        description: { pt: '', en: '', es: '' },
                        achievements: { pt: [''], en: [''], es: [''] },
                        skills: [],
                      });
                    }}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl flex items-center gap-1.5 shadow-sm transition-all shrink-0"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Adicionar Experiência</span>
                  </button>
                </div>

                <div className="space-y-4">
                  {data.experiences.map((exp) => (
                    <div
                      key={exp.id}
                      className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-slate-900">{exp.company}</span>
                            <span className="text-xs px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 font-semibold border border-blue-200">
                              {exp.period.pt}
                            </span>
                          </div>
                          <div className="text-xs font-semibold text-slate-700 mt-0.5">{exp.role.pt}</div>
                          <div className="text-[11px] text-slate-500">{exp.location} • {exp.type.pt}</div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => {
                              setIsNewExperience(false);
                              setEditingExperience(JSON.parse(JSON.stringify(exp)));
                            }}
                            className="p-2 bg-slate-100 hover:bg-blue-50 hover:text-blue-600 text-slate-700 rounded-lg text-xs font-semibold transition-colors border border-slate-200"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteExperience(exp.id)}
                            className="p-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg text-xs font-semibold transition-colors border border-red-200"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed">{exp.description.pt}</p>

                      <div className="space-y-1 pt-1 border-t border-slate-100">
                        <div className="text-[11px] font-bold text-slate-800 uppercase">Principais Entregas & Conquistas:</div>
                        <ul className="list-disc list-inside space-y-1 text-xs text-slate-600">
                          {exp.achievements.pt.map((ach, idx) => (
                            <li key={idx} className="leading-snug">{ach}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Edit Experience Modal */}
                {editingExperience && (
                  <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-3xl w-full p-6 space-y-4 my-8 max-h-[90vh] overflow-y-auto">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                        <h3 className="text-base font-bold text-slate-900">
                          {isNewExperience ? 'Nova Experiência' : 'Editar Experiência'}
                        </h3>
                        <button
                          onClick={() => setEditingExperience(null)}
                          className="text-slate-400 hover:text-slate-600 text-sm font-bold"
                        >
                          ✕
                        </button>
                      </div>

                      <form onSubmit={handleSaveExperience} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                              Empresa / Organização
                            </label>
                            <input
                              type="text"
                              required
                              value={editingExperience.company}
                              onChange={(e) => setEditingExperience({ ...editingExperience, company: e.target.value })}
                              className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-blue-600"
                              placeholder="Ex: JLL (Jones Lang LaSalle)"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                              Cargo / Função
                            </label>
                            <input
                              type="text"
                              required
                              value={editingExperience.role.pt}
                              onChange={(e) =>
                                setEditingExperience({
                                  ...editingExperience,
                                  role: { ...editingExperience.role, pt: e.target.value },
                                })
                              }
                              className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-blue-600"
                              placeholder="Ex: Oficial de Manutenção Geral"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                              Período / Duração
                            </label>
                            <input
                              type="text"
                              required
                              value={editingExperience.period.pt}
                              onChange={(e) =>
                                setEditingExperience({
                                  ...editingExperience,
                                  period: { ...editingExperience.period, pt: e.target.value },
                                })
                              }
                              className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-blue-600"
                              placeholder="Ex: 1 ano e 1 mês"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                              Localização
                            </label>
                            <input
                              type="text"
                              value={editingExperience.location}
                              onChange={(e) => setEditingExperience({ ...editingExperience, location: e.target.value })}
                              className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-blue-600"
                              placeholder="Ex: São Paulo, SP - Brasil"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                            Descrição Geral das Atividades
                          </label>
                          <textarea
                            rows={3}
                            value={editingExperience.description.pt}
                            onChange={(e) =>
                              setEditingExperience({
                                ...editingExperience,
                                description: { ...editingExperience.description, pt: e.target.value },
                              })
                            }
                            className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-blue-600"
                            placeholder="Atuação em manutenção predial e infraestruturas críticas..."
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                            Conquistas e Entregas Técnicas (uma por linha)
                          </label>
                          <textarea
                            rows={5}
                            value={editingExperience.achievements.pt.join('\n')}
                            onChange={(e) =>
                              setEditingExperience({
                                ...editingExperience,
                                achievements: {
                                  ...editingExperience.achievements,
                                  pt: e.target.value.split('\n').filter(Boolean),
                                },
                              })
                            }
                            className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-blue-600"
                            placeholder="Inspeção periódica em geradores diesel GMG..."
                          />
                        </div>

                        <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
                          <button
                            type="button"
                            onClick={() => setEditingExperience(null)}
                            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-colors"
                          >
                            Cancelar
                          </button>
                          <button
                            type="submit"
                            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-sm transition-all flex items-center gap-1.5"
                          >
                            <Save className="w-4 h-4" />
                            <span>Salvar Experiência</span>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB 4: SKILLS & CERTIFICATIONS */}
            {activeTab === 'skills' && (
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-6">
                  <div>
                    <h2 className="text-base font-bold text-slate-900">Matriz de Habilidades & Normas Regulamentadoras</h2>
                    <p className="text-xs text-slate-500">Configure níveis de proficiência técnica e anos de experiência prática.</p>
                  </div>

                  <div className="space-y-6">
                    {data.skillsMatrix.map((category, catIndex) => (
                      <div key={category.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                            {category.title.pt}
                          </h3>
                          <button
                            onClick={() => {
                              const skillName = prompt('Nome da nova habilidade técnica:');
                              if (!skillName) return;
                              const updatedMatrix = [...data.skillsMatrix];
                              updatedMatrix[catIndex].skills.push({
                                name: skillName,
                                level: 90,
                                experienceYears: '2+ anos',
                                highlight: true,
                              });
                              persistChanges({ ...data, skillsMatrix: updatedMatrix }, 'Habilidade adicionada!');
                            }}
                            className="text-xs text-blue-600 hover:underline font-bold flex items-center gap-1"
                          >
                            <Plus className="w-3.5 h-3.5" /> Adicionar Habilidade
                          </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {category.skills.map((sk, skIndex) => (
                            <div
                              key={skIndex}
                              className="bg-white p-3 rounded-lg border border-slate-200 space-y-2"
                            >
                              <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                                <span>{sk.name}</span>
                                <button
                                  onClick={() => {
                                    const updatedMatrix = [...data.skillsMatrix];
                                    updatedMatrix[catIndex].skills.splice(skIndex, 1);
                                    persistChanges({ ...data, skillsMatrix: updatedMatrix }, 'Habilidade removida.');
                                  }}
                                  className="text-red-500 hover:text-red-700"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>

                              <div className="flex items-center gap-3">
                                <input
                                  type="range"
                                  min="50"
                                  max="100"
                                  value={sk.level}
                                  onChange={(e) => {
                                    const updatedMatrix = [...data.skillsMatrix];
                                    updatedMatrix[catIndex].skills[skIndex].level = Number(e.target.value);
                                    setData({ ...data, skillsMatrix: updatedMatrix });
                                  }}
                                  onMouseUp={() => persistChanges(data, 'Nível atualizado.')}
                                  className="w-full accent-blue-600"
                                />
                                <span className="text-xs font-extrabold text-blue-600 w-10 text-right">
                                  {sk.level}%
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 5: BLOG / WORK LOGS */}
            {activeTab === 'blog' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
                  <div>
                    <h2 className="text-base font-bold text-slate-900">Diário Técnico & Relatórios de Campo</h2>
                    <p className="text-xs text-slate-500">Publique relatórios de manutenção, estudos de caso de termografia e rotinas preventivas.</p>
                  </div>
                  <button
                    onClick={() => {
                      setIsNewPost(true);
                      setEditingPost({
                        id: `post-${Date.now()}`,
                        title: { pt: '', en: '', es: '' },
                        slug: `relatorio-${Date.now()}`,
                        category: 'case_study',
                        categoryLabel: { pt: 'Estudo de Caso Prático', en: 'Case Study', es: 'Estudio de Caso' },
                        date: new Date().toISOString().slice(0, 10),
                        readTime: '3 min',
                        summary: { pt: '', en: '', es: '' },
                        content: { pt: '', en: '', es: '' },
                        tags: ['Manutenção', 'Elétrica'],
                        equipment: [],
                        published: true,
                      });
                    }}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl flex items-center gap-1.5 shadow-sm transition-all shrink-0"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Novo Relatório / Artigo</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {data.blogPosts.map((post) => (
                    <div
                      key={post.id}
                      className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
                            {post.categoryLabel.pt}
                          </span>
                          <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {post.date} • {post.readTime}
                          </span>
                        </div>
                        <h3 className="text-sm font-bold text-slate-900">{post.title.pt}</h3>
                        <p className="text-xs text-slate-600 line-clamp-2">{post.summary.pt}</p>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => {
                            setIsNewPost(false);
                            setEditingPost(JSON.parse(JSON.stringify(post)));
                          }}
                          className="p-2 bg-slate-100 hover:bg-blue-50 hover:text-blue-600 text-slate-700 rounded-lg text-xs font-semibold transition-colors border border-slate-200"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeletePost(post.id)}
                          className="p-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg text-xs font-semibold transition-colors border border-red-200"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Edit Post Modal */}
                {editingPost && (
                  <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-3xl w-full p-6 space-y-4 my-8 max-h-[90vh] overflow-y-auto">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                        <h3 className="text-base font-bold text-slate-900">
                          {isNewPost ? 'Novo Artigo / Relatório de Campo' : 'Editar Relatório'}
                        </h3>
                        <button
                          onClick={() => setEditingPost(null)}
                          className="text-slate-400 hover:text-slate-600 text-sm font-bold"
                        >
                          ✕
                        </button>
                      </div>

                      <form onSubmit={handleSavePost} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <div className="sm:col-span-2">
                            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                              Título do Relatório
                            </label>
                            <input
                              type="text"
                              required
                              value={editingPost.title.pt}
                              onChange={(e) =>
                                setEditingPost({
                                  ...editingPost,
                                  title: { ...editingPost.title, pt: e.target.value },
                                })
                              }
                              className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-blue-600"
                              placeholder="Ex: Análise Termográfica Preventiva em Barramentos"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                              Tempo de Leitura
                            </label>
                            <input
                              type="text"
                              value={editingPost.readTime}
                              onChange={(e) => setEditingPost({ ...editingPost, readTime: e.target.value })}
                              className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-blue-600"
                              placeholder="Ex: 4 min"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                            Resumo Inicial
                          </label>
                          <textarea
                            rows={2}
                            required
                            value={editingPost.summary.pt}
                            onChange={(e) =>
                              setEditingPost({
                                ...editingPost,
                                summary: { ...editingPost.summary, pt: e.target.value },
                              })
                            }
                            className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-blue-600"
                            placeholder="Resumo em 2 frases para prévia..."
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                            Conteúdo Completo (Suporta formatação e tópicos)
                          </label>
                          <textarea
                            rows={8}
                            required
                            value={editingPost.content.pt}
                            onChange={(e) =>
                              setEditingPost({
                                ...editingPost,
                                content: { ...editingPost.content, pt: e.target.value },
                              })
                            }
                            className="w-full text-xs font-mono px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-blue-600"
                            placeholder="Descreva o procedimento técnico detalhado..."
                          />
                        </div>

                        <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
                          <button
                            type="button"
                            onClick={() => setEditingPost(null)}
                            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-colors"
                          >
                            Cancelar
                          </button>
                          <button
                            type="submit"
                            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-sm transition-all flex items-center gap-1.5"
                          >
                            <Save className="w-4 h-4" />
                            <span>Publicar Artigo</span>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB 6: PROFILE SETTINGS */}
            {activeTab === 'profile' && (
              <form onSubmit={handleSaveProfile} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-6">
                <div>
                  <h2 className="text-base font-bold text-slate-900">Configurações do Perfil Profissional</h2>
                  <p className="text-xs text-slate-500">Atualize informações de contato direto, títulos e biografia profissional.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Nome Completo</label>
                    <input
                      type="text"
                      value={data.personalInfo.name}
                      onChange={(e) =>
                        setData({
                          ...data,
                          personalInfo: { ...data.personalInfo, name: e.target.value },
                        })
                      }
                      className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">E-mail Profissional</label>
                    <input
                      type="email"
                      value={data.personalInfo.email}
                      onChange={(e) =>
                        setData({
                          ...data,
                          personalInfo: { ...data.personalInfo, email: e.target.value },
                        })
                      }
                      className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Telefone / WhatsApp</label>
                    <input
                      type="text"
                      value={data.personalInfo.phone}
                      onChange={(e) =>
                        setData({
                          ...data,
                          personalInfo: { ...data.personalInfo, phone: e.target.value },
                        })
                      }
                      className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Localização</label>
                    <input
                      type="text"
                      value={data.personalInfo.location}
                      onChange={(e) =>
                        setData({
                          ...data,
                          personalInfo: { ...data.personalInfo, location: e.target.value },
                        })
                      }
                      className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Biografia & Resumo Executivo (Português)
                  </label>
                  <textarea
                    rows={4}
                    value={data.personalInfo.bio.pt}
                    onChange={(e) =>
                      setData({
                        ...data,
                        personalInfo: {
                          ...data.personalInfo,
                          bio: { ...data.personalInfo.bio, pt: e.target.value },
                        },
                      })
                    }
                    className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-blue-600 leading-relaxed"
                  />
                </div>

                <div className="flex items-center justify-end pt-3 border-t border-slate-100">
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-sm transition-all flex items-center gap-2"
                  >
                    <Save className="w-4 h-4" />
                    <span>Salvar Dados do Perfil</span>
                  </button>
                </div>
              </form>
            )}

            {/* TAB 7: BACKUP & EXPORT */}
            {activeTab === 'backup' && (
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-6">
                <div>
                  <h2 className="text-base font-bold text-slate-900">Backup, Exportação e Restauração</h2>
                  <p className="text-xs text-slate-500">Faça o download de todo o banco de dados em formato JSON ou restaure um backup anterior.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-3">
                    <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                      <Download className="w-4 h-4 text-blue-600" />
                      <span>Exportar Dados (JSON)</span>
                    </div>
                    <p className="text-xs text-slate-600">
                      Gera uma cópia completa dos projetos, experiências, habilidades e artigos para armazenamento seguro.
                    </p>
                    <button
                      onClick={handleExportJSON}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl flex items-center gap-2 transition-all shadow-xs"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Baixar Arquivo JSON</span>
                    </button>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-3">
                    <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                      <Upload className="w-4 h-4 text-blue-600" />
                      <span>Importar Backup</span>
                    </div>
                    <p className="text-xs text-slate-600">
                      Selecione um arquivo de backup JSON previamente exportado para restaurar.
                    </p>
                    <label className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl cursor-pointer transition-all">
                      <Upload className="w-3.5 h-3.5" />
                      <span>Carregar Arquivo JSON</span>
                      <input
                        type="file"
                        accept=".json"
                        onChange={handleImportJSON}
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-slate-900">Restaurar Padrão de Fábrica</div>
                    <div className="text-[11px] text-slate-500">Recarrega o portfólio inicial completo de Allan Luiz.</div>
                  </div>
                  <button
                    onClick={handleResetDefaults}
                    className="px-3.5 py-2 bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 text-xs font-bold rounded-xl transition-colors"
                  >
                    Restaurar Padrão
                  </button>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
