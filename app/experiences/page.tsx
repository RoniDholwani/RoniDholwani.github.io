import type { Metadata } from "next";
import { ExperienceSection } from "@/components/sections/experience-section";

const pageTitle = "Experience | Ronit Dholwani";
const pageDescription =
  "Explore the professional experience, internships, freelance work, design contributions, technical support roles, and career journey of Ronit Dholwani.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,

  keywords: [
    "Ronit Dholwani",
    "Experience",
    "Internships",
    "Freelance",
    "Technical Support",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Portfolio",
    "Professional Experience",
  ],

  alternates: {
    canonical: "/experiences",
  },

  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/experiences",
    siteName: "Ronit Dholwani Portfolio",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Ronit Dholwani Experience Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/og-image.svg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ExperiencesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden" aria-label="Professional Experience Page">
      <ExperienceSection />
    </main>
  );
}
