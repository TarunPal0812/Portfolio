export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  coursework: string[];
  status?: string;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export const educationList: EducationItem[] = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Swami Vivekananda Institute of Science and Technology (SVIST)",
    location: "Kolkata, West Bengal",
    period: "2022 – 2026",
    status: "In Progress (Senior Year)",
    coursework: [
      "Data Structures & Algorithms",
      "Database Management Systems (DBMS)",
      "Operating Systems",
      "Computer Networks",
      "Object-Oriented Programming & Web Technologies",
    ],
  },
];

export const experienceList: ExperienceItem[] = [
  {
    role: "Full-Stack & AI Project Engineer",
    organization: "Independent Development",
    period: "2024 – Present",
    description:
      "Architected and deployed full-stack SaaS solutions and agentic RAG workflows combining React frontends with FastAPI and LangGraph backends.",
    highlights: [
      "Designed an agentic IT Support assistant with LangGraph, autonomous tool calling, and SSE streaming.",
      "Engineered CraftlyAI SaaS with Google Gemini text generation and ClipDrop image processing pipelines.",
      "Implemented responsive, accessible interfaces with Tailwind CSS and Framer Motion.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "FastAPI",
      "LangGraph",
      "Python",
      "Tailwind CSS",
      "MongoDB",
    ],
  },
  {
    role: "Web Development Specialist",
    organization: "Academic & Freelance Projects",
    period: "2023 – 2024",
    description:
      "Built multi-role management platforms and social applications with relational and NoSQL databases.",
    highlights: [
      "Constructed a Doctor Appointment Booking system with RBAC dashboards and Razorpay payment integration.",
      "Created a social blogging platform with JWT authentication, MySQL schema, and markdown support.",
    ],
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "MySQL", "JWT"],
  },
];
