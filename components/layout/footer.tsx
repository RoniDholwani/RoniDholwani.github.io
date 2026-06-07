"use client";

import { useEffect, useState } from "react";

import { RemoteThemeLogo } from "@/components/brand/remote-theme-logo";
import { cn } from "@/lib/utils";

export function Footer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Smooth scrolling across website
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <footer className="relative overflow-hidden px-4 pb-8 pt-12 sm:px-6 md:px-8 lg:px-10">
      {/* Top Divider */}
      <div className="mx-auto max-w-6xl">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-border/60 to-transparent" />
      </div>

      {/* Main Footer */}
      <div
        className={cn(
          "mx-auto mt-10 flex w-full max-w-6xl transition-all duration-700 ease-out",
          // Mobile Layout
          "flex-col items-center text-center",
          // Desktop Layout
          "md:flex-row md:items-center md:text-left",
          mounted
            ? "translate-y-0 opacity-100"
            : "translate-y-4 opacity-0"
        )}
      >
        {/* Left Logo */}
        <div className="flex-shrink-0">
          <div
            className={cn(
              "group relative transition-all duration-300",
              "h-[72px] w-[72px] sm:h-[84px] sm:w-[84px] md:h-[105px] md:w-[105px]"
            )}
          >
            <RemoteThemeLogo
              sizes="105px"
              className="object-contain transition-all duration-300 group-hover:scale-[1.03] group-hover:opacity-90"
            />
          </div>
        </div>

        {/* Right Content Area */}
        <div
          className={cn(
            // Mobile
            "mt-4 flex w-full flex-col items-center px-2",
            // Desktop
            "md:mt-0 md:flex-1 md:items-center md:justify-center md:pl-16"
          )}
        >
          <div className="flex flex-col items-center md:items-center">
            {/* Main Heading */}
            <p
              className={cn(
                "font-semibold tracking-wide text-foreground",
                "text-[0.95rem] sm:text-base md:text-[1.15rem]",
                "leading-snug"
              )}
            >
              Designed &amp; Developed by Ronit Dholwani
            </p>

            {/* Subtitle */}
            <p
              className={cn(
                "mt-1.5 text-muted-foreground",
                "text-xs sm:text-sm md:text-[0.95rem]",
                "leading-relaxed",
                "max-w-[90vw] sm:max-w-[520px] md:max-w-none",
                "break-words"
              )}
            >
              Crafting practical digital experiences with clean design and modern
              development.
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div
        className={cn(
          "mx-auto mt-8 max-w-6xl transition-all duration-700 delay-100",
          mounted ? "opacity-100" : "opacity-0"
        )}
      >
        <p
          className={cn(
            "text-center tracking-wide text-muted-foreground/60",
            "text-[0.7rem] sm:text-xs"
          )}
        >
          © {new Date().getFullYear()} Ronit Dholwani. Built with TypeScript & Next.js
        </p>
      </div>

      {/* Bottom Glow */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-muted/20 to-transparent blur-2xl" />
    </footer>
  );
}