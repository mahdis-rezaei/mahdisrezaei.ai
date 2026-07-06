"use client";

import { useEffect, useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { X, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * A clickable photo that opens a full-size lightbox.
 *
 * Presentation is deliberately uniform across the site: pass `ratio` to lock
 * every photo to the same aspect-ratio frame (object-cover, with an optional
 * per-image `objectPosition` focal point so no subject gets cropped out).
 *
 * `tone="mono"` renders a soft, faded black-and-white at rest that eases to
 * full color on hover or keyboard focus, so the gallery reads as one calm
 * editorial system while every memory still comes alive on interaction. The
 * lightbox always opens in full color.
 *
 * Closes on Escape, backdrop click, or the close button. Locks body scroll
 * while open. The dialog content is client-only (not needed for SEO).
 */
export function PhotoZoom({
  image,
  alt,
  caption,
  className,
  ratio,
  objectPosition,
  tone = "color",
  sizes = "(min-width: 640px) 18rem, 100vw",
}: {
  image: StaticImageData;
  alt: string;
  caption?: string;
  className?: string;
  /** e.g. "3 / 4". When set, the photo fills a fixed-ratio frame. */
  ratio?: string;
  /** e.g. "70% 50%" to keep an off-center subject in view when cropping. */
  objectPosition?: string;
  tone?: "color" | "mono";
  sizes?: string;
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

  const monoImg =
    tone === "mono" &&
    "grayscale-[0.85] contrast-[0.97] group-hover/photo:grayscale-0 group-focus-visible/photo:grayscale-0";

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Open photo: ${alt}`}
        style={ratio ? { aspectRatio: ratio } : undefined}
        className={cn(
          "group/photo relative block w-full cursor-zoom-in overflow-hidden rounded-xl border border-border bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          className,
        )}
      >
        <Image
          src={image}
          alt={alt}
          placeholder="blur"
          sizes={sizes}
          {...(ratio
            ? { fill: true }
            : { className: "h-auto w-full" })}
          style={ratio && objectPosition ? { objectPosition } : undefined}
          className={cn(
            "transition-[filter,transform] duration-500 ease-out group-hover/photo:scale-[1.03]",
            ratio && "object-cover",
            !ratio && "h-auto w-full",
            monoImg,
          )}
        />
        {/* Subtle inner frame for a consistent, gallery-like edge. */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-black/5"
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
          className="pointer-events-none absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/30 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover/photo:opacity-100"
        >
          <ZoomIn className="h-4 w-4" />
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
