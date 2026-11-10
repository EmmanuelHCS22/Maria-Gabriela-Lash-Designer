import React from 'react';
import { ArrowDown, MessageCircle, Sparkles } from 'lucide-react';
import { OfficialLogo } from './OfficialLogo';
import { buildWhatsAppLink } from '../config/biositeConfig';

interface HeroProps {
  whatsappNumber: string;
  defaultMessage: string;
  customLogoUrl?: string;
}

export const Hero: React.FC<HeroProps> = ({
  whatsappNumber,
  defaultMessage,
  customLogoUrl,
}) => {
  const whatsappUrl = buildWhatsAppLink(whatsappNumber, defaultMessage);

  return (
    <section id="hero" className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden">
      {/* Luz ambiente suave com tons de lavanda e champagne */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[360px] bg-gradient-to-b from-[#C5B5D0]/30 via-[#E9E3EA]/20 to-transparent blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-24 -right-24 w-80 h-80 bg-[#DFC79B]/20 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Logo Oficial com destaque na primeira dobra */}
        <div className="mb-6 inline-flex flex-col items-center">
          <OfficialLogo size="hero" customLogoUrl={customLogoUrl} />
        </div>

        {/* Separador editorial delicado */}
        <div className="flex items-center justify-center gap-3 my-6">
          <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#B69A62]/60" />
          <span className="w-1.5 h-1.5 rotate-45 border border-[#B69A62] bg-[#F8F6F2]" />
          <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#B69A62]/60" />
        </div>

        {/* Frase Principal com tipografia editorial nobre */}
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#29252B] max-w-2xl mx-auto leading-[1.2] text-balance">
          Realçando sua beleza através de um{' '}
          <span className="italic font-normal text-[#8F7644]">olhar único</span>.
        </h1>

        {/* Texto Complementar */}
        <p className="mt-5 text-sm sm:text-base text-[#5B545F] max-w-xl mx-auto leading-relaxed font-light">
          Cada detalhe pensado para valorizar sua beleza, respeitando a personalidade do seu olhar.
        </p>

        {/* Ações Principais (Conversão Direta) */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto">
          {/* Botão Principal: Agendar Meu Horário */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 bg-[#29252B] text-white hover:bg-[#1a171c] active:scale-[0.98] transition-all duration-200 rounded-full text-xs font-semibold uppercase tracking-[0.2em] shadow-lg shadow-[#29252B]/10 flex items-center justify-center gap-2.5 border border-[#B69A62]/30 group"
          >
            <MessageCircle className="w-4 h-4 text-[#DFC79B] transition-transform group-hover:scale-110" />
            <span>Agendar meu horário</span>
          </a>

          {/* Botão Secundário: Conhecer Serviços */}
          <a
            href="#servicos"
            className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 bg-white/80 hover:bg-white text-[#29252B] hover:text-[#8F7644] active:scale-[0.98] transition-all duration-200 rounded-full text-xs font-semibold uppercase tracking-[0.2em] shadow-sm border border-[#B69A62]/35 flex items-center justify-center gap-2"
          >
            <span>Conhecer serviços</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#B69A62]" />
          </a>
        </div>

        {/* Micro-destaques editoriais limpos (Zero-Pill Discipline) */}
        <div className="mt-10 pt-6 border-t border-[#B69A62]/15 flex items-center justify-center gap-4 text-xs text-[#5B545F] font-medium tracking-wide flex-wrap">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#B69A62]" />
            Atendimento Personalizado
          </span>
          <span aria-hidden="true" className="text-[#B69A62]/40">·</span>
          <span>Técnicas Exclusivas</span>
          <span aria-hidden="true" className="text-[#B69A62]/40">·</span>
          <span>Ambiente Confortável</span>
        </div>
      </div>
    </section>
  );
};
