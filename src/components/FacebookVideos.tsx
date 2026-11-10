import { ChevronLeft, ChevronRight, ExternalLink, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Reveal } from "@/components/ui-kit";

/** Original share links and iframe sources supplied by MEEC, in supplied order. */
export const facebookVideos = [
  // { id: "4491605777773121", url: "https://www.facebook.com/share/r/19fJdktUz5/", embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F4491605777773121%2F&show_text=true&width=267&t=0", width: 267, height: 591 },
  { id: "1424149583172169", url: "https://www.facebook.com/share/r/18V3Uefm1k/", embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1424149583172169%2F&show_text=true&width=267&t=0", width: 267, height: 591 },
  { id: "3304772833246233", url: "https://www.facebook.com/share/v/1BjUSSWRS3/", embedUrl: "https://www.facebook.com/plugins/video.php?height=317&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F3304772833246233%2F&show_text=true&width=560&t=0", width: 560, height: 432 },
  { id: "2513097235825346", url: "https://www.facebook.com/share/r/14v1WTi6pyA/", embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F2513097235825346%2F&show_text=true&width=265&t=0", width: 265, height: 591 },
  { id: "1135571998824655", url: "https://www.facebook.com/share/v/1ck7zoRWhD/", embedUrl: "https://www.facebook.com/plugins/video.php?height=317&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1135571998824655%2F&show_text=true&width=560&t=0", width: 560, height: 432 },
  { id: "1094079396596501", url: "https://www.facebook.com/share/r/1EYXyiVg5H/", embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1094079396596501%2F&show_text=true&width=265&t=0", width: 265, height: 591 },
  { id: "2241329606797791", url: "https://www.facebook.com/share/r/17ecuzv5aC/", embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F2241329606797791%2F&show_text=true&width=267&t=0", width: 267, height: 591 },
  { id: "2900759676966909", url: "https://www.facebook.com/share/r/1L6ynTBJGY/", embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F2900759676966909%2F&show_text=true&width=265&t=0", width: 265, height: 591 },
  { id: "2987123298303133", url: "https://www.facebook.com/share/r/1GVNdcDFed/", embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F2987123298303133%2F&show_text=true&width=267&t=0", width: 267, height: 591 },
  { id: "2116093112325805", url: "https://www.facebook.com/share/v/1HJRRW9Fst/", embedUrl: "https://www.facebook.com/plugins/video.php?height=315&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F2116093112325805%2F&show_text=true&width=560&t=0", width: 560, height: 430 },
  { id: "1434947082041234", url: "https://www.facebook.com/share/r/1EC9Nk82k3/", embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1434947082041234%2F&show_text=true&width=265&t=0", width: 265, height: 591 },
  { id: "1595842665651104", url: "https://www.facebook.com/share/v/14w6M8uXFmN/", embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1595842665651104%2F&show_text=true&width=267&t=0", width: 267, height: 591 },
  { id: "1421016896132664", url: "https://www.facebook.com/share/r/1J2Ck3Qr8h/", embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1421016896132664%2F&show_text=true&width=267&t=0", width: 267, height: 591 },
  { id: "1108396745014810", url: "https://www.facebook.com/share/r/1JBdVdR2BZ/", embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1108396745014810%2F&show_text=true&width=267&t=0", width: 267, height: 591 },
  { id: "1620767526363425", url: "https://www.facebook.com/share/r/19krFns9UU/", embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1620767526363425%2F&show_text=true&width=267&t=0", width: 267, height: 591 },
  { id: "1457150909608044", url: "https://www.facebook.com/share/r/1FLE2AZgvg/", embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1457150909608044%2F&show_text=true&width=267&t=0", width: 267, height: 591 },
  { id: "1815850299422906", url: "https://www.facebook.com/share/v/1JBCfWQvwb/", embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1815850299422906%2F&show_text=true&width=476&t=0", width: 476, height: 591 },
  { id: "1401894205421947", url: "https://www.facebook.com/share/r/1MFfLKufCk/", embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1401894205421947%2F&show_text=true&width=267&t=0", width: 267, height: 591 },
  { id: "1100646719180222", url: "https://www.facebook.com/share/r/1CXxdFkjQ1/", embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1100646719180222%2F&show_text=true&width=357&t=0", width: 357, height: 591 },
] as const;

type FacebookVideo = (typeof facebookVideos)[number];

/** Validate both origins and the reel target, without rendering supplied HTML. */
export function isSafeFacebookVideo(video: { id: string; url: string; embedUrl: string }) {
  try {
    const source = new URL(video.url);
    const embed = new URL(video.embedUrl);
    const target = new URL(embed.searchParams.get("href") ?? "");
    const safeOrigin = (url: URL) =>
      url.origin === "https://www.facebook.com" && !url.username && !url.password;
    return safeOrigin(source) && /^\/share\/(r|v)\/[A-Za-z0-9]+\/$/.test(source.pathname)
      && safeOrigin(embed) && embed.pathname === "/plugins/video.php"
      && /^\d+$/.test(video.id) && safeOrigin(target)
      && target.pathname === `/reel/${video.id}/`;
  } catch {
    return false;
  }
}

function FacebookPlayer({ video }: { video: FacebookVideo }) {
  const [status, setStatus] = useState<"loading" | "loaded" | "slow" | "error">("loading");
  const safe = isSafeFacebookVideo(video);
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setStatus((current) => current === "loading" ? "slow" : current);
    }, 15000);
    return () => window.clearTimeout(timer);
  }, []);

  const frameSize = video.width === 560
    ? video.height === 430 ? "max-w-[560px] aspect-[560/430]" : "max-w-[560px] aspect-[560/432]"
    : video.width === 476 ? "max-w-[476px] aspect-[476/591]"
    : video.width === 357 ? "max-w-[357px] aspect-[357/591]"
    : video.width === 265 ? "max-w-[265px] aspect-[265/591]"
    : "max-w-[267px] aspect-[267/591]";

  return (
    <>
      {safe && status !== "error" ? (
        <div className={`relative mx-auto w-full overflow-hidden rounded-lg bg-muted ${frameSize}`}>
          <iframe
            src={video.embedUrl}
            title={`MEEC Video ${facebookVideos.indexOf(video) + 1}`}
            width={video.width}
            height={video.height}
            className="absolute inset-0 h-full w-full border-0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share; fullscreen"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            onLoad={() => setStatus("loaded")}
            onError={() => setStatus("error")}
          />
        </div>
      ) : (
        <p role="status" className="py-8 text-center text-sm text-muted-foreground">
          This video could not be loaded.
        </p>
      )}
      {safe && (status === "loading" || status === "slow") && (
        <p role="status" className="text-center text-sm text-muted-foreground">
          {status === "slow" ? "Facebook is taking longer to respond." : "Loading Facebook video…"}
        </p>
      )}
      {/* Cross-origin iframe load events cannot establish video availability. */}
      <p className="text-center text-sm text-muted-foreground">
        If this video is unavailable, open the original Facebook post.
      </p>
      {safe && (
        <Button asChild variant="outline" className="mx-auto max-w-full">
          <a href={video.url} target="_blank" rel="noopener noreferrer">
            <ExternalLink aria-hidden="true" /> Open on Facebook
          </a>
        </Button>
      )}
    </>
  );
}

/** Separate video viewer: the shared image Lightbox remains untouched. */
export function FacebookVideos() {
  const [index, setIndex] = useState<number | null>(null);
  const video = index === null ? undefined : facebookVideos[index];
  const go = (direction: 1 | -1) => {
    setIndex((current) => current === null ? null
      : (current + direction + facebookVideos.length) % facebookVideos.length);
  };

  return (
    <>
      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {facebookVideos.map((entry, i) => (
          <Reveal as="li" key={entry.id} delay={(i % 6) * 50}>
            <figure className="group h-full overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
              <Button
                variant="ghost"
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Open Facebook video ${i + 1}`}
                className="block h-auto w-full overflow-hidden rounded-none p-0"
              >
                <span className="flex aspect-4/3 w-full items-center justify-center bg-contrast">
                  <span className="flex size-14 items-center justify-center rounded-full bg-card text-primary shadow-lift transition-transform duration-300 group-hover:scale-110">
                    <Play aria-hidden="true" className="size-6" />
                  </span>
                </span>
              </Button>
              <figcaption className="flex items-center justify-between gap-3 p-4">
                <span className="text-sm leading-snug text-muted-foreground">Meec Video {i + 1}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </ul>
      <Dialog open={video !== undefined} onOpenChange={(open) => { if (!open) setIndex(null); }}>
        <DialogContent
          className="max-h-[92dvh] w-[calc(100%_-_2rem)] max-w-3xl overflow-y-auto rounded-2xl pt-12"
          onKeyDown={(event) => {
            if (event.target !== event.currentTarget && (event.target as HTMLElement).tagName === "IFRAME") return;
            if (event.key === "ArrowLeft") { event.preventDefault(); go(-1); }
            if (event.key === "ArrowRight") { event.preventDefault(); go(1); }
          }}
        >
          <DialogTitle className="text-center">Video {index === null ? "" : index + 1}</DialogTitle>
          <DialogDescription className="sr-only">MEEC Gallery Video viewer</DialogDescription>
          {video && <FacebookPlayer key={video.id} video={video} />}
          <div className="flex items-center justify-between gap-3">
            <Button variant="outline" size="icon" aria-label="Previous video" title="Previous video" onClick={() => go(-1)}>
              <ChevronLeft aria-hidden="true" />
            </Button>
            <span className="text-sm text-muted-foreground">{index === null ? 0 : index + 1} / {facebookVideos.length}</span>
            <Button variant="outline" size="icon" aria-label="Next video" title="Next video" onClick={() => go(1)}>
              <ChevronRight aria-hidden="true" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}