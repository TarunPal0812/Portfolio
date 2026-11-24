import React, { useState, useEffect } from "react";
import { Menu, X, Github, ArrowUpRight } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import { profile } from "@/data/profile";

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map((item) => item.href.replace("#", ""));
      const scrollPos = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Precision Progress Line */}
      <div
        className="fixed top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-indigo-500 via-indigo-400 to-slate-400 z-50 origin-left"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      {/* Floating Dark Glass Navbar */}
      <header className="fixed top-4 left-0 right-0 z-40 flex justify-center px-4">
        <nav className="flex items-center justify-between gap-6 px-5 py-2.5 rounded-xl bg-[#0b0d13]/80 backdrop-blur-md border border-white/[0.08] shadow-lg max-w-4xl w-full">
          {/* Brand Name */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="w-2 h-2 rounded-full bg-indigo-500 group-hover:bg-indigo-400 transition-colors" />
            <span className="text-white font-semibold text-sm tracking-tight font-['Space_Grotesk']">
              Tarun Pal
            </span>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    isActive
                      ? "text-white bg-white/[0.08]"
                      : "text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04]"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          {/* Right Action Icons & Resume */}
          <div className="flex items-center gap-2.5">
            <a
              href="https://github.com/TarunPal0812"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors"
            >
              <Github size={16} />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium bg-white/[0.06] hover:bg-white/[0.1] text-zinc-200 hover:text-white border border-white/[0.08] transition-colors"
            >
              <span>Resume</span>
              <ArrowUpRight size={13} className="text-zinc-400" />
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation"
              className="md:hidden p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.06]"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-4 top-20 z-40 p-5 rounded-xl bg-[#0f1118] border border-white/[0.1] shadow-2xl md:hidden">
          <div className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-zinc-300 hover:text-white hover:bg-white/[0.06] rounded-lg transition-colors"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-indigo-400 flex items-center gap-1 py-1"
              >
                <span>View Resume</span>
                <ArrowUpRight size={14} />
              </a>
              <span className="text-xs text-zinc-500 font-mono">{profile.location}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
