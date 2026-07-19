import { STEPS } from "../data/steps";
import { Reveal } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";
import { cn } from "@/lib/utils";

export function Process() {
  return (
    <section id="processo" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Processo"
          title="Um método claro do início ao fim."
          description="Transparência em cada etapa. Você sempre sabe onde o projeto está."
        />

        <div className="relative mt-16">
          <div
            aria-hidden
            className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-border to-transparent lg:block"
          />
          <ol className="space-y-4 lg:space-y-10">
            {STEPS.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <Reveal
                  key={step.n}
                  className="relative grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-16"
                >
                  <div
                    className={cn(
                      "glass rounded-2xl p-6 shadow-card",
                      isLeft ? "lg:col-start-1 lg:text-right" : "lg:col-start-2",
                    )}
                  >
                    <div className={cn("mb-2 flex items-center gap-3", isLeft && "lg:justify-end")}>
                      <span className="font-mono text-xs text-primary">{step.n}</span>
                      <h3 className="text-lg font-semibold tracking-tight">{step.title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                  </div>
                  <span
                    aria-hidden
                    className="absolute left-1/2 top-8 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-primary shadow-glow ring-4 ring-background lg:block"
                  />
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
