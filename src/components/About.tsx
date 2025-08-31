import Link from "next/link";
import Image from "next/image";
import { DottedLink } from "./DotteLink";

export const About = () => (
  <>
    <section className="pt-16 sm:pt-24 lg:pt-32 pr-6 sm:pr-10 lg:pr-32 pb-0 pl-6 sm:pl-10 lg:pl-64 max-w-[70rem]">
      <div className="items-start flex flex-none flex-col flex-nowrap gap-16 h-min justify-start overflow-visible relative w-full">
        <Link
          href="/"
          title="Profile Image"
          className="h-16 overflow-hidden relative w-16 rounded-full shadow-sm border-2"
        >
          <Image
            src="/img/profile.png"
            alt="Profile thumbnail"
            height={64}
            width={64}
          />
        </Link>

        {/* Intro */}
        <div className="flex flex-col justify-start shrink-0 relative whitespace-pre-wrap w-full md:w-[66%]">
          <h1 className="text-sm tracking-normal leading-[1.6em] font-mono">
            <span className="uppercase">Muideen Lawal, </span>
            <span>PhD</span>
          </h1>
          <h1 className="text-sm tracking-normal leading-[1.6em]">
            Polyglot software engineer with a passion for technology and
            tinkering.
          </h1>
        </div>
        {/* End Intro */}

        {/* Social */}
        <div className="items-start flex flex-none flex-col flex-nowrap gap-0 h-min justify-start overflow-visible relative w-min p-0">
          <div className="inline-flex items-start gap-4">
            <DottedLink
              title="LinkedIn"
              href="https://linkedin.com/in/ma-lawal"
            />
            <DottedLink title="Github" href="https://gihub.com/mdauthentic" />
            <DottedLink
              title="Bluesky"
              href="https://bsky.app/profile/mdauthentic.bsky.social"
            />
          </div>
        </div>
        {/* Social */}
      </div>
    </section>

    <section className="pt-16 sm:pt-24 lg:pt-32 pr-6 sm:pr-10 lg:pr-32 pl-6 sm:pl-10 lg:pl-64 max-w-[70rem] mt-16 pb-24">
      <div className="space-y-8">
        {/* Title */}
        <Link
          href="/"
          title="About Me"
          className="p-2 leading-none rounded-sm font-mono uppercase text-xs inline-flex items-center text-background max-sm:p-1 max-sm:text-[10px] bg-secondary border-secondary hover:bg-primary hover:border-primary mb-6"
        >
          About Me
        </Link>
        {/* End Title */}
        <div className="w-full lg:w-8/12 flex flex-col gap-[1.2rem]">
          <p>
            With a diverse background that cuts across various areas of software
            development, my passion for technology drives me to tinker with
            tools and innovate robust, scalable solutions —whether it’s building
            internal tooling or enabling users to interact seamlessly with
            software products and services.
          </p>
          <p>
            In 2021, I received a PhD in Computer Science from the Université
            Grenoble Alpes, France and my thesis is &quot;On Cost Estimation for
            the Recursive Relational Algebra&quot;, supervised by{" "}
            <Link
              href="https://en.wikipedia.org/wiki/Pierre_Geneves"
              title="Pierre's wikipedia"
            >
              Pierre Genevès{" "}
            </Link>
            & Nabil Layaïda. Previously, I attended the National Research
            University - Higher School of Economics, Russia where I obtained a
            Masters degeree in System and Software Engineering.
          </p>
          <p>
            I've worked on a plethora of projects over the years, from fullstack
            to backend to big data and hobby projects. I enjoy listening to
            music, learning new tools and technologies.
          </p>
        </div>
      </div>
    </section>
  </>
);
