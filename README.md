# japanese-reading-practice

A calm, minimal reading app for Japanese short stories — furigana, romaji, and
English translations as independent, toggleable layers, with particles, verbs,
nouns, adjectives, and adverbs color-coded in the Japanese text.

Static site, no backend: everything reads from JSON files in
[`src/data/stories`](src/data/stories).

## Stack

React + TypeScript + Vite + Tailwind CSS, with `framer-motion` for the toggle
and transition animations and `lucide-react` for icons.

## Getting started

```bash
npm install
npm run dev
```

```bash
npm run build   # type-checks and builds to dist/
npm run preview # serve the production build locally
```

## Adding a story

Add a new JSON file to `src/data/stories/` following the `Story` shape in
[`src/types/story.ts`](src/types/story.ts), then register it in
[`src/data/stories/index.ts`](src/data/stories/index.ts). The array order in
that file drives the previous/next navigation at the bottom of the reading
panel, so place new stories where they should sit in the reading order.

Each sentence is tokenized word-by-word so the reader can annotate furigana
and part-of-speech color individually — see any existing story file for the
shape (`tokens`, each with `surface`, an optional `furigana`, and a `pos`).

## Project structure

```
src/
  types/story.ts          # Story, Sentence, Token and related types
  data/stories/            # one JSON file per story + the loader/index
  context/                 # ReaderSettingsContext (furigana/romaji/english toggles)
  hooks/useStoryLibrary.ts # search, JLPT filter, and story selection state
  lib/                      # small pure helpers (POS color mapping, token → text)
  components/
    layout/                 # AppLayout (desktop split view / mobile drawer)
    sidebar/                # search, JLPT filter, story list
    reader/                 # story header, sentence blocks, vocab & grammar, nav
    ui/                      # generic pieces (Badge, CollapsibleSection, EmptyState)
```
