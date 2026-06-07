import type { Metadata } from "next";
import { ProjectsSection } from "@/components/sections/projects-section";

const pageTitle = "Projects | Ronit Dholwani";
const pageDescription =
  "Explore Android, Firebase, Jetpack Compose, Java Desktop, MERN Stack, Next.js, and creative technology projects developed by Ronit Dholwani.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,

  keywords: [
    "Ronit Dholwani",
    "Projects",
    "Portfolio Projects",
    "Android Development",
    "Firebase",
    "Jetpack Compose",
    "Java Desktop Application",
    "React",
    "Next.js",
    "TypeScript",
    "MERN Stack",
    "Frontend Developer",
    "Software Developer",
  ],

  alternates: {
    canonical: "/projects",
  },

  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/projects",
    siteName: "Ronit Dholwani Portfolio",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Ronit Dholwani Projects Portfolio",
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

export default function ProjectsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden" aria-label="Projects Portfolio Page">
      <ProjectsSection />
    </main>
  );
}
