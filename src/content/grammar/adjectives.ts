import type { AdjectiveNote } from "../../types/grammar";
import { parseFurigana } from "../../utils/furigana";

// Written from scratch in our own words — not copied from any textbook.
export const ADJECTIVE_NOTES: Record<string, AdjectiveNote> = {
  白い: {
    kind: "adjective",
    dictionaryForm: parseFurigana("白[しろ]い"),
    dictionaryFormRomaji: "shiroi",
    meaning: "white",
    type: "i",
    grammarNote:
      "い-adjectives conjugate on their own — no です needed grammatically, though です is added for politeness. Here 白くて is the て-form, linking it to another description.",
    examples: [
      {
        parts: parseFurigana("モモは 白[しろ]くて、 小[ちい]さいです。"),
        english: "Momo is white and small.",
      },
    ],
  },
  小さい: {
    kind: "adjective",
    dictionaryForm: parseFurigana("小[ちい]さい"),
    dictionaryFormRomaji: "chiisai",
    meaning: "small",
    type: "i",
    grammarNote:
      "い-adjectives like 小さい can sit directly before a noun (小さい猫, a small cat) or end a sentence with です added for politeness.",
    examples: [
      {
        parts: parseFurigana("小[ちい]さい 猫[ねこ]です。"),
        english: "It's a small cat.",
      },
    ],
  },
  かわいい: {
    kind: "adjective",
    dictionaryForm: parseFurigana("かわいい"),
    dictionaryFormRomaji: "kawaii",
    meaning: "cute",
    type: "i",
    grammarNote:
      "An い-adjective — かわいいです is just the plain present form made polite, no な or だ needed.",
    examples: [
      {
        parts: parseFurigana("モモは とても かわいいです。"),
        english: "Momo is very cute.",
      },
    ],
  },
  大好き: {
    kind: "adjective",
    dictionaryForm: parseFurigana("大好[だいす]き"),
    dictionaryFormRomaji: "daisuki",
    meaning: "to love, to like very much",
    type: "na",
    grammarNote:
      "な-adjectives need な before a noun (大好きな猫) but attach straight to です as a sentence's predicate. The thing being loved is marked with が, not を.",
    examples: [
      {
        parts: parseFurigana("私[わたし]は モモが 大好[だいす]きです。"),
        english: "I love Momo.",
      },
    ],
  },
};
