import açaikidelicia from "@/assets/açai-kidelicia.jpg";
import dataanalysissystem from "@/assets/data-analysis-system.jpg";
import usermanagementapi from "@/assets/user-management-api.jpg";


export const PROJECTS = [
  {
    description: "E-commerce Web App para delivery de açaí, integração com WhatsApp.",
    tech: ["TypeScript", "Tailwind", "WhatsApp API"],
    gradient: "from-blue-500/40 via-blue-500/10 to-transparent",
    image: açaikidelicia,
    link: "https://acaikideliciapl.com.br",
  },
  {
    name: "Data Analysis System",
    description: "Solução robusta desenvolvida em Python para automação de processos educacionais e análise de dados.",
    tech: ["Python", "JavaScript", "HTML"],
    gradient: "from-indigo-500/40 via-indigo-500/10 to-transparent",
    image: dataanalysissystem,
    link: "https://github.com/JoaoKelvinDev/Data-Analysis-System.",
  },
  {
    name: "Flow Automations",
    description: "Automação de processos internos integrando planilhas, e-mail e APIs.",
    tech: ["JavaScript"],
    gradient: "from-cyan-500/40 via-cyan-500/10 to-transparent",
    image: usermanagementapi,
    link: "https://github.com/JoaoKelvinDev/user-management-api"
  },
];

export type Project = (typeof PROJECTS)[number];
