import React from "react";
import { educationList, experienceList } from "@/data/experience";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 relative z-10 border-t border-white/[0.06]">
      <div className="container max-w-4xl mx-auto space-y-12">
        {/* Section Label */}
        <div className="space-y-2">
          <p className="text-xs font-mono uppercase tracking-wider text-indigo-400">
            04 / Trajectory
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] text-white tracking-tight">
            Experience & Education
          </h2>
          <p className="text-zinc-400 text-sm max-w-lg">
            Engineering background, project milestones, and academic foundation in Computer Science.
          </p>
        </div>

        {/* Clean Engineering Timeline */}
        <div className="relative border-l border-white/[0.08] ml-2 sm:ml-4 space-y-10">
          {/* Experience */}
          {experienceList.map((item, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-8 space-y-2">
              {/* Dot */}
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-600 border-2 border-[#090a0f]" />

              <div className="dark-panel p-5 sm:p-6 rounded-xl border border-white/[0.08] space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h3 className="text-base font-semibold text-white font-['Space_Grotesk']">
                      {item.role}
                    </h3>
                    <p className="text-xs font-medium text-indigo-300">{item.organization}</p>
                  </div>
                  <span className="text-xs font-mono text-zinc-500">{item.period}</span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {item.description}
                </p>

                <ul className="space-y-1 pt-1">
                  {item.highlights.map((point, pIdx) => (
                    <li key={pIdx} className="text-xs text-zinc-400 flex items-start gap-2">
                      <span className="text-zinc-500 mt-0.5">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.technologies.map((tech) => (
                    <span key={tech} className="badge-tech">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Education */}
          {educationList.map((edu, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-8 space-y-2">
              {/* Dot */}
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-indigo-500 border-2 border-[#090a0f]" />

              <div className="dark-panel p-5 sm:p-6 rounded-xl border border-white/[0.08] space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h3 className="text-base font-semibold text-white font-['Space_Grotesk']">
                      {edu.degree}
                    </h3>
                    <p className="text-xs font-medium text-indigo-300">{edu.institution}</p>
                  </div>
                  <span className="text-xs font-mono text-zinc-500">{edu.period}</span>
                </div>

                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <span>{edu.location}</span>
                  {edu.status && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] text-zinc-300 border border-white/[0.08]">
                      {edu.status}
                    </span>
                  )}
                </div>

                <div className="space-y-1.5 pt-1">
                  <p className="text-xs font-mono uppercase text-zinc-500">Key Coursework:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.coursework.map((course) => (
                      <span key={course} className="badge-tech">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
