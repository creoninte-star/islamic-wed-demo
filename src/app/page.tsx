import IntroAnimation from "@/components/wedding/IntroAnimation";
import Navbar from "@/components/wedding/Navbar";
import Hero from "@/components/wedding/Hero";
import Countdown from "@/components/wedding/Countdown";
import Story from "@/components/wedding/Story";
import Timeline from "@/components/wedding/Timeline";
import Gallery from "@/components/wedding/Gallery";
import Venue from "@/components/wedding/Venue";
import RSVP from "@/components/wedding/RSVP";
import Footer from "@/components/wedding/Footer";
import WhatsAppButton from "@/components/wedding/WhatsAppButton";

export default function WeddingPage() {
  return (
    <main className="relative min-h-screen bg-navy selection:bg-gold/30 selection:text-gold overflow-hidden">
      {/* Cinematic Intro */}
      <IntroAnimation />
      
      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <Hero />
      <Countdown />
      <Story />
      <Timeline />
      <Gallery />
      <Venue />
      <RSVP />
      <Footer />

      {/* Floating Elements */}
      <WhatsAppButton />
    </main>
  );
}