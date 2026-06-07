import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { certifications } from "@/data/portfolio";
import { CertificationCard } from "@/components/cards/certification-card";
import { SectionHeading } from "@/components/sections/section-heading";

export function CertificationsSection({ preview = false }: { preview?: boolean }) {
  const visibleCertifications = preview ? certifications.slice(0, 3) : certifications;

  return (
    <section id="certifications" className="section-shell">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Certifications" title="Learning backed by real practice" description="Growth driven by curiosity and consistency" />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {visibleCertifications.map((certification, index) => (
            <CertificationCard key={`${certification.title}-${certification.issuer}`} certification={certification} index={index} />
          ))}
        </div>
        {preview ? (
          <div className="mt-6 text-center">
            <Link className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:brightness-105" href="/certifications">
              See All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
