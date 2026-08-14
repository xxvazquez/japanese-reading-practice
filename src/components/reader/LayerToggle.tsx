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
        "flex items-center gap-2 rounded-full border py-1.5 pl-1.5 pr-3 text-xs font-medium transition-colors duration-300",
        checked
          ? "border-ink/10 bg-white shadow-sm text-ink"
          : "border-transparent bg-paper-muted text-ink-faint",
      )}
    >
      <span
        className={clsx(
          "relative flex h-[1.125rem] w-8 shrink-0 items-center rounded-full transition-colors duration-300",
          checked ? "bg-accent-matcha" : "bg-ink/15",
        )}
      >
        {/* framer-motion's `layout` animates the margin change into a slide, iOS-switch style */}
        <motion.span
          layout
          transition={{ type: "spring", stiffness: 500, damping: 32 }}
          className="h-3.5 w-3.5 rounded-full bg-white shadow"
          style={{ marginLeft: checked ? "calc(100% - 0.875rem)" : "0.125rem" }}
        />
      </span>
      {label}
    </button>
  );
}
