import { useMemo, useState } from "react";
import { BookText } from "lucide-react";
import type { VocabularyEntry } from "../../types/story";
import { CollapsibleSection } from "../ui/CollapsibleSection";
import { POS_STYLES } from "../../utils/posStyles";
import { partsToPlainText } from "../../utils/tokens";
import { useVocabularyDisplaySettings } from "../../hooks/useVocabularyDisplaySettings";
import { RubyText } from "./RubyText";
import { LayerToggle } from "./LayerToggle";
import { VocabularySortControl, type VocabularySort } from "./VocabularySortControl";

function sortEntries(entries: VocabularyEntry[], sort: VocabularySort): VocabularyEntry[] {
  if (sort === "story") return entries;
  const key = sort === "english" ? "meaning" : "romaji";
  return [...entries].sort((a, b) => a[key].localeCompare(b[key]));
}

export function VocabularySection({ vocabulary }: { vocabulary: VocabularyEntry[] }) {
  const { settings, toggle } = useVocabularyDisplaySettings();
  const [sort, setSort] = useState<VocabularySort>("story");

  const sorted = useMemo(() => sortEntries(vocabulary, sort), [vocabulary, sort]);

  // Columns collapse out entirely when hidden, rather than leaving blank
  // space, so the table re-flows to whatever's actually showing.
  const columns = [
    "minmax(8rem,1.3fr)",
    settings.romaji && "minmax(6rem,0.9fr)",
    settings.english && "minmax(8rem,1.2fr)",
    "minmax(4.5rem,0.7fr)",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <CollapsibleSection title="Vocabulary" icon={<BookText className="h-4 w-4" strokeWidth={1.75} />} count={vocabulary.length}>
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink/[0.08] pb-4">
        <VocabularySortControl value={sort} onChange={setSort} />
        <div className="flex flex-wrap items-center gap-1">
          <LayerToggle label="Furigana" checked={settings.furigana} onChange={() => toggle("furigana")} />
          <LayerToggle label="Romaji" checked={settings.romaji} onChange={() => toggle("romaji")} />
          <LayerToggle label="English" checked={settings.english} onChange={() => toggle("english")} />
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="grid gap-x-4" style={{ gridTemplateColumns: columns }}>
          <div className="col-span-full grid grid-cols-[subgrid] border-b border-ink/[0.08] pb-2 text-[11px] font-medium uppercase tracking-wide text-ink-faint">
            <span>Japanese</span>
            {settings.romaji && <span>Romaji</span>}
            {settings.english && <span>English</span>}
            <span>Type</span>
          </div>

          {sorted.map((entry) => {
            const key = partsToPlainText(entry.parts) + entry.romaji;
            return (
              <div key={key} className="col-span-full grid grid-cols-[subgrid] items-baseline border-b border-ink/[0.05] py-2.5">
                <RubyText parts={entry.parts} showFurigana={settings.furigana} className="jp-text text-base text-ink" />
                {settings.romaji && (
                  <span className="font-ui text-[13px] tracking-wide text-ink-faint">{entry.romaji}</span>
                )}
                {settings.english && (
                  <span className="font-serif text-sm text-ink-soft">{entry.meaning}</span>
                )}
                <span className="font-ui text-[11px] uppercase tracking-wide text-ink-faint">
                  {POS_STYLES[entry.pos].label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </CollapsibleSection>
  );
}
