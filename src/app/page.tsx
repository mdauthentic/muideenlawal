import { Hero } from '@/components/Hero'
import TechStack from '@/components/TechStack'
import Project from '@/components/Project'

export default function Home() {
  return (
    <div className="text-foreground text-sm font-funnelSans">
      <Hero />
      <Project />
      <TechStack />
    </div>
  )
}