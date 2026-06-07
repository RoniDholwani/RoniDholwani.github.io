"use client";

import { useEffect, useRef, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { usePathname, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { useMounted } from "@/hooks/use-mounted";
import { cn } from "@/lib/utils";

const links = [
  { id: "home", label: "I Build Things That Actually Work" },
  { id: "about", label: "About Me" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Let's Connect" },
];

function scrollToSection(id: string) {
  const section = document.getElementById(id);
  if (!section) return;

  section.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.replaceState(null, "", window.location.pathname);
}

export function Navbar() {
  const [active, setActive] = useState("home");
  const [indicatorStyle, setIndicatorStyle] = useState({ top: 0, height: 0, opacity: 0 });
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();
  const pathname = usePathname();
  const router = useRouter();
  const navRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const isUserNavigating = useRef(false);
  const navigationTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Update the floating indicator position whenever active changes
  useEffect(() => {
    const btn = buttonRefs.current.get(active);
    const nav = navRef.current;

    if (!btn || !nav) return;

    const navRect = nav.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();

    setIndicatorStyle({
      top: btnRect.top - navRect.top,
      height: btnRect.height,
      opacity: 1,
    });
  }, [active]);

  // Pending section scroll after navigation to "/"
  useEffect(() => {
    const pending = sessionStorage.getItem("pending-section");

    if (pathname === "/" && pending) {
      sessionStorage.removeItem("pending-section");
      requestAnimationFrame(() => scrollToSection(pending));
    }
  }, [pathname]);

  // IntersectionObserver — track active section via scroll
  useEffect(() => {
    if (pathname !== "/") return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Skip auto-detection while user is clicking (let the click set active)
        if (isUserNavigating.current) return;

        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActive(visible.target.id);
          window.history.replaceState(null, "", window.location.pathname);
        }
      },
      {
        root: null,
        rootMargin: "-18% 0px -45% 0px",
        threshold: [0.18, 0.35, 0.55],
      }
    );

    links.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [pathname, active]);

  function handleNavClick(id: string) {
    if (active === id) return;

    setActive(id);

    // Lock observer updates briefly so the click-set active isn't overridden
    isUserNavigating.current = true;
    if (navigationTimeout.current) clearTimeout(navigationTimeout.current);
    navigationTimeout.current = setTimeout(() => {
      isUserNavigating.current = false;
    }, 1200);

    if (pathname !== "/") {
      sessionStorage.setItem("pending-section", id);
      router.push("/");
      return;
    }

    scrollToSection(id);
  }

  return (
    <>
      {/* ── Sidebar nav ────────────────────────────────────────────── */}
      <aside className="fixed left-0 top-0 bottom-0 z-50 w-12 border-r border-border/55 bg-background/82 backdrop-blur-xl sm:w-14 md:w-16">
        <div className="flex h-full flex-col items-center py-5 md:py-6">

          {/* Logo button */}
          <button
            type="button"
            suppressHydrationWarning
            aria-label="Go to home section"
            onClick={() => handleNavClick("home")}
            className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-full bg-primary font-display text-lg font-black italic leading-none text-primary-foreground shadow-sm transition-transform duration-300 hover:-translate-y-0.5 active:scale-95 sm:h-10 sm:w-10"
          >
            <span className="leading-none">R</span>
          </button>

          <div className="mt-5 h-px w-7 bg-border/80" />

          {/* Nav list */}
          <nav
            ref={navRef}
            className="relative mt-7 flex w-full flex-1 flex-col items-center justify-center gap-1 md:mt-8"
          >
            {/* ── Sliding pill indicator (morphs between items) ───── */}
            <span
              aria-hidden
              style={{
                top: indicatorStyle.top,
                height: indicatorStyle.height,
                opacity: indicatorStyle.opacity,
              }}
              className={cn(
                "pointer-events-none absolute inset-x-0 z-0 origin-top",
                "transition-[top,height,opacity]",
                // Spring-like cubic-bezier: fast out, slight overshoot, settle
                "[transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)]",
                "[transition-duration:420ms]"
              )}
            >
              {/* Background fill */}
              <span className="absolute inset-y-1 left-0 right-1 block rounded-r-lg bg-primary/12" />
              {/* Left accent bar */}
              <span className="absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r-full bg-primary" />
            </span>

            {links.map((link, index) => {
              const isActive = active === link.id;

              return (
                <button
                  key={link.id}
                  ref={(el) => {
                    if (el) buttonRefs.current.set(link.id, el);
                    else buttonRefs.current.delete(link.id);
                  }}
                  type="button"
                  suppressHydrationWarning
                  aria-label={link.label}
                  aria-current={isActive ? "true" : undefined}
                  onClick={() => handleNavClick(link.id)}
                  className="group relative z-10 grid h-11 w-full place-items-center rounded-r-lg font-display text-xs font-bold leading-none sm:h-12 sm:text-sm"
                >
                  {/* Number label */}
                  <span
                    className={cn(
                      "relative -translate-y-[2px] leading-none",
                      "transition-[color,transform] duration-300 ease-out",
                      isActive
                        ? "text-primary scale-[1.08]"
                        : "text-muted-foreground/65 group-hover:text-foreground group-hover:scale-[1.05]"
                    )}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Tooltip */}
                  <span className="pointer-events-none absolute left-[calc(100%+0.75rem)] top-1/2 z-20 hidden -translate-y-[calc(50%+1px)] translate-x-2 whitespace-nowrap rounded-full border border-border/70 bg-primary px-3.5 py-2 text-xs font-semibold text-primary-foreground opacity-0 shadow-lg transition-[opacity,transform] duration-200 ease-out group-hover:translate-x-0 group-hover:opacity-100 md:block dark:bg-primary dark:text-primary-foreground">
                    {link.label}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* ── Theme toggle ────────────────────────────────────────────── */}
      <header className="fixed top-4 right-4 z-50">
        <Button
          aria-label="Toggle theme"
          variant="ghost"
          size="icon"
          className="relative border border-border/70 bg-muted/75 shadow-sm backdrop-blur transition-transform duration-200 hover:scale-105 active:scale-95"
          onClick={() => setTheme(mounted && theme === "dark" ? "light" : "dark")}
        >
          <Sun className="h-4 w-4 scale-100 rotate-0 transition-all duration-300 dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-4 w-4 scale-0 rotate-90 transition-all duration-300 dark:scale-100 dark:rotate-0" />
        </Button>
      </header>
    </>
  );
}