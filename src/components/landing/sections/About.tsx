import logoPerfil from "../../../assets/logo-perfil.png";

import { motion } from "motion/react";
import { Briefcase, Github, GraduationCap, Instagram, Linkedin, MapPin, Sparkles } from "lucide-react";

import { SOCIAL } from "@/lib/site";

import { SpotlightCard } from "../shared/effects";
import { fadeUp, stagger } from "../shared/motion";
import { Reveal } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";

const STACK = [
  "Python",
  "FastAPI",
  "PostgreSQL",
  "React",
  "TypeScript",
  "Node.js",
  "Express",
  "Git",
  "Docker",
];

const JOURNEY = [
  {
    icon: Briefcase,
    current: true,
    title: "Estagiário de TI",
    place: "R3R Imobiliária",
    period: "Atual",
    text: "Desenvolvimento e manutenção de sistemas internos em equipe, com ajustes em interfaces, APIs e bancos de dados. Criação e testes de fluxos automatizados de atendimento, integrações via WhatsApp e apoio na implantação de agentes de IA.",
  },
  {
    icon: Briefcase,
    title: "Estagiário de TI",
    place: "Grau Técnico",
    period: "6 meses",
    text: "Suporte de TI, desenvolvimento de soluções web e automação em Python para análise de planilhas acadêmicas.",
  },
  {
    icon: GraduationCap,
    title: "Análise e Desenvolvimento de Sistemas",
    place: "UNINASSAU",
    period: "Em andamento",
    text: "Formação em desenvolvimento de software, banco de dados e engenharia de sistemas.",
  },
];

const LINKS = [
  { href: SOCIAL.linkedin, label: "LinkedIn", icon: Linkedin },
  { href: SOCIAL.github, label: "GitHub", icon: Github },
  { href: SOCIAL.instagram, label: "Instagram", icon: Instagram },
];

export function About() {
  return (
    <section id="sobre" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Sobre"
          title="Quem está por trás da JK Systems."
          description="Experiência real com sistemas em produção, aplicada ao seu negócio."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[340px_1fr]">
          {/* Cartão de perfil */}
          <Reveal className="glass border-beam relative overflow-hidden rounded-3xl p-8 text-center shadow-card">
            <div
              aria-hidden
              className="absolute -right-20 -top-20 -z-10 h-64 w-64 rounded-full bg-primary/20 blur-3xl"
            />
            <motion.div
              className="relative mx-auto h-32 w-32"
              whileHover={{ scale: 1.05, rotate: -3 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <motion.div
                aria-hidden
                className="absolute -inset-1.5 rounded-full bg-[conic-gradient(from_0deg,oklch(0.58_0.222_264),oklch(0.8_0.12_210),transparent,oklch(0.58_0.222_264))] opacity-80 blur-[3px]"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              <div className="relative h-full w-full overflow-hidden rounded-full border border-white/10 bg-background shadow-glow">
                <img
                  src={logoPerfil}
                  alt="Logo JK Systems"
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>

            <h3 className="mt-6 text-xl font-semibold tracking-tight">João Kelvin B. Novais</h3>
            <p className="mt-1 text-sm font-medium text-primary">Desenvolvedor Full Stack</p>
            <p className="mt-1 text-xs text-muted-foreground">Fundador da JK Systems</p>

            <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-white/[0.03] px-3 py-1 text-xs text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              Teresina, Piauí · atendo todo o Brasil
            </div>

            <div className="mt-6 flex justify-center gap-2">
              {LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={l.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-border/60 bg-white/[0.02] text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/10 hover:text-foreground hover:shadow-glow"
                >
                  <l.icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            <div className="mt-8 border-t border-border/50 pt-6 text-left">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Stack principal
              </p>
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {STACK.map((t) => (
                  <motion.span
                    key={t}
                    variants={fadeUp}
                    className="rounded-full border border-border/60 bg-white/[0.03] px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                  >
                    {t}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-6">
            {/* Texto */}
            <Reveal className="glass rounded-3xl p-8 shadow-card sm:p-10">
              <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  Sou <strong className="text-foreground">Desenvolvedor Full Stack</strong> e
                  estudante de Análise e Desenvolvimento de Sistemas. Desenvolvo aplicações web
                  com ênfase em <strong className="text-foreground">APIs REST</strong>,{" "}
                  <strong className="text-foreground">automação de processos</strong> e{" "}
                  <strong className="text-foreground">integração entre sistemas</strong>.
                </p>
                <p>
                  Pela JK Systems, crio soluções web sob medida para pequenos negócios. Um exemplo
                  é o sistema de pedidos do Açaí Ki-Delícia, que reúne catálogo, personalização de
                  produtos e envio do pedido pelo WhatsApp. Também trabalho com integrações entre
                  sistemas e serviços como WhatsApp e Telegram por meio de APIs oficiais.
                </p>
                <p>
                  Uso ferramentas de IA, como Claude Code e Codex, para apoiar a implementação, a
                  investigação de problemas e a documentação, o que traz mais agilidade sem abrir
                  mão da revisão e da qualidade do código.
                </p>
              </div>
            </Reveal>

            {/* Trajetória */}
            <motion.ol
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 gap-4 md:grid-cols-3"
            >
              {JOURNEY.map((j) => (
                <motion.li key={j.place} variants={fadeUp} className="h-full">
                  <SpotlightCard className="glass h-full rounded-2xl p-5 shadow-card">
                    <div className="flex items-center justify-between gap-2">
                      <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary ring-1 ring-inset ring-primary/20 transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                        <j.icon className="h-4 w-4" />
                      </span>
                      <span
                        className={
                          j.current
                            ? "inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-400 ring-1 ring-inset ring-emerald-500/30"
                            : "rounded-full bg-white/[0.04] px-2.5 py-0.5 text-[11px] text-muted-foreground ring-1 ring-inset ring-border"
                        }
                      >
                        {j.current && (
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                        )}
                        {j.period}
                      </span>
                    </div>
                    <h4 className="mt-4 text-sm font-semibold">{j.title}</h4>
                    <p className="text-xs font-medium text-primary">{j.place}</p>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{j.text}</p>
                  </SpotlightCard>
                </motion.li>
              ))}
            </motion.ol>

            <Reveal className="flex items-center gap-3 rounded-2xl border border-primary/20 bg-primary/5 px-5 py-4 text-sm text-muted-foreground">
              <Sparkles className="h-4 w-4 shrink-0 text-primary" />
              <span>
                Experiência prática com <strong className="text-foreground">sistemas em uso real</strong>{" "}
                no dia a dia de empresas, aplicada a cada projeto que entrego.
              </span>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
