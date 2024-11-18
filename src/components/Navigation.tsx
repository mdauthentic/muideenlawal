import { GithubIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Navigation = () => (
    <header className="sticky inset-x-0 top-4 z-50 px-4 text-primary bg-background text-sm font-funnelSans">
        <nav className="flex items-center justify-between max-w-2xl mx-auto p-1 bg-white/10 border border-solid border-white/10 rounded-xl">
            <div className="flex lg:flex-1">
                <Link className="flex items-center gap-x-2" href="/">
                    <Image src="/img/icon.png" width={32} height={32} priority={false} className="rounded-lg border" alt="muideen photo" />
                </Link>
            </div>
            <div className="flex items-center gap-x-3">
                <Link className="font-medium leading-6 hover:scale-105" title="Homepage" href="/">Home</Link>
                <Link className="font-medium leading-6 hover:scale-105" title="About" href="/about">About</Link>
                <Link className="font-medium leading-6 hover:scale-105" title="Projects" href="/">Notes</Link>
                <Link href="https://github.com/mdauthentic/muideenlawal" title="Star on github" className="ml-4 px-3 py-1 rounded-lg bg-white/10 border border-solid border-white/5 hover:bg-white/20 hover:scale-105 transition-all duration-[0.4s] ease-[ease-out] delay-[0s]">
                    <div className="flex items-center justify-center gap-2 cursor-pointer">
                        <GithubIcon size={16} strokeWidth={1} />
                        <span>Star</span>
                    </div>
                </Link>
            </div>
        </nav>
    </header>
)