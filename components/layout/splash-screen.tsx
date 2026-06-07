"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PANEL_COUNT = 12;
const SPLASH_ENABLED_PATHS = new Set([
  "/",
  "/projects",
  "/experiences",
  "/certifications",
]);

export function SplashScreen() {
  const pathname = usePathname();
  const [phase, setPhase] = useState<"typing" | "hold" | "exit" | "done">("typing");

  const HEADING = "Ronit Dholwani";
  const SUBHEADING = "Portfolio";

  const [headingText, setHeadingText] = useState("");
  const [subText, setSubText] = useState("");
  const headingDone = useRef(false);
  const subDone = useRef(false);

  const isEnabled = SPLASH_ENABLED_PATHS.has(pathname);

  // --- Typewriter effect ---
  useEffect(() => {
    if (phase !== "typing") return;

    const headingTimer = setInterval(() => {
      i++;
      setHeadingText(HEADING.slice(0, i));
      if (i >= HEADING.length) {
        clearInterval(headingTimer);
        headingDone.current = true;

        // Small pause, then type sub-heading
        const subTimer = setTimeout(() => {
          let j = 0;
          const subInterval = setInterval(() => {
            j++;
            setSubText(SUBHEADING.slice(0, j));
            if (j >= SUBHEADING.length) {
              clearInterval(subInterval);
              subDone.current = true;
              // Quick transition to hold phase
              setTimeout(() => setPhase("hold"), 200);
            }
          }, 70);
        }, 150);

        return () => clearTimeout(subTimer);
      }
    }, 60);

    let i = 0;

    return () => {
      clearInterval(headingTimer);
    };
  }, [phase]);

  // --- Hold then exit (reduced hold time) ---
  useEffect(() => {
    if (phase !== "hold") return;
    const t = setTimeout(() => setPhase("exit"), 400);
    return () => clearTimeout(t);
  }, [phase]);

  // --- Done: unmount after exit animation completes ---
  useEffect(() => {
    if (phase !== "exit") return;
    const t = setTimeout(() => setPhase("done"), 1100);
    return () => clearTimeout(t);
  }, [phase]);

  if (!isEnabled || phase === "done") return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="splash-screen"
        className="fixed inset-0 z-[100] overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {/* Background with subtle gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-[#0B2D5B]"
          animate={phase === "exit" ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6, ease: "easeInOut" }}
        />
        
        {/* Subtle radial gradient for depth */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(circle at center, rgba(244,239,216,0.03) 0%, transparent 70%)",
          }}
        />

        {/* Subtle noise / grain texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "180px 180px",
          }}
        />

        {/* Center text block */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center gap-4"
          animate={
            phase === "exit"
              ? { opacity: 0, y: -20, filter: "blur(4px)" }
              : { opacity: 1, y: 0, filter: "blur(0px)" }
          }
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Main heading */}
          <h1
            className="text-[#F4EFD8] font-black tracking-tight select-none relative"
            style={{
              fontSize: "clamp(2.5rem, 6.5vw, 5rem)",
              letterSpacing: "-0.02em",
              fontFamily: "'Georgia', 'Times New Roman', serif",
              lineHeight: 1.1,
            }}
          >
            {headingText}
            {/* Blinking cursor — visible only while heading is typing */}
            {!headingDone.current && phase === "typing" && (
              <motion.span
                className="inline-block w-[3px] h-[0.85em] bg-[#F4EFD8] ml-1 align-middle"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.55, repeat: Infinity, repeatType: "reverse" }}
              />
            )}
          </h1>

          {/* Sub-heading with smooth appearance */}
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={headingDone.current ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <p
              className="text-[#F4EFD8]/60 font-light tracking-[0.35em] uppercase select-none"
              style={{
                fontSize: "clamp(0.75rem, 1.6vw, 1rem)",
                letterSpacing: "0.35em",
                fontFamily: "'Georgia', 'Times New Roman', serif",
              }}
            >
              {subText}
              {/* Cursor visible only while sub-heading is typing */}
              {!subDone.current && headingDone.current && phase === "typing" && (
                <motion.span
                  className="inline-block w-[2px] h-[0.8em] bg-[#F4EFD8]/60 ml-1 align-middle"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.55, repeat: Infinity, repeatType: "reverse" }}
                />
              )}
            </p>
          </motion.div>
        </motion.div>

        {/* Curtain exit animation with staggered panels */}
        {phase === "exit" && (
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: PANEL_COUNT }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute top-0 bottom-0 bg-[#0B2D5B]"
                style={{
                  left: `${(i / PANEL_COUNT) * 100}%`,
                  width: `${100 / PANEL_COUNT + 0.5}%`,
                }}
                initial={{ y: 0 }}
                animate={{ y: "-100%" }}
                transition={{
                  duration: 0.7,
                  ease: [0.76, 0, 0.24, 1],
                  delay: i * 0.045,
                }}
              />
            ))}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}