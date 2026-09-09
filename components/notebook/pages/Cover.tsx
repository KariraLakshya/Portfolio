"use client";

import { useNotebookNavigation } from "../Book";
import { profile } from "@/lib/profile";

/**
 * The cover — deliberately not run through PageChrome. No ruled lines, no
 * margin rule: a cover is thicker stock than the pages inside it, and a
 * slightly deeper paper tone plus its own grain is what says so without
 * needing a label.
 */
export function Cover() {
  const { nextPage } = useNotebookNavigation();

  return (
    <div
      className="relative flex h-full flex-col items-center justify-center px-10 text-center"
      style={{ background: "var(--paper-back)" }}
    >
      <div className="grain pointer-events-none absolute inset-0" />
      <div className="cover-corner-note absolute left-8 top-8 text-left md:left-12 md:top-10">
        <span className="block">field notes</span>
        <span className="mt-1 block opacity-60">vol. 01 · 2026</span>
      </div>
      <p className="eyebrow relative z-10 mb-3 opacity-70">{profile.status}</p>
      <h1 className="cover-name relative z-10 font-hand text-6xl leading-none text-ink md:text-7xl">
        {profile.name}
      </h1>
      <p className="relative z-10 mt-5 max-w-sm text-[15px] leading-relaxed text-ink-soft">
        {profile.tagline}
      </p>
      <button
        type="button"
        onClick={nextPage}
        className="cover-turn-prompt relative z-10 mt-10 font-hand text-2xl text-ink-soft opacity-70"
        aria-label="Turn to the next page"
      >
        turn the page →
      </button>
      <span className="cover-pencil-mark absolute bottom-24 right-10 h-px w-14 md:right-16" aria-hidden="true" />
    </div>
  );
}
