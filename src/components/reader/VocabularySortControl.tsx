import clsx from "clsx";

export type VocabularySort = "story" | "english" | "romaji";

const OPTIONS: { value: VocabularySort; label: string }[] = [
  { value: "story", label: "Story order" },
  { value: "english", label: "A–Z English" },
  { value: "romaji", label: "A–Z Romaji" },
];

interface VocabularySortControlProps {
  value: VocabularySort;
  onChange: (sort: VocabularySort) => void;
}

export function VocabularySortControl({ value, onChange }: VocabularySortControlProps) {
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {OPTIONS.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => onChange(option.value)}
          aria-pressed={value === option.value}
          className={clsx(
            "rounded-full px-3 py-1 text-xs font-medium tracking-wide transition-colors duration-200",
            value === option.value ? "bg-ink text-paper" : "bg-paper-muted text-ink-soft hover:bg-paper-muted/70",
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
