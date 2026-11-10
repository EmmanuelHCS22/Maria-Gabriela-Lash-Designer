import React from 'react';
import { Heart, Sparkles, UserCheck } from 'lucide-react';

interface AboutProps {
  customPhotoUrl?: string;
}

export const About: React.FC<AboutProps> = ({ customPhotoUrl }) => {
  return (
    <section id="sobre" className="py-14 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Detalhe de fundo suave em lavanda e malva */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/80 backdrop-blur-xs rounded-3xl border border-[#B69A62]/20 p-6 sm:p-10 shadow-xs relative">
          {/* Decoração sutil de canto */}
          <div className="absolute top-4 right-4 w-12 h-12 border-t border-r border-[#B69A62]/30 rounded-tr-xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Foto da profissional / Frame Editorial */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative group w-full max-w-[280px]">
                {/* Aura de fundo lavanda */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-[#C5B5D0]/50 to-[#DFC79B]/40 rounded-3xl blur-md -z-10 group-hover:blur-lg transition-all duration-300" />

                <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden bg-[#E9E3EA] border border-[#B69A62]/30 flex flex-col items-center justify-center p-6 text-center relative shadow-sm">
                  {customPhotoUrl ? (
                    <img
                      src={customPhotoUrl}
                      alt="Maria Gabriela Lash Designer"
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    /* Frame Editorial elegante para foto real da profissional */
                    <div className="w-full h-full flex flex-col items-center justify-between py-6">
                      <div className="w-20 h-20 rounded-full border border-[#B69A62]/50 bg-[#F8F6F2] flex items-center justify-center shadow-xs">
                        <span className="font-serif text-2xl text-[#8F7644] font-medium">MG</span>
                      </div>

                      <div className="my-auto py-2">
                        <span className="font-serif text-lg text-[#29252B] font-medium block">
                          Maria Gabriela
                        </span>
                        <span className="text-[11px] uppercase tracking-[0.25em] text-[#8F7644] font-semibold mt-1 block">
                          Lash Designer
                        </span>
                        <p className="text-[11px] text-[#5B545F] mt-2 font-light italic px-2">
                          “Beleza e delicadeza em cada olhar.”
                        </p>
                      </div>

                      <div className="flex items-center gap-1.5 text-[10px] text-[#8F7644] tracking-wider uppercase">
                        <Sparkles className="w-3 h-3" />
                        Atendimento com Hora Marcada
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Texto de Apresentação Oficial */}
            <div className="md:col-span-7 text-left space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#8F7644]">
                <span className="w-6 h-[1px] bg-[#B69A62]" />
                Conheça a profissional
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-medium text-[#29252B] tracking-tight leading-tight">
                Prazer, sou Maria Gabriela
              </h2>

              <p className="text-[#5B545F] text-sm sm:text-base leading-relaxed font-light">
                Sou Lash Designer e acredito que cada olhar possui sua própria beleza. Meu propósito é
                proporcionar uma experiência de cuidado, autoestima e valorização, oferecendo
                procedimentos pensados para realçar a beleza de cada cliente.
              </p>

              {/* Pilares autênticos da experiência */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5 border-t border-[#B69A62]/15">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#C5B5D0]/30 flex items-center justify-center shrink-0 text-[#29252B] mt-0.5">
                    <Heart className="w-4 h-4 text-[#8F7644]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-sm font-semibold text-[#29252B]">
                      Cuidado & Acolhimento
                    </h3>
                    <p className="text-xs text-[#5B545F] font-light mt-0.5">
                      Atendimento calmo, atento às suas preferências e ao formato do seu olho.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#C5B5D0]/30 flex items-center justify-center shrink-0 text-[#29252B] mt-0.5">
                    <UserCheck className="w-4 h-4 text-[#8F7644]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-sm font-semibold text-[#29252B]">
                      Técnica Personalizada
                    </h3>
                    <p className="text-xs text-[#5B545F] font-light mt-0.5">
                      Fios escolhidos para proporcionar equilíbrio e durabilidade ao seu visual.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
