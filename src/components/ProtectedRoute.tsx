// STUB — DELETE AT STITCH TIME.
// Agent 1 owns the real src/components/ProtectedRoute.tsx. The real version checks auth state
// and redirects unauthenticated users, optionally gated by `roles`. This stub renders children
// unconditionally so the screening routes are reachable during standalone development, matching
// the signature the work order names: <ProtectedRoute roles?: UserRole[]>.

import type { ReactNode } from "react";

type UserRole = string;

interface ProtectedRouteProps {
  children: ReactNode;
  roles?: UserRole[];
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  return <>{children}</>;
}
