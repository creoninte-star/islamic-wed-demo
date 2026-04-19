"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import ScrollReveal from "./ScrollReveal";

const galleryImages = [
  { id: "couple1", span: "row-span-2" },
  { id: "floral1", span: "row-span-1" },
  { id: "couple2", span: "col-span-1" },
  { id: "mosque1", span: "row-span-2" },
  { id: "floral2", span: "row-span-1" },
  { id: "venue1", span: "col-span-1" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-navy-lighter/20">
      <div className="max-w-[1100px] mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl text-ivory mb-4 italic">
            Moments We Cherish
          </h2>
          <div className="ornamental-divider" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {galleryImages.map((item, i) => {
            const imgData = PlaceHolderImages.find((img) => img.id === item.id);
            return (
              <ScrollReveal 
                key={i} 
                delay={i * 100}
                className={item.span}
              >
                <div className="group relative w-full h-full overflow-hidden rounded-xl cursor-pointer">
                  <Image
                    src={imgData?.imageUrl || ""}
                    alt={imgData?.description || "Gallery Photo"}
                    fill
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                    data-ai-hint={imgData?.imageHint}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gold/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-0 border border-gold/0 transition-all duration-500 group-hover:border-gold/30 m-2 rounded-lg" />
                  
                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 w-full p-6 translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                    <p className="font-headline text-xl text-ivory italic">
                      {imgData?.description || "Wedding Moment"}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}