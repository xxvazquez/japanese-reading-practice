import clsx from "clsx";
import type { JlptLevel } from "../../types/story";

interface JlptFilterProps {
  levels: JlptLevel[];
  activeLevels: Set<JlptLevel>;
  onToggle: (level: JlptLevel) => void;
}

export function JlptFilter({ levels, activeLevels, onToggle }: JlptFilterProps) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {levels.map((level) => {
        const isActive = activeLevels.has(level);
        return (
          <button
            key={level}
            type="button"
            onClick={() => onToggle(level)}
            aria-pressed={isActive}
            className={clsx(
              "rounded-full px-3 py-1 text-xs font-medium tracking-wide transition-all duration-200",
              isActive
                ? "bg-ink text-paper shadow-sm"
                : "bg-paper-surface/70 text-ink-soft hover:bg-paper-surface",
            )}
          >
            {level}
          </button>
        );
      })}
    </div>
  );
}
