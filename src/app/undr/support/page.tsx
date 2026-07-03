import type { Metadata } from "next";
import Link from "next/link";

const supportEmail = "support@muideenlawal.com";

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

export default function UndrSupportPage() {
  return (
    <main className="grid-paper min-h-dvh bg-background p-4 font-mono text-foreground sm:p-6">
      <article className="relative mx-auto my-8 max-w-3xl border border-line bg-background p-6 sm:my-12 sm:p-12">
        <span className="terminal-corner -top-1.5 -left-1.5 bg-hot" />
        <span className="terminal-corner -right-1.5 -bottom-1.5 bg-hot" />
        <span className="terminal-corner -top-1.5 -right-1.5 border border-hot" />
        <span className="terminal-corner -bottom-1.5 -left-1.5 border border-hot" />

        <header className="mb-9 border-b border-dashed border-line pb-4">
          <p className="mb-3 text-label uppercase tracking-label text-dim">
            ~/undr/support.md
          </p>
          <h1 className="mb-2 text-who font-medium tracking-tightish">
            undr Support<span className="text-hot">.</span>
          </h1>
          <p className="text-dim">
            Need help? Email{" "}
            <Link href={`mailto:${supportEmail}`}>{supportEmail}</Link>.
          </p>
        </header>

        <div className="space-y-10">
          {questions.map((question) => (
            <section key={question.title}>
              <h2 className="mb-3.5 text-label uppercase tracking-label text-dim">
                // {question.title}
              </h2>
              <p className="border-l border-line pl-4 text-dim">{question.body}</p>
            </section>
          ))}

          <section>
            <h2 className="mb-3.5 text-label uppercase tracking-label text-dim">
              // Privacy
            </h2>
            <p className="border-l border-line pl-4 text-dim">
              Read the{" "}
              <Link href="/undr/privacy">undr privacy policy</Link>.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
