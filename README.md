# The Notebook — Portfolio Concept

A beige, paper-textured portfolio styled as a physical notebook. Buttons,
keyboard arrows, and the handwritten cover prompt turn each page horizontally;
content is set in handwritten and typewriter type rather than a modern layout
wearing a beige colour scheme.

---

## A scope note, stated up front

The page-turn mechanic was prototyped in isolation before the portfolio pages
were added. It uses a perspective-correct 3D rotation around the spine and
keeps the book fixed in the viewport so reading feels like opening a notebook.

**One deliberate substitution:** the mechanic is a real 3D `rotateY` turn
around the spine (perspective-correct, physically a proper book-page turn),
not a non-planar curl with a bending, lifting corner. A true curl needs a
deforming mesh — canvas or WebGL, per the README's own tech section — and a
mediocre one looks worse than no curl at all. A flat page turned convincingly
in true perspective was judged the better bet than a curl attempted and
undersold. If a bent-corner curl is wanted later, the rotation math here
(`components/notebook/PageSheet.tsx`) is the piece to replace; everything else
— fixed navigation, direct page jumps, page content — is unaffected by
that choice.

---

## What was actually prototyped, and what it caught

Built in isolation first, against dummy pages, verified with real screenshots
at real scroll positions before any content existed:

1. **The wrapper-height math was wrong.** `useScroll`'s `["start start", "end
   end"]` offset reaches progress 1 when the wrapper's *bottom* meets the
   viewport's bottom, which happens after `wrapperHeight − viewportHeight` of
   scroll, not the full wrapper height. Sizing the wrapper at exactly
   `pages.length` viewport-heights silently compressed the usable scroll range
   by one full viewport-height, so every page's turn began earlier than the
   dwell fraction intended — confirmed by instrumenting the actual motion
   values against known scroll positions, not by eyeballing it. Fixed by
   sizing the wrapper one segment taller than the page count.
2. **The turned page bled outside the book.** Only the outer sticky wrapper
   had `overflow-hidden`; the inner perspective container didn't, so a page
   mid-turn swept past the book's own edge into the surrounding page margin
   instead of being clipped cleanly at the spine.
3. **The cast shadow never rendered.** A plain `box-shadow` paints *outside*
   an element's own box. The shadow div was sized identically to the page it
   was meant to darken, so the shadow rendered in a sliver of margin around a
   rectangle that was mostly clipped away — never across the face it was
   supposed to fall on. Replaced with a translucent overlay, which is what
   actually darkens the page underneath.
4. A related z-index conflict: the shadow needs to sit *above* the next page
   for the whole turn, while the turning page's own paper needs to swap
   *below* everything at the 90° midpoint. One z-index variable was doing
   both jobs and could not satisfy either correctly — split into two.

All four were invisible in the code and only surfaced by actually rendering
the mechanic and reading pixels, which is the reason the isolation-first
approach was worth the time it cost.

---

## Structure

### Page 0 — Cover
Name and tagline only, no ruled lines — a cover is thicker stock than the
pages inside it, so it gets its own paper tone and no interior chrome.

### Page 1 — Index
A literal table of contents. Clicking a line jumps straight to that page.

### Pages 2–5 — Resume sections
Experience, Projects, Skills & Education, Contact — one page each, in ruled
paper with a red margin rule. Content is condensed to journal-entry length,
not the full case-study depth from earlier concepts in this repo's history:
a notebook page is a page, not a scrollable article. Where more is worth
reading, the page links out to the real GitHub repository.

Education and the hackathon achievement are folded into the Skills page so
the notebook stays compact.

---

## Interaction

- **Direct:** clicking an Index entry opens that page directly.
- **Controls:** the cover's handwritten prompt, the page buttons, and the
  left/right arrow keys all turn one page at a time.
- **Reduced motion:** the content remains available without the 3D rotation.

---

## Design rules

- Beige paper (`#ece3cd`), a deeper aged tone for the cover and page backs,
  ink brown text, a muted red margin rule
- **Caveat** (handwritten) for names, page titles, index numbers — **Courier
  Prime** (genuine typewriter face) for everything actually read
- Ruled lines and a light SVG-turbulence grain on every interior page, both
  restrained enough to read as texture rather than clutter
- No canvas, no WebGL, no external page-flip library — the turn is CSS 3D
  transforms driven by Framer Motion state

---

## Structure

```
app/
  page.tsx                  assembles the Book from the six real pages
components/notebook/
  Book.tsx                  fixed notebook, page navigation, and controls
  PageSheet.tsx              the 3D turn: rotation, shadow, z-index handling
  PageChrome.tsx             shared background: grain, ruled lines, margin
  pages/                     the six pages' actual content
lib/
  notebook.ts                page order — the one source of truth both
                             navigation modes (linear, direct) read from
  profile.ts, projects.ts    bio, experience, education, project narrative
                             (carried over from earlier concepts in this
                             repo's history — the writing outlasted the UI)
```

---

## Running It

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

---

## Open Questions / Next Steps

- [ ] Consider a bent-corner curl (canvas/WebGL) as a later upgrade if the
      flat 3D turn undersells the "physical notebook" feeling in practice
- [ ] Set the repository descriptions on GitHub — still blank
