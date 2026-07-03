import type { Metadata } from "next";
import Link from "next/link";

const effectiveDate = "July 3, 2026";

const sections = [
  {
    title: "The short version",
    body: [
      "undr does not collect, transmit, sell, or share data from the iOS app. There is no account, no sign-in, no analytics, no tracking, and no advertising in the app.",
      "Everything you create in undr stays on your device unless you choose to export it, share it, or open an external link.",
    ],
  },
  {
    title: "What the app stores",
    body: [
      "undr stores notes, collections, and settings in the app's private storage on your device as Markdown files and small configuration files.",
      "Muideen Lawal does not operate an undr sync service and cannot see the content you create in the app.",
    ],
  },
  {
    title: "Import, export, and sharing",
    body: [
      "When you import Markdown files, undr reads only the folder or files you choose and copies Markdown content into local app storage.",
      "When you export or share a note, the copy you create is handled by the destination you choose, such as Files, Mail, Messages, or another app.",
    ],
  },
  {
    title: "Network use",
    body: [
      "undr is designed to work offline. The reading view uses bundled local assets and blocks remote images, fonts, scripts, media, and network requests.",
      "If you tap a link inside a note or open the hosted privacy policy, your browser handles that request. The website or browser you use may have its own privacy practices.",
    ],
  },
  {
    title: "Support and this website",
    body: [
      "For support, use the undr support page linked below.",
      "If you contact Muideen Lawal through a linked support channel, the information you choose to send is used only to respond to your request.",
      "This public website may receive standard hosting logs and performance information needed to operate the site. That website activity is separate from the undr app, which does not send app data to this website.",
    ],
  },
  {
    title: "Retention and deletion",
    body: [
      "Your notes and settings remain on your device until you remove them. Deleting a note moves it to Trash; deleting it from Trash or emptying Trash removes it permanently from the app.",
      "Uninstalling undr deletes the app's local data from your device.",
    ],
  },
  {
    title: "Children",
    body: [
      "undr is suitable for all ages and does not knowingly collect personal information from anyone, including children.",
    ],
  },
  {
    title: "Changes",
    body: [
      "If this policy changes, the updated version will be posted on this page with a new effective date.",
    ],
  },
] as const;

export const metadata: Metadata = {
  title: "undr Privacy Policy | Muideen Lawal",
  description: "Privacy policy for undr, a private local Markdown notes app.",
};

export default function UndrPrivacyPage() {
  return (
    <main className="grid-paper min-h-dvh bg-background p-4 font-mono text-foreground sm:p-6">
      <article className="relative mx-auto my-8 max-w-3xl border border-line bg-background p-6 sm:my-12 sm:p-12">
        <span className="terminal-corner -top-1.5 -left-1.5 bg-hot" />
        <span className="terminal-corner -right-1.5 -bottom-1.5 bg-hot" />
        <span className="terminal-corner -top-1.5 -right-1.5 border border-hot" />
        <span className="terminal-corner -bottom-1.5 -left-1.5 border border-hot" />

        <header className="mb-9 border-b border-dashed border-line pb-4">
          <p className="mb-3 text-label uppercase tracking-label text-dim">
            ~/undr/privacy.md
          </p>
          <h1 className="mb-2 text-who font-medium tracking-tightish">
            undr Privacy Policy<span className="text-hot">.</span>
          </h1>
          <p className="text-dim">Effective {effectiveDate}</p>
        </header>

        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="mb-3.5 text-label uppercase tracking-label text-dim">
                // {section.title}
              </h2>
              <div className="space-y-4 border-l border-line pl-4 text-dim">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}

          <section>
            <h2 className="mb-3.5 text-label uppercase tracking-label text-dim">
              // Contact
            </h2>
            <div className="space-y-4 border-l border-line pl-4 text-dim">
              <p>
                Questions about privacy? Use the{" "}
                <Link href="/undr/support">undr support page</Link>.
              </p>
            </div>
          </section>
        </div>

        <footer className="mt-10 border-t border-dashed border-line pt-4 text-xs text-dim">
          <Link href="/undr/support" className="hover:text-hot">
            undr support
          </Link>
        </footer>
      </article>
    </main>
  );
}
