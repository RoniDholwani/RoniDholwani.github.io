import type { Metadata } from "next";
import { CertificationsSection } from "@/components/sections/certifications-section";

export const metadata: Metadata = {
  title: "Certifications | Ronit Dholwani",
  description:
    "Certifications, awards, internship letters, workshops, and achievements for Ronit Dholwani.",

  keywords: [
    "Ronit Dholwani",
    "Certifications",
    "Achievements",
    "Awards",
    "Workshops",
    "Internships",
    "Portfolio",
  ],

  alternates: {
    canonical: "/certifications",
  },

  openGraph: {
    title: "Certifications | Ronit Dholwani",
    description:
      "Certifications, awards, internship letters, workshops, and achievements for Ronit Dholwani.",
    url: "/certifications",
    type: "website",
    siteName: "Ronit Dholwani Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Ronit Dholwani Certifications Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Certifications | Ronit Dholwani",
    description:
      "Certifications, awards, internship letters, workshops, and achievements for Ronit Dholwani.",
    images: ["/og-image.svg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function CertificationsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <CertificationsSection />
    </main>
  );
}
