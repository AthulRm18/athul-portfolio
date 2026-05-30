"use client";

import { useEffect, useRef } from "react";

const NODES = [
  { id: "c", x: 160, y: 128, r: 7, ring: 20, center: true },
  { id: "a", x: 76,  y: 68,  r: 4, ring: 12 },
  { id: "b", x: 244, y: 68,  r: 4, ring: 12 },
  { id: "d", x: 58,  y: 188, r: 4, ring: 12 },
  { id: "e", x: 262, y: 188, r: 4, ring: 12 },
  { id: "f", x: 144, y: 214, r: 4, ring: 12 },
  { id: "g", x: 176, y: 28,  r: 3.5, ring: 10 },
];

const EDGES = [
  ["c","a"],["c","b"],["c","d"],["c","e"],["c","f"],
  ["a","g"],["b","g"],["a","b"],["d","f"],
];

function np(id: string) { return NODES.find((n) => n.id === id)!; }
function d(ms: number) { return new Promise((r) => setTimeout(r, ms)); }

export function CortexAnimation() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    let cancelled = false;

    const run = async () => {
      if (cancelled) return;
      await d(800);
      if (cancelled) return;

      // fault: node "e" goes dim
      setNode(svg, "e", "fault");
      setEdge(svg, "c", "e", "fault");
      await d(1000);
      if (cancelled) return;

      // heal ripple outward from center
      setNode(svg, "c", "heal"); await d(200);
      setNode(svg, "e", "heal"); setEdge(svg, "c", "e", "heal"); await d(200);
      setNode(svg, "a", "heal"); setNode(svg, "b", "heal"); await d(200);
      setNode(svg, "d", "heal"); setNode(svg, "f", "heal"); setNode(svg, "g", "heal");
      await d(900);
      if (cancelled) return;

      reset(svg);
      await d(2000);
      if (!cancelled) run();
    };

    const t = setTimeout(run, 400);
    return () => { cancelled = true; clearTimeout(t); };
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <svg
        ref={svgRef}
        viewBox="0 0 320 256"
        className="w-full h-full"
        style={{ maxWidth: "100%", maxHeight: "100%" }}
        aria-hidden
      >
        {/* Edges */}
        {EDGES.map(([a, b]) => {
          const pa = np(a); const pb = np(b);
          return (
            <line
              key={`${a}-${b}`}
              data-edge={`${a}-${b}`}
              x1={pa.x} y1={pa.y} x2={pb.x} y2={pb.y}
              stroke="rgba(255,255,255,0.09)"
              strokeWidth="0.8"
              style={{ transition: "stroke 0.55s ease, stroke-width 0.55s ease, opacity 0.55s ease" }}
            />
          );
        })}

        {/* Nodes */}
        {NODES.map((n) => (
          <g key={n.id} data-node={n.id}>
            <circle
              data-role="ring"
              cx={n.x} cy={n.y} r={n.ring}
              fill="none"
              stroke="rgba(255,255,255,0.07)"
              strokeWidth="0.8"
              style={{ transition: "stroke 0.5s ease, opacity 0.5s ease" }}
            />
            <circle
              data-role="fill"
              cx={n.x} cy={n.y} r={n.r}
              fill={n.center ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.07)"}
              style={{ transition: "fill 0.5s ease" }}
            />
          </g>
        ))}

        {/* Outer pulse ring on center */}
        <circle
          cx={np("c").x} cy={np("c").y} r="28"
          fill="none"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="0.8"
          style={{ animation: "cx-outer 3.5s ease-in-out infinite" }}
        />
      </svg>

      <style>{`
        @keyframes cx-outer {
          0%,100% { r:28; opacity:0.08; }
          50%      { r:40; opacity:0;   }
        }
      `}</style>
    </div>
  );
}

function setNode(svg: SVGSVGElement, id: string, state: "fault"|"heal") {
  const g = svg.querySelector(`[data-node="${id}"]`);
  if (!g) return;
  const ring = g.querySelector("[data-role='ring']") as SVGCircleElement;
  const fill = g.querySelector("[data-role='fill']") as SVGCircleElement;
  if (state === "fault") {
    ring.setAttribute("stroke", "rgba(255,255,255,0.03)");
    fill.setAttribute("fill",   "rgba(255,255,255,0.03)");
  } else {
    ring.setAttribute("stroke", "rgba(255,255,255,0.5)");
    fill.setAttribute("fill",   "rgba(255,255,255,0.55)");
  }
}

function setEdge(svg: SVGSVGElement, a: string, b: string, state: "fault"|"heal") {
  const el =
    (svg.querySelector(`[data-edge="${a}-${b}"]`) ||
     svg.querySelector(`[data-edge="${b}-${a}"]`)) as SVGLineElement | null;
  if (!el) return;
  if (state === "fault") {
    el.setAttribute("stroke", "rgba(255,255,255,0.02)");
    el.setAttribute("stroke-width", "0.8");
  } else {
    el.setAttribute("stroke", "rgba(255,255,255,0.45)");
    el.setAttribute("stroke-width", "1.2");
  }
}

function reset(svg: SVGSVGElement) {
  NODES.forEach((n) => {
    const g = svg.querySelector(`[data-node="${n.id}"]`);
    if (!g) return;
    (g.querySelector("[data-role='ring']") as SVGCircleElement)
      .setAttribute("stroke", "rgba(255,255,255,0.07)");
    (g.querySelector("[data-role='fill']") as SVGCircleElement)
      .setAttribute("fill", n.center ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.07)");
  });
  EDGES.forEach(([a, b]) => {
    const el =
      (svg.querySelector(`[data-edge="${a}-${b}"]`) ||
       svg.querySelector(`[data-edge="${b}-${a}"]`)) as SVGLineElement | null;
    if (!el) return;
    el.setAttribute("stroke", "rgba(255,255,255,0.09)");
    el.setAttribute("stroke-width", "0.8");
  });
}
