import type { Token } from "../../types/story";
import { TokenSpan } from "./TokenSpan";

interface JapaneseLineProps {
  tokens: Token[];
  showFurigana: boolean;
  className?: string;
}

export function JapaneseLine({ tokens, showFurigana, className }: JapaneseLineProps) {
  return (
    <p className={className} lang="ja">
      {tokens.map((token, i) => (
        <TokenSpan key={i} token={token} showFurigana={showFurigana} />
      ))}
    </p>
  );
}
