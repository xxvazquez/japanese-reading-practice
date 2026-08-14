import { AnimatePresence, motion } from "framer-motion";
import type { Sentence, Token } from "../../types/story";
import { useReaderSettings } from "../../context/ReaderSettingsContext";
import { JapaneseLine } from "./JapaneseLine";

interface SentenceBlockProps {
  sentence: Sentence;
  index: number;
  onSelectToken: (token: Token) => void;
}

// Shared enter/exit for the romaji and English rows — animating height (not
// just opacity) is what makes hiding a layer feel like it collapses away
// instead of leaving a gap.
const collapse = {
  initial: { opacity: 0, height: 0, marginTop: 0 },
  animate: { opacity: 1, height: "auto", marginTop: 8 },
  exit: { opacity: 0, height: 0, marginTop: 0 },
};

export function SentenceBlock({ sentence, index, onSelectToken }: SentenceBlockProps) {
  const { layers } = useReaderSettings();

  return (
    <div className="py-6 first:pt-0">
      <div className="flex gap-5">
        {/* A quiet margin number, like a verse marker in a study edition — not a UI badge. */}
        <span className="mt-2.5 shrink-0 select-none font-ui text-[11px] tabular-nums text-ink-faint/60">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="min-w-0 flex-1">
          <JapaneseLine
            tokens={sentence.tokens}
            showFurigana={layers.furigana}
            className="text-[1.75rem] leading-[2.7] text-ink"
            onSelectToken={onSelectToken}
          />

          <AnimatePresence initial={false}>
            {layers.romaji && (
              <motion.p
                key="romaji"
                {...collapse}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="overflow-hidden font-ui text-[13px] tracking-wide text-ink-faint"
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
                className="overflow-hidden font-serif text-base italic leading-relaxed text-ink-soft"
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
