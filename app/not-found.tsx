"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main
      aria-labelledby="not-found-title"
      className="fixed inset-0 z-[120] isolate flex flex-col items-center justify-center overflow-hidden bg-[#0B2D5B] px-5 py-10 text-[#F4EFD8]"
    >
      {/* Subtle dot-grid background */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(244,239,216,0.7) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      {/* Soft radial glow at center */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_46%,rgba(244,239,216,0.07),transparent_70%)]"
        aria-hidden="true"
      />

      {/* Global selection styles */}
      <style jsx global>{`
        ::selection {
          background-color: #F4EFD8;
          color: #0B2D5B;
        }
        ::-moz-selection {
          background-color: #F4EFD8;
          color: #0B2D5B;
        }
        .not-found-404::selection {
          background-color: #F4EFD8;
          color: #0B2D5B;
        }
        .not-found-404::-moz-selection {
          background-color: #F4EFD8;
          color: #0B2D5B;
        }
      `}</style>

      {/* ── 404 Visual ── */}
      <motion.div
        className="relative w-full max-w-2xl mx-auto flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        aria-hidden="true"
      >
        {/* Professional 404 Typography - HTML element for proper selection */}
        <motion.h1
          className="not-found-404 relative inline-block text-center font-extrabold leading-none"
          style={{
            fontSize: "clamp(8rem, 20vw, 12rem)",
            fontFamily: "'Inter', 'SF Pro Display', -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
            letterSpacing: "-0.04em",
            background: "linear-gradient(135deg, rgba(244,239,216,0.95) 0%, rgba(244,239,216,1) 45%, rgba(244,239,216,1) 55%, rgba(244,239,216,0.85) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            filter: "drop-shadow(0 4px 6px rgba(244,239,216,0.05))",
            userSelect: "text",
            cursor: "text",
          }}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          404
          {/* Elegant period/dot positioned relative to the text */}
          <motion.span
            className="absolute inline-block"
            style={{
              bottom: "0.15em",
              right: "-0.15em",
              width: "clamp(0.5rem, 1.2vw, 0.75rem)",
              height: "clamp(0.5rem, 1.2vw, 0.75rem)",
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.5, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.8, ease: "easeOut" }}
          >
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <circle cx="12" cy="12" r="10" fill="#F4EFD8" opacity="0.5" />
            </svg>
          </motion.span>
        </motion.h1>
      </motion.div>

      {/* ── Professional Text Content ── */}
      <motion.div
        className="relative z-10 mt-4 sm:mt-6 max-w-lg mx-auto text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.3, ease: "easeOut" }}
      >
        <div className="bg-[#F4EFD8]/[0.04] backdrop-blur-sm border border-[#F4EFD8]/10 rounded-lg px-6 py-5 sm:px-8 sm:py-6">
          <p
            id="not-found-title"
            className="text-[#F4EFD8]/70 text-sm leading-relaxed sm:text-base sm:leading-relaxed font-light"
          >
            Looks like this page doesn&apos;t exist (yet). Just like a blank space
            in a conversation, there&apos;s nothing to respond to.
          </p>
          <div className="mt-4 pt-4 border-t border-[#F4EFD8]/10">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-[#F4EFD8] text-sm font-medium underline decoration-[#F4EFD8]/40 decoration-1 underline-offset-4 transition-all duration-200 hover:text-white hover:decoration-[#F4EFD8]/80"
            >
              <svg 
                className="w-4 h-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth="2"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Go back to home and rejoin the conversation
            </Link>
          </div>
        </div>
      </motion.div>
    </main>
  );
}