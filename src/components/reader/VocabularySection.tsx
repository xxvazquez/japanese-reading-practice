import { BookText } from "lucide-react";
import type { VocabularyEntry } from "../../types/story";
import { CollapsibleSection } from "../ui/CollapsibleSection";
import { POS_STYLES } from "../../lib/posStyles";

export function VocabularySection({ vocabulary }: { vocabulary: VocabularyEntry[] }) {
  return (
    <CollapsibleSection title="Vocabulary" icon={<BookText className="h-4 w-4" strokeWidth={1.75} />} count={vocabulary.length}>
      <ul className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
        {vocabulary.map((entry) => (
          <li key={entry.word} className="flex items-baseline justify-between gap-3 border-b border-ink/[0.05] pb-2">
            <div className="min-w-0">
              <div className="flex items-baseline gap-2">
                <ruby className="font-jp text-base text-ink">
                  {entry.word}
                  <rt className="font-ui text-[0.55em] font-normal text-ink-faint">
                    {entry.furigana !== entry.word ? entry.furigana : ""}
                  </rt>
                </ruby>
                <span className={`text-[11px] font-medium ${POS_STYLES[entry.pos].className}`}>
                  {POS_STYLES[entry.pos].label}
                </span>
              </div>
              <p className="mt-0.5 truncate font-serif text-sm italic text-ink-faint">
                {entry.romaji}
              </p>
            </div>
            <p className="shrink-0 text-right text-sm text-ink-soft">{entry.meaning}</p>
          </li>
        ))}
      </ul>
    </CollapsibleSection>
  );
}
