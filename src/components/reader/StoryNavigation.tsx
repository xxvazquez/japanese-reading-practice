import { ArrowLeft, ArrowRight } from "lucide-react";
import clsx from "clsx";
import type { Story } from "../../types/story";
import { tokensToPlainText } from "../../utils/tokens";

interface StoryNavigationProps {
  previous: Story | null;
  next: Story | null;
  onNavigate: (id: string) => void;
}

export function StoryNavigation({ previous, next, onNavigate }: StoryNavigationProps) {
  return (
    <nav className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      <NavCard story={previous} direction="previous" onNavigate={onNavigate} />
      <NavCard story={next} direction="next" onNavigate={onNavigate} />
    </nav>
  );
}

function NavCard({
  story,
  direction,
  onNavigate,
}: {
  story: Story | null;
  direction: "previous" | "next";
  onNavigate: (id: string) => void;
}) {
  const isNext = direction === "next";

  if (!story) {
    return (
      <div className="rounded-xl border border-dashed border-ink/10 px-5 py-4 text-sm text-ink-faint/60">
        {isNext ? "You've reached the last story." : "This is the first story."}
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => onNavigate(story.id)}
      className={clsx(
        "group flex items-center gap-3 rounded-xl border border-ink/[0.08] px-5 py-4 text-left transition-colors duration-200 hover:border-ink/20",
        isNext && "sm:flex-row-reverse sm:text-right",
      )}
    >
      {isNext ? (
        <ArrowRight className="h-4 w-4 shrink-0 text-ink-faint transition-transform group-hover:translate-x-0.5" strokeWidth={1.75} />
      ) : (
        <ArrowLeft className="h-4 w-4 shrink-0 text-ink-faint transition-transform group-hover:-translate-x-0.5" strokeWidth={1.75} />
      )}
      <div className="min-w-0">
        <p className="text-xs uppercase tracking-[0.15em] text-ink-faint">
          {isNext ? "Next" : "Previous"}
        </p>
        <p className="jp-text truncate text-base text-ink">
          {tokensToPlainText(story.title.tokens)}
        </p>
      </div>
    </button>
  );
}
