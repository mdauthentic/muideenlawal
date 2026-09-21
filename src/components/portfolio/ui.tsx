import { ArrowUpRight, Plus } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";

export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`font-mono text-[10px] leading-relaxed tracking-[.07em] uppercase ${className}`}
    >
      {children}
    </span>
  );
}

export function ExternalLink({
  children,
  className = "",
  ...props
}: ComponentProps<"a">) {
  return (
    <a
      {...props}
      className={`inline-flex items-center gap-3 underline-offset-4 hover:underline ${className}`}
    >
      {children}
      <ArrowUpRight
        aria-hidden="true"
        className="size-4 shrink-0"
        strokeWidth={1.5}
      />
    </a>
  );
}

export function SkipLink({ target = "main" }: { target?: string }) {
  return (
    <a
      href={`#${target}`}
      className="absolute -top-24 left-6 z-50 bg-ink p-3 text-paper focus:top-3"
    >
      Skip to content
    </a>
  );
}

export function Disclosure({
  label,
  children,
  className = "",
  contentClassName = "",
}: {
  label: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
}) {
  return (
    <details className={`group/disclosure ${className}`}>
      <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 py-3 text-xs">
        {label}
        <Plus
          aria-hidden="true"
          strokeWidth={1.5}
          className="size-5 shrink-0 transition-transform group-open/disclosure:rotate-45"
        />
      </summary>
      <div
        className={`pb-6 pt-3 text-sm leading-relaxed [&_p+p]:mt-4 ${contentClassName}`}
      >
        {children}
      </div>
    </details>
  );
}
