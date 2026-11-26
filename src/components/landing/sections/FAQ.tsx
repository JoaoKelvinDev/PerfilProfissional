import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { FAQS } from "../data/faqs";
import { motion } from "motion/react";

import { fadeUp, stagger } from "../shared/motion";
import { SectionHeading } from "../shared/SectionHeading";

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeading eyebrow="FAQ" title="Perguntas frequentes." />
        <motion.div
          className="mt-14"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-3">
            {FAQS.map((f, i) => (
              <motion.div key={i} variants={fadeUp}>
              <AccordionItem
                value={`item-${i}`}
                className="glass rounded-2xl border-0 px-5 transition-all duration-300 hover:border-primary/30 hover:bg-white/[0.04] data-[state=open]:border-primary/40 data-[state=open]:shadow-[0_20px_50px_-25px_oklch(0.58_0.222_264/0.6)]"
              >
                <AccordionTrigger className="py-5 text-left text-base font-medium hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
