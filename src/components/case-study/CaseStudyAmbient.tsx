"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import type { ProjectCategory } from "@/lib/data/projects";

interface Props { category: ProjectCategory }

/**
 * Ambient animation for the Case Study page.
 * Placed on the right side below the sidebar contents (filling the gap as requested).
 * Subtle, blending, and fades out as you scroll down.
 */
export function CaseStudyAmbient({ category }: Props) {
  const { scrollY } = useScroll();
  // Fades out entirely by 500px of scroll
  const opacity = useTransform(scrollY, [0, 500], [0.5, 0]);

  return (
    <motion.div
      style={{ opacity }}
      className="absolute top-[20rem] right-[-5%] lg:right-[2%] pointer-events-none select-none z-[-1] flex items-center justify-end will-change-[opacity]"
      aria-hidden
    >
      <div className="scale-[2] md:scale-[3] origin-right opacity-50">
        {category === "full-stack"  && <RerankBg />}
        {category === "kubernetes"  && <HealBg />}
        {category === "geospatial"  && <HexBg />}
        {category === "machine-learning" && <MlBg />}
      </div>
    </motion.div>
  );
}

/* ── Search re-ranker: Amazon Style E-Commerce Mockup & Reordering ──────── */
function RerankBg() {
  return (
    <div className="relative w-[280px] h-[190px] rounded-xl border border-[#232F3E]/50 bg-[#131A22]/95 overflow-hidden shadow-2xl p-4 translate-x-12 translate-y-16">
      {/* Top Navbar Area */}
      <div className="flex gap-3 mb-5 items-center">
        {/* Amazon-like Logo placeholder */}
        <div className="w-16 h-4 bg-white/20 rounded-sm" />
        {/* Search Input */}
        <div className="flex-1 h-7 rounded bg-white flex items-center pr-0 overflow-hidden relative search-box-anim">
          {/* Fake typed text */}
          <div className="absolute left-2 h-[2.5px] bg-black/60 rounded-full" style={{ animation: "typeText 8s infinite" }} />
          {/* Search Button */}
          <div className="absolute right-0 w-8 h-full bg-[#febd69] flex justify-center items-center search-btn-anim border-l border-black/10">
            <div className="w-2.5 h-2.5 rounded-full border-2 border-[#131A22]" />
            <div className="w-1 h-1.5 bg-[#131A22] absolute bottom-1 right-2 rotate-45 rounded-full" />
          </div>
        </div>
      </div>

      {/* Search Results */}
      <div className="flex flex-col gap-3 relative">
         {/* Product 1 (Initially Top, gets demoted) */}
         <div className="flex gap-3 items-center res-1 bg-white/5 p-2 rounded z-10">
            <div className="w-8 h-8 bg-white/10 rounded shrink-0" />
            <div className="flex flex-col gap-1.5 flex-1">
               <div className="w-3/4 h-2 bg-white/30 rounded" />
               {/* 3 Stars */}
               <div className="flex gap-1">
                 <div className="w-1.5 h-1.5 bg-[#ffa41c] rounded-full" />
                 <div className="w-1.5 h-1.5 bg-[#ffa41c] rounded-full" />
                 <div className="w-1.5 h-1.5 bg-[#ffa41c] rounded-full" />
                 <div className="w-1.5 h-1.5 bg-white/20 rounded-full" />
                 <div className="w-1.5 h-1.5 bg-white/20 rounded-full" />
               </div>
            </div>
         </div>

         {/* Product 2 (Initially 2nd, gets promoted to Top) */}
         <div className="flex gap-3 items-center res-2 bg-[#febd69]/10 border border-[#febd69]/30 p-2 rounded z-20">
            <div className="w-8 h-8 bg-[#febd69]/40 rounded shrink-0" />
            <div className="flex flex-col gap-1.5 flex-1">
               <div className="w-full h-2 bg-[#febd69]/80 rounded" />
               {/* 5 Stars */}
               <div className="flex gap-1">
                 <div className="w-1.5 h-1.5 bg-[#ffa41c] rounded-full" />
                 <div className="w-1.5 h-1.5 bg-[#ffa41c] rounded-full" />
                 <div className="w-1.5 h-1.5 bg-[#ffa41c] rounded-full" />
                 <div className="w-1.5 h-1.5 bg-[#ffa41c] rounded-full" />
                 <div className="w-1.5 h-1.5 bg-[#ffa41c] rounded-full" />
               </div>
            </div>
         </div>
         
         {/* Product 3 (Static bottom) */}
         <div className="flex gap-3 items-center res-3 bg-white/5 p-2 rounded z-0">
            <div className="w-8 h-8 bg-white/10 rounded shrink-0" />
            <div className="flex flex-col gap-1.5 flex-1">
               <div className="w-1/2 h-2 bg-white/20 rounded" />
               {/* 2 Stars */}
               <div className="flex gap-1">
                 <div className="w-1.5 h-1.5 bg-[#ffa41c] rounded-full" />
                 <div className="w-1.5 h-1.5 bg-[#ffa41c] rounded-full" />
                 <div className="w-1.5 h-1.5 bg-white/20 rounded-full" />
                 <div className="w-1.5 h-1.5 bg-white/20 rounded-full" />
                 <div className="w-1.5 h-1.5 bg-white/20 rounded-full" />
               </div>
            </div>
         </div>
      </div>

      {/* Fake Mouse Cursor */}
      <svg
        className="absolute w-5 h-5 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] z-30 cursor-anim"
        viewBox="0 0 24 24" fill="currentColor"
      >
        <path d="M7 2l12 11.2-5.8.5 3.3 7.3-2.2.9-3.2-7.4-4.4 4.8z" stroke="rgba(0,0,0,0.5)" strokeWidth="1" />
      </svg>
      
      <style>{`
        @keyframes typeText {
          0%, 15% { width: 0; opacity: 0; }
          16% { opacity: 1; width: 0; }
          25%, 70% { width: 50%; opacity: 1; }
          75%, 100% { width: 0; opacity: 0; }
        }
        @keyframes moveMouse {
          0%, 5% { transform: translate(250px, 170px) scale(1); opacity: 0; }
          10% { opacity: 1; transform: translate(250px, 170px) scale(1); }
          15% { transform: translate(242px, 24px) scale(1); } /* Move to search button */
          18% { transform: translate(242px, 24px) scale(0.85); } /* Click Search */
          22% { transform: translate(242px, 24px) scale(1); }
          40%, 65% { transform: translate(140px, 120px) scale(1); } /* Move over results */
          75%, 90% { transform: translate(250px, 170px) scale(1); opacity: 1; }
          95%, 100% { transform: translate(250px, 170px) scale(1); opacity: 0; }
        }
        @keyframes clickFlash {
          0%, 17% { filter: brightness(1); }
          18%, 22% { filter: brightness(1.3); background: #ff9900; }
          23%, 100% { filter: brightness(1); }
        }
        @keyframes focusBox {
          0%, 15% { box-shadow: none; border: 1px solid transparent; }
          16%, 70% { box-shadow: 0 0 0 2px #febd69; }
          75%, 100% { box-shadow: none; border: 1px solid transparent; }
        }
        @keyframes reorder1 {
          0%, 35% { transform: translateY(0); opacity: 1; }
          40%, 85% { transform: translateY(60px); opacity: 0.3; } /* move down 48px height + 12px gap = 60px */
          90%, 100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes reorder2 {
          0%, 35% { transform: translateY(0); box-shadow: none; }
          40%, 85% { transform: translateY(-60px); box-shadow: 0 4px 12px rgba(254, 189, 105, 0.3); } /* move up 60px */
          90%, 100% { transform: translateY(0); box-shadow: none; }
        }
        
        .cursor-anim { animation: moveMouse 8s ease-in-out infinite; }
        .search-btn-anim { animation: clickFlash 8s infinite; }
        .search-box-anim { animation: focusBox 8s infinite; }
        .res-1 { animation: reorder1 8s cubic-bezier(0.16, 1, 0.3, 1) infinite; }
        .res-2 { animation: reorder2 8s cubic-bezier(0.16, 1, 0.3, 1) infinite; }
      `}</style>
    </div>
  );
}

/* ── Cortex: large node graph ───────────────────────────────────────────── */
function HealBg() {
  const NODES = [
    { cx: 60,  cy: 60,  r: 5.5, center: true },
    { cx: 140, cy: 30,  r: 4 },
    { cx: 190, cy: 70,  r: 4 },
    { cx: 30,  cy: 130, r: 4 },
    { cx: 110, cy: 140, r: 4 },
    { cx: 200, cy: 130, r: 3.5 },
    { cx: 80,  cy: 200, r: 3.5 },
    { cx: 160, cy: 190, r: 3.5 },
  ];
  const EDGES = [[0,1],[0,2],[0,3],[0,4],[1,2],[3,4],[4,5],[4,6],[5,7],[6,7]];
  return (
    <div style={{ width: 220 }}>
      <svg viewBox="0 0 220 220" width="100%" height="220" aria-hidden>
        {EDGES.map(([a, b], i) => (
          <line
            key={i}
            x1={NODES[a].cx} y1={NODES[a].cy}
            x2={NODES[b].cx} y2={NODES[b].cy}
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="0.8"
          />
        ))}
        {NODES.map((n, i) => (
          <circle
            key={i}
            cx={n.cx} cy={n.cy} r={n.r}
            fill={n.center ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.4)"}
            style={{ animation: `csn 3.2s ease-in-out ${i * 0.4}s infinite` }}
          />
        ))}
      </svg>
      <style>{`@keyframes csn{0%,100%{opacity:.35}50%{opacity:1}}`}</style>
    </div>
  );
}

/* ── Surge: Google Maps Style Navigation & 3D Scooty ─────────────────────── */
function HexBg() {
  const R = 22; 
  const W = R * Math.sqrt(3);
  const H = R * 2;
  const rows = 6, cols = 7; 
  const cells: { cx: number; cy: number; dist: number; isSurge?: boolean }[] = [];
  const cr = Math.floor(rows / 2), cc = Math.floor(cols / 2);
  
  const targetR = 3;
  const targetC = 6;
  
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const offset = r % 2 === 1 ? W / 2 : 0;
      cells.push({
        cx: 24 + c * W + offset,
        cy: 24 + r * H * 0.75,
        dist: Math.max(Math.abs(r - cr), Math.abs(c - cc)),
        isSurge: r === targetR && c === targetC,
      });
    }
  }
  
  const vw = 48 + cols * W + W / 2;
  const vh = 48 + rows * H * 0.75;
  
  function pts(cx: number, cy: number) {
    return Array.from({ length: 6 }, (_, i) => {
      const a = (Math.PI / 3) * i - Math.PI / 6;
      return `${cx + (R - 1.5) * Math.cos(a)},${cy + (R - 1.5) * Math.sin(a)}`;
    }).join(" ");
  }

  const surgeCx = 24 + targetC * W + (targetR % 2 === 1 ? W / 2 : 0);
  const surgeCy = 24 + targetR * H * 0.75;
  
  // Google Maps routing path
  const startX = -20;
  const startY = vh;
  const control1X = 60;
  const control1Y = vh - 20;
  const control2X = surgeCx - 40;
  const control2Y = surgeCy + 60;
  const routePath = `M ${startX} ${startY} C ${control1X} ${control1Y}, ${control2X} ${control2Y}, ${surgeCx} ${surgeCy + 10}`;

  return (
    <div 
      className="relative"
      style={{ 
        width: 320, 
        WebkitMaskImage: "radial-gradient(circle at center, black 30%, transparent 75%)",
        maskImage: "radial-gradient(circle at center, black 30%, transparent 75%)"
      }}
    >
      <svg viewBox={`0 0 ${vw} ${vh}`} width="100%" height="auto" aria-hidden>
        <defs>
          <radialGradient id="heatGlow">
            <stop offset="0%" stopColor="rgba(239,68,68,0.7)" />
            <stop offset="100%" stopColor="rgba(239,68,68,0)" />
          </radialGradient>
        </defs>

        {/* Google Maps Base Grid (Roads) */}
        {cells.map((c, i) => (
          <polygon
            key={i}
            points={pts(c.cx, c.cy)}
            fill={c.isSurge ? "rgba(239,68,68,0.2)" : "rgba(20,25,30,0.6)"}
            stroke={c.isSurge ? "rgba(239,68,68,0.9)" : "rgba(70,90,110,0.5)"}
            strokeWidth={c.isSurge ? "1.5" : "2"}
            className={c.isSurge ? "surge-hex" : ""}
          />
        ))}

        {/* Heatmap glow beneath the pin */}
        <circle cx={surgeCx} cy={surgeCy} r={R*2} fill="url(#heatGlow)" className="surge-glow" />

        {/* Google Maps Blue Dashed Route Line */}
        <path d={routePath} fill="none" stroke="#3b82f6" strokeWidth="3" strokeDasharray="6 6" strokeLinecap="round" className="route-anim" />

        {/* 3D Scooter Emoji (Flipped to face right) */}
        <g className="scooty-anim">
           <g transform="scale(-1, 1)">
             <ellipse cx="0" cy="12" rx="12" ry="5" fill="rgba(0,0,0,0.5)" />
             <text x="0" y="0" fontSize="32" textAnchor="middle" dominantBaseline="central">🛵</text>
           </g>
        </g>
        
        {/* High Demand Map Pin / Bubble */}
        <g className="popup-anim" transform={`translate(${surgeCx}, ${surgeCy - 20})`}>
           {/* Map Pin Dot */}
           <circle cx="0" cy="20" r="4" fill="#ef4444" stroke="#ffffff" strokeWidth="1.5" />
           <circle cx="0" cy="20" r="12" fill="rgba(239,68,68,0.3)" className="pin-pulse" />
           
           {/* Tooltip Bubble */}
           <path d="M 0 0 L -6 -6 L -45 -6 C -48 -6 -50 -8 -50 -11 L -50 -25 C -50 -28 -48 -30 -45 -30 L 45 -30 C 48 -30 50 -28 50 -25 L 50 -11 C 50 -8 48 -6 45 -6 L 6 -6 Z" fill="#ef4444" />
           <text x="0" y="-17" fontSize="8" fontWeight="900" fill="white" textAnchor="middle" dominantBaseline="central" letterSpacing="0.5">HIGH DEMAND</text>
        </g>
      </svg>
      
      <style>{`
        @keyframes surgeHex {
          0%, 100% { fill: rgba(239,68,68,0.15); }
          50% { fill: rgba(239,68,68,0.4); }
        }
        @keyframes surgeGlow {
          0%, 100% { opacity: 0.5; transform: scale(0.9); transform-origin: ${surgeCx}px ${surgeCy}px; }
          50% { opacity: 1; transform: scale(1.1); transform-origin: ${surgeCx}px ${surgeCy}px; }
        }
        @keyframes popupFloat {
          0%, 100% { transform: translate(${surgeCx}px, ${surgeCy - 20}px); }
          50% { transform: translate(${surgeCx}px, ${surgeCy - 25}px); }
        }
        @keyframes pinPulse {
          0% { r: 4; opacity: 1; }
          100% { r: 20; opacity: 0; }
        }
        @keyframes driveScooty {
          0%, 10% { transform: translate(${startX}px, ${startY}px) rotate(-15deg) scale(0.9); opacity: 0; }
          15% { opacity: 1; transform: translate(${startX}px, ${startY}px) rotate(-15deg) scale(0.9); }
          40% { transform: translate(${control1X}px, ${control1Y}px) rotate(-5deg) scale(0.9); }
          65% { transform: translate(${control2X}px, ${control2Y}px) rotate(-20deg) scale(0.9); opacity: 1; }
          85%, 90% { transform: translate(${surgeCx - 5}px, ${surgeCy + 10}px) rotate(0deg) scale(0.9); opacity: 1; }
          95%, 100% { transform: translate(${surgeCx - 5}px, ${surgeCy + 10}px) rotate(0deg) scale(0.9); opacity: 0; }
        }
        @keyframes routeDash {
          0% { stroke-dashoffset: 24; }
          100% { stroke-dashoffset: 0; }
        }
        
        .surge-hex { animation: surgeHex 2s ease-in-out infinite; }
        .surge-glow { animation: surgeGlow 2s ease-in-out infinite; }
        .popup-anim { animation: popupFloat 2.5s ease-in-out infinite; }
        .pin-pulse { animation: pinPulse 2s cubic-bezier(0.16, 1, 0.3, 1) infinite; }
        .scooty-anim { animation: driveScooty 7s ease-in-out infinite; }
        .route-anim { animation: routeDash 1s linear infinite; }
      `}</style>
    </div>
  );
}

/* ── Hotel Booking Prediction: Mock Booking Card + ML Stamp ─────────────── */
function MlBg() {
  return (
    <div className="relative w-[260px] h-[170px] rounded-xl border border-white/10 bg-[#0a0a0a]/40 overflow-hidden shadow-2xl p-5 flex flex-col justify-center items-center">
      
      {/* Booking Card */}
      <div className="w-full h-[70px] rounded-lg bg-white/5 border border-white/10 relative overflow-hidden flex items-center px-4 mb-4 card-anim">
        {/* Placeholder Avatar */}
        <div className="w-10 h-10 rounded-full bg-white/10 mr-4 shrink-0" />
        {/* Placeholder Text Lines */}
        <div className="flex flex-col gap-2 flex-1">
          <div className="h-2 w-full bg-white/20 rounded-full" />
          <div className="h-2 w-3/4 bg-white/10 rounded-full" />
        </div>
        
        {/* Cancelled Stamp */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none stamp-anim z-20">
          <div className="border-[3px] border-red-500 text-red-500 font-mono text-[11px] font-bold px-2 py-0.5 rounded rotate-12 backdrop-blur-sm bg-red-500/10 shadow-[0_0_15px_rgba(239,68,68,0.4)]">
            HIGH RISK
          </div>
        </div>
      </div>

      {/* ML Prediction Meter */}
      <div className="w-full flex flex-col gap-2">
        <div className="flex items-center justify-between font-mono text-[10px] tracking-wide">
          <span className="text-white/50">Cancel Probability</span>
          <span className="text-red-400 font-bold prob-text">98%</span>
        </div>
        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden relative">
           <div className="absolute top-0 left-0 h-full bg-red-500/90 meter-anim shadow-[0_0_12px_rgba(239,68,68,0.8)]" />
        </div>
      </div>

      <style>{`
        @keyframes meterFill {
          0%, 15% { width: 12%; background: rgba(255,255,255,0.4); box-shadow: none; }
          40%, 60% { width: 45%; background: rgba(255,165,0,0.8); box-shadow: 0 0 10px rgba(255,165,0,0.4); }
          75%, 100% { width: 98%; background: rgba(239,68,68,0.9); box-shadow: 0 0 15px rgba(239,68,68,0.6); }
        }
        @keyframes probCount {
          0%, 15% { content: "12%"; color: rgba(255,255,255,0.4); }
          40%, 60% { content: "45%"; color: rgba(255,165,0,0.8); }
          75%, 100% { content: "98%"; color: rgba(239,68,68,1); }
        }
        @keyframes stampPop {
          0%, 65% { opacity: 0; transform: scale(1.8) rotate(12deg); }
          75% { opacity: 1; transform: scale(0.9) rotate(12deg); }
          80%, 100% { opacity: 1; transform: scale(1) rotate(12deg); }
        }
        @keyframes cardFade {
          0%, 70% { opacity: 1; filter: grayscale(0); border-color: rgba(255,255,255,0.1); }
          75%, 100% { opacity: 0.5; filter: grayscale(1); border-color: rgba(239,68,68,0.4); }
        }
        .meter-anim { animation: meterFill 5s infinite; }
        .prob-text::after { animation: probCount 5s infinite; content: "12%"; }
        .prob-text { color: transparent !important; position: relative; }
        .prob-text::after { position: absolute; right: 0; top: 0; }
        .stamp-anim { animation: stampPop 5s infinite cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        .card-anim { animation: cardFade 5s infinite; }
      `}</style>
    </div>
  );
}
