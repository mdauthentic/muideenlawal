import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Eyebrow } from "./ui";

const tones = {
  Recurden: "bg-room-apps text-room-apps-ink",
  undr: "bg-room-research text-room-research-ink",
  Tallid: "bg-room-work text-room-work-ink",
};

export function sectionId(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function DocumentPage({
  app,
  title,
  intro,
  contents,
  related,
  children,
}: {
  app: keyof typeof tones;
  title: string;
  intro: ReactNode;
  contents: readonly string[];
  related?: { href: string; label: string };
  children: ReactNode;
}) {
  return (
    <main id="main" className="flex-1">
      <header className={`px-6 py-10 sm:px-[4.7vw] sm:py-14 ${tones[app]}`}>
        <div className="mx-auto max-w-6xl">
          <Link
            href="/"
            className="mb-9 inline-flex items-center gap-2 text-xs underline-offset-4 hover:underline"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
            Back to home
          </Link>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <Eyebrow>{app} / App information</Eyebrow>
              <h1 className="mt-4 text-[clamp(40px,5vw,72px)] leading-[1.08] font-normal tracking-[-.055em]">
                {title}
              </h1>
              <p className="mt-5 max-w-xl text-sm leading-7 wrap-anywhere">
                {intro}
              </p>
            </div>
            {related && (
              <Link
                href={related.href}
                className="inline-flex shrink-0 items-center gap-3 self-start text-xs underline-offset-4 hover:underline sm:self-auto"
              >
                {related.label}
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </Link>
            )}
          </div>
        </div>
      </header>
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-12 sm:py-16 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-20">
        <aside className="hidden lg:block">
          <nav aria-label="On this page" className="sticky top-8">
            <Eyebrow>On this page</Eyebrow>
            <ol className="mt-5 space-y-3">
              {contents.map((title) => (
                <li key={title}>
                  <a
                    href={`#${sectionId(title)}`}
                    className="block text-xs leading-5 text-subtle underline-offset-4 hover:text-ink hover:underline"
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>
        <div className="min-w-0 max-w-3xl space-y-10">{children}</div>
      </div>
    </main>
  );
}

export function DocumentSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={sectionId(title)}
      aria-labelledby={`${sectionId(title)}-title`}
      className="border-t border-line pt-6"
    >
      <h2
        id={`${sectionId(title)}-title`}
        className="mb-4 text-2xl leading-tight font-normal tracking-tight"
      >
        {title}
      </h2>
      <div className="space-y-4 text-[15px] leading-7 wrap-anywhere [&_a]:underline [&_a]:decoration-ink/40 [&_a]:underline-offset-4 hover:[&_a]:decoration-ink">
        {children}
      </div>
    </section>
  );
}

export function PolicySections({
  sections,
}: {
  sections: readonly {
    title: string;
    body: readonly string[];
    items?: readonly string[];
  }[];
}) {
  return sections.map((section) => (
    <DocumentSection key={section.title} title={section.title}>
      {section.body.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      {section.items && (
        <ul className="list-disc space-y-2 pl-5 marker:text-subtle">
          {section.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </DocumentSection>
  ));
}
