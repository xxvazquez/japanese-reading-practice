# Japanese Reading Practice

A calm, minimal reading app for Japanese short stories. Furigana, romaji, and
English translations are independent layers you can toggle on or off, and
every sentence is broken down word by word with particles, verbs, nouns,
adjectives, and adverbs color-coded.

Static site, no backend — stories live as JSON files in the repo.

## Features

- Story library with search and JLPT level filtering (currently N5 only —
  see [Adding a new JLPT level](#adding-a-new-jlpt-level))
- Sentence-by-sentence reading view, tokenized word by word
- Independent toggles for furigana, romaji, and English in the reading view
- Part-of-speech color highlighting (particles, verbs, nouns, adjectives, adverbs)
- Click any word to open a grammar note — dictionary form, verb group,
  particle function, example sentences — written for a true beginner
- Vocabulary table (Japanese/romaji/English/type columns) with its own
  furigana/romaji/English toggles, persisted across visits, plus A–Z sorting
- Grammar-point summary per story
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
  types/story.ts             # Story, Sentence, Token and related types
  types/grammar.ts            # types for the interactive grammar notes
  content/
    stories/                   # story content, grouped by JLPT level
      n5/
      index.ts                  # loader — registers every story and its reading order
    grammar/                   # particle/verb/adjective/word notes, keyed by grammarKey
  context/                    # ReaderSettingsContext — furigana/romaji/english toggle state
  hooks/
    useStoryLibrary.ts          # search, JLPT filter, and story selection state
    useVocabularyDisplaySettings.ts # persisted furigana/romaji/english toggles for the vocab table
  utils/                      # small pure helpers (POS color mapping, furigana parsing, token → text)
  components/
    layout/                    # AppLayout — desktop split view / mobile drawer
    sidebar/                   # search, JLPT filter, story list
    reader/                    # story header, sentence blocks, vocab table, grammar panel, nav
    ui/                         # generic pieces (CollapsibleSection, EmptyState)
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

Sentences are arrays of tokens, and each token is broken into `parts` so
furigana lands only on the kanji — never on the okurigana next to it:

```json
{
  "parts": [{ "kanji": "住", "reading": "す" }, { "text": "んでいます" }],
  "pos": "verb",
  "grammarKey": "住む"
}
```

`grammarKey` is optional — set it when the word has an entry in
`src/content/grammar/` (see below), and that word becomes clickable in the
reading view. Particles also take an optional `contextNote`, a short
sentence-specific note (e.g. "marks 私 as the topic of this sentence") shown
above the shared particle explanation.

## Grammar notes

Clicking a word in the reading view opens a panel explaining it, written
from scratch for a true beginner — no grammar or terminology past what an
N5-level learner needs. The content lives in
`src/content/grammar/`, one file per part of speech (`particles.ts`,
`verbs.ts`, `adjectives.ts`, `words.ts`), keyed by dictionary form (or by
the particle itself). `words.ts` covers nouns and adverbs, and only gets an
entry when there's something genuinely worth adding beyond the vocabulary
list — most plain nouns don't have one, and simply aren't clickable.

Example sentences in these files are authored with a compact shorthand
(`src/utils/furigana.ts`) instead of hand-built part arrays:

```ts
parseFurigana("私[わたし]は 学生[がくせい]です。")
```

## Adding a new story

1. Create a new JSON file under `src/content/stories/<level>/` (e.g. `n5/`),
   following the shape of an existing story (title, sentences, vocabulary,
   grammar).
2. Tokenize each sentence — one entry per word/particle, with `parts`
   (kanji runs get a `reading`, kana runs don't) and `pos`.
3. If the word has a grammar note, add `grammarKey` (and, for particles, a
   `contextNote`) — see [Grammar notes](#grammar-notes).
4. Import and register it in `src/content/stories/index.ts`. The order of
   the array controls previous/next navigation, so place it where it
   belongs in the reading progression.

## Adding a new JLPT level

JLPT levels are typed as `"N5" | "N4" | "N3" | "N2" | "N1"` in
`src/types/story.ts`, but only N5 has content right now — the sidebar filter
reads levels straight off `src/content/stories/index.ts`, so it only shows
what actually has stories (and hides itself entirely when there's just one).
To add a level, create `src/content/stories/<level>/`, drop story JSON in,
and register it in the index — no other code changes needed.

## Design principles

- Muted, ocean-inspired palette (navy, slate blue, dusty teal) — no bright,
  neon, or warm/cream tones
- Generous whitespace, soft shadows, rounded corners
- Japanese text is always visible; furigana/romaji/English are optional layers on top
- Typography and spacing carry hierarchy, not color
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
