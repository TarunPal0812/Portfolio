import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { coreStack } from "@/data/skills";

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6"
    >
      <div className="container max-w-4xl mx-auto space-y-8">
        {/* Status indicator */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-zinc-400"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>{profile.status}</span>
        </motion.div>

        {/* Main Title & Role */}
        <div className="space-y-3">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-bold font-['Space_Grotesk'] text-white tracking-tight"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="text-xl sm:text-2xl font-medium text-zinc-300 font-['Space_Grotesk']"
          >
            {profile.role}
          </motion.p>
        </div>

        {/* Grounded Bio Summary */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.3 }}
          className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl"
        >
          {profile.shortBio}
        </motion.p>

        {/* Core Tech Stack Row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.38 }}
          className="space-y-2 pt-2"
        >
          <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
            Primary Technologies:
          </p>
          <div className="flex flex-wrap gap-2">
            {coreStack.map((tech) => (
              <span key={tech} className="badge-tech">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.45 }}
          className="flex flex-wrap items-center gap-3.5 pt-4"
        >
          <a href="#projects" className="btn-primary flex items-center gap-1.5 text-sm">
            <span>View Projects</span>
            <ArrowDown size={14} />
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex items-center gap-1.5 text-sm"
          >
            <span>Resume</span>
            <ArrowUpRight size={14} className="text-zinc-400" />
          </a>

          <a
            href="https://github.com/TarunPal0812"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex items-center gap-1.5 text-sm"
          >
            <Github size={15} />
            <span>GitHub</span>
          </a>

          <a
            href="#contact"
            className="btn-secondary flex items-center gap-1.5 text-sm text-zinc-300"
          >
            <Mail size={15} />
            <span>Contact</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
