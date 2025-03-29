import Link from "next/link";

export const Project = () => (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-sm">
        <div className="sticky top-8">
            <div className="flex flex-col justify-start h-auto">
                <h2 className="font-mono font-medium leading-none text-xs/6 uppercase">PROJECTS</h2>
            </div>
        </div>
        <div className="relative h-min">
            <div className="bg-terminal-black px-2 pt-4 pb-6 font-mono border-terminal-black border-t-4 border-t-accent rounded-lg">
                <div className="flex flex-col gap-3">
                    <div className="flex text-sm">
                        <span className="text-terminal-title">project@git:~$</span>
                        <p className="flex-1 text-terminal-heading items-center pl-2">cat projects</p>
                    </div>

                    {projects.map((item) => (
                        <div className="grid grid-cols-1 gap-2 ml-2" key={item.name}>
                            <div className="col-span-full lg:col-span-1">
                                <Link href={item.href} title={item.name}>
                                    <span className="text-terminal-title">{'=> '}</span>
                                    <span className="text-accent hover:border-b hover:border-b-accent">{item.name}</span>
                                </Link>
                            </div>
                            <div className="col-span-full lg:col-span-2 flex flex-col gap-4 text-xs text-terminal-grey">
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

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
    {
        name: 'SQL Parser',
        description: "An in-progress SQL parser written in Rust and uses Chumsky for parsing for educational purpose.",
        tag: 'Rust/SQL',
        href: 'https://github.com/mdauthentic/sql-parser',
    },
    {
        name: 'SE Resume',
        description: 'A Latex CV template for software engineers',
        tag: 'Latex',
        href: 'https://github.com/mdauthentic/se-resume',
    },
]