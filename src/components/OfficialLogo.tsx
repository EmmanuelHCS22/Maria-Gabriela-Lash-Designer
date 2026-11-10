import React from 'react';

interface OfficialLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showSubtitle?: boolean;
  customLogoUrl?: string;
}

export const OfficialLogo: React.FC<OfficialLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
  customLogoUrl,
}) => {
  if (customLogoUrl) {
    return (
      <div className={`flex flex-col items-center justify-center ${className}`}>
        <img
          src={customLogoUrl}
          alt="Maria Gabriela Lash Designer - Logo Oficial"
          className={`object-contain transition-transform duration-300 ${
            size === 'sm'
              ? 'h-10'
              : size === 'md'
              ? 'h-14'
              : size === 'lg'
              ? 'h-20'
              : 'h-28 md:h-32'
          }`}
        />
      </div>
    );
  }

  // Dimensões do monograma preservando proporções oficiais
  const iconDimensions = {
    sm: { width: 44, height: 44, strokeWidth: 1.2 },
    md: { width: 64, height: 64, strokeWidth: 1.5 },
    lg: { width: 88, height: 88, strokeWidth: 1.8 },
    hero: { width: 110, height: 110, strokeWidth: 2 },
  }[size];

  return (
    <div className={`flex flex-col items-center text-center select-none ${className}`}>
      {/* Monograma Oficial MG com estética champagne e linha de cílio fina */}
      <div className="relative flex items-center justify-center mb-2.5">
        <svg
          width={iconDimensions.width}
          height={iconDimensions.height}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-500 hover:scale-105"
        >
          {/* Círculo externo fino e delicado com pontilhado suave */}
          <circle
            cx="50"
            cy="50"
            r="47"
            stroke="#B69A62"
            strokeWidth="0.8"
            strokeOpacity="0.4"
          />
          <circle
            cx="50"
            cy="50"
            r="44"
            stroke="#B69A62"
            strokeWidth="0.6"
            strokeDasharray="2 3"
            strokeOpacity="0.6"
          />

          {/* Curva delicada de cílios e haste floral sutil */}
          <path
            d="M24 64C28 48 42 32 60 28C74 25 80 34 78 40C75 48 64 54 52 56"
            stroke="#DFC79B"
            strokeWidth="0.75"
            strokeLinecap="round"
            strokeOpacity="0.7"
          />
          {/* Cílios delicados em arco */}
          <path
            d="M36 46C38 41 42 37 46 35"
            stroke="#B69A62"
            strokeWidth="0.8"
            strokeLinecap="round"
          />
          <path
            d="M48 40C52 35 57 32 63 31"
            stroke="#B69A62"
            strokeWidth="0.8"
            strokeLinecap="round"
          />
          <path
            d="M62 38C67 36 72 35 77 37"
            stroke="#B69A62"
            strokeWidth="0.8"
            strokeLinecap="round"
          />

          {/* Letra M estilizada em serif e caligrafia */}
          <path
            d="M 31 66 L 31 38 C 31 38 37 54 48 57 C 48 57 56 46 59 38 L 59 66"
            stroke="#B69A62"
            strokeWidth={iconDimensions.strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Letra G entrelaçada em harmonia com curva nobre */}
          <path
            d="M 72 45 C 69 36 57 34 47 38 C 36 43 35 56 42 63 C 49 70 65 69 68 60 L 68 54 L 56 54"
            stroke="#9F834D"
            strokeWidth={iconDimensions.strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Ponto de brilho champagne no cruzamento */}
          <circle cx="50" cy="50" r="1.5" fill="#DFC79B" />
        </svg>
      </div>

      {/* Tipografia Oficial da Marca */}
      <div className="flex flex-col items-center">
        <span
          className={`font-serif tracking-[0.25em] text-[#29252B] font-medium uppercase leading-tight ${
            size === 'sm'
              ? 'text-xs'
              : size === 'md'
              ? 'text-sm tracking-[0.28em]'
              : size === 'lg'
              ? 'text-lg tracking-[0.3em]'
              : 'text-2xl md:text-3xl tracking-[0.32em]'
          }`}
        >
          Maria Gabriela
        </span>

        {showSubtitle && (
          <div className="flex items-center gap-2 mt-1.5">
            <span className="w-5 h-[0.5px] bg-[#B69A62]/50" />
            <span
              className={`font-sans tracking-[0.35em] text-[#B69A62] font-semibold uppercase ${
                size === 'sm'
                  ? 'text-[9px]'
                  : size === 'md'
                  ? 'text-[10px]'
                  : size === 'lg'
                  ? 'text-xs'
                  : 'text-xs md:text-sm tracking-[0.4em]'
              }`}
            >
              Lash Designer
            </span>
            <span className="w-5 h-[0.5px] bg-[#B69A62]/50" />
          </div>
        )}
      </div>
    </div>
  );
};
