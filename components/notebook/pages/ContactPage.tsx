import { PageChrome } from "../PageChrome";
import { profile } from "@/lib/profile";

const channels = [
  { label: "email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "github", value: profile.githubHandle, href: "https://github.com/KariraLakshya" },
  { label: "linkedin", value: profile.linkedinHandle, href: "https://www.linkedin.com/in/lakshya-karira/" },
  { label: "résumé", value: "PDF, one page", href: profile.resume },
];

export function ContactPage() {
  return (
    <PageChrome>
      {/*
        Top-anchored, matching every other section page — vertically
        centering a short list leaves a stretch of bare ruled paper above it
        on anything taller than a phone, which reads as unfinished rather
        than deliberate once you've seen it next to a page that starts near
        the top.
      */}
      <div className="py-14">
        <p className="eyebrow mb-2">Page 5 — Contact</p>
        <p className="mb-8 text-[14px] text-ink-soft">
          {profile.status} · {profile.location}
        </p>

        <ul className="space-y-5">
          {channels.map((channel) => (
            <li key={channel.label}>
              <a
                href={channel.href}
                target={channel.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={channel.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="group relative z-10 flex pointer-events-auto items-baseline gap-4"
              >
                <span className="w-20 shrink-0 text-[12px] uppercase tracking-wide text-ink-soft">
                  {channel.label}
                </span>
                <span className="border-b border-dotted border-ink/25 pb-1 text-[16px] text-ink transition-colors group-hover:text-margin">
                  {channel.value}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-12 font-hand text-xl text-ink-soft opacity-70">
          — that&apos;s the whole notebook.
        </p>
      </div>
    </PageChrome>
  );
}
