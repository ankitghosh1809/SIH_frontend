// STUB — DELETE AT STITCH TIME.
agent-6-admin
// Owned by Agent 1 (src/lib/api-client.ts).
 main
import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8000",
});
