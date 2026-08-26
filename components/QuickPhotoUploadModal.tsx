'use client';

import React, { useState } from 'react';
import {
  X,
  Camera,
  CheckCircle2,
  Calendar,
  MapPin,
  Tag,
  ShieldCheck,
  Wrench,
} from 'lucide-react';
import { FieldActivityItem, savePortfolioData, getPortfolioData } from '@/lib/portfolio-store';
import { Language } from '@/lib/portfolio-data';
import { GoogleDriveImageUpload } from '@/components/GoogleDriveImageUpload';

interface QuickPhotoUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  onSuccess: (newItem: FieldActivityItem) => void;
}

export function QuickPhotoUploadModal({
  isOpen,
  onClose,
  currentLang,
  onSuccess,
}: QuickPhotoUploadModalProps) {
  const [category, setCategory] = useState<FieldActivityItem['category']>('electrical');
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('JLL - Operação Facilities');
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [description, setDescription] = useState('');
  const [standards, setStandards] = useState('NR-10, NBR 5410');
  const [equipment, setEquipment] = useState('Multímetro, Alicate Amperímetro');
  const [imageUrl, setImageUrl] = useState('');
  const [isHighlight, setIsHighlight] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageUrl) {
      setErrorMessage(
        currentLang === 'pt'
          ? 'Por favor, tire uma foto ou selecione uma imagem dos seus arquivos.'
          : 'Please capture a photo or select an image from your files.'
      );
      return;
    }

    if (!title.trim()) {
      setErrorMessage(
        currentLang === 'pt'
          ? 'Por favor, informe o título da atividade realizada.'
          : 'Please provide a title for the activity.'
      );
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    const categoryLabels: Record<FieldActivityItem['category'], Record<Language, string>> = {
      predictive: { pt: 'Termografia Preditiva', en: 'Predictive Thermography', es: 'Termografía Predictiva' },
      generators_ups: { pt: 'Geradores & No-breaks', en: 'Generators & UPS', es: 'Generadores & SAI' },
      electrical: { pt: 'QGBT & Comandos', en: 'Switchboards & Controls', es: 'QGBT y Mandos' },
      hydraulic: { pt: 'Hidráulica & Bombas', en: 'Hydraulics & Pumps', es: 'Fontanería y Bombas' },
      civil_painting: { pt: 'Civil & Pintura Epóxi', en: 'Civil & Epoxy Coating', es: 'Civil y Pintura Epoxi' },
    };

    const newItem: FieldActivityItem = {
      id: `fa-${Date.now()}`,
      title: {
        pt: title,
        en: title,
        es: title,
      },
      category,
      categoryLabel: categoryLabels[category],
      location: location || 'JLL - Manutenção Predial',
      date: date.slice(0, 7), // YYYY-MM
      equipment: equipment
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean),
      standards: standards
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean),
      description: {
        pt: description || title,
        en: description || title,
        es: description || title,
      },
      image: imageUrl,
      highlight: isHighlight,
    };

    try {
      const current = getPortfolioData();
      const updated = [newItem, ...(current.fieldActivities || [])];
      savePortfolioData({ ...current, fieldActivities: updated });
      onSuccess(newItem);
      onClose();
    } catch (err) {
      console.error(err);
      setErrorMessage('Erro ao salvar no banco local.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-2xl w-full my-6 max-h-[92vh] overflow-y-auto flex flex-col">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-slate-200 p-4 sm:p-5 flex items-center justify-between z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-xs">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                {currentLang === 'pt'
                  ? 'Nova Foto de Campo & Google Drive'
                  : currentLang === 'es'
                  ? 'Nueva Foto de Campo y Google Drive'
                  : 'New Field Photo & Google Drive'}
              </h2>
              <p className="text-xs text-slate-500">
                {currentLang === 'pt'
                  ? 'Envie diretamente da câmera ou dos arquivos do seu celular'
                  : 'Send directly from mobile camera or files'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4 sm:space-y-5 flex-1">
          {/* Direct Camera / Files Google Drive Upload Component */}
          <GoogleDriveImageUpload
            currentImageUrl={imageUrl}
            titleHint={title || 'foto_campo'}
            label={
              currentLang === 'pt'
                ? 'Capturar Foto da Câmera ou Selecionar da Galeria'
                : 'Capture Photo from Camera or Select from Gallery'
            }
            onImageChange={(newUrl) => setImageUrl(newUrl)}
          />

          {/* Activity Category & Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                {currentLang === 'pt' ? 'Categoria Técnica' : 'Technical Category'}
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as FieldActivityItem['category'])}
                className="w-full text-xs font-semibold px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-blue-600"
              >
                <option value="electrical">⚡ QGBT & Comandos de Motores</option>
                <option value="generators_ups">🔋 Geradores & No-breaks (UPS)</option>
                <option value="predictive">🌡️ Termografia Preditiva</option>
                <option value="hydraulic">🚰 Hidráulica & Bombas</option>
                <option value="civil_painting">🏗️ Civil & Pintura Epóxi</option>
              </select>
            </div>

            <div className="flex items-center pt-2 sm:pt-6">
              <label className="flex items-center gap-2 text-xs font-bold text-slate-700 cursor-pointer bg-slate-50 hover:bg-slate-100 p-2.5 rounded-xl border border-slate-200 w-full transition-colors">
                <input
                  type="checkbox"
                  checked={isHighlight}
                  onChange={(e) => setIsHighlight(e.target.checked)}
                  className="w-4 h-4 text-amber-600 rounded accent-amber-600"
                />
                <span>{currentLang === 'pt' ? 'Destacar no topo da galeria' : 'Highlight in gallery top'}</span>
              </label>
            </div>
          </div>

          {/* Title */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
              {currentLang === 'pt' ? 'Título da Atividade / Procedimento' : 'Activity / Procedure Title'}
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={
                currentLang === 'pt'
                  ? 'Ex: Termografia e reaperto de barramentos em QGBT 800A'
                  : 'e.g., Thermography & busbar retorquing in 800A switchboard'
              }
              className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-blue-600 font-medium"
            />
          </div>

          {/* Location & Date */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{currentLang === 'pt' ? 'Local / Empresa' : 'Location / Company'}</span>
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Ex: JLL - Torre Empresarial"
                className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-blue-600"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>{currentLang === 'pt' ? 'Data da Execução' : 'Execution Date'}</span>
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-blue-600"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
              {currentLang === 'pt' ? 'Descrição Técnica Detalhada' : 'Technical Description'}
            </label>
            <textarea
              rows={3}
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder={
                currentLang === 'pt'
                  ? 'Descreva o procedimento executado, anomalias identificadas e medidas corretivas aplicadas...'
                  : 'Describe the technical procedure performed and safety measures...'
              }
              className="w-full text-xs sm:text-sm px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-blue-600"
            />
          </div>

          {/* Technical Standards & Equipment */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>{currentLang === 'pt' ? 'Normas (separadas por vírgula)' : 'Standards'}</span>
              </label>
              <input
                type="text"
                value={standards}
                onChange={(e) => setStandards(e.target.value)}
                placeholder="NR-10, NR-35, NBR 5410"
                className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-blue-600"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1 flex items-center gap-1">
                <Wrench className="w-3.5 h-3.5 text-blue-600" />
                <span>{currentLang === 'pt' ? 'Equipamentos Utilizados' : 'Equipment Used'}</span>
              </label>
              <input
                type="text"
                value={equipment}
                onChange={(e) => setEquipment(e.target.value)}
                placeholder="Câmera FLIR, Torquímetro, EPI"
                className="w-full text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-blue-600"
              />
            </div>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs font-bold text-red-700">
              {errorMessage}
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-colors cursor-pointer"
            >
              {currentLang === 'pt' ? 'Cancelar' : 'Cancel'}
            </button>

            <button
              type="submit"
              disabled={isSubmitting || !imageUrl}
              className="px-6 py-2.5 bg-amber-600 hover:bg-amber-700 disabled:opacity-50 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition-all flex items-center gap-2 cursor-pointer"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>
                {isSubmitting
                  ? currentLang === 'pt'
                    ? 'Salvando...'
                    : 'Saving...'
                  : currentLang === 'pt'
                  ? 'Salvar & Publicar no Portfólio'
                  : 'Save & Publish to Portfolio'}
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
