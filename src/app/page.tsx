import { LiveTime } from "@/components/LiveTime";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const experience = [
  ["001", "c12", "sr. software engineer", "May '25 — now"],
  ["002", "opensee", "software engineer", "Aug. '21 — April '25"],
  ["003", "inria/uga", "researcher", "Oct. '17 — April '21"],
  ["004", "cepcen s.l.", "big data developer", "Jun. '17 — Aug. '17"],
  ["005", "fors it", "software qa engineer", "June '16 — July '17"],
] as const;

const stack = [
  "Rust",
  "Python",
  "Scala",
  "TypeScript",
  "SQL",
  "RabbitMQ",
  "Postgres",
  "ClickHouse",
  "React",
  "Docker",
  "Datadog",
  "+ more",
] as const;

const current = [
  [
    "focus",
    "quantum computing, python, rust, database, distrubted & queuing system",
  ],
  ["reading", "the manager's path, camille fournier"],
  ["building", "a tiny static site generator in rust, for fun"],
] as const;

const links = [
  ["github", "@mdauthentic", "https://github.com/mdauthentic"],
  // ["email", "hello@mywebsite.com", "mailto:hello@mywebsite.com"],
  ["linkedin", "/in/ma-lawal", "https://linkedin.com/in/ma-lawal"],
] as const;

export default function Home() {
  return (
    <main className="grid-paper min-h-dvh bg-background p-4 font-mono text-foreground sm:p-6">
      <article className="relative mx-auto my-8 max-w-3xl border border-line bg-background p-6 sm:my-12 sm:p-12">
        <span className="terminal-corner -top-1.5 -left-1.5 bg-hot" />
        <span className="terminal-corner -right-1.5 -bottom-1.5 bg-hot" />
        <span className="terminal-corner -top-1.5 -right-1.5 border border-hot" />
        <span className="terminal-corner -bottom-1.5 -left-1.5 border border-hot" />

        <header className="mb-9 flex flex-col gap-3 border-b border-dashed border-line pb-4 sm:flex-row sm:items-baseline sm:justify-between">
          <p className="text-label uppercase tracking-label text-dim">
            ~/Muideen — readme.txt
          </p>

          <LiveTime />
        </header>

        <p className="mb-7">
          <span className="text-hot">{"❯"} </span>
          <span>cat ./about.md</span>
          <span className="ml-1 inline-block h-3.5 w-2 translate-y-0.5 bg-hot animate-blink" />
        </p>

        <h1 className="mb-1.5 text-who font-medium tracking-tightish">
          Muideen Lawal, PhD<span className="text-hot">.</span>
        </h1>

        <p className="mb-8 text-dim">Lead Software Engineer — C12 — Paris</p>

        <section
          aria-label="About"
          className="mb-6 space-y-4 border-l border-line pl-4 text-dim"
        >
          <p>
            A polyglot software engineer with a passion for technology and
            tinkering. I love building tools that solves problems that evades
            simple solutions at scale.
          </p>
          <p>
            I&apos;m currently working at{" "}
            <Link
              href="https://www.c12qe.com/"
              title="C12 Quantum Electronics website"
            >
              C12
            </Link>{" "}
            where I lead the Measurement Software team responsible for the
            quantum measurement software framework and the ecosystem built
            around it while partnering with R&D and other teams to deliver
            scalable solution for quantum measurement/experiments. Previously, I
            worked at Opensee.
          </p>
          <p>
            In 2021, I received a PhD in Computer Science from the Université
            Grenoble Alpes, France and my thesis is "On Cost Estimation for the
            Recursive Relational Algebra", supervised by Pierre Genevès & Nabil
            Layaïda.
          </p>
        </section>

        <Section title="// 01 — experience · selected (active since 2011)">
          <div>
            {experience.map(([id, company, role, dates]) => (
              <div
                key={id}
                className="group grid grid-cols-[2.625rem_1fr] gap-3.5 border-b border-dashed border-line py-2.5 sm:grid-cols-[2.625rem_1fr_auto]"
              >
                <span className="text-dim">{id}</span>
                <span className="group-hover:text-hot">
                  {company}
                  <span className="ml-2 text-dim">{role}</span>
                </span>
                <span className="col-start-2 text-dim sm:col-start-auto">
                  {dates}
                </span>
              </div>
            ))}
          </div>
        </Section>

        <Section title="// 02 — stack">
          <ul className="flex flex-wrap gap-1.5">
            {stack.map((name) => (
              <li key={name}>
                <Tag>{name}</Tag>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="// 03 — currently">
          <div className="space-y-1 border-l border-line pl-4 text-dim">
            {current.map(([label, value]) => (
              <p key={label}>
                <span className="text-foreground">{label}</span> — {value}
              </p>
            ))}
          </div>
        </Section>

        <Section title="// 04 — elsewhere">
          <div className="grid gap-x-6 gap-y-1.5 sm:grid-cols-2">
            {links.map(([label, value, href]) => (
              <Link
                key={label}
                href={href}
                className="group flex items-center justify-between gap-4 border-b border-dashed border-line py-1.5"
              >
                <span className="text-dim">{label}</span>

                <span className="flex items-center gap-1 overflow-hidden text-right">
                  <span className="truncate transition-colors group-hover:text-hot">
                    {value}
                  </span>

                  <ChevronRight
                    strokeWidth={1}
                    className="size-3.5 shrink-0 translate-x-[-2px] opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                  />
                </span>
              </Link>
            ))}
          </div>
        </Section>

        <footer className="mt-8 flex flex-col justify-between gap-2 border-t border-dashed border-line pt-4 text-xs text-dim sm:flex-row">
          <div className="group">
            <span>© {new Date().getFullYear()}</span>
            <Link
              href="https://github.com/mdauthentic"
              title="github homepage"
              className="group-hover:text-hot"
            >
              {" "}
              Muideen Lawal
            </Link>
          </div>
          <p>may '26 edition.</p>
        </footer>
      </article>
    </main>
  );
}

function Section({
  title,
  children,
}: Readonly<{
  title: string;
  children: React.ReactNode;
}>) {
  return (
    <section className="my-12">
      <h2 className="mb-3.5 text-label uppercase tracking-label text-dim">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Tag({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <span className="inline-flex border border-line px-2.5 py-1 text-xs text-dim transition-colors hover:border-hot hover:text-hot">
      {children}
    </span>
  );
}
