import clsx from "clsx";
import type { Token } from "../../types/story";
import { TokenSpan } from "./TokenSpan";

interface JapaneseLineProps {
  tokens: Token[];
  showFurigana: boolean;
  className?: string;
}

export function JapaneseLine({ tokens, showFurigana, className }: JapaneseLineProps) {
  return (
    <p className={clsx("jp-text", className)} lang="ja">
      {tokens.map((token, i) => (
        <TokenSpan key={i} token={token} showFurigana={showFurigana} />
      ))}
    </p>
  );
}
