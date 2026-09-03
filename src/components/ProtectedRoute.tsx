// STUB — DELETE AT STITCH TIME. Matches the signature referenced across the work order:
// <ProtectedRoute roles?: UserRole[]>. No roles prop = any logged-in user (see Notifications
// in routes.tsx). Not authenticated -> redirect home. Wrong role -> in-place message rather
// than a redirect, so it's obvious in dev/QA *why* a route is blocked.
import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

import { ErrorState } from "@/components/ErrorState";
import { useAuth } from "@/contexts/AuthContext";
import type { UserRole } from "@/types/api";

interface ProtectedRouteProps {
  roles?: UserRole[];
  children: ReactNode;
}

export function ProtectedRoute({ roles, children }: ProtectedRouteProps) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/" replace />;
  }

  if (roles && !roles.includes(user.role)) {
    return <ErrorState title="Admins only" description="You don't have access to this page." />;
  }

  return <>{children}</>;
}
