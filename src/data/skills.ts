export interface SkillItem {
  name: string;
  status?: "Core" | "Proficient" | "Learning";
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "ai",
    title: "GenAI & Agentic AI",
    description: "Multi-agent workflows, vector retrieval, and LLM orchestration",
    skills: [
      { name: "LangGraph", status: "Core" },
      { name: "LangChain", status: "Core" },
      { name: "RAG Architectures", status: "Core" },
      { name: "Vector Databases", status: "Core" },
      { name: "Document Chunking", status: "Core" },
      { name: "Embeddings", status: "Core" },
      { name: "Tool & Function Calling", status: "Core" },
      { name: "Prompt Engineering", status: "Core" },
      { name: "Gradio", status: "Proficient" },
    ],
  },
  {
    id: "backend",
    title: "Backend & Systems",
    description: "High-performance REST APIs, data modeling, and authentication",
    skills: [
      { name: "FastAPI", status: "Core" },
      { name: "Node.js", status: "Core" },
      { name: "Express.js", status: "Core" },
      { name: "RESTful API Design", status: "Core" },
      { name: "PostgreSQL", status: "Proficient" },
      { name: "MongoDB", status: "Core" },
      { name: "JWT & Clerk Auth", status: "Core" },
      { name: "Java", status: "Learning" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    description: "Responsive interfaces, component architecture, and UI performance",
    skills: [
      { name: "React 18 / 19", status: "Core" },
      { name: "TypeScript", status: "Core" },
      { name: "JavaScript (ES6+)", status: "Core" },
      { name: "Tailwind CSS", status: "Core" },
      { name: "Framer Motion", status: "Proficient" },
      { name: "Responsive UI", status: "Core" },
    ],
  },
  {
    id: "devops",
    title: "DevOps & Tooling",
    description: "Version control, containerization, and build pipelines",
    skills: [
      { name: "Git & GitHub", status: "Core" },
      { name: "Docker", status: "Proficient" },
      { name: "Linux / Bash", status: "Proficient" },
      { name: "CI/CD (Actions)", status: "Proficient" },
      { name: "Postman", status: "Core" },
      { name: "Vercel & Render", status: "Core" },
    ],
  },
];

export const coreStack: string[] = [
  "TypeScript",
  "Python",
  "React",
  "FastAPI",
  "LangGraph",
  "Node.js",
  "Tailwind CSS",
  "Docker",
];
