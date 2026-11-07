import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUp, Eye, EyeOff, LogOut, Pencil, Plus, Trash2 } from "lucide-react";
import { useCallback, useEffect, useState, type FormEvent, type ReactNode } from "react";
import type { Session } from "@supabase/supabase-js";
import { btnStyles } from "@/components/ui-kit";
import { cn } from "@/lib/utils";
import {
  createPost,
  deletePost,
  fetchAllPosts,
  hiringClient,
  isHiringAdmin,
  posterUrl,
  removePoster,
  swapOrder,
  updatePost,
  uploadPoster,
  validatePoster,
  type HiringPost,
} from "@/lib/hiring-posts";

export const Route = createFileRoute("/admin/vacancies")({
  ssr: false,
  component: AdminVacancies,
  head: () => ({
    meta: [
      { title: "Vacancies Admin | MEEC" },
      { name: "description", content: "Manage MEEC hiring posts." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Vacancies Admin | MEEC" },
      { property: "og:description", content: "Manage MEEC hiring posts." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});

const fieldCls =
  "w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary";
const labelCls = "mb-2 block text-xs font-bold tracking-wider text-foreground uppercase";

type AuthState = "loading" | "signedOut" | "denied" | "admin";

function AdminVacancies() {
  const [session, setSession] = useState<Session | null>(null);
  const [auth, setAuth] = useState<AuthState>("loading");

  const evaluate = useCallback(async (s: Session | null) => {
    setSession(s);
    if (!s) return setAuth("signedOut");
    try {
      setAuth((await isHiringAdmin()) ? "admin" : "denied");
    } catch {
      setAuth("denied");
    }
  }, []);

  useEffect(() => {
    const sb = hiringClient();
    sb.auth.getSession().then(({ data }) => evaluate(data.session));
    const { data: sub } = sb.auth.onAuthStateChange((event, s) => {
      if (event === "SIGNED_IN" || event === "SIGNED_OUT" || event === "USER_UPDATED") void evaluate(s);
    });
    return () => sub.subscription.unsubscribe();
  }, [evaluate]);

  const signOut = async () => {
    await hiringClient().auth.signOut();
    setAuth("signedOut");
  };

  return (
    <section className="pb-14 pt-28 lg:pb-16 lg:pt-36">
      <div className="shell">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-2xl lg:text-3xl">Vacancies Admin</h1>
          {session && (
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span className="break-all">{session.user.email}</span>
              <button type="button" onClick={signOut} className={btnStyles.outline}>
                <LogOut className="size-4" /> Log out
              </button>
            </div>
          )}
        </div>
        <div className="mt-8">
          {auth === "loading" && <p className="text-sm text-muted-foreground">Checking session…</p>}
          {auth === "signedOut" && <LoginForm />}
          {auth === "denied" && (
            <div className="rounded-2xl border border-border bg-white p-8 text-sm">
              This account is not authorised to manage vacancies.
            </div>
          )}
          {auth === "admin" && <Dashboard />}
        </div>
      </div>
    </section>
  );
}

function LoginForm() {
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setBusy(true);
    setError(null);
    const { error } = await hiringClient().auth.signInWithPassword({
      email: String(fd.get("email") ?? "").trim(),
      password: String(fd.get("password") ?? ""),
    });
    setBusy(false);
    if (error) setError("Sign-in failed. Check your email and password.");
  };

  return (
    <form onSubmit={onSubmit} className="mx-auto max-w-md space-y-5 rounded-2xl border border-border bg-white p-8">
      <div>
        <label htmlFor="email" className={labelCls}>Email</label>
        <input id="email" name="email" type="email" required autoComplete="email" className={fieldCls} />
      </div>
      <div>
        <label htmlFor="password" className={labelCls}>Password</label>
        <input id="password" name="password" type="password" required autoComplete="current-password" className={fieldCls} />
      </div>
      {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
      <button type="submit" disabled={busy} className={cn(btnStyles.primary, "w-full")}>
        {busy ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}

function Dashboard() {
  const [posts, setPosts] = useState<HiringPost[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [editing, setEditing] = useState<HiringPost | "new" | null>(null);
  const [busy, setBusy] = useState(false);

  const load = useCallback(async () => {
    try {
      setPosts(await fetchAllPosts());
      setError(null);
    } catch (e) {
      setError((e as Error).message);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  const run = async (fn: () => Promise<void>) => {
    setBusy(true);
    try {
      await fn();
      await load();
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setBusy(false);
    }
  };

  const nextOrder = posts.reduce((m, p) => Math.max(m, p.display_order), 0) + 1;

  return (
    <div className="space-y-6">
      {error && <p role="alert" className="rounded-lg border border-destructive/40 bg-white p-4 text-sm text-destructive">{error}</p>}

      {editing ? (
        <PostForm
          post={editing === "new" ? null : editing}
          defaultOrder={nextOrder}
          onCancel={() => setEditing(null)}
          onSaved={async () => {
            setEditing(null);
            await load();
          }}
        />
      ) : (
        <button type="button" onClick={() => setEditing("new")} className={btnStyles.primary}>
          <Plus className="size-4" /> Add hiring post
        </button>
      )}

      {posts.length === 0 ? (
        <p className="text-sm text-muted-foreground">No hiring posts yet.</p>
      ) : (
        <ul className="grid gap-4">
          {posts.map((p, i) => {
            const img = posterUrl(p.image_path);
            return (
              <li key={p.id} className="flex flex-col gap-4 rounded-2xl border border-border bg-white p-4 sm:flex-row sm:items-center">
                {img ? (
                  <img src={img} alt={p.title} className="h-28 w-full rounded-lg object-cover sm:w-28" />
                ) : (
                  <div className="h-28 w-full rounded-lg bg-muted sm:w-28" />
                )}
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base">{p.title}</h3>
                    <span className={cn("rounded-full px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-widest", p.is_published ? "bg-primary-light text-primary-dark" : "bg-muted text-muted-foreground")}>
                      {p.is_published ? "Published" : "Draft"}
                    </span>
                  </div>
                  {p.description && <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{p.description}</p>}
                  <p className="mt-1 text-xs text-muted-foreground">Order: {p.display_order}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <IconBtn label="Move up" disabled={busy || i === 0} onClick={() => run(() => swapOrder(p, posts[i - 1]!))}><ArrowUp className="size-4" /></IconBtn>
                  <IconBtn label="Move down" disabled={busy || i === posts.length - 1} onClick={() => run(() => swapOrder(p, posts[i + 1]!))}><ArrowDown className="size-4" /></IconBtn>
                  <IconBtn label={p.is_published ? "Unpublish" : "Publish"} disabled={busy} onClick={() => run(() => updatePost(p.id, { is_published: !p.is_published }))}>
                    {p.is_published ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                  </IconBtn>
                  <IconBtn label="Edit" disabled={busy} onClick={() => setEditing(p)}><Pencil className="size-4" /></IconBtn>
                  <IconBtn
                    label="Delete"
                    disabled={busy}
                    onClick={() => {
                      if (window.confirm(`Delete "${p.title}"? This cannot be undone.`)) void run(() => deletePost(p));
                    }}
                  >
                    <Trash2 className="size-4 text-destructive" />
                  </IconBtn>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

function IconBtn(props: { label: string; disabled?: boolean; onClick: () => void; children: ReactNode }) {
  return (
    <button
      type="button"
      aria-label={props.label}
      title={props.label}
      disabled={props.disabled}
      onClick={props.onClick}
      className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-white transition-colors hover:border-primary disabled:opacity-40"
    >
      {props.children}
    </button>
  );
}

function PostForm({
  post,
  defaultOrder,
  onCancel,
  onSaved,
}: {
  post: HiringPost | null;
  defaultOrder: number;
  onCancel: () => void;
  onSaved: () => Promise<void>;
}) {
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const title = String(fd.get("title") ?? "").trim();
    if (!title) return setError("Title is required");
    const file = fd.get("poster");
    const poster = file instanceof File && file.size > 0 ? file : null;
    if (poster) {
      const invalid = validatePoster(poster);
      if (invalid) return setError(invalid);
    }
    setBusy(true);
    setError(null);
    let uploaded: string | null = null;
    try {
      if (poster) uploaded = await uploadPoster(poster);
      const values = {
        title,
        description: String(fd.get("description") ?? "").trim() || null,
        is_published: fd.get("is_published") === "on",
        display_order: Number(fd.get("display_order")) || 0,
        image_path: uploaded ?? post?.image_path ?? null,
      };
      if (post) {
        await updatePost(post.id, values);
        if (uploaded && post.image_path) await removePoster(post.image_path);
      } else {
        await createPost(values);
      }
      await onSaved();
    } catch (err) {
      if (uploaded) await removePoster(uploaded);
      setError((err as Error).message);
    } finally {
      setBusy(false);
    }
  };

  const current = posterUrl(post?.image_path ?? null);

  return (
    <form onSubmit={onSubmit} className="grid gap-5 rounded-2xl border border-border bg-white p-6 md:grid-cols-2">
      <h2 className="text-lg md:col-span-2">{post ? "Edit hiring post" : "New hiring post"}</h2>
      <div className="md:col-span-2">
        <label htmlFor="title" className={labelCls}>Title</label>
        <input id="title" name="title" required defaultValue={post?.title ?? ""} className={fieldCls} />
      </div>
      <div className="md:col-span-2">
        <label htmlFor="description" className={labelCls}>Description</label>
        <textarea id="description" name="description" rows={4} defaultValue={post?.description ?? ""} className={fieldCls} />
      </div>
      <div>
        <label htmlFor="poster" className={labelCls}>Poster image (JPG/PNG/WebP, max 5 MB)</label>
        <input id="poster" name="poster" type="file" accept="image/jpeg,image/png,image/webp" className={fieldCls} />
        {current && <img src={current} alt="Current poster" className="mt-3 h-32 rounded-lg object-cover" />}
      </div>
      <div className="space-y-5">
        <div>
          <label htmlFor="display_order" className={labelCls}>Display order</label>
          <input id="display_order" name="display_order" type="number" defaultValue={post?.display_order ?? defaultOrder} className={fieldCls} />
        </div>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" name="is_published" defaultChecked={post?.is_published ?? false} /> Published
        </label>
      </div>
      {error && <p role="alert" className="text-sm text-destructive md:col-span-2">{error}</p>}
      <div className="flex flex-wrap gap-3 md:col-span-2">
        <button type="submit" disabled={busy} className={btnStyles.primary}>{busy ? "Saving…" : "Save"}</button>
        <button type="button" onClick={onCancel} disabled={busy} className={btnStyles.outline}>Cancel</button>
      </div>
    </form>
  );
}
