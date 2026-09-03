# Accessibility audit — SIH_frontend

Owner: Agent 7 (Public Site, Accessibility Pass & Final Polish)
Status: partial. Agent 7's own four pages are audited and fixed directly.
Agents 1-6 are pending; see section 2.

## Status and scope

As of this audit, `SIH_frontend`'s remote has only the `main` branch
(checked with `git ls-remote --heads origin`) and no other agent has
pushed a branch yet, so there's no combined preview and nothing of
Agents 1-6's to review. Per the work order, that part of this audit
needs the real, rendered pages, not a document written from a work
order description, so section 2 below is queued up rather than
attempted.

**Ankit: let me know when the other six branches, or a combined
preview, are ready, and I'll come back and complete section 2.**

What is done now: a self-audit of Agent 7's own pages against the same
checklist, since those exist today and are files this agent owns.
Issues found were fixed directly rather than only reported, per the
work order's one exception to "report, don't fix."

## Method (Agent 7's own pages)

No headless browser is reachable from this build sandbox:
`ui.shadcn.com`, Google Fonts, and Playwright's Chromium download all
returned `host_not_allowed` from the network egress proxy. A literal
mouse-free click-through wasn't possible here, so this audit used
three browser-free methods instead, each verifying a real property of
the shipped code rather than a description of it:

1. Server-rendered all four pages with `react-dom/server` (wrapped in
   `StaticRouter` for each real route) and inspected the actual output
   with `cheerio`: heading tag sequence, landmark counts, count of real
   `<a>`/`<button>` elements, `aria-hidden` on every inline SVG.
2. Grepped the page source for `onClick` on a `div`/`span`,
   `tabIndex`/`role="button"`, the em dash character, and the banned
   filler verbs.
3. Computed WCAG contrast ratios (the standard relative-luminance
   formula) for every text/background color pair actually used.

A real keyboard click-through at both viewport widths is still worth
doing before merge. This method checks the same underlying properties
a keyboard or screen-reader user depends on, but it isn't a substitute
for using one.

## 1. Agent 7's own pages

### Icon-only buttons and form inputs have real labels
N/A. No icon-only buttons and no form inputs on these four pages (no
forms are in this agent's scope).

### Every interactive element is keyboard reachable and operable, with a visible focus state
Confirmed, with one issue found and fixed. Every interactive control on
these pages is a native `<a>` (either `react-router-dom`'s `Link`
directly, or wrapped by the `Button` component via `asChild`) - none
are custom-built from a `div`/`span`, so reachability and activation
come from the browser rather than custom code.

- `src/components/ui/button.tsx:8` - the shared `Button` primitive
  already ships its own `focus-visible:border-ring
  focus-visible:ring-ring/50 focus-visible:ring-[3px]` treatment.
- **Found and fixed:** plain text `<Link>` elements had no focus style
  of their own - `src/pages/marketing/components/SiteFooter.tsx:35`,
  `src/pages/marketing/HomePage.tsx:62`, `HomePage.tsx:91`,
  `HomePage.tsx:135`, `src/pages/marketing/AboutPage.tsx:118`,
  `src/pages/marketing/PrivacyPage.tsx:138`. They were still keyboard
  focusable via the browser's default outline (technically compliant),
  but that default didn't match the Button's teal ring, and depended on
  a global style this branch doesn't ship. Fix applied directly: added
  explicit `focus-visible:outline-2 focus-visible:outline-offset-2
  focus-visible:outline-primary` to each.

### Every image has meaningful alt text
N/A. Zero `<img>` elements on these pages. The one illustration
(`src/pages/marketing/components/RetinaScanIllustration.tsx`) is an
inline decorative SVG marked `aria-hidden="true"`; it adds no
information beyond what the surrounding copy already states.

### Color is never the only signal
N/A for these four pages specifically - none render a color-coded
status or risk indicator (that's `RiskBadge`, which belongs to
whichever agent builds scan results or doctor review, not rendered
here). Carried forward as the first item in section 2, since it's the
exact case the work order's checklist names.

Related but distinct (not its own checklist item, still worth
recording): every text/background color pair actually used on these
pages was checked against the real WCAG contrast formula. All pass AA
for normal text; the lowest is muted caption text on the muted section
background at 5.34:1 against a 4.5:1 requirement.

### Every async view has a real loading, empty, and error state
N/A. These pages are fully static. Per the work order, Agent 7 doesn't
call any backend endpoint directly, so there's no async view here to
have a loading, empty, or error state.

### Heading hierarchy is logical: one h1, nested h2/h3, no skipped levels
Confirmed by server-rendering each page and reading the real heading
sequence back:

- HomePage: `h1` (line 43) then `h2` (80) then five `h3`s, one per
  step (106) then `h2` (122)
- AboutPage: `h1` (20) then `h2` (40) then `h2` (96)
- PrivacyPage: `h1` (33) then `h2` (51) then `h2` (75) then `h2` (105)
- NotFoundPage: `h1` (11) only

Exactly one `h1` on every page; no level is skipped on any of them.

### No div or span stands in for a button or link
Confirmed. `grep -rn "onClick" src/pages/marketing/` and a search for
`tabIndex` / `role="button"` both return nothing.

## 2. Agents 1-6 (pending)

Nothing to review yet. Once a branch or a combined preview exists, run
the full checklist against the real rendered pages and record findings
here in `file:line — issue — fix` format, one section per agent:

- [ ] **Agent 1** (Foundation/Design/Auth): confirm the shared layout
  renders exactly one `<main>` landmark around routed page content, and
  that it aggregates every agent's `NavItems` (including this branch's
  `marketingNavItems`) into one header. Agent 7's pages assume both and
  deliberately don't render their own header or `<main>`, to avoid a
  doubled landmark or nav bar at stitch time - flag back to Agent 7 if
  either assumption is wrong. Also: login/register form inputs have
  real `<label>` elements, not placeholder-only.
- [ ] **Agent 2** (Screening Workflow): loading, empty, and error
  states on the upload flow, not just the happy path.
- [ ] **Agent 3** (Scan Results & Explainability): `alt` text on
  heatmap and thumbnail images. **Confirm `RiskBadge` shows a text
  label and isn't color-only** - the specific case the work order's
  checklist names.
- [ ] **Agent 4** (Patient Registry): form input labels; table/list
  keyboard operability.
- [ ] **Agent 5** (Doctor Review & Referrals): review-action controls
  (icon-only buttons need `aria-label`); loading/empty/error states.
- [ ] **Agent 6** (Admin/Audit/Notifications): data-table and
  notification-list keyboard operability; loading/empty/error states.

## For whoever does the stitch

Hand this file to whoever runs the final stitch, per the work order's
Stitching Plan, so each item in section 2 gets routed to its owning
agent once it's filled in.
