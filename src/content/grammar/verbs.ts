import type { VerbNote } from "../../types/grammar";
import { parseFurigana } from "../../utils/furigana";

// Written from scratch in our own words — not copied from any textbook.
const MASU_FORM_NOTE =
  "This is the polite non-past (ます) form, used for things you do regularly or will do.";

export const VERB_NOTES: Record<string, VerbNote> = {
  住む: {
    kind: "verb",
    dictionaryForm: parseFurigana("住[す]む"),
    dictionaryFormRomaji: "sumu",
    meaning: "to live, to reside",
    group: "1",
    transitivity: "intransitive",
    formNote:
      "住んでいます is て-form + います — the ～ています pattern for an ongoing state, like 'I live' or 'I'm living.'",
    examples: [
      {
        parts: parseFurigana("私[わたし]は ポーランドに 住[す]んでいます。"),
        english: "I live in Poland.",
      },
      {
        parts: parseFurigana("東京[とうきょう]に 住[す]んでいます。"),
        english: "I live in Tokyo.",
      },
    ],
  },
  起きる: {
    kind: "verb",
    dictionaryForm: parseFurigana("起[お]きる"),
    dictionaryFormRomaji: "okiru",
    meaning: "to wake up, to get up",
    group: "2",
    transitivity: "intransitive",
    formNote: MASU_FORM_NOTE,
    examples: [
      {
        parts: parseFurigana("七時[しちじ]に 起[お]きます。"),
        english: "I get up at seven o'clock.",
      },
      {
        parts: parseFurigana("毎朝[まいあさ] 早[はや]く 起[お]きます。"),
        english: "I get up early every morning.",
      },
    ],
  },
  洗う: {
    kind: "verb",
    dictionaryForm: parseFurigana("洗[あら]う"),
    dictionaryFormRomaji: "arau",
    meaning: "to wash",
    group: "1",
    transitivity: "transitive",
    formNote:
      "洗って is the て-form, used here to link two actions in one sentence: 'I wash..., and then brush...'",
    examples: [
      {
        parts: parseFurigana("顔[かお]を 洗[あら]って、 歯[は]を 磨[みが]きます。"),
        english: "I wash my face and brush my teeth.",
      },
      {
        parts: parseFurigana("手[て]を 洗[あら]います。"),
        english: "I wash my hands.",
      },
    ],
  },
  磨く: {
    kind: "verb",
    dictionaryForm: parseFurigana("磨[みが]く"),
    dictionaryFormRomaji: "migaku",
    meaning: "to brush, to polish",
    group: "1",
    transitivity: "transitive",
    formNote: MASU_FORM_NOTE,
    examples: [
      {
        parts: parseFurigana("歯[は]を 磨[みが]きます。"),
        english: "I brush my teeth.",
      },
    ],
  },
  食べる: {
    kind: "verb",
    dictionaryForm: parseFurigana("食[た]べる"),
    dictionaryFormRomaji: "taberu",
    meaning: "to eat",
    group: "2",
    transitivity: "transitive",
    formNote: MASU_FORM_NOTE,
    examples: [
      {
        parts: parseFurigana("朝[あさ]ご 飯[はん]を 食[た]べます。"),
        english: "I eat breakfast.",
      },
      {
        parts: parseFurigana("レストランで 食[た]べます。"),
        english: "I'll eat at the restaurant.",
      },
    ],
  },
  飲む: {
    kind: "verb",
    dictionaryForm: parseFurigana("飲[の]む"),
    dictionaryFormRomaji: "nomu",
    meaning: "to drink",
    group: "1",
    transitivity: "transitive",
    formNote: MASU_FORM_NOTE,
    examples: [
      {
        parts: parseFurigana("コーヒーを 飲[の]みます。"),
        english: "I drink coffee.",
      },
    ],
  },
  始める: {
    kind: "verb",
    dictionaryForm: parseFurigana("始[はじ]める"),
    dictionaryFormRomaji: "hajimeru",
    meaning: "to start (something)",
    group: "2",
    transitivity: "transitive",
    formNote:
      "始める is transitive ('to start something'); its intransitive pair 始まる means '[something] begins' on its own.",
    examples: [
      {
        parts: parseFurigana("八時[はちじ]に 仕事[しごと]を 始[はじ]めます。"),
        english: "I start work at eight o'clock.",
      },
    ],
  },
  使う: {
    kind: "verb",
    dictionaryForm: parseFurigana("使[つか]う"),
    dictionaryFormRomaji: "tsukau",
    meaning: "to use",
    group: "1",
    transitivity: "transitive",
    formNote: MASU_FORM_NOTE,
    examples: [
      {
        parts: parseFurigana("仕事[しごと]で コンピューターを 使[つか]います。"),
        english: "At work I use a computer.",
      },
    ],
  },
  終わる: {
    kind: "verb",
    dictionaryForm: parseFurigana("終[お]わる"),
    dictionaryFormRomaji: "owaru",
    meaning: "to end, to finish",
    group: "1",
    transitivity: "intransitive",
    formNote:
      "終わる is intransitive ('[something] ends'); its transitive pair 終える means 'to finish something.'",
    examples: [
      {
        parts: parseFurigana("五時[ごじ]に 仕事[しごと]が 終[お]わります。"),
        english: "My work finishes at five o'clock.",
      },
    ],
  },
  勉強する: {
    kind: "verb",
    dictionaryForm: parseFurigana("勉強[べんきょう]する"),
    dictionaryFormRomaji: "benkyou suru",
    meaning: "to study",
    group: "3",
    transitivity: "transitive",
    formNote:
      "勉強します is the irregular verb する ('to do') attached to the noun 勉強 ('study'). Many activities work this way: noun + する.",
    examples: [
      {
        parts: parseFurigana("時々[ときどき] 日本語[にほんご]を 勉強[べんきょう]します。"),
        english: "Sometimes I study Japanese.",
      },
    ],
  },
  読む: {
    kind: "verb",
    dictionaryForm: parseFurigana("読[よ]む"),
    dictionaryFormRomaji: "yomu",
    meaning: "to read",
    group: "1",
    transitivity: "transitive",
    formNote: MASU_FORM_NOTE,
    examples: [
      {
        parts: parseFurigana("本[ほん]を 読[よ]みます。"),
        english: "I read a book.",
      },
    ],
  },
  寝る: {
    kind: "verb",
    dictionaryForm: parseFurigana("寝[ね]る"),
    dictionaryFormRomaji: "neru",
    meaning: "to sleep, to go to bed",
    group: "2",
    transitivity: "intransitive",
    formNote: MASU_FORM_NOTE,
    examples: [
      {
        parts: parseFurigana("十一時[じゅういちじ]ごろ 寝[ね]ます。"),
        english: "I go to bed around eleven o'clock.",
      },
    ],
  },
  いる: {
    kind: "verb",
    dictionaryForm: parseFurigana("いる"),
    dictionaryFormRomaji: "iru",
    meaning: "to exist, to be (people and animals)",
    group: "2",
    transitivity: "intransitive",
    formNote:
      "います is used for the existence of people and animals; あります is used instead for objects and plants.",
    examples: [
      {
        parts: parseFurigana("家[いえ]に 猫[ねこ]が います。"),
        english: "There is a cat in my house.",
      },
    ],
  },
  あげる: {
    kind: "verb",
    dictionaryForm: parseFurigana("あげる"),
    dictionaryFormRomaji: "ageru",
    meaning: "to give",
    group: "2",
    transitivity: "transitive",
    formNote:
      "あげます is used when you give something to someone else — a different verb (くれる) is used when someone gives something to you.",
    examples: [
      {
        parts: parseFurigana("毎日[まいにち]、 朝[あさ]ご 飯[はん]を あげます。"),
        english: "Every day, I give her breakfast.",
      },
    ],
  },
  遊ぶ: {
    kind: "verb",
    dictionaryForm: parseFurigana("遊[あそ]ぶ"),
    dictionaryFormRomaji: "asobu",
    meaning: "to play",
    group: "1",
    transitivity: "intransitive",
    formNote: MASU_FORM_NOTE,
    examples: [
      {
        parts: parseFurigana("一緒[いっしょ]に 遊[あそ]びます。"),
        english: "We play together.",
      },
    ],
  },
};
