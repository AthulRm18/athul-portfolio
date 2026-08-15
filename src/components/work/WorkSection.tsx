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
        className="bg-[#050505] rounded-t-[3rem] md:rounded-t-[4rem] border-t border-white/[0.05] pt-24 pb-32 md:pt-32 md:pb-40 w-full mt-12 overflow-hidden relative z-10"
      >
        {/* High-performance ambient fog/cloud layer (Zero-lag: uses GPU transform and radial gradients instead of blur) */}
        <div className="absolute top-0 left-0 right-0 h-[500px] pointer-events-none z-0 overflow-hidden" aria-hidden>
          <div 
            className="absolute top-[-150px] left-[-20%] w-[80%] h-[500px] will-change-transform"
            style={{ 
              background: "radial-gradient(ellipse, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 70%)",
              animation: "driftRight 20s ease-in-out infinite alternate" 
            }}
          />
          <div 
            className="absolute top-[-100px] right-[-10%] w-[70%] h-[400px] will-change-transform"
            style={{ 
              background: "radial-gradient(ellipse, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0) 70%)",
              animation: "driftLeft 25s ease-in-out infinite alternate" 
            }}
          />
          <div 
            className="absolute top-[0px] left-[20%] w-[60%] h-[300px] will-change-transform"
            style={{ 
              background: "radial-gradient(ellipse, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 70%)",
              animation: "driftUp 18s ease-in-out infinite alternate" 
            }}
          />
        </div>
        <style>{`
          @keyframes driftRight {
            0% { transform: translate3d(0, 0, 0) scale(1); }
            100% { transform: translate3d(15%, 5%, 0) scale(1.1); }
          }
          @keyframes driftLeft {
            0% { transform: translate3d(0, 0, 0) scale(1); }
            100% { transform: translate3d(-15%, 8%, 0) scale(1.15); }
          }
          @keyframes driftUp {
            0% { transform: translate3d(0, 0, 0) scale(1); }
            100% { transform: translate3d(5%, -10%, 0) scale(1.05); }
          }
        `}</style>

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
