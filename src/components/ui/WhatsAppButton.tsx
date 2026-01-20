"use client";
import { IconBrandWhatsapp } from "@tabler/icons-react";

export function WhatsAppButton() {
  // Replace with your actual number (include country code, no spaces/plus)
  const phoneNumber = "+918469159877";
  const message = "Hi DAV Labs, I'm interested in your services.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Tooltip text */}
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-xs font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us
      </span>

      {/* The Button */}
      <div className="relative flex items-center justify-center w-10 h-10 bg-background rounded-full border border-border shadow-sm hover:bg-muted transition-all duration-300 hover:scale-105">
        <IconBrandWhatsapp className="text-foreground w-5 h-5 relative z-10" stroke={1.5} />
      </div>
    </a>
  );
}