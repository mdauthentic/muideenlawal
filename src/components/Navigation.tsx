import Link from "next/link";

export function Navigation() {
    return (
        <header className="bg-white w-full fixed z-[9999] px-4 lg:px-6 py-[15px] left-0 top-0 font-mono">
            <nav className="w-full relative flex flex-row flex-wrap items-stretch m-0 py-0">
                <div className="w-full flex items-center justify-between font-medium text-xs uppercase">
                    <Link title="home" href="/" className="py-1 rounded-lg bg-white/10 border border-solid border-white/5 hover:bg-white/20 hover:scale-105 transition-all duration-[0.4s] ease-[ease-out] delay-[0s]">
                        Home
                    </Link>

                    <nav className="flex items-center justify-self-end gap-4">
                        <Link href="/" title="notes" className="px-3 py-1 rounded-lg bg-white/10 border border-solid border-white/5 hover:bg-white/20 hover:scale-105 transition-all duration-[0.4s] ease-[ease-out] delay-[0s]">
                            Notes
                        </Link>
                        <Link href="/" title="contact" className="py-1 rounded-lg bg-white/10 border border-solid border-white/5 hover:bg-white/20 hover:scale-105 transition-all duration-[0.4s] ease-[ease-out] delay-[0s]">
                            Clone
                        </Link>
                    </nav>
                </div>
            </nav>
        </header>
    )

} 