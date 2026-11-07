import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// Second, independent Supabase project ("Project B").
// The existing client in src/lib/vacancy-applications.ts (Project A) is untouched.
// Only import this file in features that explicitly need Project B.
// Sessions/users are NOT shared with Project A.
const url = import.meta.env["VITE_MEEC_SECOND_SUPABASE_URL"] as string | undefined;
const key = import.meta.env["VITE_MEEC_SECOND_SUPABASE_PUBLISHABLE_KEY"] as string | undefined;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let client: SupabaseClient<any> | null = null;

/** Returns the Project B client. Throws a clear error if env vars are missing. */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getSupabaseSecond(): SupabaseClient<any> {
  if (!url || !key) {
    throw new Error(
      "[supabaseSecond] Missing env: VITE_MEEC_SECOND_SUPABASE_URL / VITE_MEEC_SECOND_SUPABASE_PUBLISHABLE_KEY. Add them to .env.local (and Netlify), then restart/rebuild.",
    );
  }
  client ??= createClient(url, key, {
    auth: {
      // Separate storage key so Project B never collides with Project A sessions.
      storageKey: "meec-second-auth",
      persistSession: typeof window !== "undefined",
      autoRefreshToken: typeof window !== "undefined",
    },
  });
  return client;
}
