import { Marquee } from "../shared/effects";
import { Reveal } from "../shared/Reveal";

const TECHS = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Python",
  "JavaScript",
  "APIs REST",
  "Automações",
  "Integração WhatsApp",
  "Landing Pages",
  "Sistemas Web",
  "Deploy na nuvem",
];

export function TechMarquee() {
  return (
    <section aria-label="Tecnologias e soluções" className="relative py-6">
      <Reveal className="mx-auto max-w-6xl px-4">
        <p className="mb-5 text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground/80">
          Tecnologias e soluções que utilizo
        </p>
        <Marquee items={TECHS} />
      </Reveal>
    </section>
  );
}
