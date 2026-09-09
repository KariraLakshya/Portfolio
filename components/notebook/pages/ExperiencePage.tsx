import { PageChrome } from "../PageChrome";
import { experience } from "@/lib/profile";

export function ExperiencePage() {
  return (
    <PageChrome>
      <div className="py-14">
        <p className="eyebrow mb-8">Page 2 — Experience</p>

        <div className="space-y-10">
          {experience.map((role) => (
            <div key={role.company} className="notebook-entry">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h2 className="font-hand text-3xl text-ink">{role.company}</h2>
                <span className="text-[12px] text-ink-soft">{role.period}</span>
              </div>
              <p className="mt-0.5 text-[13px] text-ink-soft">
                {role.role} · {role.location}
              </p>

              <p className="mt-3 text-[14.5px] italic leading-relaxed text-ink/85">
                {role.summary}
              </p>

              <ul className="mt-4 space-y-2.5">
                {role.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-3 text-[14px] leading-relaxed text-ink/85">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-soft" />
                    {bullet}
                  </li>
                ))}
              </ul>

              <p className="mt-3 text-[12px] text-ink-soft">{role.tags.join(" · ")}</p>
            </div>
          ))}
        </div>
      </div>
    </PageChrome>
  );
}
