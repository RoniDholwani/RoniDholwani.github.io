import { cn } from "@/lib/utils";

export function Badge({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border/50 bg-muted/70 px-3.5 py-1.5 text-xs font-medium text-muted-foreground",
        className
      )}
    >
      {children}
    </span>
  );
}
