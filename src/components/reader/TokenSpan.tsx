import clsx from "clsx";
import type { Token } from "../../types/story";
import { POS_STYLES } from "../../lib/posStyles";

interface TokenSpanProps {
  token: Token;
  showFurigana: boolean;
}

export function TokenSpan({ token, showFurigana }: TokenSpanProps) {
  const style = POS_STYLES[token.pos];

  if (token.furigana) {
    // The <rt> stays in the DOM either way and just fades — removing it on
    // toggle would reflow every line of the story as furigana appears/disappears.
    return (
      <ruby className={clsx("transition-colors duration-300", style.className)}>
        {token.surface}
        <rt
          className={clsx(
            "select-none font-ui text-[0.55em] font-normal text-ink-faint transition-opacity duration-300",
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
