"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { WindowChrome } from "@/components/ui/WindowChrome";
import { AudienceBar, HeroHeadline } from "@/components/hero/AudienceBar";
import { audiences, type AudienceId } from "@/lib/data/audience";
import { stagger, transition } from "@/lib/motion";

export function HeroSection() {
  const [audience, setAudience] = useState<AudienceId>("anyone");
  const active = audiences.find((a) => a.id === audience)!;

  return (
    <section className="min-h-[88vh] flex flex-col justify-center pt-28 pb-16">
      <motion.div
        variants={stagger.container}
        initial="hidden"
        animate="show"
        className="rounded-xl border border-border bg-surface overflow-hidden window-glow"
      >
        <WindowChrome title="~/athul — zsh" />

        <div className="relative px-6 py-10 md:px-16 md:py-20">
          <motion.div variants={stagger.item}>
            <AudienceBar active={audience} onChange={setAudience} />
          </motion.div>

          <motion.div variants={stagger.item}>
            <HeroHeadline variant={active.hero} />
          </motion.div>

          <motion.p
            variants={stagger.item}
            className="mt-8 text-base md:text-lg text-muted max-w-2xl leading-relaxed"
          >
            {active.subtext}
          </motion.p>

          <motion.div
            variants={stagger.item}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border-strong text-sm font-mono hover:bg-fg hover:text-bg transition-all duration-500"
              style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
            >
              View projects
              <motion.span
                className="inline-block"
                initial={false}
                whileHover={{ x: 4 }}
                transition={transition.fast}
              >
                →
              </motion.span>
            </a>
            <a
              href="#contact"
              className="text-sm text-muted link-underline font-mono"
            >
              say hello
            </a>
          </motion.div>

          <motion.div
            variants={stagger.item}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted"
            aria-hidden
          >
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-lg"
            >
              ↓
            </motion.span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
