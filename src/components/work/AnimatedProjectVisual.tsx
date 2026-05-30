"use client";

import type { Project } from "@/lib/data/projects";
import { ProjectAnimation } from "./animations/index";

export function AnimatedProjectVisual({
  category,
}: {
  category: Project["categoryType"];
}) {
  return (
    <div className="absolute inset-0" aria-hidden>
      <ProjectAnimation category={category} />
    </div>
  );
}
