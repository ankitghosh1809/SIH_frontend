// STUB — DELETE AT STITCH TIME.
// Agent 1 owns the real src/types/api.ts (the full shared contract). This is only the slice
// Agent 2 (Screening) touches, reproduced verbatim from the work order.

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

export interface BatchItemResult {
  filename: string;
  scan_id: string | null;
  risk_level: RiskLevel | null;
  error: string | null;
}

export interface BatchSummary {
  total: number;
  succeeded: number;
  failed: number;
  low_risk: number;
  medium_risk: number;
  high_risk: number;
}

export interface BatchResponse {
  results: BatchItemResult[];
  summary: BatchSummary;
}
