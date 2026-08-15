"use client";

import { motion } from "framer-motion";
import { transition } from "@/lib/motion";

interface Skill {
  name: string;
  icon: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "LANGUAGES",
    skills: [
      { name: "Python", icon: "🐍" },
      { name: "C", icon: "⚙️" },
      { name: "Java", icon: "☕" },
    ],
  },
];

function SkillPill({ skill, index }: { skill: Skill; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ ...transition.medium, delay: index * 0.05 }}
      className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-border bg-surface-elevated/50 hover:border-border-strong hover:bg-surface-elevated transition-all duration-300 cursor-default"
    >
      <span className="text-base" aria-hidden>{skill.icon}</span>
      <span className="text-sm font-medium text-fg/90 group-hover:text-fg transition-colors">
        {skill.name}
      </span>
    </motion.div>
  );
}

function CategoryBlock({ category, categoryIndex }: { category: SkillCategory; categoryIndex: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ ...transition.medium, delay: categoryIndex * 0.1 }}
    >
      {/* Dashed divider */}
      {categoryIndex > 0 && (
        <div className="my-10 border-t border-dashed border-border" />
      )}

      {/* Category title */}
      <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-accent mb-6">
        {category.title}
      </p>

      {/* Skills grid */}
      <div className="flex flex-wrap gap-3">
        {category.skills.map((skill, i) => (
          <SkillPill key={skill.name} skill={skill} index={i} />
        ))}
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32 scroll-mt-24 border-t border-border">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={transition.medium}
        className="mb-12"
      >
        <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-dim mb-5">
          Stack
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] leading-[1.1]">
          Technologies I work with.
        </h2>
      </motion.div>

      <div className="max-w-2xl">
        {skillCategories.map((category, i) => (
          <CategoryBlock key={category.title} category={category} categoryIndex={i} />
        ))}
      </div>
    </section>
  );
}
