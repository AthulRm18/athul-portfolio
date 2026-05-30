"use client";

import { useEffect, useState } from "react";

export function useScrollSpy(sectionIds: string[], offset = 120) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: `-${offset}px 0px -55% 0px`,
        threshold: [0, 0.15, 0.35, 0.55],
      }
    );

    elements.forEach((el) => observer.observe(el));
    
    // Fallback for the last section if the page isn't tall enough to trigger it
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        setActiveId(sectionIds[sectionIds.length - 1]);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds, offset]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return { activeId, scrollTo };
}
