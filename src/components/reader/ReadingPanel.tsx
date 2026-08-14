import { motion, AnimatePresence } from "framer-motion";
import type { Story } from "../../types/story";
import { getAdjacentStories } from "../../content/stories";
import { StoryHeader } from "./StoryHeader";
import { SentenceBlock } from "./SentenceBlock";
import { VocabularySection } from "./VocabularySection";
import { GrammarSection } from "./GrammarSection";
import { StoryNavigation } from "./StoryNavigation";
import { EmptyState } from "../ui/EmptyState";

interface ReadingPanelProps {
  story: Story | null;
  onSelectStory: (id: string) => void;
}

export function ReadingPanel({ story, onSelectStory }: ReadingPanelProps) {
  if (!story) {
    return <EmptyState message="Choose a story from the library to start reading." />;
  }

  const { previous, next } = getAdjacentStories(story.id);

  return (
    <div className="mx-auto max-w-2xl px-6 py-14 sm:px-10 sm:py-20">
      {/* Re-keying on story.id restarts the fade whenever the reader switches stories. */}
      <AnimatePresence mode="wait">
        <motion.div
          key={story.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <StoryHeader story={story} />

          <div className="divide-y divide-ink/[0.05]">
            {story.sentences.map((sentence, i) => (
              <SentenceBlock key={sentence.id} sentence={sentence} index={i} />
            ))}
          </div>

          <div className="mt-16 space-y-4">
            <VocabularySection vocabulary={story.vocabulary} />
            <GrammarSection grammar={story.grammar} />
          </div>

          <div className="mt-10">
            <StoryNavigation previous={previous} next={next} onNavigate={onSelectStory} />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
