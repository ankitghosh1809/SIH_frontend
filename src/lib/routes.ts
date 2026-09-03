agent-7-marketing-polish
// STUB — DELETE AT STITCH TIME. Owned by Agent 1 (src/lib/routes.ts).
// This is a minimal placeholder with only what Agent 7's marketing pages
// need, so this branch can be developed and built standalone. At stitch
// time, delete this file and let Agent 1's real src/lib/routes.ts (with
// the full route map for every agent's pages) take its place.
export const ROUTES = {
  home: "/",
  about: "/about",
  privacy: "/privacy",
  login: "/login",
  register: "/register",
// STUB — DELETE AT STITCH TIME.
// Owned by Agent 1 (src/lib/routes.ts). Minimal local copy — only the
// entries this module needs.

export const ROUTES = {
agent-4-patients
  patients: "/patients",
  newPatient: "/patients/new",
  patientDetail: (id: string) => `/patients/${id}`,
  scanDetail: (id: string) => `/scans/${id}`, // Agent 3's page — we only link to it
  scanDetail: (id: string) => `/scans/${id}`,
  upload: "/upload",
  batchUpload: "/upload/batch",
 main
main
};

export interface NavItem {
  label: string;
  path: string;
  roles?: string[];
}
