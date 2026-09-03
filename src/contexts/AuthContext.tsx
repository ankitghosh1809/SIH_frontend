// STUB — DELETE AT STITCH TIME. Real one has more; Agent 6 only needs this.
//
// One addition beyond the work order's snippet: the context object itself is exported
// (`AuthContext`), not just `useAuth`. That's solely so this branch's standalone dev harness
// (src/devHarness/, outside admin/ scope — see HANDOFF_NOTES.md) can drive a real logged-in
// role for local testing. Every file under src/pages/admin/ only ever imports `useAuth`,
// exactly matching the contract given in the work order.
import { createContext, useContext } from "react";

import type { UserRole } from "@/types/api";

interface AuthCtx {
  user: { role: UserRole } | null;
}

export const AuthContext = createContext<AuthCtx>({ user: null });
export const useAuth = () => useContext(AuthContext);
