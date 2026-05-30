"use client";

import { motion } from "framer-motion";

interface WindowChromeProps {
  title?: string;
  className?: string;
}

export function WindowChrome({ title, className = "" }: WindowChromeProps) {
  return (
    <div
      className={`flex items-center gap-2 px-4 py-3 border-b border-border ${className}`}
    >
      <div className="flex items-center gap-1.5" aria-hidden>
        <motion.span
          className="size-2.5 rounded-full bg-[#ff5f57]"
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className="size-2.5 rounded-full bg-[#febc2e]"
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className="size-2.5 rounded-full bg-[#28c840]"
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.2 }}
        />
      </div>
      {title && (
        <span className="ml-2 text-[11px] font-mono text-muted tracking-wide truncate">
          {title}
        </span>
      )}
    </div>
  );
}
