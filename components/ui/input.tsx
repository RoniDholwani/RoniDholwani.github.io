import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      suppressHydrationWarning
      ref={ref}
      className={cn(
        "h-11 w-full rounded-lg border border-input bg-background/45 px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground focus:border-foreground/35 focus:ring-2 focus:ring-foreground/10",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";
