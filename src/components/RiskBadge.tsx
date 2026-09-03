// STUB — DELETE AT STITCH TIME.
// Agent 1 owns the real src/components/RiskBadge.tsx. Reproduced verbatim from the work order.

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
