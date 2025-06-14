import Link from "next/link";
import BoxedLink from "./BoxedLink";

export function Footer() {
    return (
        <footer className="mt-8 flex w-full flex-col px-2">
            <div className="flex items-center justify-between gap-4 border-t px-1 pt-1">
                <div className="font-mono text-xs text-light uppercase">
                    <span>© Copyright {new Date().getFullYear()}</span>
                    <Link href="https://github.com/mdauthentic" title="github homepage">
                        {" "}
                        Muideen Lawal
                    </Link>
                </div>

                <div className="flex items-center justify-end gap-2 text-xs tracking-[-0.02em] uppercase">
                    <BoxedLink
                        href="https://github.com/mdauthentic"
                        title="Github homepage"
                        className="bg-btn text-white"
                    >
                        Github
                    </BoxedLink>
                    <BoxedLink
                        href="https://www.linkedin.com/in/ma-lawal"
                        title="Linked profile"
                        className="bg-white"
                    >
                        LinkedIn
                    </BoxedLink>
                </div>
            </div>
        </footer>
    )
}