import { useEffect, useState } from "react";

export interface VocabularyDisplaySettings {
  furigana: boolean;
  romaji: boolean;
  english: boolean;
}

const STORAGE_KEY = "vocabulary-display-settings";

const DEFAULTS: VocabularyDisplaySettings = {
  furigana: true,
  romaji: true,
  english: true,
};

function loadSettings(): VocabularyDisplaySettings {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULTS;
    return { ...DEFAULTS, ...JSON.parse(raw) };
  } catch {
    // Corrupt or blocked storage — just fall back to defaults rather than crash.
    return DEFAULTS;
  }
}

// Unlike the reading toggles, a learner's vocabulary display choices
// (e.g. hiding furigana to self-test) are worth remembering across visits.
export function useVocabularyDisplaySettings() {
  const [settings, setSettings] = useState<VocabularyDisplaySettings>(loadSettings);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch {
      // Storage may be unavailable (private browsing, quota) — the toggle
      // still works for the session, it just won't persist.
    }
  }, [settings]);

  const toggle = (key: keyof VocabularyDisplaySettings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return { settings, toggle };
}
