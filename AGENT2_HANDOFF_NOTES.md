# Agent 2 delivery notes, read before merging

Not part of the app; delete before or after stitching, whichever is convenient.

## What could and couldn't be done in this sandbox

This was built in an isolated chat sandbox: Node/npm/git are installed locally, but network
egress is blocked, so a few things the work order asks for couldn't happen for real here.

**Could not do here:**
- Clone `SIH_frontend` or `SIH_backend` from GitHub, or push to `origin/agent-2-screening`
  (no such remote exists in this sandbox, and there's no network to reach GitHub anyway)
- Run `uvicorn app.main:app --reload` against the real `SIH_backend` code, since that code was
  never cloned here
- `npm install` anything (react, axios, vite, react-dropzone, etc. aren't present) or
  `npm run build`
- Exercise the actual upload/batch flows in a real browser against a live backend

**Did instead:**
- Built every file below exactly against the contract given in the work order: the stub
  `types/api.ts`, `lib/routes.ts`, `lib/api-client.ts`, `RiskBadge.tsx` are reproduced verbatim;
  the two endpoint shapes came from the work order's prose description, not a live-verified copy
- Kept local git history on a local `agent-2-screening` branch, one commit per task (`git log`
  in this checkout shows it)
- Pulled the pure logic (the 50-file batch limit check, byte formatting) out into
  `src/pages/screening/lib/validation.ts` and ran it through a standalone Node script with no
  npm dependencies, since that part doesn't need React or a browser to check. It caught one real
  issue: my first draft of the test asserted `formatBytes(1024) === "1 KB"`, but the actual
  function always uses one decimal place once it's KB or larger, so `1024` correctly formats as
  `"1.0 KB"`. That was a bug in my test's expected value, not in the shipped code; fixed the
  assertion, reran, everything passes.

## To actually verify this (steps for you)

1. In your real checkout: `git clone https://github.com/ankitghosh1809/SIH_frontend.git && cd SIH_frontend && git checkout -b agent-2-screening`
2. Copy everything under `src/` from this delivery into that checkout. Nothing here should
   collide with Agent 1's real files at the same paths except the stub files themselves, which
   get deleted at stitch time per the work order
3. `npm install react-dropzone`
4. Separately: `git clone https://github.com/ankitghosh1809/SIH_backend.git && cd SIH_backend && uvicorn app.main:app --reload`
5. Back in the frontend checkout: `npm run dev`, then walk through the work order's Self-test
   (single upload; upload a non-image and confirm a readable error; a 3-5 image batch including
   one deliberately-renamed `.txt` to confirm per-file error isolation)
6. `npm run build` to confirm zero TypeScript errors

## Two assumptions worth a quick double-check after stitching

- Every import here uses the `@/` path alias (`@/lib/routes`, `@/components/RiskBadge`, etc.),
  the default when a repo is scaffolded via `npx shadcn@latest init`, which the work order itself
  suggests running. If Agent 1's `tsconfig.json` / `vite.config.ts` don't have that alias, it's a
  one-line addition, or a find/replace to relative paths.
- `UploadPage.tsx` imports `zodResolver` from `@hookform/resolvers/zod` to connect
  `react-hook-form` to the `zod` schema, since the work order names both. That connector package
  is essentially always present alongside that pairing, but it isn't named explicitly in the
  work order's dependency list, so it's worth a quick check against Agent 1's `package.json`
  before assuming it's there. Per your instruction to check before adding any dependency beyond
  `react-dropzone`: flagging this now rather than assuming it's fine.

## Stub files created beyond the four given verbatim in the work order

`types/api.ts`, `lib/routes.ts`, `lib/api-client.ts`, `RiskBadge.tsx` are reproduced exactly as
given. Two more were needed to make the pages buildable, per the work order's own instruction to
stub anything else the same way as those pieces:

- `src/components/ProtectedRoute.tsx`, matching the signature the work order names
  (`roles?: UserRole[]`), renders children unconditionally
- `src/components/ui/{button,input,label,card,progress}.tsx`, minimal Tailwind stand-ins for the
  shadcn primitives actually used, since `npx shadcn@latest init` needs network too

All six are marked `STUB — DELETE AT STITCH TIME` in their headers, same convention as the four
given ones.

## A note on the client-side image-type check

`ImageDropzone` filters on `accept: { "image/*": [] }`, which is what "client-side validation
that the file is an image type" resolves to with react-dropzone. It won't catch a file that's
been renamed to look like an image (e.g. `notes.txt` renamed to `notes.jpg`), because browsers
report `File.type` from the extension, not the actual bytes, for a manually renamed file. That's
fine and expected: the backend's real byte-level validation is what catches that case, surfacing
as the per-file `error` string in the batch results table (or the inline error on single upload).
That's exactly what the work order's self-test's "renamed .txt" step is checking for, and it's
handled by `BatchResultsTable` / the single-upload error path, not by the client-side filter.

## Files in this delivery

```
src/types/api.ts                                    STUB, verbatim
src/lib/routes.ts                                    STUB, verbatim
src/lib/api-client.ts                                STUB, verbatim
src/components/RiskBadge.tsx                         STUB, verbatim
src/components/ProtectedRoute.tsx                     STUB, new
src/components/ui/{button,input,label,card,progress}.tsx   STUB, new
src/pages/screening/UploadPage.tsx                    Task 2
src/pages/screening/BatchUploadPage.tsx               Task 3
src/pages/screening/routes.tsx                        Task 4
src/pages/screening/hooks/useUploadScan.ts
src/pages/screening/hooks/useBatchUpload.ts
src/pages/screening/hooks/usePatientSearch.ts
src/pages/screening/components/ImageDropzone.tsx
src/pages/screening/components/PatientLinkField.tsx
src/pages/screening/components/BatchResultsTable.tsx
src/pages/screening/lib/validation.ts
```
