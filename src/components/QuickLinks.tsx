import React from 'react';
import { Calendar, Eye, Instagram, MapPin } from 'lucide-react';
import { buildWhatsAppLink } from '../config/biositeConfig';

interface QuickLinksProps {
  whatsappNumber: string;
  defaultMessage: string;
  instagramUrl: string;
  onOpenLocation?: () => void;
}

export const QuickLinks: React.FC<QuickLinksProps> = ({
  whatsappNumber,
  defaultMessage,
  instagramUrl,
  onOpenLocation,
}) => {
  const whatsappUrl = buildWhatsAppLink(whatsappNumber, defaultMessage);

  const shortcuts = [
    {
      id: 'agendamento',
      label: 'Agendamento',
      subtitle: 'Consultar horários',
      icon: Calendar,
      href: whatsappUrl,
      isExternal: true,
    },
    {
      id: 'servicos',
      label: 'Serviços & Valores',
      subtitle: 'Tabela completa',
      icon: Eye,
      href: '#servicos',
      isExternal: false,
    },
    {
      id: 'instagram',
      label: 'Instagram',
      subtitle: '@lashmariasouzza',
      icon: Instagram,
      href: instagramUrl,
      isExternal: true,
    },
    {
      id: 'localizacao',
      label: 'Localização',
      subtitle: 'Espaço de atendimento',
      icon: MapPin,
      href: '#localizacao',
      isExternal: false,
      onClick: onOpenLocation,
    },
  ];

  return (
    <section className="py-6 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        {/* Grid com 4 atalhos rápidos ergonômicos */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5">
          {shortcuts.map((item) => {
            const Icon = item.icon;
            const content = (
              <div className="flex flex-col items-center justify-center p-3.5 text-center transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-[#E9E3EA]/50 border border-[#B69A62]/25 flex items-center justify-center text-[#B69A62] mb-2 group-hover:bg-[#B69A62] group-hover:text-white transition-all duration-300">
                  <Icon className="w-4 h-4 stroke-[1.75]" />
                </div>
                <span className="font-serif text-sm font-semibold text-[#29252B] tracking-wide leading-tight group-hover:text-[#8F7644] transition-colors">
                  {item.label}
                </span>
                <span className="text-[11px] text-[#5B545F] font-light mt-0.5 tracking-tight truncate max-w-full">
                  {item.subtitle}
                </span>
              </div>
            );

            const containerClasses =
              'group block w-full min-h-[88px] bg-white/90 hover:bg-white border border-[#B69A62]/20 hover:border-[#B69A62]/60 rounded-2xl shadow-xs hover:shadow-md transition-all duration-200 active:scale-[0.98] cursor-pointer';

            if (item.isExternal) {
              return (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={containerClasses}
                  aria-label={`${item.label} - ${item.subtitle}`}
                >
                  {content}
                </a>
              );
            }

            return (
              <a
                key={item.id}
                href={item.href}
                onClick={item.onClick}
                className={containerClasses}
                aria-label={`${item.label} - ${item.subtitle}`}
              >
                {content}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
