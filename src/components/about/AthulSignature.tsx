"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AthulSignatureProps {
  className?: string;
  isFirstVisit: boolean;
}

export function AthulSignature({ className, isFirstVisit }: AthulSignatureProps) {
  return (
    <motion.span
      className={cn(
        "font-[family-name:var(--font-caveat)] text-[1.3em] font-bold tracking-wider relative -bottom-[0.05em]", 
        className
      )}
      initial={isFirstVisit ? { clipPath: "inset(0 100% 0 0)" } : { clipPath: "inset(0 0% 0 0)" }}
      animate={{ clipPath: "inset(0 0% 0 0)" }}
      transition={{ 
        duration: isFirstVisit ? 1.5 : 0, 
        ease: "easeInOut", 
        delay: isFirstVisit ? 0.2 : 0 
      }}
      style={{ display: "inline-block" }}
    >
      Athul.
    </motion.span>
  );
}
