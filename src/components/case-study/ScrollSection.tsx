"use client";

import { Reveal, RevealSectionLabel } from "@/components/case-study/Reveal";

interface ScrollSectionProps {
  id: string;
  label: string;
  children: React.ReactNode;
  className?: string;
}

export function ScrollSection({
  id,
  label,
  children,
  className = "",
}: ScrollSectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-32 py-14 md:py-20 border-b border-border last:border-0 ${className}`}
    >
      <RevealSectionLabel className="text-[11px] font-mono uppercase tracking-[0.22em] text-dim mb-6 block">
        {label}
      </RevealSectionLabel>
      <Reveal delay={0.06} variant="body">
        {children}
      </Reveal>
    </section>
  );
}
