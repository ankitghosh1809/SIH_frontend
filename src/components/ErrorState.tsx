// STUB — DELETE AT STITCH TIME.
// Owned by Agent 1 (src/components/ErrorState.tsx). Not given verbatim
// in the work order — used here for the 404 patient case and for
// generic fetch failures, so a minimal version is written here to
// build independently.

import type { ReactNode } from "react";

interface ErrorStateProps {
  title: string;
  description?: string;
  action?: ReactNode;
}

export function ErrorState({ title, description, action }: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-lg border border-destructive/30 bg-destructive/5 py-12 text-center">
      <p className="text-sm font-medium text-destructive">{title}</p>
      {description && (
        <p className="max-w-sm text-sm text-muted-foreground">{description}</p>
      )}
      {action}
    </div>
  );
}
