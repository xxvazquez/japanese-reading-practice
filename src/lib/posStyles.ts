import type { PartOfSpeech } from "../types/story";

interface PosStyle {
  className: string;
  label: string;
  swatch: string;
}

/**
 * Muted, pastel color mapping for each part of speech. Particles carry extra
 * weight (bold) since they're the grammatical glue readers most often need
 * to spot at a glance; other categories stay regular weight to avoid clutter.
 */
export const POS_STYLES: Record<PartOfSpeech, PosStyle> = {
  particle: {
    className: "text-pos-particle font-semibold",
    label: "Particle",
    swatch: "bg-pos-particle",
  },
  verb: {
    className: "text-pos-verb",
    label: "Verb",
    swatch: "bg-pos-verb",
  },
  noun: {
    className: "text-pos-noun",
    label: "Noun",
    swatch: "bg-pos-noun",
  },
  adjective: {
    className: "text-pos-adjective",
    label: "Adjective",
    swatch: "bg-pos-adjective",
  },
  adverb: {
    className: "text-pos-adverb",
    label: "Adverb",
    swatch: "bg-pos-adverb",
  },
  other: {
    className: "text-ink-soft",
    label: "Other",
    swatch: "bg-ink-faint",
  },
};

export const POS_LEGEND_ORDER: PartOfSpeech[] = [
  "particle",
  "verb",
  "noun",
  "adjective",
  "adverb",
];
