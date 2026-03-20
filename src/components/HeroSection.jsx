import { ArrowDown } from "lucide-react";
import { motion as Motion } from "framer-motion";


const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4'
    "
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <Motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
          >
            <span>Hi, I'm </span>
            <span className="text-primary">
              Tarun{" "}
            </span>
            <span className="text-glow ml-2">
              Pal
            </span>
          </Motion.h1>
          <Motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            I build smart, user-focused web apps using the MERN stack and modern
            tech—blending functionality with real-world impact.
          </Motion.p>
          <Motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-6"
          >
            <a href="#projects" className="cosmic-button text-lg px-8 py-3">
              View My Work
            </a>
          </Motion.div>  
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
      <span className="text-sm text-muted-foreground mb-2">Scroll</span>
      <ArrowDown className="h-5 w-5 text-primary"/>
      </div>
    </section>
  );
}

export default HeroSection