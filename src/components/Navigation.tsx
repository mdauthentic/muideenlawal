import BoxedLink from "./BoxedLink";

export function Navigation() {
    return (
        <div className="mb-8 flex items-center justify-between px-2">
            {/* <span className="font-medium">Muideen</span> */}
            <div></div>
            <div className="flex items-center justify-end gap-2 text-xs uppercase">
                <BoxedLink
                    href="mailto:muideen.lawal320@gmail.com"
                    title="email"
                    className="bg-white transition-all delay-[0s] duration-[0.4s] ease-[ease-out] hover:scale-105"
                >
                    Contact
                </BoxedLink>
            </div>
        </div>
    )

} 