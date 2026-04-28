"use client";

import Image from "next/image";
import { HorizontalCarouselRow } from "@/components/horizontal-carousel-row";
import { IconHeartNew } from "@/components/icons";

export type TrendingBeachCard = {
  n: string;
  name: string;
  place: string;
  tag: string;
  src: string;
  temp: string;
  vibe: string;
  quality: string;
};

type TrendingBeachesCarouselProps = {
  cards: readonly TrendingBeachCard[];
};

export function TrendingBeachesCarousel({ cards }: TrendingBeachesCarouselProps) {
  return (
    <div className="lg:col-span-8">
      <HorizontalCarouselRow listClassName="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {cards.map((c) => (
          <li
            key={c.n}
            className="w-[78vw] shrink-0 snap-start sm:w-64 lg:w-[280px]"
          >
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200/80 bg-white shadow-md transition hover:shadow-lg">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={c.src}
                  alt=""
                  fill
                  className="object-cover transition duration-500 ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 78vw, (max-width: 1024px) 256px, 280px"
                />
                <span className="absolute left-3 top-3 text-5xl font-bold text-white/40 drop-shadow-sm">
                  {c.n}
                </span>
                <button
                  type="button"
                  className="absolute bottom-14 right-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/90 text-neutral-700 shadow-md backdrop-blur-sm transition hover:bg-white"
                  aria-label="Save beach"
                >
                  <IconHeartNew className="h-5 w-5" />
                </button>
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="inline-block rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold text-neutral-800 backdrop-blur-sm sm:text-xs">
                    {c.tag}
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-4">
                <h3 className="text-sm font-bold uppercase tracking-wide text-neutral-900">
                  {c.name}
                </h3>
                <p className="mt-1 text-xs text-neutral-500">{c.place}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-[10px] font-medium text-neutral-600 sm:text-xs">
                  <span className="rounded-md bg-sky-50 px-2 py-1 text-brand-blue">
                    {c.temp}
                  </span>
                  <span className="rounded-md bg-neutral-100 px-2 py-1">
                    {c.vibe}
                  </span>
                  <span className="rounded-md bg-neutral-100 px-2 py-1">
                    {c.quality}
                  </span>
                </div>
              </div>
            </article>
          </li>
        ))}
      </HorizontalCarouselRow>
    </div>
  );
}
