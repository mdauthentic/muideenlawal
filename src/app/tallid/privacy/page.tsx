import type { Metadata } from "next";

const effectiveDate = "June 19, 2026";

const sections = [
  {
    title: "The short version",
    body: [
      "Tallid is a subscription and free-trial tracker that runs entirely on your device.",
      "Tallid does not collect your data, has no account system, and does not send your information anywhere.",
    ],
  },
  {
    title: "No data leaves your device",
    body: [
      "Everything you put into Tallid, including subscriptions, free trials, prices, income figures, reminders, and settings, is stored only on your iPhone in a local database.",
      "There is no Tallid account, no sign-in, no cloud sync, and no server to sync with. The app works fully offline.",
    ],
  },
  {
    title: "We do not collect anything",
    body: [
      "The developer of Tallid does not receive, see, or store your information.",
      "Because nothing is transmitted off the device, there is nothing for us to collect, sell, share, or lose.",
    ],
  },
  {
    title: "No tracking or analytics",
    body: [
      "Tallid contains no advertising, no tracking, and no third-party analytics SDKs.",
      "The app is built with standard Apple and open-source frameworks, including React Native and Expo, but these are not used to track you and no usage data is sent to us or anyone else.",
    ],
  },
  {
    title: "Face ID and biometric lock",
    body: [
      "If you enable the optional Face ID lock, authentication happens through Apple's local biometric system.",
      "Tallid never receives your biometric data. It only receives a yes or no result from iOS indicating whether unlocking succeeded.",
      "This lock is a convenience access gate, not a substitute for device encryption.",
    ],
  },
  {
    title: "Notifications",
    body: [
      "If you enable reminders, renewal and trial-expiry notifications are scheduled locally on your device by iOS.",
      "Reminder content is generated on-device and is not sent through any server.",
    ],
  },
  {
    title: "Backups and exports",
    body: [
      "Tallid lets you export a backup of your data. When you do, the file is handed to the iOS share sheet so you can save or send it wherever you choose.",
      "Tallid does not upload backups anywhere. Where an exported file goes afterward, and how it is protected, is under your control.",
      "Exported backups are not encrypted by Tallid, so store them somewhere you trust.",
    ],
  },
  {
    title: "Deleting your data",
    body: [
      "Because your data lives only on your device, you can remove it at any time by deleting items in the app, using the in-app erase all data option, or deleting the app from your iPhone.",
      "There is no copy held by us to request deletion of.",
    ],
  },
  {
    title: "Children",
    body: [
      "Tallid does not collect personal information from anyone, including children.",
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
  title: "Tallid Privacy Policy | Muideen Lawal",
  description:
    "Privacy policy for Tallid, a private on-device subscription and free-trial tracker.",
};

export default function TallidPrivacyPage() {
  return (
    <main className="grid-paper min-h-dvh bg-background p-4 font-mono text-foreground sm:p-6">
      <article className="relative mx-auto my-8 max-w-3xl border border-line bg-background p-6 sm:my-12 sm:p-12">
        <span className="terminal-corner -top-1.5 -left-1.5 bg-hot" />
        <span className="terminal-corner -right-1.5 -bottom-1.5 bg-hot" />
        <span className="terminal-corner -top-1.5 -right-1.5 border border-hot" />
        <span className="terminal-corner -bottom-1.5 -left-1.5 border border-hot" />

        <header className="mb-9 border-b border-dashed border-line pb-4">
          <p className="mb-3 text-label uppercase tracking-label text-dim">
            ~/tallid/privacy.md
          </p>
          <h1 className="mb-2 text-who font-medium tracking-tightish">
            Tallid Privacy Policy<span className="text-hot">.</span>
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
                Questions about this policy? Contact{" "}
                <a href="mailto:hello@muideenlawal.com">hello@muideenlawal.com</a>.
              </p>
              <p>Developer: Muideen Lawal.</p>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
