import React from 'react';
import { Instagram, ArrowUpRight, Sparkles } from 'lucide-react';

interface InstagramSectionProps {
  instagramUrl: string;
  instagramHandle: string;
}

export const InstagramSection: React.FC<InstagramSectionProps> = ({
  instagramUrl,
  instagramHandle,
}) => {
  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 bg-white border-y border-[#B69A62]/15">
      <div className="max-w-3xl mx-auto text-center space-y-5">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#8F7644]">
          <Instagram className="w-3.5 h-3.5 text-[#B69A62]" />
          Rede Social Oficial
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#29252B] tracking-tight">
          Acompanhe meu trabalho
        </h2>

        <p className="text-[#5B545F] text-sm sm:text-base font-light max-w-lg mx-auto leading-relaxed">
          Veja resultados, novidades, bastidores e inspirações no Instagram.
        </p>

        {/* Card do Perfil Oficial */}
        <div className="pt-2">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-[#F8F6F2] border border-[#B69A62]/25 shadow-2xs mb-6">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#B69A62] via-[#C5B5D0] to-[#E9E3EA] p-[1.5px] flex items-center justify-center">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                <span className="font-serif text-xs font-semibold text-[#8F7644]">MG</span>
              </div>
            </div>
            <div className="text-left">
              <span className="text-xs font-semibold text-[#29252B] block">{instagramHandle}</span>
              <span className="text-[10px] text-[#5B545F] block font-light">
                Maria Gabriela · Lash Designer
              </span>
            </div>
          </div>
        </div>

        {/* Botão de Ação Direta */}
        <div>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#29252B] hover:bg-[#1a171c] text-white rounded-full text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-200 shadow-sm border border-[#B69A62]/30 active:scale-95 group"
          >
            <Instagram className="w-4 h-4 text-[#DFC79B]" />
            <span>Seguir no Instagram</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#DFC79B] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
