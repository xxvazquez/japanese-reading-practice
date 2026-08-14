import { Clock } from "lucide-react";
import type { Story } from "../../types/story";
import { useReaderSettings } from "../../context/ReaderSettingsContext";
import { JapaneseLine } from "./JapaneseLine";
import { LayerControls } from "./LayerControls";
import { PosLegend } from "./PosLegend";
import { Badge } from "../ui/Badge";

export function StoryHeader({ story }: { story: Story }) {
  const { layers } = useReaderSettings();

  return (
    <header className="border-b border-ink/[0.06] pb-6">
      <div className="flex flex-wrap items-center gap-2">
        <Badge tone="level">{story.jlptLevel}</Badge>
        <Badge>
          <Clock className="h-3 w-3" strokeWidth={1.75} />
          {story.estimatedReadingMinutes} min read
        </Badge>
      </div>

      <JapaneseLine
        tokens={story.title.tokens}
        showFurigana={layers.furigana}
        className="mt-4 font-jp text-3xl font-semibold leading-relaxed text-ink"
      />
      <p className="mt-1 font-serif text-lg italic text-ink-faint">
        {story.title.romaji} · {story.title.english}
      </p>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <LayerControls />
        <PosLegend />
      </div>
    </header>
  );
}
