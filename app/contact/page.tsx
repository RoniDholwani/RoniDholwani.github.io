import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/contact-section";

const pageTitle = "Contact | Ronit Dholwani";
const pageDescription =
  "Contact Ronit Dholwani for Android development, Kotlin, Java, Flutter, Firebase, MERN Stack, and software development opportunities in Vadodara, Gujarat, India.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/contact",
    siteName: "Ronit Dholwani Portfolio",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Ronit Dholwani Contact Portfolio",
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

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-x-hidden" aria-label="Contact Ronit Dholwani">
      <ContactSection />
    </main>
  );
}