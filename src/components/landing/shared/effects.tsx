import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect, useRef, type ReactNode, type MouseEvent } from "react";

import { cn } from "@/lib/utils";

/* Barra de progresso de rolagem no topo da página */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-primary via-primary-glow to-cyan-400 shadow-glow"
    />
  );
}

/* Fundo global: blobs "aurora" animados, ruído sutil e spotlight que segue o cursor */
export function BackgroundFX() {
  const x = useMotionValue(-1000);
  const y = useMotionValue(-1000);
  const sx = useSpring(x, { stiffness: 80, damping: 20 });
  const sy = useSpring(y, { stiffness: 80, damping: 20 });
  const spotlight = useMotionTemplate`radial-gradient(600px circle at ${sx}px ${sy}px, oklch(0.58 0.222 264 / 0.07), transparent 60%)`;

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [x, y]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      <div className="aurora-blob left-[-10%] top-[-10%] h-[520px] w-[520px] bg-[oklch(0.58_0.222_264/0.18)]" />
      <div
        className="aurora-blob right-[-15%] top-[30%] h-[600px] w-[600px] bg-[oklch(0.7_0.15_220/0.12)]"
        style={{ animationDelay: "-6s", animationDuration: "26s" }}
      />
      <div
        className="aurora-blob bottom-[-20%] left-[20%] h-[560px] w-[560px] bg-[oklch(0.55_0.2_290/0.12)]"
        style={{ animationDelay: "-12s", animationDuration: "30s" }}
      />
      <motion.div className="absolute inset-0" style={{ background: spotlight }} />
      <div className="bg-noise absolute inset-0 opacity-[0.035]" />
    </div>
  );
}

/* Card com brilho que acompanha o mouse (borda + preenchimento) */
export function SpotlightCard({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
}) {
  const ref = useRef<HTMLElement>(null);
  const onMove = (e: MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - r.left}px`);
    el.style.setProperty("--y", `${e.clientY - r.top}px`);
  };
  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      onMouseMove={onMove}
      className={cn("spotlight-card group relative isolate", className)}
    >
      {children}
    </Tag>
  );
}

/* Wrapper com inclinação 3D conforme a posição do mouse */
export function TiltCard({
  children,
  className,
  max = 8,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const reduce = useReducedMotion();
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rx = useSpring(useTransform(py, [0, 1], [max, -max]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(px, [0, 1], [-max, max]), { stiffness: 200, damping: 20 });
  const glare = useMotionTemplate`radial-gradient(500px circle at ${useTransform(px, (v) => v * 100)}% ${useTransform(py, (v) => v * 100)}%, oklch(1 0 0 / 0.08), transparent 45%)`;

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  };
  const reset = () => {
    px.set(0.5);
    py.set(0.5);
  };

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      className={cn("relative", className)}
    >
      {children}
      <motion.div
        aria-hidden
        style={{ background: glare }}
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
    </motion.div>
  );
}

/* Elemento "magnético" que é levemente atraído pelo cursor */
export function Magnetic({
  children,
  className,
  strength = 0.25,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const reduce = useReducedMotion();
  const x = useSpring(0, { stiffness: 250, damping: 15 });
  const y = useSpring(0, { stiffness: 250, damping: 15 });

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={cn("inline-block", className)}
      style={{ x, y }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

/* Faixa infinita (marquee) */
export function Marquee({ items, className }: { items: string[]; className?: string }) {
  const list = [...items, ...items];
  return (
    <div className={cn("marquee-mask relative flex overflow-hidden", className)}>
      <div className="animate-marquee flex shrink-0 items-center gap-3 pr-3">
        {list.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="glass whitespace-nowrap rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-primary align-middle shadow-glow" />
            {item}
          </span>
        ))}
      </div>
      <div aria-hidden className="animate-marquee flex shrink-0 items-center gap-3 pr-3">
        {list.map((item, i) => (
          <span
            key={`dup-${item}-${i}`}
            className="glass whitespace-nowrap rounded-full px-4 py-2 text-sm text-muted-foreground"
          >
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-primary align-middle shadow-glow" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
