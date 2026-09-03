// STUB — DELETE AT STITCH TIME.
// Owned by Agent 1 (src/lib/api-client.ts).

import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8000",
});
