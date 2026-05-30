"use client";

import React from "react";
import type { Project } from "@/lib/data/projects";
import { CortexAnimation }       from "./CortexAnimation";
import { SearchRankerAnimation } from "./SearchRankerAnimation";
import { SurgeAnimation }        from "./SurgeAnimation";
import { HotelAnimation }        from "./HotelAnimation";

const MAP: Record<Project["categoryType"], React.ComponentType> = {
  kubernetes:         CortexAnimation,
  "full-stack":       SearchRankerAnimation,
  geospatial:         SurgeAnimation,
  "machine-learning": HotelAnimation,
};

export function ProjectAnimation({ category }: { category: Project["categoryType"] }) {
  const Anim = MAP[category];
  return <Anim />;
}
