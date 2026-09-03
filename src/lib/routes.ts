// STUB — DELETE AT STITCH TIME.
// Owned by Agent 1 at this same path, reproduced verbatim from the work
// order. Delete this file when Agent 1's real src/lib/routes.ts lands at
// the same path.

export const ROUTES = {
  scanHistory: "/scans",
  scanDetail: (id: string) => `/scans/${id}`,
  scanReview: (id: string) => `/scans/${id}/review`, // Agent 5's page, only linked to
};

export interface NavItem {
  label: string;
  path: string;
  roles?: string[];
}
