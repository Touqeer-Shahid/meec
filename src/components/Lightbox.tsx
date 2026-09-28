import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

export type LightboxItem = { src: string; alt: string; caption?: string };

/**
 * Full-screen image lightbox with keyboard, arrow-button, overlay-click and
 * touch-swipe navigation. Index loops in both directions.
 */
export function Lightbox({
  items,
  index,
  onClose,
  onIndexChange,
}: {
  items: LightboxItem[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (i: number) => void;
}) {
  const open = index !== null && items.length > 0;
  const touchX = useRef<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const go = useCallback(
    (dir: 1 | -1) => {
      if (index === null) return;
      onIndexChange((index + dir + items.length) % items.length);
    },
    [index, items.length, onIndexChange],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, go, onClose]);

  if (!open || index === null) return null;
  const item = items[index];
  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      className="fixed inset-0 z-[100] flex flex-col bg-[rgba(6,20,34,0.94)] backdrop-blur-sm"
      style={{ animation: "fade-up 0.2s ease-out both" }}
      onClick={onClose}
      onTouchStart={(e) => {
        touchX.current = e.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(e) => {
        const start = touchX.current;
        const end = e.changedTouches[0]?.clientX;
        touchX.current = null;
        if (start === null || end === undefined) return;
        const dx = end - start;
        if (Math.abs(dx) > 45) go(dx < 0 ? 1 : -1);
      }}
    >
      <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <span className="text-xs font-bold tracking-widest text-white/70 uppercase">
          {index + 1} / {items.length}
        </span>
        <button
          ref={closeRef}
          type="button"
          aria-label="Close image viewer"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="inline-flex size-11 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition-colors hover:bg-white/25"
        >
          <X className="size-5" />
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center px-2 pb-4 sm:px-16">
        <button
          type="button"
          aria-label="Previous image"
          onClick={(e) => {
            e.stopPropagation();
            go(-1);
          }}
          className="absolute left-2 z-10 inline-flex size-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition-colors hover:bg-white/25 sm:left-4"
        >
          <ChevronLeft className="size-6" />
        </button>

        <figure className="flex max-h-full flex-col items-center" onClick={(e) => e.stopPropagation()}>
          <img
            src={item.src}
            alt={item.alt}
            className="max-h-[72vh] w-auto max-w-full rounded-xl object-contain shadow-lift"
          />
          <figcaption className="mt-4 max-w-2xl px-4 text-center text-sm leading-relaxed text-white/75">
            {item.caption ?? item.alt}
          </figcaption>
        </figure>

        <button
          type="button"
          aria-label="Next image"
          onClick={(e) => {
            e.stopPropagation();
            go(1);
          }}
          className="absolute right-2 z-10 inline-flex size-12 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition-colors hover:bg-white/25 sm:right-4"
        >
          <ChevronRight className="size-6" />
        </button>
      </div>
    </div>
  );
}

/** Convenience hook for grids that open the lightbox. */
export function useLightbox() {
  const [index, setIndex] = useState<number | null>(null);
  return {
    index,
    open: (i: number) => setIndex(i),
    close: () => setIndex(null),
    setIndex,
  };
}
