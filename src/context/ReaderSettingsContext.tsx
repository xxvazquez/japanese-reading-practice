import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

export type ReaderLayer = "furigana" | "romaji" | "english";

interface ReaderSettingsValue {
  layers: Record<ReaderLayer, boolean>;
  toggleLayer: (layer: ReaderLayer) => void;
}

const ReaderSettingsContext = createContext<ReaderSettingsValue | null>(null);

// Lives above the reading panel so any sentence, deep in the tree, can read
// or flip a layer without threading props through every parent.
export function ReaderSettingsProvider({ children }: { children: ReactNode }) {
  const [layers, setLayers] = useState<Record<ReaderLayer, boolean>>({
    furigana: true,
    romaji: true,
    english: true,
  });

  const toggleLayer = (layer: ReaderLayer) => {
    setLayers((prev) => ({ ...prev, [layer]: !prev[layer] }));
  };

  const value = useMemo(() => ({ layers, toggleLayer }), [layers]);

  return (
    <ReaderSettingsContext.Provider value={value}>
      {children}
    </ReaderSettingsContext.Provider>
  );
}

export function useReaderSettings() {
  const ctx = useContext(ReaderSettingsContext);
  if (!ctx) {
    throw new Error("useReaderSettings must be used within a ReaderSettingsProvider");
  }
  return ctx;
}
