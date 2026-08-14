import { motion } from "framer-motion";
import clsx from "clsx";

interface LayerToggleProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

export function LayerToggle({ label, checked, onChange }: LayerToggleProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={onChange}
      className={clsx(
        "flex items-center gap-2 rounded-full py-1 pl-1 pr-2.5 text-xs transition-colors duration-300",
        checked ? "text-ink" : "text-ink-faint/70",
      )}
    >
      <span
        className={clsx(
          "relative flex h-[1.05rem] w-7 shrink-0 items-center rounded-full transition-colors duration-300",
          checked ? "bg-ink/70" : "bg-ink/15",
        )}
      >
        {/* framer-motion's `layout` animates the margin change into a slide, iOS-switch style */}
        <motion.span
          layout
          transition={{ type: "spring", stiffness: 500, damping: 32 }}
          className="h-3 w-3 rounded-full bg-white shadow-sm"
          style={{ marginLeft: checked ? "calc(100% - 0.75rem)" : "0.125rem" }}
        />
      </span>
      {label}
    </button>
  );
}
