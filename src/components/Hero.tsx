import Image from "next/image";
import Link from "next/link";

export const Hero = () => (
    <section className="py-20">
        <div className="mx-auto max-w-2xl px-6 lg:px-2">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
                <div className="col-span-full lg:col-span-2 flex items-end">
                    <div className="flex flex-col items-start gap-5">
                        <h1 className="textGradient text-[clamp(2rem,5vw,2.5rem)] leading-[clamp(2.125rem,5.5vw,2.75rem)] tracking-[-0.01em]">
                            Hi, I&rsquo;m Muideen
                        </h1>
                        <div className="w-full">
                            <p className="text-[0.9rem]">Polyglot software engineer with a passion for technology and tinkering.</p>
                        </div>
                        <DottedLink />
                    </div>
                </div>
                <div className="col-span-full lg:col-span-1">
                    <Image
                        src="/img/profile.webp"
                        width={221}
                        height={329}
                        alt="Muideen's photo"
                        priority={false}
                        loading="lazy"
                        className="object-center object-cover rounded-xl border-4 border-white/10 w-full"
                    />
                </div>
            </div>
        </div>
    </section>
);


const DottedLink = () => (
    <Link href="/about" title="About me" className="flex items-center gap-2 pt-2 group">
        <div className="flex items-center gap-2 pt-2">
            <span className="h-2 w-2 bg-glass-bg"></span>
            <span className="text-primary font-medium border-b border-b-primary group-hover:text-foreground">
                About Me
            </span>
        </div>
    </Link>
);