import type { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import type { Token } from "../../types/story";
import type { GrammarExample, GrammarNote } from "../../types/grammar";
import { getGrammarNote } from "../../content/grammar";
import { POS_STYLES } from "../../utils/posStyles";
import { RubyText } from "./RubyText";

interface GrammarPanelProps {
  token: Token | null;
  onClose: () => void;
}

export function GrammarPanel({ token, onClose }: GrammarPanelProps) {
  const note = token ? getGrammarNote(token) : undefined;

  return (
    <AnimatePresence>
      {token && (
        <>
          <motion.div
            key="grammar-panel-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-ink/20"
          />
          <motion.div
            key="grammar-panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-md overflow-y-auto bg-paper-soft shadow-xl"
          >
            <div className="flex items-start justify-between gap-3 border-b border-ink/[0.08] px-6 py-5">
              <div>
                <p className="font-ui text-[11px] uppercase tracking-wide text-ink-faint">
                  {POS_STYLES[token.pos].label}
                </p>
                <RubyText parts={token.parts} showFurigana className="jp-text mt-1 text-2xl text-ink" />
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="shrink-0 rounded-full p-1.5 text-ink-faint transition-colors hover:bg-ink/5"
              >
                <X className="h-5 w-5" strokeWidth={1.75} />
              </button>
            </div>

            <div className="px-6 py-5">
              {note ? (
                <NoteBody token={token} note={note} />
              ) : (
                <p className="text-sm text-ink-faint">No notes for this word yet.</p>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="mb-5 last:mb-0">
      <p className="mb-1.5 font-ui text-[11px] uppercase tracking-wide text-ink-faint">{label}</p>
      {children}
    </div>
  );
}

function Examples({ examples }: { examples: GrammarExample[] }) {
  if (examples.length === 0) return null;
  return (
    <Field label={examples.length > 1 ? "Examples" : "Example"}>
      <div className="space-y-4">
        {examples.map((example, i) => (
          <div key={i}>
            <RubyText parts={example.parts} showFurigana className="jp-text text-base text-ink" />
            <p className="mt-1 font-serif text-sm italic text-ink-soft">{example.english}</p>
          </div>
        ))}
      </div>
    </Field>
  );
}

function NoteBody({ token, note }: { token: Token; note: GrammarNote }) {
  switch (note.kind) {
    case "particle":
      return (
        <>
          {token.contextNote && (
            <Field label="In this sentence">
              <p className="text-sm text-ink">{token.contextNote}</p>
            </Field>
          )}
          <Field label="Function">
            <p className="text-sm leading-relaxed text-ink-soft">{note.concise}</p>
          </Field>
          <Field label="Common uses">
            <ul className="space-y-1.5">
              {note.commonUses.map((use) => (
                <li key={use} className="text-sm leading-relaxed text-ink-soft">
                  {use}
                </li>
              ))}
            </ul>
          </Field>
          <Examples examples={note.examples} />
        </>
      );

    case "verb":
      return (
        <>
          <Field label="Dictionary form">
            <div className="flex flex-wrap items-baseline gap-x-2">
              <RubyText parts={note.dictionaryForm} showFurigana className="jp-text text-lg text-ink" />
              <span className="text-sm text-ink-faint">
                ({note.dictionaryFormRomaji}) — {note.meaning}
              </span>
            </div>
          </Field>
          <Field label="Verb group">
            <p className="text-sm text-ink-soft">
              Group {note.group}
              {note.transitivity ? ` · ${note.transitivity}` : ""}
            </p>
          </Field>
          <Field label="This form">
            <p className="text-sm leading-relaxed text-ink-soft">{note.formNote}</p>
          </Field>
          <Examples examples={note.examples} />
        </>
      );

    case "adjective":
      return (
        <>
          <Field label="Dictionary form">
            <div className="flex flex-wrap items-baseline gap-x-2">
              <RubyText parts={note.dictionaryForm} showFurigana className="jp-text text-lg text-ink" />
              <span className="text-sm text-ink-faint">
                ({note.dictionaryFormRomaji}) — {note.meaning}
              </span>
            </div>
          </Field>
          <Field label="Type">
            <p className="text-sm text-ink-soft">{note.type === "i" ? "い-adjective" : "な-adjective"}</p>
          </Field>
          <Field label="Grammar">
            <p className="text-sm leading-relaxed text-ink-soft">{note.grammarNote}</p>
          </Field>
          <Examples examples={note.examples} />
        </>
      );

    case "word":
      return <p className="text-sm leading-relaxed text-ink-soft">{note.note}</p>;
  }
}
