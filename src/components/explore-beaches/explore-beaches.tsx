"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  IconHeartNew,
  IconLocate,
  IconMinus,
  IconPlus,
  IconWaves,
} from "@/components/icons";
import {
  SiteHeader,
  SITE_HEADER_EXPLORE_MAP_STICKY_TOP_CLASS,
  SITE_HEADER_SOLID_STICKY_TOP_CLASS,
} from "@/components/site-header";
import { mapDrawerAmenities } from "@/lib/amenity-explore-icons";
import {
  EXPLORE_BEACH_FILTERS,
  MAP_CLUSTER_FULL_BEACHES,
  MAP_CLUSTER_HOVER_SAMPLES,
  MOCK_EXPLORE_BEACHES,
  type ExploreBeachCard,
  type ExploreBeachFilter,
} from "./mock-beaches";

const MAP_IMAGE = "/explore-beaches/snazzy-image.png";

/** Navy for section title + card names (mock 1) */
const NAVY = "#0a3d62";
/** “Explore Beaches” chip — dark blue-gray */
const CHIP_PRIMARY = "#546e7a";
/** Selected category (e.g. White Sand) — medium blue */
const CHIP_SELECTED = "#1e88d5";
/** Teal cluster pills on map */
const MAP_CLUSTER = "#26a69a";
/** Single beach dots */
const MAP_DOT = "#1976d2";

const mapClusters: { count: string; top: string; left: string; wide?: boolean }[] =
  [
    { count: "+8", top: "36%", left: "46%" },
    { count: "+12", top: "44%", left: "58%" },
    { count: "+11", top: "48%", left: "72%" },
    { count: "+16", top: "32%", left: "52%" },
    { count: "+14", top: "52%", left: "38%" },
    { count: "+278", top: "40%", left: "68%", wide: true },
  ];

const mapDots: { top: string; left: string }[] = [
  { top: "28%", left: "22%" },
  { top: "42%", left: "28%" },
  { top: "38%", left: "78%" },
  { top: "58%", left: "62%" },
  { top: "62%", left: "48%" },
];

function IconFilter({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M4 6h16M7 12h10M10 18h4" strokeLinecap="round" />
    </svg>
  );
}

function IconSun({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function IconDropletCheck({ className }: { className?: string }) {
  return (
    <span
      className={`relative inline-flex h-[18px] w-[18px] shrink-0 ${className ?? ""}`}
    >
      <svg
        className="text-emerald-600"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden
      >
        <path d="M12 2.7c-4.5 6.5-7 10.2-7 13.8a7 7 0 1 0 14 0c0-3.6-2.5-7.3-7-13.8z" />
      </svg>
      <svg
        className="absolute -right-0.5 bottom-0 text-emerald-600"
        width="9"
        height="9"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        aria-hidden
      >
        <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function IconChevronDown({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconChevronsLeft({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M11 17l-5-5 5-5M18 17l-5-5 5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconArrowRightSmall({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      aria-hidden
    >
      <path d="M5 12h12M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type MapClusterPin = {
  count: string;
  top: string;
  left: string;
  wide?: boolean;
};

function IconClose({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
    </svg>
  );
}

function IconShare({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />
    </svg>
  );
}

function IconUsersSmall({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function IconWindSmall({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 15H2" />
    </svg>
  );
}

function IconThermometer({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 1 1 4 0Z" />
    </svg>
  );
}

function BeachMapDetailDrawer({
  beach,
  onClose,
}: {
  beach: ExploreBeachCard;
  onClose: () => void;
}) {
  const [liked, setLiked] = useState(false);
  const tagsLower = beach.tags.map((t) => t.toLowerCase());
  const hasParty = tagsLower.some((t) => t.includes("party"));
  const hasSurf = tagsLower.some(
    (t) => t.includes("surf") || t === "surfing",
  );
  const partyScore = hasParty ? "9.4" : "8.1";
  const surfScore = hasSurf ? "8.8" : "7.6";
  const displayTags =
    beach.tags.length >= 2
      ? beach.tags.slice(0, 2)
      : beach.tags.length === 1
        ? [beach.tags[0]!, "Party"]
        : ["Surfing", "Party"];
  const waveHeightDisplay =
    beach.waterCondition === "Flat" ? "3-5 ft" : beach.waterCondition;

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[200] flex justify-end"
      role="dialog"
      aria-modal="true"
      aria-labelledby="map-beach-drawer-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/45 backdrop-blur-[1px]"
        aria-label="Close beach details"
        onClick={onClose}
      />
      <div className="animate-map-drawer-in relative flex h-full w-full max-w-[420px] flex-col bg-white shadow-[-12px_0_40px_rgba(15,23,42,0.18)]">
        <div className="group/drawer relative h-[200px] w-full shrink-0 overflow-hidden bg-neutral-200 sm:h-[220px]">
          <div className="absolute inset-0 origin-center transition-transform duration-500 ease-out will-change-transform group-hover/drawer:scale-110">
            <Image
              src={beach.imageSrc}
              alt=""
              fill
              className="object-cover"
              sizes="420px"
              priority
            />
          </div>
          <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/35 to-transparent" />
          <button
            type="button"
            onClick={onClose}
            className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/80 bg-white/90 text-neutral-800 shadow-sm transition hover:bg-white"
            aria-label="Close"
          >
            <IconClose className="h-4 w-4" />
          </button>
          <div className="absolute bottom-3 right-3 z-10 flex gap-2">
            <button
              type="button"
              onClick={() => setLiked((v) => !v)}
              className={`flex h-9 w-9 items-center justify-center rounded-full border border-white/80 shadow-sm backdrop-blur-sm transition ${
                liked ? "bg-white text-rose-500" : "bg-white/75 text-white"
              }`}
              aria-label={liked ? "Unlike" : "Like"}
              aria-pressed={liked}
            >
              <IconHeartNew filled={liked} className="h-4 w-4" />
            </button>
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/80 bg-white/75 text-white shadow-sm backdrop-blur-sm transition hover:bg-white/90"
              aria-label="Share"
            >
              <IconShare className="h-4 w-4 text-neutral-700" />
            </button>
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-5 pb-10 pt-5">
          <h2
            id="map-beach-drawer-title"
            className="text-lg font-bold uppercase leading-snug tracking-[0.12em]"
            style={{ color: NAVY }}
          >
            {beach.name}
          </h2>
          <p className="mt-1 text-sm text-neutral-500">{beach.locationLine}</p>

          <div className="mt-4 grid grid-cols-2 gap-2">
            {displayTags.map((tag, tagIdx) => (
              <span
                key={`${tag}-${tagIdx}`}
                className="inline-flex items-center justify-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-50 py-2 text-center text-xs font-semibold text-neutral-800"
              >
                {tag.toLowerCase().includes("surf") ? (
                  <IconWaves className="h-3.5 w-3.5 shrink-0 text-sky-600" />
                ) : tag.toLowerCase().includes("party") ? (
                  <span aria-hidden>🎉</span>
                ) : (
                  <IconSun className="h-3.5 w-3.5 shrink-0 text-amber-500" />
                )}
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-lg border border-neutral-200 bg-neutral-50/80 px-3 py-3 text-center">
              <p className="text-2xl font-bold tabular-nums text-neutral-900">
                {partyScore}
              </p>
              <p className="mt-0.5 text-[11px] font-medium uppercase tracking-wide text-neutral-500">
                Party Score
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-neutral-50/80 px-3 py-3 text-center">
              <p className="text-2xl font-bold tabular-nums text-neutral-900">
                {surfScore}
              </p>
              <p className="mt-0.5 text-[11px] font-medium uppercase tracking-wide text-neutral-500">
                Surfing Score
              </p>
            </div>
          </div>

          <h3 className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-neutral-500">
            Quick Stats
          </h3>
          <div className="mt-3 grid grid-cols-3 gap-2">
            <div className="rounded-lg border border-neutral-200 bg-white p-2.5 shadow-sm">
              <IconDropletCheck className="text-sky-600" />
              <p className="mt-1.5 text-[11px] font-semibold leading-tight text-neutral-900">
                {beach.waterQuality}
              </p>
              <p className="mt-0.5 text-[9px] font-medium uppercase leading-tight tracking-wide text-neutral-500">
                Water Quality
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-2.5 shadow-sm">
              <IconWaves className="text-sky-600" />
              <p className="mt-1.5 text-[11px] font-semibold leading-tight text-neutral-900">
                {waveHeightDisplay}
              </p>
              <p className="mt-0.5 text-[9px] font-medium uppercase leading-tight tracking-wide text-neutral-500">
                Wave Height
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-2.5 shadow-sm">
              <IconThermometer className="text-orange-500" />
              <p className="mt-1.5 text-[11px] font-semibold leading-tight text-neutral-900">
                {beach.tempF}°F
              </p>
              <p className="mt-0.5 text-[9px] font-medium uppercase leading-tight tracking-wide text-neutral-500">
                Water Temp
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-2.5 shadow-sm">
              <IconSun className="text-amber-500" />
              <p className="mt-1.5 text-[11px] font-semibold leading-tight text-neutral-900">
                High (8)
              </p>
              <p className="mt-0.5 text-[9px] font-medium uppercase leading-tight tracking-wide text-neutral-500">
                UV Index
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-2.5 shadow-sm">
              <IconUsersSmall className="text-violet-600" />
              <p className="mt-1.5 text-[11px] font-semibold leading-tight text-neutral-900">
                Busy
              </p>
              <p className="mt-0.5 text-[9px] font-medium uppercase leading-tight tracking-wide text-neutral-500">
                Crowd Level
              </p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-2.5 shadow-sm">
              <IconWindSmall className="text-teal-600" />
              <p className="mt-1.5 text-[11px] font-semibold leading-tight text-neutral-900">
                12 mph
              </p>
              <p className="mt-0.5 text-[9px] font-medium uppercase leading-tight tracking-wide text-neutral-500">
                Wind Speed
              </p>
            </div>
          </div>

          <h3 className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-neutral-500">
            Amenities
          </h3>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {mapDrawerAmenities.map((a) => (
              <span
                key={a.name}
                className="flex flex-col items-center gap-1 rounded-lg border border-neutral-200 bg-neutral-50 py-2.5 text-center text-[10px] font-medium leading-tight text-neutral-700"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                  <Image
                    src={a.icon}
                    alt=""
                    width={32}
                    height={32}
                    className="h-8 w-8 object-contain"
                    aria-hidden
                  />
                </span>
                {a.name}
              </span>
            ))}
          </div>

          <h3 className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-neutral-500">
            Plan Your Visit
          </h3>
          <div className="mt-3 flex flex-col gap-2.5">
            <Link
              href="/view-full-beaches"
              onClick={onClose}
              className="flex w-full items-center justify-center gap-2 rounded-lg py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:opacity-95"
              style={{ backgroundColor: NAVY }}
            >
              View Full Beach Page
              <IconArrowRightSmall className="text-white" />
            </Link>
            <button
              type="button"
              className="w-full rounded-lg border border-neutral-300 bg-white py-3 text-sm font-semibold uppercase tracking-wide text-neutral-800 transition hover:bg-neutral-50"
            >
              Book Nearby Stay
            </button>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                className="rounded-lg border border-neutral-300 bg-white py-2.5 text-xs font-semibold uppercase tracking-wide text-neutral-800 transition hover:bg-neutral-50"
              >
                Rent Surfboard
              </button>
              <button
                type="button"
                className="rounded-lg border border-neutral-300 bg-white py-2.5 text-xs font-semibold uppercase tracking-wide text-neutral-800 transition hover:bg-neutral-50"
              >
                Book Surf Lesson
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MapClusterHoverPin({
  cluster,
  preview,
  clusterIndex,
  onOpenDetail,
}: {
  cluster: MapClusterPin;
  preview: Pick<ExploreBeachCard, "name" | "locationLine" | "imageSrc" | "tags">;
  clusterIndex: number;
  onOpenDetail: (index: number) => void;
}) {
  return (
    <div
      className="pointer-events-auto absolute z-30 -translate-x-1/2 -translate-y-full"
      style={{ top: cluster.top, left: cluster.left }}
    >
      {/*
        Bottom of this stack sits on the map pin (translate-y-full).
        flex-col-reverse + gap keeps the hover card in the same hover target as the pill.
      */}
      <div className="group flex w-[min(220px,calc(100vw-2rem))] max-w-[85vw] flex-col-reverse items-center gap-2">
        <button
          type="button"
          className={`relative z-10 flex shrink-0 cursor-pointer items-center gap-1 rounded-full border-2 border-white font-bold text-white shadow-md outline-none transition hover:brightness-110 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-sky-100 ${
            cluster.wide
              ? "px-2.5 py-1.5 text-[11px]"
              : "px-2 py-1.5 text-xs"
          }`}
          style={{ backgroundColor: MAP_CLUSTER }}
          aria-label={`${cluster.count} beaches — open details`}
          onClick={(e) => {
            e.stopPropagation();
            onOpenDetail(clusterIndex);
          }}
        >
          <span className="select-none text-[13px] leading-none" aria-hidden>
            🌴
          </span>
          <span>{cluster.count}</span>
        </button>

        <div className="group/mini pointer-events-none z-50 w-full shrink-0 overflow-hidden rounded-lg border border-neutral-200 bg-white opacity-0 shadow-[0_12px_40px_rgba(15,23,42,0.16)] ring-1 ring-black/[0.04] transition-opacity duration-200 ease-out group-hover:pointer-events-auto group-hover:opacity-100 [@media(hover:none)]:pointer-events-auto [@media(hover:none)]:opacity-100">
          <div className="relative h-[88px] w-full overflow-hidden bg-neutral-100">
            <div className="absolute inset-0 origin-center transition-transform duration-500 ease-out will-change-transform group-hover/mini:scale-110">
              <Image
                src={preview.imageSrc}
                alt=""
                fill
                className="object-cover"
                sizes="220px"
              />
            </div>
          </div>
          <div className="px-3 pb-3 pt-2.5">
            <h3
              className="line-clamp-2 text-[11px] font-bold uppercase leading-snug tracking-[0.08em]"
              style={{ color: NAVY }}
            >
              {preview.name}
            </h3>
            <p className="mt-0.5 line-clamp-1 text-[10px] text-neutral-500">
              {preview.locationLine}
            </p>
            <div className="mt-2 flex flex-wrap gap-1">
              {preview.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-neutral-100 px-1.5 py-0.5 text-[8px] font-medium uppercase tracking-wide text-neutral-600"
                >
                  {tag}
                </span>
              ))}
            </div>
            <button
              type="button"
              className="mt-2.5 flex w-full cursor-pointer items-center justify-center gap-1.5 rounded-md py-2 text-[10px] font-semibold uppercase tracking-wide text-white transition hover:opacity-95"
              style={{ backgroundColor: NAVY }}
              onClick={(e) => {
                e.stopPropagation();
                onOpenDetail(clusterIndex);
              }}
            >
              Explore Beaches
              <IconArrowRightSmall className="shrink-0 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExploreBeachResultCard({ beach }: { beach: ExploreBeachCard }) {
  const [liked, setLiked] = useState(false);

  return (
    <article className="group flex h-full min-h-0 w-full flex-col overflow-hidden rounded-[10px] border border-neutral-200/90 bg-white shadow-[0_1px_4px_rgba(15,23,42,0.07)] transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(15,23,42,0.12)]">
      <div className="relative h-[200px] w-full shrink-0 overflow-hidden bg-neutral-100 sm:h-[220px]">
        <div className="absolute inset-0 origin-center transition-transform duration-500 ease-out will-change-transform group-hover:scale-110">
          <Image
            src={beach.imageSrc}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 22vw"
          />
        </div>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setLiked((v) => !v);
          }}
          className={
            "absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white shadow-sm backdrop-blur-[1px] transition-opacity transition-colors duration-200 " +
            "opacity-0 pointer-events-none max-md:pointer-events-auto max-md:opacity-100 " +
            "md:group-hover:pointer-events-auto md:group-hover:opacity-100 md:group-focus-within:pointer-events-auto md:group-focus-within:opacity-100 " +
            (liked
              ? "bg-white/85 text-rose-500"
              : "bg-white/40 text-white hover:bg-white/55")
          }
          aria-label={liked ? "Remove from saved beaches" : "Save beach"}
          aria-pressed={liked}
        >
          <IconHeartNew filled={liked} className="h-[1.125rem] w-[1.125rem]" />
        </button>
      </div>
      <div className="flex min-h-0 flex-1 flex-col p-5">
        <h2
          className="line-clamp-2 text-[0.8125rem] font-bold uppercase leading-snug tracking-[0.1em] sm:text-sm"
          style={{ color: NAVY }}
        >
          {beach.name}
        </h2>
        <p className="mt-2 line-clamp-2 text-xs text-neutral-500 sm:text-[13px]">
          {beach.locationLine}
        </p>
        <div className="mt-3 flex min-h-[4.25rem] flex-1 flex-wrap content-start gap-1.5">
          {beach.tags.map((tag) => (
            <span
              key={tag}
              className="h-fit rounded-full bg-neutral-100 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-neutral-700 sm:text-[11px]"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-neutral-100 pt-4 text-xs sm:text-[13px]">
          <span className="inline-flex items-center gap-1.5 text-orange-600">
            <IconSun className="shrink-0 text-orange-500" />
            <span className="font-medium">{beach.tempF}°F</span>
          </span>
          <span className="inline-flex items-center gap-1.5 text-sky-600">
            <IconWaves className="shrink-0 text-sky-500" />
            <span className="font-medium">{beach.waterCondition}</span>
          </span>
          <span className="inline-flex items-center gap-1.5 text-emerald-600">
            <IconDropletCheck />
            <span className="font-medium">{beach.waterQuality}</span>
          </span>
        </div>
      </div>
    </article>
  );
}

export function ExploreBeaches() {
  const [activeFilter, setActiveFilter] =
    useState<ExploreBeachFilter>("White Sand");
  const [mapOpen, setMapOpen] = useState(true);
  const [mapDetailBeach, setMapDetailBeach] = useState<ExploreBeachCard | null>(
    null,
  );

  const closeMapDetail = useCallback(() => setMapDetailBeach(null), []);

  const openMapClusterDetail = useCallback((index: number) => {
    setMapDetailBeach(
      MAP_CLUSTER_FULL_BEACHES[index % MAP_CLUSTER_FULL_BEACHES.length],
    );
  }, []);

  const filtered = useMemo(() => {
    const f = activeFilter.toLowerCase();
    return MOCK_EXPLORE_BEACHES.filter((b) => {
      const tags = b.tags.map((t) => t.toLowerCase());
      if (f === "surfing") return tags.some((t) => t.includes("surf"));
      return tags.some((t) => t === f);
    });
  }, [activeFilter]);

  const list = filtered.length ? filtered : MOCK_EXPLORE_BEACHES;
  const countDisplay = 1284;

  return (
    <div className="min-h-screen bg-[#eceff1] text-neutral-900">
      {mapDetailBeach ? (
        <BeachMapDetailDrawer beach={mapDetailBeach} onClose={closeMapDetail} />
      ) : null}
      <SiteHeader variant="solid" />
      <header
        className={`sticky z-50 border-b border-neutral-300/60 bg-[#e8eaed] shadow-sm ${SITE_HEADER_SOLID_STICKY_TOP_CLASS}`}
      >
        <div className="mx-auto max-w-[1920px] px-4 py-3 sm:px-6 lg:px-10">
          <div className="flex gap-2 overflow-x-auto pb-0.5 pt-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <span
              className="inline-flex shrink-0 items-center gap-2 rounded-full py-2.5 pl-4 pr-3 text-sm font-semibold text-white"
              style={{ backgroundColor: CHIP_PRIMARY }}
            >
              <span>Explore Beaches</span>
              <IconFilter className="shrink-0 text-white opacity-95" />
            </span>
            {EXPLORE_BEACH_FILTERS.map((label) => {
              const selected = activeFilter === label;
              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => setActiveFilter(label)}
                  className={`shrink-0 rounded-full border px-4 py-2.5 text-sm font-medium transition ${
                    selected
                      ? "border-transparent text-white shadow-sm"
                      : "border-neutral-400/70 bg-white text-neutral-700 hover:border-neutral-500"
                  }`}
                  style={
                    selected ? { backgroundColor: CHIP_SELECTED } : undefined
                  }
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </header>

      <div
        className={`mx-auto grid max-w-[1920px] overflow-visible bg-[#eceff1] transition-[grid-template-columns] duration-300 ease-out ${
          mapOpen
            ? "lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)]"
            : "lg:grid-cols-[1fr]"
        }`}
      >
        <section className="flex min-h-[calc(100vh-11rem)] flex-col border-neutral-300/50 bg-white max-md:min-h-[calc(100vh-13rem)] lg:border-r">
          {/* Mock 1: title left; Best Match + collapse on same row, far right */}
          <div className="flex items-start justify-between gap-4 px-4 pb-5 pt-7 sm:px-6 lg:px-8 lg:pt-9">
            <div>
              <h1
                className="text-lg font-bold uppercase tracking-[0.14em] sm:text-xl"
                style={{ color: NAVY }}
              >
                Explore Beaches
              </h1>
              <p className="mt-1.5 text-sm text-neutral-400">
                {countDisplay.toLocaleString()} beaches found
              </p>
            </div>
            <div className="flex shrink-0 flex-row items-center gap-3 sm:gap-4">
              <div className="relative min-w-[140px] max-w-[180px]">
                <label className="sr-only" htmlFor="explore-sort">
                  Sort results
                </label>
                <select
                  id="explore-sort"
                  defaultValue="best"
                  className="w-full cursor-pointer appearance-none rounded-full border border-neutral-300 bg-white py-2 pl-4 pr-9 text-sm font-medium text-neutral-800"
                >
                  <option value="best">Best Match</option>
                  <option value="rating">Top rated</option>
                  <option value="nearest">Nearest</option>
                </select>
                <IconChevronDown className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400" />
              </div>
              <button
                type="button"
                onClick={() => setMapOpen((o) => !o)}
                className="rounded-md p-2 text-neutral-500 transition hover:bg-neutral-100 hover:text-neutral-800"
                aria-label={mapOpen ? "Hide map" : "Show map"}
              >
                <IconChevronsLeft
                  className={`transition-transform ${mapOpen ? "" : "rotate-180"}`}
                />
              </button>
            </div>
          </div>

          <div
            id="explore-beach-results"
            className="grid scroll-mt-28 flex-1 grid-cols-1 gap-5 px-4 pb-12 sm:grid-cols-2 sm:px-6 sm:items-stretch lg:gap-5 lg:px-8"
          >
            {list.map((beach) => (
              <ExploreBeachResultCard key={beach.id} beach={beach} />
            ))}
          </div>
        </section>

        {mapOpen && (
          <section className="relative min-h-[280px] w-full overflow-visible border-t border-neutral-300/50 bg-[#eceff1] lg:min-h-[calc(100vh-11rem)] lg:border-t-0">
            <div
              className={`sticky z-40 h-[min(72vh,640px)] w-full overflow-visible p-4 sm:p-6 lg:min-h-[520px] lg:h-[calc(100vh-11rem)] lg:p-8 ${SITE_HEADER_EXPLORE_MAP_STICKY_TOP_CLASS}`}
            >
              <div
                className="relative h-full w-full overflow-visible rounded-[10px] border border-neutral-300/80 bg-sky-50 shadow-sm"
                aria-label="Beach map"
              >
                <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[10px]">
                  <Image
                    src={MAP_IMAGE}
                    alt="World map with beach clusters"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    priority
                  />
                </div>
                {mapDots.map(({ top, left }, i) => (
                  <div
                    key={`dot-${i}`}
                    className="absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white shadow-sm"
                    style={{ top, left, backgroundColor: MAP_DOT }}
                    aria-hidden
                  />
                ))}
                {mapClusters.map((cluster, i) => (
                  <MapClusterHoverPin
                    key={`${cluster.count}-${cluster.left}-${i}`}
                    cluster={cluster}
                    clusterIndex={i}
                    preview={
                      MAP_CLUSTER_HOVER_SAMPLES[
                        i % MAP_CLUSTER_HOVER_SAMPLES.length
                      ]
                    }
                    onOpenDetail={openMapClusterDetail}
                  />
                ))}

                {/* Mock 1: three stacked white squares, shared thin gray border */}
                <div className="absolute bottom-4 right-4 z-[60] flex flex-col divide-y divide-neutral-300 overflow-hidden rounded-md border border-neutral-300 bg-white shadow-md">
                  <button
                    type="button"
                    className="flex h-9 w-9 items-center justify-center bg-white text-neutral-700 transition hover:bg-neutral-50"
                    aria-label="Zoom in"
                  >
                    <IconPlus />
                  </button>
                  <button
                    type="button"
                    className="flex h-9 w-9 items-center justify-center bg-white text-neutral-700 transition hover:bg-neutral-50"
                    aria-label="Zoom out"
                  >
                    <IconMinus />
                  </button>
                  <button
                    type="button"
                    className="flex h-9 w-9 items-center justify-center bg-white text-neutral-700 transition hover:bg-neutral-50"
                    aria-label="My location"
                  >
                    <IconLocate />
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
