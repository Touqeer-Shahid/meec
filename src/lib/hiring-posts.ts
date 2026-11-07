import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Browser client for the "MEEC Careers" hiring-posts backend.
 * Only the publishable key is used here. All write protection is enforced by
 * RLS on public.hiring_posts and Storage policies on the "hiring-posts" bucket.
 */
const url =
  (import.meta.env["VITE_HIRING_SUPABASE_URL"] as string | undefined) ??
  "https://ckbglzqvghkholqcosic.supabase.co";
const key =
  (import.meta.env["VITE_HIRING_SUPABASE_PUBLISHABLE_KEY"] as string | undefined) ??
  "sb_publishable_x9Mlk4fGCPV4lYEGGzaSow_s1Yxg3J7";

export const HIRING_BUCKET = "hiring-posts";
export const POSTER_MAX_BYTES = 5 * 1024 * 1024;

export type HiringPost = {
  id: string;
  title: string;
  description: string | null;
  image_path: string | null;
  is_published: boolean;
  display_order: number;
  created_at?: string;
  updated_at?: string;
};

export type HiringPostInput = {
  title: string;
  description: string | null;
  image_path: string | null;
  is_published: boolean;
  display_order: number;
};

let client: SupabaseClient | null = null;
export function hiringClient(): SupabaseClient {
  client ??= createClient(url, key, {
    auth: {
      storageKey: "meec-hiring-admin-auth",
      persistSession: typeof window !== "undefined",
      autoRefreshToken: typeof window !== "undefined",
      detectSessionInUrl: false,
    },
  });
  return client;
}

const COLS = "id,title,description,image_path,is_published,display_order,created_at,updated_at";

/** Public: published posts in configured display order (RLS also filters). */
export async function fetchPublishedPosts(): Promise<HiringPost[]> {
  const { data, error } = await hiringClient()
    .from("hiring_posts")
    .select(COLS)
    .eq("is_published", true)
    .order("display_order", { ascending: true })
    .order("created_at", { ascending: true });
  if (error) throw new Error(error.message);
  return (data ?? []) as HiringPost[];
}

/** Admin: all posts (RLS decides what is visible). */
export async function fetchAllPosts(): Promise<HiringPost[]> {
  const { data, error } = await hiringClient()
    .from("hiring_posts")
    .select(COLS)
    .order("display_order", { ascending: true })
    .order("created_at", { ascending: true });
  if (error) throw new Error(error.message);
  return (data ?? []) as HiringPost[];
}

export async function isHiringAdmin(): Promise<boolean> {
  const { data, error } = await hiringClient().rpc("is_hiring_admin");
  if (error) throw new Error(error.message);
  return data === true;
}

export function posterUrl(path: string | null): string | null {
  if (!path) return null;
  return hiringClient().storage.from(HIRING_BUCKET).getPublicUrl(path).data.publicUrl;
}

export function validatePoster(file: File): string | null {
  if (!/^image\/(jpeg|png|webp)$/.test(file.type)) return "Poster must be a JPG, PNG or WebP image";
  if (file.size > POSTER_MAX_BYTES) return "Poster must be 5 MB or smaller";
  return null;
}

export async function uploadPoster(file: File): Promise<string> {
  const ext = file.type === "image/png" ? "png" : file.type === "image/webp" ? "webp" : "jpg";
  const path = `posters/${crypto.randomUUID()}.${ext}`;
  const { error } = await hiringClient()
    .storage.from(HIRING_BUCKET)
    .upload(path, file, { contentType: file.type, upsert: false });
  if (error) throw new Error(`Poster upload failed: ${error.message}`);
  return path;
}

export async function removePoster(path: string | null) {
  if (!path) return;
  const { error } = await hiringClient().storage.from(HIRING_BUCKET).remove([path]);
  if (error) console.warn("[hiring] Could not remove poster", path, error.message);
}

export async function createPost(input: HiringPostInput) {
  const { error } = await hiringClient().from("hiring_posts").insert(input);
  if (error) throw new Error(error.message);
}

export async function updatePost(id: string, patch: Partial<HiringPostInput>) {
  const { data, error } = await hiringClient()
    .from("hiring_posts")
    .update(patch)
    .eq("id", id)
    .select("id");
  if (error) throw new Error(error.message);
  if (!data || data.length === 0) throw new Error("Update was not permitted.");
}

export async function deletePost(post: HiringPost) {
  const { data, error } = await hiringClient()
    .from("hiring_posts")
    .delete()
    .eq("id", post.id)
    .select("id");
  if (error) throw new Error(error.message);
  if (!data || data.length === 0) throw new Error("Delete was not permitted.");
  await removePoster(post.image_path);
}

/** Swaps display_order of two posts (used by move up / move down). */
export async function swapOrder(a: HiringPost, b: HiringPost) {
  const ao = a.display_order;
  const bo = b.display_order === ao ? ao + 1 : b.display_order;
  await updatePost(a.id, { display_order: bo });
  await updatePost(b.id, { display_order: ao });
}
