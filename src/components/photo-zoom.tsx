"use client";

import { useEffect, useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { X, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * A clickable photo thumbnail that opens a full-size lightbox.
 * Closes on Escape, backdrop click, or the close button. Locks body scroll
 * while open. The dialog content is client-only (not needed for SEO).
 */
export function PhotoZoom({
  image,
  alt,
  caption,
  className,
}: {
  image: StaticImageData;
  alt: string;
  caption?: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Open photo: ${alt}`}
        className={cn(
          "group/photo relative block w-full cursor-zoom-in overflow-hidden rounded-xl border border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          className,
        )}
      >
        <Image
          src={image}
          alt={alt}
          placeholder="blur"
          sizes="(min-width: 640px) 18rem, 100vw"
          className="h-auto w-full transition-transform duration-300 group-hover/photo:scale-[1.03]"
        />
        {caption && (
          <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 pb-2.5 pt-8 text-left">
            <span className="font-mono text-[0.62rem] uppercase tracking-widest text-white/90">
              {caption}
            </span>
          </span>
        )}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover/photo:bg-black/25 group-hover/photo:opacity-100"
        >
          <ZoomIn className="h-6 w-6 text-white drop-shadow" />
        </span>
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={() => setOpen(false)}
          className="animate-fade fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-8"
        >
          <button
            ref={closeRef}
            type="button"
            aria-label="Close photo"
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            <X className="h-5 w-5" />
          </button>
          <figure onClick={(e) => e.stopPropagation()} className="m-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image.src}
              alt={alt}
              className="mx-auto max-h-[85vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
            />
            {caption && (
              <figcaption className="mt-3 text-center font-mono text-[0.62rem] uppercase tracking-widest text-white/70">
                {caption}
              </figcaption>
            )}
          </figure>
        </div>
      )}
    </>
  );
}
