"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { MoodDetailPageData } from "@/data/beach-mood-detail";
import { moodHeroTitleParts, moodPageTitle } from "@/data/beach-mood-detail";

const INITIAL_GRID = 9;
const LOAD_STEP = 6;

const filterDropdowns = [
  "All Regions",
  "All Countries",
  "Best Time",
  "Crowd Level",
] as const;

const filterToggles = [
  "Accessible",
  "Dog Friendly",
  "Family",
  "Surf",
  "Snorkel",
  "Beach Bar",
] as const;

function IconHeart({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M12 21s-7-4.5-7-10a5 5 0 0 1 9.5-2A5 5 0 0 1 19 11c0 5.5-7 10-7 10z" />
    </svg>
  );
}

function IconShare({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="M8.6 13.5l6.8 3.5M15.4 6.5L8.6 10" />
    </svg>
  );
}

function IconMap({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M9 20l-5.5-2.5v-14L9 5l7-3 5.5 2.5v14L16 21l-7-3z" />
      <path d="M9 5v15M16 3v18" />
    </svg>
  );
}

function IconThermometer({ className }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M14 4v10.5a4 4 0 1 1-4 0V4a2 2 0 1 1 4 0Z" />
    </svg>
  );
}

function IconStar({ className }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2l2.9 7.3L22 12l-7.1 2.7L12 22l-2.9-7.3L2 12l7.1-2.7L12 2z" />
    </svg>
  );
}

function crowdChipClass(crowd: "Low" | "Mid" | "High"): string {
  switch (crowd) {
    case "Low":
      return "bg-sky-100 text-sky-800";
    case "Mid":
      return "bg-blue-100 text-blue-800";
    case "High":
      return "bg-indigo-100 text-indigo-800";
    default:
      return "bg-neutral-100 text-neutral-700";
  }
}

type Props = { data: MoodDetailPageData };

export function BeachMoodDetailPage({ data }: Props) {
  const { mood, heroSegments, heroStats, gridBeaches, editorPicks, relatedMoods } = data;
  const titleDisplay = moodPageTitle(mood);
  const { before, accent } = moodHeroTitleParts(mood);
  const [visible, setVisible] = useState(INITIAL_GRID);
  const [sortKey, setSortKey] = useState<"popular" | "name">("popular");

  const sortedGrid = useMemo(() => {
    const copy = [...gridBeaches];
    if (sortKey === "name") copy.sort((a, b) => a.name.localeCompare(b.name));
    return copy;
  }, [gridBeaches, sortKey]);

  const shown = sortedGrid.slice(0, visible);
  const hasMore = visible < sortedGrid.length;

  const [largePick, ...smallPicks] = editorPicks;

  return (
    <div className="bg-white">
      <section className="relative flex min-h-[calc(100dvh-65px)] flex-col overflow-hidden bg-neutral-900 md:min-h-[calc(100dvh-118px)]">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src={mood.imageSrc}
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-sky-950/45" />
        </div>

        <div className="relative z-10 flex flex-1 flex-col px-4 pb-6 pt-24 sm:px-6 sm:pb-8 sm:pt-28 lg:px-8 lg:pt-32">
          <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-end">
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/35 bg-black/35 px-4 py-2 backdrop-blur-md sm:px-5">
              <span className="h-2 w-2 shrink-0 rounded-full bg-brand-yellow" aria-hidden />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-white sm:text-xs">
                Beach discovery
              </span>
            </div>

            <h1 className="font-sans text-4xl font-extrabold uppercase leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block text-balance">{before}</span>
              {accent ? (
                <span className="mt-1 block text-balance text-brand-yellow sm:mt-2">{accent}</span>
              ) : null}
            </h1>

            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/95 sm:text-lg">
              {heroSegments.map((seg, i) =>
                seg.bold ? (
                  <strong key={i} className="font-semibold text-white">
                    {seg.text}
                  </strong>
                ) : (
                  <span key={i}>{seg.text}</span>
                ),
              )}
            </p>

            <div className="mt-8 w-full max-w-4xl rounded-2xl border border-white/20 bg-black/45 py-4 shadow-inner backdrop-blur-md sm:py-5">
              <dl className="flex divide-x divide-white/15">
                <div className="flex min-w-0 flex-1 flex-col items-center gap-1 px-2 py-1 text-center sm:px-4">
                  <dd className="text-2xl font-extrabold tabular-nums leading-none text-[#00CFC0] sm:text-3xl md:text-4xl">
                    {heroStats.beachCountLabel}
                  </dd>
                  <dt className="text-[9px] font-bold uppercase leading-tight tracking-[0.1em] text-white/90 sm:text-[11px]">
                    Beaches
                  </dt>
                </div>
                <div className="flex min-w-0 flex-1 flex-col items-center gap-1 px-2 py-1 text-center sm:px-4">
                  <dd className="text-base font-extrabold uppercase leading-tight tracking-wide text-[#00CFC0] sm:text-lg md:text-xl">
                    {heroStats.bestSeason}
                  </dd>
                  <dt className="text-[9px] font-bold uppercase leading-tight tracking-[0.1em] text-white/90 sm:text-[11px]">
                    Best season
                  </dt>
                </div>
                <div className="flex min-w-0 flex-1 flex-col items-center gap-1 px-2 py-1 text-center sm:px-4">
                  <dd className="text-base font-extrabold uppercase leading-tight tracking-wide text-[#00CFC0] sm:text-lg md:text-xl">
                    {heroStats.topRegion}
                  </dd>
                  <dt className="text-[9px] font-bold uppercase leading-tight tracking-[0.1em] text-white/90 sm:text-[11px]">
                    Top region
                  </dt>
                </div>
                <div className="flex min-w-0 flex-1 flex-col items-center gap-1 px-2 py-1 text-center sm:px-4">
                  <dd className="text-base font-extrabold uppercase leading-tight tracking-wide text-[#00CFC0] sm:text-lg md:text-xl">
                    {heroStats.avgCrowd}
                  </dd>
                  <dt className="text-[9px] font-bold uppercase leading-tight tracking-[0.1em] text-white/90 sm:text-[11px]">
                    Avg crowd
                  </dt>
                </div>
              </dl>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:brightness-110"
              >
                <IconMap className="opacity-95" />
                Open on Map
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/85 bg-black/30 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-black/40"
              >
                <IconShare />
                Share
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full border-2 border-brand-yellow bg-black/30 px-6 py-3 text-sm font-semibold text-brand-yellow backdrop-blur-sm transition hover:bg-black/45"
              >
                <IconHeart className="text-brand-yellow" />
                Save Collections
              </button>
            </div>
          </div>

          <div className="mx-auto mt-10 flex flex-col items-center pb-2 text-[10px] font-bold uppercase tracking-[0.35em] text-white/85 sm:mt-12 sm:text-xs">
            <span>Explore</span>
            <svg
              className="mt-2 h-8 w-5 text-white/75"
              viewBox="0 0 24 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden
            >
              <path d="M12 4v28M12 36l-4 4M12 36l4 4" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </section>

      <div className="border-b border-neutral-200 bg-white px-4 py-5 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-2 pb-4">
          {filterDropdowns.map((label) => (
            <button
              key={label}
              type="button"
              className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-50 px-3.5 py-2 text-xs font-semibold text-neutral-800 transition hover:border-neutral-300 hover:bg-white sm:text-sm"
            >
              {label}
              <span className="text-neutral-400" aria-hidden>
                ▾
              </span>
            </button>
          ))}
          {filterToggles.map((label) => (
            <button
              key={label}
              type="button"
              className="rounded-full border border-neutral-200 bg-white px-3.5 py-2 text-xs font-semibold text-neutral-700 transition hover:border-brand-cyan/35 hover:bg-neutral-50 sm:text-sm"
            >
              {label}
            </button>
          ))}
        </div>

        <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-neutral-100 pt-4 lg:flex-row lg:items-center lg:justify-between">
          <p className="font-mono text-sm font-semibold tracking-tight text-neutral-900 sm:text-base">
            <span className="tabular-nums">{mood.beachCount}</span> Beaches in this Collection
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end sm:gap-4">
            <label className="sr-only" htmlFor="mood-sort">
              Sort beaches
            </label>
            <select
              id="mood-sort"
              value={sortKey}
              onChange={(e) => setSortKey(e.target.value as "popular" | "name")}
              className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-800 shadow-sm focus:border-brand-cyan focus:outline-none focus:ring-2 focus:ring-brand-cyan/25"
            >
              <option value="popular">Most Popular</option>
              <option value="name">Name (A–Z)</option>
            </select>
            <div className="flex items-center gap-1 rounded-lg border border-neutral-200 p-1">
              <span
                className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-brand-cyan/15 text-[#00CFC0]"
                aria-current="true"
                title="Grid view"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7zm9 0h7v7h-7v-7z" />
                </svg>
              </span>
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md text-neutral-400" title="List view">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16" aria-labelledby="mood-grid-heading">
        <h2 id="mood-grid-heading" className="sr-only">
          Beaches in {titleDisplay}
        </h2>
        <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {shown.map((b) => (
            <li key={b.id}>
              <Link href="/explore-beaches" className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-200 shadow-md ring-1 ring-neutral-200/80">
                  <Image
                    src={b.imageSrc}
                    alt=""
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-violet-600/92 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-md backdrop-blur-sm">
                    {b.rankPill}
                  </span>
                  <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-neutral-600 shadow-md transition group-hover:text-rose-500">
                    <IconHeart />
                  </span>
                </div>
                <div className="mt-4">
                  <h3 className="font-sans text-lg font-extrabold uppercase tracking-wide text-neutral-900">
                    {[b.name, b.nameAccentWord].filter(Boolean).join(" ")}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-500">{b.location}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-orange-100 px-2.5 py-1 text-xs font-semibold text-orange-800">
                      <IconThermometer className="text-orange-600" />
                      {b.tempC}°C
                    </span>
                    <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${crowdChipClass(b.crowd)}`}>
                      {b.crowd} crowd
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-800">
                      <IconStar className="text-emerald-600" />
                      {b.waterLabel}
                    </span>
                  </div>
                  <p className="mt-2 text-xs font-medium text-neutral-500">{b.traits.join(" · ")}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {hasMore ? (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setVisible((v) => Math.min(v + LOAD_STEP, sortedGrid.length))}
              className="rounded-full bg-brand-blue px-10 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-brand-cyan/20 transition hover:brightness-110"
            >
              Load beaches
            </button>
          </div>
        ) : null}
      </section>

      <section className="border-t border-neutral-100 bg-neutral-50 px-4 py-14 sm:px-6 lg:px-8 lg:py-20" aria-labelledby="editors-heading">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-600">Handpicked by our team</p>
              <h2 id="editors-heading" className="mt-2 font-sans text-3xl font-extrabold uppercase tracking-tight text-neutral-900 sm:text-4xl">
                Editor&apos;s <span className="text-[#00CFC0]">favourites</span>
              </h2>
              <p className="mt-3 max-w-xl text-neutral-600">Top beaches that nail this mood — temperature, water, and vibe in one glance.</p>
            </div>
            <Link href="/explore-beaches" className="shrink-0 text-sm font-semibold text-neutral-800 underline decoration-brand-cyan/60 decoration-2 underline-offset-4 hover:text-[#00CFC0]">
              View all →
            </Link>
          </div>

          {largePick ? (
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:grid-rows-2 lg:gap-6">
              <Link
                href="/explore-beaches"
                className="group relative min-h-[320px] overflow-hidden rounded-2xl bg-neutral-900 shadow-lg lg:row-span-2 lg:min-h-[420px]"
              >
                <Image src={largePick.imageSrc} alt="" fill className="object-cover transition duration-300 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/35 to-transparent" />
                <span className="absolute left-4 top-4 rounded-md bg-brand-yellow px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-neutral-900">
                  ★ Editor&apos;s pick
                </span>
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <h3 className="text-2xl font-extrabold uppercase tracking-wide text-white sm:text-3xl">
                    {largePick.name}{" "}
                    <span className="text-[#00CFC0]">{largePick.nameAccentWord}</span>
                  </h3>
                  <p className="mt-1 text-sm text-white/90">{largePick.location}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-orange-500/95 px-2.5 py-1 text-xs font-bold text-white">
                      <IconThermometer />
                      {largePick.tempC}°
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-sky-500/95 px-2.5 py-1 text-xs font-bold text-white">
                      {largePick.waterLabel}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/95 px-2.5 py-1 text-xs font-bold text-white">
                      <IconStar />
                      {largePick.qualityLabel}
                    </span>
                  </div>
                </div>
              </Link>

              {smallPicks.map((pick) => (
                <Link
                  key={pick.id}
                  href="/explore-beaches"
                  className="group relative min-h-[200px] overflow-hidden rounded-2xl bg-neutral-900 shadow-lg lg:min-h-0"
                >
                  <Image src={pick.imageSrc} alt="" fill className="object-cover transition duration-300 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                    <h3 className="text-lg font-extrabold uppercase tracking-wide text-white sm:text-xl">
                      {pick.name} <span className="text-[#00CFC0]">{pick.nameAccentWord}</span>
                    </h3>
                    <p className="mt-0.5 text-xs text-white/90 sm:text-sm">{pick.location}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1 rounded-full bg-orange-500/95 px-2 py-0.5 text-[11px] font-bold text-white">
                        {pick.tempC}°
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-sky-500/95 px-2 py-0.5 text-[11px] font-bold text-white">
                        {pick.waterLabel}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/95 px-2 py-0.5 text-[11px] font-bold text-white">
                        {pick.qualityLabel}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-20" aria-labelledby="related-heading">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-600">Explore more</p>
            <h2 id="related-heading" className="mt-2 font-sans text-3xl font-extrabold uppercase tracking-tight text-neutral-900 sm:text-4xl">
              Related <span className="text-[#00CFC0]">collections</span>
            </h2>
            <p className="mt-3 max-w-xl text-neutral-600">Trending moods that pair well with this shoreline energy.</p>
          </div>

          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {relatedMoods.map((m) => (
              <li key={m.id}>
                <Link
                  href={`/moods/${m.slug}`}
                  className="group relative flex aspect-square min-h-[200px] flex-col overflow-hidden rounded-2xl bg-neutral-900 shadow-md sm:min-h-[220px]"
                >
                  <Image
                    src={m.imageSrc}
                    alt=""
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
                  <div className="relative z-10 mt-auto p-4 sm:p-5">
                    <p className="text-sm font-semibold text-[#00CFC0]">{m.beachCount} beaches</p>
                    <h3 className="mt-1 font-sans text-lg font-extrabold uppercase leading-tight tracking-wide text-white sm:text-xl">{m.title}</h3>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-neutral-100 bg-neutral-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-600">Start your journey</p>
          <h2 className="mt-3 font-sans text-3xl font-extrabold uppercase leading-tight tracking-tight text-neutral-900 sm:text-4xl">
            Plan your perfect
            <br />
            <span className="text-[#00CFC0]">beach escape</span>
          </h2>
          <p className="mt-5 text-neutral-600 sm:text-lg">
            Save spots, compare conditions, and build an itinerary that matches how you actually like to spend time on the sand.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/plan"
              className="inline-flex min-w-[10rem] items-center justify-center rounded-full bg-brand-cyan px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-brand-cyan/25 transition hover:brightness-110"
            >
              Start planning
            </Link>
            <Link
              href="/explore-beaches"
              className="inline-flex min-w-[10rem] items-center justify-center rounded-full border-2 border-neutral-300 bg-white px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-neutral-800 transition hover:border-neutral-400"
            >
              Explore beaches
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
