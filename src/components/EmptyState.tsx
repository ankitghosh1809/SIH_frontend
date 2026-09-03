agent-6-admin
// STUB — DELETE AT STITCH TIME. Not given verbatim in the work order (only listed as
// something Agent 1 owns); shape here is the minimal one Agent 6's pages need.
import type { LucideIcon } from "lucide-react";
// STUB — DELETE AT STITCH TIME.
// Owned by Agent 1 (src/components/EmptyState.tsx). Not given verbatim
// in the work order — this module needs it for the patient list, the
// scan history table, and the trend chart's "not enough data" state,
// so a minimal version is written here to build independently.

import type { ReactNode } from "react";
main

interface EmptyStateProps {
  title: string;
  description?: string;
agent-6-admin
  icon?: LucideIcon;
}

export function EmptyState({ title, description, icon: Icon }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-neutral-200 py-16 text-center">
      {Icon && <Icon className="mb-3 h-8 w-8 text-neutral-300" />}
      <p className="text-sm font-medium text-neutral-900">{title}</p>
      {description && <p className="mt-1 text-sm text-neutral-500">{description}</p>}
  action?: ReactNode;
}

export function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-lg border border-dashed py-12 text-center">
      <p className="text-sm font-medium text-foreground">{title}</p>
      {description && (
        <p className="max-w-sm text-sm text-muted-foreground">{description}</p>
      )}
      {action}
main
    </div>
  );
}
