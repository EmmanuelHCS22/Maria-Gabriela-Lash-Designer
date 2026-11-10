import React from 'react';
import { Instagram, MessageCircle, Settings } from 'lucide-react';
import { OfficialLogo } from './OfficialLogo';
import { buildWhatsAppLink } from '../config/biositeConfig';

interface FooterProps {
  whatsappNumber: string;
  defaultMessage: string;
  instagramUrl: string;
  footerPhrase: string;
  developerCredit: {
    text: string;
    url: string;
  };
  customLogoUrl?: string;
  onOpenSettings?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  whatsappNumber,
  defaultMessage,
  instagramUrl,
  footerPhrase,
  developerCredit,
  customLogoUrl,
  onOpenSettings,
}) => {
  const whatsappUrl = buildWhatsAppLink(whatsappNumber, defaultMessage);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-14 pb-24 md:pb-14 px-4 sm:px-6 bg-[#29252B] text-white border-t border-[#B69A62]/30 relative">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-6">
        {/* Monograma & Nome da Marca */}
        <div className="brightness-125">
          <OfficialLogo size="md" showSubtitle={true} customLogoUrl={customLogoUrl} />
        </div>

        {/* Frase Oficial */}
        <p className="font-serif italic text-lg sm:text-xl text-[#DFC79B] font-light max-w-md">
          “{footerPhrase}”
        </p>

        {/* Links Sociais e Contato */}
        <div className="flex items-center justify-center gap-4 pt-2">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#B69A62] text-white flex items-center justify-center transition-colors duration-200 border border-white/10 shadow-xs"
            aria-label="Acessar Instagram de Maria Gabriela"
          >
            <Instagram className="w-4 h-4" />
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#B69A62] text-white flex items-center justify-center transition-colors duration-200 border border-white/10 shadow-xs"
            aria-label="Entrar em contato pelo WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </a>

          {onOpenSettings && (
            <button
              type="button"
              onClick={onOpenSettings}
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 text-[#B69A62] flex items-center justify-center transition-colors duration-200 border border-white/10"
              title="Configurações do Biosite (WhatsApp, Logo, Localização)"
              aria-label="Abrir configurações do biosite"
            >
              <Settings className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Linha Divisória */}
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#B69A62]/40 to-transparent" />

        {/* Créditos Oficiais e Copyright */}
        <div className="text-xs text-white/50 space-y-2">
          <p>
            © {currentYear} Maria Gabriela Lash Designer. Todos os direitos reservados.
          </p>
          <p className="text-[11px]">
            <a
              href={developerCredit.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#DFC79B] hover:underline transition-colors"
            >
              {developerCredit.text}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
