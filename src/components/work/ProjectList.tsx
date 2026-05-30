"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Project } from "@/lib/data/projects";
import { transition } from "@/lib/motion";

interface ProjectListProps {
  projects: Project[];
}

export function ProjectList({ projects }: ProjectListProps) {
  return (
    <ul className="border-t border-border">
      {projects.map((project, index) => (
        <motion.li
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ ...transition.medium, delay: index * 0.06 }}
          className="border-b border-border"
        >
          <Link
            href={`/work/${project.slug}`}
            className="group grid grid-cols-[auto_1fr_auto] md:grid-cols-[48px_1fr_auto] gap-6 md:gap-10 items-start py-10 md:py-14 -mx-2 px-2 md:-mx-4 md:px-4 rounded-lg hover:bg-white/[0.02] transition-colors duration-500"
          >
            <span className="text-sm text-dim font-mono pt-1.5 tabular-nums">
              {project.index}
            </span>

            <div className="min-w-0">
              <h3 className="text-xl md:text-2xl lg:text-[1.75rem] font-semibold tracking-[-0.02em] text-fg group-hover:text-accent transition-colors duration-400">
                {project.title}
              </h3>
              <p className="mt-2 text-sm md:text-base text-muted leading-relaxed max-w-2xl">
                {project.tagline}
              </p>
              <p className="mt-4 text-xs text-dim tracking-wide">
                {project.categories.join(" · ")}
              </p>
            </div>

            <motion.span
              className="text-lg text-dim pt-1.5 group-hover:text-fg transition-colors duration-400"
              initial={false}
              whileHover={{ x: 4 }}
              transition={transition.fast}
              aria-hidden
            >
              →
            </motion.span>
          </Link>
        </motion.li>
      ))}
    </ul>
  );
}
