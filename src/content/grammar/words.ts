import type { WordNote } from "../../types/grammar";

// Written from scratch in our own words — not copied from any textbook.
// Only words with something genuinely worth adding beyond the vocabulary
// list get an entry here; plain nouns like 家 or 猫 don't need one.
export const WORD_NOTES: Record<string, WordNote> = {
  "time-counter": {
    kind: "word",
    note: "時 attaches to a number to make a clock time — 七時 is 'seven o'clock,' literally 'seven-hour.'",
  },
  "mai-prefix": {
    kind: "word",
    note: "毎 means 'every' — 毎朝 is 'every morning,' 毎日 is 'every day.'",
  },
  "gohan-compound": {
    kind: "word",
    note: "ご飯 literally means 'rice,' but paired with a time of day it means that meal: 朝ご飯 (breakfast), 昼ご飯 (lunch), 晩ご飯 (dinner).",
  },
  "go-suffix": {
    kind: "word",
    note: "語 means 'language' — attach it to a country's name and you get that language: 日本 (Japan) + 語 = 日本語 (Japanese).",
  },
  ichinichi: {
    kind: "word",
    note: "一日 combines 一 (one) and the counter 日 (day) — here it means 'a day,' as in 'my day.'",
  },
  "katakana-loanword": {
    kind: "word",
    note: "Katakana is the script used for foreign words and names — a quick visual signal that a word was borrowed from another language.",
  },
  watashi: {
    kind: "word",
    note: "私 (watashi) is the standard, neutral word for 'I' — safe to use in any polite conversation, by anyone.",
  },
  namae: {
    kind: "word",
    note: "名前 means 'name' — often paired with の to say whose name you mean, as in 猫の名前 (the cat's name).",
  },
  "sono-ato": {
    kind: "word",
    note: "その後 combines その (that) and 後 (after) — a simple way to link two events in order: '...and after that...'",
  },
  tokidoki: {
    kind: "word",
    note: "時々 repeats 時 (time) to mean 'sometimes' — repeating a word like this is a common pattern for frequency adverbs.",
  },
  yoku: {
    kind: "word",
    note: "よく comes from the adjective いい/よい ('good') — as an adverb it means 'often' or 'a lot,' depending on context.",
  },
  "issho-ni": {
    kind: "word",
    note: "一緒に literally means 'together' — に turns the noun 一緒 into an adverb, describing how the action happens.",
  },
  totemo: {
    kind: "word",
    note: "とても intensifies an adjective to mean 'very.' It pairs with positive statements — negating one uses あまり instead.",
  },
  desu: {
    kind: "word",
    note: "です is the polite copula, roughly 'is/am/are.' Its plain form is だ, and its past tense is でした.",
  },
};
