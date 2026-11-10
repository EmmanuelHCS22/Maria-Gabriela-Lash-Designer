/**
 * Configuração Centralizada — Biosite Premium Maria Gabriela Lash Designer
 * 
 * Todas as informações comerciais, procedimentos, valores, redes sociais
 * e regras de negócio estão centralizadas aqui para fácil manutenção.
 */

export interface ServiceItem {
  id: string;
  name: string;
  category: 'cilios' | 'outros';
  applicationPrice: number;
  maintenancePrice: number | null; // null se não informado
  description: string;
  note?: string; // Para observações como Método Capping
  badge?: string;
  duration?: string;
  imageUrl?: string;
}

export interface AdditionalService {
  id: string;
  name: string;
  price: number;
  type: 'sobrancelha' | 'personalizacao';
  details?: string;
}

export interface BiositeConfig {
  professional: {
    name: string;
    specialty: string;
    instagramHandle: string;
    instagramUrl: string;
    customLogoUrl?: string; // Se fornecido arquivo de imagem próprio
    tagline: string;
    subtagline: string;
    aboutTitle: string;
    aboutBio: string;
    studioTitle: string;
    studioDescription: string;
    bookingTitle: string;
    bookingDescription: string;
    footerPhrase: string;
    developerCredit: {
      text: string;
      url: string;
    };
  };
  contact: {
    whatsappNumber: string; // Ex: 5511999999999 (vazio por padrão até inserção da profissional)
    defaultMessage: string;
    locationInfo: {
      address: string; // Vazio até confirmação
      cityState: string;
      isConfigured: boolean;
      discreetNotice: string;
    };
  };
  services: ServiceItem[];
  additionals: AdditionalService[];
  galleryItems: {
    id: string;
    title: string;
    technique: string;
    description: string;
    tag: string;
    imageUrl?: string;
  }[];
}

export const initialBiositeConfig: BiositeConfig = {
  professional: {
    name: "Maria Gabriela",
    specialty: "Lash Designer",
    instagramHandle: "@lashmariasouzza",
    instagramUrl: "https://www.instagram.com/lashmariasouzza/",
    tagline: "Realçando sua beleza através de um olhar único.",
    subtagline: "Cada detalhe pensado para valorizar sua beleza, respeitando a personalidade do seu olhar.",
    aboutTitle: "Prazer, sou Maria Gabriela",
    aboutBio: "Sou Lash Designer e acredito que cada olhar possui sua própria beleza. Meu propósito é proporcionar uma experiência de cuidado, autoestima e valorização, oferecendo procedimentos pensados para realçar a beleza de cada cliente.",
    studioTitle: "Um espaço pensado para você.",
    studioDescription: "Um cantinho preparado com carinho para proporcionar conforto, cuidado e uma experiência especial em cada atendimento.",
    bookingTitle: "Seu momento de se cuidar começa com um agendamento.",
    bookingDescription: "Escolha seu procedimento e entre em contato para consultar os horários disponíveis.",
    footerPhrase: "Sua beleza, seu olhar, sua essência.",
    developerCredit: {
      text: "Desenvolvido por Inova Soluções Digitais",
      url: "https://instagram.com/inovasolucoesdigitais",
    },
  },
  contact: {
    whatsappNumber: "5511999999999", // Número configurável
    defaultMessage: "Olá, Maria Gabriela! Conheci seu biosite e gostaria de consultar os horários disponíveis para agendar um procedimento.",
    locationInfo: {
      address: "",
      cityState: "",
      isConfigured: false,
      discreetNotice: "Localização informada com exclusividade no momento do agendamento para sua comodidade, segurança e privacidade.",
    },
  },
  services: [
    {
      id: "volume-brasileiro",
      name: "Volume Brasileiro",
      category: "cilios",
      applicationPrice: 85.00,
      maintenancePrice: 65.00,
      description: "Técnica para quem busca um olhar definido, com volume equilibrado.",
      badge: "Mais Procurado",
      duration: "Aprox. 1h45",
    },
    {
      id: "volume-fanny",
      name: "Volume Fanny",
      category: "cilios",
      applicationPrice: 95.00,
      maintenancePrice: 75.00,
      description: "Efeito volumoso para destacar o olhar.",
      duration: "Aprox. 2h",
    },
    {
      id: "volume-egipcio",
      name: "Volume Egípcio",
      category: "cilios",
      applicationPrice: 105.00,
      maintenancePrice: 85.00,
      description: "Técnica que proporciona um olhar mais preenchido.",
      badge: "Elegância Clássica",
      duration: "Aprox. 2h",
    },
    {
      id: "volume-luxo",
      name: "Volume Luxo",
      category: "cilios",
      applicationPrice: 115.00,
      maintenancePrice: 95.00,
      description: "Volume mais intenso e marcante.",
      badge: "Destaque Premium",
      duration: "Aprox. 2h15",
    },
    {
      id: "efeito-raposa",
      name: "Efeito Raposa / Fox Eyes",
      category: "cilios",
      applicationPrice: 100.00,
      maintenancePrice: 85.00,
      description: "Efeito alongado que direciona o olhar para as laterais, criando uma aparência puxadinha.",
      badge: "Tendência",
      duration: "Aprox. 2h",
    },
    {
      id: "mega-volume",
      name: "Mega Volume",
      category: "cilios",
      applicationPrice: 130.00,
      maintenancePrice: null, // Conforme briefing: valor não informado, não exibir preço até confirmação
      description: "Densidade máxima para um olhar marcante e glamouroso.",
      duration: "Aprox. 2h30",
    },
    {
      id: "volume-8d",
      name: "Volume 8D",
      category: "cilios",
      applicationPrice: 120.00,
      maintenancePrice: 100.00,
      description: "Volume mais cheio e marcante.",
      duration: "Aprox. 2h15",
    },
    {
      id: "metodo-capping",
      name: "Método Capping",
      category: "cilios",
      applicationPrice: 130.00,
      maintenancePrice: null,
      description: "Técnica com retenção diferenciada, desenvolvida para proporcionar maior durabilidade aos fios.",
      note: "Informação divulgada pela profissional: duração de até 35 dias (sujeita aos cuidados e condições individuais de cada cliente).",
      badge: "Alta Retenção",
      duration: "Aprox. 2h15",
    },
  ],
  additionals: [
    {
      id: "sobrancelha-com-henna",
      name: "Design com Henna",
      price: 25.00,
      type: "sobrancelha",
      details: "Alinhamento com visagismo e pigmentação para preencher falhas.",
    },
    {
      id: "sobrancelha-sem-henna",
      name: "Design sem Henna",
      price: 15.00,
      type: "sobrancelha",
      details: "Desenho e limpeza precisa respeitando o formato natural das sobrancelhas.",
    },
    {
      id: "fio-marrom",
      name: "Fio Marrom (Adicional)",
      price: 10.00,
      type: "personalizacao",
      details: "Para um acabamento ultra natural e harmonioso em tons claros.",
    },
    {
      id: "fio-colorido",
      name: "Fio Colorido (Adicional)",
      price: 5.00,
      type: "personalizacao",
      details: "Pontos sutis ou efeito degradê personalizado nos fios.",
    },
  ],
  galleryItems: [
    {
      id: "gal-1",
      title: "Volume Brasileiro Clássico",
      technique: "Volume Brasileiro",
      description: "Fios em formato Y para alinhamento uniforme, leveza e definição diária.",
      tag: "Mais Pedido",
    },
    {
      id: "gal-2",
      title: "Efeito Fox Eyes Alongado",
      technique: "Efeito Raposa",
      description: "Mapping com curvatura e comprimento progressivos em direção ao canto externo.",
      tag: "Tendência",
    },
    {
      id: "gal-3",
      title: "Volume Egípcio Definido",
      technique: "Volume Egípcio",
      description: "Fios tecnológicos em leque com preenchimento denso e toque aveludado.",
      tag: "Definição",
    },
    {
      id: "gal-4",
      title: "Volume Luxo Marcante",
      technique: "Volume Luxo",
      description: "Intensidade refinada com curvatura aberta e acabamento editorial impecável.",
      tag: "Olhar Marcante",
    },
    {
      id: "gal-5",
      title: "Volume 8D Impactante",
      technique: "Volume 8D",
      description: "Camadas precisas proporcionando olhar expressivo sem pesar as pálpebras.",
      tag: "Efeito Cheio",
    },
    {
      id: "gal-6",
      title: "Método Capping Retenção",
      technique: "Método Capping",
      description: "Acoplagem dupla para maior durabilidade com manutenção espaçada.",
      tag: "Alta Durabilidade",
    },
  ],
};

/**
 * Função utilitária para gerar links do WhatsApp
 */
export function buildWhatsAppLink(
  phoneNumber: string,
  message: string,
  procedureName?: string
): string {
  // Limpa caracteres especiais do telefone
  const cleanPhone = (phoneNumber || "").replace(/\D/g, "");
  
  let finalMessage = message;
  if (procedureName) {
    finalMessage = `Olá, Maria Gabriela! Gostaria de consultar horários disponíveis para o procedimento: *${procedureName}*. Vi no seu biosite!`;
  }
  
  const encodedText = encodeURIComponent(finalMessage);
  
  if (!cleanPhone) {
    // Retorna link direto de busca ou API padrão caso telefone ainda seja configurado
    return `https://wa.me/?text=${encodedText}`;
  }
  
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
}

/**
 * Formatação de moeda brasileira (R$ 85,00)
 */
export function formatCurrencyBRL(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}
