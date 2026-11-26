import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "motion/react";
import { ArrowRight, Bot, CheckCircle2, ChevronDown, Code2, Globe, Sparkles } from "lucide-react";
import { useRef, type MouseEvent } from "react";

import heroImage from "@/assets/hero-isometric.png";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/site";

import { Magnetic } from "../shared/effects";
import { fadeUp, stagger } from "../shared/motion";

const word: Variants = {
  hidden: { opacity: 0, y: "0.6em", filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const titleLines: { text: string; highlight?: boolean }[][] = [
  [{ text: "Desenvolvendo" }, { text: "soluções digitais", highlight: true }],
  [{ text: "que impulsionam" }],
  [{ text: "o seu negócio." }],
];

const CHIPS = [
  { icon: Globe, label: "Sites", className: "left-[2%] top-[12%]", delay: 0 },
  { icon: Code2, label: "Sistemas Web", className: "right-[0%] top-[38%]", delay: 1.2 },
  { icon: Bot, label: "Automações", className: "left-[8%] bottom-[10%]", delay: 2.4 },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 140]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 120, damping: 18 });
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 120, damping: 18 });
  const shiftX = useSpring(useTransform(mx, [-0.5, 0.5], [-14, 14]), { stiffness: 120, damping: 18 });
  const shiftY = useSpring(useTransform(my, [-0.5, 0.5], [-14, 14]), { stiffness: 120, damping: 18 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section ref={sectionRef} id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-[720px] bg-grid" />
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
          style={{ y: contentY, opacity: contentOpacity }}
          className="text-center lg:text-left"
        >
          {/* Badge */}
          <motion.div variants={fadeUp}>
            <span className="border-beam inline-flex items-center gap-2 rounded-full bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Desenvolvimento de soluções digitais para empresas
              <Sparkles className="h-3.5 w-3.5 text-primary" />
            </span>
          </motion.div>

          {/* Título com revelação palavra por palavra */}
          <motion.h1
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } } }}
            className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-[64px] lg:leading-[1.05]"
          >
            {titleLines.map((line, li) => (
              <span key={li} className="block">
                {line.map((part, pi) =>
                  part.highlight ? (
                    <motion.span key={pi} variants={word} className="text-shimmer inline-block">
                      {part.text}
                      {pi < line.length - 1 ? " " : ""}
                    </motion.span>
                  ) : (
                    part.text.split(" ").map((w, wi, arr) => (
                      <motion.span key={`${pi}-${wi}`} variants={word} className="inline-block">
                        {w}
                        {wi < arr.length - 1 || pi < line.length - 1 ? " " : ""}
                      </motion.span>
                    ))
                  ),
                )}
              </span>
            ))}
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-xl text-balance text-base leading-8 text-muted-foreground sm:text-lg lg:mx-0"
          >
            Ajudo empresas a transformar processos em soluções digitais através do desenvolvimento de{" "}
            <strong className="text-foreground">sites</strong>,{" "}
            <strong className="text-foreground">sistemas web</strong> e{" "}
            <strong className="text-foreground">automações personalizadas</strong>, criadas conforme a
            necessidade de cada negócio.
          </motion.p>

          {/* Apresentação */}
          <motion.p variants={fadeUp} className="mt-5 text-sm text-muted-foreground">
            Ajudo empresas a{" "}
            <span className="font-medium text-foreground">digitalizar processos, automatizar tarefas</span>{" "}
            e fortalecer sua presença online com soluções desenvolvidas sob medida.
          </motion.p>

          {/* Botões */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
          >
            <Magnetic className="w-full sm:w-auto">
              <Button asChild size="lg" className="btn-shine group w-full rounded-full shadow-glow sm:w-auto">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  Conversar no WhatsApp
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </Magnetic>

            <Magnetic className="w-full sm:w-auto">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full rounded-full border-border/60 bg-white/[0.02] backdrop-blur-sm hover:border-primary/40 hover:bg-white/[0.05] sm:w-auto"
              >
                <a href="#portfolio">Conhecer projetos</a>
              </Button>
            </Magnetic>
          </motion.div>

          {/* Indicadores */}
          <motion.div
            variants={stagger}
            className="mt-10 flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:gap-6 lg:justify-start"
          >
            {["Projetos personalizados", "Atendimento em todo o Brasil", "Suporte após a entrega"].map((t) => (
              <motion.div
                key={t}
                variants={fadeUp}
                className="flex items-center justify-center gap-2 lg:justify-start"
              >
                <CheckCircle2 className="h-4 w-4 text-primary" />
                {t}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Ilustração com parallax 3D */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          style={{ y: imageY }}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          className="relative mx-auto w-full max-w-[560px] [perspective:1200px]"
        >
          <motion.div
            aria-hidden
            className="absolute inset-0 -z-10 rounded-full opacity-60 blur-3xl"
            animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.75, 0.5] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            style={{
              background:
                "radial-gradient(circle at 50% 50%, oklch(0.58 0.222 264 / 0.4), transparent 60%)",
            }}
          />

          {/* Anéis orbitais */}
          <div aria-hidden className="pointer-events-none absolute inset-[6%] -z-10">
            <motion.div
              className="absolute inset-0 rounded-full border border-dashed border-primary/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
              <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-glow" />
            </motion.div>
            <motion.div
              className="absolute inset-[12%] rounded-full border border-white/5"
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              <span className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-cyan-300 shadow-glow" />
            </motion.div>
          </div>

          <motion.div style={{ rotateX: rotX, rotateY: rotY }} className="[transform-style:preserve-3d]">
            <motion.img
              src={heroImage}
              alt="Ilustração representando desenvolvimento de sites, sistemas, automações e soluções digitais."
              width={1280}
              height={1280}
              className="relative h-auto w-full select-none drop-shadow-[0_30px_60px_rgba(37,99,235,0.25)]"
              draggable={false}
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Chips flutuantes */}
          {CHIPS.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + i * 0.15, type: "spring", stiffness: 200, damping: 14 }}
              style={{ x: shiftX, y: shiftY }}
              className={`absolute hidden sm:block ${c.className}`}
            >
              <div
                className="glass-strong animate-float-slow flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-medium shadow-elegant"
                style={{ animationDelay: `${c.delay}s` }}
              >
                <span className="grid h-6 w-6 place-items-center rounded-md bg-primary/15 text-primary">
                  <c.icon className="h-3.5 w-3.5" />
                </span>
                {c.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Indicador de rolagem */}
      <motion.a
        href="#servicos"
        aria-label="Rolar para serviços"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground/70 transition-colors hover:text-foreground md:flex"
      >
        Role
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
