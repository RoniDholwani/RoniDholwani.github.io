"use client";

import { useState } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

const lightLogo = "https://i.ibb.co/kVHKHpPD/Ronit-logo.png";
const darkLogo = "https://i.ibb.co/YThkZ83B/Ronit-logo-cream.png";

export function RemoteThemeLogo({
  sizes,
  className,
}: {
  sizes: string;
  className?: string;
}) {
  const [lightFailed, setLightFailed] = useState(false);
  const [darkFailed, setDarkFailed] = useState(false);

  return (
    <>
      {lightFailed ? null : (
        <Image
          src={lightLogo}
          alt="Ronit Dholwani logo"
          fill
          sizes={sizes}
          className={cn(className, "dark:hidden")}
          onError={() => setLightFailed(true)}
        />
      )}

      {darkFailed ? null : (
        <Image
          src={darkLogo}
          alt="Ronit Dholwani logo"
          fill
          sizes={sizes}
          className={cn(className, "hidden dark:block")}
          onError={() => setDarkFailed(true)}
        />
      )}
    </>
  );
}
