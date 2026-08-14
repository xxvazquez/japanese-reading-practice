import { PenLine } from "lucide-react";
import type { GrammarPoint } from "../../types/story";
import { CollapsibleSection } from "../ui/CollapsibleSection";

export function GrammarSection({ grammar }: { grammar: GrammarPoint[] }) {
  return (
    <CollapsibleSection title="Grammar Used" icon={<PenLine className="h-4 w-4" strokeWidth={1.75} />} count={grammar.length}>
      <ul className="space-y-4">
        {grammar.map((point) => (
          <li key={point.pattern}>
            <p className="font-jp text-[15px] font-semibold text-ink">{point.pattern}</p>
            <p className="mt-1 text-sm leading-relaxed text-ink-soft">{point.explanation}</p>
          </li>
        ))}
      </ul>
    </CollapsibleSection>
  );
}
