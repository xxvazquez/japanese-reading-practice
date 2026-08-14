# Japanese Reading Practice

A calm, minimal reading app for Japanese short stories. Furigana, romaji, and
English translations are independent layers you can toggle on or off, and
every sentence is broken down word by word with particles, verbs, nouns,
adjectives, and adverbs color-coded.

Static site, no backend — stories live as JSON files in the repo.

## Features

- Story library with search and JLPT level filtering (N5–N1)
- Sentence-by-sentence reading view, tokenized word by word
- Independent toggles for furigana, romaji, and English
- Part-of-speech color highlighting (particles, verbs, nouns, adjectives, adverbs)
- Vocabulary and grammar breakdown per story
- Previous/next navigation between stories
- Responsive layout: two-pane on desktop, drawer on mobile

## Screenshots

_Coming soon._

## Tech stack

- React + TypeScript
- Vite
- Tailwind CSS
- Framer Motion (toggles, transitions)
- Lucide React (icons)

## Folder structure

```
src/
  types/story.ts          # Story, Sentence, Token and related types
  data/stories/            # one JSON file per story, plus the loader/index
  context/                 # ReaderSettingsContext — furigana/romaji/english toggle state
  hooks/useStoryLibrary.ts # search, JLPT filter, and story selection state
  lib/                      # small pure helpers (POS color mapping, token → text)
  components/
    layout/                 # AppLayout — desktop split view / mobile drawer
    sidebar/                # search, JLPT filter, story list
    reader/                 # story header, sentence blocks, vocab & grammar, nav
    ui/                      # generic pieces (Badge, CollapsibleSection, EmptyState)
```

## Getting started

```bash
npm install
npm run dev
```

Requires Node 18+.

## Available scripts

| Script            | What it does                        |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the dev server                 |
| `npm run build`   | Type-check and build to `dist/`      |
| `npm run preview` | Serve the production build locally   |
| `npm run lint`    | Run ESLint                           |

## How stories are stored

Each story is a single JSON file in `src/data/stories/`. There's no separate
file per layer — furigana, romaji, English, vocabulary, and grammar all live
together in one object, matching the `Story` type in `src/types/story.ts`.

Sentences are arrays of tokens rather than plain strings, so each word can
carry its own furigana reading and part of speech:

```json
{
  "surface": "住んでいます",
  "furigana": "すんでいます",
  "pos": "verb"
}
```

## Adding a new story

1. Create a new JSON file in `src/data/stories/`, following the shape of an
   existing story (title, sentences, vocabulary, grammar).
2. Tokenize each sentence — one entry per word/particle, with `surface`,
   an optional `furigana` (only needed if the surface has kanji), and `pos`.
3. Import and register it in `src/data/stories/index.ts`. The order of the
   array controls previous/next navigation, so place it where it belongs in
   the reading progression.

## Adding a new JLPT level

JLPT levels are typed as `"N5" | "N4" | "N3" | "N2" | "N1"` in
`src/types/story.ts` — all five already exist and show up automatically in
the sidebar filter. You don't need to add anything to support a new level;
just tag a story with the right `jlptLevel` and it'll appear under that
filter.

## Design principles

- Muted, pastel palette — no bright or saturated colors
- Generous whitespace, soft shadows, rounded corners
- Japanese text is always visible; furigana/romaji/English are optional layers on top
- Subtle motion, never decorative for its own sake
- No gamification, streaks, or badges — this is a reading app, not a habit tracker

## Future ideas

- Audio playback per sentence
- Reading progress / bookmarks (stored locally, no account needed)
- Dark mode
- Furigana size adjustment for accessibility
- Export vocabulary to a flashcard format (Anki, etc.)

## License

MIT — see [LICENSE](LICENSE).
