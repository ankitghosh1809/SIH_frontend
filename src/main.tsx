// DEV HARNESS ONLY — not part of Agent 3's owned scope (see src/pages/scans/).
// Agent 1 owns the real src/main.tsx; this exists purely so this branch is
// runnable/buildable in isolation before stitching. Safe to discard at
// stitch time.
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
