"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function PageIntro() {
  const reduceMotion = useReducedMotion();
  const [show, setShow] = useState(!reduceMotion);

  useEffect(() => {
    if (reduceMotion) return;
    const t = setTimeout(() => setShow(false), 1500);
    return () => clearTimeout(t);
  }, [reduceMotion]);

  if (!show || reduceMotion) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] pointer-events-none flex items-center justify-center bg-bg"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 0.65, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      onAnimationComplete={() => setShow(false)}
      aria-hidden
    >
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0.6 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      >
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(90vw,600px)] h-px origin-center"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(232,168,124,0.5), transparent)",
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-[min(50vh,320px)] origin-center"
          style={{
            background:
              "linear-gradient(180deg, transparent, rgba(232,168,124,0.25), transparent)",
          }}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 0.8 }}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        />
      </motion.div>
      <motion.p
        className="relative text-[11px] font-mono text-dim tracking-[0.35em] uppercase"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: [0, 1, 0], y: 0 }}
        transition={{ duration: 1.2, times: [0, 0.35, 1], ease: "easeOut" }}
      >
        Athul R Mohan
      </motion.p>
    </motion.div>
  );
}
