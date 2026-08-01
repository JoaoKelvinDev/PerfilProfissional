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
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Desenvolvo soluções digitais sob medida para empresas que buscam otimizar processos, fortalecer sua presença online e crescer através da tecnologia.
Cada projeto é desenvolvido de acordo com a necessidade do negócio, seja um site institucional, uma landing page de alta conversão, um sistema web personalizado ou uma automação para eliminar tarefas repetitivas. Meu foco é entregar soluções modernas, intuitivas e escaláveis que gerem resultados reais.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
