"use client";

import { useState } from "react";
import type { Project } from "@/lib/data/projects";
import { AnimatedProjectVisual } from "@/components/work/AnimatedProjectVisual";

interface ProjectMediaProps {
  project: Project;
  className?: string;
  pauseUntilHover?: boolean;
}

export function ProjectMedia({
  project,
  className = "",
  pauseUntilHover = false,
}: ProjectMediaProps) {
  const [hovered, setHovered] = useState(false);
  const [mediaLoaded, setMediaLoaded] = useState(false);
  const [mediaError, setMediaError] = useState(false);
  const media = project.media;
  const shouldPlay = !pauseUntilHover || hovered;
  const showOverlay = media && !mediaError && mediaLoaded;

  return (
    <div
      className={`relative min-h-[240px] md:min-h-full bg-[#080808] overflow-hidden ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Animation is always the base layer */}
      <AnimatedProjectVisual category={project.categoryType} />

      {/* Media overlays on top once loaded */}
      {media && media.type === "video" && (
        <video
          src={media.src}
          poster={media.poster}
          autoPlay={shouldPlay}
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
          style={{ opacity: showOverlay ? 0.92 : 0 }}
          onCanPlay={() => setMediaLoaded(true)}
          onError={() => setMediaError(true)}
        />
      )}

      {media && media.type === "gif" && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={media.src}
          alt=""
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
          style={{ opacity: showOverlay ? 0.92 : 0 }}
          onLoad={() => setMediaLoaded(true)}
          onError={() => setMediaError(true)}
        />
      )}

      {media && media.type === "image" && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={media.src}
          alt=""
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
          style={{ opacity: showOverlay ? 1 : 0 }}
          onLoad={() => setMediaLoaded(true)}
          onError={() => setMediaError(true)}
        />
      )}

      {/* Bottom vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}
