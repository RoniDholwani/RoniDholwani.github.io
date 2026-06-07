"use client";

import { motion } from "framer-motion";
import { Download, MessageCircle, Rocket } from "lucide-react";

import { AiChatbotCard } from "@/components/chatbot/ai-chatbot-card";

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

  window.history.replaceState(null, "", window.location.pathname);
}

export function HeroSection() {
  return (
    <section
      id="home"
      className="section-shell relative min-h-[100svh] overflow-hidden px-4 pt-20 sm:px-6 md:px-8 lg:px-10 xl:px-12"
    >
      <div className="absolute inset-0 grid-bg opacity-35" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(420px,0.78fr)] xl:gap-12">
        <motion.div
          className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-display text-5xl font-black leading-[0.98] tracking-normal sm:text-6xl lg:text-7xl xl:text-[5.6rem]">
            Ronit Dholwani
          </h1>

          <p className="mt-4 text-xl font-semibold leading-snug text-foreground sm:text-2xl lg:text-3xl">
            Building Software with Logic and Creativity
          </p>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg lg:mx-0">
            I build modern Android applications using Java, Kotlin, Jetpack Compose, Firebase, and clean UI principles. From freelance Android apps to internship projects and creative digital work, I enjoy transforming ideas into practical and user-friendly experiences.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3 lg:justify-start">
            <button
              type="button"
              suppressHydrationWarning
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:brightness-105"
              onClick={() => scrollToSection("projects")}
            >
              <Rocket className="h-4 w-4" />
              View Projects
            </button>

            <a
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-border/70 px-5 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-foreground/35"
              href="https://pdfhost.io/v/HgfzcrA52B_Ronit_Dholwani-Resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>

            <button
              type="button"
              suppressHydrationWarning
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-border/70 px-5 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-foreground/35"
              onClick={() => scrollToSection("contact")}
            >
              <MessageCircle className="h-4 w-4" />
              Let&apos;s Connect
            </button>
          </div>
        </motion.div>

        <div className="mx-auto w-full max-w-[560px] lg:mx-0 lg:justify-self-end">
          <AiChatbotCard />
        </div>
      </div>
    </section>
  );
}
