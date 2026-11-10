import React from 'react';
import { MessageCircle, Sparkles, Clock, HeartHandshake } from 'lucide-react';
import { buildWhatsAppLink } from '../config/biositeConfig';

interface BookingSectionProps {
  whatsappNumber: string;
  defaultMessage: string;
  onOpenConfig?: () => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  whatsappNumber,
  defaultMessage,
}) => {
  const whatsappUrl = buildWhatsAppLink(whatsappNumber, defaultMessage);

  return (
    <section id="agendamento" className="py-16 sm:py-24 px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto">
        {/* Card Principal de Destaque com visual nobre */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#29252B] to-[#1F1B22] text-white p-8 sm:p-14 text-center shadow-xl border border-[#B69A62]/30">
          {/* Luz dourada de fundo */}
          <div
            className="absolute top-0 right-1/4 w-80 h-80 bg-[#B69A62]/20 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            {/* Tag delicada */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-[#B69A62]/40 text-[#DFC79B] text-xs font-medium uppercase tracking-[0.2em]">
              <Sparkles className="w-3.5 h-3.5" />
              Atendimento Exclusivo
            </div>

            {/* Título Oficial */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
              Seu momento de se cuidar começa com um agendamento.
            </h2>

            {/* Texto Oficial */}
            <p className="text-white/80 text-sm sm:text-base font-light leading-relaxed max-w-xl mx-auto">
              Escolha seu procedimento e entre em contato para consultar os horários disponíveis.
            </p>

            {/* Botão Principal de Conversão WhatsApp */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[52px] px-10 py-4 bg-[#B69A62] hover:bg-[#A3874F] active:scale-[0.98] text-white font-semibold text-xs uppercase tracking-[0.22em] rounded-full transition-all duration-200 shadow-lg shadow-[#B69A62]/25 flex items-center justify-center gap-3 border border-[#DFC79B]/40 group"
              >
                <MessageCircle className="w-4 h-4 text-white transition-transform group-hover:scale-110" />
                <span>Agendar pelo WhatsApp</span>
              </a>
            </div>

            {/* Informações de apoio acolhedoras */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-lg mx-auto text-xs text-white/70">
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#DFC79B] shrink-0" />
                <span>Horários flexíveis mediante consulta prévia</span>
              </div>
              <div className="flex items-center gap-2.5">
                <HeartHandshake className="w-4 h-4 text-[#DFC79B] shrink-0" />
                <span>Orientações de cuidados pré e pós-procedimento</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
