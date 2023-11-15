import { FeaturedPost } from '@/components/FeaturedPost'
import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <Projects />
    </>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="heroBox">
            <h1>Hi there, I am <span className="highlight">Muideen Lawal</span></h1>

            <p>I am a software engineer based in Paris. I mostly spend my time writing backend services, optimizing queries on multidimensional workloads, and doing database research.</p>

            <div className="btnWrapper">
              <Link className="socialBtn hw-2 br-2" href="https://github.com/mdauthentic">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </Link>
              <Link className="socialBtn hw-2 br-2" href="https://linkedin.com/in/ma-lawal">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z">
                  </path>
                </svg>
              </Link>
              <Link className="socialBtn hw-2 br-2" href="mailto:muideen.lawal320@gmail.com">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z">
                  </path>
                </svg>
              </Link>
              <Link target="_blank" className="socialBtn hw-2 br-2" href="https://bsky.app/mdauthentic">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cloud-haze2-fill" viewBox="0 0 16 16">
                  <path d="M8.5 2a5.001 5.001 0 0 1 4.905 4.027A3 3 0 0 1 13 12H3.5A3.5 3.5 0 0 1 .035 9H5.5a.5.5 0 0 0 0-1H.035a3.5 3.5 0 0 1 3.871-2.977A5.001 5.001 0 0 1 8.5 2zm-6 8a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zM0 13.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Featured() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  return (
    <section className="post">
      <div className="container">
        <div className="featuredBox">
          <div className="titleContent">
            <div className="titleWrapper">
              <h2 className="title">Featured Posts</h2>
            </div>
            <div className="readMore">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-return-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z" />
              </svg>
              <a href="/blog" className="readMoreText">See all</a>
            </div>
          </div>
          <div className="postCollection">
            {/* Loop Through */}
            {posts.slice(0, 2).map((post, index) => (
              <FeaturedPost key={index} {...post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const projects = [
  { id: 1, git: "https://github.com/mdauthentic/data-generator", title: "Data Generator", description: "A fake data generator that generates data based on a given custom schema. Written in rust using rand and Nom crates for random data selection and parsing rsp.", tags: "#data #sample, #Rust, #Nom, #Parsing" },
  { id: 2, git: "https://github.com/mdauthentic/muideenlawal", title: "NextJs Portfolio", description: "This website that you are currently on. Built with NextJs, Typescript, Contentlayer for typed markdown generation and deployed on Vercel.", tags: "#NextJs, #Contentlayer, #MDX, #Vercel" },
  { id: 3, git: "https://github.com/mdauthentic/commune-api", title: "Commune API", description: "API for retrieving information about high schools in France and postal codes for all communities in France.", tags: "#FastAPI, #Python3, #RethinkDB, #Docker, #RestAPI" },
  { id: 4, git: "https://github.com/mdauthentic", title: "Soustitle", description: "A parser for subtitle (srt) files. It read and convert .srt files to csv or json. Available in Rust, Scala & Python.", tags: "#Rust, #Scala, #Python3, #Parsing" },
]

function Projects() {
  return (
    <section className="projects">
      <div className="container">
        <div className="titleContent">
          <h2 className="projectTitle">Worked on a plethora of <span className="highlight">personal projects</span>.</h2>
        </div>

        <div className="projectGrid">
          {projects.map((project) => (
            <div className="item" key={project.id}>
              <div className="projectCard">
                <div className="flexSpaceBtw">
                  <Link href={project.git} className="cardHeader">{project.title}</Link>
                  <Link href={project.git}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-link-45deg" viewBox="0 0 16 16">
                      <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                      <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                    </svg>
                  </Link>
                </div>
                <p className="projectBody">{project.description}</p>
                <div className="hrLine" />
                <div className="tagWrapper">{project.tags}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="btnWrapper">
          <Link href="https://github.com/mdauthentic" className="btn blackBg">
            <span>See all </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}