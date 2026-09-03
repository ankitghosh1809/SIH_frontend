// STUB — DELETE AT STITCH TIME.
// Owned by Agent 1 at this same path. This is the minimal subset the work
// order gave for what Agent 3's scan pages touch, reproduced verbatim.
// Delete this file when Agent 1's real src/types/api.ts lands at the same
// path; nothing in src/pages/scans/ should need to change as a result.
//
// Verified against the live SIH_backend (app/schemas.py, app/schemas_explain.py,
// commit as of 2026-09-03): field names and shapes below match exactly, no
// drift found.

export type RiskLevel = "low" | "medium" | "high";

export interface PredictionField {
  positive: boolean;
  probability: number;
  uncertainty?: number | null;
}

export interface Prediction {
  diabetic_retinopathy: PredictionField;
  cataract: PredictionField;
}

export interface ScanResponse {
  scan_id: string;
  created_at: string;
  prediction: Prediction;
  risk_level: RiskLevel;
  heatmap_url: string;
  model_version: string;
}

export interface ScanListItem {
  scan_id: string;
  created_at: string;
  risk_level: RiskLevel;
  thumbnail_url: string;
}

export interface ExplainResponse {
  scan_id: string;
  dr_uncertainty: number;
  cataract_uncertainty: number;
  explanation_text: string;
}

export interface ReferralSuggestion {
  suggested: boolean;
  reason: string | null;
}
