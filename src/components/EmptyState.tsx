// STUB — DELETE AT STITCH TIME.
// Owned by Agent 1 (src/components/EmptyState.tsx). Not given verbatim
// in the work order — this module needs it for the patient list, the
// scan history table, and the trend chart's "not enough data" state,
// so a minimal version is written here to build independently.

import type { ReactNode } from "react";

interface EmptyStateProps {
  title: string;
  description?: string;
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
    </div>
  );
}
