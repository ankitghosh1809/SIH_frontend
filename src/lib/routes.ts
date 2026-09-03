// STUB — DELETE AT STITCH TIME.
// Agent 1 owns the real src/lib/routes.ts (the full route map). Reproduced verbatim from the
// work order, only what Agent 2 (Screening) needs.

export const ROUTES = {
  scanDetail: (id: string) => `/scans/${id}`,
  upload: "/upload",
  batchUpload: "/upload/batch",
};

export interface NavItem {
  label: string;
  path: string;
  roles?: string[];
}
