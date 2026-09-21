import type { ReactNode } from "react";
import { Disclosure, Eyebrow } from "./ui";

const tones = {
  work: "bg-room-work text-room-work-ink",
  research: "bg-room-research text-room-research-ink",
  apps: "bg-room-apps text-room-apps-ink",
};

export function RoomCard({
  tone,
  label,
  title,
  description,
  context,
  evidence,
  disclosure,
  children,
}: {
  tone: keyof typeof tones;
  label: string;
  title: string;
  description: ReactNode;
  context: string;
  evidence: ReactNode;
  disclosure: string;
  children: ReactNode;
}) {
  return (
    <article className={`min-w-0 px-7 pt-8 lg:px-[3.5vw] ${tones[tone]}`}>
      <Eyebrow>{label}</Eyebrow>
      <div className="flex h-56 flex-col justify-center gap-3 py-5">
        {evidence}
      </div>
      <h2 className="m-0 text-[54px] leading-[1.1] font-normal tracking-[-.055em] md:text-[clamp(40px,4.2vw,68px)]">
        {title}
      </h2>
      <p className="mt-4 mb-7 text-[15px] leading-7">{description}</p>
      <p className="mb-6 text-[11px] leading-relaxed">{context}</p>
      <Disclosure
        label={disclosure}
        className="border-t border-current/60"
        contentClassName="space-y-4"
      >
        {children}
      </Disclosure>
    </article>
  );
}
