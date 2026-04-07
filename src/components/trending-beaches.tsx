import Link from "next/link";
import { beachImages } from "@/lib/beach-images";
import {
  TrendingBeachesCarousel,
  type TrendingBeachCard,
} from "@/components/trending-beaches-carousel";

const cards: readonly TrendingBeachCard[] = [
  {
    n: "01",
    name: "Diamond Beach",
    place: "Nusa Penida, Indonesia",
    tag: "+120 people saved today",
    src: beachImages.trending.diamond,
    temp: "78°F",
    vibe: "Gentle",
    quality: "Pristine",
  },
  {
    n: "02",
    name: "Fulhadhoo Beach",
    place: "Maldives",
    tag: "Rising fast",
    src: beachImages.trending.fulhadhoo,
    temp: "82°F",
    vibe: "Calm",
    quality: "Pristine",
  },
  {
    n: "03",
    name: "Spiaggia dei Conigli",
    place: "Lampedusa, Sicily",
    tag: "+120 people saved today",
    src: beachImages.trending.conigli,
    temp: "76°F",
    vibe: "Gentle",
    quality: "Pristine",
  },
  {
    n: "04",
    name: "Whitehaven Beach",
    place: "Queensland, Australia",
    tag: "Rising fast",
    src: beachImages.trending.whitehaven,
    temp: "79°F",
    vibe: "Gentle",
    quality: "Pristine",
  },
];

export function TrendingBeaches() {
  return (
    <section className="relative overflow-hidden px-4 py-14 sm:px-6 lg:px-8 lg:py-20 section-3-background ">
      <div
        className="pointer-events-none absolute inset-0 bg-[#FFFFFF33]"
        aria-hidden
      />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-start lg:gap-10">
        <div className="lg:col-span-4">
          <div className="mb-3 flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-800">
              Trending now
            </span>
            <span className="h-px flex-1 max-w-12 bg-neutral-800/40" />
          </div>
          <h2 className="text-3xl font-bold uppercase leading-tight tracking-tight text-neutral-900 sm:text-4xl">
            Trending beaches
          </h2>
          <p className="mt-4 text-base text-neutral-600 sm:text-lg">
            Uncover this season&apos;s top destinations. Explore the beaches
            capturing hearts worldwide.
          </p>
          <Link
            href="/beaches/trending"
            className="mt-8 inline-flex rounded-full bg-brand-blue px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-blue/30 transition hover:bg-brand-cyan"
          >
            Explore Collection →
          </Link>
        </div>

        <TrendingBeachesCarousel cards={cards} />
      </div>
    </section>
  );
}
