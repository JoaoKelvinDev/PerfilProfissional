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
    <footer className="border-t border-border/60 py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-[1fr_auto] sm:items-center">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-sm font-bold text-primary-foreground shadow-glow">
              JK
            </span>
            <div>
              <div className="text-sm font-semibold">João Kelvin</div>
              <div className="text-xs text-muted-foreground">Soluções Digitais</div>
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
                className="grid h-9 w-9 place-items-center rounded-full border border-border/60 bg-white/[0.02] text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
              >
                <l.icon className="h-4 w-4" />
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} João Kelvin. Todos os direitos reservados.</p>
          <p>Feito com atenção aos detalhes.</p>
        </div>
      </div>
    </footer>
  );
}
