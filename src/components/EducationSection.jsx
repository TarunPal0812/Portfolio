"use client";

import { motion as Motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-violet-600">Education</span>
        </h2>

        <div className="space-y-8">
          <Motion.div
            className="p-6 rounded-2xl border-l-4 border-violet-500 bg-white/90 dark:bg-card/80 backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.05)] dark:shadow-[0_0_15px_rgba(255,255,255,0.03)] hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] transition-all"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-2">
              <GraduationCap className="w-6 h-6 text-violet-600 dark:text-violet-400" />
              <h3 className="text-xl font-semibold text-violet-700 dark:text-violet-400">
                B.Tech in Computer Science
              </h3>
            </div>
            <p className="text-muted-foreground text-sm mb-1">
              SVIST, Kolkata
            </p>
            <p className="text-muted-foreground text-sm mb-1">
              2022 – 2026
            </p>
            <p className="text-muted-foreground dark:text-gray-300">
              Coursework: Data Structures & Algorithms, DBMS, Operating Systems,
              Computer Networks, Web Development
            </p>
          </Motion.div>

        </div>
      </div>
    </section>
  );
};
