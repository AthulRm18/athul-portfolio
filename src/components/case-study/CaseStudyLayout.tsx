"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/data/projects";
import { CASE_STUDY_SECTIONS } from "@/lib/data/projects";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { ScrollSection } from "@/components/case-study/ScrollSection";
import { Reveal } from "@/components/case-study/Reveal";
import { CaseStudyAmbient } from "@/components/case-study/CaseStudyAmbient";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { ease, stagger } from "@/lib/motion";

interface CaseStudyLayoutProps {
  project: Project;
}

const SECTION_SLUGS: Record<(typeof CASE_STUDY_SECTIONS)[number], string> = {
  Overview: "overview",
  Highlights: "highlights",
  Context: "context",
  Architecture: "architecture",
  Results: "results",
};

export function CaseStudyLayout({ project }: CaseStudyLayoutProps) {
  const sectionIds = [
    ...CASE_STUDY_SECTIONS.map((s) => SECTION_SLUGS[s]),
    "limitations",
  ];
  const { activeId, scrollTo } = useScrollSpy(sectionIds);
  const s = project.sections;

  return (
    <div className="pt-28 pb-24 relative min-h-screen">
      <CaseStudyAmbient category={project.categoryType} />
      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        <Link
          href="/#work"
          className="inline-block text-sm font-mono text-dim link-underline hover:text-fg transition-colors mb-12"
        >
          ← Projects
        </Link>

        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(180px,220px)] lg:gap-14 xl:gap-20">
          <div>
            {/* ── Hero header ────────────────────────────────── */}
            <motion.header
              variants={stagger.container}
              initial="hidden"
              animate="show"
              className="relative mb-6 pb-10 border-b border-border overflow-hidden"
            >

              {/* Meta row — sits above ambient (z-10) */}
              <motion.div
                variants={stagger.item}
                className="relative z-10 flex flex-wrap items-center gap-x-4 gap-y-2 mb-8 text-sm text-dim"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.14em]">
                  {project.index} — {project.title}
                </span>
                {project.readTime && (
                  <span className="text-xs font-mono">{project.readTime} read</span>
                )}
                {project.github && (
                  <ExternalLink
                    href={project.github}
                    className="ml-auto normal-case tracking-normal"
                  >
                    GitHub
                  </ExternalLink>
                )}
              </motion.div>

              {/* Title — z-10 so it layers above ambient */}
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 18, filter: "blur(10px)" },
                  show: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: { duration: 0.8, ease: ease.reveal, delay: 0.05 },
                  },
                }}
                className="relative z-10 text-3xl md:text-[2.25rem] font-semibold tracking-[-0.03em] leading-[1.12] text-balance max-w-3xl"
              >
                {project.tagline}
              </motion.h1>

              {project.event && (
                <motion.p
                  variants={stagger.item}
                  className="relative z-10 mt-4 text-sm text-dim"
                >
                  {project.event}
                </motion.p>
              )}
            </motion.header>

            {/* Mobile section nav */}
            <nav
              className="lg:hidden flex gap-2 overflow-x-auto pb-6 mb-2 scrollbar-none"
              aria-label="Jump to section"
            >
              {[...CASE_STUDY_SECTIONS, "Limitations" as const].map((label) => {
                const id =
                  label === "Limitations"
                    ? "limitations"
                    : SECTION_SLUGS[label as keyof typeof SECTION_SLUGS];
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => scrollTo(id)}
                    className={`shrink-0 font-mono text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-full border transition-colors ${
                      activeId === id
                        ? "border-border-strong text-fg"
                        : "border-border text-dim"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </nav>

            {/* ── Content sections ───────────────────────────── */}
            <ScrollSection id="overview" label="Overview">
              <p className="text-muted leading-relaxed text-base md:text-lg max-w-2xl">
                {s.overview}
              </p>
              {project.metrics && (
                <div className="mt-10 flex flex-wrap gap-x-12 gap-y-6">
                  {project.metrics.map((m) => (
                    <div key={m.label}>
                      <p className="text-2xl md:text-3xl font-semibold tracking-tight">
                        {m.value}
                      </p>
                      <p className="text-xs text-dim mt-1">{m.label}</p>
                    </div>
                  ))}
                </div>
              )}
            </ScrollSection>

            <ScrollSection id="highlights" label="Highlights">
              <ul className="space-y-5 max-w-2xl">
                {s.highlights.map((item) => (
                  <li
                    key={item}
                    className="text-muted leading-relaxed pl-4 border-l border-border"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollSection>

            <ScrollSection id="context" label="Context">
              <div className="space-y-10 max-w-2xl">
                {(
                  [
                    ["Idea", s.idea],
                    ["Problem", s.problem],
                    ["Approach", s.thoughtProcess],
                  ] as const
                ).map(([heading, text], i) => (
                  <div key={heading}>
                    <Reveal delay={i * 0.05} variant="heading">
                      <h3 className="text-sm font-medium text-fg mb-2">{heading}</h3>
                    </Reveal>
                    <p className="text-muted leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </ScrollSection>

            <ScrollSection id="architecture" label="Architecture">
              <ul className="space-y-4 max-w-2xl mb-8">
                {s.architecture.map((item, i) => (
                  <li
                    key={item}
                    className="flex gap-4 text-sm text-muted leading-relaxed"
                  >
                    <span className="font-mono text-xs text-dim w-6 shrink-0 pt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-dim">{project.categories.join(" · ")}</p>
            </ScrollSection>

            <ScrollSection id="results" label="Results">
              <p className="text-muted leading-relaxed text-base md:text-lg max-w-2xl">
                {s.results}
              </p>
            </ScrollSection>

            <ScrollSection id="limitations" label="Limitations">
              <p className="text-limitations-gradient text-base md:text-lg leading-relaxed max-w-2xl">
                {s.limitations}
              </p>
            </ScrollSection>
          </div>

          {/* ── Sidebar: contents nav only (no media box) ──── */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <nav className="space-y-1" aria-label="Jump to section">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-dim mb-4">
                  Contents
                </p>
                {[...CASE_STUDY_SECTIONS, "Limitations" as const].map((label) => {
                  const id =
                    label === "Limitations"
                      ? "limitations"
                      : SECTION_SLUGS[label as keyof typeof SECTION_SLUGS];
                  return (
                    <button
                      key={id}
                      type="button"
                      onClick={() => scrollTo(id)}
                      className={`block w-full text-left text-sm py-1.5 transition-colors duration-300 ${
                        activeId === id ? "text-fg" : "text-dim hover:text-muted"
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
