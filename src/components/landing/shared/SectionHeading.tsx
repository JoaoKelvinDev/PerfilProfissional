import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-white/[0.02] px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
        <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-glow" />
        {eyebrow}
      </span>
      <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-gradient sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-balance text-base text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
