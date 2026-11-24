export interface NavItem {
  name: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export const SITE_CONFIG = {
  name: "Tarun Pal",
  title: "Tarun Pal | Full-Stack & Agentic AI Developer",
  description:
    "Personal portfolio of Tarun Pal - Full-Stack Engineer and Agentic AI Developer skilled in React, LangGraph, FastAPI, and RAG architectures.",
  url: "https://tarun-pal.vercel.app",
};
