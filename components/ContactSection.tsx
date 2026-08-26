'use client';

import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Send,
  MapPin,
  Linkedin,
  MessageSquare,
  ShieldCheck,
  CheckCircle,
  Globe,
  ExternalLink,
} from 'lucide-react';
import { I18N_STRINGS, Language } from '@/lib/portfolio-data';
import { PersonalInfo } from '@/lib/portfolio-store';

interface ContactSectionProps {
  currentLang: Language;
  personalInfo?: PersonalInfo;
}

export function ContactSection({ currentLang, personalInfo }: ContactSectionProps) {
  const t = I18N_STRINGS[currentLang];
  const email = personalInfo?.email || 'jallanluiz@gmail.com';
  const linkedin = personalInfo?.linkedin || 'https://www.linkedin.com/in/allan-ls-lima';
  const website = personalInfo?.website || 'https://allan-lima.vercel.app';
  const location = personalInfo?.location || 'São Paulo - SP, Brasil';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'job',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate instantaneous dispatch & prepare mailto fallback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 500);
  };

  const getMailtoLink = () => {
    const subject = encodeURIComponent(
      `Contato Portfolio Allan Luiz: ${formData.type.toUpperCase()} - ${formData.name}`
    );
    const body = encodeURIComponent(
      `Nome: ${formData.name}\nE-mail: ${formData.email}\nTelefone: ${formData.phone}\nTipo de Demanda: ${formData.type}\n\nMensagem:\n${formData.message}`
    );
    return `mailto:${email}?subject=${subject}&body=${body}`;
  };

  const whatsappMessage = encodeURIComponent(
    currentLang === 'pt'
      ? `Olá Allan Luiz! Acessei seu portfólio profissional e gostaria de conversar sobre oportunidades de manutenção e instalações elétricas.`
      : `Hello Allan! I visited your maintenance portfolio and would like to discuss an opportunity.`
  );

  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200 mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>{currentLang === 'pt' ? 'Comunicação Direta' : currentLang === 'es' ? 'Comunicación Directa' : 'Direct Communication'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.contact.sectionTitle}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-2">
            {t.contact.sectionSubtitle}
          </p>
        </div>

        {/* Contact Grid (Cards & Form) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Quick Info & Social Connectors (Col 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Direct Email Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-blue-50 text-blue-700 border border-blue-200">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    {t.contact.emailDirect}
                  </h4>
                  <a
                    href={`mailto:${email}`}
                    className="text-base font-bold text-slate-900 hover:text-blue-600 transition-colors"
                  >
                    {email}
                  </a>
                </div>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-blue-50 text-blue-700 border border-blue-200">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    {t.contact.linkedinDirect}
                  </h4>
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-blue-600 hover:underline"
                  >
                    linkedin.com/in/allan-ls-lima
                  </a>
                </div>
              </div>
            </div>

            {/* Official Website Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-indigo-50 text-indigo-700 border border-indigo-200">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    {currentLang === 'pt' ? 'Portfólio Oficial Online' : currentLang === 'es' ? 'Portafolio Oficial Online' : 'Official Online Portfolio'}
                  </h4>
                  <a
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-indigo-600 hover:underline inline-flex items-center gap-1"
                  >
                    <span>allan-lima.vercel.app</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp Quick Chat */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    {t.contact.whatsappDirect}
                  </h4>
                  <a
                    href={`https://wa.me/5511915777803?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-emerald-700 hover:underline inline-flex items-center gap-1 mt-0.5"
                  >
                    <span>{currentLang === 'pt' ? 'Iniciar Conversa no WhatsApp ((11) 91577-7803)' : 'Open WhatsApp (+55 11 91577-7803)'}</span>
                    &rarr;
                  </a>
                </div>
              </div>
            </div>

            {/* Coverage Area Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-2xs">
              <div className="flex items-center gap-2 text-blue-700 text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>{t.contact.coverageArea}</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.contact.coverageDesc} ({location})
              </p>
            </div>
          </div>

          {/* Contact Form (Col 6-12) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-md">
            {isSuccess ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  {t.contact.successTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  {t.contact.successDesc}
                </p>

                <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={getMailtoLink()}
                    className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition-all border border-slate-200"
                  >
                    {currentLang === 'pt' ? 'Abrir no meu aplicativo de E-mail' : 'Open in Default Email App'}
                  </a>
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({ name: '', email: '', phone: '', type: 'job', message: '' });
                    }}
                    className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-all shadow-xs cursor-pointer"
                  >
                    {currentLang === 'pt' ? 'Enviar Outra Mensagem' : 'Send Another Message'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
                  <Send className="w-4 h-4 text-blue-600" />
                  <span>{currentLang === 'pt' ? 'Formulário de Mensagem Direta' : 'Direct Message Form'}</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">
                      {t.contact.formName} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ex: Roberto Silva (Engenharia de Facilities)"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-blue-600"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">
                      {t.contact.formEmail} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="seu.email@empresa.com.br"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-blue-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">
                      {t.contact.formPhone}
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(11) 99999-9999"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-blue-600"
                    />
                  </div>

                  {/* Inquiry Type */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">
                      {t.contact.formType}
                    </label>
                    <select
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-blue-600"
                    >
                      <option value="job">{t.contact.typeJob}</option>
                      <option value="emergency">{t.contact.typeEmergency}</option>
                      <option value="consulting">{t.contact.typeConsulting}</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">
                    {t.contact.formMessage} *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={
                      currentLang === 'pt'
                        ? 'Descreva a posição disponível, escopo da intervenção técnica ou detalhes do projeto...'
                        : 'Describe the opportunity or project requirements...'
                    }
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-blue-600"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-xs hover:shadow flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? t.contact.submitting : t.contact.submitButton}</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
