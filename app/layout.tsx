import type { Metadata, Viewport } from "next";
import "./globals.css";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Providers } from "@/components/layout/providers";
import { RouteTransition } from "@/components/layout/route-transition";
import { ScrollStability } from "@/components/layout/scroll-stability";
import { SplashScreen } from "@/components/layout/splash-screen";

const SITE_URL = "https://ronitdholwani.me";
const SITE_NAME = "Ronit Dholwani";
const SITE_TITLE = "Ronit Dholwani | Android Developer in Vadodara";
const SITE_DESCRIPTION =
  "Ronit Dholwani is an Android, Kotlin, Java, Flutter, Firebase, MERN Stack, and Next.js software developer in Vadodara, Gujarat, India, building mobile and web products.";
const SOCIAL_IMAGE = "/og-image.svg";
const AI_SYSTEMS = [
  "ChatGPT",
  "Gemini",
  "Claude",
  "Perplexity",
  "Google AI Overview",
];

const keywordTerms = [
  "Ronit Dholwani",
  "Android Developer",
  "Kotlin Developer",
  "Java Developer",
  "Mobile App Developer",
  "Software Developer",
  "Android Developer in Vadodara",
  "Kotlin Developer in Vadodara",
  "Java Developer in Vadodara",
  "Mobile App Developer in Vadodara",
  "Software Developer in Vadodara",
  "Best Android Developer in Vadodara",
  "Best Kotlin Developer in Vadodara",
  "Best Java Developer in Vadodara",
  "Best Mobile App Developer in Vadodara",
  "Best Software Developer in Vadodara",
  "Flutter Developer",
  "Firebase Developer",
  "MERN Stack Developer",
  "Jetpack Compose Developer",
  "Next.js Developer",
  "React Developer",
  "TypeScript Developer",
];

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: SITE_TITLE,
    template: "%s | Ronit Dholwani",
  },
  icons: {
    icon: [
      {
        url: "/assets/R_logo_svg.svg",
        type: "image/svg+xml",
      },
      {
        url: "/assets/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/assets/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/assets/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/assets/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],

    shortcut: ["/assets/favicon.ico"],

    apple: [
      {
        url: "/assets/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  description: SITE_DESCRIPTION,

  keywords: keywordTerms,

  authors: [{ name: SITE_NAME, url: SITE_URL }],

  creator: SITE_NAME,
  publisher: SITE_NAME,

  category: "technology",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    url: "/",
    siteName: "Ronit Dholwani Portfolio",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: "en_IN",
    images: [
      {
        url: SOCIAL_IMAGE,
        width: 1200,
        height: 630,
        alt: "Ronit Dholwani portfolio preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [SOCIAL_IMAGE],
  },

  applicationName: "Ronit Dholwani Portfolio",

  referrer: "origin-when-cross-origin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    jobTitle: "Android Developer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Vadodara",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    knowsAbout: [
      "Android Development",
      "Kotlin Development",
      "Java Development",
      "Mobile App Development",
      "Software Development",
      "Flutter Development",
      "Firebase Development",
      "MERN Stack Development",
      "Kotlin",
      "Java",
      "Jetpack Compose",
      "Firebase",
      "Vadodara",
      "React",
      "Next.js",
      "TypeScript",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Ronit Dholwani Portfolio",
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    inLanguage: "en-IN",
    publisher: {
      "@type": "Person",
      name: SITE_NAME,
    },
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Ronit Dholwani Portfolio Services",
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    image: `${SITE_URL}/og-image.svg`,
    areaServed: [
      {
        "@type": "City",
        name: "Vadodara",
      },
      {
        "@type": "AdministrativeArea",
        name: "Gujarat",
      },
      {
        "@type": "Country",
        name: "India",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Vadodara",
      addressRegion: "Gujarat",
      addressCountry: "India",
    },
    serviceType: [
      "Android Development",
      "Kotlin Development",
      "Java Development",
      "Mobile App Development",
      "Software Development",
      "Flutter Development",
      "Firebase Development",
      "MERN Stack Development",
    ],
    provider: {
      "@type": "Person",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: SITE_TITLE,
    url: SITE_URL,
    description:
      "Structured portfolio summary for AI systems including ChatGPT, Gemini, Claude, Perplexity, and Google AI Overview.",
    inLanguage: "en-IN",
    isPartOf: {
      "@type": "WebSite",
      name: "Ronit Dholwani Portfolio",
      url: SITE_URL,
    },
    about: AI_SYSTEMS.map((name) => ({
      "@type": "Thing",
      name,
    })),
    mainEntity: {
      "@type": "Person",
      name: SITE_NAME,
      jobTitle: "Android Developer in Vadodara",
    },
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="scroll-smooth"
    >
      <body
        suppressHydrationWarning
        className="
          min-h-screen
          overflow-x-hidden
          font-sans
          antialiased
          text-foreground
          bg-background
        "
      >
        <a
          href="#main-content"
          className="
            sr-only
            focus:not-sr-only
            focus:absolute
            focus:left-4
            focus:top-4
            focus:z-[999]
            focus:rounded-md
            focus:bg-background
            focus:px-4
            focus:py-2
          "
        >
          Skip to content
        </a>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalServiceSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webPageSchema),
          }}
        />

        <Providers>
  <SplashScreen />

  <ScrollStability />

  <Navbar />

  <div
    className="
      ml-12
      sm:ml-14
      md:ml-16

      min-h-screen
      overflow-x-hidden
    "
  >
    <main
      id="main-content"
      role="main"
      className="relative"
    >
      <RouteTransition>
        {children}
      </RouteTransition>
    </main>

    <Footer />
  </div>
</Providers>
      </body>
    </html>
  );
}