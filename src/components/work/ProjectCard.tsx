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
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] },
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
        className="group relative flex flex-col overflow-hidden rounded-[1.25rem] bg-[#111] border border-white/[0.07] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-white/[0.14] hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(0,0,0,0.5)]"
      >
        {/* ── TOP: Full-bleed animation area ── */}
        <div className="relative h-52 w-full overflow-hidden bg-[#0a0a0a]">
          <ProjectMedia project={project} pauseUntilHover />

          {/* Vignette edges */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)",
            }}
          />
          {/* Fade into card bottom */}
          <div
            className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
            style={{ background: "linear-gradient(to bottom, transparent, #111)" }}
          />
        </div>

        {/* ── BOTTOM: Centered badge + text + button ── */}
        <div className="flex flex-col items-center gap-4 px-6 pt-2 pb-7 text-center">

          {/* Title */}
          <h3 className="text-lg md:text-xl font-semibold tracking-[-0.02em] text-white/95 leading-snug group-hover:text-white transition-colors duration-300">
            {project.title}
          </h3>

          {/* Hook */}
          <p className="text-[13px] text-white/35 leading-relaxed max-w-[280px]">
            {project.hook}
          </p>

          {/* CTA Button */}
          <button className="inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.05] px-5 py-2 text-[12px] font-medium text-white/60 transition-all duration-400 group-hover:bg-white/[0.1] group-hover:text-white/90 group-hover:border-white/[0.18]">
            Read more
            <svg
              className="w-3 h-3 transition-transform duration-400 group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </Link>
    </motion.article>
  );
}
