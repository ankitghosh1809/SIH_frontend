// STUB — DELETE AT STITCH TIME.
// Owned by Agent 1 (src/lib/routes.ts). Minimal local copy — only the
// entries this module needs.

export const ROUTES = {
  patients: "/patients",
  newPatient: "/patients/new",
  patientDetail: (id: string) => `/patients/${id}`,
  scanDetail: (id: string) => `/scans/${id}`, // Agent 3's page — we only link to it
};

export interface NavItem {
  label: string;
  path: string;
  roles?: string[];
}
