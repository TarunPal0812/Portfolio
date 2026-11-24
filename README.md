# Tarun Pal — Portfolio 2.0 (AI Developer Edition)

> Personal developer portfolio positioning **Tarun Pal** as a **Full-Stack & GenAI / Agentic AI Developer**.  
> Live URL: [https://tarun-pal.vercel.app](https://tarun-pal.vercel.app)

---

## 🚀 Key Features

- **Futuristic & Premium Aesthetic:** Dark-first design (`#07070A`) with electric violet to cyan gradients, ambient starfield glow, and glassmorphism cards.
- **Agentic AI & Full-Stack Focus:** Prominently highlights **LangGraph, LangChain, FastAPI, RAG, and Vector Databases** alongside core full-stack skills.
- **Interactive Bento Grid:** Showcase of projects with hover spotlights, AI categorization badges, and full case-study modals (ESC/keyboard accessible).
- **Infinite Skills Marquee:** Seamless, smooth scrolling tech marquee plus interactive categorized skill panels.
- **Scroll Storytelling & Motion:** Floating pill navbar with active section detection and scroll progress bar; Lenis smooth scrolling.
- **Strict Accessibility:** Full `prefers-reduced-motion` compliance, semantic markup, and ARIA labels.
- **SEO & Schema Optimized:** Complete Open Graph tags, Twitter cards, XML sitemap, `robots.txt`, and JSON-LD `Person` schema.

---

## 🛠️ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | React 19 + Vite 7 + TypeScript (Strict Mode) |
| **Styling** | Tailwind CSS + CSS variables |
| **Motion** | Framer Motion + GSAP |
| **Smooth Scroll** | Lenis |
| **Icons** | Lucide React |
| **Forms & Validation** | React Hook Form + Zod |
| **Deployment** | Vercel |

---

## 📁 Repository Structure

```
portfolio/
├── AGENTS.md                  # Development guidelines & source of truth
├── docs/
│   ├── AUDIT.md               # Codebase audit & migration record
│   ├── DESIGN_SYSTEM.md       # Visual tokens, colors, type scale & motion
│   └── PROGRESS.md            # Real-time task progress tracking
├── public/
│   ├── resume.pdf             # Tarun's Resume
│   ├── projects/              # Screenshot and demo assets
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── app/                   # App shell with Lenis smooth scroll
│   ├── components/
│   │   ├── effects/           # Cursor, Marquee, Spotlight, StarField
│   │   └── sections/          # Hero, About, Skills, Projects, Experience, Contact, Navbar, Footer
│   ├── data/                  # profile.ts, skills.ts, projects.ts, experience.ts
│   ├── hooks/                 # useTheme, useReducedMotion, useScrollProgress
│   ├── lib/                   # utils, motion variants, constants
│   └── styles/                # globals.css
└── .github/workflows/ci.yml   # GitHub Actions CI (lint, typecheck, build)
```

---

## 💻 Local Development

```bash
# 1. Clone the repository
git clone https://github.com/TarunPal0812/prortfolio-new.git
cd prortfolio-new

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev

# 4. Typecheck TypeScript
npm run typecheck

# 5. Run ESLint
npm run lint

# 6. Build for production
npm run build

# 7. Preview production build locally
npm run preview
```

---

## 📬 Contact & Connect

- **Email:** [tarunpal0812@gmail.com](mailto:tarunpal0812@gmail.com)
- **LinkedIn:** [Tarun Pal](https://www.linkedin.com/in/tarun-pal-35a7b2275)
- **GitHub:** [TarunPal0812](https://github.com/TarunPal0812)
- **X (Twitter):** [@itzz_tarun08](https://x.com/itzz_tarun08)
