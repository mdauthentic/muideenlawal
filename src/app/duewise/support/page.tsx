import type { Metadata } from "next";
import Link from "next/link";

const supportEmail = "muideen.lawal320@gmail.com";

const questions = [
  {
    title: "How do I add a subscription?",
    body: "Tap the plus button on the Today or Subscriptions screen and enter the name, price, currency, and renewal cadence. You can also share a receipt screenshot, a link, or selected text to Duewise from another app, or tap Fill from Screenshot in the add form. Duewise reads the text on your device and prefills what it can find for you to review before saving.",
  },
  {
    title: "Why doesn't Duewise find my subscriptions automatically?",
    body: "Duewise has no bank connection and no server. It never asks for banking credentials and never sees your statements, so it cannot discover charges on its own. Everything it knows is what you enter or capture yourself. That is the trade for keeping your financial data on your iPhone and out of anyone else's hands.",
  },
  {
    title: "Can Duewise cancel a subscription for me?",
    body: "No. Marking something cancelled records your decision in Duewise; it does not contact the provider. You can save a cancellation link on a subscription so the page is one tap away, but the cancellation itself is always yours to make.",
  },
  {
    title: "How do reminders work?",
    body: "Reminders are local notifications scheduled on your device, with no push service involved. Set them per subscription and choose how much warning you want, from on the day up to 30 days ahead, plus the time of day. Duewise keeps a rolling window of upcoming reminders refreshed as renewal dates change.",
  },
  {
    title: "How do I move to a new iPhone?",
    body: "Duewise does not sync between devices, so move your data yourself. On the Subscriptions screen, open the Data menu and choose Export Backup to save a JSON file wherever you like. On the new iPhone, use Restore Backup from the same menu. Merge adds subscriptions missing from the new device and leaves existing ones untouched; Replace All removes current Duewise data first. Take-home pay is excluded from backups and needs re-entering.",
  },
  {
    title: "How do I erase everything?",
    body: "Open Settings from the Today screen and choose Erase All Duewise Data. That removes every subscription, its history, and your financial profile, then clears scheduled reminders. Deleting the app removes everything as well. Because your data lives only on your device, there is no copy held elsewhere to request deletion of.",
  },
  {
    title: "Can I choose light or dark appearance?",
    body: "Yes. Settings has an Appearance choice of System, Light, or Dark. System follows your iPhone; Light and Dark keep Duewise in one appearance regardless of the device setting.",
  },
] as const;

export const metadata: Metadata = {
  title: "Duewise Support | Muideen Lawal",
  description:
    "Support information for Duewise, a private on-device subscription renewal tracker.",
};

export default function DuewiseSupportPage() {
  return (
    <main className="grid-paper min-h-dvh bg-background p-4 font-mono text-foreground sm:p-6">
      <article className="relative mx-auto my-8 max-w-3xl border border-line bg-background p-6 sm:my-12 sm:p-12">
        <span className="terminal-corner -top-1.5 -left-1.5 bg-hot" />
        <span className="terminal-corner -right-1.5 -bottom-1.5 bg-hot" />
        <span className="terminal-corner -top-1.5 -right-1.5 border border-hot" />
        <span className="terminal-corner -bottom-1.5 -left-1.5 border border-hot" />

        <header className="mb-9 border-b border-dashed border-line pb-4">
          <p className="mb-3 text-label uppercase tracking-label text-dim">
            ~/duewise/support.md
          </p>
          <h1 className="mb-2 text-who font-medium tracking-tightish">
            Duewise Support<span className="text-hot">.</span>
          </h1>
          <p className="text-dim">
            Need help? Email {supportEmail} and I will get back to you.
          </p>
        </header>

        <div className="space-y-10">
          <section>
            <h2 className="mb-3.5 text-label uppercase tracking-label text-dim">
              // Contact
            </h2>
            <div className="grid gap-x-6 gap-y-1.5 border-l border-line pl-4 sm:grid-cols-2">
              <a
                href={`mailto:${supportEmail}`}
                className="border-b border-dashed border-line py-1.5 text-dim hover:text-hot"
              >
                Email / {supportEmail}
              </a>
              <Link
                href="https://github.com/mdauthentic"
                className="border-b border-dashed border-line py-1.5 text-dim hover:text-hot"
              >
                GitHub / @mdauthentic
              </Link>
            </div>
          </section>

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
              Duewise collects no data. Read the{" "}
              <Link href="/duewise/privacy">Duewise privacy policy</Link>.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
