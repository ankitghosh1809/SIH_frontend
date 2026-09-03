// STUB — DELETE AT STITCH TIME.
// Owned by Agent 1 at this same path. Same situation as EmptyState.tsx: the
// work order names this component but gives no example code, so this is a
// minimal, generic version invented to unblock ScanDetailPage's 404 /
// network-error states during standalone dev. Delete this file when Agent
// 1's real src/components/ErrorState.tsx lands at the same path.

export interface ErrorStateProps {
  title: string;
  description?: string;
  action?: { label: string; href: string };
}

export function ErrorState({ title, description, action }: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-[var(--radius)] border border-border bg-muted/40 px-6 py-16 text-center">
      <p className="text-base font-medium text-foreground">{title}</p>
      {description && (
        <p className="max-w-sm text-sm text-muted-foreground">{description}</p>
      )}
      {action && (
        <a
          href={action.href}
          className="mt-2 inline-flex h-9 items-center justify-center rounded-[var(--radius)] border border-border px-4 text-sm font-medium hover:bg-muted"
        >
          {action.label}
        </a>
      )}
    </div>
  );
}
