import React, { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { projects, Project, ProjectCategory } from "@/data/projects";
import { ProjectDetailModal } from "./ProjectDetailModal";

const CATEGORIES: { id: ProjectCategory; label: string }[] = [
  { id: "all", label: "All Projects" },
  { id: "ai", label: "GenAI & Agents" },
  { id: "fullstack", label: "Full-Stack" },
];

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleNext = () => {
    if (!selectedProject) return;
    const currentIndex = projects.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % projects.length;
    setSelectedProject(projects[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedProject) return;
    const currentIndex = projects.findIndex((p) => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setSelectedProject(projects[prevIndex]);
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 relative z-10 border-t border-white/[0.06]">
      <div className="container max-w-4xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-2">
            <p className="text-xs font-mono uppercase tracking-wider text-indigo-400">
              03 / Selected Works
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="text-zinc-400 text-sm max-w-lg">
              Applications featuring multi-agent RAG pipelines, SaaS architectures, and full-stack systems.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 rounded-lg bg-white/[0.04] border border-white/[0.08] w-fit">
            {CATEGORIES.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  activeCategory === tab.id
                    ? "bg-white/[0.1] text-white"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => {
            const isFeatured = project.featured;
            const hasLive = project.links.live && !project.links.live.startsWith("TODO");
            const hasGithub = project.links.github && !project.links.github.startsWith("TODO");

            return (
              <div
                key={project.id}
                onClick={() => openModal(project)}
                className={`dark-panel dark-panel-hover rounded-xl overflow-hidden cursor-pointer flex flex-col justify-between group ${
                  isFeatured ? "md:col-span-2" : "col-span-1"
                }`}
              >
                <div>
                  {/* Screenshot Bezel */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-950 border-b border-white/[0.06]">
                    <img
                      src={project.media.cover}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-300"
                    />
                    {project.category === "ai" && (
                      <span className="absolute top-3 left-3 text-[10px] font-mono px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-indigo-300 border border-indigo-500/30">
                        AI Agentic
                      </span>
                    )}
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-bold font-['Space_Grotesk'] text-white group-hover:text-indigo-300 transition-colors">
                        {project.title}
                      </h3>
                      <ArrowUpRight
                        size={16}
                        className="text-zinc-500 group-hover:text-white transition-colors shrink-0 mt-1"
                      />
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      {project.tagline}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.stack.slice(0, 5).map((tech) => (
                        <span key={tech} className="badge-tech">
                          {tech}
                        </span>
                      ))}
                      {project.stack.length > 5 && (
                        <span className="text-[10px] font-mono text-zinc-500 self-center">
                          +{project.stack.length - 5}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-6 py-3.5 border-t border-white/[0.05] bg-white/[0.01] flex items-center justify-between text-xs text-zinc-400">
                  <span className="group-hover:text-zinc-200 transition-colors">
                    View technical breakdown →
                  </span>

                  <div className="flex items-center gap-2">
                    {hasGithub && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Repository"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1 text-zinc-400 hover:text-white transition-colors"
                      >
                        <Github size={15} />
                      </a>
                    )}
                    {hasLive && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live Site"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1 text-zinc-400 hover:text-white transition-colors"
                      >
                        <ArrowUpRight size={15} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
};
