import Image from "next/image";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

export default function Page() {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-sm">
            <div className="sticky top-8">
                <div className="flex flex-col justify-start h-auto">
                    <h2 className="font-mono font-medium leading-none text-xs/6 uppercase">STACKS</h2>
                </div>
            </div>

            <div className="relative overflow-visible h-min w-full">
                <div className="grid grid-cols-6 gap-4">
                    {stackDetails.map((stack) =>
                        <StackItem name={stack.name} href={stack.href} key={stack.name} />
                    )}
                </div>
            </div>
        </section>
    )
}

const StackItem = (stack: StackDetails) => (
    <Link href={stack.href} title={stack.name} key={stack.name} target="_blank" className="flex flex-col gap-6 group">
        <div className="flex items-center gap-3">
            <div className="bg-white flex items-center justify-center shrink-0 h-10 w-10 rounded-lg cursor-pointer overflow-hidden border border-topBorder transition">
                <Image width={18} height={18} className="w-5 text-foreground" src={`/icons/${stack.name}-icon.svg`} alt={`${stack.name} icon`} />
            </div>
            <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3">
                    <div className="transition-all ease-out -ml-1 opacity-0 text-foreground group-hover:opacity-100 hover:ml-0">
                        <FiChevronRight size={14} strokeWidth={2} />
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