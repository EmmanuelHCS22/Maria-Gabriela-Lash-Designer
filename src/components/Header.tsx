import React, { useState } from 'react';
import { MessageCircle, Menu, X, Sparkles } from 'lucide-react';
import { buildWhatsAppLink } from '../config/biositeConfig';

interface HeaderProps {
  whatsappNumber: string;
  defaultMessage: string;
}

export const Header: React.FC<HeaderProps> = ({ whatsappNumber, defaultMessage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const whatsappUrl = buildWhatsAppLink(whatsappNumber, defaultMessage);

  const navLinks = [
    { label: 'Início', href: '#hero' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços & Valores', href: '#servicos' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Espaço', href: '#espaco' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#F8F6F2]/90 backdrop-blur-md border-b border-[#B69A62]/15 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Title (Single text element wordmark in display face) */}
        <a
          href="#hero"
          className="group flex items-center gap-2.5 text-slate-900 whitespace-nowrap shrink-0 transition-opacity hover:opacity-85"
        >
          <span className="w-8 h-8 rounded-full border border-[#B69A62]/40 bg-white/80 flex items-center justify-center text-[#B69A62] text-xs font-serif font-semibold">
            MG
          </span>
          <div className="flex flex-col text-left leading-none">
            <span className="font-serif text-base tracking-[0.2em] font-medium text-[#29252B] uppercase">
              Maria Gabriela
            </span>
            <span className="text-[9px] font-sans tracking-[0.28em] text-[#B69A62] font-medium uppercase mt-0.5">
              Lash Designer
            </span>
          </div>
        </a>

        {/* Zone 2: 4–5 single-line clean text nav links (Desktop) */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-[#29252B]/75 uppercase tracking-wider">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#B69A62] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium tracking-wide text-white bg-[#29252B] hover:bg-[#1a171c] rounded-full transition-all duration-200 shadow-sm active:scale-95 whitespace-nowrap shrink-0 border border-[#B69A62]/20"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#DFC79B]" />
            <span className="hidden sm:inline">Agendar Horário</span>
            <span className="sm:hidden">Agendar</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full text-[#29252B] hover:bg-[#C5B5D0]/20 transition-colors"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#29252B]" /> : <Menu className="w-5 h-5 text-[#29252B]" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#B69A62]/20 bg-[#F8F6F2] px-6 py-4 space-y-3 transition-all animate-in fade-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-[#29252B] py-2 border-b border-black/[0.04] last:border-none hover:text-[#B69A62] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#B69A62] text-white text-xs font-medium uppercase tracking-wider rounded-lg shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-white" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
