import Link from "next/link";

export default function Projects() {
    return (
        <section className="py-16">
            <div className="mx-auto max-w-2xl px-6 lg:px-2">
                <div className="flex flex-col gap-4">
                    <h2 className="textGradient text-2xl leading-[clamp(2.125rem,5.5vw,2.75rem)] tracking-[-0.01em]">Projects</h2>
                    <p className="text-sm tracking-[-0.018em]">
                        I have worked on a plethora of projects using different languages and tools. Some of them are below.
                    </p>
                    <div className="mt-5">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {projects.map((item) => (
                                <Card item={item} key={item.name} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center pt-8">
                    <Link href="https://github.com/mdauthentic" title="github repository" className="inline-flex self-center py-1.5 px-3 text-white bg-glassBg backdrop-blur-2xl shadow-btnShadow rounded-md">
                        View all
                    </Link>
                </div>
            </div>
        </section>
    )
}

const Card = (data: { item: Project }) => {
    const { name, description, tag, href } = data.item;
    return (
        <Link href={href} className="bg-cardBg flex flex-col gap-1 p-5 border border-solid border-[hsl(0_0%_100%/0.1)] rounded-lg hover:bg-background">
            <div className="flex flex-col gap-1">
                <div className="rounded-lg inline-flex w-fit items-center font-medium hover:text-sky-500 text-xs text-primary h-5 mb-2">
                    <span className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 bg-teal-500"></span>
                        <span>{tag}</span>
                    </span>
                </div>
                <h3 className="text-primary text-[clamp(.875rem,2vw,1rem)] leading-[1.375rem] tracking-[-0.045em]">
                    {name}
                </h3>
            </div>
            <p className="mt-1"> {description}</p>
        </Link>
    )
}

interface Project {
    name: string;
    description: string;
    tag: string;
    href: string;
}

const projects: Project[] = [
    {
        name: 'NextJs Portfolio',
        description: "This website. Built with NextJs, Typescript and deployed on Vercel.",
        tag: 'NextJs',
        href: 'https://github.com/mdauthentic/muideenlawal',
    },
    {
        name: 'Db2ERD',
        description: "Create ER Diagrams from SQL Create statements using d2lang and dioxus Rust",
        tag: 'Rust',
        href: 'https://github.com/mdauthentic/db2erd',
    },
    {
        name: 'Port Manager',
        description: "A cross-platofrm desktop app to manage your ports made with Dioxus and Rust.",
        tag: 'Rust',
        href: 'https://github.com/mdauthentic/portmanager',
    },
    // {
    //   name: 'SQL Parser',
    //   description: "An in-progress SQL parser written in Rust and uses Chumsky for parsing for educational purpose.",
    //   tag: 'Rust/SQL',
    //   href: 'https://github.com/mdauthentic/sql-parser',
    // },
    {
        name: 'SE Resume',
        description: 'A Latex CV template for software engineers',
        tag: 'Latex',
        href: 'https://github.com/mdauthentic/se-resume',
    },
]