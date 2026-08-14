import clsx from "clsx";
import type { Token } from "../../types/story";
import { POS_STYLES } from "../../utils/posStyles";

interface TokenSpanProps {
  token: Token;
  showFurigana: boolean;
}

export function TokenSpan({ token, showFurigana }: TokenSpanProps) {
  const style = POS_STYLES[token.pos];

  if (token.furigana) {
    // The <rt> stays in the DOM either way and just fades — removing it on
    // toggle would reflow every line of the story as furigana appears/disappears.
    // nowrap keeps a kanji+reading pair on one line — otherwise the browser can
    // break the ruby mid-word, splitting a single furigana reading across two lines.
    return (
      <ruby className={clsx("whitespace-nowrap transition-colors duration-300", style.className)}>
        {token.surface}
        <rt
          className={clsx(
            "furigana transition-opacity duration-300",
            showFurigana ? "opacity-100" : "opacity-0",
          )}
        >
          {showFurigana ? token.furigana : ""}
        </rt>
      </ruby>
    );
  }

  return (
    <span className={clsx("transition-colors duration-300", style.className)}>
      {token.surface}
    </span>
  );
}
