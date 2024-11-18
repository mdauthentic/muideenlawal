import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "lucide-react";

export default function Page() {
    return (
        <section className="py-16">
            <div className="mx-auto max-w-2xl px-6 lg:px-2">
                <div className="flex flex-col gap-4 mb-5">
                    <h2 className="textGradient text-2xl leading-[clamp(2.125rem,5.5vw,2.75rem)] tracking-[-0.01em]">My Stacks</h2>
                    <p className="text-sm tracking-[-0.018em]">
                        I have used a couple of tools over the years. Here are some of the tools I use on a day-to-day basis.
                    </p>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {stackDetails.map((stack) =>
                        <StackItem name={stack.name} href={stack.href} key={stack.name} />
                    )}
                </div>
            </div>
        </section>
    )
}

const StackItem = (stack: StackDetails) => (
    <Link href={stack.href} title="postgres" key={stack.name} target="_blank" className="flex flex-col gap-6 group">
        <div className="flex items-center gap-3">
            <div className="bg-cardBg flex items-center justify-center shrink-0 h-10 w-10 rounded-lg cursor-pointer overflow-hidden border border-solid border-[hsl(0_0%_100%/0.1)] transition">
                <Image width={20} height={20} className="w-5 text-primary" src={`/icons/${stack.name}-icon.svg`} alt="Postgres Icon" />
            </div>
            <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3">
                    <span className="text-primary m-0">{stack.name}</span>
                    <div className="transition-all ease-out -ml-1 opacity-0 text-primary group-hover:opacity-100 hover:ml-0">
                        <ChevronRightIcon size={14} strokeWidth={2} />
                    </div>
                </div>
            </div>
        </div>
    </Link>
)

interface StackDetails {
    name: string;
    href: string;
}

const stackDetails: StackDetails[] = [
    { name: "scala", href: "https://www.scala-lang.org/" },
    { name: "rust", href: "https://www.rust-lang.org/" },
    { name: "typescript", href: "https://www.typescriptlang.org/" },
    { name: "python", href: "https://www.python.org/" },
    { name: "bun", href: "https://bun.sh/" },
    { name: "clickhouse", href: "https://clickhouse.com/" },
    { name: "postgres", href: "https://www.postgresql.org/" },
    { name: "apachespark", href: "https://spark.apache.org/" },
    { name: "fastapi", href: "https://fastapi.tiangolo.com/" },
    { name: "nextjs", href: "https://nextjs.org/" },
    { name: "tauri", href: "https://tauri.app/" },
    { name: "docker", href: "https://www.docker.com/" },
    { name: "github", href: "https://www.github.com/" },
    { name: "opentelemetry", href: "https://opentelemetry.io/" },
    { name: "tailwindcss", href: "https://tailwindcss.com/" },
    { name: "dioxus", href: "https://dioxuslabs.com/" },
    { name: "intellij", href: "https://www.jetbrains.com/" },
    { name: "vscode", href: "https://code.visualstudio.com/" },
]