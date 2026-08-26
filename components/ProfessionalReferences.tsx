'use client';

import React from 'react';
import { UserCheck, Phone, Building2, ShieldCheck, MessageCircle, ExternalLink, Wrench, Code2, Layers } from 'lucide-react';
import { PROFESSIONAL_REFERENCES, ProfessionalReferenceItem, I18N_STRINGS, Language } from '@/lib/portfolio-data';
import { TrackType } from '@/components/Hero';

interface ProfessionalReferencesProps {
  currentLang: Language;
  currentTrack?: TrackType;
  references?: ProfessionalReferenceItem[];
}

export function ProfessionalReferences({ currentLang, currentTrack = 'all', references }: ProfessionalReferencesProps) {
  const t = I18N_STRINGS[currentLang];
  const allList = references && references.length > 0 ? references : PROFESSIONAL_REFERENCES;

  // Filter references based on selected track
  const filteredList = allList.filter((ref) => {
    if (!currentTrack || currentTrack === 'all') return true;
    if (!ref.track || ref.track === 'all') return true;
    return ref.track === currentTrack;
  });

  return (
    <section id="references" className="py-16 md:py-20 bg-white border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
            <UserCheck className="w-4 h-4 text-blue-600" />
            <span>{t.references.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {t.references.sectionTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            {currentTrack === 'maintenance'
              ? (currentLang === 'pt' ? 'Contatos e referências técnicas de liderança para Manutenção Elétrica e Facilities.' : 'Direct technical supervisor references for Electrical Maintenance & Facilities.')
              : currentTrack === 'developer'
              ? (currentLang === 'pt' ? 'Contatos e referências para validação técnica em Desenvolvimento de Software & Full-Stack.' : 'Technical references for Software Engineering & Full-Stack Development verification.')
              : t.references.sectionSubtitle}
          </p>
        </div>

        {/* References Cards */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 max-w-2xl mx-auto">
          {filteredList.map((ref) => {
            const isMaintenanceRef = ref.track === 'maintenance';
            const isDevRef = ref.track === 'developer';

            // Customized WhatsApp message for the reference recipient
            const refWhatsAppMessage = encodeURIComponent(
              currentLang === 'pt'
                ? `Olá ${ref.name}, sou recrutador e gostaria de consultar referências profissionais sobre o Allan Luiz Silveira Lima (${isMaintenanceRef ? 'área de Manutenção e Instalações Elétricas' : isDevRef ? 'área de Engenharia de Software / Desenvolvimento Full-Stack' : 'atuação profissional'}).`
                : currentLang === 'es'
                ? `Hola ${ref.name}, soy reclutador y me gustaría consultar referencias sobre Allan Luiz Silveira Lima (${isMaintenanceRef ? 'Mantenimiento Eléctrico' : isDevRef ? 'Desarrollo de Software' : 'perfil profesional'}).`
                : `Hello ${ref.name}, I am a recruiter inquiring about professional references for Allan Luiz Silveira Lima.`
            );

            return (
              <div
                key={ref.id}
                className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl text-white flex items-center justify-center font-black text-xl shadow-xs shrink-0 ${
                      isMaintenanceRef ? 'bg-amber-600' : isDevRef ? 'bg-blue-600' : 'bg-indigo-600'
                    }`}>
                      {ref.name.charAt(0)}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg font-bold text-slate-900">
                          {ref.name}
                        </h3>
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
                          {t.references.verifiedStatus}
                        </span>
                        {ref.track && (
                          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wide border ${
                            ref.track === 'maintenance'
                              ? 'bg-amber-50 text-amber-800 border-amber-200'
                              : ref.track === 'developer'
                              ? 'bg-blue-50 text-blue-800 border-blue-200'
                              : 'bg-slate-100 text-slate-700 border-slate-300'
                          }`}>
                            {ref.track === 'maintenance' ? (
                              <>
                                <Wrench className="w-3 h-3 text-amber-600" />
                                <span>Trilha A (Manutenção)</span>
                              </>
                            ) : ref.track === 'developer' ? (
                              <>
                                <Code2 className="w-3 h-3 text-blue-600" />
                                <span>Trilha B (Software)</span>
                              </>
                            ) : (
                              <>
                                <Layers className="w-3 h-3 text-slate-500" />
                                <span>Geral</span>
                              </>
                            )}
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-semibold text-blue-700 mt-0.5">
                        {ref.role[currentLang] || ref.role.pt}
                      </p>
                      <div className="flex items-center gap-1.5 text-xs text-slate-600 mt-1">
                        <Building2 className="w-3.5 h-3.5 text-slate-400" />
                        <span>{ref.company}</span>
                        <span className="text-slate-300">•</span>
                        <span className="text-slate-500">{ref.relationship[currentLang] || ref.relationship.pt}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Note / Description */}
                <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <p className="font-medium text-slate-700">
                    {ref.note[currentLang] || ref.note.pt}
                  </p>
                </div>

                {/* Contact Actions for Recruiters */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={`tel:${ref.phone.replace(/[^0-9+]/g, '')}`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 font-semibold text-xs sm:text-sm hover:bg-slate-100 hover:border-slate-400 transition-colors shadow-2xs"
                  >
                    <Phone className="w-4 h-4 text-blue-600" />
                    <span>{ref.phone}</span>
                  </a>

                  {ref.whatsappNumber && (
                    <a
                      href={`https://wa.me/${ref.whatsappNumber}?text=${refWhatsAppMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 text-white font-semibold text-xs sm:text-sm hover:bg-emerald-700 transition-colors shadow-2xs"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>{t.references.contactOnWhatsApp}</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}

          {filteredList.length === 0 && (
            <div className="text-center p-8 bg-slate-50 border border-slate-200 rounded-2xl text-slate-500 text-sm">
              {currentLang === 'pt'
                ? 'Nenhuma referência cadastrada para esta trilha no momento. Você pode cadastrar novas referências no Painel CMS.'
                : 'No references registered for this track yet. You can add references in the Admin CMS.'}
            </div>
          )}
        </div>

        {/* Safety & Compliance Assurance */}
        <div className="max-w-2xl mx-auto p-4 rounded-xl bg-blue-50/80 border border-blue-200 flex items-start sm:items-center gap-3 text-xs text-blue-900">
          <ShieldCheck className="w-5 h-5 text-blue-700 shrink-0 mt-0.5 sm:mt-0" />
          <p className="leading-relaxed">
            {currentLang === 'pt'
              ? 'Todas as experiências descritas no portfólio possuem registro formal em CTPS, histórico de entregas verificáveis e conformidade integral com normas técnicas.'
              : 'All background records presented are formally verifiable through employment history and strict regulatory compliance standards.'}
          </p>
        </div>

      </div>
    </section>
  );
}
