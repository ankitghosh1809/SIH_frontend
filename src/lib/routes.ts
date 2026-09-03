// STUB — DELETE AT STITCH TIME. Owned by Agent 1; only what Agent 6 needs.
import type { UserRole } from "@/types/api";

export const ROUTES = {
  admin: "/admin",
  auditLog: "/admin/audit-log",
  notifications: "/notifications",
};

export interface NavItem {
  label: string;
  path: string;
  roles?: UserRole[];
}
