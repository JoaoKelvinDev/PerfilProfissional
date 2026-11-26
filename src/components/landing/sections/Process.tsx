import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";

import { cn } from "@/lib/utils";

import { STEPS } from "../data/steps";
import { SectionHeading } from "../shared/SectionHeading";

export function Process() {
  const listRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 70%", "end 60%"],
  });
  const fill = useSpring(scrollYProgress, { stiffness: 100, damping: 25 });

  return (
    <section id="processo" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Processo"
          title="Um método claro do início ao fim."
          description="Transparência em cada etapa. Você sempre sabe onde o projeto está."
        />

        <div ref={listRef} className="relative mt-16">
          {/* Linha base + linha que se preenche com a rolagem */}
          <div
            aria-hidden
            className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-border to-transparent lg:block"
          />
          <motion.div
            aria-hidden
            style={{ scaleY: fill, x: "-50%" }}
            className="absolute left-1/2 top-0 hidden h-full w-[2px] origin-top bg-gradient-to-b from-primary via-primary-glow to-cyan-400 shadow-glow lg:block"
          />

          <ol className="space-y-4 lg:space-y-10">
            {STEPS.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <li key={step.n} className="relative grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-16">
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -40 : 40, y: 10 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ scale: 1.02 }}
                    className={cn(
                      "glass group relative overflow-hidden rounded-2xl p-6 shadow-card transition-colors hover:border-primary/40",
                      isLeft ? "lg:col-start-1 lg:text-right" : "lg:col-start-2",
                    )}
                  >
                    <span
                      aria-hidden
                      className={cn(
                        "absolute -top-4 font-mono text-7xl font-bold text-white/[0.03] transition-colors duration-500 group-hover:text-primary/10",
                        isLeft ? "left-4" : "right-4",
                      )}
                    >
                      {step.n}
                    </span>
                    <div className={cn("relative mb-2 flex items-center gap-3", isLeft && "lg:justify-end")}>
                      <span className="rounded-md bg-primary/10 px-2 py-0.5 font-mono text-xs text-primary ring-1 ring-inset ring-primary/20">
                        {step.n}
                      </span>
                      <h3 className="text-lg font-semibold tracking-tight">{step.title}</h3>
                    </div>
                    <p className="relative text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                  </motion.div>

                  <motion.span
                    aria-hidden
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.2 }}
                    style={{ x: "-50%" }}
                    className="absolute left-1/2 top-8 hidden h-3 w-3 rounded-full bg-primary shadow-glow ring-4 ring-background lg:block"
                  >
                    <span className="absolute inset-0 animate-ping rounded-full bg-primary/60" />
                  </motion.span>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
