import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Navigation } from '@/components/Navigation'
import { Project } from '@/components/Project'
import TechStack from '@/components/TechStack'
import { About } from '@/components/About';

export default function Home() {
  return (
    <div className="text-sm font-funnelSans">
      <Navigation />
      <div className="relative flex flex-col items-center gap-0 min-h-screen h-min justify-start overflow-visible p-0">
        <div className="max-w-[55rem] mx-auto overflow-visible relative w-full flex flex-col items-center h-min pt-28 pb-10 px-6 space-y-28">
          <Hero />
          <About />
          <Project />
          <TechStack />
          <Footer />
        </div>
      </div>
    </div>
  )
}