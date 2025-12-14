import { Navigation } from "@/components/Navigation";
import { About } from "@/components/About";

export default function Home() {
  return (
    <div className="font-sans text-sm">
      <Navigation />
      <About />
    </div>
  );
}
