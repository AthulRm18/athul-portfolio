"use client";

import { motion } from "framer-motion";
import { transition } from "@/lib/motion";
import { site, gmailComposeUrl } from "@/lib/data/site";

const LINKS = [
  { label: "GitHub",   href: site.github   },
  { label: "LinkedIn", href: site.linkedin  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 scroll-mt-24 border-t border-border">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition.medium}
        >
          <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-dim mb-5">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] leading-[1.1] mb-5">
            Say hello.
          </h2>
          <p className="text-muted text-sm leading-relaxed max-w-sm mb-10">
            If something I built caught your attention, or you just want to talk
            about an idea — my inbox is open.
          </p>

          <a
            href={gmailComposeUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-base font-mono text-fg link-underline hover:text-accent transition-colors duration-300"
          >
            {site.email}
            <span aria-hidden>→</span>
          </a>
        </motion.div>

        {/* Right — links + location */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transition.medium, delay: 0.1 }}
          className="flex flex-col gap-3 md:pt-16"
        >
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-3 border-b border-border text-sm text-muted hover:text-fg transition-colors duration-300"
            >
              <span className="font-mono">{link.label}</span>
              <span
                className="text-dim group-hover:text-fg group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                aria-hidden
              >
                ↗
              </span>
            </a>
          ))}

          <p className="text-xs font-mono text-dim mt-4">
            India
          </p>
        </motion.div>
      </div>
    </section>
  );
}
