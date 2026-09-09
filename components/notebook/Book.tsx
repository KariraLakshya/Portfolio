"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useReducedMotion } from "framer-motion";
import { PageSheet } from "./PageSheet";
import { playPageFlipSound } from "@/lib/pageFlipSound";

type NavigationContextValue = {
  currentPage: number;
  totalPages: number;
  goToPage: (index: number) => void;
  nextPage: () => void;
  previousPage: () => void;
};

const NavigationContext = createContext<NavigationContextValue | null>(null);

export function useNotebookNavigation() {
  const value = useContext(NavigationContext);
  if (!value) throw new Error("useNotebookNavigation must be used inside Book");
  return value;
}

export function Book({ pages }: { pages: ReactNode[] }) {
  const reduceMotion = useReducedMotion();
  const [currentPage, setCurrentPage] = useState(0);
  const [turn, setTurn] = useState<{ from: number; to: number } | null>(null);

  const goToPage = useCallback(
    (requestedPage: number) => {
      const nextPage = Math.min(pages.length - 1, Math.max(0, requestedPage));
      if (nextPage === currentPage) return;
      setTurn({ from: currentPage, to: nextPage });
      playPageFlipSound();
      setCurrentPage(nextPage);
    },
    [currentPage, pages.length],
  );

  const nextPage = useCallback(() => goToPage(currentPage + 1), [currentPage, goToPage]);
  const previousPage = useCallback(() => goToPage(currentPage - 1), [currentPage, goToPage]);

  /**
   * `turn` is what raises the actively-flipping sheet above the rest of the
   * stack for the duration of the animation — without this it never goes
   * back to null, so the *previous* turn's `from` page stays permanently
   * elevated. That page still renders (nearly) flat once its own turn
   * finishes, so a stale elevated page ends up sitting, opaque and
   * full-size, on top of whatever the visitor navigates to next — silently
   * swallowing every click and scroll on the real current page underneath
   * it. Clearing it once the 820ms turn transition has actually finished is
   * what keeps the current page on top at rest.
   */
  useEffect(() => {
    if (!turn) return;
    const clear = window.setTimeout(() => setTurn(null), 860);
    return () => window.clearTimeout(clear);
  }, [turn]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || event.key === "PageDown") {
        event.preventDefault();
        nextPage();
      }
      if (event.key === "ArrowLeft" || event.key === "PageUp") {
        event.preventDefault();
        previousPage();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextPage, previousPage]);

  const navigation = useMemo(
    () => ({ currentPage, totalPages: pages.length, goToPage, nextPage, previousPage }),
    [currentPage, goToPage, nextPage, pages.length, previousPage],
  );
  const isTurningBack = turn ? turn.to < turn.from : false;

  return (
    <NavigationContext.Provider value={navigation}>
      <main className="notebook-stage" aria-label="Portfolio notebook">
        <div className="notebook-book">
          <div className="spiral-binding" aria-hidden="true">
            {Array.from({ length: 11 }, (_, index) => (
              <span key={index} className="spiral-ring" />
            ))}
          </div>

          <div className="notebook-pages" style={{ perspective: "2600px" }}>
            {pages.map((page, index) => (
              <PageSheet
                key={index}
                index={index}
                total={pages.length}
                currentPage={currentPage}
                transition={turn}
                isTurningBack={isTurningBack}
                reduceMotion={Boolean(reduceMotion)}
              >
                {page}
              </PageSheet>
            ))}
          </div>

          <div className="notebook-controls" aria-label="Notebook controls">
            <button
              type="button"
              onClick={previousPage}
              disabled={currentPage === 0}
              className="page-turn-button page-turn-button--previous"
              aria-label="Open previous page"
            >
              <span aria-hidden="true">←</span>
              <span>previous</span>
            </button>
            <span className="page-counter" aria-live="polite">
              {String(currentPage).padStart(2, "0")} / {String(pages.length - 1).padStart(2, "0")}
            </span>
            {currentPage > 0 && (
              <button
                type="button"
                onClick={nextPage}
                disabled={currentPage === pages.length - 1}
                className="page-turn-button page-turn-button--next"
                aria-label="Turn to next page"
              >
                <span>turn page</span>
                <span aria-hidden="true">→</span>
              </button>
            )}
          </div>
        </div>
      </main>
    </NavigationContext.Provider>
  );
}
