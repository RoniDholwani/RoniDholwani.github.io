"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/portfolio";
import { SectionHeading } from "@/components/sections/section-heading";

export function SkillsSection() {
  return (
    <section id="skills" className="section-shell">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Skills" title="Tools for building digital experiences" description="Technical and creative skills combined" />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.article
              key={category.title}
              className="glass rounded-lg p-5 sm:p-6"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-border/70 bg-muted text-foreground">
                  <category.icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg font-bold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border/60 bg-background/35 px-3 py-1.5 text-xs text-muted-foreground transition hover:-translate-y-0.5 hover:border-foreground/35 hover:text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
