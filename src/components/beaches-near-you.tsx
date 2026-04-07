import Image from "next/image";
import Link from "next/link";
import { beachImages } from "@/lib/beach-images";
import { HorizontalCarouselRow } from "@/components/horizontal-carousel-row";
import { IconHeart } from "@/components/icons";

const filters: {
  emoji: string;
  label: string;
  active?: boolean;
}[] = [
  { emoji: "🔍", label: "Surfing", active: true },
  { emoji: "🎉", label: "Party" },
  { emoji: "🏰", label: "Hidden" },
  { emoji: "👨‍👩‍👧", label: "Family" },
  { emoji: "👙", label: "Bikini" },
];

const cards: {
  name: string;
  place: string;
  src: string;
  tags: { text: string; className: string }[];
}[] = [
  {
    name: "The Rockaway Peninsula",
    place: "New York, United States",
    src: beachImages.home.nyRockaway,
    tags: [
      { text: "☀️ 82°F", className: "bg-amber-50 text-amber-900" },
      { text: "Flat", className: "bg-sky-100 text-sky-800" },
      { text: "Excellent", className: "bg-emerald-50 text-emerald-800" },
    ],
  },
  {
    name: "Jacob Riis Park",
    place: "New York, United States",
    src: beachImages.home.nyJacob,
    tags: [
      { text: "☀️ 79°F", className: "bg-amber-50 text-amber-900" },
      { text: "Calm", className: "bg-sky-100 text-sky-800" },
      { text: "Optimal", className: "bg-emerald-50 text-emerald-800" },
    ],
  },
  {
    name: "South Beach",
    place: "New York, United States",
    src: beachImages.home.nySouth,
    tags: [
      { text: "☀️ 84°F", className: "bg-amber-50 text-amber-900" },
      { text: "Gentle", className: "bg-sky-100 text-sky-800" },
      { text: "Pristine", className: "bg-emerald-50 text-emerald-800" },
    ],
  },
  {
    name: "Fort Tilden",
    place: "New York, United States",
    src: beachImages.home.nyFort,
    tags: [
      { text: "☀️ 81°F", className: "bg-amber-50 text-amber-900" },
      { text: "Ethereal", className: "bg-sky-100 text-sky-800" },
      { text: "Pristine", className: "bg-emerald-50 text-emerald-800" },
    ],
  },
  {
    name: "Midland Beach",
    place: "New York, United States",
    src: beachImages.home.nyMidland,
    tags: [
      { text: "☀️ 83°F", className: "bg-amber-50 text-amber-900" },
      { text: "Breezy", className: "bg-sky-100 text-sky-800" },
      { text: "Ethereal", className: "bg-violet-50 text-violet-800" },
    ],
  },
];

export function BeachesNearYou() {
  return (
    <section className="relative overflow-hidden px-4 py-14 sm:px-6 lg:px-8 lg:py-16 section-5-background ">
      <div className="pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-3 flex items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-800">
            Personalized for you
          </span>
          <span className="h-px flex-1 max-w-14 bg-neutral-400/50" />
        </div>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h2 className="text-3xl font-bold uppercase tracking-tight text-neutral-900 sm:text-4xl">
              Beaches near you
            </h2>
            <p className="mt-3 flex flex-wrap items-center gap-1 text-sm text-neutral-600">
              <span className="text-red-500">📍</span>
              New York, United States · Curated based on your location, weather,
              and time
            </p>
          </div>
          <Link
            href="/beaches/near-you"
            className="shrink-0 text-sm font-semibold text-neutral-800 underline decoration-brand-blue/50 decoration-2 underline-offset-4 hover:text-brand-blue"
          >
            View all nearby beaches →
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.label}
              type="button"
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition ${
                f.active
                  ? "border-orange-400 bg-orange-100 text-neutral-900"
                  : "border-neutral-200 bg-white text-neutral-800 hover:border-brand-blue/40"
              }`}
            >
              <span>{f.emoji}</span>
              {f.label}
            </button>
          ))}
        </div>

        <HorizontalCarouselRow listClassName="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] lg:grid lg:grid-cols-5 lg:gap-4 lg:overflow-visible [&::-webkit-scrollbar]:hidden">
          {cards.map((c) => (
            <li key={c.name} className="w-[70vw] shrink-0 snap-start sm:w-52 lg:w-auto">
              <article className="group overflow-hidden rounded-lg border border-neutral-200/80 bg-white shadow-md">
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={c.src}
                    alt=""
                    fill
                    className="object-cover transition duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 1024px) 70vw, 20vw"
                  />
                  <button
                    type="button"
                    className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/50 bg-white/90 text-neutral-700 shadow backdrop-blur-sm"
                    aria-label="Save"
                  >
                    <IconHeart className="h-4 w-4" />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="text-xs font-bold uppercase text-neutral-900">
                    {c.name}
                  </h3>
                  <p className="mt-1 text-[11px] text-neutral-500">
                    {c.place}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {c.tags.map((t) => (
                      <span
                        key={t.text}
                        className={`rounded-md px-2 py-0.5 text-[10px] font-semibold ${t.className}`}
                      >
                        {t.text}
                      </span>
                    ))}
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
