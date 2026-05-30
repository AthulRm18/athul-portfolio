"use client";

import { motion } from "framer-motion";

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className = "" }: SkeletonProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-md bg-surface-elevated ${className}`}
      aria-hidden
    >
      <motion.div
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent"
        animate={{ x: ["-100%", "200%"] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}

export function HeroSkeleton() {
  return (
    <div className="rounded-xl border border-border bg-surface overflow-hidden">
      <div className="flex gap-2 px-4 py-3 border-b border-border">
        <Skeleton className="size-2.5 rounded-full" />
        <Skeleton className="size-2.5 rounded-full" />
        <Skeleton className="size-2.5 rounded-full" />
      </div>
      <div className="p-8 md:p-16 space-y-6 window-glow min-h-[420px] flex flex-col justify-center">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-12 md:h-16 w-full max-w-2xl" />
        <Skeleton className="h-12 md:h-16 w-4/5 max-w-xl" />
        <Skeleton className="h-4 w-96 max-w-full mt-4" />
      </div>
    </div>
  );
}

export function ProjectCardSkeleton() {
  return (
    <div className="rounded-xl border border-border bg-surface overflow-hidden">
      <div className="p-6 md:p-8 space-y-4">
        <Skeleton className="h-3 w-24" />
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>
      <Skeleton className="h-48 md:h-64 rounded-none" />
    </div>
  );
}

export function WorkSectionSkeleton() {
  return (
    <div className="space-y-8">
      <Skeleton className="h-10 w-48" />
      <ProjectCardSkeleton />
      <div className="grid md:grid-cols-2 gap-8">
        <ProjectCardSkeleton />
        <ProjectCardSkeleton />
      </div>
    </div>
  );
}
