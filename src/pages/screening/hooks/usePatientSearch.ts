import { useEffect, useState } from "react";
import { api } from "@/lib/api-client";

export interface PatientSearchResult {
  patient_id: string;
  name: string;
}

// Response shape for GET /api/v1/patients?search= is assumed pending Agent 4's real Patient
// Registry contract (this work order only names the query param, not the response body). This
// feature is explicitly "nice-to-have, not required for done", so a shape mismatch here only
// affects the optional patient-linkage search, never the core upload flow.
export function usePatientSearch(query: string, debounceMs = 300) {
  const [results, setResults] = useState<PatientSearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const trimmed = query.trim();
    if (trimmed.length < 2) {
      setResults([]);
      return;
    }
    setIsLoading(true);
    const timeout = setTimeout(async () => {
      try {
        const { data } = await api.get<PatientSearchResult[]>("/api/v1/patients", {
          params: { search: trimmed },
        });
        setResults(data);
      } catch {
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    }, debounceMs);

    return () => clearTimeout(timeout);
  }, [query, debounceMs]);

  return { results, isLoading };
}
