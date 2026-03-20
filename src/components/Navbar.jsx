import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const mobileMenu = (
    <div
      className={cn(
        "fixed inset-0 bg-background/97 backdrop-blur-lg z-[9999] flex flex-col items-center justify-center",
        "transition-all duration-300 md:hidden",
        isMenuOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      )}
    >
      <button
        onClick={() => setIsMenuOpen(false)}
        className="absolute top-5 right-5 p-2 rounded-full text-foreground hover:bg-foreground/10 transition-colors duration-200"
        aria-label="Close Menu"
      >
        <X size={24} />
      </button>

      <div className="flex flex-col items-center space-y-6">
        {navItems.map((item, key) => (
          <a
            key={key}
            href={item.href}
            className="text-2xl font-semibold text-foreground/80 hover:text-primary transition-colors duration-300 tracking-wide"
            onClick={() => setIsMenuOpen(false)}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 w-full z-40 transition-all duration-300",
          isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
        )}
      >
        <div className="container flex items-center justify-between">
          <a
            className="font-['Space_Grotesk'] tracking-tight text-primary flex items-center text-xl md:text-3xl"
            href="#hero"
          >
            <span className="relative z-10">
              <span className="text-glow text-foreground">Tarun's</span>{" "}
              Portfolio
            </span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-3 md:hidden z-50">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-2 rounded-md text-foreground hover:bg-foreground/10 transition-colors duration-200"
              aria-label="Open Menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      {ReactDOM.createPortal(mobileMenu, document.body)}
    </>
  );
};
