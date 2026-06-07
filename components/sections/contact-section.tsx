"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Github, Instagram, Linkedin, Mail, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeading } from "@/components/sections/section-heading";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactValues = z.infer<typeof contactSchema>;

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(values: ContactValues) {
    setStatus("idle");

    try {
      // Optional: Save to Supabase
      if (supabase) {
        await supabase.from("contacts").insert(values);
      }

      // Send email
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      reset();
      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  const contactEmail =
    process.env.NEXT_PUBLIC_CONTACT_EMAIL || "";

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href:
        process.env.NEXT_PUBLIC_LINKEDIN_URL || "#",
    },
    {
      icon: Github,
      label: "GitHub",
      href:
        process.env.NEXT_PUBLIC_GITHUB_URL || "#",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href:
        process.env.NEXT_PUBLIC_INSTAGRAM_URL || "#",
    },
  ];

  return (
    <section id="contact" className="section-shell">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something meaningful"
          description="Open to collaborations and creative projects"
        />

        <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Left Card */}
          <Card>
            <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-muted/50 px-3 py-1 text-sm text-foreground">
              <span className="h-2 w-2 rounded-full bg-foreground" />
              Available for projects
            </div>

            <h3 className="mt-5 font-display text-2xl font-bold">
              Contact information
            </h3>

            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Share a project idea, internship opportunity,
              collaboration note, or a quick hello. I usually
              respond with context and next steps.
            </p>

            <div className="mt-5 grid gap-3">
              {/* Email */}
              <a
                className="flex items-center gap-3 rounded-lg border border-border/70 bg-background/30 p-3 transition hover:-translate-y-0.5 hover:border-foreground/35"
                href={`mailto:${contactEmail}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="h-5 w-5" />
                {contactEmail}
              </a>

              {/* Social Links */}
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  className="flex items-center gap-3 rounded-lg border border-border/70 bg-background/30 p-3 transition hover:-translate-y-0.5 hover:border-foreground/35"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <item.icon className="h-5 w-5" />
                  {item.label}
                </a>
              ))}
            </div>
          </Card>

          {/* Right Card */}
          <Card>
            <form
              className="grid gap-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="Name"
                  error={errors.name?.message}
                >
                  <Input
                    placeholder="Your name"
                    {...register("name")}
                  />
                </Field>

                <Field
                  label="Email"
                  error={errors.email?.message}
                >
                  <Input
                    placeholder="you@example.com"
                    {...register("email")}
                  />
                </Field>
              </div>

              <Field
                label="Subject"
                error={errors.subject?.message}
              >
                <Input
                  placeholder="Project, collaboration, or opportunity"
                  {...register("subject")}
                />
              </Field>

              <Field
                label="Message"
                error={errors.message?.message}
              >
                <Textarea
                  placeholder="Tell me what you want to build..."
                  {...register("message")}
                />
              </Field>

              <Button
                disabled={isSubmitting}
                className="w-full"
              >
                <Send className="h-4 w-4" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>

              {status === "success" ? (
                <p className="rounded-md border border-emerald-400/40 bg-emerald-400/10 p-3 text-sm text-emerald-500">
                  Message sent successfully
                </p>
              ) : null}

              {status === "error" ? (
                <p className="rounded-md border border-rose-400/40 bg-rose-400/10 p-3 text-sm text-rose-500">
                  Could not send message.
                </p>
              ) : null}
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium">
      {label}
      {children}

      {error ? (
        <span className="text-xs font-normal text-rose-500">
          {error}
        </span>
      ) : null}
    </label>
  );
}