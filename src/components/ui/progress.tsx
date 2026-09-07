// Hand-rolled, not a generated shadcn/ui primitive — agent-1-foundation's scaffold never
// included a Progress component, and the screening upload flow depends on one, so this stayed
// as-is at stitch time rather than being deleted like the other agents' throwaway UI stubs.
// Safe to swap for a real `npx shadcn add progress` output later; nothing else needs to change.
// Supports an indeterminate state (value=undefined) for the window after bytes are fully sent
// but before the server has responded, since we have no real percentage for that phase.

interface ProgressProps {
  value?: number;
  className?: string;
}

export function Progress({ value, className = "" }: ProgressProps) {
  const isIndeterminate = value === undefined;
  return (
    <div
      role="progressbar"
      aria-valuenow={isIndeterminate ? undefined : value}
      aria-valuemin={0}
      aria-valuemax={100}
      className={`h-2 w-full overflow-hidden rounded-full bg-slate-100 ${className}`}
    >
      <div
        className={`h-full rounded-full bg-slate-900 transition-all ${isIndeterminate ? "w-1/3 animate-pulse" : ""}`}
        style={isIndeterminate ? undefined : { width: `${value}%` }}
      />
    </div>
  );
}
