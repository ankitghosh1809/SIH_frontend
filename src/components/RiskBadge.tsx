// STUB — DELETE AT STITCH TIME.
// Owned by Agent 1 at this same path, reproduced verbatim from the work
// order. Delete this file when Agent 1's real src/components/RiskBadge.tsx
// lands at the same path.

export function RiskBadge({ level }: { level: "low" | "medium" | "high" }) {
  const color =
    level === "high"
      ? "bg-red-100 text-red-800"
      : level === "medium"
      ? "bg-amber-100 text-amber-800"
      : "bg-green-100 text-green-800";
  return (
    <span className={`rounded px-2 py-0.5 text-xs font-medium ${color}`}>{level}</span>
  );
}
