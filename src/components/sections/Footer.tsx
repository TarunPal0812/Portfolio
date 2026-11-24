import React from "react";
import { ArrowUp, Github, Linkedin, Twitter } from "lucide-react";
import { profile } from "@/data/profile";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.06] bg-[#090a0f] py-12 px-4 sm:px-6 relative z-10">
      <div className="container max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <p className="text-sm font-semibold text-white font-['Space_Grotesk']">
            {profile.name}
          </p>
          <p className="text-xs text-zinc-500 font-mono">
            Full-Stack & Agentic AI Engineer • {profile.location}
          </p>
        </div>

        {/* Links & Back to top */}
        <div className="flex items-center gap-4 text-xs text-zinc-400">
          <a
            href="https://github.com/TarunPal0812"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-white transition-colors"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/tarun-pal-35a7b2275"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-white transition-colors"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="https://x.com/itzz_tarun08"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="hover:text-white transition-colors"
          >
            <Twitter size={16} />
          </a>

          <span className="text-zinc-600">|</span>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 hover:text-white transition-colors"
          >
            <span>Top</span>
            <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
};
