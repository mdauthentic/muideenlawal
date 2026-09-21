import { DocumentPage, DocumentSection, PolicySections } from "@/components/portfolio/document-page";
import type { Metadata } from "next";
import Link from "next/link";

const effectiveDate = "September 9, 2026";
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
      "Recurden is a private renewal planner that runs entirely on your iPhone.",
      "The app does not collect your data. It has no user accounts, no developer-operated server, and makes no network requests. Recurden does not transmit any information about you or your use of the app to the developer.",
    ],
  },
  {
    title: "What the app stores on your device",
    body: [
      "The following information is stored locally on your iPhone and is never transmitted to the developer.",
    ],
    items: [
      "Subscriptions you enter, including prices, currencies, renewal schedules, notes, cancellation links, and change history.",
      "Reminder rules and the decisions you record for upcoming renewals.",
      "Snoozed decision dates and the last successful export date, held locally in the iOS Keychain and excluded from device and portable backups.",
      "Optionally, monthly take-home pay and paid hours per week, held in the iOS Keychain.",
      "App preferences such as appearance and whether Recurden Lock is enabled.",
      "Shared text or images waiting for you to review in Recurden.",
    ],
  },
  {
    title: "Screenshots and shared content",
    body: [
      "When you choose a receipt screenshot, Apple Vision recognizes its text on your device. Recurden uses that text to propose editable subscription details and discards the selected image after processing.",
      "Text and images sent through the Recurden share extension remain on the device and are removed after processing. Nothing becomes a saved subscription until you review and confirm it.",
    ],
  },
  {
    title: "Notifications",
    body: [
      "Renewal reminders are local notifications scheduled by Recurden on your iPhone.",
      "No push-notification service is involved, and no notification content leaves your device.",
    ],
  },
  {
    title: "Face ID and passcode",
    body: [
      "If you enable Recurden Lock, authentication is performed by iOS using Face ID or your device passcode.",
      "Recurden never receives or stores biometric data. It receives only the result of the authentication attempt.",
    ],
  },
  {
    title: "Backups",
    body: [
      "Backups you export are readable JSON files saved wherever you choose through the Files app.",
      "You control what happens to an exported file. The optional financial profile, Recurden Lock preference, snoozes, and export history are excluded from portable backups.",
    ],
  },
  {
    title: "Links you open",
    body: [
      "You can save a provider's cancellation link on a subscription. Recurden never opens that link on its own.",
      "Tapping Open Cancellation Page, Privacy Policy, or Support hands the address to your browser. That visit is made by your browser and is subject to the destination website's privacy practices; the Recurden app itself contains no networking code.",
    ],
  },
  {
    title: "Third parties",
    body: [
      "Recurden contains no analytics, advertising, tracking, crash-reporting, or third-party data-collection SDKs.",
    ],
  },
  {
    title: "Your choices",
    body: [
      "You can edit or delete individual subscriptions, remove the optional financial profile, disable reminders, or use Erase All Recurden Data in Settings.",
    ],
  },
  {
    title: "Children",
    body: ["Recurden collects no data from anyone, including children."],
  },
  {
    title: "Changes",
    body: [
      "Any material change to this policy will be published at this address with an updated effective date.",
    ],
  },
];

export const metadata: Metadata = {
  alternates: { canonical: "https://muideenlawal.com/recurden/privacy" },
  title: "Recurden Privacy Policy | Muideen Lawal",
  description:
    "Privacy policy for Recurden, a private on-device subscription renewal planner.",
};

export default function PrivacyPage() {
  return <DocumentPage app="Recurden" title="Privacy policy" intro={<>Effective {effectiveDate}</>} contents={[...sections.map(section => section.title), "Contact"]} related={{ href: "/recurden/support", label: "App support" }}>
    <PolicySections sections={sections} />
    <DocumentSection title="Contact"><p>Questions about this policy? Email <a href={`mailto:${supportEmail}`}>{supportEmail}</a>.</p><p>For help using the app, see the <Link href="/recurden/support">Recurden support page</Link>.</p><p>Developer: Muideen Lawal.</p></DocumentSection>
  </DocumentPage>;
}
