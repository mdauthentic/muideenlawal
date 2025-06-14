import { Navigation } from '@/components/Navigation'
import { About } from '@/components/About';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="mx-auto mt-0 max-w-[52.5rem] border border-solid border-page px-4 py-2 font-sans text-sm shadow-page lg:my-8">
      <Navigation />
      <About />
      <Footer />
    </div>
  )
}