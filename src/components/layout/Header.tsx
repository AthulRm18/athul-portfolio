"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { site } from "@/lib/data/site";

const navItems = [
  { href: "/#about", label: "About" },
  { href: "/#work", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 40], [0, 1]);

  return (
    <motion.header className="fixed top-0 left-0 right-0 z-50">
      <motion.div
        style={{ opacity: bgOpacity }}
        className="absolute inset-0 bg-bg/80 backdrop-blur-md border-b border-border pointer-events-none will-change-[opacity]"
      />
      <div className="relative max-w-6xl mx-auto px-6 md:px-8 pt-6 pb-5">
        <div className="flex items-center justify-between gap-8">
          <Link
            href="/"
            className="text-sm font-medium tracking-tight text-fg hover:text-accent transition-colors shrink-0"
          >
            Athul R Mohan
          </Link>

          <nav
            className="hidden sm:flex items-center gap-8 text-[13px] text-muted"
            aria-label="Primary"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="link-underline hover:text-fg transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-5 shrink-0">
            <ExternalLink href={site.github} className="hidden md:inline-flex text-[13px]">
              GitHub
            </ExternalLink>
            <ExternalLink href={site.linkedin} className="hidden md:inline-flex text-[13px]">
              LinkedIn
            </ExternalLink>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
