import type { Metadata } from "next";
import Link from "next/link";

const supportEmail = "muideen.lawal320@gmail.com";

const questions = [
  {
    title: "Which iPhones are supported?",
    body: "Recurden requires iOS 26 or later and is designed for iPhone in portrait orientation.",
  },
  {
    title: "What does Later do?",
    body: "Later lets you snooze a renewal decision until tomorrow or a date you choose. It returns by the renewal or cancellation-notice deadline. Snoozed decisions appear in a separate section on Today, where Show Now brings them back immediately. Snoozes survive restarting the app, but changing a subscription brings its decision back for review. Notification reminders are unchanged.",
  },
  {
    title: "What does Last Exported mean?",
    body: "Backup & Restore shows the most recent successful export on this iPhone. It does not verify that the file still exists or can be restored. Snoozes and export history stay on this iPhone and are excluded from portable backups; restoring a backup clears local snoozes.",
  },
  {
    title: "How do I add a subscription?",
    body: "Tap the plus button beside the bottom navigation on Today, Subscriptions, or Insights and enter the details. You can also choose Fill from Screenshot in the add form, or share selected text and images to Recurden from another app. Recurden recognizes text on your iPhone and gives you an editable suggestion to review before saving.",
  },
  {
    title: "Why doesn't Recurden find subscriptions automatically?",
    body: "Recurden has no bank connection, account, or server. It never asks for banking credentials and cannot inspect statements, so it only knows what you enter or capture yourself. That is the trade for keeping your subscription data on your iPhone.",
  },
  {
    title: "Can Recurden cancel a subscription for me?",
    body: "No. Marking something cancelled records your decision and retains its history; it does not contact the provider or change billing. You can save a provider's cancellation page so it is one tap away, but the cancellation itself remains yours to complete.",
  },
  {
    title: "How do reminders work?",
    body: "Reminders are local notifications scheduled on your device, with no push service involved. Choose the warning days and preferred time for each subscription. Recurden refreshes a rolling window of upcoming reminders as renewal dates change.",
  },
  {
    title: "Why did a reminder not arrive?",
    body: "Open the subscription's Reminders screen and confirm a schedule exists, then check Recurden's notification access in iOS Settings. Focus modes and notification summaries can also delay when a notification appears.",
  },
  {
    title: "How do I move to a new iPhone?",
    body: "Recurden does not sync between devices. Open Settings, choose Backup & Restore, and export a JSON backup through Files. On the new iPhone, restore that file using Merge or Replace All. The optional financial profile and Recurden Lock preference are excluded and must be configured again.",
  },
  {
    title: "How do I erase everything?",
    body: "Open Settings and choose Erase All Recurden Data. This removes subscriptions and their history, the optional financial profile, pending shared captures, snoozes, export history, and scheduled renewal reminders. Your Recurden Lock preference is left unchanged.",
  },
  {
    title: "Can I choose light or dark appearance?",
    body: "Yes. Settings offers System, Light, and Dark. System follows your iPhone; Light and Dark keep Recurden in the selected appearance.",
  },
] as const;

export const metadata: Metadata = {
  alternates: { canonical: "https://muideenlawal.com/recurden/support" },
  title: "Recurden Support | Muideen Lawal",
  description:
    "Support information for Recurden, a private on-device subscription renewal planner.",
};

export default function RecurdenSupportPage() {
  return (
    <main className="grid-paper min-h-dvh bg-background p-4 font-mono text-foreground sm:p-6">
      <article className="relative mx-auto my-8 max-w-3xl border border-line bg-background p-6 sm:my-12 sm:p-12">
        <span className="terminal-corner -top-1.5 -left-1.5 bg-hot" />
        <span className="terminal-corner -right-1.5 -bottom-1.5 bg-hot" />
        <span className="terminal-corner -top-1.5 -right-1.5 border border-hot" />
        <span className="terminal-corner -bottom-1.5 -left-1.5 border border-hot" />

        <header className="mb-9 border-b border-dashed border-line pb-4">
          <p className="mb-3 text-label uppercase tracking-label text-dim">
            ~/recurden/support.md
          </p>
          <h1 className="mb-2 text-who font-medium tracking-tightish">
            Recurden Support<span className="text-hot">.</span>
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

          <section>
            <h2 className="mb-3.5 text-label uppercase tracking-label text-dim">
              // Before emailing
            </h2>
            <p className="border-l border-line pl-4 text-dim">
              Include the Recurden version, iOS version, device model, what you expected, and what
              happened. Do not send screenshots or backups containing private financial details
              unless requested and you have removed anything sensitive.
            </p>
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
              The Recurden app collects no data. Read the{" "}
              <Link href="/recurden/privacy">Recurden privacy policy</Link>.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
