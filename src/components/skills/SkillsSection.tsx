"use client";

import { motion } from "framer-motion";
import { transition } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

function PythonIcon() {
  return (
    <svg viewBox="0 0 128 128" className="w-4 h-4">
      <path fill="#3776AB" d="M64.6 3c-30.2 0-28.5 13-28.5 13l-.1 13.5h29.2v4.1H35.8C16.5 33.6 12 46.8 12 66.8s3.9 31.9 22.4 31.9h8v-15s0-17.6 17.9-17.6h25.4s16.7.2 16.7-16.1V31.6s1.6-28.6-27.8-28.6z"/>
      <path fill="#FFD43B" d="M63.7 125c30.2 0 28.5-13 28.5-13l.1-13.5H63.1v-4.1h29.4c19.3 0 23.8-13.2 23.8-33.2s-3.9-31.9-22.4-31.9h-8v15s0 17.6-17.9 17.6H42.6s-16.7-.2-16.7 16.1v18.4s-1.6 28.6 27.8 28.6z"/>
      <circle fill="#fff" cx="49" cy="18" r="4.5"/>
      <circle fill="#fff" cx="78.5" cy="110" r="4.5"/>
    </svg>
  );
}

function CIcon() {
  return (
    <svg viewBox="0 0 128 128" className="w-4 h-4">
      <path fill="#A8B9CC" d="M117.5 33.5L65.7 3.6c-1.1-.6-2.4-.6-3.4 0L10.5 33.5c-1.1.6-1.7 1.8-1.7 3v55.1c0 1.2.6 2.4 1.7 3l51.8 29.9c1.1.6 2.4.6 3.4 0l51.8-29.9c1.1-.6 1.7-1.8 1.7-3V36.5c0-1.2-.7-2.4-1.7-3z"/>
      <path fill="#3949AB" d="M64 125.1c-.6 0-1.1-.2-1.6-.4L10.6 94.8c-1-.6-1.6-1.7-1.6-2.8V36.9c0-1.2.6-2.2 1.6-2.8L62.4 4.2c1-.6 2.2-.6 3.2 0l51.8 29.9c1 .6 1.6 1.7 1.6 2.8v55.1c0 1.2-.6 2.2-1.6 2.8L65.6 124.7c-.5.3-1 .4-1.6.4zM12.2 92.4L64 122.3l51.8-29.9V37.7L64 7.8 12.2 37.7v54.7z"/>
      <path fill="#5C6BC0" d="M64 125.1V64h61.8v28.1c0 1.2-.6 2.2-1.6 2.8L65.6 124.7c-.5.2-1 .4-1.6.4z"/>
      <path fill="#E8EAF6" d="M83.4 79c-3.1 4.7-8.4 7.7-14.3 7.7-9.5 0-17.2-7.7-17.2-17.2s7.7-17.2 17.2-17.2c5.9 0 11.2 3 14.3 7.7l11.4-11.4C88 38 76.9 31.4 64 31.4c-19.8 0-35.8 16-35.8 35.8s16 35.8 35.8 35.8c12.9 0 24-6.6 30.8-17l-11.4-11.4z"/>
    </svg>
  );
}

function JavaIcon() {
  return (
    <svg viewBox="0 0 128 128" className="w-4 h-4">
      <path fill="#EA2D2E" d="M54.5 50.8c-2.4-7.2-.6-17.8 8.6-26.6 0 0-2.3 8.3 2.1 14.4 3.7 5.1 10.6 9.8 11.8 17.1.6 4-.4 8.7-2.9 12-4 5.3-11.6 6.3-15.9 1.1-2.9-3.4-2.8-8.9-3.7-18z"/>
      <path fill="#5382A1" d="M85.7 75.1c-14.9 3.2-30.8 2.7-44.5-1.5-6.3-1.9-10.3 3.6-6.4 7.1 13 11.5 35.6 12.8 52 11.1 5-.5 7.6-6.8 3.9-9.9-1.3-1.2-3.1-2.4-5-2.8zm11 11.5c-15.1 4-33.1 5.3-48.4 2.8-5.3-.9-8.4 4.5-4 8 13.7 11.1 40 10.4 55.4 6 5.3-1.5 6.9-8.4 2.2-11.4-1.6-.9-3.4-1.6-5.2-1.8z"/>
      <path fill="#5382A1" d="M102.7 85.9c-2.4.9-5.1 1.7-8.1 2.3 3.4-1.5 5.5-3.8 5-6.1-.7-3-6.5-4.4-15.1-4.8 5.7-.3 10.1-1.3 12.5-2.9 2-1.3 2.6-2.9 1.9-4.5-.9-1.9-4-3-8.8-3.4 3.1-.1 5.4-.5 6.8-1 2.1-.8 2.9-2 2.3-3.2-.8-1.7-3.9-2.5-8.8-2.6 1.3-.1 2.2-.2 2.9-.4 2.1-1.1 1.7-3.2-1.1-4.8-1.5-.9-3.4-1.6-5.8-2.1l-.8-2.8c4.3.7 8.3 1.8 11.6 3.6 5.8 3.1 6.8 7.9 2.5 12.2-2.1 2.1-5.1 3.7-8.6 4.9v.4c4.6.6 8.5 1.9 11.2 3.7 5.7 3.9 4.3 9.4-1.5 13.5v-1.1zM87.3 95.8c-15.9 3.5-33.5 4.1-48.8 2-6.5-.9-9.5 5.7-4 9.1 14.5 9.1 39.7 7.7 54.4 2.9 5.8-1.9 6.8-9 1.4-11.8-1-.5-2-1-3-1.4z"/>
    </svg>
  );
}

function TextIcon({ bg, text, color = "white" }: { bg: string; text: string; color?: string }) {
  return (
    <div 
      style={{ backgroundColor: bg, color }} 
      className="w-4 h-4 font-bold text-[8px] flex flex-shrink-0 items-center justify-center rounded-[3px] leading-none"
    >
      {text}
    </div>
  );
}

const skillCategories: SkillCategory[] = [
  {
    title: "LANGUAGES",
    skills: [
      { name: "Python", icon: <PythonIcon /> },
      { name: "C", icon: <CIcon /> },
      { name: "Java", icon: <JavaIcon /> },
    ],
  },
  {
    title: "AI & ML",
    skills: [
      { name: "TensorFlow", icon: <TextIcon bg="#FF6F00" text="TF" /> },
      { name: "PyTorch", icon: <TextIcon bg="#EE4C2C" text="PT" /> },
      { name: "scikit-learn", icon: <TextIcon bg="#F7931E" text="SK" /> },
      { name: "Pandas", icon: <TextIcon bg="#150458" text="PD" /> },
      { name: "NumPy", icon: <TextIcon bg="#013243" text="NP" /> },
    ],
  },
  {
    title: "CONCEPTS",
    skills: [
      { name: "Neural Networks", icon: <TextIcon bg="#333333" text="NN" /> },
      { name: "Feature Engineering", icon: <TextIcon bg="#333333" text="FE" /> },
      { name: "Data Preprocessing", icon: <TextIcon bg="#333333" text="DP" /> },
    ],
  },
  {
    title: "TOOLS & DATABASES",
    skills: [
      { name: "FastAPI", icon: <TextIcon bg="#009688" text="FA" /> },
      { name: "Docker", icon: <TextIcon bg="#2496ED" text="DK" /> },
      { name: "MySQL", icon: <TextIcon bg="#4479A1" text="SQL" /> },
      { name: "PostgreSQL", icon: <TextIcon bg="#336791" text="PG" /> },
    ],
  },
];

function SkillPill({ skill }: { skill: Skill }) {
  return (
    <div className="group flex items-center gap-2.5 px-3.5 py-2 rounded-full border border-border bg-[#111111] hover:border-[#333] hover:bg-[#1a1a1a] transition-all duration-300">
      {skill.icon}
      <span className="text-sm font-semibold text-fg/90">
        {skill.name}
      </span>
    </div>
  );
}

function CategoryBlock({ category, categoryIndex }: { category: SkillCategory; categoryIndex: number }) {
  return (
    <div className="relative">
      {/* Dashed divider */}
      {categoryIndex > 0 && (
        <div className="h-6 w-full" style={{ backgroundImage: "repeating-linear-gradient(-45deg, #1f1f1f, #1f1f1f 2px, transparent 2px, transparent 8px)" }} />
      )}

      <div className="p-6 md:p-8">
        {/* Category title */}
        <p className="text-[12px] font-sans font-bold tracking-[0.1em] text-white/60 mb-6 uppercase">
          {category.title}
        </p>

        {/* Skills grid */}
        <div className="flex flex-wrap gap-3">
          {category.skills.map((skill) => (
            <SkillPill key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition.medium}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
            Technologies I work with.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transition.medium, delay: 0.1 }}
          className="w-full bg-[#0a0a0a] border border-[#222] rounded-xl overflow-hidden"
        >
          {skillCategories.map((category, i) => (
            <CategoryBlock key={category.title} category={category} categoryIndex={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
