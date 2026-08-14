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
  types/story.ts            # Story, Sentence, Token and related types
  content/stories/           # story content, grouped by JLPT level
    n5/
    n4/
    index.ts                  # loader — registers every story and its reading order
  context/                   # ReaderSettingsContext — furigana/romaji/english toggle state
  hooks/useStoryLibrary.ts   # search, JLPT filter, and story selection state
  utils/                     # small pure helpers (POS color mapping, token → text)
  components/
    layout/                   # AppLayout — desktop split view / mobile drawer
    sidebar/                  # search, JLPT filter, story list
    reader/                   # story header, sentence blocks, vocab & grammar, nav
    ui/                        # generic pieces (Badge, CollapsibleSection, EmptyState)
```

`content/` holds the Japanese stories and their translations; everything
else is application code. Keeping them apart means anyone adding a story
never has to touch a `.tsx` file.

## Getting started

```bash
npm install
npm run dev
```

Requires Node 18+.

## Available scripts

| Script               | What it does                        |
| -------------------- | ------------------------------------ |
| `npm run dev`        | Start the dev server                 |
| `npm run build`      | Type-check and build to `dist/`      |
| `npm run typecheck`  | Type-check only, no build output     |
| `npm run preview`    | Serve the production build locally   |
| `npm run lint`       | Run ESLint                           |

## CI

Every push and pull request runs `.github/workflows/ci.yml`: install,
type-check, lint, build. All four have to pass. If a check goes red, run
the matching script locally (`npm run typecheck`, `npm run lint`,
`npm run build`) to reproduce it before pushing again.

## Deployment

Pushes to `main` deploy automatically to GitHub Pages via
`.github/workflows/deploy.yml`. You can also trigger a deploy manually from
the Actions tab.

Live at: https://xxvazquez.github.io/japanese-reading-practice/

One-time repo setup: under Settings → Pages, set **Source** to
**GitHub Actions**.

## How stories are stored

Each story is a single JSON file under `src/content/stories/<level>/` (e.g.
`src/content/stories/n5/`). There's no separate file per layer — furigana,
romaji, English, vocabulary, and grammar all live together in one object,
matching the `Story` type in `src/types/story.ts`.

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

1. Create a new JSON file under `src/content/stories/<level>/` (e.g. `n5/`),
   following the shape of an existing story (title, sentences, vocabulary,
   grammar).
2. Tokenize each sentence — one entry per word/particle, with `surface`,
   an optional `furigana` (only needed if the surface has kanji), and `pos`.
3. Import and register it in `src/content/stories/index.ts`. The order of
   the array controls previous/next navigation, so place it where it
   belongs in the reading progression.

## Adding a new JLPT level

JLPT levels are typed as `"N5" | "N4" | "N3" | "N2" | "N1"` in
`src/types/story.ts` — all five already exist and show up automatically in
the sidebar filter. If a level doesn't have a content folder yet (N3, N2,
N1), just create `src/content/stories/<level>/` and drop the story JSON in
— no other code changes needed.

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
