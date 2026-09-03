import type { RouteObject } from "react-router-dom";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { ROUTES, type NavItem } from "@/lib/routes";
import ScanHistoryPage from "./ScanHistoryPage";
import ScanDetailPage from "./ScanDetailPage";

export const scanRoutes: RouteObject[] = [
  {
    path: ROUTES.scanHistory,
    element: (
      <ProtectedRoute>
        <ScanHistoryPage />
      </ProtectedRoute>
    ),
  },
  {
    path: ROUTES.scanDetail(":id"),
    element: (
      <ProtectedRoute>
        <ScanDetailPage />
      </ProtectedRoute>
    ),
  },
];

export const scanNavItems: NavItem[] = [
  { label: "Scan History", path: ROUTES.scanHistory },
];
