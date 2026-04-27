"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { beachImages } from "@/lib/beach-images";
import {
  beachMoodsCatalog,
  exploreByRegionItems,
  getMoodFilterTabs,
  trendingMoodsPreview,
  type MoodCategory,
} from "@/data/beach-moods-catalog";

const categoryBadgeClass: Record<
  Exclude<MoodCategory, "All">,
  string
> = {
  Lifestyle: "bg-fuchsia-500/85",
  Relaxation: "bg-sky-400/90",
  Adventure: "bg-amber-500/90",
  Family: "bg-teal-600/90",
  Scenic: "bg-neutral-600/85",
  Nature: "bg-emerald-600/90",
  Luxury: "bg-amber-700/90",
};

function ArrowCircleIcon({
  variant = "cyan",
}: {
  variant?: "cyan" | "white";
}) {
  const ring =
    variant === "white"
      ? "border-2 border-white text-white"
      : "border-2 border-brand-cyan text-[#00CFC0]";
  return (
    <span
      className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${ring}`}
      aria-hidden
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </span>
  );
}

function statusPillClass(status: (typeof trendingMoodsPreview)[number]["status"]) {
  switch (status) {
    case "trending":
      return "bg-brand-yellow/95 text-neutral-900";
    case "hot":
      return "bg-orange-500/95 text-white";
    case "chill":
      return "bg-teal-500/95 text-white";
    default:
      return "bg-white/90 text-neutral-900";
  }
}

const heroChips: {
  label: string;
  emoji: string;
  category: MoodCategory | "trending";
}[] = [
  { label: "Trending", emoji: "🔥", category: "trending" },
  { label: "Hidden Gems", emoji: "🏝️", category: "Scenic" },
  { label: "Family", emoji: "🥳", category: "Family" },
  { label: "Adventure", emoji: "🧭", category: "Adventure" },
  { label: "Luxury", emoji: "💎", category: "Luxury" },
];

export function BrowseAllMoodsExperience() {
  const tabs = useMemo(() => getMoodFilterTabs(), []);
  const [activeCategory, setActiveCategory] = useState<MoodCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeHeroChip, setActiveHeroChip] = useState("Trending");

  useEffect(() => {
    const sync: Partial<Record<MoodCategory, string>> = {
      All: "Trending",
      Scenic: "Hidden Gems",
      Family: "Family",
      Adventure: "Adventure",
      Luxury: "Luxury",
    };
    const next = sync[activeCategory];
    if (next) setActiveHeroChip(next);
    else setActiveHeroChip("");
  }, [activeCategory]);

  const filteredCatalog = useMemo(() => {
    let list =
      activeCategory === "All"
        ? beachMoodsCatalog
        : beachMoodsCatalog.filter((m) => m.category === activeCategory);
    const q = searchQuery.trim().toLowerCase();
    if (q) {
      list = list.filter(
        (m) =>
          m.title.toLowerCase().includes(q) ||
          m.description.toLowerCase().includes(q) ||
          m.category.toLowerCase().includes(q),
      );
    }
    return list;
  }, [activeCategory, searchQuery]);

  const setCategoryFromHero = (
    chip: (typeof heroChips)[number],
  ) => {
    setActiveHeroChip(chip.label);
    const el = document.getElementById("all-moods");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
    if (chip.category === "trending") setActiveCategory("All");
    else setActiveCategory(chip.category);
  };

  return (
    <>
      <section className="relative flex min-h-[calc(100dvh-118px)] flex-col overflow-hidden bg-neutral-900 px-4 pb-8 pt-6 sm:px-6 md:min-h-[calc(100dvh-65px)] lg:px-8 lg:pb-12 lg:pt-8">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <Image
            src={beachImages.browseAllMoods}
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
            quality={90}
          />
          <div className="absolute inset-0 hero-gradient-overlay" />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col justify-end text-center">
          <div className="mx-auto inline-flex flex-wrap items-center justify-center gap-x-1.5 rounded-full border border-white/25 bg-sky-950/55 px-4 py-2 backdrop-blur-sm">
            <span
              className="h-2 w-2 shrink-0 rounded-full bg-brand-yellow"
              aria-hidden
            />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white sm:text-xs">
              Beach{" "}
              <span className="text-brand-yellow">discovery</span>
            </span>
          </div>

          <h1 className="mt-8 font-sans font-extrabold uppercase leading-[1.05] tracking-tight text-white drop-shadow-md">
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Browse beaches by
            </span>
            <span className="mt-1 block text-4xl text-brand-yellow sm:mt-2 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              mood
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base text-white/95 sm:text-lg">
            Whether you&apos;re chasing{" "}
            <strong className="font-semibold text-white">hidden coves</strong>,
            crystal-clear snorkeling spots, or lively beach clubs — discover
            beaches curated for{" "}
            <strong className="font-semibold text-white">every vibe.</strong>
          </p>
          <div className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/10 px-4 py-2.5 text-white backdrop-blur-md sm:px-5">
            <span className="text-lg font-bold tabular-nums text-brand-yellow sm:text-xl">
              30+
            </span>
            <span className="text-left text-[10px] font-semibold uppercase leading-snug tracking-wide sm:text-xs">
              Curated beach mood categories
            </span>
          </div>

          <div className="mx-auto mt-10 w-full max-w-3xl">
            <div className="flex flex-col overflow-hidden rounded-full border border-white/25 bg-white/95 p-1.5 shadow-xl sm:flex-row sm:items-center">
              <label className="sr-only" htmlFor="browse-mood-search">
                Search moods
              </label>
              <input
                id="browse-mood-search"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search moods, activities, or beach vibes..."
                className="min-h-12 w-full flex-1 bg-transparent px-5 text-sm text-neutral-900 placeholder:text-neutral-500 focus:outline-none sm:min-h-14 sm:text-base"
              />
              <Link
                href="#all-moods"
                className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-brand-blue px-6 text-sm font-semibold text-white shadow-lg shadow-brand-cyan/25 transition hover:brightness-110 sm:min-h-12"
              >
                Explore beaches
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>

          <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2 sm:gap-3">
            {heroChips.map((chip) => {
              const isTrending = chip.category === "trending";
              const isActive = activeHeroChip === chip.label;
              return (
                <button
                  key={chip.label}
                  type="button"
                  onClick={() => setCategoryFromHero(chip)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold text-white shadow-sm backdrop-blur-sm transition hover:brightness-110 sm:text-sm ${
                    isActive
                      ? "border-2 border-brand-cyan"
                      : "border border-white/25"
                  } ${
                    isTrending
                      ? "bg-teal-600/90"
                      : chip.label === "Hidden Gems"
                        ? "bg-emerald-900/75"
                        : chip.label === "Family"
                          ? "bg-violet-700/85"
                          : chip.label === "Adventure"
                            ? "bg-sky-700/85"
                            : chip.label === "Luxury"
                              ? "bg-slate-950/90"
                              : "bg-slate-900/80"
                  }`}
                >
                  <span aria-hidden>{chip.emoji}</span>
                  {chip.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative z-10 mt-10 flex flex-col items-center pb-2 text-[10px] font-bold uppercase tracking-[0.35em] text-white/80 sm:mt-14 sm:text-xs">
          <span>Scroll</span>
          <svg
            className="mt-2 h-8 w-5 text-white/70"
            viewBox="0 0 24 48"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden
          >
            <path d="M12 4v28M12 36l-4 4M12 36l4 4" strokeLinecap="round" />
          </svg>
        </div>
      </section>

      <main className="bg-neutral-50">
        <section
          className="relative overflow-hidden bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-20"
          aria-labelledby="trending-moods-heading"
        >
          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-800">
                    Featured this season
                  </span>
                  <span className="h-px flex-1 max-w-14 bg-neutral-800/35" />
                </div>
                <h2
                  id="trending-moods-heading"
                  className="font-sans text-3xl font-extrabold uppercase leading-tight tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl"
                >
                  Trending{" "}
                  <span className="text-[#00CFC0]">moods</span>
                </h2>
                <p className="mt-3 max-w-xl text-base text-neutral-600 sm:text-lg">
                  The most-explored beach categories right now.
                </p>
              </div>
              <Link
                href="#all-moods"
                className="shrink-0 text-sm font-semibold text-neutral-800 underline decoration-brand-cyan/60 decoration-2 underline-offset-4 transition hover:text-[#00CFC0]"
              >
                View all →
              </Link>
            </div>

            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {trendingMoodsPreview.map((m) => (
                <li key={m.slug}>
                  <Link
                    href={`/moods/${m.slug}`}
                    className="group relative flex aspect-[3/5] min-h-[280px] flex-col overflow-hidden rounded-2xl border border-neutral-200/80 bg-neutral-900 shadow-lg sm:min-h-[320px]"
                  >
                    <div className="absolute inset-0 overflow-hidden">
                      <Image
                        src={m.imageSrc}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-300 ease-in-out will-change-transform group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/40 to-transparent" />
                    <span
                      className={`absolute left-3 top-3 z-10 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide shadow-md ${statusPillClass(m.status)}`}
                    >
                      {m.statusLabel}
                    </span>
                    <div className="relative z-10 mt-auto px-4 pb-6">
                      <h3 className="font-sans text-lg font-bold uppercase leading-tight tracking-wide text-white sm:text-xl">
                        {m.title}
                      </h3>
                      <p
                        className={`mt-2 line-clamp-2 text-sm leading-snug text-white/85 ${
                          m.slug === "party-beaches" ? "uppercase" : ""
                        }`}
                      >
                        {m.description}
                      </p>
                      <div className="mt-4 flex items-center justify-between gap-2">
                        <span className="text-sm font-semibold text-[#00CFC0]">
                          {m.beachCount} beaches
                        </span>
                        <ArrowCircleIcon variant="white" />
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <div id="all-moods" className="scroll-mt-28 bg-white px-4 sm:px-6 lg:px-8 pb-16">
          <nav
            className="border-b border-neutral-200 mx-auto max-w-7xl "
            aria-label="Filter moods by category"
          >
            <div className="flex justify-start overflow-x-auto no-scrollbar">
              <ul className="flex min-w-min items-center gap-6 sm:gap-8 md:gap-10">
                {tabs.map(({ category, count }) => {
                  const isActive = activeCategory === category;
                  return (
                    <li key={category} className="shrink-0">
                      <button
                        type="button"
                        onClick={() => setActiveCategory(category)}
                        className={`relative pb-2 text-sm font-semibold transition ${
                          isActive
                            ? "text-[#00CFC0]"
                            : "text-neutral-600 hover:text-neutral-900"
                        }`}
                      >
                        <span>{category}</span>{" "}
                        <span
                          className={
                            isActive
                              ? "text-[#00CFC0]/90"
                              : "text-neutral-400"
                          }
                        >
                          {count}
                        </span>
                        {isActive ? (
                          <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-brand-cyan" />
                        ) : null}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>

          <div className="mx-auto max-w-7xl pt-4">
            <div className="mb-10 flex flex-col gap-4 sm:mb-12 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <span className="h-px w-10 bg-neutral-300 sm:w-12" />
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">
                    Explore every vibe
                  </span>
                </div>
                <h2 className="font-sans text-3xl font-extrabold uppercase leading-tight tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
                  All beach <span className="text-[#00CFC0]">moods</span>
                </h2>
              </div>
              <p className="text-sm font-medium text-neutral-600 lg:pb-1">
                {filteredCatalog.length}{" "}
                {filteredCatalog.length === 1 ? "mood" : "moods"} found
              </p>
            </div>

            <ul className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 xl:grid-cols-4">
              {filteredCatalog.map((mood) => (
                <li key={mood.id}>
                  <Link
                    href={`/moods/${mood.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-shadow hover:shadow-md"
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
                      <Image
                        src={mood.imageSrc}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-300 ease-in-out will-change-transform group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <span
                        className={`absolute left-3 top-3 rounded-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-sm ${categoryBadgeClass[mood.category]}`}
                      >
                        {mood.category}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col gap-2 p-4 sm:p-5">
                      <h3 className="font-sans text-base font-bold uppercase leading-snug tracking-tight text-neutral-900 sm:text-lg">
                        {mood.title}
                      </h3>
                      <p className="line-clamp-2 flex-1 text-sm leading-relaxed text-neutral-600">
                        {mood.description}
                      </p>
                      <div className="mt-2 flex items-center justify-between gap-3 border-t border-neutral-100 pt-4">
                         <span className="text-sm font-semibold text-[#00CFC0]">
                          {mood.beachCount} beaches
                        </span>
                        <ArrowCircleIcon />
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <Image
              src={beachImages.home.planTripBg}
              alt=""
              fill
              className="object-cover object-center blur-[2px] scale-105"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-slate-950/75" />
          </div>
          <div className="relative z-10 mx-auto max-w-3xl text-center lg:max-w-4xl lg:text-left">
            <div className="mb-4 flex items-center justify-center gap-3 lg:justify-start">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-yellow">
                Explore every vibe
              </span>
              <span className="hidden h-px w-16 bg-brand-yellow/80 sm:block" />
            </div>
            <h2 className="font-sans text-3xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Not sure what fits your{" "}
              <span className="text-brand-yellow">mood?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/90 lg:mx-0 sm:text-lg">
              Take our 60-second beach finder quiz and get personalized
              recommendations matched to your vibe, travel style, and dream
              destination.
            </p>
            <Link
              href="/get-started"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-brand-blue px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-cyan/25 transition hover:brightness-110"
            >
              <span className="text-lg leading-none" aria-hidden>
                ✦
              </span>
              Find my perfect beach
            </Link>
          </div>
        </section>

        <section
          className="border-t border-neutral-200 bg-neutral-50 px-4 py-14 sm:px-6 lg:px-8 lg:py-20"
          aria-labelledby="regions-heading"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-3 flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-600">
                Explore by region
              </span>
              <span className="h-px flex-1 max-w-14 bg-neutral-400/60" />
            </div>
            <h2
              id="regions-heading"
              className="max-w-3xl font-sans text-3xl font-extrabold uppercase leading-tight tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl"
            >
              Where in the{" "}
              <span className="text-[#00CFC0]">world?</span>
            </h2>
            <p className="mt-3 max-w-xl text-base text-neutral-600 sm:text-lg">
              Filter beach moods by your dream destination.
            </p>

            <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
              {exploreByRegionItems.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/explore-beaches?region=${encodeURIComponent(r.slug)}`}
                    className="group relative flex aspect-square min-h-[140px] flex-col overflow-hidden rounded-2xl border border-neutral-200 shadow-md sm:min-h-[160px]"
                  >
                    <div className="absolute inset-0 overflow-hidden">
                      <Image
                        src={r.imageSrc}
                        alt=""
                        fill
                        className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                        sizes="(max-width: 640px) 50vw, 16vw"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/25 to-transparent" />
                    <div className="relative z-10 mt-auto px-2 pb-4 text-center sm:px-3">
                      <span className="block text-[10px] font-bold uppercase leading-tight tracking-wide text-white sm:text-xs">
                        {r.name}
                      </span>
                      <span className="mt-1 block text-[10px] font-semibold text-[#00CFC0] sm:text-xs">
                        {r.beachCount} beaches
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-neutral-100 px-4 py-16 sm:px-6 lg:px-8 lg:py-24 pb-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">
              Your next escape awaits
            </p>
            <h2 className="mt-4 font-sans text-3xl font-extrabold uppercase leading-tight tracking-tight text-neutral-900 sm:text-4xl">
              Ready to discover your{" "}
              <span className="text-[#00CFC0]">next escape?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-neutral-600 sm:text-lg">
              Search thousands of curated beaches by mood, weather, and crowd —
              then save the spots that feel like yours.
            </p>
            <Link
              href="/explore-beaches"
              className="mt-10 inline-flex rounded-full bg-brand-cyan px-10 py-4 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-brand-cyan/25 transition hover:brightness-105"
            >
              Explore all beaches
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
