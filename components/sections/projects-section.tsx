import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import { ProjectCard } from "@/components/cards/project-card";
import { SectionHeading } from "@/components/sections/section-heading";

export function ProjectsSection({ preview = false }: { preview?: boolean }) {
  const visibleProjects = preview ? projects.slice(0, 3) : projects;

  return (
    <section id="projects" className="section-shell">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Projects" title="Apps and systems built to solve problems" description="Mobile-first projects with real utility" />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
        {preview ? (
          <div className="mt-6 text-center">
            <Link className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:brightness-105" href="/projects">
              See All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
