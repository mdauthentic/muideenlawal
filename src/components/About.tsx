import Link from "next/link";
import Image from "next/image";
import ProfileImg from "../../public/img/profile.png";

export const About = () => (
    <div className="flex w-full flex-col px-2">
        <div className="mb-4 border-b border-dashed border-b-black">
            <h1 className="mt-0 mb-2 text-base leading-[1.2] font-semibold">
                About
            </h1>
        </div>

        <section className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div>
                <h2 className="mt-0 mb-2 text-base leading-[1.2] font-medium">
                    Muideen Lawal, PhD
                </h2>
                <div className="flex gap-2">
                    <span className="flex items-center border-[0.1rem] border-solid border-black bg-tag pr-[0.2rem] pl-[0.3rem] font-mono text-xs tracking-[-0.02em] uppercase">
                        Software Engineer
                    </span>
                    <span className="flex items-center border-[0.1rem] border-solid border-black bg-white pr-[0.2rem] pl-[0.3rem] font-mono text-xs tracking-[-0.02em] uppercase">
                        Paris
                    </span>
                </div>

                <div className="flex flex-col gap-[1.2rem] pt-5">
                    <p>
                        Hello, my name is Muideen. I am a software engineer with a diverse
                        background that cuts across various areas of software development.
                        My passion for technology drives me to tinker with tools and
                        innovate robust, scalable solutions —whether it’s building internal
                        tooling or enabling users to interact seamlessly with software
                        products and services.
                    </p>
                    <p>
                        In 2021, I received a PhD in Computer Science from the Université
                        Grenoble Alpes, France and my thesis is &quot;On Cost Estimation for
                        the Recursive Relational Algebra&quot;, supervised by Pierre Genevès
                        & Nabil Layaïda. Previously, I attended the National Research
                        University - Higher School of Economics, Russia where I obtained an
                        MSc in System and Software Engineering.
                    </p>
                    <p>
                        I&apos;ve worked on a plethora of projects over the years, from
                        fullstack to backend to big data and hobby projects. I enjoy
                        listening to music, learning new tools and technologies.
                    </p>
                </div>
                <div className="pt-5">
                    <Link
                        href="/"
                        title="link"
                        className="relative inline-flex h-7 items-center border-[0.1rem] border-solid border-black bg-btn px-2 py-[0.1rem] text-center font-mono text-xs font-semibold text-white uppercase shadow-link transition-all delay-[0s] duration-[0.4s] ease-[ease-out] hover:scale-105"
                    >
                        Get in touch
                    </Link>
                </div>
            </div>

            {/* Right side */}
            <div>
                <Image
                    src={ProfileImg}
                    alt="icon"
                    className="mr-0.5 mb-0.5 h-full w-full border border-solid border-img object-cover shadow-img"
                />
            </div>
        </section>
    </div>
);