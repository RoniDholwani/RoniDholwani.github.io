"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";
import type { Experience } from "@/types/portfolio";

export function ExperienceCard({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) {
  return (
    <motion.article
      className="glass group relative rounded-lg p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:p-5"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
      }}
    >
      <div className="flex items-start gap-3">
        <span
          className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border/70 bg-muted text-foreground transition-transform duration-300 group-hover:scale-105"
          aria-hidden="true"
        >
          <BriefcaseBusiness className="h-5 w-5" />
        </span>

        <div className="min-w-0 flex-1">
          <h3 className="font-display text-lg font-bold leading-tight sm:text-xl">
            {experience.role}
          </h3>

          <p className="mt-1 text-sm font-medium text-muted-foreground">
            {experience.organization}
            {experience.client ? ` - Client: ${experience.client}` : ""}
          </p>
        </div>
      </div>

      <ul className="mt-4 space-y-2 text-sm leading-6 text-muted-foreground">
        {experience.points.map((point) => (
          <li key={point} className="flex items-start gap-3">
            <span
              className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground"
              aria-hidden="true"
            />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
