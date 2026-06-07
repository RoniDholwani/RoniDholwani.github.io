import dynamic from "next/dynamic";

import { AboutSection } from "@/components/sections/about-section";
import { HeroSection } from "@/components/sections/hero-section";

const ExperienceSection = dynamic(
  () =>
    import("@/components/sections/experience-section").then(
      (module) => module.ExperienceSection
    )
);

const ProjectsSection = dynamic(
  () =>
    import("@/components/sections/projects-section").then(
      (module) => module.ProjectsSection
    )
);

const SkillsSection = dynamic(
  () =>
    import("@/components/sections/skills-section").then(
      (module) => module.SkillsSection
    )
);

const CertificationsSection = dynamic(
  () =>
    import("@/components/sections/certifications-section").then(
      (module) => module.CertificationsSection
    )
);

const ContactSection = dynamic(
  () =>
    import("@/components/sections/contact-section").then(
      (module) => module.ContactSection
    )
);

export default function HomePage() {
  return (
    <div
      className="relative w-full overflow-x-hidden"
      aria-label="Portfolio Homepage"
    >
      <HeroSection />
      <AboutSection />
      <ExperienceSection preview />
      <ProjectsSection preview />
      <SkillsSection />
      <CertificationsSection preview />
      <ContactSection />
    </div>
  );
}
