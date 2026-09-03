// STUB — DELETE AT STITCH TIME. See button.tsx for context.
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
