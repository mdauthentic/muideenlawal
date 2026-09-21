import { ArrowDown } from "lucide-react";
import { profile } from "@/components/profile";
import { selectedProjects } from "@/components/selected-projects";
import { PortfolioAbout } from "@/components/portfolio/about";
import { RoomCard } from "@/components/portfolio/room-card";
import { ExternalLink, Eyebrow } from "@/components/portfolio/ui";

export default function Home() {
  return (
    <main id="main" className="flex-1">
      <section
        aria-labelledby="intro-title"
        className="mx-auto max-w-450 px-6 pt-9 pb-12 sm:px-[4.7vw] lg:pt-16 lg:pb-16"
      >
        <div className="flex items-center justify-between gap-5">
          <Eyebrow>{profile.name} / Software engineer</Eyebrow>
          <span className="hidden text-xs text-subtle sm:block uppercase font-mono">
            {profile.location}
          </span>
        </div>
        <div className="mt-7 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <h1
            id="intro-title"
            className="m-0 text-[clamp(42px,6.2vw,96px)] leading-[1.04] font-normal tracking-[-.065em]"
          >
            Software, research,
            <br />
            and things I make<span className="text-[#839449]">.</span>
          </h1>
          <div className="shrink-0 pb-2">
            <p className="max-w-xs text-sm leading-7">
              I&apos;m Muideen, a polyglot software engineer with a passion for
              technology and tinkering.
            </p>
            <a
              href="#rooms"
              className="mt-6 inline-flex items-center gap-8 text-xs underline-offset-4 hover:underline"
            >
              Take a look around
              <ArrowDown
                aria-hidden="true"
                className="size-5"
                strokeWidth={1.5}
              />
            </a>
          </div>
        </div>
      </section>
      <section
        id="rooms"
        aria-label="Work, research, and personal projects"
        className="mx-auto grid max-w-450 items-stretch md:grid-cols-3"
      >
        <RoomCard
          tone="work"
          label="01 / Professionally"
          title="Building."
          description={
            <>
              Measurement software.
              <br />
              For quantum computers.
            </>
          }
          context="Measurement software at C12"
          disclosure="About my work"
          evidence={
            <>
              <Eyebrow>Current role</Eyebrow>
              <strong className="text-[53px] leading-none font-normal tracking-tight">
                C12
              </strong>
              <p className="text-sm leading-relaxed">
                {profile.role}
                <br />
                Measurement Software
              </p>
              <small className="text-[10px]">Since May 2025 · Paris</small>
            </>
          }
        >
          <h3 className="text-2xl font-normal tracking-tight">
            Behind the experiment.
          </h3>
          <p>
            I lead the Measurement Software team at C12, building the framework
            and tools that support quantum measurement and experiments.
          </p>
          <p>
            Working closely with R&D, I help turn the needs of researchers into
            useful, scalable software.
          </p>
          <ExternalLink href={profile.company} className="text-xs">
            Explore C12
          </ExternalLink>
        </RoomCard>
        <RoomCard
          tone="research"
          label="02 / Intellectually"
          title="Thinking."
          description={
            <>
              Recursive queries.
              <br />
              Understanding what they cost.
            </>
          }
          context="Research, databases & systems"
          disclosure="About my research"
          evidence={
            <>
              <Eyebrow>PhD thesis / 2021</Eyebrow>
              <p className="font-serif text-[24px] leading-tight tracking-tight lg:text-[27px]">
                On Cost Estimation
                <br />
                for the Recursive
                <br />
                <em>Relational Algebra</em>
              </p>
              <small className="text-[10px]">{profile.university}</small>
            </>
          }
        >
          <h3 className="text-2xl font-normal tracking-tight">
            Database research.
          </h3>
          <p>
            I received my PhD in Computer Science from {profile.university} in
            2021.
          </p>
          <p>
            My thesis, <cite>{profile.thesis}</cite>, was supervised by{" "}
            {profile.supervisors}.
          </p>
        </RoomCard>
        <RoomCard
          tone="apps"
          label="03 / Just because"
          title="Making."
          description={
            <>
              Apps for iPhone and Mac.
              <br />
              Built around everyday friction.
            </>
          }
          context={selectedProjects.map((project) => project.name).join(" · ")}
          disclosure="About the apps"
          evidence={
            <>
              <Eyebrow>On my workbench</Eyebrow>
              {selectedProjects.map((project) => (
                <div
                  key={project.id}
                  className="flex items-baseline justify-between gap-3 border-b border-current/20 py-1.5"
                >
                  <strong className="text-xl font-normal tracking-tight">
                    {project.name}
                  </strong>
                  <small className="font-mono text-[10px]">
                    {project.platform.split(" / ")[0]}
                  </small>
                </div>
              ))}
            </>
          }
        >
          <h3 className="text-2xl font-normal tracking-tight">
            From an idea to an app.
          </h3>
          <p>
            Recurden helps people make subscription renewal decisions. Aftermark
            is about finding notes the way you remember them. Leaf keeps
            Markdown references alongside your work.
          </p>
          <p>
            Recurden is pending App Store release. Aftermark and Leaf are in
            development.
          </p>
          <ul className="space-y-6 pt-2">
            {selectedProjects.map((project) => (
              <li key={project.id} className="border-t border-current/20 pt-4">
                <h4 className="text-lg font-medium">{project.name}</h4>
                <p className="mt-2">{project.description}</p>
                <p className="mt-2 text-xs opacity-80">
                  {project.status} · {project.platform}
                </p>
                {project.image && (
                  <ExternalLink
                    href={project.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 text-xs"
                  >
                    View {project.name} screenshot
                  </ExternalLink>
                )}
              </li>
            ))}
          </ul>
        </RoomCard>
      </section>
      <PortfolioAbout />
    </main>
  );
}
