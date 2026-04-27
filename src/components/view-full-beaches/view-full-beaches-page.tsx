import Image from "next/image";
import Link from "next/link";
import { SITE_HEADER_MARKETING_SOLID_STICKY_TOP_CLASS } from "@/components/site-header";
import { beachImages } from "@/lib/beach-images";
import { onSiteFacilities } from "@/lib/amenity-explore-icons";

/** Teal accent from design mockups (~#2DD4BF). */
const TEAL = "#2dd4bf";

function StarRow({ className }: { className?: string }) {
  return (
    <span
      className={`inline-flex gap-0.5 text-amber-400 ${className ?? ""}`}
      aria-hidden
    >
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i}>★</span>
      ))}
    </span>
  );
}

function VibeBar({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: string;
}) {
  const pct = Math.min(100, (value / 10) * 100);
  return (
    <div className="flex items-center gap-3 py-2">
      <span className="w-24 shrink-0 text-sm font-medium text-neutral-800">
        {label}
      </span>
      <div className="h-2.5 min-w-0 flex-1 overflow-hidden rounded-full bg-neutral-200">
        <div
          className="h-full rounded-full transition-all"
          style={{ width: `${pct}%`, backgroundColor: color }}
        />
      </div>
      <span className="w-10 shrink-0 text-right text-sm font-semibold tabular-nums text-neutral-900">
        {value.toFixed(1)}
      </span>
    </div>
  );
}

function ReviewBar({
  stars,
  count,
  max,
}: {
  stars: number;
  count: number;
  max: number;
}) {
  const pct = max > 0 ? (count / max) * 100 : 0;
  return (
    <div className="flex items-center gap-2 text-xs">
      <span className="w-3 tabular-nums text-neutral-600">{stars}</span>
      <div className="h-2 min-w-0 flex-1 overflow-hidden rounded-full bg-neutral-200">
        <div
          className="h-full rounded-full"
          style={{ width: `${pct}%`, backgroundColor: TEAL }}
        />
      </div>
      <span className="w-10 shrink-0 text-right tabular-nums text-neutral-600">
        {count.toLocaleString()}
      </span>
    </div>
  );
}

const nearbyBeaches = [
  {
    name: "THE ROCKAWAY PENINSULA",
    image: beachImages.home.nyRockaway,
    temp: "82°F",
    cond: "Flat",
    qual: "Excellent",
    location: "Queens, NY, USA",
  },
  {
    name: "JACOB RIIS PARK",
    image: beachImages.home.nyJacob,
    temp: "79°F",
    cond: "Calm",
    qual: "Optimal",
    location: "Queens, NY, USA",
  },
  {
    name: "FORT TILDEN",
    image: beachImages.home.nyFort,
    temp: "81°F",
    cond: "Ethereal",
    qual: "Pristine",
    location: "Queens, NY, USA",
  },
  {
    name: "SOUTH BEACH",
    image: beachImages.home.nySouth,
    temp: "84°F",
    cond: "Gentle",
    qual: "Pristine",
    location: "Staten Island, NY, USA",
  },
  {
    name: "MIDLAND BEACH",
    image: beachImages.home.nyMidland,
    temp: "83°F",
    cond: "Breezy",
    qual: "Ethereal",
    location: "Staten Island, NY, USA",
  },
  {
    name: "PALM COVE LAGOON",
    image: beachImages.home.stay1,
    temp: "88°F",
    cond: "Glassy",
    qual: "Crystal",
    location: "Far North QLD, Australia",
  },
  {
    name: "SUNREEF BAY",
    image: beachImages.home.stay2,
    temp: "86°F",
    cond: "1–2ft",
    qual: "Optimal",
    location: "Gold Coast, Australia",
  },
  {
    name: "COPA CABANA CREST",
    image: beachImages.home.stay3,
    temp: "85°F",
    cond: "Lively",
    qual: "Very good",
    location: "Eastern Beaches, NSW",
  },
  {
    name: "BAYWATCH NORTH",
    image: beachImages.home.stay4,
    temp: "84°F",
    cond: "Mellow",
    qual: "Pristine",
    location: "Central Coast, Australia",
  },
  {
    name: "DUNE POINT",
    image: beachImages.home.stay5,
    temp: "80°F",
    cond: "Offshore",
    qual: "Excellent",
    location: "Sydney, Australia",
  },
  {
    name: "FULHADHOO SOUTH",
    image: beachImages.trending.fulhadhoo,
    temp: "90°F",
    cond: "Glassy",
    qual: "Crystal",
    location: "Maldives, Indian Ocean",
  },
  {
    name: "WHITEHAVEN STRIP",
    image: beachImages.moods.surf,
    temp: "81°F",
    cond: "Clean",
    qual: "Pristine",
    location: "Whitsundays, QLD, Australia",
  },
  {
    name: "CONIGLI BAY",
    image: beachImages.trending.conigli,
    temp: "77°F",
    cond: "Calm",
    qual: "Top tier",
    location: "Lampedusa, Italy",
  },
  {
    name: "LAGOON CREST",
    image: beachImages.mapPanel,
    temp: "83°F",
    cond: "Light",
    qual: "Very good",
    location: "Bali, Indonesia",
  },
] as const;

export function ViewFullBeachesPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
        {/* —— Hero (Bondi) —— */}
        <section className="relative min-h-[min(92vh,900px)] w-full">
          <div className="pointer-events-none absolute inset-0">
            <Image
              src={beachImages.explore.beach3}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/20" />
          </div>

          <div className="pointer-events-none absolute right-4 top-28 flex flex-col gap-3 md:right-8 md:top-32">
            <span className="pointer-events-auto flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/80 bg-white/90 text-neutral-800 shadow-md backdrop-blur-sm">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </span>
            <span className="pointer-events-auto flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/80 bg-white/90 text-neutral-800 shadow-md backdrop-blur-sm">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </span>
            <span className="pointer-events-auto flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/80 bg-white/90 text-neutral-800 shadow-md backdrop-blur-sm">
              <svg
                width="20"
                height="20"
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
            </span>
          </div>

          <div className="relative z-10 mx-auto flex min-h-[min(92vh,900px)] max-w-7xl flex-col justify-end px-4 pb-16 pt-44 sm:px-6 lg:px-8">
            <div className="pointer-events-auto flex flex-wrap gap-2">
              <span className="rounded-full bg-amber-400/95 px-3 py-1 text-xs font-bold uppercase tracking-wide text-neutral-900 shadow-sm">
                #1 Party Beach — Australia
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-pink-500/95 px-3 py-1 text-xs font-semibold text-white shadow-sm">
                🔥 Party
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-teal-500/95 px-3 py-1 text-xs font-semibold text-white shadow-sm">
                🏄 Surf
              </span>
              <span className="rounded-full bg-amber-600/95 px-3 py-1 text-xs font-semibold text-white shadow-sm">
                Beach Clubs
              </span>
            </div>
            <h1 className="mt-4 text-4xl font-black uppercase tracking-[0.08em] text-white drop-shadow-lg sm:text-5xl md:text-6xl">
              Bondi Beach
            </h1>
            <p className="mt-2 flex flex-wrap items-center gap-2 text-sm font-medium text-white/95 drop-shadow sm:text-base">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
              Sydney, Australia • 8.4 km of coastline
            </p>
            <div className="mt-6 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-lg border border-white/20 bg-black/45 px-4 py-3 text-center backdrop-blur-md">
                <p className="text-3xl font-bold text-orange-400">9.4</p>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/70">
                  Score
                </p>
                <p className="mt-1 text-xs font-semibold text-white">
                  🔥 Party Vibe
                </p>
              </div>
              <div className="rounded-lg border border-white/20 bg-black/45 px-4 py-3 text-center backdrop-blur-md">
                <p className="text-3xl font-bold text-teal-300">8.8</p>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/70">
                  Score
                </p>
                <p className="mt-1 text-xs font-semibold text-white">
                  🌊 Surf Quality
                </p>
              </div>
              <div className="rounded-lg border border-white/20 bg-black/45 px-4 py-3 text-center backdrop-blur-md">
                <p className="text-3xl font-bold text-amber-300">4.8</p>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/70">
                  Rating
                </p>
                <p className="mt-1 flex items-center justify-center gap-1 text-xs font-semibold text-white">
                  <StarRow className="text-sm" /> 2,340 reviews
                </p>
              </div>
            </div>
            <p className="mt-10 text-center text-[10px] font-semibold uppercase tracking-[0.35em] text-white/80">
              Scroll ↓
            </p>
          </div>
        </section>

        {/* —— Statistics data bar —— */}
        <section className="border-b border-neutral-200 bg-white px-4 py-6 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-6 sm:grid-cols-4 lg:grid-cols-8">
            {[
              { icon: "💧", label: "Water Quality", val: "9.2" },
              { icon: "🌊", label: "Wave Height", val: "2.1m" },
              { icon: "🌡", label: "Water Temp", val: "29°C" },
              { icon: "☀", label: "UV Index", val: "UV 9" },
              { icon: "〰", label: "Wind", val: "18 km/h" },
              { icon: "👥", label: "Crowd Level", val: "Busy" },
              { icon: "🌅", label: "Sunrise", val: "6:02" },
              { icon: "🌇", label: "Sunset", val: "18:24" },
            ].map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center text-center"
              >
                <span className="text-xl" aria-hidden>
                  {s.icon}
                </span>
                <p className="mt-1 text-lg font-bold text-neutral-900">
                  {s.val}
                </p>
                <p className="mt-0.5 text-[11px] font-medium text-neutral-500">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* —— Gallery —— */}
        <section className="border-b border-neutral-200 bg-white px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-3 md:grid-cols-2">
            <div className="group/photo relative min-h-[320px] overflow-hidden rounded-xl bg-neutral-200 md:min-h-[420px]">
              <div className="absolute inset-0 origin-center transition-transform duration-500 ease-out will-change-transform group-hover/photo:scale-110">
                <Image
                  src={beachImages.explore.beach1}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="grid min-h-[320px] grid-cols-2 grid-rows-2 gap-3 md:min-h-[420px]">
              <div className="group/photo relative min-h-0 overflow-hidden rounded-xl bg-neutral-200">
                <div className="absolute inset-0 origin-center transition-transform duration-500 ease-out will-change-transform group-hover/photo:scale-110">
                  <Image
                    src={beachImages.explore.beach2}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
              </div>
              <div className="group/photo relative min-h-0 overflow-hidden rounded-xl bg-neutral-200">
                <div className="absolute inset-0 origin-center transition-transform duration-500 ease-out will-change-transform group-hover/photo:scale-110">
                  <Image
                    src={beachImages.explore.beach3}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
              </div>
              <div className="group/photo relative min-h-0 overflow-hidden rounded-xl bg-neutral-200">
                <div className="absolute inset-0 origin-center transition-transform duration-500 ease-out will-change-transform group-hover/photo:scale-110">
                  <Image
                    src={beachImages.explore.beach4}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
              </div>
              <div className="group/photo relative min-h-0 overflow-hidden rounded-xl bg-neutral-200">
                <div className="absolute inset-0 origin-center transition-transform duration-500 ease-out will-change-transform group-hover/photo:scale-110">
                  <Image
                    src={beachImages.explore.beach1}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                </div>
                <div className="pointer-events-none absolute bottom-3 right-3 z-[1] rounded-md bg-black/60 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                  +48 photos
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* —— Two column: main + sidebar —— */}
        <section className="border-b border-neutral-200 bg-white px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_min(360px,32%)] lg:gap-12">
            <div className="min-w-0 space-y-12">
              <div>
                <p
                  className="text-xs font-bold uppercase tracking-[0.2em]"
                  style={{ color: TEAL }}
                >
                  About This Beach
                </p>
                <h2 className="mt-2 text-2xl font-bold uppercase tracking-wide text-neutral-900 sm:text-3xl">
                  Where The Ocean Never Sleeps
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-neutral-700 sm:text-base">
                  Bondi Beach is Bali&apos;s most iconic stretch of coastline —
                  a magnet for surfers, sun-seekers, and sunset chasers from
                  every corner of the globe. The golden sand arcs between
                  headlands, framed by turquoise water that turns molten gold at
                  dusk.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-neutral-700 sm:text-base">
                  Whether you&apos;re paddling out at dawn, sipping something
                  cold at a beach club, or dancing barefoot under the stars,
                  Bondi delivers a rhythm you won&apos;t find anywhere else.
                  It&apos;s loud, luminous, and unapologetically alive.
                </p>
                <blockquote className="mt-6 rounded-xl border border-teal-100 bg-teal-50/80 px-5 py-4 text-sm italic leading-relaxed text-teal-900 sm:text-base">
                  &ldquo;The kind of beach where you arrive for a week and stay
                  for a month — the waves are infectious, and the sunsets are
                  simply unforgettable.&rdquo;
                </blockquote>
              </div>

              <div>
                <p
                  className="text-xs font-bold uppercase tracking-[0.2em]"
                  style={{ color: TEAL }}
                >
                  Beach Vibes
                </p>
                <h2
                  className="mt-2 text-xl font-bold uppercase tracking-wide sm:text-2xl"
                  style={{ color: TEAL }}
                >
                  Vibe Profile
                </h2>
                <div className="mt-4 max-w-xl">
                  <VibeBar label="Party" value={9.4} color="#f97316" />
                  <VibeBar label="Surfing" value={8.8} color="#14b8a6" />
                  <VibeBar label="Relaxation" value={6.2} color="#a855f7" />
                  <VibeBar label="Scenic" value={9} color="#eab308" />
                  <VibeBar label="Nightlife" value={9.6} color="#ec4899" />
                </div>
              </div>

              <div>
                <p
                  className="text-xs font-bold uppercase tracking-[0.2em]"
                  style={{ color: TEAL }}
                >
                  Current Conditions
                </p>
                <h2
                  className="mt-2 text-xl font-bold uppercase tracking-wide sm:text-2xl"
                  style={{ color: TEAL }}
                >
                  Today&apos;s Forecast
                </h2>
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {[
                    {
                      t: "Water Quality",
                      v: "9.2/10",
                      s: "Crystal clear visibility",
                      i: "💧",
                    },
                    {
                      t: "Wave Height",
                      v: "2.1m",
                      s: "Consistent A-frames",
                      i: "🌊",
                    },
                    {
                      t: "Water Temp",
                      v: "29°C",
                      s: "Perfect for swimming",
                      i: "🌡",
                    },
                    {
                      t: "UV Index",
                      v: "UV 9",
                      s: "Very high - SPF 50+",
                      i: "☀",
                    },
                    {
                      t: "Wind",
                      v: "18 km/h",
                      s: "Offshore - ideal surf",
                      i: "〰",
                    },
                    {
                      t: "Wave Period",
                      v: "12s",
                      s: "Long, clean sets",
                      i: "🌊",
                    },
                  ].map((c) => (
                    <div
                      key={c.t}
                      className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm"
                    >
                      <span className="text-lg" aria-hidden>
                        {c.i}
                      </span>
                      <p className="mt-2 text-lg font-bold text-neutral-900">
                        {c.v}
                      </p>
                      <p className="text-xs font-semibold text-neutral-800">
                        {c.t}
                      </p>
                      <p className="mt-1 text-[11px] text-neutral-500">{c.s}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p
                  className="text-xs font-bold uppercase tracking-[0.2em]"
                  style={{ color: TEAL }}
                >
                  Facilities
                </p>
                <h2
                  className="mt-2 text-xl font-bold uppercase tracking-wide sm:text-2xl"
                  style={{ color: TEAL }}
                >
                  What&apos;s On-Site
                </h2>
                <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-6">
                  {onSiteFacilities.map((f) => (
                    <div
                      key={f.name}
                      className="flex flex-col items-center rounded-lg border border-neutral-100 bg-neutral-50 py-3 text-center text-[10px] font-medium text-neutral-700"
                    >
                      <Image
                        src={f.icon}
                        alt=""
                        width={40}
                        height={40}
                        className="mb-1.5 h-10 w-10 object-contain"
                        aria-hidden
                      />
                      {f.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside
              className={`flex min-w-0 flex-col gap-8 lg:z-10 lg:self-start lg:sticky ${SITE_HEADER_MARKETING_SOLID_STICKY_TOP_CLASS}`}
            >
              <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-neutral-900">
                  Plan Your Beach Day
                </h3>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <StarRow />
                  <span className="text-sm font-semibold text-neutral-800">
                    4.8 · 2,340 reviews
                  </span>
                </div>
                <Link
                  href="#"
                  className="mt-4 flex w-full justify-center rounded-lg bg-brand-blue py-3 text-sm font-bold text-white shadow-md shadow-brand-cyan/20 transition hover:brightness-110"
                >
                  Book Near by Stay
                </Link>
                <div className="mt-2 flex flex-col gap-2">
                  <button
                    type="button"
                    className="w-full rounded-lg border border-neutral-200 bg-neutral-50 py-2.5 text-sm font-semibold text-neutral-800 transition hover:bg-neutral-100"
                  >
                    Book Surf Lesson
                  </button>
                  <button
                    type="button"
                    className="w-full rounded-lg border border-neutral-200 bg-neutral-50 py-2.5 text-sm font-semibold text-neutral-800 transition hover:bg-neutral-100"
                  >
                    Rent a Surfboard
                  </button>
                  <button
                    type="button"
                    className="w-full rounded-lg border border-neutral-200 bg-neutral-50 py-2.5 text-sm font-semibold text-neutral-800 transition hover:bg-neutral-100"
                  >
                    Reserve Beach Club
                  </button>
                </div>
                <ul className="mt-5 space-y-2 border-t border-neutral-100 pt-4 text-sm">
                  <li className="flex justify-between gap-2">
                    <span className="text-neutral-500">Best months</span>
                    <span className="font-semibold text-emerald-600">
                      May - Sep
                    </span>
                  </li>
                  <li className="flex justify-between gap-2">
                    <span className="text-neutral-500">Crowd now</span>
                    <span className="font-semibold text-red-600">High</span>
                  </li>
                  <li className="flex justify-between gap-2">
                    <span className="text-neutral-500">Water temp</span>
                    <span className="font-semibold text-neutral-900">29°C</span>
                  </li>
                  <li className="flex justify-between gap-2">
                    <span className="text-neutral-500">Party level</span>
                    <span className="font-semibold text-red-600">9.4 / 10</span>
                  </li>
                  <li className="flex justify-between gap-2">
                    <span className="text-neutral-500">Surf level</span>
                    <span className="font-semibold" style={{ color: TEAL }}>
                      Beginner-Inter
                    </span>
                  </li>
                </ul>
                <p className="mt-4 text-xs font-bold uppercase tracking-wide text-neutral-500">
                  Monthly Popularity
                </p>
                <div className="mt-2 flex h-24 items-end justify-between gap-1 px-1">
                  {[20, 25, 30, 40, 55, 70, 95, 88, 60, 45, 35, 30].map(
                    (h, i) => (
                      <div
                        key={i}
                        className="min-w-[6px] flex-1 rounded-t bg-brand-blue/80"
                        style={{ height: `${h}%` }}
                      />
                    ),
                  )}
                </div>
                <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm mt-10">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-bold text-neutral-900">
                      Weather Today
                    </h3>
                    <span className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                      April 2026
                    </span>
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    <span className="text-4xl" aria-hidden>
                      <Image src={beachImages.explore.weather} alt="" width={60} height={60} />
                    </span>
                    <div>
                      <p className="text-4xl font-bold tabular-nums text-neutral-900 text-[#FFD800]">
                        31°C
                      </p>
                      <p className="text-sm text-neutral-500">
                        Partly cloudy · feels 34°
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {[
                      { l: "Humidity", v: "82%" },
                      { l: "Wind", v: "18 km/h" },
                      { l: "Rain", v: "12%" },
                      { l: "Visibility", v: "10 km" },
                    ].map((w) => (
                      <div
                        key={w.l}
                        className="rounded-lg border border-neutral-100 bg-neutral-50 p-3"
                      >
                        <p className="text-lg font-bold text-neutral-900">
                          {w.v}
                        </p>
                        <p className="text-xs text-neutral-500">{w.l}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* —— Community Reviews —— */}
        <section className="border-t border-neutral-200 bg-white px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p
                  className="text-xs font-bold uppercase tracking-[0.2em]"
                  style={{ color: TEAL }}
                >
                  Community Reviews
                </p>
                <h2 className="mt-1 text-2xl font-black uppercase tracking-wide text-neutral-900 sm:text-3xl">
                  2,340 Beachgoers Agree
                </h2>
              </div>
              <Link
                href="#"
                className="text-sm font-semibold text-neutral-900 underline-offset-4 hover:underline"
              >
                View All →
              </Link>
            </div>

            <div className="mt-8 flex flex-col gap-8 rounded-xl border border-neutral-200 bg-neutral-50/50 p-6 lg:flex-row lg:items-start">
              <div className="flex shrink-0 items-start gap-4 lg:w-64">
                <div>
                  <p
                    className="text-5xl font-black tabular-nums"
                    style={{ color: TEAL }}
                  >
                    4.8
                  </p>
                  <StarRow className="mt-1 text-lg" />
                  <p className="mt-1 text-xs text-neutral-500">2,340 reviews</p>
                </div>
              </div>
              <div className="min-w-0 flex-1 space-y-1.5">
                <ReviewBar stars={5} count={1825} max={2340} />
                <ReviewBar stars={4} count={374} max={2340} />
                <ReviewBar stars={3} count={94} max={2340} />
                <ReviewBar stars={2} count={35} max={2340} />
                <ReviewBar stars={1} count={12} max={2340} />
              </div>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-1">
              {[
                {
                  initial: "S",
                  bg: "bg-orange-400",
                  name: "Sophie M.",
                  meta: "March 2025 • UK",
                  text: "Kuta completely blew me away. The sunsets are otherworldly — we watched every single one from a beach club with cocktails in hand. The surf scene is brilliant for beginners too.",
                },
                {
                  initial: "J",
                  bg: "bg-teal-500",
                  name: "Jake T.",
                  meta: "Jan 2025 • Australia",
                  text: "As an intermediate surfer, Kuta delivered every single session. Consistent 2m sets, warm water, friendly locals in the lineup. The beach bars post-surf are half the experience.",
                },
                {
                  initial: "A",
                  bg: "bg-orange-400",
                  name: "Aiko R.",
                  meta: "Dec 2024 • Japan",
                  text: "Energetic and beautiful. Can get very crowded in peak season but the atmosphere is electric. Fire shows at night are spectacular. Would avoid July- August if you prefer quieter vibes.",
                },
              ].map((r) => (
                <article
                  key={r.name}
                  className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex gap-3">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${r.bg}`}
                    >
                      {r.initial}
                    </div>
                    <div className="min-w-0">
                      <p className="font-bold text-neutral-900">{r.name}</p>
                      <p className="text-xs text-neutral-500">{r.meta}</p>
                      <StarRow className="mt-1 text-sm" />
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                    {r.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* —— Beaches Nearby —— */}
        <section className="bg-white px-4 py-12 sm:px-6 lg:px-8 mb-10">
          <div className="mx-auto max-w-7xl">
            <p
              className="text-xs font-bold uppercase tracking-[0.2em]"
              style={{ color: TEAL }}
            >
              Explore More
            </p>
            <h2 className="mt-1 text-2xl font-black sm:text-3xl">
              <span className="text-neutral-900">Beaches </span>
              <span style={{ color: TEAL }}>Nearby</span>
            </h2>
            <div className="no-scrollbar mt-8 flex snap-x snap-proximity gap-4 overflow-x-auto overscroll-x-contain pb-2">
              {nearbyBeaches.map((b) => (
                <article
                  key={b.name}
                  className="group/near w-[min(220px,75vw)] shrink-0 snap-start overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm"
                >
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100">
                    <div className="absolute inset-0 origin-center transition-transform duration-500 ease-out will-change-transform group-hover/near:scale-110">
                      <Image
                        src={b.image}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="220px"
                      />
                    </div>
                    <button
                      type="button"
                      className="absolute bottom-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-white/30 text-neutral-800 shadow backdrop-blur-sm"
                      aria-label="Save"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    </button>
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-bold uppercase leading-snug tracking-wide text-neutral-900">
                      {b.name}
                    </h3>
                    <p className="mt-1 text-xs text-neutral-500">{b.location}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      <span className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-[10px] font-semibold text-orange-700">
                        ☀ {b.temp}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-sky-50 px-2 py-1 text-[10px] font-semibold text-sky-700">
                        〰 {b.cond}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-semibold text-emerald-700">
                        💧 {b.qual}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
  );
}
