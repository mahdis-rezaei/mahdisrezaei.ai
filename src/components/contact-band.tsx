import { site } from "@/content/site";
import { SectionLabel } from "@/components/section-label";
import { Reveal } from "@/components/reveal";

export function ContactBand() {
  const { contact, links } = site;

  return (
    <Reveal
      as="section"
      className="mx-auto w-full max-w-5xl scroll-mt-20 px-6 py-20 sm:py-24"
    >
      <div id="contact" className="scroll-mt-24" />
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 sm:px-14 sm:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
        />
        <div className="relative">
          <SectionLabel index="04">Contact</SectionLabel>
          <h2 className="mt-6 max-w-2xl text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {contact.heading}
          </h2>
          <p className="mt-4 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {contact.blurb}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            {links
              .filter((l) => l.ready)
              .map((l) => {
                const external = l.href.startsWith("http");
                return (
                  <a
                    key={l.label}
                    href={l.href}
                    {...(external
                      ? { target: "_blank", rel: "noreferrer" }
                      : {})}
                    className="text-sm font-medium text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
                  >
                    {l.label}
                  </a>
                );
              })}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
