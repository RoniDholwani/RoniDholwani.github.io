"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { BadgeCheck, Minus, Plus, X } from "lucide-react";
import type { Certification } from "@/types/portfolio";
import { Button } from "@/components/ui/button";

export function CertificationCard({
  certification,
  index,
}: {
  certification: Certification;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <>
      <motion.button
        type="button"
        suppressHydrationWarning
        aria-label={`View certificate ${certification.title}`}
        className="
          glass
          group
          flex
          h-full
          w-full
          flex-col
          rounded-lg
          p-4
          text-left
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:shadow-lg
          focus:outline-none
          focus:ring-2
          focus:ring-primary
          focus:ring-offset-2
        "
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{
          duration: 0.45,
          delay: index * 0.05,
        }}
        onClick={() => setOpen(true)}
      >
        <div
          className="
            relative
            aspect-[4/3]
            overflow-hidden
            rounded-xl
            border
            border-border/60
            bg-muted/70
            p-3
          "
        >
          <div className="absolute inset-0 grid-bg opacity-35" />

          <div
            className="
              relative
              h-full
              rounded-lg
              border
              border-border/70
              bg-background/40
              backdrop-blur-sm
            "
          >
            {imageFailed ? (
              <div className="flex h-full items-center justify-center p-6 text-center">
                <BadgeCheck className="h-10 w-10 text-primary" />
              </div>
            ) : (
              <Image
                src={certification.image}
                alt={`${certification.title} certificate`}
                fill
                sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
                className="object-contain p-2 transition duration-300 group-hover:scale-[1.025]"
                loading={index < 3 ? "eager" : "lazy"}
                onError={() => setImageFailed(true)}
              />
            )}

            <div className="absolute inset-x-2 bottom-2 flex items-center justify-between gap-3 rounded-md border border-border/60 bg-background/85 px-3 py-2 shadow-sm backdrop-blur">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground sm:text-xs">
                Certificate Preview
              </p>
              <BadgeCheck className="h-4 w-4 shrink-0 text-primary" />
            </div>
          </div>
        </div>

        <h3
          className="
            mt-3
            min-h-[3.25rem]
            font-display
            text-base
            font-bold
            transition-colors
            duration-300
            group-hover:text-foreground
            sm:text-lg
          "
        >
          {certification.title}
        </h3>

        <p className="mt-auto text-sm text-muted-foreground">
          {certification.issuer}
        </p>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="
              fixed
              inset-0
              z-[80]
              flex
              items-center
              justify-center
              bg-slate-950/80
              p-3
              sm:p-4
              backdrop-blur-md
            "
            role="dialog"
            aria-modal="true"
            aria-labelledby="certificate-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="
                glass
                w-full
                max-w-4xl
                rounded-lg
                p-4
                sm:p-5
                lg:p-6
              "
              initial={{
                opacity: 0,
                scale: 0.95,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
              }}
              transition={{
                duration: 0.25,
              }}
            >
              <div
                className="
                  mb-4
                  flex
                  flex-col
                  gap-4
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                "
              >
                <div className="min-w-0">
                  <h3
                    id="certificate-title"
                    className="
                      font-display
                      text-xl
                      font-bold
                      sm:text-2xl
                      lg:text-3xl
                    "
                  >
                    {certification.title}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    {certification.issuer}
                  </p>
                </div>

                <div className="flex shrink-0 gap-2">
                  <Button
                    aria-label="Zoom out"
                    size="icon"
                    variant="ghost"
                    onClick={() =>
                      setZoom((value) =>
                        Math.max(0.8, value - 0.1)
                      )
                    }
                  >
                    <Minus className="h-4 w-4" />
                  </Button>

                  <Button
                    aria-label="Zoom in"
                    size="icon"
                    variant="ghost"
                    onClick={() =>
                      setZoom((value) =>
                        Math.min(1.35, value + 0.1)
                      )
                    }
                  >
                    <Plus className="h-4 w-4" />
                  </Button>

                  <Button
                    aria-label="Close certificate"
                    size="icon"
                    variant="ghost"
                    onClick={() => setOpen(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div
                className="
                  max-h-[75vh]
                  overflow-auto
                  rounded-lg
                  bg-background/35
                  p-3
                  sm:p-4
                "
              >
                <div
                  className="
                    relative
                    mx-auto
                    aspect-[4/3]
                    w-full
                    max-w-3xl
                    overflow-hidden
                    rounded-lg
                    border
                    border-border/70
                    bg-muted
                    text-foreground
                    transition-transform
                    duration-300
                  "
                  style={{
                    transform: `scale(${zoom})`,
                    transformOrigin: "center",
                  }}
                >
                  {imageFailed ? (
                    <div className="flex h-full flex-col items-center justify-center gap-3 p-6 text-center">
                      <BadgeCheck className="h-14 w-14 text-primary" />
                      <p className="text-sm text-muted-foreground">
                        Certificate image could not be loaded.
                      </p>
                    </div>
                  ) : (
                    <Image
                      src={certification.image}
                      alt={`${certification.title} certificate`}
                      fill
                      sizes="(min-width: 1024px) 768px, 92vw"
                      className="object-contain p-2 sm:p-4"
                      priority={open}
                      onError={() => setImageFailed(true)}
                    />
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
