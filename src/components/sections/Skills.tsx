import React from "react";
import { skillCategories } from "@/data/skills";

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 relative z-10 border-t border-white/[0.06]">
      <div className="container max-w-4xl mx-auto space-y-12">
        {/* Section Label */}
        <div className="space-y-2">
          <p className="text-xs font-mono uppercase tracking-wider text-indigo-400">
            02 / Capabilities
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] text-white tracking-tight">
            Technical Skills
          </h2>
          <p className="text-zinc-400 text-sm max-w-xl">
            Practical competencies grouped by domain, used across full-stack applications, APIs, and
            generative AI pipelines.
          </p>
        </div>

        {/* Categorized Technical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => {
            const isAi = category.id === "ai";

            return (
              <div
                key={category.id}
                className={`dark-panel p-6 rounded-xl border transition-all ${
                  isAi
                    ? "border-indigo-500/30 bg-gradient-to-b from-indigo-950/[0.15] to-[#0E1017]/80"
                    : "border-white/[0.08]"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base font-semibold text-white font-['Space_Grotesk']">
                    {category.title}
                  </h3>
                  {isAi && (
                    <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                      Primary Focus
                    </span>
                  )}
                </div>

                <p className="text-xs text-zinc-400 mb-4">{category.description}</p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={isAi ? "badge-tech badge-ai" : "badge-tech"}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
