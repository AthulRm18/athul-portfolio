"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, useInView, type Variants } from "framer-motion";
import Link from "next/link";
import FolderFloat from "@/components/FolderFloat";
import { projects, type Project } from "@/lib/data/projects";
import { ProjectMedia } from "@/components/work/ProjectMedia";

/* ─── card that stretches out from the folder ───────────────── */

const slideOut: Variants = {
  folded: {
    opacity: 0,
    y: -60,
    scaleY: 0.7,
    scaleX: 0.85,
    filter: "blur(6px)",
    transformOrigin: "top center",
  },
  unfolded: (i: number) => ({
    opacity: 1,
    y: 0,
    scaleY: 1,
    scaleX: 1,
    filter: "blur(0px)",
    transformOrigin: "top center",
    transition: {
      duration: 0.8,
      delay: 0.4 + i * 0.15,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

function FolderCard({
  project,
  index,
  revealed,
}: {
  project: Project;
  index: number;
  revealed: boolean;
}) {
  return (
    <motion.article
      custom={index}
      variants={slideOut}
      initial="folded"
      animate={revealed ? "unfolded" : "folded"}
    >
      <Link
        href={`/work/${project.slug}`}
        className="group relative block rounded-2xl md:rounded-3xl overflow-hidden border border-white/[0.06] bg-[#0a0a0a] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-white/[0.14] hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
      >
        {/* ── Layout: side-by-side on desktop, stacked on mobile ── */}
        <div className="flex flex-col md:flex-row md:items-stretch min-h-0 md:min-h-[240px]">
          {/* Visual half */}
          <div className="relative w-full md:w-[45%] aspect-[16/10] md:aspect-auto overflow-hidden bg-[#060606] shrink-0">
            <ProjectMedia project={project} pauseUntilHover />
            {/* Gradient blend into content area */}
            <div
              className="absolute inset-0 pointer-events-none hidden md:block"
              style={{
                background:
                  "linear-gradient(to right, transparent 60%, #0a0a0a 100%)",
              }}
            />
            <div
              className="absolute inset-0 pointer-events-none md:hidden"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 50%, #0a0a0a 100%)",
              }}
            />
          </div>

          {/* Content half */}
          <div className="relative flex flex-col justify-center gap-3 p-6 md:p-10 md:w-[55%]">
            {/* Top label row */}
            <div className="flex items-center gap-3 mb-1">
              <span className="text-[10px] font-mono tracking-[0.18em] uppercase text-white/30">
                {project.index}
              </span>
              <span className="w-px h-3 bg-white/10" />
              <span className="text-[10px] font-mono tracking-[0.12em] uppercase text-white/25">
                {project.cardLabel}
              </span>
            </div>

            <h3 className="text-2xl md:text-[1.75rem] font-semibold tracking-[-0.03em] text-white/95 leading-tight group-hover:text-white transition-colors duration-300">
              {project.title}
            </h3>

            <p className="text-[14px] text-white/40 leading-relaxed max-w-md">
              {project.hook}
            </p>

            {/* Metrics */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="flex gap-6 mt-3 pt-4 border-t border-white/[0.06]">
                {project.metrics.map((m, mi) => (
                  <div key={mi} className="flex flex-col gap-0.5">
                    <span className="text-base font-semibold text-white/75 font-mono">
                      {m.value}
                    </span>
                    <span className="text-[10px] text-white/25 leading-snug max-w-[140px]">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Read more pill */}
            <div className="mt-4 flex items-center">
              <div className="flex items-center rounded-full bg-white/[0.04] border border-white/[0.06] text-white/70 h-[32px] overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] max-w-[32px] group-hover:max-w-[150px] group-hover:bg-white/[0.08]">
                <div className="flex-shrink-0 flex items-center justify-center w-[32px] h-[32px]">
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </div>
                <span className="whitespace-nowrap pr-4 text-[10px] font-semibold tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                  Read more
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

/* ─── main work section ─────────────────────────────────────── */

export function WorkSection() {
  const router = useRouter();
  const sectionRef = useRef<HTMLElement>(null);
  const folderRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.12 });
  const [folderOpened, setFolderOpened] = useState(false);

  // Open folder when section scrolls into view
  useEffect(() => {
    if (isInView) {
      // Small delay so the folder animates in first, then opens
      const t = setTimeout(() => setFolderOpened(true), 600);
      return () => clearTimeout(t);
    }
  }, [isInView]);

  const folderItems = projects.map((p) => ({
    label: p.title,
    value: p.slug,
  }));

  const handleSelect = useCallback(
    (value: string) => {
      router.push(`/work/${value}`);
    },
    [router]
  );

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative scroll-mt-0 pt-20 pb-28 md:pt-28 md:pb-36"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        {/* ── Heading ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-baseline gap-4 justify-center mb-10 md:mb-14"
        >
          <h2 className="text-4xl md:text-[3.5rem] font-bold tracking-tight text-white">
            Recent projects
          </h2>
          <span className="text-sm font-mono text-white/25 tabular-nums">
            ({String(projects.length).padStart(2, "0")})
          </span>
        </motion.div>

        {/* ── Folder ──────────────────────────────────── */}
        <motion.div
          ref={folderRef}
          initial={{ opacity: 0, y: 30, scale: 0.88 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.15,
          }}
          className="flex justify-center mb-6"
        >
          <FolderFloat
            items={folderItems}
            label="Projects"
            sublabel={`${projects.length} projects`}
            trigger="hover"
            defaultOpen={folderOpened}
            closeOnSelect={false}
            physics
            drift={0.3}
            onSelect={(value: string) => handleSelect(value)}
            folderColor="#141414"
            frontColor="#1c1c1c"
            paperColor="#e8a87c"
            itemColor="#141414"
            itemTextColor="#d4d4d4"
            labelColor="#e8a87c"
            width={360}
            height={240}
            radius={22}
            spread={380}
            lift={40}
            tilt={4}
            flapAngle={42}
            restAngle={12}
            openDuration={700}
            stagger={65}
            bounce={0.28}
          />
        </motion.div>

        {/* ── Cards cascade out from the folder ───────── */}
        <div className="flex flex-col gap-5 md:gap-6 mt-4">
          {projects.map((project, i) => (
            <FolderCard
              key={project.id}
              project={project}
              index={i}
              revealed={folderOpened}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
