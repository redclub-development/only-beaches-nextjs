import Image from "next/image";
import { beachImages } from "@/lib/beach-images";
import { HorizontalCarouselRow } from "@/components/horizontal-carousel-row";
import { IconHeart } from "@/components/icons";

const filters = [
  { emoji: "🏄", label: "Surfing" },
  { emoji: "🎉", label: "Party" },
  { emoji: "🗺️", label: "Hidden" },
  { emoji: "👨‍👩‍👧‍👦", label: "Family" },
  { emoji: "👙", label: "Bikini" },
] as const;

const beaches = [
  {
    name: "The Rockaway Peninsula",
    place: "New York, United States",
    src: beachImages.home.nyRockaway,
    temp: "82°F",
    wave: "Flat",
    water: "Excellent",
  },
  {
    name: "Jacob Riis Park",
    place: "New York, United States",
    src: beachImages.home.nyJacob,
    temp: "79°F",
    wave: "Calm",
    water: "Optimal",
  },
  {
    name: "Fort Tilden",
    place: "New York, United States",
    src: beachImages.home.nyFort,
    temp: "81°F",
    wave: "Ethereal",
    water: "Pristine",
  },
  {
    name: "South Beach",
    place: "New York, United States",
    src: beachImages.home.nySouth,
    temp: "84°F",
    wave: "Gentle",
    water: "Pristine",
  },
  {
    name: "Midland Beach",
    place: "New York, United States",
    src: beachImages.home.nyMidland,
    temp: "85°F",
    wave: "Breezy",
    water: "Ethereal",
  },
] as const;

export function NyBeachesExplore() {
  return (
    <section className="relative overflow-hidden border-t border-neutral-200/80 px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
      <div className="grain-bg pointer-events-none absolute inset-0 opacity-90" aria-hidden />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
          {filters.map((f) => (
            <button
              key={f.label}
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-800 shadow-sm transition hover:border-brand-blue/40"
            >
              <span>{f.emoji}</span>
              {f.label}
            </button>
          ))}
        </div>

        <HorizontalCarouselRow listClassName="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] lg:grid lg:grid-cols-5 lg:gap-4 lg:overflow-visible [&::-webkit-scrollbar]:hidden">
          {beaches.map((b) => (
            <li key={b.name} className="w-[72vw] shrink-0 snap-start sm:w-56 lg:w-auto">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200/80 bg-white shadow-md">
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={b.src}
                    alt=""
                    fill
                    className="object-cover transition duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 1024px) 72vw, 20vw"
                  />
                  <button
                    type="button"
                    className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/50 bg-white/90 text-neutral-700 shadow backdrop-blur-sm"
                    aria-label="Save"
                  >
                    <IconHeart className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="text-xs font-bold uppercase tracking-wide text-neutral-900 sm:text-sm">
                    {b.name}
                  </h3>
                  <p className="mt-1 text-xs text-neutral-500">{b.place}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    <span className="rounded-md bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-800">
                      ☀️ {b.temp}
                    </span>
                    <span className="rounded-md bg-sky-50 px-2 py-0.5 text-[10px] font-semibold text-brand-blue">
                      ≋ {b.wave}
                    </span>
                    <span className="rounded-md bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-800">
                      ♻️ {b.water}
                    </span>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </HorizontalCarouselRow>
      </div>
    </section>
  );
}
