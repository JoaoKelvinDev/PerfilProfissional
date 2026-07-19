import { motion } from "motion/react";

import { SERVICES } from "../data/services";
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
          {SERVICES.map((s) => (
            <motion.article
              key={s.title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="glass group relative overflow-hidden rounded-2xl p-6 shadow-card transition-colors hover:border-primary/40"
            >
              <div
                aria-hidden
                className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(400px circle at var(--x,50%) var(--y,0%), oklch(0.58 0.222 264 / 0.12), transparent 70%)",
                }}
              />
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-inset ring-primary/20">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
