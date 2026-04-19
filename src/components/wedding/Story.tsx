"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { generateWeddingStory } from "@/ai/flows/generate-wedding-story";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import ScrollReveal from "./ScrollReveal";

export default function Story() {
  const [story, setStory] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const text = await generateWeddingStory({ coupleName1: "Aisha", coupleName2: "Zaid" });
        setStory(text);
      } catch (error) {
        setStory("Our journey began like a quiet melody, growing into a beautiful symphony of love. From the first moment our paths crossed under the starlit sky, we knew destiny had a special plan for us. \n\nThrough shared dreams and whispered prayers, our bond strengthened, rooted in faith and deep mutual respect. Every day has been a discovery of kindness, laughter, and the gentle comfort of finding a soulmate in one another. \n\nNow, as we stand at the threshold of this sacred union, we invite you to witness the beginning of our forever chapter. This is not just our story, but a testament to the love that Allah has placed in our hearts.");
      } finally {
        setLoading(false);
      }
    };
    fetchStory();
  }, []);

  const img1 = PlaceHolderImages.find(i => i.id === "wedding1");
  const img2 = PlaceHolderImages.find(i => i.id === "wedding2");

  return (
    <section id="story" className="py-24 md:py-32 bg-navy-lighter/30 relative">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Photo Stack */}
          <div className="relative flex items-center justify-center">
            <ScrollReveal className="relative z-10 w-3/4 aspect-[3/4] rounded-tl-[100px] rounded-br-[100px] overflow-hidden shadow-2xl border border-gold/20">
              <Image 
                src={img1?.imageUrl || ""} 
                alt="Story Image 1" 
                fill 
                className="object-cover"
                data-ai-hint="wedding couple"
              />
              <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.4)]" />
            </ScrollReveal>
            <ScrollReveal delay={200} className="absolute -bottom-10 -right-4 w-1/2 aspect-[3/4] rounded-tl-[60px] rounded-br-[60px] overflow-hidden shadow-2xl border border-gold/20">
              <Image 
                src={img2?.imageUrl || ""} 
                alt="Story Image 2" 
                fill 
                className="object-cover"
                data-ai-hint="wedding couple"
              />
              <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.4)]" />
            </ScrollReveal>
          </div>

          {/* Text Content */}
          <div className="relative pl-0 lg:pl-12">
            <div className="absolute left-0 top-0 w-[2px] h-full bg-gradient-to-b from-gold via-gold/50 to-transparent hidden lg:block" />
            
            <ScrollReveal>
              <h2 className="font-headline text-4xl md:text-6xl text-ivory mb-8 italic leading-tight">
                A Love Written <br /> in Stars
              </h2>
            </ScrollReveal>

            <div className="space-y-6">
              {loading ? (
                <div className="space-y-4">
                  <div className="h-4 bg-ivory/10 rounded w-full animate-pulse" />
                  <div className="h-4 bg-ivory/10 rounded w-5/6 animate-pulse" />
                  <div className="h-4 bg-ivory/10 rounded w-4/6 animate-pulse" />
                </div>
              ) : (
                story.split('\n\n').map((paragraph, i) => (
                  <ScrollReveal key={i} delay={i * 150}>
                    <p className="font-body text-ivory/80 text-base md:text-lg leading-relaxed">
                      {paragraph}
                    </p>
                  </ScrollReveal>
                ))
              )}
            </div>

            <ScrollReveal delay={500} className="mt-12">
               <div className="flex items-center space-x-4">
                 <div className="w-12 h-[1px] bg-gold" />
                 <span className="font-headline text-2xl text-gold italic">Aisha & Zaid</span>
               </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}