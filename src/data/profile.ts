export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  handle?: string;
}

export interface Profile {
  name: string;
  role: string;
  location: string;
  status: string;
  shortBio: string;
  aboutText: string[];
  email: string;
  phone: string;
  resumeUrl: string;
  socials: SocialLink[];
}

export const profile: Profile = {
  name: "Tarun Pal",
  role: "Full-Stack & Agentic AI Engineer",
  location: "Kolkata, India",
  status: "Available for Full-Time Roles & High-Impact Contracts",
  shortBio:
    "Full-Stack Engineer specialized in React, TypeScript, and Generative AI systems. I design end-to-end web applications and stateful AI agent workflows using LangGraph, FastAPI, and RAG architectures.",
  aboutText: [
    "I'm a software engineer with strong foundations in full-stack development (React, Node.js, TypeScript) and practical expertise in modern Generative AI engineering.",
    "My focus centers on bridging traditional web application engineering with agentic AI: building reliable RAG pipelines with document chunking and vector search, stateful agent graphs with LangGraph, and low-latency APIs with FastAPI.",
    "Currently pursuing my B.Tech in Computer Science & Engineering (2022–2026) at SVIST Kolkata, while shipping production-grade software and exploring distributed systems.",
  ],
  email: "tarunpal0812@gmail.com",
  phone: "+91 81589 88834",
  resumeUrl: "/resume.pdf",
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/TarunPal0812",
      icon: "github",
      handle: "TarunPal0812",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/tarun-pal-35a7b2275",
      icon: "linkedin",
      handle: "tarun-pal",
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/itzz_tarun08",
      icon: "twitter",
      handle: "@itzz_tarun08",
    },
  ],
};
