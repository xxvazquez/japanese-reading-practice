import { useMemo, useState } from "react";
import { stories } from "../content/stories";
import type { JlptLevel, Story } from "../types/story";

// Search matches on any title variant, since a learner might type either
// the kanji, the romaji, or the English translation.
function matchesSearch(story: Story, query: string): boolean {
  if (!query.trim()) return true;
  const needle = query.trim().toLowerCase();
  const japanese = story.title.tokens.map((t) => t.surface).join("");
  const haystack = [japanese, story.title.romaji, story.title.english]
    .join(" ")
    .toLowerCase();
  return haystack.includes(needle);
}

// Owns search, JLPT filtering, and which story is open, so App.tsx just wires it to the UI.
export function useStoryLibrary() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeLevels, setActiveLevels] = useState<Set<JlptLevel>>(new Set());
  const [selectedStoryId, setSelectedStoryId] = useState<string>(stories[0]?.id ?? "");

  const toggleLevel = (level: JlptLevel) => {
    setActiveLevels((prev) => {
      const next = new Set(prev);
      if (next.has(level)) next.delete(level);
      else next.add(level);
      return next;
    });
  };

  const filteredStories = useMemo(() => {
    return stories.filter((story) => {
      // No levels selected means "no filter" rather than "match nothing".
      const levelMatches = activeLevels.size === 0 || activeLevels.has(story.jlptLevel);
      return levelMatches && matchesSearch(story, searchQuery);
    });
  }, [searchQuery, activeLevels]);

  const selectedStory = useMemo(
    () => stories.find((story) => story.id === selectedStoryId) ?? null,
    [selectedStoryId],
  );

  return {
    stories: filteredStories,
    allStoriesCount: stories.length,
    searchQuery,
    setSearchQuery,
    activeLevels,
    toggleLevel,
    selectedStory,
    selectedStoryId,
    setSelectedStoryId,
  };
}
