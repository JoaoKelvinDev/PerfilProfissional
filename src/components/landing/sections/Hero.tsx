import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import heroImage from "@/assets/hero-isometric.png";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/site";

import { fadeUp, stagger } from "../shared/motion";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-[720px] bg-grid"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[720px]"
        style={{ background: "var(--gradient-hero)" }}
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-4 lg:grid-cols-[1.05fr_1fr] lg:gap-6">

        {/* Conteúdo */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="text-center lg:text-left"
        >
          {/* Badge */}
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Desenvolvimento de soluções digitais para empresas
            </span>
          </motion.div>

          {/* Título */}
          <motion.h1
            variants={fadeUp}
            className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-[64px] lg:leading-[1.05]"
          >
            Desenvolvendo{" "}
            <span className="text-gradient-primary">
              soluções digitais
            </span>
            <br />
            que impulsionam
            <br />
            o seu negócio.
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-xl text-balance text-base leading-8 text-muted-foreground sm:text-lg lg:mx-0"
          >
            Ajudo empresas a transformar processos em soluções digitais através
            do desenvolvimento de <strong className="text-foreground">sites</strong>,
            {" "}
            <strong className="text-foreground">sistemas web</strong> e{" "}
            <strong className="text-foreground">automações personalizadas</strong>,
            criadas conforme a necessidade de cada negócio.
          </motion.p>

          {/* Apresentação */}
          <motion.p
            variants={fadeUp}
            className="mt-5 text-sm text-muted-foreground"
          >
            Ajudo empresas a{" "}  
            <span className="font-medium text-foreground">
              digitalizar processos, automatizar tarefas
            </span>
            e fortalecer sua presença online com soluções desenvolvidas sob medida.
          </motion.p>

          {/* Botões */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
          >
            <Button
              asChild
              size="lg"
              className="w-full rounded-full shadow-glow sm:w-auto"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Conversar no WhatsApp
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full rounded-full border-border/60 bg-white/[0.02] hover:bg-white/[0.05] sm:w-auto"
            >
              <a href="#portfolio">
                Conhecer projetos
              </a>
            </Button>
          </motion.div>

          {/* Indicadores */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:gap-6 lg:justify-start"
          >
            <div className="flex items-center gap-2 justify-center lg:justify-start">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Projetos personalizados
            </div>

            <div className="flex items-center gap-2 justify-center lg:justify-start">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Atendimento em todo o Brasil
            </div>

            <div className="flex items-center gap-2 justify-center lg:justify-start">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Suporte após a entrega
            </div>
          </motion.div>
        </motion.div>

        {/* Ilustração */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto w-full max-w-[560px]"
        >
          <div
            aria-hidden
            className="absolute inset-0 -z-10 rounded-full opacity-60 blur-3xl"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, oklch(0.58 0.222 264 / 0.35), transparent 60%)",
            }}
          />

          <motion.img
            src={heroImage}
            alt="Ilustração representando desenvolvimento de sites, sistemas, automações e soluções digitais."
            width={1280}
            height={1280}
            className="relative h-auto w-full select-none"
            draggable={false}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}