import Image from "next/image";
import Link from "next/link";
import { beachImages } from "@/lib/beach-images";
import {
  IconCalendar,
  IconMapPin,
  IconSearch,
  IconWaves,
} from "@/components/icons";

const filterChips: { emoji: string; label: string }[] = [
  { emoji: "📍", label: "Near me" },
  { emoji: "🔥", label: "Trending" },
  { emoji: "🏄", label: "Surfing" },
  { emoji: "🎊", label: "Party" },
  { emoji: "🌴", label: "Hidden" },
  { emoji: "👨‍👩‍👧", label: "Family" },
  { emoji: "👙", label: "Bikini" },
];

export function HeroSearch() {
  return (
    <section className="relative min-h-screen overflow-hidden px-4 pb-20 pt-28 sm:px-6 sm:pb-28 sm:pt-32 lg:px-8 lg:pt-36">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src={beachImages.hero}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
          quality={90}
        />
        <div className="absolute inset-0 hero-gradient-overlay" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <div className="mx-auto inline-flex flex-wrap items-center justify-center gap-x-1 rounded-full border border-white/25 bg-sky-950/65 px-4 py-2 backdrop-blur-sm sm:px-5">
          <span
            className="h-2 w-2 shrink-0 rounded-full bg-brand-yellow"
            aria-hidden
          />
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white sm:text-xs">
            Discover the world&apos;s best{" "}
            <span className="text-brand-yellow">beaches</span>
          </span>
        </div>

        <h1 className="mt-8 text-balance font-bold uppercase leading-[1.05] tracking-tight text-white drop-shadow-lg sm:mt-10 sm:text-5xl md:text-6xl lg:text-7xl">
          Find your{" "}
          <span className="text-brand-yellow drop-shadow-md">perfect beach</span>
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-base text-white/95 sm:text-lg">
          Search by vibe, weather, and crowd — instantly
        </p>
        <p className="mt-4 text-sm font-bold uppercase tracking-[0.2em] text-white/50 sm:text-base sm:tracking-[0.28em]">
          SEA.SALT.SAND.YOU
        </p>
      </div>

      <div className="relative z-10 mx-auto mt-10 max-w-6xl rounded-3xl border border-white/25 bg-white/10 p-4 shadow-2xl shadow-sky-950/40 backdrop-blur-xl sm:p-6 lg:p-8">
        <div className="grid gap-6 lg:grid-cols-4 lg:gap-4">
          <div className="flex flex-col gap-2 border-white/15 lg:border-r lg:pr-4">
            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/80">
              <IconSearch className="text-brand-yellow" />
              Search
            </span>
            <input
              id="beach-search"
              type="search"
              placeholder="Beaches, Cities and countries"
              className="min-h-11 w-full rounded-xl border border-white/20 bg-white/15 px-3 text-sm text-white placeholder:text-white/50 focus:border-brand-cyan focus:outline-none focus:ring-2 focus:ring-brand-cyan/40"
            />
          </div>
          <div className="flex flex-col gap-2 border-white/15 lg:border-r lg:pr-4">
            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/80">
              <IconMapPin className="text-brand-yellow" />
              Region
            </span>
            <select
              aria-label="Region"
              className="min-h-11 w-full rounded-xl border border-white/20 bg-white/15 px-3 text-sm text-white focus:border-brand-cyan focus:outline-none focus:ring-2 focus:ring-brand-cyan/40 [&>option]:text-sky-950"
              defaultValue=""
            >
              <option value="">Any Region</option>
            </select>
          </div>
          <div className="flex flex-col gap-2 border-white/15 lg:border-r lg:pr-4">
            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/80">
              <IconWaves className="text-brand-yellow" />
              Beach type
            </span>
            <select
              aria-label="Beach Type"
              className="min-h-11 w-full rounded-xl border border-white/20 bg-white/15 px-3 text-sm text-white focus:border-brand-cyan focus:outline-none focus:ring-2 focus:ring-brand-cyan/40 [&>option]:text-sky-950"
              defaultValue=""
            >
              <option value="">Any Type</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/80">
              <IconCalendar className="text-brand-yellow" />
              Best time
            </span>
            <select
              aria-label="Best Time"
              className="min-h-11 w-full rounded-xl border border-white/20 bg-white/15 px-3 text-sm text-white focus:border-brand-cyan focus:outline-none focus:ring-2 focus:ring-brand-cyan/40 [&>option]:text-sky-950"
              defaultValue=""
            >
              <option value="">Any Season</option>
            </select>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-4 border-t border-white/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {filterChips.map(({ emoji, label }) => (
              <button
                key={label}
                type="button"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/15 px-3 py-2 text-xs font-semibold text-white backdrop-blur-sm transition hover:bg-white/25 sm:text-sm"
              >
                <span className="text-sm" aria-hidden>
                  {emoji}
                </span>
                {label}
              </button>
            ))}
          </div>
          <Link
            href="/explore"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#0095FF] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:brightness-110"
          >
            Explore Beaches →
          </Link>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-14 flex max-w-3xl flex-col items-center">
        <svg
          className="h-10 w-8 text-white/40"
          viewBox="0 0 24 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path
            d="M12 4v28M12 36l-4 4M12 36l4 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        <svg
          className="-mt-1 h-5 w-48 text-brand-blue"
          viewBox="0 0 200 16"
          fill="none"
          aria-hidden
        >
          <path
            d="M0 8 Q25 2 50 8 T100 8 T150 8 T200 8"
            stroke="currentColor"
            strokeWidth="1.2"
          />
        </svg>
        <p className="mt-2 text-center text-xs font-medium text-white/65">
          Scroll to explore
        </p>
      </div>
    </section>
  );
}
