import logoPerfil from "../../../assets/logo-perfil.png";

import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

import { NAV_LINKS } from "../data/nav";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const ids = ["top", ...NAV_LINKS.map((l) => l.href.slice(1))];
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
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
          <a href="#top" className="group flex items-center gap-2.5">
            <span className="grid h-9 w-9 transition-transform duration-300 group-hover:rotate-[-6deg] group-hover:scale-110 place-items-center overflow-hidden rounded-full border border-white/10 bg-background/70 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_8px_24px_rgba(0,0,0,0.2)] backdrop-blur-sm">
              <img src={logoPerfil} alt="JK Systems" className="h-full w-full object-cover" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-sm font-semibold tracking-tight">
                JK <span className="text-primary">Systems</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Soluções Digitais
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={cn(
                  "relative isolate rounded-full px-3 py-1.5 text-sm transition-colors hover:text-foreground",
                  active === l.href ? "text-foreground" : "text-muted-foreground",
                )}
              >
                {active === l.href && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-full bg-white/[0.06] ring-1 ring-inset ring-primary/30"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button asChild size="sm" className="btn-shine group rounded-full shadow-glow">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Conversar
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>
          </div>

          <button
            aria-label="Abrir menu"
            className="grid h-9 w-9 place-items-center rounded-full border border-border/60 md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? "x" : "menu"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>

        <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
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
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
