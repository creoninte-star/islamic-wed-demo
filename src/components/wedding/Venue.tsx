"use client";

import { MapPin, Calendar, Clock } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Venue() {
  return (
    <section id="venue" className="py-24 md:py-32 bg-navy relative">
      <div className="absolute inset-0 islamic-watermark opacity-10" />
      
      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Venue Details */}
          <ScrollReveal>
            <div className="relative p-1">
              {/* Ornate Arch Frame SVG */}
              <div className="absolute inset-0 -m-4 border border-gold/20 rounded-[40px] pointer-events-none" />
              <div className="glass-card p-8 md:p-12 rounded-[30px] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                   <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor" className="text-gold">
                      <path d="M50 0 L100 50 L50 100 L0 50 Z" />
                   </svg>
                </div>

                <h2 className="font-headline text-3xl md:text-5xl text-ivory mb-8">
                   The Royal Venue
                </h2>

                <div className="space-y-8">
                   <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                         <MapPin className="text-gold" size={20} />
                      </div>
                      <div>
                         <h4 className="font-headline text-xl text-gold mb-1">The Royal Grand Ballroom</h4>
                         <p className="font-body text-ivory/70 leading-relaxed">
                            Atlantis The Royal, Palm Jumeirah <br />
                            Dubai, United Arab Emirates
                         </p>
                      </div>
                   </div>

                   <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                         <Calendar className="text-gold" size={20} />
                      </div>
                      <div>
                         <h4 className="font-headline text-xl text-gold mb-1">15th November 2026</h4>
                         <p className="font-body text-ivory/70">Saturday</p>
                      </div>
                   </div>

                   <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                         <Clock className="text-gold" size={20} />
                      </div>
                      <div>
                         <h4 className="font-headline text-xl text-gold mb-1">7:00 PM onwards</h4>
                         <p className="font-body text-ivory/70">Grand Reception & Dinner</p>
                      </div>
                   </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gold/10">
                   <a 
                     href="https://maps.app.goo.gl/..." 
                     target="_blank"
                     className="inline-block py-3 px-8 rounded-full border border-gold text-gold font-body text-sm uppercase tracking-widest hover:bg-gold hover:text-navy transition-all duration-300"
                   >
                     Get Directions
                   </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Map */}
          <ScrollReveal delay={300} className="w-full aspect-square md:aspect-video lg:aspect-square relative rounded-[30px] overflow-hidden border border-gold/20 shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.3364983053!2d55.11652877626359!3d25.124633877759863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f153a0604246d%3A0xc3c9405b6300185!2sBurj%20Al%20Arab!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.7) contrast(1.2)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}