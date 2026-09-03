// STUB — DELETE AT STITCH TIME. Not given verbatim in the work order (only listed as
// something Agent 1 owns); shape here is the minimal one Agent 6's pages need.
import type { LucideIcon } from "lucide-react";

interface EmptyStateProps {
  title: string;
  description?: string;
  icon?: LucideIcon;
}

export function EmptyState({ title, description, icon: Icon }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-neutral-200 py-16 text-center">
      {Icon && <Icon className="mb-3 h-8 w-8 text-neutral-300" />}
      <p className="text-sm font-medium text-neutral-900">{title}</p>
      {description && <p className="mt-1 text-sm text-neutral-500">{description}</p>}
    </div>
  );
}
