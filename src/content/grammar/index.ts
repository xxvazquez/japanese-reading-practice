import type { GrammarNote } from "../../types/grammar";
import type { Token } from "../../types/story";
import { PARTICLE_NOTES } from "./particles";
import { VERB_NOTES } from "./verbs";
import { ADJECTIVE_NOTES } from "./adjectives";
import { WORD_NOTES } from "./words";

export function getGrammarNote(token: Token): GrammarNote | undefined {
  if (!token.grammarKey) return undefined;
  switch (token.pos) {
    case "particle":
      return PARTICLE_NOTES[token.grammarKey];
    case "verb":
      return VERB_NOTES[token.grammarKey];
    case "adjective":
      return ADJECTIVE_NOTES[token.grammarKey];
    default:
      return WORD_NOTES[token.grammarKey];
  }
}
