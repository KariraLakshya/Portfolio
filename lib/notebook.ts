/**
 * The notebook's page order.
 *
 * The cover is page 0 and unnumbered, the way a real notebook's cover isn't
 * "page 1." Numbering starts at Index. This list is the single source of
 * truth for the page order and direct index navigation.
 */

export type NotebookPage = {
  id: string;
  title: string;
  kind: "cover" | "index" | "section";
};

export const pages: NotebookPage[] = [
  { id: "cover", title: "Cover", kind: "cover" },
  { id: "index", title: "Index", kind: "index" },
  { id: "experience", title: "Experience", kind: "section" },
  { id: "projects", title: "Projects", kind: "section" },
  { id: "skills", title: "Skills & Education", kind: "section" },
  { id: "contact", title: "Contact", kind: "section" },
];

export const pageIndex = new Map(pages.map((p, i) => [p.id, i]));

export function getPageNumber(id: string): number {
  return pageIndex.get(id) ?? 0;
}

/** Entries a reader can jump straight to from the Index page. */
export const indexEntries = pages.filter((p) => p.kind !== "cover");
