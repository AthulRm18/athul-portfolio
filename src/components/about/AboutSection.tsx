"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { stagger } from "@/lib/motion";
import { site, gmailComposeUrl } from "@/lib/data/site";
import { AppleHelloEffectEnglish } from "@/components/apple-hello-effect-english";

export function AboutSection() {
  const [showName, setShowName] = useState(false);

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
        <motion.div
          variants={stagger.item}
          className="flex flex-wrap items-end gap-3 md:gap-5 mb-4"
        >
          <AppleHelloEffectEnglish 
            className="h-12 sm:h-16 md:h-20 text-fg -mb-2 md:-mb-3" 
            durationScale={1.1} 
            onAnimationComplete={() => setShowName(true)}
          />
          <motion.h1
            initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
            animate={showName ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-[clamp(2.75rem,7vw,4.5rem)] font-semibold tracking-[-0.04em] leading-[1.05]"
          >
            I&apos;m <span className="inline-block hover:text-white transition-colors">Athul</span>.
          </motion.h1>
        </motion.div>

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
          <span className="text-border select-none">/</span>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-fg transition-colors"
          >
            GitHub
          </a>
          <span className="text-border select-none">/</span>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-fg transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-border select-none">/</span>
          <Link href="#work" className="hover:text-fg transition-colors">
            Projects ↓
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
