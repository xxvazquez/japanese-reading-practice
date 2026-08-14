import { POS_LEGEND_ORDER, POS_STYLES } from "../../utils/posStyles";

export function PosLegend() {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
      {POS_LEGEND_ORDER.map((pos) => {
        const style = POS_STYLES[pos];
        return (
          <div key={pos} className="flex items-center gap-1.5 text-[11px] text-ink-faint/80">
            <span className={`h-1.5 w-1.5 rounded-full opacity-70 ${style.swatch}`} />
            {style.label}
          </div>
        );
      })}
    </div>
  );
}
