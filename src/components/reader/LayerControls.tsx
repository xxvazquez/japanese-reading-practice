import { useReaderSettings } from "../../context/ReaderSettingsContext";
import { LayerToggle } from "./LayerToggle";

const LAYER_LABELS = {
  furigana: "Furigana",
  romaji: "Romaji",
  english: "English",
} as const;

export function LayerControls() {
  const { layers, toggleLayer } = useReaderSettings();

  return (
    <div className="flex flex-wrap items-center gap-1">
      {(Object.keys(LAYER_LABELS) as Array<keyof typeof LAYER_LABELS>).map((layer) => (
        <LayerToggle
          key={layer}
          label={LAYER_LABELS[layer]}
          checked={layers[layer]}
          onChange={() => toggleLayer(layer)}
        />
      ))}
    </div>
  );
}
