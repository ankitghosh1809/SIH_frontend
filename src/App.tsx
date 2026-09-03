// DEV HARNESS ONLY — stands in for Agent 1's real App.tsx (auth, layout, app-level routing)
// so Tasks 2-5 can be built, type-checked, and exercised in isolation. Not part of Agent 6's
// delivered scope; discard at stitch time along with the Task 1 stub files. See
// HANDOFF_NOTES.md.
//
// `npm run dev` + this role switcher (bottom-right corner) is the fastest way to eyeball the
// three self-test scenarios from the work order (admin / doctor / camp_staff / logged out)
// against a real `uvicorn app.main:app --reload` running locally.
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";

import { AuthContext } from "@/contexts/AuthContext";
import type { UserRole } from "@/types/api";

import { adminNavItems, adminRoutes } from "./pages/admin/routes";

const queryClient = new QueryClient();

function DevHome() {
  return (
    <div className="p-6 text-sm text-neutral-500">
      Dev harness home. Try: {adminNavItems.map((item) => item.path).join(", ")}
    </div>
  );
}

const router = createBrowserRouter([{ path: "/", element: <DevHome /> }, ...adminRoutes]);

function DevRoleSwitcher({ role, onChange }: { role: UserRole | null; onChange: (r: UserRole | null) => void }) {
  const options: (UserRole | null)[] = ["admin", "doctor", "camp_staff", null];
  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-lg border border-neutral-200 bg-white p-2 text-xs shadow-lg">
      <span className="text-neutral-400">dev role:</span>
      {options.map((r) => (
        <button
          key={r ?? "logged-out"}
          onClick={() => onChange(r)}
          className={`rounded px-2 py-1 ${role === r ? "bg-neutral-900 text-white" : "bg-neutral-100 text-neutral-600"}`}
        >
          {r ?? "logged out"}
        </button>
      ))}
    </div>
  );
}

export default function App() {
  const [role, setRole] = useState<UserRole | null>("admin");

  return (
    <AuthContext.Provider value={{ user: role ? { role } : null }}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <DevRoleSwitcher role={role} onChange={setRole} />
        <Toaster />
      </QueryClientProvider>
    </AuthContext.Provider>
  );
}
