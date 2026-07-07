import { aboutPage } from "@/content/about";
import { practiceImages } from "@/content/practice-images";
import { SectionLabel } from "@/components/section-label";
import { PhotoZoom } from "@/components/photo-zoom";
import { PoetryShelf } from "@/components/poetry-shelf";
import { PlacesBand } from "@/components/places-band";
import { cn } from "@/lib/utils";

/** Render `why`, linking a single word when a practice supplies one. */
function renderWhy(
  why: string,
  link?: { word: string; href: string },
) {
  if (!link) return why;
  const at = why.indexOf(link.word);
  if (at === -1) return why;
  return (
    <>
      {why.slice(0, at)}
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline decoration-primary/40 underline-offset-2 transition-colors hover:decoration-primary"
      >
        {link.word}
      </a>
      {why.slice(at + link.word.length)}
    </>
  );
}

/** Off the clock tab — long-held "practices", each with a why-it-matters line. */
export function Practices() {
  const o = aboutPage.offClock;

  return (
    <div>
      <SectionLabel>{o.eyebrow}</SectionLabel>
      <h2 className="mt-5 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
        {o.title}
      </h2>
      <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
        {o.lede}
      </p>

      <div className="mt-10 divide-y divide-border">
        {o.practices.map((pr) => {
          const img = pr.image ? practiceImages[pr.image] : null;
          return (
          <div key={pr.title} className="py-7 first:pt-0">
            <div
              className={cn(
                "flex flex-col gap-5",
                img && "sm:flex-row sm:gap-7",
              )}
            >
              {img && (
                <div className="w-full shrink-0 sm:w-64">
                  <PhotoZoom
                    image={img}
                    alt={pr.imageCaption ?? pr.title}
                    caption={pr.imageCaption}
                    ratio="3 / 4"
                    sizes="(min-width: 640px) 16rem, 100vw"
                    className="shadow-xl shadow-black/20"
                  />
                </div>
              )}

              <div className="min-w-0">
                <h3 className="font-display text-xl font-bold tracking-tight">
                  {pr.title}
                </h3>
                <p className="mt-2.5 text-pretty leading-relaxed text-muted-foreground">
                  {pr.body}
                </p>
                <p className="mt-3 flex gap-2 text-pretty italic text-muted-foreground">
                  <span aria-hidden className="not-italic text-primary">
                    →
                  </span>
                  <span>{renderWhy(pr.why, pr.whyLink)}</span>
                </p>
                {pr.poems && pr.poems.length > 0 && (
                  <PoetryShelf poems={pr.poems} />
                )}
                {pr.places && <PlacesBand places={pr.places} />}
              </div>
            </div>
          </div>
          );
        })}
      </div>
    </div>
  );
}
