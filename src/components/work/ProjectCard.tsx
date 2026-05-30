"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import type { Project } from "@/lib/data/projects";
import { ProjectMedia } from "@/components/work/ProjectMedia";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      <Link
        href={`/work/${project.slug}`}
        className="group relative block rounded-[2rem] overflow-hidden bg-[#080808] border border-white/[0.04] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-white/[0.12] hover:scale-[1.015] hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
      >
        {/* ── Top bar ─────────────────────────────────────────── */}
        <div className="relative z-10 flex items-center justify-between px-10 pt-8 pb-2">
          <span className="text-[11px] font-mono tracking-[0.2em] text-white/30 uppercase">
            {project.index}&nbsp;&nbsp;|&nbsp;&nbsp;{project.cardLabel}
          </span>
          <span
            className="text-white/20 text-sm transition-all duration-500 group-hover:text-white/70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden
          >
            ↗
          </span>
        </div>

        {/* ── Unified canvas: visual on left, text perfectly separated on right ── */}
        <div className="relative flex items-center bg-[#080808]" style={{ height: "340px" }}>

          {/* Animation strictly left side (50% width) */}
          <div className="absolute top-0 bottom-0 left-0 w-[50%] overflow-hidden">
            <ProjectMedia project={project} pauseUntilHover />
            
            {/* Soft gradient blend just at the inner edge */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "linear-gradient(to right, rgba(8,8,8,0) 70%, rgba(8,8,8,1) 100%)",
              }}
            />
          </div>

          {/* Text perfectly on the right side on solid black (50% width) */}
          <div className="relative z-10 ml-auto w-[50%] flex flex-col justify-center px-12 h-full bg-[#080808]">
            <h3 className="text-2xl md:text-[2.2rem] font-semibold tracking-[-0.03em] text-white/95 leading-snug mb-4">
              {project.title}
            </h3>
            <p className="text-[15px] text-white/50 leading-relaxed mb-10 max-w-[320px]">
              {project.hook}
            </p>
            <span className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.15em] uppercase text-white/30 group-hover:text-white/90 transition-colors duration-400">
              Full breakdown
              <span className="transition-transform duration-400 group-hover:translate-x-1" aria-hidden>→</span>
            </span>
          </div>

        </div>
      </Link>
    </motion.article>
  );
}
