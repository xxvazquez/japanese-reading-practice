import clsx from "clsx";
import { Clock } from "lucide-react";
import type { Story } from "../../types/story";
import { tokensToPlainText } from "../../utils/tokens";

interface StoryListItemProps {
  story: Story;
  isActive: boolean;
  onSelect: () => void;
}

export function StoryListItem({ story, isActive, onSelect }: StoryListItemProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-current={isActive}
      className={clsx(
        "group w-full rounded-2xl border px-4 py-3.5 text-left transition-all duration-200",
        isActive
          ? "border-ink/10 bg-white shadow-card"
          : "border-transparent hover:border-ink/5 hover:bg-white/60",
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate font-jp text-base text-ink">
            {tokensToPlainText(story.title.tokens)}
          </p>
          <p className="mt-0.5 truncate font-serif text-sm italic text-ink-faint">
            {story.title.english}
          </p>
        </div>
        <span
          className={clsx(
            "shrink-0 rounded-full px-2 py-0.5 text-[11px] font-semibold tracking-wide transition-colors",
            isActive ? "bg-ink text-paper" : "bg-paper-muted text-ink-soft",
          )}
        >
          {story.jlptLevel}
        </span>
      </div>
      <div className="mt-2.5 flex items-center gap-1.5 text-xs text-ink-faint">
        <Clock className="h-3 w-3" strokeWidth={1.75} />
        <span>{story.estimatedReadingMinutes} min read</span>
        <span aria-hidden className="mx-0.5">
          ·
        </span>
        <span>{story.sentences.length} sentences</span>
      </div>
    </button>
  );
}
