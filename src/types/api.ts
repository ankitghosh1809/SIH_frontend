agent-6-admin
// STUB — DELETE AT STITCH TIME. Owned by Agent 1; only the shapes Agent 6 touches.
//
// DRIFT FROM THE WORK ORDER, confirmed against the live SIH_backend repo and a running
// instance (see PR description): AuditLogResponse there has no resource_type / resource_id —
// app/api/audit.py's Pydantic model only ever returns
// { id, actor, action, ip_address, created_at }. The work order's snippet for this type
// (copied from app/api/admin.py's shape, per that endpoint's own code comment) predates
// Agent Q's real audit implementation. Fixed here to match `/docs` since the work order
// says live wins on drift; AuditLogPage's table has no Resource column as a result.

export type UserRole = "admin" | "doctor" | "camp_staff";

export interface AdminStatsResponse {
  total_scans: number;
  by_risk_level: Record<string, number>;
  avg_inference_ms: number | null;
  by_model_version: Record<string, number>;
}

export interface AuditLogResponse {
  id: string;
  actor: string | null; // in practice always "authenticated" | "anonymous" today, not a username
  action: string;
  ip_address: string | null;
  created_at: string | null;
}

export interface NotificationResponse {
  id: string;
  event_type: string;
  scan_id: string | null;
  channel: string;
  message: string;
  is_read: boolean;
  created_at: string | null;
// STUB — DELETE AT STITCH TIME.
// Owned by Agent 1 (src/types/api.ts). This is a minimal local copy
// covering only what src/pages/patients/** touches, so Agent 4 can
// build and type-check independently. Delete this file at stitch
// time when Agent 1's real src/types/api.ts lands at this same path.
//
// `UserRole` is not in the work order's given snippet — added only
// because ProtectedRoute's stub signature (roles?: UserRole[]) needs
// it to exist. None of this module's routes actually pass a `roles`
// prop, so the exact members don't matter for this branch.

export type RiskLevel = "low" | "medium" | "high";

export type UserRole = "admin" | "doctor" | "technician";

export interface PatientCreate {
  full_name: string;
  age?: number | null;
  gender?: string | null;
  phone?: string | null;
  diabetes_type?: string | null;
}

export interface PatientResponse {
  id: string;
  full_name: string;
  age: number | null;
  gender: string | null;
  phone: string | null;
  diabetes_type: string | null;
  created_at: string;
}

export interface PatientScanSummary {
  scan_id: string;
  created_at: string;
  risk_level: RiskLevel | null;
  dr_probability: number | null;
  cataract_probability: number | null;
}

export interface TrendPoint {
  created_at: string;
  dr_probability: number | null;
  cataract_probability: number | null;
  risk_level: RiskLevel | null;
}

export interface TrendResponse {
  patient_id: string;
  points: TrendPoint[];
main
}
