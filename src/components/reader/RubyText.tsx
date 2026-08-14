import clsx from "clsx";
import type { TokenPart } from "../../types/story";

interface RubyTextProps {
  parts: TokenPart[];
  showFurigana: boolean;
  className?: string;
}

/** Renders a word's parts as ruby (kanji runs) and plain text (kana runs), in order. */
export function RubyText({ parts, showFurigana, className }: RubyTextProps) {
  return (
    <span className={clsx("whitespace-nowrap", className)}>
      {parts.map((part, i) =>
        "kanji" in part ? (
          <ruby key={i}>
            {part.kanji}
            <rt
              className={clsx(
                "furigana transition-opacity duration-300",
                showFurigana ? "opacity-100" : "opacity-0",
              )}
            >
              {showFurigana ? part.reading : ""}
            </rt>
          </ruby>
        ) : (
          <span key={i}>{part.text}</span>
        ),
      )}
    </span>
  );
}
