import React, { useState } from 'react';
import { MessageCircle, Sparkles, Check, Info, Clock, Plus } from 'lucide-react';
import {
  ServiceItem,
  AdditionalService,
  formatCurrencyBRL,
  buildWhatsAppLink,
} from '../config/biositeConfig';

interface ServicesCatalogProps {
  services: ServiceItem[];
  additionals: AdditionalService[];
  whatsappNumber: string;
  defaultMessage: string;
}

export const ServicesCatalog: React.FC<ServicesCatalogProps> = ({
  services,
  additionals,
  whatsappNumber,
}) => {
  const [activeTab, setActiveTab] = useState<'todos' | 'cilios' | 'outros'>('todos');

  // Filtro de serviços
  const filteredServices = activeTab === 'outros' ? [] : services;
  const showAdditionals = activeTab === 'todos' || activeTab === 'outros';

  // Ícones e ilustrações visuais exclusivas para cada técnica
  const renderTechniqueIllustration = (serviceId: string) => {
    switch (serviceId) {
      case 'volume-brasileiro':
        return (
          <svg viewBox="0 0 120 70" className="w-full h-full stroke-[#B69A62]" fill="none">
            {/* Fios em Y característicos do Volume Brasileiro */}
            <path d="M60 60 L60 38 L48 18" strokeWidth="1.75" strokeLinecap="round" />
            <path d="M60 38 L72 18" strokeWidth="1.75" strokeLinecap="round" />
            <path d="M38 60 L38 42 L28 24" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.7" />
            <path d="M38 42 L48 24" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.7" />
            <path d="M82 60 L82 42 L72 24" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.7" />
            <path d="M82 42 L92 24" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.7" />
          </svg>
        );
      case 'efeito-raposa':
        return (
          <svg viewBox="0 0 120 70" className="w-full h-full stroke-[#B69A62]" fill="none">
            {/* Alongamento lateral Fox Eyes */}
            <path d="M25 55 Q 35 48, 40 38" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M42 55 Q 55 42, 62 30" strokeWidth="1.4" strokeLinecap="round" />
            <path d="M62 55 Q 78 36, 88 20" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M80 55 Q 98 30, 108 14" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        );
      case 'volume-egipcio':
        return (
          <svg viewBox="0 0 120 70" className="w-full h-full stroke-[#B69A62]" fill="none">
            {/* Fios tecnológicos em W */}
            <path d="M60 60 L60 35 L46 20" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M60 35 L60 18" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M60 35 L74 20" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M35 60 L35 40 L26 26" strokeWidth="1.3" strokeLinecap="round" strokeOpacity="0.7" />
            <path d="M35 40 L35 24" strokeWidth="1.3" strokeLinecap="round" strokeOpacity="0.7" />
            <path d="M35 40 L44 26" strokeWidth="1.3" strokeLinecap="round" strokeOpacity="0.7" />
            <path d="M85 60 L85 40 L76 26" strokeWidth="1.3" strokeLinecap="round" strokeOpacity="0.7" />
            <path d="M85 40 L85 24" strokeWidth="1.3" strokeLinecap="round" strokeOpacity="0.7" />
            <path d="M85 40 L94 26" strokeWidth="1.3" strokeLinecap="round" strokeOpacity="0.7" />
          </svg>
        );
      case 'volume-luxo':
      case 'volume-8d':
      case 'mega-volume':
        return (
          <svg viewBox="0 0 120 70" className="w-full h-full stroke-[#B69A62]" fill="none">
            {/* Fan de múltiplos fios de alta densidade */}
            <path d="M60 62 L38 20" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M60 62 L48 16" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M60 62 L60 14" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M60 62 L72 16" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M60 62 L82 20" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 120 70" className="w-full h-full stroke-[#B69A62]" fill="none">
            <path d="M30 55 Q 60 48, 90 55" strokeWidth="1" strokeLinecap="round" strokeDasharray="2 3" />
            <path d="M45 52 Q 52 32, 58 20" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M60 51 Q 65 30, 72 18" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M75 52 Q 80 34, 86 22" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        );
    }
  };

  return (
    <section id="servicos" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#F8F6F2] relative">
      <div className="max-w-5xl mx-auto">
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#8F7644] mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#B69A62]" />
            Catálogo & Valores Oficiais
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#29252B] tracking-tight">
            Menu de Procedimentos
          </h2>
          <p className="mt-3 text-sm text-[#5B545F] font-light">
            Valores transparentes, materiais de alto padrão e técnicas desenvolvidas para valorizar a
            singularidade do seu olhar.
          </p>

          {/* Abas de Filtro Funcionais */}
          <div className="mt-8 inline-flex p-1 bg-white rounded-full border border-[#B69A62]/20 shadow-xs">
            <button
              type="button"
              onClick={() => setActiveTab('todos')}
              className={`px-5 py-2 text-xs font-semibold tracking-wide rounded-full transition-all duration-200 ${
                activeTab === 'todos'
                  ? 'bg-[#29252B] text-white shadow-xs'
                  : 'text-[#5B545F] hover:text-[#29252B]'
              }`}
            >
              Todos os Serviços
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('cilios')}
              className={`px-5 py-2 text-xs font-semibold tracking-wide rounded-full transition-all duration-200 ${
                activeTab === 'cilios'
                  ? 'bg-[#29252B] text-white shadow-xs'
                  : 'text-[#5B545F] hover:text-[#29252B]'
              }`}
            >
              Extensão de Cílios
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('outros')}
              className={`px-5 py-2 text-xs font-semibold tracking-wide rounded-full transition-all duration-200 ${
                activeTab === 'outros'
                  ? 'bg-[#29252B] text-white shadow-xs'
                  : 'text-[#5B545F] hover:text-[#29252B]'
              }`}
            >
              Sobrancelha & Adicionais
            </button>
          </div>
        </div>

        {/* Grade de Extensão de Cílios (1 col mobile, 2 cols desktop) */}
        {filteredServices.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
            {filteredServices.map((service) => {
              const whatsappLink = buildWhatsAppLink(
                whatsappNumber,
                '',
                `${service.name} (Aplicação: ${formatCurrencyBRL(service.applicationPrice)})`
              );

              return (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl border border-[#B69A62]/20 p-5 sm:p-6 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group hover:border-[#B69A62]/50"
                >
                  <div>
                    {/* Topo do Card: Badge e Duração */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      {service.badge ? (
                        <span className="text-[11px] font-medium tracking-wider uppercase text-[#8F7644] bg-[#E9E3EA]/70 px-2.5 py-0.5 rounded-md border border-[#B69A62]/20">
                          {service.badge}
                        </span>
                      ) : (
                        <span className="text-[11px] font-medium tracking-wider uppercase text-[#5B545F]">
                          Extensão de Cílios
                        </span>
                      )}

                      {service.duration && (
                        <span className="flex items-center gap-1 text-[11px] text-[#5B545F]/80">
                          <Clock className="w-3 h-3 text-[#B69A62]" />
                          {service.duration}
                        </span>
                      )}
                    </div>

                    {/* Ilustração Técnica / Foto Real */}
                    <div className="w-full h-28 rounded-xl bg-gradient-to-b from-[#F8F6F2] to-[#E9E3EA]/40 border border-[#B69A62]/15 mb-4 flex items-center justify-center p-3 relative overflow-hidden group-hover:scale-[1.01] transition-transform">
                      {service.imageUrl ? (
                        <img
                          src={service.imageUrl}
                          alt={service.name}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      ) : (
                        renderTechniqueIllustration(service.id)
                      )}
                    </div>

                    {/* Nome do Procedimento */}
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#29252B] tracking-tight">
                      {service.name}
                    </h3>

                    {/* Descrição */}
                    <p className="mt-1.5 text-xs sm:text-sm text-[#5B545F] font-light leading-relaxed">
                      {service.description}
                    </p>

                    {/* Nota Especial (ex: Método Capping) */}
                    {service.note && (
                      <div className="mt-3 p-2.5 rounded-lg bg-[#E9E3EA]/50 border border-[#B69A62]/20 flex items-start gap-2 text-[11px] text-[#5B545F] leading-snug">
                        <Info className="w-3.5 h-3.5 text-[#8F7644] shrink-0 mt-0.5" />
                        <span>{service.note}</span>
                      </div>
                    )}
                  </div>

                  {/* Bloco de Preços Distintos (Aplicação vs Manutenção) */}
                  <div className="mt-6 pt-4 border-t border-black/[0.06]">
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {/* Aplicação */}
                      <div className="bg-[#F8F6F2] p-2.5 rounded-xl border border-[#B69A62]/15">
                        <span className="text-[10px] uppercase tracking-wider text-[#5B545F] font-medium block">
                          Aplicação
                        </span>
                        <span className="text-lg sm:text-xl font-serif font-bold text-[#29252B] tabular-nums mt-0.5 block">
                          {formatCurrencyBRL(service.applicationPrice)}
                        </span>
                      </div>

                      {/* Manutenção */}
                      <div className="bg-[#F8F6F2] p-2.5 rounded-xl border border-[#B69A62]/15">
                        <span className="text-[10px] uppercase tracking-wider text-[#5B545F] font-medium block">
                          Manutenção
                        </span>
                        {service.maintenancePrice !== null ? (
                          <span className="text-lg sm:text-xl font-serif font-bold text-[#8F7644] tabular-nums mt-0.5 block">
                            {formatCurrencyBRL(service.maintenancePrice)}
                          </span>
                        ) : (
                          <span className="text-xs font-sans italic text-[#5B545F] mt-1.5 block">
                            Sob consulta
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Botão de Agendamento do Procedimento Específico */}
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 bg-[#29252B] hover:bg-[#1a171c] active:scale-[0.98] text-white rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 border border-[#B69A62]/20 shadow-xs"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#DFC79B]" />
                      Agendar {service.name}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Seção Complementar: Outros Serviços (Sobrancelha & Personalização) */}
        {showAdditionals && (
          <div className="bg-white rounded-3xl border border-[#B69A62]/20 p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-[1px] bg-[#B69A62]" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8F7644]">
                Serviços Complementares
              </span>
            </div>
            <h3 className="font-serif text-2xl font-medium text-[#29252B] tracking-tight">
              Design de Sobrancelhas & Personalização de Fios
            </h3>
            <p className="text-xs sm:text-sm text-[#5B545F] font-light mt-1 mb-6">
              Adicione cuidados extras para harmonizar o desenho natural do seu rosto.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card Design de Sobrancelha */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#F8F6F2] border border-[#B69A62]/20 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-lg font-semibold text-[#29252B]">
                    Design de Sobrancelhas
                  </span>
                  <span className="text-[10px] tracking-wider uppercase bg-[#C5B5D0]/30 text-[#29252B] px-2 py-0.5 rounded-sm">
                    Harmonização
                  </span>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between py-1.5 border-b border-black/[0.04]">
                    <span className="text-[#5B545F] font-light">Com Henna</span>
                    <span className="font-serif font-bold text-base text-[#29252B] tabular-nums">
                      R$ 25,00
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1.5">
                    <span className="text-[#5B545F] font-light">Sem Henna</span>
                    <span className="font-serif font-bold text-base text-[#29252B] tabular-nums">
                      R$ 15,00
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Personalização de Fios (Adicionais) */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#F8F6F2] border border-[#B69A62]/20 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-lg font-semibold text-[#29252B]">
                    Personalização de Cílios
                  </span>
                  <span className="text-[10px] tracking-wider uppercase bg-[#DFC79B]/40 text-[#8F7644] px-2 py-0.5 rounded-sm">
                    Adicional
                  </span>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between py-1.5 border-b border-black/[0.04]">
                    <div>
                      <span className="text-[#29252B] font-medium block">Fio Marrom</span>
                      <span className="text-[11px] text-[#5B545F] font-light">Efeito ultra natural e suave</span>
                    </div>
                    <span className="font-serif font-bold text-base text-[#8F7644] tabular-nums">
                      + R$ 10,00
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1.5">
                    <div>
                      <span className="text-[#29252B] font-medium block">Fio Colorido</span>
                      <span className="text-[11px] text-[#5B545F] font-light">Pontos criativos e iluminados</span>
                    </div>
                    <span className="font-serif font-bold text-base text-[#8F7644] tabular-nums">
                      + R$ 5,00
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Aviso informativo de transparência */}
            <div className="mt-4 pt-3 border-t border-black/[0.04] text-[11px] text-[#5B545F] flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-[#8F7644]" />
              <span>
                Valores de personalização acrescentados ao procedimento de extensão de cílios escolhido.
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
