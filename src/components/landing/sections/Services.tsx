import { motion } from "motion/react";

import { SERVICES } from "../data/services";
import { SpotlightCard } from "../shared/effects";
import { fadeUp, stagger } from "../shared/motion";
import { SectionHeading } from "../shared/SectionHeading";

export function Services() {
  return (
    <section id="servicos" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Serviços"
          title="Tudo que seu produto digital precisa."
          description="Do primeiro pixel ao deploy: soluções sob medida para cada estágio do seu negócio."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <SpotlightCard
                as="article"
                className="glass h-full overflow-hidden rounded-2xl p-6 shadow-card transition-shadow duration-500 hover:shadow-[0_30px_60px_-30px_oklch(0.58_0.222_264/0.5)]"
              >
                <span
                  aria-hidden
                  className="absolute right-5 top-4 font-mono text-5xl font-bold text-white/[0.03] transition-colors duration-500 group-hover:text-primary/10"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="relative mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-inset ring-primary/20 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-glow">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
                <span
                  aria-hidden
                  className="absolute inset-x-6 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-primary via-primary-glow to-transparent transition-transform duration-500 group-hover:scale-x-100"
                />
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
