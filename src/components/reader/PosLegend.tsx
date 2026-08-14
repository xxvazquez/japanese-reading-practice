import { POS_LEGEND_ORDER, POS_STYLES } from "../../lib/posStyles";

export function PosLegend() {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
      {POS_LEGEND_ORDER.map((pos) => {
        const style = POS_STYLES[pos];
        return (
          <div key={pos} className="flex items-center gap-1.5 text-xs text-ink-faint">
            <span className={`h-1.5 w-1.5 rounded-full ${style.swatch}`} />
            {style.label}
          </div>
        );
      })}
    </div>
  );
}
