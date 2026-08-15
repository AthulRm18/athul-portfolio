"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data/projects";
import { ProjectCard } from "@/components/work/ProjectCard";
import { transition } from "@/lib/motion";

export function WorkSection() {
  return (
    <section id="work" className="relative scroll-mt-0">
      {/* 
        Apple-style "slide up" foggy white container.
        This provides a distinct section break from the black hero.
      */}
      <motion.div 
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="bg-[#050505] rounded-t-[3rem] md:rounded-t-[4rem] border-t border-white/[0.05] pt-24 pb-32 md:pt-32 md:pb-40 w-full mt-12 relative z-10"
      >

        <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
          
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

          {/* All cards uniform, single column, stacked */}
          <div className="flex flex-col gap-6 md:gap-8">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>

        </div>
      </motion.div>
    </section>
  );
}
