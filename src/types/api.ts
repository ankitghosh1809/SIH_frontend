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
}
