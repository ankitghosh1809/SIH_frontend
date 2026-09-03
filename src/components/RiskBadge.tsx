// STUB — DELETE AT STITCH TIME.
// Owned by Agent 1 (src/components/RiskBadge.tsx). Matches the work
// order's given code, just importing RiskLevel instead of inlining the
// union so it can't drift from src/types/api.ts.

import type { RiskLevel } from "@/types/api";

interface RiskBadgeProps {
  level: RiskLevel | null;
}

export function RiskBadge({ level }: RiskBadgeProps) {
  if (!level) {
    return <span className="text-xs text-gray-400">no data</span>;
  }
  const color =
    level === "high"
      ? "bg-red-100 text-red-800"
      : level === "medium"
      ? "bg-amber-100 text-amber-800"
      : "bg-green-100 text-green-800";
  return (
    <span className={`rounded px-2 py-0.5 text-xs font-medium ${color}`}>
      {level}
    </span>
  );
}
