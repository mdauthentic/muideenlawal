import { profile } from "../profile";
import { Disclosure, Eyebrow } from "./ui";

export function PortfolioAbout() {
  return (
    <section
      aria-labelledby="about-title"
      className="mx-auto grid max-w-450 gap-8 px-6 py-14 sm:px-[4.7vw] md:grid-cols-2 md:gap-20 md:py-20"
    >
      <div>
        <Eyebrow>About me</Eyebrow>
        <h2
          id="about-title"
          className="mt-6 text-3xl leading-tight font-normal tracking-tight lg:text-[42px]"
        >
          From database research
          <br />
          to quantum computers.
        </h2>
      </div>
      <div className="max-w-xl space-y-4 text-[15px] leading-8">
        <p>{profile.biography}</p>
        <p>{profile.interests}</p>
        <Disclosure
          label="Experience, research & tools"
          className="border-t border-current/20"
        >
          <ol className="divide-y divide-current/15">
            {profile.experience.map((entry) => (
              <li key={entry.company} className="py-4 first:pt-0">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-sm font-medium">{entry.company}</h3>
                  <span className="text-[11px] opacity-75">{entry.dates}</span>
                </div>
                <p className="mt-1 text-xs opacity-80">{entry.role}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6">
            <cite>{profile.thesis}</cite>. PhD, {profile.university}, 2021.
            Supervised by {profile.supervisors}.
          </p>
          <div className="mt-6">
            <Eyebrow>Tools I work with</Eyebrow>
            <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs">
              {profile.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </Disclosure>
      </div>
    </section>
  );
}
