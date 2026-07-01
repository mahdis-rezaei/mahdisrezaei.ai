import { site } from "@/content/site";

export function ContactBand() {
  const { contact, links } = site;

  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-5xl scroll-mt-20 px-6 py-16 sm:py-20"
    >
      <div className="rounded-2xl border border-border bg-card px-6 py-12 text-center sm:px-12">
        <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          {contact.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          {contact.blurb}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
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
    </section>
  );
}
