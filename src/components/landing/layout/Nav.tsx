import { motion } from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

import { NAV_LINKS } from "../data/nav";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5",
      )}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div
          className={cn(
            "flex items-center justify-between rounded-full border border-transparent px-4 py-2.5 transition-all",
            scrolled && "glass-strong border-border/60 shadow-elegant",
          )}
        >
          <a href="#top" className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary to-primary-glow text-sm font-bold text-primary-foreground shadow-glow">
              JK
            </span>
            <span className="text-sm font-semibold tracking-tight">João Kelvin</span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-white/[0.04] hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button asChild size="sm" className="rounded-full">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Conversar
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
          </div>

          <button
            aria-label="Abrir menu"
            className="grid h-9 w-9 place-items-center rounded-full border border-border/60 md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-strong mt-2 flex flex-col gap-1 rounded-2xl border border-border/60 p-3 md:hidden"
          >
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-white/[0.04] hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <Button asChild size="sm" className="mt-2 rounded-full">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Conversar no WhatsApp
              </a>
            </Button>
          </motion.div>
        )}
      </div>
    </header>
  );
}
