import { motion } from "motion/react";

import { FEATURES } from "../data/features";
import { fadeUp, stagger } from "../shared/motion";
import { SectionHeading } from "../shared/SectionHeading";

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
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
        >
          {FEATURES.map((f) => (
            <motion.li
              key={f.title}
              variants={fadeUp}
              className="glass flex items-center gap-3 rounded-xl px-4 py-4 transition-colors hover:border-primary/40"
            >
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary ring-1 ring-inset ring-primary/20">
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
