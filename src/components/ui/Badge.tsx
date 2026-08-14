import clsx from "clsx";
import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  tone?: "neutral" | "level";
  className?: string;
}

export function Badge({ children, tone = "neutral", className }: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium tracking-wide",
        tone === "neutral" && "bg-paper-muted text-ink-soft",
        tone === "level" && "bg-accent-sora/20 text-ink-soft",
        className,
      )}
    >
      {children}
    </span>
  );
}
