import { AppLayout } from "./components/layout/AppLayout";
import { Sidebar } from "./components/sidebar/Sidebar";
import { ReadingPanel } from "./components/reader/ReadingPanel";
import { ReaderSettingsProvider } from "./context/ReaderSettingsContext";
import { useStoryLibrary } from "./hooks/useStoryLibrary";

export default function App() {
  const {
    stories,
    searchQuery,
    setSearchQuery,
    activeLevels,
    toggleLevel,
    selectedStory,
    selectedStoryId,
    setSelectedStoryId,
  } = useStoryLibrary();

  return (
    <AppLayout
      selectedStoryId={selectedStoryId}
      sidebar={
        <Sidebar
          stories={stories}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          activeLevels={activeLevels}
          onToggleLevel={toggleLevel}
          selectedStoryId={selectedStoryId}
          onSelectStory={setSelectedStoryId}
        />
      }
    >
      {/* Layer toggles (furigana/romaji/english) live for the lifetime of the reading panel,
          so switching stories keeps whatever the reader last chose to show. */}
      <ReaderSettingsProvider>
        <ReadingPanel story={selectedStory} onSelectStory={setSelectedStoryId} />
      </ReaderSettingsProvider>
    </AppLayout>
  );
}
