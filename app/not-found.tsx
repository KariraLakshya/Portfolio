import Link from "next/link";

export default function NotFound() {
  return (
    <main
      className="relative flex min-h-[100svh] flex-col items-center justify-center px-6 text-center"
      style={{ background: "var(--paper)" }}
    >
      <div className="grain pointer-events-none absolute inset-0" />
      <div className="ruled pointer-events-none absolute inset-0" />

      <p className="eyebrow relative z-10">Torn out</p>
      <h1 className="relative z-10 mt-4 font-hand text-5xl text-ink md:text-6xl">
        No such page
      </h1>
      <p className="relative z-10 mt-4 max-w-sm text-[15px] leading-relaxed text-ink-soft">
        Whatever this page was, it isn&apos;t in the notebook. Head back to the
        cover.
      </p>
      <Link
        href="/"
        className="group relative z-10 mt-9 inline-flex items-center gap-2 text-[14px] text-ink-soft transition-colors hover:text-margin"
      >
        <span className="transition-transform duration-300 group-hover:-translate-x-0.5">←</span>
        back to the cover
      </Link>
    </main>
  );
}
