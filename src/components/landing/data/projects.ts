import açaikidelicia from "@/assets/açai-kidelicia.jpg";
import dataanalysissystem from "@/assets/data-analysis-system.jpg";
import usermanagementapi from "@/assets/user-management-api.jpg";
import personalfinancialcenter from "@/assets/personal-financial-center.jpg";
import radariatecnologia from "@/assets/radar-ia-tecnologia.jpg";
import sistemaveterinario from "@/assets/sistema-veterinario.jpg";


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
  {
    category: "Sistema Web",

    name: "Sistema Veterinário",

    description:
      "Sistema de gestão para clínicas veterinárias que reúne agenda, cadastro de tutores e pacientes, prontuário versionado com exportação em PDF, orçamentos, estoque e financeiro em um só lugar.",

    highlights: [
      "Agenda e prontuário",
      "Orçamentos e estoque",
      "Controle de acesso por perfil",
    ],

    tech: [
      "React",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "Supabase",
    ],

    gradient: "from-emerald-500/40 via-emerald-500/10 to-transparent",

    image: sistemaveterinario,

    link: "https://github.com/JoaoKelvinDev/Clinica-Veterinaria",
    ctaLabel: "Ver código",
  },

  {
    category: "Sistema de Gestão",

    name: "Personal Financial Center",

    description:
      "Painel financeiro pessoal com contas, cartões e faturas parceladas, orçamento, contas da casa e relatórios exportáveis, com API própria e acesso protegido por login.",

    highlights: [
      "Dashboard financeiro",
      "Relatórios XLSX, PDF e CSV",
      "Testes automatizados",
    ],

    tech: [
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
      "Supabase",
    ],

    gradient: "from-violet-500/40 via-violet-500/10 to-transparent",

    image: personalfinancialcenter,

    link: "https://github.com/JoaoKelvinDev/finance-hub-pessoal",
    ctaLabel: "Ver código",
  },

  {
    category: "Automação",

    name: "Radar de IA e Tecnologia",

    description:
      "Aplicação que coleta automaticamente lançamentos e discussões sobre inteligência artificial, com busca, filtros avançados e a origem e as datas de cada item sempre visíveis.",

    highlights: [
      "Coleta automática",
      "Busca e filtros",
      "Fontes verificadas",
    ],

    tech: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Drizzle",
    ],

    gradient: "from-lime-500/40 via-lime-500/10 to-transparent",

    image: radariatecnologia,

    link: "https://github.com/JoaoKelvinDev/Signal-Watch",
    ctaLabel: "Ver código",
  },
];

export type Project = (typeof PROJECTS)[number];
