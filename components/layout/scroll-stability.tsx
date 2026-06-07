"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollStability() {
  const pathname = usePathname();

  useEffect(() => {
    const previousRestoration = window.history.scrollRestoration;

    window.history.scrollRestoration = "manual";

    const navigation = performance.getEntriesByType("navigation")[0] as
      | PerformanceNavigationTiming
      | undefined;

    if (
      pathname === "/" &&
      !window.location.hash &&
      navigation?.type !== "back_forward" &&
      !sessionStorage.getItem("pending-section")
    ) {
      window.scrollTo(0, 0);
    }

    return () => {
      window.history.scrollRestoration = previousRestoration;
    };
  }, [pathname]);

  return null;
}
