import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { experiences } from "@/data/portfolio";
import { ExperienceCard } from "@/components/cards/experience-card";
import { SectionHeading } from "@/components/sections/section-heading";

export function ExperienceSection({ preview = false }: { preview?: boolean }) {
  const visibleExperiences = preview ? experiences.slice(0, 3) : experiences;

  return (
    <section id="experience" className="section-shell">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Experience" title="Code, products, and real collaboration" description="Product thinking backed by practical execution" />
        <div className="grid gap-4 lg:grid-cols-3">
          {visibleExperiences.map((experience, index) => (
            <ExperienceCard key={`${experience.role}-${experience.organization}`} experience={experience} index={index} />
          ))}
        </div>
        {preview ? (
          <div className="mt-6 text-center">
            <Link className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:brightness-105" href="/experiences">
              See All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
