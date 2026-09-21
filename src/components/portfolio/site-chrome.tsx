import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { profile } from "../profile";
import { ExternalLink, SkipLink } from "./ui";

export function SiteHeader() {
  return (
    <>
      <SkipLink />
      <header className="mx-auto flex w-full max-w-450 items-center justify-between gap-6 px-6 py-8 sm:px-[4.7vw]">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-semibold tracking-tight"
        >
          {profile.name.toLowerCase()}
          <span
            aria-hidden="true"
            className="mt-2 size-1.5 rounded-full bg-current"
          />
        </Link>
        <span className="hidden text-xs text-subtle lg:block">
          {/* Software engineer, Researcher · {profile.location} */}
          Software engineer · {profile.location}
        </span>
        <ExternalLink href={profile.linkedin} className="shrink-0 text-xs">
          Say hello
        </ExternalLink>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="mx-auto flex w-full max-w-450 flex-wrap items-center justify-between gap-5 border-t border-line px-6 py-7 text-[11px] text-subtle sm:px-[4.7vw]">
      <span>
        © {new Date().getFullYear()} {profile.name}
      </span>
      <span className="hidden md:block">
        {/* {profile.location} · Software engineer, PhD */}
        {profile.location} · Software engineer
      </span>
      <nav aria-label="Social links" className="flex items-center gap-6">
        <ExternalLink href={profile.github}>GitHub</ExternalLink>
        <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
        <a href="#main" aria-label="Back to top" className="p-2">
          <ArrowUp aria-hidden="true" className="size-4" />
        </a>
      </nav>
    </footer>
  );
}
