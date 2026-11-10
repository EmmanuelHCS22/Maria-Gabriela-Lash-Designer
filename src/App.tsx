/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Biosite Premium — Maria Gabriela Lash Designer
 */

import React, { useState, useEffect } from 'react';
import { initialBiositeConfig, BiositeConfig } from './config/biositeConfig';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuickLinks } from './components/QuickLinks';
import { About } from './components/About';
import { ServicesCatalog } from './components/ServicesCatalog';
import { Gallery } from './components/Gallery';
import { StudioSection } from './components/StudioSection';
import { BookingSection } from './components/BookingSection';
import { InstagramSection } from './components/InstagramSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ConfigModal } from './components/ConfigModal';

const STORAGE_KEY = 'mg_lash_biosite_config_v1';

export default function App() {
  const [config, setConfig] = useState<BiositeConfig>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Fallback para estado inicial
    }
    return initialBiositeConfig;
  });

  const [isConfigModalOpen, setIsConfigModalOpen] = useState(false);

  // Atualiza persistência local
  const handleSaveConfig = (updated: BiositeConfig) => {
    setConfig(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // Ignore local storage error
    }
  };

  const handleResetConfig = () => {
    setConfig(initialBiositeConfig);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore local storage error
    }
  };

  // Rolagem suave até a localização
  const handleScrollToLocation = () => {
    const el = document.getElementById('localizacao');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F6F2] text-[#29252B] flex flex-col font-sans selection:bg-[#B69A62]/20">
      {/* Top Bar Header seguindo o Top Bar Contract */}
      <Header
        whatsappNumber={config.contact.whatsappNumber}
        defaultMessage={config.contact.defaultMessage}
      />

      <main className="flex-1">
        {/* Seção 01: Hero / Apresentação */}
        <Hero
          whatsappNumber={config.contact.whatsappNumber}
          defaultMessage={config.contact.defaultMessage}
          customLogoUrl={config.professional.customLogoUrl}
        />

        {/* Seção 02: Atalhos Rápidos */}
        <QuickLinks
          whatsappNumber={config.contact.whatsappNumber}
          defaultMessage={config.contact.defaultMessage}
          instagramUrl={config.professional.instagramUrl}
          onOpenLocation={handleScrollToLocation}
        />

        {/* Seção 03: Sobre Maria Gabriela */}
        <About />

        {/* Seção 04: Catálogo de Serviços e Valores */}
        <ServicesCatalog
          services={config.services}
          additionals={config.additionals}
          whatsappNumber={config.contact.whatsappNumber}
          defaultMessage={config.contact.defaultMessage}
        />

        {/* Seção 05: Galeria de Resultados */}
        <Gallery
          items={config.galleryItems}
          whatsappNumber={config.contact.whatsappNumber}
        />

        {/* Seção 06: Espaço Físico / Ambiente */}
        <StudioSection />

        {/* Seção 07: Agendamento de Alta Conversão */}
        <BookingSection
          whatsappNumber={config.contact.whatsappNumber}
          defaultMessage={config.contact.defaultMessage}
          onOpenConfig={() => setIsConfigModalOpen(true)}
        />

        {/* Seção 08: Instagram Oficial */}
        <InstagramSection
          instagramUrl={config.professional.instagramUrl}
          instagramHandle={config.professional.instagramHandle}
        />

        {/* Seção 09: Localização */}
        <LocationSection
          locationInfo={config.contact.locationInfo}
          whatsappNumber={config.contact.whatsappNumber}
        />
      </main>

      {/* Seção 10: Rodapé Minimalista */}
      <Footer
        whatsappNumber={config.contact.whatsappNumber}
        defaultMessage={config.contact.defaultMessage}
        instagramUrl={config.professional.instagramUrl}
        footerPhrase={config.professional.footerPhrase}
        developerCredit={config.professional.developerCredit}
        customLogoUrl={config.professional.customLogoUrl}
        onOpenSettings={() => setIsConfigModalOpen(true)}
      />

      {/* Botão Flutuante de WhatsApp */}
      <FloatingWhatsApp
        whatsappNumber={config.contact.whatsappNumber}
        defaultMessage={config.contact.defaultMessage}
      />

      {/* Painel Administrativo de Configuração Rápida */}
      <ConfigModal
        isOpen={isConfigModalOpen}
        onClose={() => setIsConfigModalOpen(false)}
        config={config}
        onSave={handleSaveConfig}
        onReset={handleResetConfig}
      />
    </div>
  );
}
