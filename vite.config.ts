// DEV HARNESS ONLY — not part of Agent 3's owned scope (see src/pages/scans/).
// Agent 1 owns the real vite.config.ts; this exists purely so this branch is
// runnable/buildable in isolation before stitching. Safe to discard/replace
// at stitch time.
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
