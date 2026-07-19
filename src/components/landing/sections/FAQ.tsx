import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { FAQS } from "../data/faqs";
import { Reveal } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeading eyebrow="FAQ" title="Perguntas frequentes." />
        <Reveal className="mt-14">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {FAQS.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="glass rounded-2xl border-0 px-5"
              >
                <AccordionTrigger className="py-5 text-left text-base font-medium hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
