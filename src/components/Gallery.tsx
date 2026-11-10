import React, { useState } from 'react';
import { X, ZoomIn, MessageCircle, Sparkles, Eye } from 'lucide-react';
import { buildWhatsAppLink } from '../config/biositeConfig';

interface GalleryItem {
  id: string;
  title: string;
  technique: string;
  description: string;
  tag: string;
  imageUrl?: string;
}

interface GalleryProps {
  items: GalleryItem[];
  whatsappNumber: string;
}

export const Gallery: React.FC<GalleryProps> = ({ items, whatsappNumber }) => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  // Renderiza arte visual vetorial de alta definição para cada técnica
  const renderArtPlaceholder = (technique: string) => {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#F8F6F2] via-[#E9E3EA]/70 to-[#C5B5D0]/30 text-center relative overflow-hidden">
        {/* Curvatura e cílios em traço dourado suave */}
        <div className="w-24 h-24 rounded-full border border-[#B69A62]/30 bg-white/70 flex items-center justify-center mb-3 shadow-xs">
          <Eye className="w-10 h-10 text-[#8F7644] stroke-[1.25]" />
        </div>
        <span className="font-serif text-base font-semibold text-[#29252B] tracking-tight">
          {technique}
        </span>
        <span className="text-[11px] font-sans text-[#8F7644] tracking-widest uppercase mt-0.5">
          Resultado Real
        </span>
        <div className="absolute bottom-3 right-3 text-[#5B545F]/50">
          <ZoomIn className="w-4 h-4" />
        </div>
      </div>
    );
  };

  return (
    <section id="galeria" className="py-16 sm:py-24 px-4 sm:px-6 relative bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Título e Subtítulo Conforme Briefing */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#8F7644] mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#B69A62]" />
            Galeria de Transformações
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#29252B] tracking-tight">
            Seu próximo olhar começa aqui.
          </h2>
          <p className="mt-3 text-sm text-[#5B545F] font-light">
            Conheça alguns dos resultados e escolha o efeito que mais combina com você.
          </p>
        </div>

        {/* Grade Editorial Assimétrica */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {items.map((item, index) => {
            const isFeatured = index === 0 || index === 3;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className={`group cursor-pointer rounded-2xl overflow-hidden border border-[#B69A62]/20 hover:border-[#B69A62] bg-[#F8F6F2] transition-all duration-300 shadow-xs hover:shadow-lg flex flex-col justify-between ${
                  isFeatured ? 'md:row-span-1' : ''
                }`}
              >
                {/* Visual / Frame */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#E9E3EA]/50">
                  {item.imageUrl ? (
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    renderArtPlaceholder(item.technique)
                  )}

                  {/* Tag discreta no topo */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-medium tracking-wider uppercase text-[#29252B] bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-md shadow-xs border border-black/[0.04]">
                      {item.tag}
                    </span>
                  </div>

                  {/* Overlay de hover com botão de zoom */}
                  <div className="absolute inset-0 bg-[#29252B]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/95 text-[#29252B] text-xs font-semibold px-4 py-2 rounded-full shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <ZoomIn className="w-3.5 h-3.5 text-[#8F7644]" />
                      Ver detalhes
                    </span>
                  </div>
                </div>

                {/* Conteúdo de Texto Editorial */}
                <div className="p-4 bg-white flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-[#29252B] group-hover:text-[#8F7644] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#5B545F] font-light mt-1 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-black/[0.04] flex items-center justify-between text-[11px] text-[#8F7644] font-medium">
                    <span>{item.technique}</span>
                    <span className="underline underline-offset-2">Explorar</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal Lightbox Ampliado */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-[#29252B]/75 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#B69A62]/30 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botão Fechar */}
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/90 text-[#29252B] flex items-center justify-center shadow-md hover:bg-white"
              aria-label="Fechar visualização"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Imagem Ampliada */}
            <div className="w-full aspect-[4/3] bg-[#E9E3EA] relative">
              {selectedItem.imageUrl ? (
                <img
                  src={selectedItem.imageUrl}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                renderArtPlaceholder(selectedItem.technique)
              )}
            </div>

            {/* Informações e Conversão do Lightbox */}
            <div className="p-6">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[11px] font-semibold tracking-wider uppercase text-[#8F7644] bg-[#E9E3EA] px-2.5 py-0.5 rounded-sm">
                  {selectedItem.tag}
                </span>
                <span className="text-xs text-[#5B545F]">· {selectedItem.technique}</span>
              </div>

              <h3 className="font-serif text-2xl font-semibold text-[#29252B] mt-1">
                {selectedItem.title}
              </h3>
              <p className="mt-2 text-sm text-[#5B545F] font-light leading-relaxed">
                {selectedItem.description}
              </p>

              {/* Botão Direto para Agendar Este Resultado */}
              <div className="mt-6 pt-4 border-t border-black/[0.06]">
                <a
                  href={buildWhatsAppLink(
                    whatsappNumber,
                    '',
                    `Gostei do efeito "${selectedItem.title}" da sua galeria!`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#29252B] hover:bg-[#1a171c] text-white rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-[#DFC79B]" />
                  Quero este efeito no meu olhar
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
