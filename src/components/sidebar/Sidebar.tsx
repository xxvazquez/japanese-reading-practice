import type { JlptLevel, Story } from "../../types/story";
import { SearchBar } from "./SearchBar";
import { JlptFilter } from "./JlptFilter";
import { StoryList } from "./StoryList";

interface SidebarProps {
  stories: Story[];
  searchQuery: string;
  onSearchChange: (value: string) => void;
  activeLevels: Set<JlptLevel>;
  onToggleLevel: (level: JlptLevel) => void;
  selectedStoryId: string;
  onSelectStory: (id: string) => void;
}

export function Sidebar({
  stories,
  searchQuery,
  onSearchChange,
  activeLevels,
  onToggleLevel,
  selectedStoryId,
  onSelectStory,
}: SidebarProps) {
  return (
    <div className="flex h-full flex-col">
      <div className="shrink-0 space-y-4 px-5 pb-4 pt-6">
        <div>
          <h1 className="font-jp text-xl font-semibold text-ink">読む</h1>
          <p className="mt-0.5 text-xs uppercase tracking-[0.2em] text-ink-faint">
            Reading Practice
          </p>
        </div>
        <SearchBar value={searchQuery} onChange={onSearchChange} />
        <JlptFilter activeLevels={activeLevels} onToggle={onToggleLevel} />
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto px-5 pb-8">
        <StoryList
          stories={stories}
          selectedStoryId={selectedStoryId}
          onSelect={onSelectStory}
        />
      </div>
    </div>
  );
}
