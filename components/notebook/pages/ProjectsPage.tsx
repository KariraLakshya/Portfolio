import { PageChrome } from "../PageChrome";
import { projects } from "@/lib/projects";
import { GITHUB_USER } from "@/lib/profile";

/**
 * One notebook page holding all five — a journal entry per project, not the
 * full case study. Depth lives in the source repos, linked from here; a
 * page is a page.
 */
export function ProjectsPage() {
  return (
    <PageChrome>
      <div className="py-14">
        <p className="eyebrow mb-8">Page 3 — Projects</p>

        <div className="space-y-8">
          {projects.map((project) => (
            <div key={project.slug} className="notebook-entry">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h2 className="font-hand text-2xl text-ink">{project.title}</h2>
                <span className="text-[12px] text-ink-soft">{project.year}</span>
              </div>
              <p className="text-[12.5px] text-ink-soft">{project.subtitle}</p>
              <p className="mt-2 text-[14px] leading-relaxed text-ink/85">
                {project.summary}
              </p>
              <p className="mt-2 text-[12px] text-ink-soft">
                {project.stack.slice(0, 4).join(" · ")}
                {"  ·  "}
                <a
                  href={`https://github.com/${GITHUB_USER}/${project.repo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-dotted underline-offset-2 hover:text-margin"
                >
                  {project.repo} ↗
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </PageChrome>
  );
}
