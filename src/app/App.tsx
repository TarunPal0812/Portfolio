import React, { useEffect } from "react";
import Lenis from "lenis";
import { StarField } from "@/components/effects/StarField";
import { CustomCursor } from "@/components/effects/Cursor";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export const App: React.FC = () => {
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let animationFrameId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    };

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, [prefersReduced]);

  return (
    <div className="relative min-h-screen bg-[#090A0F] text-[#E2E8F0] selection:bg-indigo-500/30 selection:text-white">
      {/* Background Star & Glow Elements */}
      <StarField />

      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Floating Navbar with Progress Bar */}
      <Navbar />

      {/* Page Sections */}
      <main className="relative z-10 flex flex-col gap-12 sm:gap-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
