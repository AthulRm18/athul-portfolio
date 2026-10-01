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
        className="group relative flex flex-col rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-[#0a0a0a] border border-white/[0.06] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-white/[0.12] hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(0,0,0,0.4)]"
      >
        {/* ── Visual area ──────────────────────────────────────── */}
        <div className="relative aspect-[4/3] overflow-hidden bg-[#060606]">

          {/* Project animation — orange-tinted */}
          <ProjectMedia project={project} pauseUntilHover />

          {/* 3D specular white glow — top-left orb like the reference */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 55% 45% at 28% 22%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 40%, transparent 70%)",
            }}
          />

          {/* Bottom fade into card bg */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, transparent 55%, rgba(10,10,10,0.95) 100%)",
            }}
          />
        </div>

        {/* ── Content ──────────────────────────────────────────── */}
        <div className="flex flex-col gap-2 px-5 md:px-7 pt-4 pb-6 md:pt-5 md:pb-8">
          <h3 className="text-lg md:text-xl font-semibold tracking-[-0.02em] text-white/95 leading-tight group-hover:text-white transition-colors duration-300">
            {project.title}
          </h3>

          <p className="text-[12px] md:text-[13px] text-white/35 leading-relaxed line-clamp-2">
            {project.hook}
          </p>

          {/* CTA */}
          <div className="mt-3">
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-[11px] font-medium tracking-wide transition-all duration-400"
              style={{
                background: "rgba(232,168,124,0.08)",
                border: "1px solid rgba(232,168,124,0.15)",
                color: "rgba(232,168,124,0.7)",
              }}
            >
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
