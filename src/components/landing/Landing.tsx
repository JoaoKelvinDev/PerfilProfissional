import { MotionConfig } from "motion/react";

import { Footer } from "./layout/Footer";
import { Nav } from "./layout/Nav";
import { WhatsAppFloat } from "./layout/WhatsAppFloat";
import { About } from "./sections/About";
import { CTA } from "./sections/CTA";
import { FAQ } from "./sections/FAQ";
import { Features } from "./sections/Features";
import { Hero } from "./sections/Hero";
import { Portfolio } from "./sections/Portfolio";
import { Process } from "./sections/Process";
import { Services } from "./sections/Services";
import { TechMarquee } from "./sections/TechMarquee";
import { BackgroundFX, ScrollProgress } from "./shared/effects";

export function Landing() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative isolate min-h-screen overflow-x-clip bg-background text-foreground antialiased">
        <ScrollProgress />
        <BackgroundFX />
        <Nav />
        <main>
          <Hero />
          <TechMarquee />
          <Services />
          <Features />
          <Process />
          <Portfolio />
          <About />
          <FAQ />
          <CTA />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </MotionConfig>
  );
}
