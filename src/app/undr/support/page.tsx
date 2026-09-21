import { DocumentPage, DocumentSection } from "@/components/portfolio/document-page";
import type { Metadata } from "next";
import Link from "next/link";

const questions = [
  {
    title: "Where are my notes stored?",
    body: "undr stores notes, collections, and settings locally on your device. There is no account, sync service, analytics, advertising, or server copy.",
  },
  {
    title: "Can I export my notes?",
    body: "Yes. Use Settings -> Export to Files to save your notes as Markdown files. You can also share an individual note from the editor.",
  },
  {
    title: "Can I import existing Markdown files?",
    body: "Yes. Use Settings -> Import Markdown files and choose a folder of .md files. undr copies those files into its local storage.",
  },
  {
    title: "Does undr work offline?",
    body: "Yes. undr is designed to work offline. The reading view uses bundled local assets and blocks remote images, fonts, and scripts.",
  },
  {
    title: "How do I delete notes permanently?",
    body: "Deleting a note moves it to Trash. From Trash, you can restore the note, delete it permanently, or empty Trash.",
  },
] as const;

export const metadata: Metadata = {
  title: "undr Support | Muideen Lawal",
  description: "Support information for undr, a private local Markdown notes app.",
};

export default function SupportPage() {
  return <DocumentPage app="undr" title="Support" intro={<>Need help? Contact me through GitHub or LinkedIn.</>} contents={["Contact", ...questions.map(question => question.title), "Privacy"]} related={{ href: "/undr/privacy", label: "Privacy policy" }}>
    <DocumentSection title="Contact"><div className="flex flex-wrap gap-x-8 gap-y-3"><Link href="https://github.com/mdauthentic">GitHub / @mdauthentic</Link><Link href="https://linkedin.com/in/ma-lawal">LinkedIn / ma-lawal</Link></div></DocumentSection>

    {questions.map(question => <DocumentSection key={question.title} title={question.title}><p>{question.body}</p></DocumentSection>)}
    <DocumentSection title="Privacy"><p>Read the <Link href="/undr/privacy">undr privacy policy</Link>.</p></DocumentSection>
  </DocumentPage>;
}
