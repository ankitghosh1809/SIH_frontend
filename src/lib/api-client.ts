// STUB — DELETE AT STITCH TIME.
// Owned by Agent 1 at this same path, reproduced verbatim from the work
// order. Delete this file when Agent 1's real src/lib/api-client.ts lands
// at the same path.

import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8000",
});
