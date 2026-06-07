import * as React from "react";
import { cn } from "@/lib/utils";

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea
      suppressHydrationWarning
      ref={ref}
      className={cn(
        "min-h-28 w-full rounded-lg border border-input bg-background/45 px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground focus:border-foreground/35 focus:ring-2 focus:ring-foreground/10",
        className
      )}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";
