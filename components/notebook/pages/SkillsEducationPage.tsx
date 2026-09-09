import { PageChrome } from "../PageChrome";
import { achievement, education, stack } from "@/lib/profile";

export function SkillsEducationPage() {
  return (
    <PageChrome>
      <div className="py-14">
        <p className="eyebrow mb-8">Page 4 — Skills & Education</p>

        <div className="space-y-5">
          {stack.map((group) => (
            <div key={group.label} className="notebook-entry">
              <h3 className="text-[13px] font-bold uppercase tracking-wide text-ink-soft">
                {group.label}
              </h3>
              <p className="mt-1.5 text-[14px] leading-relaxed text-ink/85">
                {group.items.join(" · ")}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-dotted border-ink/25 pt-6">
          <h3 className="font-hand text-2xl text-ink">{education.institution}</h3>
          <p className="mt-1 text-[13px] text-ink-soft">
            {education.degree} · {education.location} · {education.period}
          </p>
        </div>

        <div className="mt-6">
          <h3 className="text-[13px] font-bold uppercase tracking-wide text-ink-soft">
            {achievement.title} — {achievement.date}
          </h3>
          <p className="mt-1.5 text-[14px] leading-relaxed text-ink/85">
            {achievement.description}
          </p>
        </div>
      </div>
    </PageChrome>
  );
}
