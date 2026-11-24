import React, { useEffect } from "react";
import { X, ArrowUpRight, Github, ChevronLeft, ChevronRight, Check } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  isOpen,
  onClose,
  onNext,
  onPrev,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !project) return null;

  const hasLiveLink = project.links.live && !project.links.live.startsWith("TODO");
  const hasGithubLink = project.links.github && !project.links.github.startsWith("TODO");

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Dark backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Box */}
      <div className="relative w-full max-w-2xl bg-[#0e1017] border border-white/[0.12] rounded-2xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#0b0d13]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
              Project Specification
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={onPrev}
              aria-label="Previous Project"
              className="p-1 rounded-md text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={onNext}
              aria-label="Next Project"
              className="p-1 rounded-md text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors"
            >
              <ChevronRight size={16} />
            </button>
            <button
              onClick={onClose}
              aria-label="Close"
              className="p-1 rounded-md text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-colors ml-2"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Cover Media */}
          <div className="aspect-[16/9] w-full rounded-lg overflow-hidden bg-black/40 border border-white/[0.08]">
            <img
              src={project.media.cover}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Title & Tagline */}
          <div className="space-y-1">
            <h3 id="modal-title" className="text-xl sm:text-2xl font-bold font-['Space_Grotesk'] text-white">
              {project.title}
            </h3>
            <p className="text-zinc-400 text-sm">{project.tagline}</p>
          </div>

          {/* Description */}
          <p className="text-zinc-300 text-sm leading-relaxed">{project.description}</p>

          {/* Key Engineering Highlights */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
              Key Technical Implementations
            </h4>
            <div className="space-y-2">
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <Check size={14} className="text-indigo-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
              Stack & Libraries
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="badge-tech">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="px-6 py-4 border-t border-white/[0.08] bg-[#0b0d13] flex items-center justify-end gap-3">
          {hasGithubLink && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-xs flex items-center gap-1.5"
            >
              <Github size={14} />
              <span>GitHub Code</span>
            </a>
          )}

          {hasLiveLink && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs flex items-center gap-1.5"
            >
              <span>Live Deployment</span>
              <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
