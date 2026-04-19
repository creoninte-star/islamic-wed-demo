"use client";

import { Send } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-gold p-4 rounded-full shadow-[0_0_20px_rgba(201,168,76,0.5)] hover:scale-110 active:scale-95 transition-all group"
    >
      <Send className="text-navy group-hover:rotate-12 transition-transform" size={24} />
      <span className="absolute right-full mr-4 bg-navy-lighter/90 text-gold text-xs py-2 px-4 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm border border-gold/20">
        Contact Host
      </span>
    </a>
  );
}