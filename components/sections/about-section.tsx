"use client";

import { Github, Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/sections/section-heading";

export function AboutSection() {
  return (
    <section id="about" className="section-shell">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="About" title="Practical software with creative thinking" description="Developer focused on useful digital experiences" />
        <div className="mx-auto grid max-w-5xl gap-5 md:gap-6 lg:grid-cols-[1fr_0.74fr]">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-4 text-base leading-7 text-muted-foreground">
            <p>
              I am Ronit Dholwani, a BCA graduate and Android Developer passionate about building practical software solutions with clean design and smooth user experiences.
            </p>
            <p>
              My interest in technology started with curiosity about how software works and how applications can solve real-world problems. Over time, I explored Android development, UI/UX design, graphical designing, and digital marketing while continuously improving my technical and creative skills.
            </p>
            <p>
              I primarily work with Java, Kotlin, Jetpack Compose, Firebase, Android Studio, React, and Tailwind CSS to create modern applications and digital experiences.
            </p>
          </motion.div>
          <Card className="relative overflow-hidden text-center">
            <div className="relative mx-auto grid h-24 w-24 place-items-center overflow-hidden rounded-full border-4 border-muted bg-primary font-display text-4xl font-black italic leading-none text-primary-foreground shadow-sm sm:h-28 sm:w-28 sm:text-5xl">
              <span className="leading-none">R</span>
            </div>
            <h3 className="relative mt-5 text-center font-display text-2xl font-bold">Ronit Dholwani</h3>
            <p className="relative mt-3 text-center text-sm leading-6 text-muted-foreground">
              Android developer blending mobile engineering, Firebase-backed systems, and polished UI thinking.
            </p>
            <div className="relative mt-5 flex justify-center gap-2">
              {[
                { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/" },
                { icon: Github, label: "GitHub", href: "https://github.com/" },
                { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/" },
                { icon: Mail, label: "Email", href: "mailto:ronit@example.com" }
              ].map((item) => (
                <a key={item.label} suppressHydrationWarning aria-label={item.label} href={item.href} className="grid h-10 w-10 place-items-center rounded-full border border-border/70 bg-muted/40 transition hover:-translate-y-0.5 hover:border-foreground/35">
                  <item.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <Button className="relative mt-5 w-full" onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>
              <MessageCircle className="h-4 w-4" />Let&apos;s Connect
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}
