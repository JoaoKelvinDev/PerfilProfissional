import { ArrowRight, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/site";

import { Reveal } from "../shared/Reveal";

export function CTA() {
  return (
    <section id="cta" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4">
        <Reveal className="glass-strong relative overflow-hidden rounded-3xl px-6 py-16 text-center shadow-elegant sm:px-12 sm:py-20">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 opacity-70"
            style={{
              background:
                "radial-gradient(ellipse 60% 80% at 50% 0%, oklch(0.58 0.222 264 / 0.35), transparent 70%)",
            }}
          />
          <div aria-hidden className="absolute inset-0 -z-10 bg-grid opacity-40" />

          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            <span className="text-gradient">Vamos transformar sua ideia em um projeto?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-balance text-base text-muted-foreground sm:text-lg">
            Entre em contato e descubra como a tecnologia pode impulsionar seu negócio.
          </p>

          <div className="mt-10 flex justify-center">
            <Button
              asChild
              size="lg"
              className="group h-14 rounded-full px-8 text-base shadow-glow"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Conversar no WhatsApp
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
