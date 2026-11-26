import logoPerfil from "../../../assets/logo-perfil.png";

import { Github, Globe, Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";

import { SOCIAL, WHATSAPP_URL } from "@/lib/site";

export function Footer() {
  const links = [
    { href: SOCIAL.instagram, label: "Instagram", icon: Instagram },
    { href: SOCIAL.linkedin, label: "LinkedIn", icon: Linkedin },
    { href: SOCIAL.github, label: "GitHub", icon: Github },
    { href: WHATSAPP_URL, label: "WhatsApp", icon: MessageCircle },
    { href: SOCIAL.email, label: "Email", icon: Mail },
    { href: "#portfolio", label: "Portfólio", icon: Globe },
  ];

  return (
    <footer className="relative border-t border-border/60 py-12">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"
      />
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-[1fr_auto] sm:items-center">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-full border border-white/10 bg-background/70 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_10px_30px_rgba(0,0,0,0.22)] backdrop-blur-sm">
              <img src={logoPerfil} alt="JK Systems" className="h-full w-full object-cover" />
            </span>
            <div>
              <div className="text-sm font-semibold">JK <span className="text-primary">Systems</span></div>
              <div className="text-xs text-muted-foreground">Soluções Digitais · por João Kelvin</div>
            </div>
          </div>

          <nav className="flex flex-wrap items-center gap-2">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={l.label}
                className="grid h-9 w-9 place-items-center rounded-full border border-border/60 bg-white/[0.02] text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/10 hover:text-foreground hover:shadow-glow"
              >
                <l.icon className="h-4 w-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
