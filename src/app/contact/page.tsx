import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Mahdis Rezaei. Always happy to talk products, AI, or building.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const { contact, links } = site;

  return (
    <main className="flex-1">
      <section className="mx-auto w-full max-w-3xl px-6 py-20 sm:py-28">
        <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          {contact.heading}
        </h1>
        <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
          {contact.blurb}
        </p>

        <ul className="mt-10 divide-y divide-border border-y border-border">
          {links
            .filter((l) => l.ready)
            .map((l) => {
              const external = l.href.startsWith("http");
              return (
                <li key={l.label}>
                  <a
                    href={l.href}
                    {...(external
                      ? { target: "_blank", rel: "noreferrer" }
                      : {})}
                    className="flex items-center justify-between py-4 text-lg transition-colors hover:text-primary"
                  >
                    <span className="font-medium">{l.label}</span>
                    <span className="text-sm text-muted-foreground">
                      {l.href.replace(/^mailto:/, "").replace(/^https?:\/\//, "")}
                    </span>
                  </a>
                </li>
              );
            })}
        </ul>
      </section>
    </main>
  );
}
