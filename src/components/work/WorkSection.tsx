"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data/projects";
import { ProjectCard } from "@/components/work/ProjectCard";

export function WorkSection() {
  return (
    <section id="work" className="relative scroll-mt-0 pt-24 pb-32 md:pt-32 md:pb-40">
      <div className="max-w-6xl mx-auto px-6 md:px-8">

        <motion.div
          initial={{ opacity: 0, y: 12, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 md:mb-20 flex items-baseline gap-4"
        >
          <h2 className="text-4xl md:text-[3.5rem] font-bold tracking-tight text-white">
            Recent projects
          </h2>
          <span className="text-sm font-mono text-white/40 tabular-nums">
            ({String(projects.length).padStart(2, "0")})
          </span>
        </motion.div>

        {/* 2-column grid on desktop, single column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
