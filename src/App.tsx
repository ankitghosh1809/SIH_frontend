// DEV HARNESS ONLY — not part of Agent 3's owned scope (see src/pages/scans/).
// Agent 1 owns the real src/App.tsx (and the real top-level nav that would
// use scanNavItems); this exists purely so scanRoutes is reachable and this
// branch is runnable/buildable in isolation before stitching. Safe to
// discard at stitch time.
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";
import { ROUTES } from "@/lib/routes";
import { scanRoutes } from "@/pages/scans/routes";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  { path: "/", element: <Navigate to={ROUTES.scanHistory} replace /> },
  ...scanRoutes,
]);

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster richColors position="top-right" />
    </QueryClientProvider>
  );
}
