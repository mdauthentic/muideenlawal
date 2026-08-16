import type { Metadata } from "next";
import Link from "next/link";

const effectiveDate = "August 16, 2026";
const supportEmail = "muideen.lawal320@gmail.com";

type Section = {
  title: string;
  body: readonly string[];
  items?: readonly string[];
};

const sections: readonly Section[] = [
  {
    title: "The short version",
    body: [
      "Duewise is a subscription renewal tracker that runs entirely on your iPhone.",
      "Duewise does not collect your data. It has no user accounts, no servers, and makes no network requests. The developer receives no information about you or your use of the app.",
    ],
  },
  {
    title: "What the app stores on your device",
    body: [
      "All of the following is stored locally on your iPhone. It is never transmitted anywhere.",
    ],
    items: [
      "The subscriptions you enter, including prices, renewal dates, notes, and their change history.",
      "Your reminder preferences.",
      "Optionally, monthly take-home pay and paid hours per week, held in the iOS Keychain.",
      "App preferences such as whether the privacy lock is enabled and which appearance you have chosen.",
    ],
  },
  {
    title: "Screenshot and shared content",
    body: [
      "When you share a receipt screenshot or selected text to Duewise, the text is recognised on your device using Apple's on-device Vision framework.",
      "The content is held only until it has been processed into a suggestion for you to review, then deleted. It is never uploaded.",
    ],
  },
  {
    title: "Notifications",
    body: [
      "Renewal reminders are local notifications scheduled by the app on your device.",
      "No push service is involved and no notification content leaves your iPhone.",
    ],
  },
  {
    title: "Face ID",
    body: [
      "If you enable the privacy lock, authentication is performed by iOS.",
      "Duewise never receives or stores biometric data. It only receives a result from iOS indicating whether unlocking succeeded.",
    ],
  },
  {
    title: "Backups",
    body: [
      "Backups you export yourself are plain JSON files saved wherever you choose through the Files app.",
      "Anything you do with that file afterwards is under your control. Take-home pay is excluded from Duewise backups.",
    ],
  },
  {
    title: "Links you save",
    body: [
      "You can save a cancellation link on a subscription. Duewise never opens it on its own.",
      "Tapping “Open Cancellation Page” hands the address to your browser, and the visit is an ordinary one made by your browser, subject to that site's own privacy practices. Duewise itself contains no networking code of any kind.",
    ],
  },
  {
    title: "Third parties",
    body: [
      "None. Duewise contains no analytics, advertising, crash reporting, or third-party SDKs.",
    ],
  },
  {
    title: "Children",
    body: ["Duewise collects no data from anyone, including children."],
  },
  {
    title: "Changes",
    body: [
      "Any change to this policy will be published at this address with an updated date.",
    ],
  },
];

export const metadata: Metadata = {
  title: "Duewise Privacy Policy | Muideen Lawal",
  description:
    "Privacy policy for Duewise, a private on-device subscription renewal tracker.",
};

export default function DuewisePrivacyPage() {
  return (
    <main className="grid-paper min-h-dvh bg-background p-4 font-mono text-foreground sm:p-6">
      <article className="relative mx-auto my-8 max-w-3xl border border-line bg-background p-6 sm:my-12 sm:p-12">
        <span className="terminal-corner -top-1.5 -left-1.5 bg-hot" />
        <span className="terminal-corner -right-1.5 -bottom-1.5 bg-hot" />
        <span className="terminal-corner -top-1.5 -right-1.5 border border-hot" />
        <span className="terminal-corner -bottom-1.5 -left-1.5 border border-hot" />

        <header className="mb-9 border-b border-dashed border-line pb-4">
          <p className="mb-3 text-label uppercase tracking-label text-dim">
            ~/duewise/privacy.md
          </p>
          <h1 className="mb-2 text-who font-medium tracking-tightish">
            Duewise Privacy Policy<span className="text-hot">.</span>
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
                {section.items && (
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item} className="flex gap-2.5">
                        <span aria-hidden="true" className="text-hot">
                          -
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}

          <section>
            <h2 className="mb-3.5 text-label uppercase tracking-label text-dim">
              // Contact
            </h2>
            <div className="space-y-4 border-l border-line pl-4 text-dim">
              <p>
                Questions about this policy? Email{" "}
                <a href={`mailto:${supportEmail}`}>{supportEmail}</a>.
              </p>
              <p>
                For help using the app, see the{" "}
                <Link href="/duewise/support">Duewise support page</Link>.
              </p>
              <p>Developer: Muideen Lawal.</p>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
