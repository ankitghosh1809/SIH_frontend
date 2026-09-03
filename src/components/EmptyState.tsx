// STUB — DELETE AT STITCH TIME.
// Owned by Agent 1 at this same path. The work order names this component
// but doesn't give example code (unlike types/api.ts, lib/routes.ts,
// lib/api-client.ts, RiskBadge.tsx), so this is a minimal, generic version
// invented to unblock ScanHistoryPage's empty state during standalone dev.
// Delete this file when Agent 1's real src/components/EmptyState.tsx lands
// at the same path.

export interface EmptyStateProps {
  title: string;
  description?: string;
  action?: { label: string; href: string };
}

export function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-[var(--radius)] border border-dashed border-border px-6 py-16 text-center">
      <p className="text-base font-medium text-foreground">{title}</p>
      {description && (
        <p className="max-w-sm text-sm text-muted-foreground">{description}</p>
      )}
      {action && (
        <a
          href={action.href}
          className="mt-2 inline-flex h-9 items-center justify-center rounded-[var(--radius)] bg-primary px-4 text-sm font-medium text-primary-foreground hover:opacity-90"
        >
          {action.label}
        </a>
      )}
    </div>
  );
}
