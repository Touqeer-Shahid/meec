import { createClient } from "@supabase/supabase-js";

// Publishable (browser-safe) credentials for the "MEEC Careers" project.
// Access is restricted by RLS: anon may only INSERT into vacancy_applications.
const url = import.meta.env['VITE_MEEC_SUPABASE_URL'] as string | undefined;
const key = import.meta.env['VITE_MEEC_SUPABASE_PUBLISHABLE_KEY'] as string | undefined;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let client: ReturnType<typeof createClient<any>> | null = null;
function getClient() {
  if (!url || !key) {
    console.error(
      "[vacancy] Missing env: VITE_MEEC_SUPABASE_URL / VITE_MEEC_SUPABASE_PUBLISHABLE_KEY. Add them to .env.local and restart the dev server.",
    );
    throw new VacancySubmitError("Applications are temporarily unavailable. Please try again later.");
  }
  client ??= createClient<any>(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
  return client;
}

export type VacancyApplication = {
  full_name: string;
  email: string;
  phone: string;
  position_applied: string;
  education: string;
  experience: string;
  expected_salary_pkr: string;
  joining_days: string;
  willing_to_relocate: boolean;
  resume_url: string | null;
  cover_note: string | null;
};

/** Private Storage bucket for applicant CVs. Never exposed via public URLs. */
export const RESUME_BUCKET = "vacancy-resumes";
export const RESUME_MAX_BYTES = 5 * 1024 * 1024; // 5 MB

/** Error whose message is safe to show to the applicant. */
export class VacancySubmitError extends Error {}

/** Returns the selected CV file, or null when none was chosen. */
export function getResumeFile(data: FormData): File | null {
  const f = data.get("cv");
  return f instanceof File && f.size > 0 ? f : null;
}

/** Client-side CV check: PDF only, max 5 MB. Returns an error message or null. */
export function validateResume(file: File | null): string | null {
  if (!file) return null;
  const isPdf = file.type === "application/pdf" || /\.pdf$/i.test(file.name);
  if (!isPdf) return "Only PDF files are accepted";
  if (file.size > RESUME_MAX_BYTES) return "PDF must be 5 MB or smaller";
  return null;
}

/**
 * Uploads the CV to the private bucket and returns its storage path
 * (e.g. "applications/<uuid>.pdf"). No public URL is generated.
 */
export async function uploadResume(file: File): Promise<string> {
  const path = `applications/${crypto.randomUUID()}.pdf`;
  const { error } = await getClient()
    .storage.from(RESUME_BUCKET)
    .upload(path, file, { contentType: "application/pdf", upsert: false });
  if (error) {
    const e = error as { statusCode?: string; message: string };
    console.error("[vacancy] CV upload failed", { status: e.statusCode, message: e.message });
    throw new VacancySubmitError("We couldn't upload your CV. Please check the file and try again.");
  }
  return path;
}

export function toVacancyApplication(data: FormData): VacancyApplication {
  const s = (k: string) => String(data.get(k) ?? "").trim();
  return {
    full_name: s("fullName"),
    email: s("email"),
    phone: s("phone"),
    position_applied: s("position"),
    education: s("qualification"),
    experience: s("experience"),
    expected_salary_pkr: s("expectedSalary"),
    joining_days: s("joiningDays"),
    willing_to_relocate: s("relocation") === "YES",
    resume_url: null,
    cover_note: s("message") || null,
  };
}

/** Inserts without reading back (anon has no SELECT permission). */
export async function submitVacancyApplication(row: VacancyApplication) {
  const { error } = await getClient().from("vacancy_applications").insert(row);
  if (error) {
    console.error("[vacancy] Insert failed", { code: error.code, message: error.message, details: error.details, hint: error.hint });
    throw new Error(error.message);
  }
}

/**
 * Full workflow: validate CV -> upload (if provided) -> insert row.
 * Upload and insert failures surface different messages. If the insert fails
 * after a successful upload, the file is left in place (anon has no DELETE
 * permission, by design); it is unreferenced and can be cleaned up by an admin.
 */
export async function submitVacancyApplicationWithResume(data: FormData) {
  const file = getResumeFile(data);
  const invalid = validateResume(file);
  if (invalid) throw new VacancySubmitError(invalid);

  const row = toVacancyApplication(data);
  if (file) row.resume_url = await uploadResume(file);

  try {
    await submitVacancyApplication(row);
  } catch {
    if (row.resume_url) console.warn("Unreferenced CV upload after failed insert:", row.resume_url);
    throw new VacancySubmitError(
      "Your CV was uploaded, but we couldn't save your application. Please try again.",
    );
  }
}
