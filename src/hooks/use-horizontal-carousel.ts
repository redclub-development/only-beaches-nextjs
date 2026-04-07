"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export function useHorizontalCarousel() {
  const listRef = useRef<HTMLUListElement>(null);
  const [progress, setProgress] = useState(0);

  const syncProgress = useCallback(() => {
    const el = listRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max <= 0 ? 1 : el.scrollLeft / max);
  }, []);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    syncProgress();
    el.addEventListener("scroll", syncProgress, { passive: true });
    const ro = new ResizeObserver(syncProgress);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", syncProgress);
      ro.disconnect();
    };
  }, [syncProgress]);

  const scrollByPage = useCallback((dir: -1 | 1) => {
    const el = listRef.current;
    if (!el) return;
    const delta = Math.max(240, el.clientWidth * 0.75) * dir;
    el.scrollBy({ left: delta, behavior: "smooth" });
  }, []);

  return {
    listRef,
    progress,
    scrollPrev: () => scrollByPage(-1),
    scrollNext: () => scrollByPage(1),
  };
}
