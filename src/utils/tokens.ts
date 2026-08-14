import type { Token } from "../types/story";

export function tokensToPlainText(tokens: Token[]): string {
  return tokens.map((t) => t.surface).join("");
}
