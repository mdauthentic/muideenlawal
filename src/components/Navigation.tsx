import Link from "next/link";

export function Navigation() {
  return (
    <header className="top-0 z-[999] w-full max-w-[133.33em] fixed overflow-visible mx-auto inset-[0%_0%_auto]">
      <div className="flex items-center justify-between p-4">
        <div className=""></div>
        <div className="bg-foreground text-background flex items-stretch justify-start border border-foreground rounded-sm">
          <div className="flex items-center justify-between gap-8 pl-6 pr-[1.39rem] py-2 font-mono uppercase text-xs">
            <Link title="homepage" className="hover:scale-105" href="/">
              Home
            </Link>
            <Link title="notes" className="hover:scale-105" href="/">
              Notes
            </Link>
          </div>
          <Link
            title="send an email"
            className="relative flex items-stretch justify-center overflow-hidden px-4 bg-background text-white hover:bg-primary rounded-sm"
            href="/"
          >
            <span className="self-center uppercase font-mono text-xs">
              Get in touch
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
