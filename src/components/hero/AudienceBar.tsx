"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { AudienceId } from "@/lib/data/audience";
import { audiences } from "@/lib/data/audience";
import { transition, ease } from "@/lib/motion";

interface AudienceBarProps {
  active: AudienceId;
  onChange: (id: AudienceId) => void;
}

export function AudienceBar({ active, onChange }: AudienceBarProps) {
  return (
    <nav
      className="flex flex-wrap gap-x-4 gap-y-2 text-[11px] md:text-xs text-dim mb-8"
      aria-label="Audience"
    >
      {audiences.map((a) => {
        const isActive = a.id === active;
        return (
          <button
            key={a.id}
            type="button"
            onClick={() => onChange(a.id)}
            className={`relative pb-0.5 transition-colors duration-300 ${
              isActive ? "text-fg" : "hover:text-muted"
            }`}
          >
            {a.label}
            {isActive && (
              <motion.span
                layoutId="audience-underline"
                className="absolute left-0 right-0 -bottom-px h-px bg-fg"
                transition={{ duration: 0.45, ease: ease.outExpo }}
              />
            )}
          </button>
        );
      })}
    </nav>
  );
}

interface HeroHeadlineProps {
  variant: import("@/lib/data/audience").HeroVariant;
}

export function HeroHeadline({ variant }: HeroHeadlineProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.h1
        key={variant}
        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
        transition={{ duration: 0.55, ease: ease.outExpo }}
        className="text-[clamp(2rem,5.5vw,3.75rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-balance max-w-4xl"
      >
        {variant === "default" && (
          <>
            I build AI projects that actually{" "}
            <em className="font-serif italic text-accent">work.</em>
          </>
        )}
        {variant === "recruiters" && (
          <>
            B.Tech student with{" "}
            <em className="font-serif italic text-accent">serious</em> AI/ML
            projects.
          </>
        )}
        {variant === "engineers" && (
          <>
            I&apos;m <span className="code-inline">{"{highly_technical}"}</span>{" "}
            and while{" "}
            <span className="code-inline">(focus ≠ only_ml)</span> I know my way{" "}
            <span className="code-inline">/around</span> &amp; can speak{" "}
            <span className="code-inline">&quot;fluently&quot;</span> with you; I
            build <span className="code-inline">(models)</span> &&{" "}
            <span className="code-inline">(infra)</span> &&{" "}
            <span className="code-inline">(pipelines)</span>.
          </>
        )}
        {variant === "researchers" && (
          <>
            From hypothesis to{" "}
            <em className="font-serif italic text-accent">reproducible</em>{" "}
            experiments.
          </>
        )}
      </motion.h1>
    </AnimatePresence>
  );
}
