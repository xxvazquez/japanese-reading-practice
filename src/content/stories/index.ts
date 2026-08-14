import type { Story } from "../../types/story";
import watashiNoIchinichi from "./n5/watashi-no-ichinichi.json";
import nekoToWatashi from "./n5/neko-to-watashi.json";
import shumatsuNoYotei from "./n4/shumatsu-no-yotei.json";

/**
 * Stories are ordered deliberately (roughly easiest first); this order
 * drives previous/next navigation in the reading panel.
 */
export const stories: Story[] = [
  watashiNoIchinichi as Story,
  nekoToWatashi as Story,
  shumatsuNoYotei as Story,
];

export function getStoryById(id: string): Story | undefined {
  return stories.find((story) => story.id === id);
}

export function getAdjacentStories(id: string): {
  previous: Story | null;
  next: Story | null;
} {
  const index = stories.findIndex((story) => story.id === id);
  if (index === -1) return { previous: null, next: null };
  return {
    previous: index > 0 ? stories[index - 1] : null,
    next: index < stories.length - 1 ? stories[index + 1] : null,
  };
}
