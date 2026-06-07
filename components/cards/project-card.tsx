"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Maximize2, X } from "lucide-react";
import type { Project } from "@/types/portfolio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const showGithub = project.showGithub !== false;
  const showDemo = project.showDemo === true && project.demo !== "#";

  return (
    <>
      <motion.article
        className="
          glass
          group
          flex
          h-full
          flex-col
          overflow-hidden
          rounded-lg
          p-4
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:shadow-lg
        "
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{
          duration: 0.45,
          delay: index * 0.06,
        }}
      >
        <div
          className="
            relative
            aspect-[16/10]
            overflow-hidden
          rounded-lg
            border
            border-border/60
            bg-muted/65
          "
        >
          <Image
            src={project.previewImage}
            alt={`${project.title} preview`}
            fill
            sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 90vw"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col p-1 pt-4">
          <h3
            className="
              font-display
              text-lg
              font-bold
              leading-tight
            "
          >
            {project.title}
          </h3>

          <p
            className="
              mt-2
              flex-1
              text-sm
              leading-6
              text-muted-foreground
            "
          >
            {project.description}
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {showGithub ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} GitHub repository`}
                className="
                  inline-flex
                  h-9
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  border
                  border-border/70
                  px-3
                  text-sm
                  font-semibold
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-foreground/35
                "
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            ) : null}

            {showDemo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} live demo`}
                className="
                  inline-flex
                  h-9
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  border
                  border-border/70
                  px-3
                  text-sm
                  font-semibold
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-foreground/35
                "
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            ) : null}

            <Button
              variant="secondary"
              size="sm"
              onClick={() => setOpen(true)}
            >
              <Maximize2 className="h-4 w-4" />
              Details
            </Button>
          </div>
        </div>
      </motion.article>

      <AnimatePresence>
        {open && (
          <motion.div
            className="
              fixed
              inset-0
              z-[80]
              flex
              items-center
              justify-center
              bg-slate-950/80
              p-3
              sm:p-4
              backdrop-blur-md
            "
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="
                glass
                w-full
                max-w-3xl
                rounded-lg
                p-5
                sm:p-7
              "
              initial={{
                opacity: 0,
                scale: 0.95,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
              }}
              transition={{
                duration: 0.25,
              }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-primary">
                    Project Details
                  </p>

                  <h3
                    id="project-title"
                    className="
                      font-display
                      text-2xl
                      font-bold
                      sm:text-3xl
                    "
                  >
                    {project.title}
                  </h3>
                </div>

                <Button
                  aria-label="Close project details"
                  size="icon"
                  variant="ghost"
                  onClick={() => setOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <p className="mt-4 leading-7 text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>

              <ul
                className="
                  mt-6
                  grid
                  gap-3
                  text-sm
                  text-muted-foreground
                  sm:grid-cols-2
                "
              >
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="
                      rounded-lg
                      border
                      border-border/70
                      bg-background/35
                      p-4
                      leading-6
                    "
                  >
                    {feature}
                  </li>
                ))}
              </ul>

              {showGithub || showDemo ? (
                <div className="mt-6 flex flex-wrap gap-3">
                  {showGithub ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline">
                        <Github className="h-4 w-4" />
                        GitHub
                      </Button>
                    </a>
                  ) : null}

                  {showDemo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button>
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </Button>
                    </a>
                  ) : null}
                </div>
              ) : null}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}