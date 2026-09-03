agent-6-admin
// STUB — DELETE AT STITCH TIME. Not given verbatim in the work order (only listed as
// something Agent 1 owns); shape here is the minimal one Agent 6's pages need.
interface ErrorStateProps {
  title: string;
  description?: string;
}

export function ErrorState({ title, description }: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-red-200 bg-red-50 py-16 text-center">
      <p className="text-sm font-medium text-red-900">{title}</p>
      {description && <p className="mt-1 text-sm text-red-700">{description}</p>}
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
main
    </div>
  );
}
