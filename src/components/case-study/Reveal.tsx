"use client";

import { motion, useReducedMotion } from "framer-motion";
import { revealBody, revealHeading, transition } from "@/lib/motion";

const viewport = { once: true, margin: "-12%" as const };

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: "heading" | "body";
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "body",
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const variants = variant === "heading" ? revealHeading : revealBody;
  const t =
    variant === "heading" ? transition.revealLabel : transition.reveal;

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={variants}
      transition={{ ...t, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface RevealSectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function RevealSectionLabel({
  children,
  className = "",
}: RevealSectionLabelProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <p className={className}>{children}</p>;
  }

  return (
    <motion.p
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={revealHeading}
      transition={transition.revealLabel}
      className={className}
    >
      {children}
    </motion.p>
  );
}
