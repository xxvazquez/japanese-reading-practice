import type { Story } from "../../types/story";
import { useReaderSettings } from "../../context/ReaderSettingsContext";
import { JapaneseLine } from "./JapaneseLine";
import { LayerControls } from "./LayerControls";
import { PosLegend } from "./PosLegend";

export function StoryHeader({ story }: { story: Story }) {
  const { layers } = useReaderSettings();

  return (
    <header className="pb-10">
      <p className="font-ui text-xs uppercase tracking-[0.2em] text-ink-faint">
        {story.jlptLevel} · {story.estimatedReadingMinutes} min read
      </p>

      <JapaneseLine
        tokens={story.title.tokens}
        showFurigana={layers.furigana}
        className="mt-3 text-[2.25rem] font-medium leading-[1.9] text-ink"
      />

      {layers.romaji && (
        <p className="mt-3 font-ui text-sm tracking-wide text-ink-faint">
          {story.title.romaji}
        </p>
      )}
      {layers.english && (
        <p className="mt-1 font-serif text-lg italic text-ink-soft">
          {story.title.english}
        </p>
      )}

      {/* Controls sit below a hairline rule, visually secondary to the title itself. */}
      <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-ink/[0.06] pt-5">
        <LayerControls />
        <PosLegend />
      </div>
    </header>
  );
}
