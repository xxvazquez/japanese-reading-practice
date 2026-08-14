import clsx from "clsx";
import type { Token } from "../../types/story";
import { POS_STYLES } from "../../utils/posStyles";
import { RubyText } from "./RubyText";

interface TokenSpanProps {
  token: Token;
  showFurigana: boolean;
  onSelect?: (token: Token) => void;
}

export function TokenSpan({ token, showFurigana, onSelect }: TokenSpanProps) {
  const style = POS_STYLES[token.pos];
  const clickable = Boolean(onSelect && token.grammarKey);

  return (
    <span
      className={clsx(
        "rounded-sm transition-colors duration-300",
        style.className,
        clickable && "cursor-pointer hover:bg-ink/[0.06]",
      )}
      onClick={clickable ? () => onSelect!(token) : undefined}
      role={clickable ? "button" : undefined}
      tabIndex={clickable ? 0 : undefined}
      onKeyDown={
        clickable
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onSelect!(token);
              }
            }
          : undefined
      }
    >
      <RubyText parts={token.parts} showFurigana={showFurigana} />
    </span>
  );
}
