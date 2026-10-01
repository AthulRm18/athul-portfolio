"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import FolderFloat from "@/components/FolderFloat";
import { projects, type Project } from "@/lib/data/projects";

/**
 * A scroll-triggered FolderFloat that opens when the user scrolls to the
 * projects section. Each pill is a project — selecting one navigates to
 * its case study page.
 */
export function ProjectFolder() {
  const router = useRouter();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [hasScrolledIn, setHasScrolledIn] = useState(false);

  // Observe when the folder enters the viewport and mark it as "scrolled in"
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasScrolledIn(true);
          observer.disconnect(); // only trigger once
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Map projects to FolderFloat items
  const items = projects.map((p) => ({
    label: p.title,
    value: p.slug,
  }));

  const handleSelect = (value: string) => {
    router.push(`/work/${value}`);
  };

  return (
    <div ref={wrapperRef} className="flex flex-col items-center gap-8">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 12, filter: "blur(12px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="mb-6 md:mb-10 flex items-baseline gap-4"
      >
        <h2 className="text-4xl md:text-[3.5rem] font-bold tracking-tight text-white">
          Recent projects
        </h2>
        <span className="text-sm font-mono text-white/40 tabular-nums">
          ({String(projects.length).padStart(2, "0")})
        </span>
      </motion.div>

      {/* Folder */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.92 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        className="relative"
      >
        <FolderFloat
          items={items}
          label="Projects"
          sublabel={`${projects.length} ${projects.length === 1 ? "project" : "projects"}`}
          trigger="hover"
          defaultOpen={hasScrolledIn}
          closeOnSelect={false}
          physics
          drift={0.4}
          onSelect={(value: string) => handleSelect(value)}
          folderColor="#1a1a1a"
          frontColor="#2a2a2a"
          paperColor="#e8a87c"
          itemColor="#1c1c1c"
          itemTextColor="#fafafa"
          labelColor="#e8a87c"
          width={260}
          height={180}
          radius={18}
          spread={280}
          lift={30}
          tilt={6}
          flapAngle={38}
          restAngle={14}
          openDuration={600}
          stagger={55}
          bounce={0.35}
        />
      </motion.div>

      {/* Hint text */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-xs text-white/30 font-mono tracking-wide mt-2"
      >
        hover to open · click a project to explore
      </motion.p>
    </div>
  );
}
