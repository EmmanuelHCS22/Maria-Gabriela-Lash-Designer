import React from 'react';
import { Sparkles, Moon, Armchair, ShieldCheck } from 'lucide-react';

interface StudioSectionProps {
  customStudioPhotoUrl?: string;
}

export const StudioSection: React.FC<StudioSectionProps> = ({ customStudioPhotoUrl }) => {
  return (
    <section id="espaco" className="py-16 sm:py-24 px-4 sm:px-6 bg-[#F8F6F2] relative overflow-hidden">
      {/* Luz difusa suave evocando o tom de lavanda do espaço */}
      <div
        className="absolute top-1/2 left-0 w-72 h-72 bg-[#C5B5D0]/30 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Apresentação de Imagem do Espaço Físico */}
          <div className="md:col-span-6">
            <div className="relative group">
              {/* Moldura de fundo lavanda & champagne */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#C5B5D0]/40 to-[#DFC79B]/30 rounded-3xl blur-md -z-10" />

              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#C5B5D0]/25 border border-[#B69A62]/30 shadow-xs relative flex flex-col justify-between p-6">
                {customStudioPhotoUrl ? (
                  <img
                    src={customStudioPhotoUrl}
                    alt="Espaço Maria Gabriela - Ambiente de atendimento"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  /* Composição visual representando a decoração real com parede lavanda */
                  <div className="w-full h-full flex flex-col justify-between items-center text-center py-4">
                    <div className="w-12 h-12 rounded-full bg-white/80 border border-[#B69A62]/40 flex items-center justify-center text-[#8F7644] shadow-xs">
                      <Armchair className="w-6 h-6 stroke-[1.5]" />
                    </div>

                    <div className="my-auto px-4">
                      <span className="font-serif text-2xl font-medium text-[#29252B] block">
                        Ambiente Suave & Acolhedor
                      </span>
                      <p className="text-xs text-[#5B545F] font-light mt-2 max-w-xs mx-auto">
                        Parede lavanda, iluminação suave e cadeira ergonômica para você relaxar durante cada aplicação.
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-[10px] tracking-widest uppercase font-semibold text-[#8F7644] bg-white/80 px-3 py-1 rounded-full border border-[#B69A62]/20">
                      <Sparkles className="w-3 h-3 text-[#B69A62]" />
                      Espaço Exclusivo
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Texto Oficial e Diferenciais do Ambiente */}
          <div className="md:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#8F7644]">
              <span className="w-6 h-[1px] bg-[#B69A62]" />
              Conforto & Bem-Estar
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#29252B] tracking-tight leading-tight">
              Um espaço pensado para você.
            </h2>

            <p className="text-[#5B545F] text-sm sm:text-base leading-relaxed font-light">
              Um cantinho preparado com carinho para proporcionar conforto, cuidado e uma experiência
              especial em cada atendimento.
            </p>

            {/* Lista de Detalhes Valorizados do Ambiente */}
            <div className="pt-4 space-y-3.5 border-t border-[#B69A62]/20">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white border border-[#B69A62]/25 flex items-center justify-center shrink-0 text-[#8F7644] shadow-2xs mt-0.5">
                  <Armchair className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif text-sm font-semibold text-[#29252B]">
                    Cadeira e Acomodação Confortável
                  </h3>
                  <p className="text-xs text-[#5B545F] font-light">
                    Postura relaxante e acolhedora durante todo o procedimento de extensão.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white border border-[#B69A62]/25 flex items-center justify-center shrink-0 text-[#8F7644] shadow-2xs mt-0.5">
                  <Moon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif text-sm font-semibold text-[#29252B]">
                    Decoração Harmoniosa & Clima Tranquilo
                  </h3>
                  <p className="text-xs text-[#5B545F] font-light">
                    A suavidade da parede lavanda com toques dourados para desacelerar da rotina.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-white border border-[#B69A62]/25 flex items-center justify-center shrink-0 text-[#8F7644] shadow-2xs mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif text-sm font-semibold text-[#29252B]">
                    Higiene Rigorosa & Biossegurança
                  </h3>
                  <p className="text-xs text-[#5B545F] font-light">
                    Materiais descartáveis e instrumentos esterilizados para total segurança dos seus olhos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
