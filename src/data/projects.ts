export type ProjectCategory = "all" | "ai" | "fullstack" | "frontend";

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  category: "ai" | "fullstack" | "frontend";
  featured?: boolean;
  links: {
    live?: string;
    github?: string;
  };
  media: {
    cover: string;
  };
  metrics?: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    id: "it-support-chatbot",
    title: "IT Support AI Assistant",
    tagline: "Agentic RAG pipeline with relevance grading, web fallback & ticket generation",
    description:
      "A stateful AI IT support system built with LangGraph and FastAPI. It retrieves enterprise IT knowledge from vector storage, evaluates retrieval quality, and falls back to Tavily Web Search when internal documentation confidence is low.",
    highlights: [
      "Built multi-node LangGraph pipeline with query rewriting and relevance grading.",
      "Engineered automated fallback to web search tool calling for real-time external data.",
      "Integrated ticket creation tool calling to log unresolved issues in a mock ticketing system.",
      "Implemented Server-Sent Events (SSE) streaming for token-level real-time UI feedback.",
    ],
    stack: [
      "LangGraph",
      "LangChain",
      "FastAPI",
      "Python",
      "Qdrant",
      "Tavily",
      "React",
      "TypeScript",
    ],
    category: "ai",
    featured: true,
    links: {
      github: "https://github.com/TarunPal0812",
      live: "https://tarun-pal.vercel.app",
    },
    media: {
      cover: "/projects/project1.png",
    },
    metrics: [
      { label: "Architecture", value: "LangGraph StateGraph" },
      { label: "Streaming", value: "FastAPI SSE" },
    ],
  },
  {
    id: "craftly-ai",
    title: "CraftlyAI — Media & Document SaaS",
    tagline: "Full-stack AI SaaS platform for content generation and media transformation",
    description:
      "A production-ready SaaS application providing AI content generation, image editing, and structured resume parsing with role authentication and tiered rate limits.",
    highlights: [
      "Integrated Google Gemini API for structured prompt generation and document parsing.",
      "Constructed image editing and background removal pipelines using ClipDrop and Cloudinary.",
      "Implemented Clerk authentication with protected API middleware and user credit tracking.",
      "Engineered clean MERN stack architecture styled with Tailwind CSS.",
    ],
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Gemini API", "Cloudinary", "Clerk"],
    category: "ai",
    featured: true,
    links: {
      live: "https://craftlyai-client.netlify.app/",
      github: "https://github.com/TarunPal0812/craftlyAI-client",
    },
    media: {
      cover: "/projects/project1.png",
    },
    metrics: [
      { label: "Platform", value: "Full-Stack SaaS" },
      { label: "Auth", value: "Clerk RBAC" },
    ],
  },
  {
    id: "doc-appoint",
    title: "DocAppoint — Healthcare Scheduling",
    tagline: "Multi-dashboard clinic scheduling system with payment integration",
    description:
      "A clinical appointment management application featuring separate portals for Patients, Doctors, and Administrators with real-time scheduling and secure payment processing.",
    highlights: [
      "Built role-based dashboards for administrators, practicing physicians, and patients.",
      "Engineered slot allocation logic with conflict detection for doctor consultations.",
      "Integrated Razorpay gateway for seamless payment processing and receipt generation.",
      "Implemented Cloudinary for prescription uploads and medical report attachments.",
    ],
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Razorpay", "Cloudinary"],
    category: "fullstack",
    links: {
      live: "https://docappoint-client.netlify.app/",
      github: "https://github.com/TarunPal0812/DocAppoint-Client",
    },
    media: {
      cover: "/projects/project2.png",
    },
    metrics: [
      { label: "Dashboards", value: "3 Roles" },
      { label: "Payments", value: "Razorpay" },
    ],
  },
  {
    id: "blog-md",
    title: "Blog-MD — Social Publishing Platform",
    tagline: "Community blogging platform with markdown parsing, comments & followers",
    description:
      "A relational blogging platform supporting markdown authoring, user accounts, nested discussions, post reactions, and user follower relationships.",
    highlights: [
      "Implemented JWT authentication with secure HTTP-only cookies and session protection.",
      "Designed normalized relational schema in MySQL for users, posts, comments, and follows.",
      "Built client-side markdown editor with live syntax highlighting and sanitized preview.",
      "Integrated responsive layout with Tailwind CSS and optimized database queries.",
    ],
    stack: ["React", "Node.js", "Express.js", "MySQL", "Tailwind CSS", "JWT"],
    category: "fullstack",
    links: {
      github: "https://github.com/TarunPal0812/Blog-MD",
    },
    media: {
      cover: "/projects/project3.png",
    },
  },
];
