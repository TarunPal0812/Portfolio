# AGENTS.md: Portfolio 2.0 (Frontend Upgrade)

> Read this file fully before doing anything. It is the source of truth for every agent session.
> You have no memory between sessions, so re-read this file and `/docs/PROGRESS.md` at the start of each task.

---

## 1. Mission

Completely rebuild my existing **React portfolio** into an **industry-grade, animated, eye-catching** site that positions me as a **Full-Stack + GenAI / Agentic AI Developer**.

The site must:

1. **Impress in 5 seconds** with a bold hero, smooth motion, and a premium dark aesthetic.
2. **Show my new AI skills** clearly alongside my full-stack background.
3. **Present my projects well** with polished cards and detail views.
4. **Convert**: recruiters and clients should reach me or download my resume in two clicks.

### Scope

- This is a **frontend-only** task. Do not create any backend, API, vector DB, or AI code in this repo.
- Keep my existing projects and content. Migrate them into the new design.
- Do not invent skills, projects, metrics, or testimonials. Use `TODO:` placeholders for anything missing.

### Owner profile

- Intermediate full-stack developer (JavaScript/React/Node strong).
- Newly skilled in **GenAI and Agentic AI**: LangChain, LangGraph, FastAPI (API development), vector databases, chunking and RAG, Gradio, and related tools an AI developer needs.
- Learning Java backend.

---

## 2. Ground rules for the agent

1. **Plan first.** For any task bigger than ~30 lines, post a short plan and wait for approval before coding.
2. **One vertical slice per task.** Never rewrite the whole app in one go.
3. **Never invent libraries, APIs, or props.** If unsure, check the official docs or the installed package's types.
4. **Run before you claim.** Execute `lint`, `typecheck`, `test`, and `build`. Report real output, not assumptions.
5. **Small commits** with Conventional Commit messages (`feat:`, `fix:`, `refactor:`, `chore:`, `docs:`).
6. **No secrets in code.** Use `.env` and commit only `.env.example`.
7. **Preserve my content.** Before deleting old components, move my existing text, links, and project data into `/src/data/*.ts`.
8. **Ask when ambiguous** about content (bio, claims, metrics).
9. **Update `/docs/PROGRESS.md`** at the end of each task (done, next, blockers).

---

## 3. Tech stack (approved; do not swap without an ADR in `/docs/adr/`)

| Concern                             | Choice                                                                                                                   |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Framework                           | React 18+ with **Vite** and **TypeScript** (migrate from CRA if the old app uses it)                                     |
| Styling                             | **Tailwind CSS** + CSS variables for theming                                                                             |
| UI primitives                       | **shadcn/ui** (Radix under the hood)                                                                                     |
| Component effects                   | **Aceternity UI** and **Magic UI** patterns (spotlight, bento grid, marquee, text reveal), copied in as local components |
| Animation (UI/state)                | **Framer Motion** (`motion`)                                                                                             |
| Animation (scroll/timeline)         | **GSAP + ScrollTrigger**                                                                                                 |
| Smooth scroll                       | **Lenis**                                                                                                                |
| Hero visual (optional, lazy-loaded) | **React Three Fiber + drei**, or `tsparticles` as a lighter fallback                                                     |
| Icons                               | `lucide-react` + `react-icons` for brand logos                                                                           |
| Forms                               | `react-hook-form` + `zod`                                                                                                |
| Routing                             | `react-router` only if projects get their own pages; otherwise a single page with modals                                 |
| Testing                             | Vitest + React Testing Library; one Playwright smoke test                                                                |
| Deploy                              | Vercel or Netlify                                                                                                        |
| CI                                  | GitHub Actions (lint, typecheck, test, build on every PR)                                                                |

---

## 4. Repository structure

```
portfolio/
├── AGENTS.md
├── docs/
│   ├── AUDIT.md
│   ├── DESIGN_SYSTEM.md
│   ├── PROGRESS.md
│   └── adr/
├── public/
│   ├── resume.pdf
│   └── projects/                # screenshots, GIFs, diagrams
├── src/
│   ├── app/                     # App shell, providers
│   ├── components/
│   │   ├── ui/                  # shadcn primitives
│   │   ├── effects/             # spotlight, marquee, cursor, text-reveal
│   │   └── sections/            # Hero, About, Skills, Projects, Experience, Contact
│   ├── data/                    # profile.ts, skills.ts, projects.ts, experience.ts
│   ├── hooks/
│   ├── lib/                     # utils, motion variants, constants
│   └── styles/
└── .github/workflows/ci.yml
```

All copy lives in `/src/data/*.ts`. Components never hardcode content.

---

## 5. Design direction

**Vibe:** premium, futuristic, "AI engineer," dark-first, with subtle depth and tasteful motion. Think Linear / Vercel / Raycast, not a template.

### Design tokens (define in `DESIGN_SYSTEM.md` and the Tailwind config)

- **Background:** near-black (`#07070A`) with layered radial gradients and a faint noise or grid texture.
- **Primary accent:** electric violet to cyan gradient (`#7C3AED` to `#22D3EE`). Use sparingly for emphasis.
- **Surface:** glassmorphism cards (`bg-white/5`, `backdrop-blur`, 1px `border-white/10`).
- **Typography:** `Inter` or `Geist` for body, `Space Grotesk` or `Clash Display` for headings, `JetBrains Mono` for code and labels. Fluid type scale using `clamp()`.
- **Radius and spacing:** consistent 4/8px scale; large rounded cards (`rounded-2xl`).
- **Theme:** dark default with a light-mode toggle (persisted, respects `prefers-color-scheme`).

### Motion principles

1. **Purposeful:** every animation guides attention or gives feedback.
2. **Consistent:** shared easing and durations live in `lib/motion.ts` (e.g. `ease: [0.22, 1, 0.36, 1]`, 0.4 to 0.8s).
3. **Scroll storytelling:** section reveals via GSAP ScrollTrigger or Framer `whileInView`; stagger children.
4. **Micro-interactions:** magnetic buttons, hover spotlight on cards, animated gradient borders, custom cursor (desktop only).
5. **Respect `prefers-reduced-motion`.** Disable parallax and heavy effects when set. Mandatory.
6. **Performance:** animate only `transform` and `opacity`; lazy-load 3D and particles.

### Signature effects

- **Hero:** animated gradient mesh or particles, a word-rotating headline ("AI Agent Developer · Full-Stack Engineer"), magnetic CTA buttons.
- **Navbar:** floating pill navbar with active-section highlight and a scroll progress bar.
- **Skills:** infinite marquee plus an interactive categorized grid.
- **Projects:** bento grid with hover spotlight; each project opens a detail modal.
- **Experience:** animated vertical timeline.
- **Footer:** large gradient wordmark with social links.

---

## 6. Page sections (in order)

1. **Hero:** name, role, one-line value statement, CTAs (View Projects, Download Resume, Contact).
2. **About:** short story, photo, key stats (only real, verifiable numbers).
3. **Skills:** grouped by category (see 6.1).
4. **Projects:** bento grid of all projects, with AI projects visually highlighted.
5. **Experience / Education / Certifications.**
6. **Contact:** validated form (zod) via Formspree or a serverless email handler, plus social links.

### 6.1 Skills content (put in `src/data/skills.ts`)

| Category                                        | Skills                                                                                                                                                                                                            |
| ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **GenAI and Agentic AI** (highlight this group) | LLM application development, Prompt engineering, RAG (Retrieval-Augmented Generation), Document chunking strategies, Embeddings, Vector databases, AI agents, Tool/function calling, LangChain, LangGraph, Gradio |
| **Backend and APIs**                            | FastAPI, Node.js, REST API design, Authentication, SQL/NoSQL databases, Java (learning)                                                                                                                           |
| **Frontend**                                    | React, JavaScript, TypeScript, Tailwind CSS, Framer Motion, responsive design                                                                                                                                     |
| **Languages**                                   | JavaScript, TypeScript, Python, Java (learning)                                                                                                                                                                   |
| **DevOps and Tools**                            | Git/GitHub, Docker, CI/CD, cloud deployment                                                                                                                                                                       |

Rules:

- Show only skills I actually have. Ask me before adding any tool not listed here (for example specific vector DB names such as Chroma or Qdrant, or specific LLM providers).
- Give the **GenAI and Agentic AI** group the most visual weight: it appears first or as a larger card with a gradient border and an "AI" badge.
- Do not show fake proficiency percentages. Use grouping, or levels like "Core / Working / Learning".

### 6.2 Project data model (put in `src/data/projects.ts`)

```ts
type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string; // 2-3 sentences, my own words
  highlights: string[]; // 3-5 bullet points
  stack: string[];
  category: "ai" | "fullstack" | "frontend" | "backend";
  featured?: boolean; // larger tile in the bento grid
  links: { live?: string; github?: string; video?: string };
  media: { cover: string; gallery?: string[] };
  metrics?: { label: string; value: string }[]; // only real numbers I provide
};
```

Rules:

- Migrate all existing projects into this shape.
- A link whose value is missing or starts with `TODO` must **hide its button**, not render a broken link.
- Projects with `category: "ai"` get an "AI" badge and a subtle gradient border.
- I will add new AI projects to this file myself. Build the section so that adding a project needs **only a data change**, with no component edits.

### 6.3 Project card and detail view

- **Card:** cover image, title, tagline, stack badges, hover spotlight, animated gradient border. Featured projects span 2 columns.
- **Detail modal:** cover or demo media on top, description, highlights, stack badges with icons, and buttons for Live, GitHub, and Video. Include next/previous navigation and a keyboard-accessible close (Esc).
- Add category filter tabs (All / AI / Full-Stack / Frontend) with animated layout transitions.

---

## 7. Task breakdown (do in order; each is one PR)

### Phase 0: Audit and setup

- [ ] **T0.1** Audit the existing repo. Output `/docs/AUDIT.md` listing current content, dependencies, and what to keep.
- [ ] **T0.2** Scaffold Vite + TS + Tailwind + shadcn (or migrate the existing app).
- [ ] **T0.3** Extract all existing content into `/src/data/*.ts`.
- [ ] **T0.4** CI pipeline plus lint/format setup (ESLint, Prettier).

### Phase 1: Design foundation

- [ ] **T1.1** Write `DESIGN_SYSTEM.md`; set up Tailwind tokens, fonts, and the theme toggle.
- [ ] **T1.2** Layout shell: floating navbar, scroll progress, Lenis smooth scroll, footer.
- [ ] **T1.3** Motion utilities (`lib/motion.ts`) and the reduced-motion hook.

### Phase 2: Sections

- [ ] **T2.1** Hero with animated background and CTAs.
- [ ] **T2.2** About section.
- [ ] **T2.3** Skills section (marquee and categorized grid) with the GenAI and Agentic AI group highlighted.
- [ ] **T2.4** Projects bento grid, filter tabs, and detail modal, driven entirely by `projects.ts`.
- [ ] **T2.5** Experience timeline.
- [ ] **T2.6** Contact form with validation and toast feedback.
- [ ] **T2.7** Polish: custom cursor, hover effects, page-load animation.

### Phase 3: Quality and launch

- [ ] **T3.1** Performance pass (Lighthouse), image optimization, code-splitting, lazy heavy effects.
- [ ] **T3.2** Accessibility pass (axe, keyboard, contrast, reduced motion).
- [ ] **T3.3** SEO: meta tags, Open Graph image, sitemap, JSON-LD `Person` schema.
- [ ] **T3.4** Deploy to Vercel/Netlify with a custom domain.
- [ ] **T3.5** README with screenshots and setup instructions.

---

## 8. Quality bars

| Area                | Target                                                              |
| ------------------- | ------------------------------------------------------------------- |
| Lighthouse (mobile) | Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95 |
| LCP                 | < 2.5 s                                                             |
| CLS                 | < 0.1                                                               |
| Initial JS bundle   | Keep lean; lazy-load modals, 3D, and heavy effects                  |
| Animation           | 60 fps; no jank on a mid-range phone                                |
| Responsive          | 360px to 1920px+, mobile-first                                      |
| Type safety         | `strict` TypeScript                                                 |

---

## 9. Commands

```bash
npm install
npm run dev          # local dev
npm run lint
npm run typecheck
npm run test
npm run build
npm run preview
```

---

## 10. Definition of Done (per task)

- [ ] Acceptance criteria for the task are met.
- [ ] `lint`, `typecheck`, `test`, and `build` all pass (with real output shown).
- [ ] Works on mobile and desktop widths.
- [ ] `prefers-reduced-motion` respected for any new animation.
- [ ] No new `console.log`, dead code, or unused dependencies.
- [ ] No secrets committed.
- [ ] `/docs/PROGRESS.md` updated; ADR added if a decision was made.

---

## 11. Never do

- Never build backend, API, or AI code in this repo.
- Never fabricate my skills, experience, metrics, or testimonials.
- Never commit API keys or `.env`.
- Never add a heavy dependency without justification, since bundle size matters.
- Never animate layout-affecting properties (width, height, top, left) in hot paths.
- Never rewrite working files unrelated to the current task.
- Never mark a task done without running the checks.

---

## 12. First instruction to the agent

> Start with **T0.1**. Audit the existing repository and write `/docs/AUDIT.md`. Do not modify any code yet. Then propose a plan for T0.2 and wait for my approval.
