import type { ReactNode } from "react";

/**
 * Every page's background: grain, ruled lines, the red margin rule. Written
 * once so the 7 real pages don't each reimplement it, and content sits above
 * it as ordinary flowing markup — padded to clear the margin rule and given
 * its own scroll for pages with more text than one sheet comfortably holds.
 */
export function PageChrome({
  children,
  ruled = true,
  margin = true,
}: {
  children: ReactNode;
  ruled?: boolean;
  margin?: boolean;
}) {
  return (
    <div className="relative h-full w-full">
      <div className="grain pointer-events-none absolute inset-0" />
      {ruled && <div className="ruled pointer-events-none absolute inset-0" />}
      {margin && <div className="margin-rule pointer-events-none" />}
      <div
        className={
          "notebook-page-scroll pointer-events-auto relative min-h-0 overflow-y-scroll pb-6 " +
          (margin ? "pl-24 pr-10 md:pr-16" : "px-10 md:px-16")
        }
      >
        {children}
      </div>
    </div>
  );
}
