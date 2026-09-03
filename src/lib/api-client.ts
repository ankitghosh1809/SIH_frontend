// STUB — DELETE AT STITCH TIME.
// Agent 1 owns the real src/lib/api-client.ts. Reproduced verbatim from the work order.

import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8000",
});
