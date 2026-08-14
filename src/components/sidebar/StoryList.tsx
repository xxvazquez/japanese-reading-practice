import type { Story } from "../../types/story";
import { StoryListItem } from "./StoryListItem";
import { EmptyState } from "../ui/EmptyState";

interface StoryListProps {
  stories: Story[];
  selectedStoryId: string;
  onSelect: (id: string) => void;
}

export function StoryList({ stories, selectedStoryId, onSelect }: StoryListProps) {
  if (stories.length === 0) {
    return <EmptyState message="No stories match your search or filters." />;
  }

  return (
    <div className="flex flex-col gap-2">
      {stories.map((story) => (
        <StoryListItem
          key={story.id}
          story={story}
          isActive={story.id === selectedStoryId}
          onSelect={() => onSelect(story.id)}
        />
      ))}
    </div>
  );
}
