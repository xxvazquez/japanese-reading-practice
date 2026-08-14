import { AnimatePresence, motion } from "framer-motion";
import type { Sentence } from "../../types/story";
import { useReaderSettings } from "../../context/ReaderSettingsContext";
import { JapaneseLine } from "./JapaneseLine";

interface SentenceBlockProps {
  sentence: Sentence;
  index: number;
}

// Shared enter/exit for the romaji and English rows — animating height (not
// just opacity) is what makes hiding a layer feel like it collapses away
// instead of leaving a gap.
const collapse = {
  initial: { opacity: 0, height: 0, marginTop: 0 },
  animate: { opacity: 1, height: "auto", marginTop: 6 },
  exit: { opacity: 0, height: 0, marginTop: 0 },
};

export function SentenceBlock({ sentence, index }: SentenceBlockProps) {
  const { layers } = useReaderSettings();

  return (
    <div className="group py-4 first:pt-0">
      <div className="flex gap-4">
        <span className="mt-1.5 shrink-0 select-none font-ui text-[11px] text-ink-faint/70">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="min-w-0 flex-1">
          <JapaneseLine
            tokens={sentence.tokens}
            showFurigana={layers.furigana}
            className="font-jp text-[1.55rem] leading-[2.6] text-ink"
          />

          <AnimatePresence initial={false}>
            {layers.romaji && (
              <motion.p
                key="romaji"
                {...collapse}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="overflow-hidden font-ui text-sm tracking-wide text-accent-sora"
              >
                {sentence.romaji}
              </motion.p>
            )}
          </AnimatePresence>

          <AnimatePresence initial={false}>
            {layers.english && (
              <motion.p
                key="english"
                {...collapse}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="overflow-hidden font-serif text-[15px] italic text-ink-soft"
              >
                {sentence.english}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
