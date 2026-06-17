"use client";

import {
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

export type HorizontalPage = {
  id: string;
  label: string;
  content: ReactNode;
};

type HorizontalScrollControllerProps = {
  pages: HorizontalPage[];
};

const WHEEL_PAGE_THRESHOLD = 90;
const SCROLL_END_DEBOUNCE_MS = 120;

function clampPage(index: number, total: number) {
  return Math.min(Math.max(index, 0), Math.max(total - 1, 0));
}

export default function HorizontalScrollController({
  pages,
}: HorizontalScrollControllerProps) {
  const [activePage, setActivePage] = useState(0);
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const wheelDelta = useRef(0);
  const wheelTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scrollEndTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const pageIds = useMemo(() => pages.map((page) => page.id), [pages]);

  const scrollToPage = useCallback(
    (pageIndex: number, behavior: ScrollBehavior = "smooth") => {
      const scroller = scrollerRef.current;
      if (!scroller) return;

      const nextPage = clampPage(pageIndex, pages.length);
      scroller.scrollTo({
        left: nextPage * scroller.clientWidth,
        behavior,
      });
      setActivePage(nextPage);
    },
    [pages.length],
  );

  const getCurrentPage = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return activePage;

    return clampPage(
      Math.round(scroller.scrollLeft / scroller.clientWidth),
      pages.length,
    );
  }, [activePage, pages.length]);

  const stepPage = useCallback(
    (direction: 1 | -1) => {
      scrollToPage(getCurrentPage() + direction);
    },
    [getCurrentPage, scrollToPage],
  );

  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      const hashIndex = pageIds.indexOf(hash);

      if (hashIndex >= 0) {
        scrollToPage(hashIndex);
      }
    };

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);

    return () => window.removeEventListener("hashchange", syncFromHash);
  }, [pageIds, scrollToPage]);

  useEffect(() => {
    if (!pages[activePage]) return;

    const nextHash = `#${pages[activePage].id}`;
    if (window.location.hash !== nextHash) {
      window.history.replaceState(null, "", nextHash);
    }
  }, [activePage, pages]);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const updateActivePage = () => {
      const nextPage = getCurrentPage();
      setActivePage(nextPage);

      if (scrollEndTimeout.current) clearTimeout(scrollEndTimeout.current);
      scrollEndTimeout.current = setTimeout(() => {
        scrollToPage(getCurrentPage());
      }, SCROLL_END_DEBOUNCE_MS);
    };

    scroller.addEventListener("scroll", updateActivePage, { passive: true });

    return () => {
      scroller.removeEventListener("scroll", updateActivePage);
    };
  }, [getCurrentPage, scrollToPage]);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const onWheel = (event: WheelEvent) => {
      event.preventDefault();

      const dominantDelta =
        Math.abs(event.deltaX) > Math.abs(event.deltaY)
          ? event.deltaX
          : event.deltaY;

      wheelDelta.current += dominantDelta;

      if (wheelTimeout.current) clearTimeout(wheelTimeout.current);
      wheelTimeout.current = setTimeout(() => {
        wheelDelta.current = 0;
      }, 180);

      if (Math.abs(wheelDelta.current) < WHEEL_PAGE_THRESHOLD) return;

      stepPage(wheelDelta.current > 0 ? 1 : -1);
      wheelDelta.current = 0;
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (
        ["ArrowRight", "ArrowDown", "PageDown", " ", "Spacebar"].includes(
          event.key,
        )
      ) {
        event.preventDefault();
        stepPage(1);
      }

      if (["ArrowLeft", "ArrowUp", "PageUp"].includes(event.key)) {
        event.preventDefault();
        stepPage(-1);
      }

      if (event.key === "Home") {
        event.preventDefault();
        scrollToPage(0);
      }

      if (event.key === "End") {
        event.preventDefault();
        scrollToPage(pages.length - 1);
      }
    };

    scroller.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKeyDown);

    return () => {
      scroller.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [pages.length, scrollToPage, stepPage]);

  useEffect(() => {
    const onResize = () => {
      scrollToPage(getCurrentPage(), "auto");
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      if (wheelTimeout.current) clearTimeout(wheelTimeout.current);
      if (scrollEndTimeout.current) clearTimeout(scrollEndTimeout.current);
    };
  }, [getCurrentPage, scrollToPage]);

  return (
    <div
      ref={scrollerRef}
      className="fixed inset-0 flex h-screen w-screen snap-x snap-mandatory overflow-x-auto overflow-y-hidden scroll-smooth overscroll-none bg-black text-white no-scrollbar [scrollbar-width:none] [touch-action:pan-x]"
    >
      {pages.map((page, index) => (
        <section
          id={page.id}
          aria-label={page.label}
          aria-hidden={activePage !== index}
          className="h-screen w-screen flex-none snap-start snap-always overflow-hidden"
          key={page.id}
        >
          {page.content}
        </section>
      ))}
    </div>
  );
}
