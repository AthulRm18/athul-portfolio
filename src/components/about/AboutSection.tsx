"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { stagger } from "@/lib/motion";
import { site, gmailComposeUrl } from "@/lib/data/site";

export function AboutSection() {
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("athulAnimated")) {
      setIsFirstVisit(false);
    } else {
      sessionStorage.setItem("athulAnimated", "true");
    }
  }, []);

  return (
    <section
      id="about"
      className="min-h-[100vh] flex flex-col justify-center pt-32 pb-16 scroll-mt-24"
    >
      <motion.div
        variants={stagger.container}
        initial="hidden"
        animate="show"
        className="max-w-2xl"
      >
        <motion.h1
          variants={stagger.item}
          className="flex flex-wrap items-center gap-[0.3em] mb-4 text-[clamp(2.75rem,7vw,4.5rem)] font-semibold tracking-[-0.04em] leading-[1.05]"
        >
          <div className="flex items-center whitespace-nowrap">
            hi. I&apos;m&nbsp;
            <motion.span
              initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ 
                duration: isFirstVisit ? 1.2 : 0, 
                ease: "easeOut", 
                delay: isFirstVisit ? 0.3 : 0 
              }}
              className="inline-block hover:text-white transition-colors"
            >
              Athul.
            </motion.span>
          </div>
        </motion.h1>

        <div className="mt-12 flex flex-col gap-6 max-w-[42rem]">
          <motion.p
            variants={stagger.item}
            className="text-lg md:text-[1.35rem] text-white/90 leading-snug tracking-tight font-medium"
          >
            I build intelligent solutions that solve real-world problems and make technology feel more useful to people.
          </motion.p>
          
          <motion.p
            variants={stagger.item}
            className="text-[15px] md:text-[1.05rem] text-white/50 leading-relaxed tracking-tight"
          >
            My focus is on AI, machine learning, and deep learning—not just as technical fields, but as tools to create meaningful impact. I’m constantly improving myself through projects, experimentation, and hands-on problem-solving.
          </motion.p>
          
          <motion.p
            variants={stagger.item}
            className="text-[15px] md:text-[1.05rem] text-white/50 leading-relaxed tracking-tight"
          >
            What drives me most is building solutions that are smart in design, practical in use, and capable of improving how people experience technology every day.
          </motion.p>
        </div>

        <motion.div
          variants={stagger.item}
          className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-mono text-dim"
        >
          <a
            href={gmailComposeUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-fg transition-colors"
          >
            Email
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-fg transition-colors"
          >
            GitHub
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-fg transition-colors"
          >
            LinkedIn
          </a>
          <Link href="#work" className="hover:text-fg transition-colors">
            Projects ↓
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
