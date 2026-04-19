"use client";

import { Instagram, Send } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Footer() {
  return (
    <footer className="py-24 bg-navy border-t border-gold/10 text-center relative overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="font-headline text-7xl md:text-9xl text-gold mb-8 opacity-40 select-none">
            A & Z
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="font-headline text-3xl md:text-4xl text-gold/80 mb-6 italic tracking-widest">
            بارك الله لكما
          </div>
          <p className="font-body text-ivory/40 text-sm uppercase tracking-[0.2em] mb-12">
            May Allah bless you both
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <p className="font-headline text-xl text-ivory mb-2">15.11.2026</p>
          <p className="font-body text-ivory/50 text-sm tracking-widest">Royal Grand Ballroom · Dubai</p>
        </ScrollReveal>

        <ScrollReveal delay={400} className="mt-12 flex justify-center space-x-6">
          <a href="#" className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-navy transition-all duration-300">
             <Instagram size={18} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-navy transition-all duration-300">
             <Send size={18} />
          </a>
        </ScrollReveal>

        <ScrollReveal delay={500} className="mt-20">
          <p className="font-body text-[10px] text-ivory/30 uppercase tracking-[0.5em]">
            Made with love · November 2026
          </p>
        </ScrollReveal>
      </div>
    </footer>
  );
}