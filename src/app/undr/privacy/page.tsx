import { DocumentPage, DocumentSection, PolicySections } from "@/components/portfolio/document-page";
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

export default function PrivacyPage() {
  return <DocumentPage app="undr" title="Privacy policy" intro={<>Effective {effectiveDate}</>} contents={[...sections.map(section => section.title), "Contact"]} related={{ href: "/undr/support", label: "App support" }}>
    <PolicySections sections={sections} />
    <DocumentSection title="Contact"><p>Questions about privacy? Use the <Link href="/undr/support">undr support page</Link>.</p></DocumentSection>
  </DocumentPage>;
}
