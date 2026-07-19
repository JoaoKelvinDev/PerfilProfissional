import { motion } from "motion/react";
import { ArrowRight, Zap } from "lucide-react";

import { WHATSAPP_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

import { PROJECTS, type Project } from "../data/projects";
import { fadeUp, stagger } from "../shared/motion";
import { SectionHeading } from "../shared/SectionHeading";

function ProjectCard({ p }: { p: Project }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -6 }}
      className="glass group flex flex-col overflow-hidden rounded-2xl shadow-card"
    >
      <div
        className={cn(
          "relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br",
          p.gradient,
        )}
      >
        {p.image ? (
          <img
            src={p.image}
            alt={`${p.name} preview`}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : null}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(oklch(1 0 0 / 0.06) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.06) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-xs uppercase tracking-widest text-white/70">
            {p.name}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold tracking-tight">{p.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {p.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border/60 bg-white/[0.03] px-2.5 py-0.5 text-[11px] text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-6">
          <a
            href={p.link || WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary-glow"
          >
            Ver projeto
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Portfólio"
          title="Projetos desenvolvidos sob medida."
          description="Conheça alguns dos projetos desenvolvidos com foco em desempenho, experiência do usuário e resultados para o negócio."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {PROJECTS.map((p) => (
            <ProjectCard key={p.name} p={p} />
          ))}
          <motion.a
            variants={fadeUp}
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="glass flex min-h-[260px] flex-col items-center justify-center gap-3 rounded-2xl p-6 text-center transition-colors hover:border-primary/40"
          >
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-inset ring-primary/20">
              <Zap className="h-5 w-5" />
            </div>
            <p className="text-sm font-medium">Seu projeto aqui</p>
            <p className="max-w-[220px] text-xs text-muted-foreground">
              Vamos construir algo memorável juntos.
            </p>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
