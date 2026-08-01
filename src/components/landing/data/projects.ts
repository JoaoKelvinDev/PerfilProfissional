import açaikidelicia from "@/assets/açai-kidelicia.jpg";
import dataanalysissystem from "@/assets/data-analysis-system.jpg";
import usermanagementapi from "@/assets/user-management-api.jpg";


export const PROJECTS = [
  {
    category: "Sistema Web",

    name: "Açaí Ki Delícia",

    description:
      "Plataforma desenvolvida para facilitar pedidos online com integração direta ao WhatsApp, proporcionando uma experiência rápida para o cliente e mais organização para o negócio.",
    highlights: [
      "Responsivo",
      "Integração WhatsApp",
      "Design moderno",
    ],

    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],

    gradient: "from-blue-500/40 via-blue-500/10 to-transparent",

    image: açaikidelicia,

    link: "https://acaikideliciapl.com.br",
    ctaLabel: "Ver código",
  },

  {
    category: "Sistema de Gestão",

    name: "Data Analysis System",

    description:
      "Sistema desenvolvido para automatizar processos educacionais, organizar informações e gerar análises de dados de forma rápida e eficiente.",

    highlights: [
      "Automação",
      "Relatórios",
      "Análise de Dados",
    ],

    tech: [
      "Python",
      "JavaScript",
      "HTML",
    ],

    gradient: "from-indigo-500/40 via-indigo-500/10 to-transparent",

    image: dataanalysissystem,

    link: "https://github.com/JoaoKelvinDev/Data-Analysis-System.",
    ctaLabel: "Ver código",
  },

  {
    category: "Automação",

    name: "User Management API",

    description:
      "Este projeto foi criado com foco em organização de código, segurança, padrões REST e pronto para produção, sendo ideal para portfólio e aplicações reais.",

    highlights: [
      "Integrações",
      "Automação",
      "Produtividade",
    ],

    tech: [
      "JavaScript",
      "APIs",
    ],

    gradient: "from-cyan-500/40 via-cyan-500/10 to-transparent",

    image: usermanagementapi,

    link: "https://github.com/JoaoKelvinDev/user-management-api",
    ctaLabel: "Ver código",
  },
];

export type Project = (typeof PROJECTS)[number];