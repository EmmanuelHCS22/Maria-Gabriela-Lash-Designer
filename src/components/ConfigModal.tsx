import React, { useState } from 'react';
import { X, Save, RotateCcw, Shield, Check, Phone, MapPin, Image, MessageSquare } from 'lucide-react';
import { BiositeConfig } from '../config/biositeConfig';

interface ConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: BiositeConfig;
  onSave: (updatedConfig: BiositeConfig) => void;
  onReset: () => void;
}

export const ConfigModal: React.FC<ConfigModalProps> = ({
  isOpen,
  onClose,
  config,
  onSave,
  onReset,
}) => {
  const [formData, setFormData] = useState<BiositeConfig>(config);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#29252B]/75 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-[#B69A62]/30 overflow-hidden">
        {/* Cabeçalho do Modal */}
        <div className="p-6 border-b border-[#B69A62]/15 flex items-center justify-between bg-[#F8F6F2]">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-[#B69A62]/20 text-[#8F7644] flex items-center justify-center font-serif text-sm font-semibold">
              MG
            </div>
            <div>
              <h2 className="font-serif text-xl font-semibold text-[#29252B]">
                Painel de Configuração
              </h2>
              <p className="text-[11px] text-[#5B545F]">
                Atualize contatos, endereço e dados do biosite com persistência local.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full text-[#5B545F] hover:bg-black/5 flex items-center justify-center"
            aria-label="Fechar configurações"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Formulário com Scroll */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-5 text-xs text-[#29252B]">
          {/* Seção WhatsApp */}
          <div className="space-y-3 pb-4 border-b border-black/[0.06]">
            <label className="flex items-center gap-2 font-semibold text-sm text-[#29252B]">
              <Phone className="w-4 h-4 text-[#8F7644]" />
              Número do WhatsApp para Agendamentos
            </label>
            <p className="text-[11px] text-[#5B545F] font-light">
              Digite com código do país (55 para Brasil) e DDD, apenas números. Ex: <code>5511999999999</code>.
            </p>
            <input
              type="text"
              value={formData.contact.whatsappNumber}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  contact: { ...formData.contact, whatsappNumber: e.target.value },
                })
              }
              placeholder="Ex: 5511999999999"
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#B69A62]/30 focus:border-[#B69A62] focus:ring-1 focus:ring-[#B69A62] bg-[#F8F6F2] font-mono text-xs"
            />
          </div>

          {/* Seção Mensagem Inicial WhatsApp */}
          <div className="space-y-3 pb-4 border-b border-black/[0.06]">
            <label className="flex items-center gap-2 font-semibold text-sm text-[#29252B]">
              <MessageSquare className="w-4 h-4 text-[#8F7644]" />
              Mensagem Inicial Padrão do WhatsApp
            </label>
            <textarea
              rows={2}
              value={formData.contact.defaultMessage}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  contact: { ...formData.contact, defaultMessage: e.target.value },
                })
              }
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#B69A62]/30 focus:border-[#B69A62] focus:ring-1 focus:ring-[#B69A62] bg-[#F8F6F2] text-xs font-light"
            />
          </div>

          {/* Seção Localização & Endereço */}
          <div className="space-y-3 pb-4 border-b border-black/[0.06]">
            <label className="flex items-center gap-2 font-semibold text-sm text-[#29252B]">
              <MapPin className="w-4 h-4 text-[#8F7644]" />
              Endereço Físico (Quando Confirmado)
            </label>
            <p className="text-[11px] text-[#5B545F] font-light">
              Conforme instrução: se vazio, o biosite exibe a mensagem discreta de sigilo até o agendamento.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Rua, Número, Bairro"
                value={formData.contact.locationInfo.address}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    contact: {
                      ...formData.contact,
                      locationInfo: {
                        ...formData.contact.locationInfo,
                        address: e.target.value,
                        isConfigured: Boolean(e.target.value),
                      },
                    },
                  })
                }
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#B69A62]/30 bg-[#F8F6F2] text-xs"
              />
              <input
                type="text"
                placeholder="Cidade - UF"
                value={formData.contact.locationInfo.cityState}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    contact: {
                      ...formData.contact,
                      locationInfo: {
                        ...formData.contact.locationInfo,
                        cityState: e.target.value,
                      },
                    },
                  })
                }
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#B69A62]/30 bg-[#F8F6F2] text-xs"
              />
            </div>
          </div>

          {/* Seção URLs de Imagens Customizadas */}
          <div className="space-y-3 pb-2">
            <label className="flex items-center gap-2 font-semibold text-sm text-[#29252B]">
              <Image className="w-4 h-4 text-[#8F7644]" />
              URL de Logo ou Foto Própria (Opcional)
            </label>
            <input
              type="text"
              placeholder="https://... URL do arquivo oficial de logo (PNG/SVG)"
              value={formData.professional.customLogoUrl || ''}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  professional: {
                    ...formData.professional,
                    customLogoUrl: e.target.value,
                  },
                })
              }
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#B69A62]/30 bg-[#F8F6F2] text-xs"
            />
          </div>

          {/* Rodapé com botões de ação */}
          <div className="pt-4 flex items-center justify-between border-t border-black/[0.06]">
            <button
              type="button"
              onClick={() => {
                onReset();
                onClose();
              }}
              className="px-4 py-2 text-xs text-[#5B545F] hover:text-[#29252B] flex items-center gap-1.5 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Restaurar Padrão
            </button>

            <button
              type="submit"
              className="px-6 py-2.5 bg-[#29252B] hover:bg-[#1a171c] text-white rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-all shadow-xs"
            >
              {savedSuccess ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  Salvo com sucesso!
                </>
              ) : (
                <>
                  <Save className="w-4 h-4 text-[#DFC79B]" />
                  Salvar Alterações
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
