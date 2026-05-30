"use client";

import { motion } from "framer-motion";

export function AmbientFlow() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden
    >
      <motion.div
        className="absolute -top-[20%] left-[10%] w-[55vw] h-[55vw] max-w-[520px] max-h-[520px] rounded-full blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(232,168,124,0.09) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, 40, -20, 0],
          y: [0, 30, 10, 0],
          scale: [1, 1.05, 0.98, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[40%] -right-[10%] w-[45vw] h-[45vw] max-w-[400px] max-h-[400px] rounded-full blur-[90px]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, -30, 20, 0],
          y: [0, -25, 15, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <svg
        className="absolute inset-0 w-full h-full opacity-[0.35]"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="flow-line" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(232,168,124,0)" />
            <stop offset="50%" stopColor="rgba(232,168,124,0.15)" />
            <stop offset="100%" stopColor="rgba(232,168,124,0)" />
          </linearGradient>
        </defs>
        <path
          d="M-100,180 C200,80 400,280 700,160 S1100,60 1500,200"
          fill="none"
          stroke="url(#flow-line)"
          strokeWidth="1"
          className="flow-line"
        />
        <path
          d="M-50,420 C250,320 500,520 800,380 S1200,280 1600,440"
          fill="none"
          stroke="url(#flow-line)"
          strokeWidth="0.75"
          className="flow-line flow-line-slow"
        />
        <path
          d="M100,80 C350,200 550,40 850,120 S1250,220 1500,90"
          fill="none"
          stroke="rgba(255,255,255,0.04)"
          strokeWidth="0.5"
          className="flow-line flow-line-slow"
        />
      </svg>
    </div>
  );
}
