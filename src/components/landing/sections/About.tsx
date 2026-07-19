import { Reveal } from "../shared/Reveal";

export function About() {
  return (
    <section id="sobre" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4">
        <Reveal className="glass rounded-3xl p-8 shadow-card sm:p-12">
          <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-[auto_1fr] sm:gap-10">
            <div className="mx-auto grid h-24 w-24 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-primary to-primary-glow text-2xl font-bold text-primary-foreground shadow-glow">
              JK
            </div>
            <div>
              <span className="text-xs font-medium uppercase tracking-wider text-primary">
                Sobre
              </span>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                Olá, sou João Kelvin.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Desenvolvedor especializado em criação de sites, sistemas web e automações. Meu
                objetivo é desenvolver soluções digitais sob medida que ajudem empresas a otimizar
                processos, fortalecer sua presença digital e impulsionar seus resultados.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
