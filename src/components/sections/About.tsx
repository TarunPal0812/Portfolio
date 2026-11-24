import React from "react";
import { Terminal, Cpu, Database, GraduationCap } from "lucide-react";
import { profile } from "@/data/profile";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 relative z-10">
      <div className="container max-w-4xl mx-auto space-y-12">
        {/* Section Label */}
        <div className="space-y-2">
          <p className="text-xs font-mono uppercase tracking-wider text-indigo-400">
            01 / Background
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] text-white tracking-tight">
            Engineering Background
          </h2>
        </div>

        {/* Narrative & Focus Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bio text (2 cols) */}
          <div className="md:col-span-2 space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed dark-panel p-6 sm:p-7 rounded-xl border border-white/[0.08]">
            {profile.aboutText.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}

            <div className="pt-3 border-t border-white/[0.06] flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-1.5 text-zinc-300">
                <GraduationCap size={15} className="text-indigo-400" />
                B.Tech in Computer Science (2022–2026)
              </span>
              <span>•</span>
              <span>SVIST Kolkata</span>
            </div>
          </div>

          {/* Quick Pillars (1 col) */}
          <div className="flex flex-col gap-4">
            <div className="dark-panel p-5 rounded-xl border border-white/[0.08] space-y-2">
              <div className="flex items-center gap-2 text-indigo-400">
                <Cpu size={18} />
                <h3 className="text-sm font-semibold text-white font-['Space_Grotesk']">
                  AI Systems & RAG
                </h3>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Stateful agent orchestration via LangGraph, vector search, chunking strategies, and
                tool-calling workflows.
              </p>
            </div>

            <div className="dark-panel p-5 rounded-xl border border-white/[0.08] space-y-2">
              <div className="flex items-center gap-2 text-zinc-300">
                <Terminal size={18} className="text-indigo-400" />
                <h3 className="text-sm font-semibold text-white font-['Space_Grotesk']">
                  Full-Stack Engineering
                </h3>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                End-to-end web apps with React, TypeScript, FastAPI, and Node.js with secure
                authentication and clean architecture.
              </p>
            </div>

            <div className="dark-panel p-5 rounded-xl border border-white/[0.08] space-y-2">
              <div className="flex items-center gap-2 text-zinc-300">
                <Database size={18} className="text-indigo-400" />
                <h3 className="text-sm font-semibold text-white font-['Space_Grotesk']">
                  Data Modeling
                </h3>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Relational schema design with PostgreSQL/MySQL and document storage with MongoDB.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
