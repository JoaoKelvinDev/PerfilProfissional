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

export function Landing() {
  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <main>
        <Hero />
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
  );
}
