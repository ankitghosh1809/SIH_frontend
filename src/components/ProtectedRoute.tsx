// STUB — DELETE AT STITCH TIME.
// Owned by Agent 1 at this same path. Auth isn't built yet, so this stub is
// an unconditional pass-through matching the signature the work order
// describes (`<ProtectedRoute roles?: UserRole[]>`) purely so
// scans/routes.tsx type-checks and renders standalone. Agent 1's real
// version will gate on actual auth state / roles. Delete this file when
// Agent 1's real src/components/ProtectedRoute.tsx lands at the same path.

import type { ReactNode } from "react";

// Minimal placeholder so this stub's signature matches what the work order
// describes; Agent 1's real types/api.ts (or a dedicated auth types file)
// will define the authoritative version.
export type UserRole = "patient" | "doctor" | "admin";

export interface ProtectedRouteProps {
  children: ReactNode;
  roles?: UserRole[];
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  return <>{children}</>;
}
