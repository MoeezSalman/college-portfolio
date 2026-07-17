import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import ProgramsPreview from "@/components/home/ProgramsPreview";
import TestimonialsPreview from "@/components/home/TestimonialsPreview";
import NewsPreview from "@/components/home/NewsPreview";
import CTA from "@/components/home/CTA";
import Stats from "@/components/home/Stats";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <ProgramsPreview />
      <TestimonialsPreview />
      <NewsPreview />
      <CTA />
    </>
  );
}