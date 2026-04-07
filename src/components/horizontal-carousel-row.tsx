"use client";

import type { ReactNode } from "react";
import { CarouselControls } from "@/components/carousel-controls";
import { useHorizontalCarousel } from "@/hooks/use-horizontal-carousel";

type HorizontalCarouselRowProps = {
  listClassName?: string;
  controlsClassName?: string;
  align?: "left" | "center";
  children: ReactNode;
};

export function HorizontalCarouselRow({
  listClassName = "",
  controlsClassName = "",
  align = "left",
  children,
}: HorizontalCarouselRowProps) {
  const { listRef, progress, scrollPrev, scrollNext } = useHorizontalCarousel();

  return (
    <>
      <ul ref={listRef} className={listClassName}>
        {children}
      </ul>
      <CarouselControls
        className={controlsClassName}
        align={align}
        progress={progress}
        onPrev={scrollPrev}
        onNext={scrollNext}
      />
    </>
  );
}
