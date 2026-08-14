import type { TokenPart } from "./story";

/**
 * A short example used inside a grammar note. Just Japanese (with furigana)
 * and English — romaji would be redundant once a learner can read kana.
 */
export interface GrammarExample {
  parts: TokenPart[];
  english: string;
}

export interface ParticleNote {
  kind: "particle";
  particle: string;
  /** Plain-language explanation of what this particle does. */
  concise: string;
  /** The handful of uses a beginner actually needs, as short labelled patterns. */
  commonUses: string[];
  examples: GrammarExample[];
}

// Beginner course materials commonly number verb groups 1/2/3 rather than
// the traditional godan/ichidan/irregular terms, so we match that.
export type VerbGroup = "1" | "2" | "3";
export type Transitivity = "transitive" | "intransitive";

export interface VerbNote {
  kind: "verb";
  dictionaryForm: TokenPart[];
  dictionaryFormRomaji: string;
  meaning: string;
  group: VerbGroup;
  transitivity?: Transitivity;
  /** Grammar relevant to the specific form used in the story (て-form, ～ています, etc). */
  formNote: string;
  examples: GrammarExample[];
}

export type AdjectiveType = "i" | "na";

export interface AdjectiveNote {
  kind: "adjective";
  dictionaryForm: TokenPart[];
  dictionaryFormRomaji: string;
  meaning: string;
  type: AdjectiveType;
  grammarNote: string;
  examples: GrammarExample[];
}

/** Nouns, adverbs, and anything else — one short line, only when it's genuinely useful. */
export interface WordNote {
  kind: "word";
  note: string;
}

export type GrammarNote = ParticleNote | VerbNote | AdjectiveNote | WordNote;
