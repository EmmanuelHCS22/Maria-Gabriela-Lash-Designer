import React from 'react';
import { MapPin, Navigation, ShieldCheck, MessageCircle } from 'lucide-react';
import { buildWhatsAppLink } from '../config/biositeConfig';

interface LocationSectionProps {
  locationInfo: {
    address: string;
    cityState: string;
    isConfigured: boolean;
    discreetNotice: string;
  };
  whatsappNumber: string;
}

export const LocationSection: React.FC<LocationSectionProps> = ({
  locationInfo,
  whatsappNumber,
}) => {
  const isConfigured = locationInfo.isConfigured && Boolean(locationInfo.address);

  return (
    <section id="localizacao" className="py-14 sm:py-20 px-4 sm:px-6 bg-[#F8F6F2]">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-3xl border border-[#B69A62]/20 p-6 sm:p-10 shadow-xs text-center relative overflow-hidden">
          {/* Tag de cabeçalho */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#8F7644] mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#B69A62]" />
            Localização & Acesso
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#29252B] tracking-tight">
            Onde Nos Encontrar
          </h2>

          {isConfigured ? (
            /* Exibição quando o endereço oficial for informado */
            <div className="mt-6 space-y-4">
              <p className="text-base font-medium text-[#29252B]">
                {locationInfo.address}
              </p>
              {locationInfo.cityState && (
                <p className="text-xs text-[#5B545F] uppercase tracking-wider">
                  {locationInfo.cityState}
                </p>
              )}
              <div className="pt-4">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(
                    `${locationInfo.address} ${locationInfo.cityState}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#29252B] hover:bg-[#1a171c] text-white rounded-full text-xs font-semibold uppercase tracking-wider transition-all shadow-xs"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#DFC79B]" />
                  <span>Como Chegar</span>
                </a>
              </div>
            </div>
          ) : (
            /* Mensagem discreta exigida pelo briefing quando o endereço ainda não foi configurado */
            <div className="mt-5 max-w-lg mx-auto space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#E9E3EA]/50 border border-[#B69A62]/30 flex items-center justify-center mx-auto text-[#8F7644]">
                <ShieldCheck className="w-6 h-6 stroke-[1.5]" />
              </div>

              <p className="text-sm text-[#5B545F] font-light leading-relaxed">
                {locationInfo.discreetNotice ||
                  'A localização exata é informada com exclusividade no momento do agendamento para sua privacidade, segurança e comodidade.'}
              </p>

              <div className="pt-2">
                <a
                  href={buildWhatsAppLink(
                    whatsappNumber,
                    'Olá, Maria Gabriela! Gostaria de consultar horários e a localização do seu espaço de atendimento.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-white border border-[#B69A62]/40 hover:border-[#B69A62] text-[#29252B] hover:text-[#8F7644] rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-2xs"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#B69A62]" />
                  <span>Consultar Localização no WhatsApp</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
