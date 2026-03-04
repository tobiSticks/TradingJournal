import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { HowItWorks } from "@/components/HowItWorks";
import { FooterCTA } from "@/components/FooterCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-white flex flex-col items-center w-full">
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <FooterCTA />
    </main>
  );
}
