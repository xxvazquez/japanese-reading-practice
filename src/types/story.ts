export type PartOfSpeech =
  | "particle"
  | "verb"
  | "noun"
  | "adjective"
  | "adverb"
  | "other";

export type JlptLevel = "N5" | "N4" | "N3" | "N2" | "N1";

/** A single word/morpheme inside a Japanese sentence, tagged for furigana and highlighting. */
export interface Token {
  /** The text as written (kanji/kana/punctuation). */
  surface: string;
  /** Kana reading, present only when `surface` contains kanji. */
  furigana?: string;
  pos: PartOfSpeech;
}

export interface Sentence {
  id: string;
  tokens: Token[];
  romaji: string;
  english: string;
}

export interface VocabularyEntry {
  word: string;
  furigana: string;
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
