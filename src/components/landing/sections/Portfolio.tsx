import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Zap } from "lucide-react";

import { WHATSAPP_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

import { PROJECTS, type Project } from "../data/projects";
import { fadeUp, stagger } from "../shared/motion";
import { SectionHeading } from "../shared/SectionHeading";

function ProjectCard({ p }: { p: Project }) {
  const isGithub = p.link?.includes("github");

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="glass group flex flex-col overflow-hidden rounded-2xl border border-border/50 shadow-card transition-all duration-300 hover:border-primary/30 hover:shadow-xl"
    >
      {/* Imagem */}
      <div
        className={cn(
          "relative aspect-[16/10] overflow-hidden bg-gradient-to-br",
          p.gradient
        )}
      >
        {p.image && (
          <img
            src={p.image}
            alt={p.name}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
      </div>

      {/* Conteúdo */}
      <div className="flex flex-1 flex-col p-6">

        {/* Categoria */}
        <span className="mb-4 inline-flex w-fit rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          {p.category}
        </span>

        {/* Nome */}
        <h3 className="text-xl font-semibold tracking-tight">
          {p.name}
        </h3>

        {/* Descrição */}
        <p className="mt-3 text-sm leading-7 text-muted-foreground">
          {p.description}
        </p>

        {/* Destaques */}
        <div className="mt-6 space-y-2">
          {p.highlights.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <CheckCircle2 className="h-4 w-4 text-primary" />

              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Tecnologias */}
        <div className="mt-6 border-t border-border/50 pt-5">

          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Tecnologias
          </p>

          <div className="flex flex-wrap gap-2">
            {p.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border/60 bg-white/[0.03] px-3 py-1 text-xs text-muted-foreground transition-colors group-hover:border-primary/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Botão */}
        <div className="mt-auto pt-8">
          <a
            href={p.link || WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-medium text-primary transition-all hover:gap-3"
          >
            {isGithub ? "Ver código" : "Acessar projeto"}

            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Portfólio"
          title="Projetos que transformaram desafios em soluções digitais."
          description="Cada projeto foi desenvolvido para atender necessidades específicas, unindo estratégia, tecnologia e experiência do usuário."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.name}
              p={project}
            />
          ))}

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            whileHover={{ y: -8 }}
            className="glass flex min-h-[520px] flex-col justify-between rounded-2xl border border-primary/20 p-8 shadow-card transition-all duration-300 hover:border-primary/40 hover:shadow-xl"
          >
            <div>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <Zap className="h-6 w-6 text-primary" />
              </div>

              <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                Novo Projeto
              </span>

              <h3 className="mt-6 text-2xl font-semibold tracking-tight">
                Vamos desenvolver a solução ideal para o seu negócio.
              </h3>

              <p className="mt-4 leading-7 text-muted-foreground">
                Sites profissionais, sistemas web e automações desenvolvidos sob
                medida para aumentar produtividade, fortalecer sua presença
                digital e otimizar processos.
              </p>

              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  ✓ Projeto personalizado
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  ✓ Desenvolvimento sob medida
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  ✓ Suporte durante todo o projeto
                </div>
              </div>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 font-medium text-primary-foreground transition-all duration-300 hover:scale-[1.02]"
            >
              Solicitar orçamento

              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
