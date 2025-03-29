import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export const Hero = () => (
    <section className="relative w-full grid-cols-1 grid lg:grid-cols-2 gap-4 h-min justify-center max-w-[55rem] overflow-visible p-0 scroll-mt-32">
        {/* Left */}
        <div className="flex flex-col flex-[1_0_0] items-start text-neutral-600">
            <p>Software Engineer</p>
            <p>Paris, France</p>
            <div className="inline-flex gap-4 pt-4">
                <Link href="https://github.com/mdauthentic" title="github" className="hover:scale-105">
                    <FiGithub className="w-4.5 h-4.5" />
                </Link>
                <Link href="https://linkedin.com/in/ma-lawal" title="linkedin page" className="hover:scale-105">
                    <FiLinkedin className="w-4.5 h-4.5" />
                </Link>
                <Link href="mailto:muideen.lawal320@gmail.com" title="email" className="hover:scale-105">
                    <FiMail className="w-4.5 h-4.5" />
                </Link>
            </div>
        </div>
        {/* Right */}
        <div className="flex flex-col flex-[1_0_0] items-start gap-6">
            <div>
                <Image
                    src="/img/muideen.webp"
                    sizes="100vw"
                    width={408}
                    height={544}
                    alt="Muideen's photo"
                    priority={false}
                    loading="lazy"
                    className="w-full rounded-[29px] curve"
                />
            </div>
            <div className="flex flex-col gap-1">
                <h1 className="font-mono font-medium uppercase">Muideen Lawal</h1>
                <p className="text-neutral-600">
                    Polyglot software engineer with passion for technology and tinkering.
                </p>
            </div>
        </div>
    </section>
);