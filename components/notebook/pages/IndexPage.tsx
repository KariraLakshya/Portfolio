"use client";

import { PageChrome } from "../PageChrome";
import { useNotebookNavigation } from "../Book";
import { getPageNumber, indexEntries, pages } from "@/lib/notebook";

/**
 * A literal table of contents. Clicking a line jumps straight there — the
 * direct navigation mode the README asks for, alongside scrolling linearly.
 */
export function IndexPage() {
  const { goToPage } = useNotebookNavigation();

  const jump = (id: string) => {
    goToPage(pages.findIndex((p) => p.id === id));
  };

  return (
    <PageChrome>
      {/* Top-anchored to match every other page — see ContactPage for why. */}
      <div className="py-14">
        <p className="eyebrow mb-8">Index</p>
        <ul className="space-y-5">
          {indexEntries.map((entry) => (
            <li key={entry.id} className="notebook-index-line">
              <button
                type="button"
                onClick={() => jump(entry.id)}
                className="group flex w-full items-baseline gap-4 text-left"
              >
                <span className="font-hand text-2xl text-ink-soft">
                  {String(getPageNumber(entry.id)).padStart(2, "0")}
                </span>
                <span className="flex-1 border-b border-dotted border-ink/25 pb-1 text-[17px] text-ink transition-colors group-hover:text-margin">
                  {entry.title}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </PageChrome>
  );
}
