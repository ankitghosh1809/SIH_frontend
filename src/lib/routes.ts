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
};

export interface NavItem {
  label: string;
  path: string;
  roles?: string[];
}
