import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Library, X } from "lucide-react";

interface AppLayoutProps {
  sidebar: ReactNode;
  children: ReactNode;
  /** Closes the mobile drawer automatically once a story has been picked. */
  selectedStoryId: string;
}

export function AppLayout({ sidebar, children, selectedStoryId }: AppLayoutProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [selectedStoryId]);

  return (
    <div className="h-screen bg-paper text-ink">
      {/* Desktop: sidebar and reading panel scroll independently side by side. */}
      <div className="hidden h-full md:grid md:grid-cols-[360px_1fr]">
        <aside className="h-full overflow-y-auto border-r border-ink/[0.06] bg-paper-soft/60">
          {sidebar}
        </aside>
        <main className="h-full overflow-y-auto">{children}</main>
      </div>

      {/* Mobile: reading panel is full-width, library opens as a slide-over drawer. */}
      <div className="flex h-full flex-col md:hidden">
        <div className="flex shrink-0 items-center justify-between border-b border-ink/[0.06] bg-paper-soft/60 px-4 py-3">
          <span className="font-jp text-base font-semibold">読む</span>
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-ink-soft shadow-sm"
          >
            <Library className="h-3.5 w-3.5" strokeWidth={1.75} />
            Library
          </button>
        </div>
        <main className="min-h-0 flex-1 overflow-y-auto">{children}</main>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-ink/20 md:hidden"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
              className="fixed inset-y-0 left-0 z-50 w-[85%] max-w-sm bg-paper shadow-xl md:hidden"
            >
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close library"
                className="absolute right-3 top-4 rounded-full p-1.5 text-ink-faint"
              >
                <X className="h-5 w-5" strokeWidth={1.75} />
              </button>
              {sidebar}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
