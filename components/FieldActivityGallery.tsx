'use client';

import React, { useState, useMemo } from 'react';
import {
  Search,
  Wrench,
  Zap,
  Activity,
  Layers,
  Building,
  ShieldCheck,
  MapPin,
  Calendar,
  Eye,
  X,
  CheckCircle,
  Tag,
  Maximize2,
  Camera,
  Flame,
} from 'lucide-react';
import { I18N_STRINGS, Language } from '@/lib/portfolio-data';
import { FieldActivityItem } from '@/lib/portfolio-store';

interface FieldActivityGalleryProps {
  currentLang: Language;
  activities?: FieldActivityItem[];
}

export function FieldActivityGallery({ currentLang, activities }: FieldActivityGalleryProps) {
  const t = I18N_STRINGS[currentLang];
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeItem, setActiveItem] = useState<FieldActivityItem | null>(null);

  const categories = [
    {
      id: 'all',
      label: currentLang === 'pt' ? 'Todas as Atividades' : currentLang === 'es' ? 'Todas las Actividades' : 'All Activities',
      icon: Layers,
    },
    {
      id: 'predictive',
      label: currentLang === 'pt' ? 'Termografia Preditiva' : currentLang === 'es' ? 'Termografía Predictiva' : 'Predictive Thermography',
      icon: Activity,
    },
    {
      id: 'generators_ups',
      label: currentLang === 'pt' ? 'Geradores & No-breaks' : currentLang === 'es' ? 'Generadores & SAI' : 'Generators & UPS',
      icon: Zap,
    },
    {
      id: 'electrical',
      label: currentLang === 'pt' ? 'QGBT & Comandos' : currentLang === 'es' ? 'QGBT & Mandos' : 'Switchboards & Controls',
      icon: Wrench,
    },
    {
      id: 'hydraulic',
      label: currentLang === 'pt' ? 'Hidráulica & Bombas' : currentLang === 'es' ? 'Fontanería & Bombas' : 'Hydraulics & Pumps',
      icon: Wrench,
    },
    {
      id: 'civil_painting',
      label: currentLang === 'pt' ? 'Civil & Epóxi' : currentLang === 'es' ? 'Civil & Epoxi' : 'Civil & Epoxy',
      icon: Building,
    },
  ];

  const filteredItems = useMemo(() => {
    const list = activities || [];
    return list.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const title = (item.title[currentLang] || item.title.pt || '').toLowerCase();
      const desc = (item.description[currentLang] || item.description.pt || '').toLowerCase();
      const loc = (item.location || '').toLowerCase();
      const equipmentMatch = (item.equipment || []).some((eq) => eq.toLowerCase().includes(q));
      const standardsMatch = (item.standards || []).some((st) => st.toLowerCase().includes(q));

      return title.includes(q) || desc.includes(q) || loc.includes(q) || equipmentMatch || standardsMatch;
    });
  }, [activities, selectedCategory, searchQuery, currentLang]);

  return (
    <div className="space-y-8" id="field-gallery">
      {/* Top Banner / Heading */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold bg-amber-50 text-amber-900 border border-amber-200 mb-2">
            <Camera className="w-3.5 h-3.5 text-amber-600" />
            <span>{currentLang === 'pt' ? 'Registros Fotográficos Oficiais de Campo' : currentLang === 'es' ? 'Registro Fotográfico Oficial de Campo' : 'Official Field Photographic Records'}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {currentLang === 'pt' ? 'Galeria de Atividades de Manutenção & Facilities' : currentLang === 'es' ? 'Galería de Actividades de Mantenimiento y Facilities' : 'Field Maintenance & Facilities Activity Gallery'}
          </h3>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl">
            {currentLang === 'pt'
              ? 'Evidências visuais e histórico técnico de intervenções em quadros QGBT, subestações, grupos geradores, termografia preditiva, nobreaks e sistemas prediais.'
              : currentLang === 'es'
              ? 'Evidencias visuales e histórico técnico de intervenciones en tableros QGBT, subestaciones, grupos electrógenos, termografía predictiva y sistemas edilicios.'
              : 'Visual evidence and technical records of interventions across low/medium voltage switchboards, generators, infrared thermography, and commercial building systems.'}
          </p>
        </div>

        <div className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg shrink-0 flex items-center gap-1.5 self-start md:self-auto">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>{filteredItems.length} {currentLang === 'pt' ? 'registros exibidos' : currentLang === 'es' ? 'registros mostrados' : 'records shown'}</span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
        {/* Category pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap flex items-center gap-1.5 transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-amber-600'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Live Search input */}
        <div className="relative min-w-[260px] sm:min-w-[320px]">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={currentLang === 'pt' ? 'Buscar equipamento, local ou norma...' : currentLang === 'es' ? 'Buscar equipo, lugar o norma...' : 'Search equipment, site or standard...'}
            className="w-full pl-9 pr-8 py-2 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 transition-all shadow-2xs"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Grid of Field Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => {
          const title = item.title[currentLang] || item.title.pt;
          const desc = item.description[currentLang] || item.description.pt;
          const catLabel = item.categoryLabel[currentLang] || item.categoryLabel.pt;

          return (
            <div
              key={item.id}
              className="group bg-white rounded-2xl border border-slate-200 hover:border-amber-300 hover:shadow-md transition-all duration-200 flex flex-col overflow-hidden"
            >
              {/* Photo Area */}
              <div
                className="relative h-48 sm:h-52 bg-slate-900 overflow-hidden cursor-pointer"
                onClick={() => setActiveItem(item)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image || 'https://picsum.photos/seed/maintenance-field/800/600'}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20 pointer-events-none" />

                {/* Top badges over image */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-extrabold bg-slate-900/85 backdrop-blur-xs text-amber-300 border border-amber-400/30">
                    {catLabel}
                  </span>
                  <span className="p-1.5 rounded-lg bg-slate-900/80 backdrop-blur-xs text-white group-hover:bg-amber-600 transition-colors">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </span>
                </div>

                {/* Bottom location on image */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-200 drop-shadow-sm">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="truncate">{item.location}</span>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[11px] font-bold text-slate-500">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{item.date}</span>
                    <span>•</span>
                    <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold border border-emerald-200">
                      Execução Concluída
                    </span>
                  </div>

                  <h4
                    onClick={() => setActiveItem(item)}
                    className="text-base font-bold text-slate-900 group-hover:text-amber-700 transition-colors cursor-pointer leading-snug"
                  >
                    {title}
                  </h4>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {desc}
                  </p>
                </div>

                {/* Equipment & Standards Tags */}
                <div className="space-y-3 pt-3 border-t border-slate-100">
                  {item.equipment && item.equipment.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {item.equipment.slice(0, 3).map((eq, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-700 border border-slate-200"
                        >
                          {eq}
                        </span>
                      ))}
                      {item.equipment.length > 3 && (
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-500">
                          +{item.equipment.length - 3}
                        </span>
                      )}
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-1">
                    <div className="flex flex-wrap gap-1">
                      {item.standards.map((st, i) => (
                        <span
                          key={i}
                          className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-50 text-amber-800 border border-amber-200"
                        >
                          {st}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setActiveItem(item)}
                      className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>{currentLang === 'pt' ? 'Detalhes' : currentLang === 'es' ? 'Ver' : 'Inspect'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredItems.length === 0 && (
        <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 space-y-3">
          <Camera className="w-10 h-10 text-slate-300 mx-auto" />
          <h4 className="text-base font-bold text-slate-800">
            {currentLang === 'pt' ? 'Nenhum registro encontrado' : currentLang === 'es' ? 'Ningún registro encontrado' : 'No field records found'}
          </h4>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            {currentLang === 'pt'
              ? 'Tente ajustar os termos da busca ou selecione outra categoria de manutenção.'
              : currentLang === 'es'
              ? 'Intenta ajustar los términos de búsqueda o selecciona otra categoría.'
              : 'Try adjusting your search terms or switch category filters.'}
          </p>
        </div>
      )}

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto flex flex-col relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:px-6 bg-slate-900 text-white flex items-center justify-between sticky top-0 z-10">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-amber-500 text-slate-950 font-bold">
                  <Camera className="w-4 h-4" />
                </span>
                <div>
                  <h4 className="text-sm sm:text-base font-bold leading-tight">
                    {activeItem.title[currentLang] || activeItem.title.pt}
                  </h4>
                  <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
                    <MapPin className="w-3 h-3 text-amber-400" />
                    <span>{activeItem.location}</span>
                    <span>•</span>
                    <span>{activeItem.date}</span>
                  </p>
                </div>
              </div>

              <button
                onClick={() => setActiveItem(null)}
                className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Photo View */}
            <div className="relative bg-slate-950 w-full h-72 sm:h-96 flex items-center justify-center overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activeItem.image || 'https://picsum.photos/seed/maintenance-field/800/600'}
                alt={activeItem.title[currentLang] || activeItem.title.pt}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Detail Content */}
            <div className="p-6 space-y-6">
              <div className="space-y-2">
                <h5 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  {currentLang === 'pt' ? 'Relatório Técnico & Procedimento Executado' : currentLang === 'es' ? 'Informe Técnico y Procedimiento' : 'Technical Report & Executed Procedure'}
                </h5>
                <p className="text-sm text-slate-800 leading-relaxed font-normal">
                  {activeItem.description[currentLang] || activeItem.description.pt}
                </p>
              </div>

              {/* Equipment Involved */}
              <div className="space-y-2">
                <h5 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                  <Wrench className="w-3.5 h-3.5 text-blue-600" />
                  <span>{currentLang === 'pt' ? 'Equipamentos & Ferramental Utilizado' : currentLang === 'es' ? 'Equipos y Herramientas' : 'Equipment & Tools Used'}</span>
                </h5>
                <div className="flex flex-wrap gap-1.5">
                  {activeItem.equipment.map((eq, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 text-slate-800 border border-slate-200 flex items-center gap-1.5"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-blue-600" />
                      <span>{eq}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Norms & Safety Protocol */}
              <div className="space-y-2 pt-3 border-t border-slate-100">
                <h5 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{currentLang === 'pt' ? 'Normas Regulamentadoras & Protocolos de Segurança' : currentLang === 'es' ? 'Normas Reguladoras y Seguridad' : 'Standards & Safety Protocols'}</span>
                </h5>
                <div className="flex flex-wrap gap-2">
                  {activeItem.standards.map((st, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200"
                    >
                      {st}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end">
              <button
                onClick={() => setActiveItem(null)}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-all"
              >
                {currentLang === 'pt' ? 'Fechar Visualização' : currentLang === 'es' ? 'Cerrar' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
