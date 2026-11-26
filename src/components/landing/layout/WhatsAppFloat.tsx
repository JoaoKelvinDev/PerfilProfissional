import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

import { WHATSAPP_URL } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 16 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="group fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[oklch(0.68_0.17_150)] text-white shadow-elegant"
    >
      <motion.span
        animate={{ rotate: [0, -12, 12, -8, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 4 }}
        className="grid place-items-center"
      >
        <MessageCircle className="h-6 w-6" />
      </motion.span>
      <span
        aria-hidden
        className="absolute inset-0 -z-10 animate-ping rounded-full bg-[oklch(0.68_0.17_150)] opacity-30"
      />
      <span className="pointer-events-none absolute right-full mr-3 hidden translate-x-2 whitespace-nowrap rounded-full bg-background/90 px-3 py-1.5 text-xs font-medium text-foreground opacity-0 shadow-elegant ring-1 ring-border backdrop-blur transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
        Fale comigo no WhatsApp
      </span>
    </motion.a>
  );
}
