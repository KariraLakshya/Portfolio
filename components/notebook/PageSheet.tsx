"use client";

import type { ReactNode } from "react";
import { motion, type MotionStyle } from "framer-motion";

export function PageSheet({
  index,
  total,
  currentPage,
  transition,
  isTurningBack,
  reduceMotion,
  children,
}: {
  index: number;
  total: number;
  currentPage: number;
  transition: { from: number; to: number } | null;
  isTurningBack: boolean;
  reduceMotion: boolean;
  children: ReactNode;
}) {
  const isTurned = index < currentPage;
  const isTransitionPage = transition?.from === index || transition?.to === index;
  const isRaisedDuringTurn =
    isTransitionPage && (isTurningBack ? index === transition?.to : index === transition?.from);

  let zIndex = isRaisedDuringTurn ? total + 10 : 0;
  if (!isRaisedDuringTurn) {
    if (index === currentPage) zIndex = total + 5;
    else if (index < currentPage) zIndex = index - total;
    else zIndex = -index;
  }

  /**
   * A page only needs a real 3D rendering context while it is turned away or
   * actively mid-turn; `rotateY(0)` is visually a no-op, so the resting
   * current page — the one a visitor might actually try to scroll — has no
   * reason to sit inside one.
   *
   * That matters beyond tidiness: a nested `overflow: scroll` element inside
   * a `transform-style: preserve-3d` ancestor does not receive mouse-wheel
   * input in Chromium, even though it stays fully clickable and
   * programmatically scrollable — confirmed by live-stripping the property
   * and watching wheel scroll start working on an otherwise-identical page.
   *
   * The toggle has to happen on the *same*, persistently-mounted element
   * Framer Motion is already animating `rotateY` on — an earlier version of
   * this fix conditionally mounted a whole separate (non-3D) tree instead,
   * which broke the turn animation itself: a freshly-mounted `motion.div`
   * with `initial={false}` has no prior frame to interpolate from, so it
   * just snaps straight to the target rotation instead of animating there.
   * `transformStyle` is a plain style value, not an animated one, so
   * flipping it on the same node has no such side effect.
   */
  const needs3D = !reduceMotion && (isTurned || isTransitionPage);

  const pageStyle: MotionStyle = {
    zIndex,
    transformStyle: needs3D ? "preserve-3d" : "flat",
    transformOrigin: "0% 50%",
  };

  return (
    <div className="absolute inset-0" style={{ zIndex }}>
      <motion.div
        className="absolute inset-0"
        initial={false}
        animate={{ rotateY: reduceMotion || !isTurned ? 0 : -178 }}
        transition={{ duration: reduceMotion ? 0 : 0.82, ease: [0.22, 0.75, 0.24, 1] }}
        style={pageStyle}
      >
        <div className="paper absolute inset-0 overflow-hidden rounded-[2px]" style={{ backfaceVisibility: "hidden" }}>
          {children}
          <div className="page-edge-shadow pointer-events-none absolute inset-0" aria-hidden="true" />
        </div>

        <div
          className="paper-back absolute inset-0 overflow-hidden rounded-[2px]"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="ruled absolute inset-0 opacity-60" />
        </div>
      </motion.div>
    </div>
  );
}
