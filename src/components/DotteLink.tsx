import Link from "next/link";

export const DottedLink = (data: { title: string; href: string }) => (
  <Link
    href={data.href}
    title={data.title}
    className="flex items-center gap-1.5 group"
  >
    <div className="flex items-center gap-2">
      <span className="h-2 w-2 bg-foreground"></span>
      <span className="text-xs border-b font-mono uppercase group-hover:text-accent">
        {data.title}
      </span>
    </div>
  </Link>
);
