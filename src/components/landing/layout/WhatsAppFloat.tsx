import { MessageCircle } from "lucide-react";

import { WHATSAPP_URL } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[oklch(0.68_0.17_150)] text-white shadow-elegant transition-transform hover:scale-105"
    >
      <MessageCircle className="h-6 w-6" />
      <span
        aria-hidden
        className="absolute inset-0 -z-10 animate-ping rounded-full bg-[oklch(0.68_0.17_150)] opacity-30"
      />
    </a>
  );
}
