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
}
