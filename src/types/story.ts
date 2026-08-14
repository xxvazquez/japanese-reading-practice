export type PartOfSpeech =
  | "particle"
  | "verb"
  | "noun"
  | "adjective"
  | "adverb"
  | "other";

export type JlptLevel = "N5" | "N4" | "N3" | "N2" | "N1";

/**
 * One run of a word's text. Only a kanji run carries a reading — plain runs
 * (kana, punctuation, katakana) render as-is with no ruby. Real furigana
 * only ever sits over the kanji, never over okurigana next to it, so a word
 * like 朝ご飯 is three runs: 朝(あさ), ご (plain), 飯(はん).
 */
export type TokenPart = { kanji: string; reading: string } | { text: string };

/** A single word/morpheme inside a Japanese sentence. */
export interface Token {
  parts: TokenPart[];
  pos: PartOfSpeech;
  /**
   * Key into the grammar note dictionary matching this word's category
   * (see src/content/grammar). Omitted for tokens with nothing useful to
   * add on click — punctuation, mostly.
   */
  grammarKey?: string;
  /**
   * Particle-only: what this particle is doing in *this* sentence
   * specifically (e.g. "marks 私 as the topic"), shown above the shared
   * dictionary note when its panel opens.
   */
  contextNote?: string;
}

export interface Sentence {
  id: string;
  tokens: Token[];
  romaji: string;
  english: string;
}

export interface VocabularyEntry {
  parts: TokenPart[];
  romaji: string;
  meaning: string;
  pos: PartOfSpeech;
}

export interface GrammarPoint {
  pattern: string;
  explanation: string;
}

export interface StoryTitle {
  tokens: Token[];
  romaji: string;
  english: string;
}

export interface Story {
  id: string;
  title: StoryTitle;
  jlptLevel: JlptLevel;
  estimatedReadingMinutes: number;
  sentences: Sentence[];
  vocabulary: VocabularyEntry[];
  grammar: GrammarPoint[];
}
