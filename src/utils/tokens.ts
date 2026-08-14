import type { Token, TokenPart } from "../types/story";

function partText(part: TokenPart): string {
  return "kanji" in part ? part.kanji : part.text;
}

export function partsToPlainText(parts: TokenPart[]): string {
  return parts.map(partText).join("");
}

export function tokensToPlainText(tokens: Token[]): string {
  return tokens.map((token) => partsToPlainText(token.parts)).join("");
}
