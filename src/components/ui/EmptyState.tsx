"use client";

import { motion } from "framer-motion";
import { transition } from "@/lib/motion";

interface EmptyStateProps {
  title: string;
  description: string;
  action?: { label: string; href: string };
}

export function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={transition.medium}
      className="flex flex-col items-center justify-center text-center py-16 px-8 rounded-xl border border-dashed border-border-strong bg-surface/50"
    >
      <div
        className="mb-6 size-12 rounded-full border border-border flex items-center justify-center font-mono text-xs text-muted"
        aria-hidden
      >
        ∅
      </div>
      <h3 className="text-lg font-medium text-fg mb-2">{title}</h3>
      <p className="text-sm text-muted max-w-sm leading-relaxed">{description}</p>
      {action && (
        <a
          href={action.href}
          className="mt-8 text-sm font-mono link-underline text-accent hover:text-fg transition-colors"
        >
          {action.label} →
        </a>
      )}
    </motion.div>
  );
}
