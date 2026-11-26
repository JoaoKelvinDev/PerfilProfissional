import { motion, type Variants } from "motion/react";

import { FEATURES } from "../data/features";
import { stagger } from "../shared/motion";
import { SectionHeading } from "../shared/SectionHeading";

const pop: Variants = {
  hidden: { opacity: 0, scale: 0.85, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
};

export function Features() {
  return (
    <section id="diferenciais" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Diferenciais"
          title="Qualidade que você sente em cada detalhe."
          description="Padrão técnico rigoroso combinado com estética minimalista e foco em resultado."
        />

        <motion.ul
          variants={{ ...stagger, visible: { transition: { staggerChildren: 0.05 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
        >
          {FEATURES.map((f) => (
            <motion.li
              key={f.title}
              variants={pop}
              whileHover={{ scale: 1.04 }}
              className="glass group relative flex items-center gap-3 overflow-hidden rounded-xl px-4 py-4 transition-colors duration-300 hover:border-primary/40"
            >
              <span
                aria-hidden
                className="absolute inset-0 -z-10 -translate-x-full bg-gradient-to-r from-transparent via-primary/10 to-transparent transition-transform duration-700 group-hover:translate-x-full"
              />
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary ring-1 ring-inset ring-primary/20 transition-all duration-300 group-hover:rotate-12 group-hover:bg-primary/20 group-hover:shadow-glow">
                <f.icon className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium">{f.title}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
