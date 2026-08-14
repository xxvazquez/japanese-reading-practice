import type { TokenPart } from "../types/story";

const KANJI_WITH_READING = /([^[\]]+)\[([^\]]+)\]/g;

/**
 * Authoring shorthand for TokenPart[] — turns "食[た]べます" into the same
 * shape TokenSpan renders, without hand-writing {kanji, reading} objects.
 * Used for grammar-note example sentences, which don't need per-word POS
 * tagging the way story tokens do.
 */
export function parseFurigana(text: string): TokenPart[] {
  const parts: TokenPart[] = [];
  let lastIndex = 0;
  for (const match of text.matchAll(KANJI_WITH_READING)) {
    const [full, kanji, reading] = match;
    const start = match.index ?? 0;
    if (start > lastIndex) {
      parts.push({ text: text.slice(lastIndex, start) });
    }
    parts.push({ kanji, reading });
    lastIndex = start + full.length;
  }
  if (lastIndex < text.length) {
    parts.push({ text: text.slice(lastIndex) });
  }
  return parts;
}
