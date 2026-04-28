"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { IconHeart, IconMapPin } from "@/components/icons";
import { beachImages } from "@/lib/beach-images";
import {
  nearbyBeachResults,
  nearbyExperiences,
  nearbyHeroStats,
  nearbyStays,
  weekendPicks,
  type NearbyBeachCard,
} from "@/data/beaches-near-you-page";

const DROPDOWN_FILTERS = ["All Types", "Any Crowd", "Activities", "Amenities"] as const;
const DISTANCE_PRESETS = [5, 25, 50, 100] as const;
const TOGGLE_FILTERS = ["Dog Friendly", "Family", "Open"] as const;

const INITIAL = 9;
const LOAD_MORE = 3;

function IconSun({ className }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" strokeLinecap="round" />
    </svg>
  );
}

function IconWavesSmall({ className }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M2 12c2-2 4-2 6 0s4 2 6 0 4-2 6 0M2 17c2-2 4-2 6 0s4 2 6 0 4-2 6 0" strokeLinecap="round" />
    </svg>
  );
}

function IconThumbs({ className }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11a3 3 0 0 0 3-3v-4M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function formatDistance(km: number): string {
  return km < 10 ? `${km.toFixed(1)} km` : `${km.toFixed(1)} km`;
}

function BeachResultCard({ b }: { b: NearbyBeachCard }) {
  return (
    <article className="group">
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-neutral-200 shadow-md ring-1 ring-neutral-200/90">
        <Image
          src={b.imageSrc}
          alt=""
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <Link
          href="/explore-beaches"
          className="absolute inset-0 z-[1] rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2"
          aria-label={`View ${b.name}`}
        />
        <span className="pointer-events-none absolute bottom-3 left-3 z-[2] inline-flex items-center gap-1 rounded-full bg-black/65 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
          <IconMapPin className="h-3 w-3 shrink-0 text-[#00CFC0]" />
          {formatDistance(b.distanceKm)}
        </span>
        <button
          type="button"
          className="absolute bottom-3 right-3 z-[3] flex h-9 w-9 items-center justify-center rounded-full border-2 border-white/90 bg-black/25 text-white backdrop-blur-sm transition hover:bg-black/40"
          aria-label="Save beach"
        >
          <IconHeart className="h-4 w-4" />
        </button>
      </div>
      <div className="mt-4 px-0.5">
        <h3 className="font-sans text-base font-extrabold uppercase leading-snug tracking-wide text-neutral-900 sm:text-lg">
          <Link href="/explore-beaches" className="hover:text-[#00CFC0]">
            {b.name}
          </Link>
        </h3>
        <p className="mt-1 flex items-center gap-1 text-sm text-neutral-500">
          <IconMapPin className="h-3.5 w-3.5 shrink-0 text-red-500" />
          {b.location}
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {b.categories.map((c) => (
            <span
              key={c}
              className="rounded-full border border-brand-cyan/25 bg-brand-cyan/10 px-2.5 py-1 text-[11px] font-semibold text-[#00CFC0]"
            >
              {c}
            </span>
          ))}
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2.5 py-1 text-xs font-semibold text-orange-800">
            <IconSun className="text-orange-500" />
            {b.tempF}°F
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-sky-50 px-2.5 py-1 text-xs font-semibold text-sky-800">
            <IconWavesSmall className="text-sky-600" />
            {b.wavesLabel}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-800">
            <IconThumbs className="text-emerald-600" />
            {b.qualityLabel}
          </span>
        </div>
        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {b.features.map((f) => (
            <span
              key={f}
              className="rounded-full border border-brand-cyan/20 bg-brand-cyan/10 px-2.5 py-1 text-[11px] font-semibold text-[#00CFC0]"
            >
              {f}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export function BeachesNearYouPage() {
  const [radiusKm, setRadiusKm] = useState<(typeof DISTANCE_PRESETS)[number]>(25);
  const [visible, setVisible] = useState(INITIAL);
  const [sortKey, setSortKey] = useState<"closest" | "name">("closest");

  const filtered = useMemo(() => {
    const list = nearbyBeachResults.filter((b) => b.distanceKm <= radiusKm);
    const sorted = [...list];
    if (sortKey === "closest") sorted.sort((a, b) => a.distanceKm - b.distanceKm);
    else sorted.sort((a, b) => a.name.localeCompare(b.name));
    return sorted;
  }, [radiusKm, sortKey]);

  const shown = filtered.slice(0, visible);
  const hasMore = visible < filtered.length;

  return (
    <div className="bg-white">
      {/* —— Hero —— */}
      <section className="relative flex min-h-[calc(100dvh-65px)] flex-col overflow-hidden bg-neutral-900 md:min-h-[calc(100dvh-118px)]">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src={beachImages.vibesSection}
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/55 via-neutral-950/35 to-neutral-950/75" />
        </div>

        <div className="relative z-10 flex flex-1 flex-col justify-end px-4 pb-10 pt-24 sm:px-6 sm:pb-14 sm:pt-28 lg:px-8 lg:pb-16 lg:pt-32">
          <div className="mx-auto w-full max-w-7xl text-left">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/12 px-4 py-2 backdrop-blur-md sm:mb-6">
              <span className="h-2 w-2 shrink-0 rounded-full bg-brand-yellow" aria-hidden />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-white sm:text-xs">
                Personalised for you
              </span>
            </div>

            <h1 className="max-w-4xl font-sans text-4xl font-extrabold uppercase leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Beaches{" "}
              <span className="text-brand-yellow">near you</span>
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-base text-white/95 sm:mt-6 sm:text-lg">
              Discover the best beaches around your current location — sorted by distance, crowd, and vibe.
            </p>

            <div className="mt-8 w-full max-w-3xl sm:mt-10">
              <div className="rounded-2xl border border-white/20 bg-black/50 px-1 py-4 shadow-inner backdrop-blur-md sm:px-2 sm:py-5">
                <dl className="flex divide-x divide-white/15">
                  <div className="flex min-w-0 flex-1 flex-col items-start gap-1 px-2 sm:px-4">
                    <dd className="text-2xl font-extrabold tabular-nums leading-none text-[#00CFC0] sm:text-3xl">
                      {nearbyHeroStats.beachCount}
                    </dd>
                    <dt className="text-[8px] font-bold uppercase leading-tight tracking-wide text-white/90 sm:text-[10px]">
                      Near by beaches
                    </dt>
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col items-start gap-1 px-2 sm:px-4">
                    <dd className="text-lg font-extrabold uppercase tabular-nums text-[#00CFC0] sm:text-xl">
                      {nearbyHeroStats.closestKm} km
                    </dd>
                    <dt className="text-[8px] font-bold uppercase leading-tight tracking-wide text-white/90 sm:text-[10px]">
                      Closest beach
                    </dt>
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col items-start gap-1 px-2 sm:px-4">
                    <dd className="text-lg font-extrabold tabular-nums text-[#00CFC0] sm:text-xl">
                      {nearbyHeroStats.avgWaterTempC}°C
                    </dd>
                    <dt className="text-[8px] font-bold uppercase leading-tight tracking-wide text-white/90 sm:text-[10px]">
                      Avg water temp
                    </dt>
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col items-start gap-1 px-2 sm:px-4">
                    <dd className="text-lg font-extrabold tabular-nums text-[#00CFC0] sm:text-xl">
                      {nearbyHeroStats.todayWeatherC}°C
                    </dd>
                    <dt className="text-[8px] font-bold uppercase leading-tight tracking-wide text-white/90 sm:text-[10px]">
                      Today&apos;s weather
                    </dt>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* —— Filters —— */}
      <div className="border-b border-neutral-200 bg-white px-4 py-5 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2">
          {DROPDOWN_FILTERS.map((label) => (
            <button
              key={label}
              type="button"
              className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-3.5 py-2 text-xs font-semibold text-neutral-800 shadow-sm transition hover:border-neutral-300 sm:text-sm"
            >
              {label}
              <span className="text-neutral-400" aria-hidden>
                ▾
              </span>
            </button>
          ))}
          {DISTANCE_PRESETS.map((km) => {
            const active = radiusKm === km;
            return (
              <button
                key={km}
                type="button"
                onClick={() => {
                  setRadiusKm(km);
                  setVisible(INITIAL);
                }}
                className={`rounded-full border px-3.5 py-2 text-xs font-semibold transition sm:text-sm ${
                  active
                    ? "border-brand-cyan bg-brand-cyan/15 text-[#00CFC0]"
                    : "border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300"
                }`}
              >
                {km} km
              </button>
            );
          })}
          {TOGGLE_FILTERS.map((label) => (
            <button
              key={label}
              type="button"
              className="rounded-full border border-neutral-200 bg-neutral-50 px-3.5 py-2 text-xs font-semibold text-neutral-700 transition hover:bg-white sm:text-sm"
            >
              {label}
            </button>
          ))}
        </div>

        <div className="mx-auto mt-5 flex max-w-7xl flex-col gap-4 border-t border-neutral-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-neutral-500">
            <span className="font-mono font-semibold tabular-nums text-neutral-800">{filtered.length}</span> beaches
            within {radiusKm} km
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <label className="sr-only" htmlFor="nearby-sort">
              Sort results
            </label>
            <select
              id="nearby-sort"
              value={sortKey}
              onChange={(e) => setSortKey(e.target.value as "closest" | "name")}
              className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-800 shadow-sm focus:border-brand-cyan focus:outline-none focus:ring-2 focus:ring-brand-cyan/20"
            >
              <option value="closest">Closest first</option>
              <option value="name">Name (A–Z)</option>
            </select>
            <div className="flex items-center gap-1 rounded-full border border-neutral-200 p-1">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-cyan/15 text-[#00CFC0]" title="Grid">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7zm9 0h7v7h-7v-7z" />
                </svg>
              </span>
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full text-neutral-400" title="List">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* —— Main grid —— */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16" aria-label="Nearby beach results">
          <ul className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {shown.map((b) => (
            <li key={b.id}>
              <BeachResultCard b={b} />
            </li>
          ))}
        </ul>
        {hasMore ? (
          <div className="mt-14 flex justify-center">
            <button
              type="button"
              onClick={() => setVisible((v) => Math.min(v + LOAD_MORE, filtered.length))}
              className="rounded-full bg-brand-blue px-12 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-brand-cyan/15 transition hover:brightness-110"
            >
              Load beaches
            </button>
          </div>
        ) : null}
      </section>

      {/* —— Best for this weekend —— */}
      <section className="border-t border-neutral-100 bg-neutral-50 px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-2 flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">Personalised pick</span>
                <span className="h-px max-w-12 flex-1 bg-neutral-300" />
              </div>
              <h2 className="font-sans text-2xl font-extrabold uppercase tracking-tight text-neutral-900 sm:text-3xl lg:text-4xl">
                Best for <span className="text-[#00CFC0]">this weekend</span>
              </h2>
              <p className="mt-2 max-w-xl text-sm text-neutral-600 sm:text-base">
                Great weather + lower crowds = perfect timing right now.
              </p>
            </div>
            <Link
              href="/explore-beaches"
              className="shrink-0 text-sm font-semibold text-neutral-800 underline decoration-brand-cyan/50 decoration-2 underline-offset-4 hover:text-[#00CFC0]"
            >
              View all →
            </Link>
          </div>
          <ul className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible [&::-webkit-scrollbar]:hidden">
            {weekendPicks.map((w) => (
              <li key={w.id} className="w-[min(280px,82vw)] shrink-0 snap-start lg:w-auto">
                <article className="group">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-200 shadow-md ring-1 ring-neutral-200/80">
                    <Image
                      src={w.imageSrc}
                      alt=""
                      fill
                      className="object-cover transition duration-300 group-hover:scale-105"
                      sizes="280px"
                    />
                    <Link
                      href="/explore-beaches"
                      className="absolute inset-0 z-[1] rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2"
                      aria-label={`View ${w.name}`}
                    />
                    <span className="pointer-events-none absolute bottom-3 left-3 z-[2] inline-flex items-center gap-1 rounded-full bg-teal-700/95 px-2.5 py-1 text-[11px] font-semibold text-white">
                      <IconMapPin className="h-3 w-3" />
                      {w.distanceKm} km
                    </span>
                    <button
                      type="button"
                      className="absolute bottom-3 right-3 z-[3] flex h-9 w-9 items-center justify-center rounded-full border-2 border-white/90 bg-black/20 text-white backdrop-blur-sm"
                      aria-label="Save"
                    >
                      <IconHeart className="h-4 w-4" />
                    </button>
                  </div>
                  <h3 className="mt-4 font-mono text-sm font-bold uppercase leading-snug tracking-tight text-neutral-900 line-clamp-1">
                    <Link href="/explore-beaches" className="hover:text-[#00CFC0]">
                      {w.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-xs text-neutral-500">{w.location}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1 rounded-md bg-orange-50 px-2 py-1 text-[11px] font-semibold text-orange-800">
                      <IconSun className="text-orange-500" />
                      {w.tempF}°F
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-md bg-sky-50 px-2 py-1 text-[11px] font-semibold text-sky-800">
                      ≈ {w.wavesLabel}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2 py-1 text-[11px] font-semibold text-emerald-800">
                      👍 {w.qualityLabel}
                    </span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {w.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-brand-cyan/25 bg-brand-cyan/10 px-2 py-0.5 text-[11px] font-semibold text-[#00CFC0]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* —— Beat the crowds —— */}
      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">Beat the crowds</span>
            <span className="h-px max-w-12 flex-1 bg-neutral-300" />
          </div>
          <h2 className="font-sans text-2xl font-extrabold uppercase tracking-tight text-neutral-900 sm:text-3xl lg:text-4xl">
            Less <span className="text-[#00CFC0]">crowded</span> picks
          </h2>
          <p className="mt-2 max-w-xl text-sm text-neutral-600 sm:text-base">Same coastline energy — fewer towels on the sand.</p>
          <ul className="no-scrollbar mt-8 flex snap-x gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible [&::-webkit-scrollbar]:hidden">
            {nearbyBeachResults.slice(0, 3).map((b) => (
              <li key={`less-${b.id}`} className="w-[min(300px,85vw)] shrink-0 snap-start lg:w-auto">
                <BeachResultCard b={b} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* —— Nearby experience —— */}
      <section className="border-t border-neutral-100 bg-neutral-50 px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-2 flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">Things to do</span>
                <span className="h-px max-w-12 flex-1 bg-neutral-300" />
              </div>
              <h2 className="font-sans text-2xl font-extrabold uppercase tracking-tight text-neutral-900 sm:text-3xl">
                Nearby <span className="text-[#00CFC0]">experience</span>
              </h2>
              <p className="mt-2 text-sm text-neutral-600 sm:text-base">Lessons, rentals, and guided days steps from the sand.</p>
            </div>
            <Link href="/explore-beaches" className="text-sm font-semibold text-neutral-800 underline-offset-4 hover:underline">
              View all →
            </Link>
          </div>
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {nearbyExperiences.map((e) => (
              <li key={e.id}>
                <Link href="/explore-beaches" className="group block">
                  <div className="relative aspect-video overflow-hidden rounded-xl bg-neutral-200 shadow-md ring-1 ring-neutral-200/80">
                    <Image
                      src={e.imageSrc}
                      alt=""
                      fill
                      className="object-cover transition duration-300 group-hover:scale-105"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                    <span className={`absolute left-3 top-3 rounded-md px-2 py-1 text-[10px] font-bold uppercase tracking-wide ${e.tagClass}`}>
                      {e.activityTag}
                    </span>
                  </div>
                  <h3 className="mt-3 text-sm font-extrabold uppercase tracking-wide text-neutral-900">{e.title}</h3>
                  <p className="mt-1 text-xs text-neutral-500">{e.distanceKm} km away</p>
                  <p className="mt-2 text-sm font-semibold text-amber-600">{e.priceLabel}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* —— Stays —— */}
      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-2 flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">Stay close</span>
                <span className="h-px max-w-12 flex-1 bg-neutral-300" />
              </div>
              <h2 className="font-sans text-2xl font-extrabold uppercase tracking-tight text-neutral-900 sm:text-3xl">
                Stays near <span className="text-[#00CFC0]">these beaches</span>
              </h2>
            </div>
            <Link href="/explore-beaches" className="text-sm font-semibold text-neutral-800 underline-offset-4 hover:underline">
              View all →
            </Link>
          </div>
          <ul className="no-scrollbar flex snap-x gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] lg:grid lg:grid-cols-5 lg:gap-5 lg:overflow-visible [&::-webkit-scrollbar]:hidden">
            {nearbyStays.map((s) => (
              <li key={s.id} className="w-[min(260px,78vw)] shrink-0 snap-start lg:w-auto">
                <Link href="/explore-beaches" className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-200 shadow-md ring-1 ring-neutral-200/80">
                    <Image
                      src={s.imageSrc}
                      alt=""
                      fill
                      className="object-cover transition duration-300 group-hover:scale-105"
                      sizes="260px"
                    />
                    <span className="absolute left-3 top-3 rounded-md bg-brand-yellow px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-neutral-900 shadow">
                      From ${s.priceFrom.toLocaleString()}
                    </span>
                  </div>
                  <h3 className="mt-4 text-xs font-extrabold uppercase leading-snug text-neutral-900">{s.name}</h3>
                  <p className="mt-1 text-[11px] text-neutral-500">{s.distanceLine}</p>
                  <div className="mt-3 flex items-center justify-between gap-2">
                    <span className="text-sm font-bold text-[#00CFC0]">
                      ${s.priceNight.toLocaleString()}
                      <span className="text-xs font-semibold text-neutral-500"> /night</span>
                    </span>
                    <span className="text-xs font-semibold text-neutral-600">
                      <span className="text-amber-500" aria-hidden>
                        ★
                      </span>{" "}
                      {s.rating}{" "}
                      <span className="text-neutral-400">({s.reviewCount.toLocaleString()})</span>
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* —— Plan CTA —— */}
      <section className="border-t border-neutral-100 bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">Ready to go?</p>
          <h2 className="mt-3 font-sans text-3xl font-extrabold uppercase leading-tight tracking-tight text-neutral-900 sm:text-4xl">
            Plan your <span className="text-[#00CFC0]">beach day</span>
          </h2>
          <p className="mt-4 text-neutral-600 sm:text-lg">
            Save beaches, create a trip itinerary, and share your beach day plan with friends.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/plan"
              className="inline-flex min-w-[10rem] items-center justify-center rounded-full bg-brand-blue px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-md transition hover:brightness-110"
            >
              Start planning
            </Link>
            <Link
              href="/explore-beaches"
              className="inline-flex min-w-[10rem] items-center justify-center rounded-full border-2 border-neutral-300 bg-white px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-neutral-900 transition hover:border-neutral-400"
            >
              Explore beaches
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
