import Image from "next/image";
import { GithubIcon, LinkedinIcon, Mail, X } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: 'About',
    description: 'About Me',
}

export default function About() {
    return (
        <section className="py-16 text-foreground text-sm font-funnelSans">
            <ProfileIntro />
            <ImgSection />
            <Biography />
        </section>
    )
}

const ProfileIntro = () => (
    <div className="mx-auto max-w-2xl px-6 lg:px-2 mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr]">
            <div className="flex flex-col gap-4">
                <h2 className="text-primary text-lg tracking-tight font-semibold">
                    <span className="uppercase">Muideen Lawal</span>, {" "}
                    <span>PhD</span>
                </h2>
                <p>
                    Polyglot software engineer with a passion for technology and tinkering.
                </p>
                <Social />
            </div>
        </div>
    </div>
)

const ImgSection = () => (
    <div className="max-w-2xl w-full mx-auto mb-0 px-6 lg:px-2">
        <Image
            src="/img/about-pic.webp"
            width={1800}
            height={1087}
            sizes="100vw"
            alt="Muideen's photo"
            priority={false}
            loading="lazy"
            className="w-full -scale-x-100 border border-solid border-[hsl(0_0%_100%/0.1)] grayscale rounded-lg"
        />
    </div>
)

const Biography = () => (
    <div className="max-w-2xl w-full mx-auto mb-0 px-6 lg:px-2 pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="col-span-full lg:col-span-1">
                <span className="text-primary text-sm tracking-[0.7375rem] uppercase">BIO</span>
            </div>
            <div className="col-span-full lg:col-span-2 flex flex-col gap-4 text-primary">
                <p>
                    Software Engineer currently at Opensee where I spend most of my time writing backend API services, optimizing queries on multidimensional workloads, conducting database research targeted towards the Fintech sector, and optimizing developer experience in general.
                </p>
                <p>
                    In 2021, I received a PhD in Computer Science from the Université Grenoble Alpes, France and my thesis is &quot;On Cost Estimation for the Recursive Relational Algebra&quot;, supervised by Pierre Genevès & Nabil Layaïda.

                    Previously, I attended the National Research University - Higher School of Economics, Russia where I obtained a Masters degeree in System and Software Engineering.
                </p>
                <p>
                    I am interested in data-related subject such as query optimization and cost estimation in DB engines. I&apos;ve worked on a plethora of projects over the years, from fullstack to backend to big data and hobby projects.  I am constantly evolving and learning new tools and technologies.
                </p>
            </div>
        </div>
    </div>
);

const Social = () => (
    <div className="inline-flex gap-3">
        <Link href="https://linkedin.com/in/ma-lawal" title="LinkedIn profile" className="inline-flex items-center justify-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 h-9 w-9 text-white bg-glassBg backdrop-blur-2xl shadow-btnShadow">
            <LinkedinIcon size={18} strokeWidth={2} className="hover:scale-125 transition-all duration-[0.4s] ease-[ease-out] delay-[0s]" />
        </Link>
        <Link href="https://gihub.com/mdauthentic" title="Github profile" className="inline-flex items-center justify-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 h-9 w-9 text-white bg-glassBg backdrop-blur-2xl shadow-btnShadow">
            <GithubIcon size={16} strokeWidth={2} className="hover:scale-125 transition-all duration-[0.4s] ease-[ease-out] delay-[0s]" />
        </Link>
        <Link href="https://x.com/mdauthentic" title="Twitter/X profile" className="inline-flex items-center justify-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 h-9 w-9 text-white bg-glassBg backdrop-blur-2xl shadow-btnShadow">
            <X size={16} strokeWidth={2} className="hover:scale-125 transition-all duration-[0.4s] ease-[ease-out] delay-[0s]" />
        </Link>
        <Link href="#" title="Email address" className="inline-flex items-center justify-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 h-9 w-9 text-white bg-glassBg backdrop-blur-2xl shadow-btnShadow">
            <Mail size={16} strokeWidth={2} className="hover:scale-125 transition-all duration-[0.4s] ease-[ease-out] delay-[0s]" />
        </Link>
    </div>
)