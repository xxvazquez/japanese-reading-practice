import type { ParticleNote } from "../../types/grammar";
import { parseFurigana } from "../../utils/furigana";

// Written from scratch in our own words — not copied from any textbook.
export const PARTICLE_NOTES: Record<string, ParticleNote> = {
  の: {
    kind: "particle",
    particle: "の",
    concise:
      "の links two nouns, with the first one possessing, describing, or specifying the second — like 's in English, but in reverse order.",
    commonUses: ["Possession: 私の本 — my book", "Category: 日本語の先生 — a Japanese teacher"],
    examples: [
      {
        parts: parseFurigana("これは 私[わたし]の 本[ほん]です。"),
        english: "This is my book.",
      },
      {
        parts: parseFurigana("猫[ねこ]の 名前[なまえ]は モモです。"),
        english: "The cat's name is Momo.",
      },
    ],
  },
  は: {
    kind: "particle",
    particle: "は",
    concise:
      "は marks the topic of the sentence — what you're about to talk about. It's written は but read wa when used this way.",
    commonUses: ["Introducing a topic: 私は学生です — As for me, I'm a student"],
    examples: [
      {
        parts: parseFurigana("私[わたし]は ポーランドに 住[す]んでいます。"),
        english: "I live in Poland.",
      },
      {
        parts: parseFurigana("今日[きょう]は 忙[いそが]しいです。"),
        english: "Today is busy.",
      },
    ],
  },
  に: {
    kind: "particle",
    particle: "に",
    concise:
      "に is a flexible particle for a point in time, a destination, or where someone/something exists.",
    commonUses: [
      "Time: 七時に起きます — I get up at seven o'clock",
      "Existence location (with あります/います): 家に猫がいます — There's a cat at home",
    ],
    examples: [
      {
        parts: parseFurigana("七時[しちじ]に 起[お]きます。"),
        english: "I get up at seven o'clock.",
      },
      {
        parts: parseFurigana("家[いえ]に 猫[ねこ]が います。"),
        english: "There is a cat in my house.",
      },
    ],
  },
  を: {
    kind: "particle",
    particle: "を",
    concise:
      "を marks the direct object — the thing directly affected by the verb. It's written を but pronounced the same as お.",
    commonUses: ["Direct object: パンを食べます — I eat bread"],
    examples: [
      {
        parts: parseFurigana("朝[あさ]ご 飯[はん]を 食[た]べます。"),
        english: "I eat breakfast.",
      },
      {
        parts: parseFurigana("本[ほん]を 読[よ]みます。"),
        english: "I read a book.",
      },
    ],
  },
  で: {
    kind: "particle",
    particle: "で",
    concise:
      "で marks the place where an action happens, or the means or tool used to do it.",
    commonUses: [
      "Place of action: 仕事で使います — I use it at work",
      "Means/tool: 電車で行きます — I go by train",
    ],
    examples: [
      {
        parts: parseFurigana("仕事[しごと]で コンピューターを 使[つか]います。"),
        english: "At work I use a computer.",
      },
      {
        parts: parseFurigana("電車[でんしゃ]で 行[い]きます。"),
        english: "I go by train.",
      },
    ],
  },
  が: {
    kind: "particle",
    particle: "が",
    concise:
      "が marks the subject — the thing doing the action or being described — often when it's new information or the main focus of the sentence.",
    commonUses: [
      "Subject with existence verbs: 猫がいます — There is a cat",
      "Object of feeling words like 好き: モモが好きです — I like Momo",
    ],
    examples: [
      {
        parts: parseFurigana("家[いえ]に 猫[ねこ]が います。"),
        english: "There is a cat in my house.",
      },
      {
        parts: parseFurigana("モモが 大好[だいす]きです。"),
        english: "I love Momo.",
      },
    ],
  },
  と: {
    kind: "particle",
    particle: "と",
    concise:
      "と connects nouns to mean 'and,' or marks who you're doing something together with.",
    commonUses: [
      "Connecting nouns: 猫と私 — the cat and I",
      "Doing something together: 友達と話します — I talk with a friend",
    ],
    examples: [
      {
        parts: parseFurigana("猫[ねこ]と 私[わたし]"),
        english: "The cat and I.",
      },
      {
        parts: parseFurigana("友達[ともだち]と 話[はな]します。"),
        english: "I talk with a friend.",
      },
    ],
  },
  ごろ: {
    kind: "particle",
    particle: "ごろ",
    concise:
      "ごろ attaches to a specific time to mean 'around' or 'about' — it's only used with points in time, not lengths of time.",
    commonUses: ["Approximate time: 十一時ごろ — around eleven o'clock"],
    examples: [
      {
        parts: parseFurigana("十一時[じゅういちじ]ごろ 寝[ね]ます。"),
        english: "I go to bed around eleven o'clock.",
      },
      {
        parts: parseFurigana("三時[さんじ]ごろ 家[いえ]に 帰[かえ]ります。"),
        english: "I go home around three o'clock.",
      },
    ],
  },
};
