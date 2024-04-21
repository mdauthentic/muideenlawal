import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Project />
      <Footer />
    </>
  )
}

function Hero() {
  return (
    <section className="bg-[radial-gradient(50%_50%_at_50%_50%,rgba(106,207,214,0.16)_0%,rgba(106,207,214,0)_100%)] px-6 py-16 text-[#171618]" id="home">
      <div className="mx-auto max-w-3xl">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-16 mx-4">
          <div className="item space-y-20">
            <div>
              <h1 className="text-3xl">Hey! I'm Muideen Lawal</h1>
              <p className="text-zinc-600">Software <span className="font-bricolage-grostesque text-transparent bg-clip-text bg-gradient-to-r from-[#f60] to-[#f00ab3]">Engineer</span> based in Paris</p>
              <Social />
            </div>
          </div>
          <div className="item">
            <Image
              src="/img/profile-left.png"
              alt="Muideen photo"
              sizes="100vw"
              width={600}
              height={500}
              priority={false}
              loading="lazy"
              className="object-fit rounded-3xl bg-[rgba(255,255,255,0.85)] shadow-[rgb(228,229,233)_0px_0px_0px_0.5px,rgba(228,229,233,0.6)_0px_0px_0px_1px,rgb(249,249,251)_0px_0px_0px_3.5px,rgb(243,244,247)_0px_0px_0px_4px] origin-bottom -rotate-1"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="px-6 py-16 text-[#171618]" id="about">
      <div className="mx-auto max-w-3xl">
        <div className="grid gap-4 mx-4">
          <div className="flex items-start flex-[1_0_0px] flex-col flex-nowrap gap-1 h-auto justify-start p-0">
            <h2 className="text-xl font-medium">Abo<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f60] to-[#f00ab3]">ut Me</span></h2>
          </div>
          <div className="text-sm">
            <p className="text-zinc-600">I am currently a Software Engineer at Opensee where I spend most of my time writing backend API services, optimizing queries on multidimensional workloads, and doing database research targeted towards the Fintech sector, and optimizing developer experience in general.</p>
            <p className="pt-3 text-zinc-600">
              In 2021, I received a PhD in Computer Science from the Université Grenoble Alpes, France and my thesis is "On Cost Estimation for the Recursive Relational Algebra", supervised by Pierre Genevès & Nabil Layaïda.
            </p>
            <p className="pt-3 text-zinc-600">
              Previously, I attended the National Research University - Higher School of Economics, Russia where I obtained a Masters degeree in System and Software Engineering.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

const projects = [
  {
    name: 'NextJs Portfolio',
    description: "This website that you are currently on. Built with NextJs, Typescript and deployed on Vercel.",
    tag: 'NextJs/TypeScript',
    href: 'https://github.com/mdauthentic/muideenlawal',
  },
  {
    name: 'Db2ERD',
    description: "Create Entity-Relationship Diagrams from SQL Create statements using d2lang and dioxus Rust",
    tag: 'Rust/SQL',
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

function Project() {
  return (
    <section className="px-6 py-16 text-[#171618]" id="projects">
      <div className="mx-auto max-w-3xl">
        <div className="mx-4">
          <div className="flex items-start flex-[1_0_0px] flex-col flex-nowrap gap-1 h-auto justify-start p-0">
            <h2 className="text-xl font-medium">Proj<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f60] to-[#f00ab3]">ects</span></h2>
          </div>

          <ul role="list" className="divide-y divide-gray-100">
            {projects.map((project) => (
              <li key={project.name} className="flex justify-between gap-x-6 py-5">
                <Link href={project.href} className="flex justify-between w-full">
                  <div className="flex min-w-0 gap-x-4">
                    <div className="min-w-0 flex-auto">
                      <p className="text-sm font-medium leading-6 text-[#171618]">{project.name}</p>
                      <p className="mt-1 text-sm leading-5 text-gray-500">{project.description}</p>
                    </div>
                  </div>
                  <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                    <p className="rounded-lg bg-gray-50 border border-solid border-[rgb(232,236,241)] px-3 py-1 text-xs text-gray-600 hover:bg-gray-100">{project.tag}</p>
                  </div>
                </Link>

              </li>
            ))}
          </ul>

          <div className="flex items-center justify-center mt-8">
            <Link className="flex justify-center items-center align-middle bg-[#171618] text-white text-sm rounded-lg gap-1.5 px-4 py-2" href="https://github.com/mdauthentic" title='link to project in github repo'>
              <span>See all</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path></svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="px-6 py-16">
      <div className="mx-auto max-w-lg">
        <div className="grid gap-12 mx-4 text-center">
          <div className="flex flex-col gap-2">
            <span className="font-medium text-lg text-gray-500">
              You have to do your own growing no matter how tall your grandfather was.
            </span>
            <span className="font-medium text-gray-500">
              - Abraham Lincoln
            </span>
          </div>

          <div className="flex flex-row gap-2 justify-center text-sm">
            <span>Copyright © {(new Date()).getFullYear()}</span>
            <span>・</span>
            <span>Muideen Lawal</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

function Social() {
  return (
    <div className="flex gap-4 pt-6">
      <Link className="inline-flex justify-center items-center rounded-xl p-2 bg-[#171618] text-white hover:bg-zinc-700 focus-visible:outline" href="https://github.com/mdauthentic" title="github link">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
        </svg>
      </Link>
      <Link className="inline-flex justify-center items-center rounded-xl p-2 bg-[#171618] text-white hover:bg-zinc-700 focus-visible:outline" href="https://linkedin.com/in/ma-lawal" title="linkedin page">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z">
          </path>
        </svg>
      </Link>
      <Link className="inline-flex justify-center items-center rounded-xl p-2 bg-[#171618] text-white hover:bg-zinc-700 focus-visible:outline" href="mailto:muideen.lawal320@gmail.com" title="email address">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z">
          </path>
        </svg>
      </Link>
      <Link className="inline-flex justify-center items-center rounded-xl p-2 bg-[#171618] text-white hover:bg-zinc-700 focus-visible:outline" href="https://bsky.app/profile/mdauthentic.bsky.social" title="Bluesky account">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z">
          </path>
        </svg>
      </Link>
    </div>
  )
}
