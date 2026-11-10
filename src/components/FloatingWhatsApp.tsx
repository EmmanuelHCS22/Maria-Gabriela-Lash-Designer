import React, { useState } from 'react';
import { MessageCircle, X, Sparkles } from 'lucide-react';
import { buildWhatsAppLink } from '../config/biositeConfig';

interface FloatingWhatsAppProps {
  whatsappNumber: string;
  defaultMessage: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  whatsappNumber,
  defaultMessage,
}) => {
  const [showQuickPrompt, setShowQuickPrompt] = useState(false);
  const whatsappUrl = buildWhatsAppLink(whatsappNumber, defaultMessage);

  return (
    <aside aria-label="Atendimento pelo WhatsApp" className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end">
      {/* Balão de atendimento sutil e elegante */}
      {showQuickPrompt && (
        <div className="mb-3 max-w-[260px] bg-white rounded-2xl shadow-xl border border-[#B69A62]/30 p-3.5 text-left text-xs animate-in fade-in slide-in-from-bottom-3 relative">
          <button
            type="button"
            onClick={() => setShowQuickPrompt(false)}
            className="absolute top-2 right-2 text-[#5B545F] hover:text-[#29252B]"
            aria-label="Fechar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center gap-1.5 text-[#8F7644] font-semibold text-[11px] mb-1">
            <Sparkles className="w-3 h-3" />
            <span>Maria Gabriela Lash</span>
          </div>
          <p className="text-[#5B545F] font-light text-[11px] leading-tight">
            Olá! Deseja consultar nossos horários ou tirar dúvidas sobre os procedimentos?
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2.5 block text-center py-1.5 px-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold rounded-lg text-[11px] transition-colors shadow-2xs"
          >
            Iniciar conversa no WhatsApp
          </a>
        </div>
      )}

      {/* Botão Flutuante Principal */}
      <div className="relative group">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white flex items-center justify-center shadow-lg shadow-[#25D366]/30 transition-all duration-300 border-2 border-white focus:outline-hidden focus:ring-2 focus:ring-[#B69A62]"
          aria-label="Agendar horário pelo WhatsApp"
          title="Agendar horário no WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-current text-white" />
        </a>

        {/* Indicador sutil de atendimento ativo */}
        <span
          className="absolute top-0 right-0 w-3.5 h-3.5 bg-[#B69A62] border-2 border-white rounded-full shadow-2xs"
          title="Atendimento ativo"
        />
      </div>
    </aside>
  );
};
