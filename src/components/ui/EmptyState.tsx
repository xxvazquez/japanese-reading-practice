import { BookOpen } from "lucide-react";

export function EmptyState({ message }: { message: string }) {
  return (
    <div className="flex flex-col items-center gap-3 px-6 py-16 text-center text-ink-faint">
      <BookOpen className="h-6 w-6" strokeWidth={1.5} />
      <p className="text-sm">{message}</p>
    </div>
  );
}
