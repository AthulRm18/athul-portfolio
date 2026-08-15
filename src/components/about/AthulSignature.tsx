"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AthulSignatureProps {
  className?: string;
  isFirstVisit: boolean;
}

export function AthulSignature({ className, isFirstVisit }: AthulSignatureProps) {
  return (
    <motion.svg
      className={cn("h-[1.2em] w-[2.5em] overflow-visible translate-y-[0.1em]", className)}
      viewBox="0 0 200 80"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ 
        strokeDasharray: 400, 
        strokeDashoffset: isFirstVisit ? 400 : 0, 
        fill: isFirstVisit ? "transparent" : "currentColor" 
      }}
      animate={{ 
        strokeDashoffset: 0, 
        fill: "currentColor" 
      }}
      transition={{
        strokeDashoffset: { duration: isFirstVisit ? 2.5 : 0, ease: "easeInOut", delay: isFirstVisit ? 0.3 : 0 },
        fill: { duration: isFirstVisit ? 1 : 0, delay: isFirstVisit ? 2 : 0, ease: "easeIn" }
      }}
    >
      <text
        x="0"
        y="60"
        fontFamily="var(--font-instrument), serif"
        fontSize="65"
        fontStyle="italic"
        letterSpacing="-0.02em"
      >
        Athul.
      </text>
    </motion.svg>
  );
}
