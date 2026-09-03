# Agent 6 (Admin, Audit & Notifications) — handoff notes

Built by Claude in a sandboxed environment (not a local machine), against the work order at
`06_Agent_6_Admin.md`, verified against a live local instance of the real `SIH_backend` repo.
Not committed as a source file's neighbor by accident — kept at the root, one level up from
`src/pages/admin/README.md`'s shorter version, since it also covers the scaffold/harness split
below, which is a repo-wide concern, not an admin/-only one.

## What's the real deliverable vs. what's throwaway

**Real (Agent 6's actual scope):**
- `src/pages/admin/**` — all of it
- The 8 Task 1 stub files, each marked `STUB — DELETE AT STITCH TIME`:
  `src/types/api.ts`, `src/lib/routes.ts`, `src/lib/api-client.ts`,
  `src/contexts/AuthContext.tsx`, `src/components/RiskBadge.tsx`, `src/components/EmptyState.tsx`,
  `src/components/ErrorState.tsx`, `src/components/ProtectedRoute.tsx`

**Throwaway (standalone dev harness — discard at stitch time):**
- `package.json`, `vite.config.ts`, `tsconfig.json`, `index.html`, `src/index.css`,
  `src/main.tsx`, `src/App.tsx`, `.gitignore`
- `src/lib/utils.ts` and everything under `src/components/ui/` — hand-authored shadcn-style
  primitives (Card, Table, Skeleton, Badge, Button, Input, Switch). The work order's own
  instruction was `npx shadcn@latest add ...`; that CLI needs `ui.shadcn.com`, which this
  sandbox's network allowlist doesn't include, so these are functionally-equivalent
  hand-written replacements using the same `@/components/ui/*` import paths a real
  `shadcn add` would produce. Safe to regenerate for real or keep — either way nothing in
  `src/pages/admin/**` needs to change.

None of the throwaway files were needed to satisfy the "only touch `src/pages/admin/` + stubs"
scope lock on purpose — they exist because *something* has to make `npm run build` possible
before Agent 1's real scaffold lands in this branch, same reasoning as the Task 1 stubs
themselves, just for project setup instead of shared components.

## One deliberate stub addition

`src/contexts/AuthContext.tsx` exports the context object itself (`AuthContext`), not just
`useAuth` as the work order's snippet shows. That's solely so `src/App.tsx`'s dev role
switcher can drive a real logged-in role for local testing. Every file under
`src/pages/admin/` only ever imports `useAuth` — the addition doesn't change that contract.

## One drift from the work order, fixed against the live repo

`AuditLogResponse` in the work order's Task 1 snippet includes `resource_type` and
`resource_id`. The real `app/api/audit.py` in `SIH_backend` never sends either field —
confirmed both by reading the source and by a live request against a running instance. Fixed
in `src/types/api.ts` (comment there explains it), and `AuditLogPage.tsx`'s table has no
Resource column as a result. Also worth knowing: `actor` in practice is always the literal
string `"authenticated"` or `"anonymous"` (never a username, never null) — the audit
middleware only checks for the presence of an Authorization header today.

## Stitching

Delete the throwaway harness + Task 1 stubs, confirm `src/pages/admin/routes.tsx` still
exports exactly `adminRoutes` and `adminNavItems`, confirm `App.tsx` (Agent 1's real one)
imports from that path. Should be a clean drop-in.
