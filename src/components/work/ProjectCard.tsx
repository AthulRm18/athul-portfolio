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
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
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
        className="group relative flex flex-col rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-[#0c0c0c] border border-white/[0.06] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-white/[0.14] hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(0,0,0,0.35)]"
      >
        {/* ── Visual area — clean peach gradient with dark inset screen ── */}
        <div className="relative m-3 md:m-4 rounded-[1rem] md:rounded-[1.25rem] overflow-hidden aspect-[4/3]">
          {/* Clean light peach/cream gradient background */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(160deg, #fce8d5 0%, #f8d4b4 40%, #f2c4a0 75%, #edb88a 100%)",
            }}
          />

          {/* Dark inset screen for project animation */}
          <div
            className="absolute rounded-xl md:rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.25)]"
            style={{
              top: "12%",
              left: "10%",
              right: "10%",
              bottom: "12%",
            }}
          >
            {/* Dark background for the animation */}
            <div className="absolute inset-0 bg-[#0a0a0a]" />
            {/* Project animation plays inside the dark screen */}
            <ProjectMedia project={project} pauseUntilHover />
            {/* Subtle glass reflection */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 50%)",
              }}
            />
          </div>

          {/* Soft ambient light glow on the peach surface */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 30% 25%, rgba(255,255,255,0.35) 0%, transparent 55%)",
            }}
          />

          {/* Category label */}
          <div className="absolute top-3 left-3 md:top-4 md:left-4 z-10">
            <span className="inline-block text-[9px] md:text-[10px] font-mono tracking-[0.15em] uppercase text-[#6b4a2f] bg-white/40 backdrop-blur-sm rounded-full px-2.5 py-1 border border-white/20">
              {project.cardLabel}
            </span>
          </div>
        </div>

        {/* ── Content area ────────────────────────────────────── */}
        <div className="flex flex-col gap-2 px-5 md:px-7 pt-2 pb-5 md:pt-3 md:pb-7">
          <h3 className="text-lg md:text-xl font-semibold tracking-[-0.02em] text-white/95 leading-tight group-hover:text-white transition-colors duration-300">
            {project.title}
          </h3>

          <p className="text-[12px] md:text-[13px] text-white/35 leading-relaxed line-clamp-2">
            {project.hook}
          </p>

          {/* Read more button */}
          <div className="mt-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/[0.05] border border-white/[0.06] text-[10px] md:text-[11px] font-medium text-white/50 tracking-wide transition-all duration-400 group-hover:bg-white/[0.1] group-hover:text-white/80 group-hover:border-white/[0.12]">
              Read more
              <svg
                className="w-2.5 h-2.5 transition-transform duration-400 group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
