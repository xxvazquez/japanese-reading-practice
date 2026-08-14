import { BookText } from "lucide-react";
import type { VocabularyEntry } from "../../types/story";
import { CollapsibleSection } from "../ui/CollapsibleSection";
import { POS_STYLES } from "../../utils/posStyles";

export function VocabularySection({ vocabulary }: { vocabulary: VocabularyEntry[] }) {
  return (
    <CollapsibleSection title="Vocabulary" icon={<BookText className="h-4 w-4" strokeWidth={1.75} />} count={vocabulary.length}>
      <ul className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
        {vocabulary.map((entry) => (
          <li key={entry.word} className="flex items-baseline justify-between gap-3 border-b border-ink/[0.05] pb-3">
            <div className="min-w-0">
              <div className="flex items-baseline gap-2">
                <ruby className="jp-text text-base text-ink">
                  {entry.word}
                  <rt className="furigana">
                    {entry.furigana !== entry.word ? entry.furigana : ""}
                  </rt>
                </ruby>
                <span className="font-ui text-[10px] uppercase tracking-wide text-ink-faint">
                  {POS_STYLES[entry.pos].label}
                </span>
              </div>
              <p className="mt-1 truncate font-ui text-[13px] tracking-wide text-ink-faint">
                {entry.romaji}
              </p>
            </div>
            <p className="shrink-0 text-right font-serif text-sm text-ink-soft">{entry.meaning}</p>
          </li>
        ))}
      </ul>
    </CollapsibleSection>
  );
}
