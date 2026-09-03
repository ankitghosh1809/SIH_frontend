// STUB — DELETE AT STITCH TIME.
// Owned by Agent 1 (src/components/ProtectedRoute.tsx). Real signature
// per the work order: <ProtectedRoute roles?: UserRole[]>. This local
// copy has no real auth check — it just renders its children — so
// routes.tsx below can be built and previewed without a real auth flow.

import type { ReactNode } from "react";
import type { UserRole } from "@/types/api";

interface ProtectedRouteProps {
  children: ReactNode;
  roles?: UserRole[];
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  return <>{children}</>;
}
