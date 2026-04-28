"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import type { HotelDetailData } from "@/data/hotel-detail";
import { getStayBySlug } from "@/data/stay-near-beaches-catalog";
import { IconCalendar, IconHeart, IconWaves } from "@/components/icons";

const cx = "text-[#00CFC0]";
const cxSoft = "bg-[#00CFC0]/10 text-[#00CFC0]";
const btnPrimary =
  "inline-flex items-center justify-center rounded-full bg-[#00CFC0] px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-[#00CFC0]/25 transition hover:brightness-110";

const SIMILAR_STAY_BADGES = [
  "Best value",
  "Recommended",
  "Exclusive",
  "Family favs",
] as const;

function SectionKicker({ children }: { children: string }) {
  return (
    <div className="mb-3 flex items-center gap-3">
      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 sm:text-xs">
        {children}
      </span>
      <span className="h-px flex-1 max-w-24 bg-neutral-300" />
    </div>
  );
}

function IconShare({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v14" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconCamera({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}

function IconLock({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function IconCredit({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20" />
    </svg>
  );
}

function IconStar({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2l3 7h7l-5.5 4 2 7L12 17l-6.5 4 2-7L5 9h7z" />
    </svg>
  );
}

function IconWalk({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <circle cx="12" cy="4" r="2" />
      <path d="M10 22V12l-2-6h4l2 6v10" strokeLinecap="round" />
    </svg>
  );
}

function IconPlane({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M22 12h-6l-2-7-4 14-2-7H2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconClock({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v6l4 2" strokeLinecap="round" />
    </svg>
  );
}

function IconBuilding({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M4 22V4a1 1 0 0 1 1-1h6v18M10 22h10M9 8h1M9 12h1M14 8h1M14 12h1M14 16h1" strokeLinecap="round" />
    </svg>
  );
}

function PillIcon({ index }: { index: number }) {
  const icons = [IconWalk, IconPlane, IconClock, IconBuilding];
  const I = icons[index % icons.length];
  return <I className={`mt-0.5 h-4 w-4 shrink-0 ${cx}`} />;
}

export function HotelDetailPage({ data }: { data: HotelDetailData }) {
  const bookingCardRef = useRef<HTMLDivElement>(null);
  const b = data.booking;
  const nightsTotal = b.priceNight * b.nights;
  const grand = nightsTotal + b.resortFee + b.taxes;
  const maxReviews = Math.max(
    ...data.reviewDistribution.map((d) => d.count),
    1,
  );
  const scrollToBookingCardTop = () => {
    const bookingCard = bookingCardRef.current;
    if (!bookingCard) return;
    bookingCard.scrollTo({ top: 0, behavior: "smooth" });
    bookingCard.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="min-h-screen bg-white pb-16 pt-6 text-neutral-900 sm:pt-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Gallery */}
        <section className="mb-10 lg:mb-14">
          <div className="grid grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:grid-rows-2">
            <div className="relative aspect-[4/3] min-h-[220px] overflow-hidden rounded-2xl sm:min-h-[280px] lg:row-span-2 lg:aspect-auto lg:min-h-[420px]">
              <Image
                src={data.gallery.main}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 66vw"
                priority
              />
              <div className="absolute right-3 top-3 flex gap-2">
                <button
                  type="button"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/60"
                  aria-label="Save"
                >
                  <IconHeart className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/60"
                  aria-label="Share"
                >
                  <IconShare className="h-4 w-4" />
                </button>
              </div>
              <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-black/55 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                <IconCamera className="h-3.5 w-3.5" />
                {data.gallery.photoCount} photos
              </div>
            </div>
            <div className="relative aspect-[16/10] min-h-[140px] overflow-hidden rounded-2xl lg:min-h-0">
              <Image
                src={data.gallery.top}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
            <div className="relative aspect-[16/10] min-h-[140px] overflow-hidden rounded-2xl lg:min-h-0">
              <Image
                src={data.gallery.bottom}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
          </div>
        </section>

        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          {/* Main column */}
          <div className="min-w-0 flex-1 space-y-14 lg:space-y-16">
            {/* Title block */}
            <section>
              <div className="flex flex-wrap gap-2">
                {data.badges.map((badge) => (
                  <span
                    key={badge.label}
                    className={
                      badge.variant === "solid"
                        ? "rounded-full bg-orange-400/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white"
                        : badge.variant === "yellow"
                          ? "rounded-full bg-[#FFE14A] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-neutral-900"
                          : `rounded-full border-2 border-[#00CFC0] px-3 py-1 text-[10px] font-bold uppercase tracking-wide ${cx}`
                    }
                  >
                    {badge.label}
                  </span>
                ))}
              </div>
              <h1 className="mt-4 text-3xl font-extrabold uppercase leading-tight tracking-tight text-neutral-950 sm:text-4xl md:text-5xl">
                {data.namePrefix}{" "}
                <span className={cx}>{data.nameAccent}</span>
              </h1>
              <p className="mt-2 text-neutral-500">{data.location}</p>
              <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${cxSoft}`}
                >
                  <IconWalk className="h-3.5 w-3.5" />
                  {data.walkToBeach}
                </span>
                <span className="text-neutral-500">{data.categoryLine}</span>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <div
                  className={`flex h-14 min-w-[3.5rem] items-center justify-center rounded-lg px-2 text-xl font-extrabold text-white sm:h-16 sm:min-w-[4rem] sm:text-2xl`}
                  style={{ backgroundColor: data.accentHex }}
                >
                  {data.ratingScore}
                </div>
                <div>
                  <p className="text-lg font-bold text-neutral-900">
                    {data.ratingLabel}
                  </p>
                  <div className="mt-1 flex gap-0.5 text-[#FFD800]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <IconStar key={i} className="h-4 w-4" />
                    ))}
                  </div>
                  <p className="mt-1 text-xs text-neutral-500">
                    Based on {data.reviewCount.toLocaleString()} verified reviews
                  </p>
                </div>
              </div>
            </section>

            {/* About */}
            <section>
              <SectionKicker>{data.aboutKicker}</SectionKicker>
              <h2 className="text-2xl font-extrabold uppercase leading-tight tracking-tight text-neutral-950 sm:text-3xl md:text-4xl">
                {data.aboutHeading}{" "}
                <span className={cx}>{data.aboutHeadingAccent}</span>
              </h2>
              <div className="mt-6 space-y-4 text-neutral-600 leading-relaxed">
                {data.aboutParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <ul className="mt-10 grid gap-4 sm:grid-cols-2">
                {data.features.map((f) => (
                  <li
                    key={f.title}
                    className="rounded-xl border border-neutral-200 bg-neutral-50/80 p-4"
                  >
                    <p className="font-bold text-neutral-900">{f.title}</p>
                    <p className="mt-1 text-sm text-neutral-600">
                      {f.description}
                    </p>
                  </li>
                ))}
              </ul>
            </section>

            {/* Amenities */}
            <section>
              <SectionKicker>What&apos;s included</SectionKicker>
              <h2 className="text-2xl font-extrabold uppercase tracking-tight text-neutral-950 sm:text-3xl md:text-4xl">
                KEY <span className={cx}>AMENITIES</span>
              </h2>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {data.amenities.map((a) => (
                  <li
                    key={a}
                    className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-neutral-50/60 px-4 py-3 text-sm font-semibold text-neutral-900"
                  >
                    <IconWaves className={`h-4 w-4 shrink-0 ${cx}`} />
                    {a}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className="mt-6 rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-neutral-600 transition hover:bg-neutral-50"
              >
                View all {data.amenitiesMoreCount} amenities
              </button>
            </section>

            {/* Rooms */}
            <section>
              <SectionKicker>Accommodation</SectionKicker>
              <h2 className="text-2xl font-extrabold uppercase tracking-tight text-neutral-950 sm:text-3xl md:text-4xl">
                ROOMS <span className={cx}>&amp; SUITES</span>
              </h2>
              <ul className="mt-8 space-y-6">
                {data.rooms.map((room) => (
                  <li
                    key={room.id}
                    className="group overflow-hidden rounded-sm border border-transparent bg-white transition-[border-color,box-shadow] duration-200 hover:border-[#9DEBE3] hover:shadow-[0_12px_24px_rgba(17,24,39,0.14)] sm:flex sm:items-stretch"
                  >
                    <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden sm:aspect-auto sm:h-[170px] sm:w-[255px]">
                      <Image
                        src={room.image}
                        alt=""
                        fill
                        className="pointer-events-none object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        sizes="(max-width:640px) 100vw, 224px"
                      />
                      {room.badge ? (
                        <span
                          className={
                            room.badgeVariant === "orange"
                              ? "absolute left-2 top-2 z-10 rounded-md bg-orange-500 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white"
                              : `absolute left-2 top-2 z-10 rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white ${room.badgeVariant === "cyan" ? "bg-[#00CFC0]" : "bg-neutral-800"}`
                          }
                        >
                          {room.badge}
                        </span>
                      ) : null}
                      <button
                        type="button"
                        className="absolute right-2 top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-white/40 bg-white/15 text-white backdrop-blur-sm transition duration-200 hover:scale-105 hover:border-[#E39177] hover:bg-[#E39177] hover:text-white hover:shadow-[0_8px_20px_rgba(227,145,119,0.4)]"
                        aria-label="Save room"
                      >
                        <IconHeart className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <div className="min-w-0 flex-1 p-4 sm:p-6">
                      <h3 className="text-[13px] font-extrabold uppercase tracking-[0.08em] text-neutral-950 sm:text-[15px]">
                        {room.name}
                      </h3>
                      <p className="mt-1 text-xs text-neutral-500">
                        {room.guests} · {room.beds} · {room.size}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {room.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-md border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-[10px] font-medium text-neutral-600"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="mt-4 flex flex-wrap items-end justify-between gap-3">
                        <div>
                          <p className={`text-2xl font-extrabold ${cx}`}>
                            ${room.price}
                          </p>
                          {room.scarcity ? (
                            <p className="mt-1 text-xs font-semibold text-red-600">
                              {room.scarcity}
                            </p>
                          ) : (
                            <p className="mt-1 text-xs font-medium text-emerald-600">
                              Free cancellation
                            </p>
                          )}
                        </div>
                        <button
                          type="button"
                          className="inline-flex h-12 min-w-[138px] items-center justify-center rounded-full bg-[#49A7CF] px-7 text-base font-semibold text-white shadow-[0_8px_20px_rgba(73,167,207,0.25)] transition hover:brightness-105"
                          onClick={scrollToBookingCardTop}
                        >
                          Select room
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

          </div>

          {/* Booking sidebar */}
          <aside className="w-full shrink-0 lg:w-[min(100%,380px)]">
            <div
              ref={bookingCardRef}
              className="sticky top-24 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm"
            >
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="text-lg text-neutral-400 line-through">
                  ${b.priceWas}
                </span>
                <span className={`text-3xl font-extrabold ${cx}`}>
                  ${b.priceNight}
                </span>
                <span className="text-sm font-semibold text-neutral-600">
                  / night
                </span>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <label className="block text-[10px] font-bold uppercase tracking-wide text-neutral-500">
                  Check-in
                  <span className="mt-1 flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-2 py-2 text-xs font-medium text-neutral-800">
                    <IconCalendar className="h-3.5 w-3.5 text-neutral-400" />
                    {b.checkIn}
                  </span>
                </label>
                <label className="block text-[10px] font-bold uppercase tracking-wide text-neutral-500">
                  Check-out
                  <span className="mt-1 flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-2 py-2 text-xs font-medium text-neutral-800">
                    <IconCalendar className="h-3.5 w-3.5 text-neutral-400" />
                    {b.checkOut}
                  </span>
                </label>
              </div>
              <label className="mt-3 block text-[10px] font-bold uppercase tracking-wide text-neutral-500">
                Guests
                <span className="mt-1 block rounded-lg border border-neutral-200 bg-white px-3 py-2.5 text-xs font-medium text-neutral-800">
                  {b.guestsLabel}
                </span>
              </label>
              <dl className="mt-6 space-y-2 border-t border-neutral-200 pt-4 text-sm">
                <div className="flex justify-between text-neutral-600">
                  <dt>
                    ${b.priceNight} × {b.nights} nights
                  </dt>
                  <dd>${nightsTotal.toLocaleString()}</dd>
                </div>
                <div className="flex justify-between text-neutral-600">
                  <dt>Resort fee</dt>
                  <dd>${b.resortFee}</dd>
                </div>
                <div className="flex justify-between text-neutral-600">
                  <dt>Taxes &amp; fees</dt>
                  <dd>${b.taxes}</dd>
                </div>
                <div className="flex justify-between border-t border-neutral-200 pt-3 text-base font-bold text-neutral-900">
                  <dt>Total</dt>
                  <dd>${grand.toLocaleString()}</dd>
                </div>
              </dl>
              <button type="button" className={`mt-6 w-full ${btnPrimary}`}>
                Reserve now
              </button>
              <ul className="mt-6 space-y-3 text-xs text-neutral-600">
                <li className="flex gap-2">
                  <IconLock className="mt-0.5 h-4 w-4 shrink-0 text-neutral-400" />
                  No hidden fees · Price shown is final
                </li>
                <li className="flex gap-2">
                  <IconCredit className="mt-0.5 h-4 w-4 shrink-0 text-neutral-400" />
                  Pay at property option available
                </li>
                <li className="flex gap-2">
                  <IconStar className="mt-0.5 h-4 w-4 shrink-0 text-[#FFD800]" />
                  Rated{" "}
                  <span className={`font-semibold ${cx}`}>#1 in the area</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>

        <div className="mt-14 space-y-14 lg:mt-16 lg:space-y-16">
          {/* Location */}
          <section>
              <SectionKicker>{data.locationBlock.kicker}</SectionKicker>
              <h2 className="text-2xl font-extrabold uppercase leading-tight tracking-tight text-neutral-950 sm:text-3xl md:text-4xl">
                {data.locationBlock.titleLead}{" "}
                <span className={cx}>{data.locationBlock.titleAccent}</span>{" "}
                {data.locationBlock.titleTrail}
              </h2>
              <div className="relative mt-8 aspect-[21/9] min-h-[200px] overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100">
                <Image
                  src={data.locationBlock.mapImage}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 896px"
                />
              </div>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {data.locationBlock.pills.map((pill, i) => (
                  <li
                    key={`${pill.highlight}-${pill.rest}`}
                    className="flex items-start gap-2 rounded-xl border border-neutral-200 bg-neutral-50/80 px-3 py-3 text-xs font-semibold text-neutral-800"
                  >
                    <PillIcon index={i} />
                    <span>
                      <span className={cx}>{pill.highlight}</span> {pill.rest}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Beaches near */}
            <section>
              <SectionKicker>{data.beachesNear.kicker}</SectionKicker>
              <h2 className="text-2xl font-extrabold uppercase leading-tight tracking-tight text-neutral-950 sm:text-3xl md:text-4xl">
                {data.beachesNear.titleLead}{" "}
                <span className={cx}>{data.beachesNear.titleAccent}</span>{" "}
                {data.beachesNear.titleTrail}
              </h2>
              <ul className="mt-8 grid gap-6 md:grid-cols-3">
                {data.beachesNear.beaches.map((beach, beachIndex) => (
                  <li
                    key={beach.name}
                    className="group overflow-hidden rounded-2xl border border-transparent bg-white transition-[border-color,box-shadow] duration-200 hover:border-[#9DEBE3] hover:shadow-[0_12px_24px_rgba(17,24,39,0.14)]"
                  >
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={beach.image}
                        alt=""
                        fill
                        className="pointer-events-none object-cover transition-all duration-500 ease-out group-hover:scale-105 group-hover:opacity-0"
                        sizes="(max-width:768px) 100vw, 33vw"
                      />
                      <Image
                        src={
                          data.beachesNear.beaches[
                            (beachIndex + 1) % data.beachesNear.beaches.length
                          ]?.image ?? beach.image
                        }
                        alt=""
                        fill
                        className="pointer-events-none object-cover opacity-0 transition-all duration-500 ease-out group-hover:scale-105 group-hover:opacity-100"
                        sizes="(max-width:768px) 100vw, 33vw"
                      />
                      <span className="absolute bottom-2 left-2 z-10 rounded-md bg-slate-900/85 px-2 py-1 text-[10px] font-bold text-white">
                        {beach.timeLabel}
                      </span>
                      <button
                        type="button"
                        className="absolute bottom-2 right-2 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-white/15 text-white backdrop-blur-sm transition duration-200 hover:scale-105 hover:border-[#E39177] hover:bg-[#E39177] hover:text-white hover:shadow-[0_8px_20px_rgba(227,145,119,0.4)]"
                        aria-label="Save beach"
                      >
                        <IconHeart className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="p-4">
                      <h3 className="text-xs font-extrabold uppercase tracking-wide text-neutral-950">
                        {beach.name}
                      </h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {beach.conditions.map((c) => (
                          <span
                            key={c.label}
                            className="inline-flex min-w-[4.5rem] flex-col rounded-lg border border-neutral-200 bg-neutral-50 px-2 py-1 text-center"
                          >
                            <span className={`text-[10px] font-bold ${cx}`}>
                              {c.value}
                            </span>
                            <span className="text-[9px] font-medium uppercase tracking-wide text-neutral-500">
                              {c.label}
                            </span>
                          </span>
                        ))}
                      </div>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {beach.activities.map((a) => (
                          <span
                            key={a}
                            className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${cxSoft}`}
                          >
                            {a}
                          </span>
                        ))}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* Experiences */}
            <section>
              <SectionKicker>{data.experiencesKicker}</SectionKicker>
              <h2 className="text-2xl font-extrabold uppercase tracking-tight text-neutral-950 sm:text-3xl md:text-4xl">
                {data.experiencesTitleLead}{" "}
                <span className={cx}>{data.experiencesTitleAccent}</span>
              </h2>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {data.experiences.map((ex) => (
                  <li
                    key={ex.title}
                    className="group overflow-hidden rounded-sm border border-transparent bg-white transition-[border-color,box-shadow] duration-200 hover:border-[#9DEBE3] hover:shadow-[0_12px_24px_rgba(17,24,39,0.14)]"
                  >
                    <div className="relative aspect-[5/4] w-full overflow-hidden">
                      <Image
                        src={ex.image}
                        alt=""
                        fill
                        className="pointer-events-none object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        sizes="(max-width:1024px) 50vw, 25vw"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xs font-extrabold uppercase tracking-wide text-neutral-900">
                        {ex.title}
                      </h3>
                      <p className="mt-1 text-[11px] text-neutral-500">
                        {ex.subtitle}
                      </p>
                      <button
                        type="button"
                        className={`mt-3 text-xs font-bold uppercase tracking-wide ${cx}`}
                      >
                        {ex.cta}
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* Reviews */}
            <section>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <SectionKicker>{data.reviewsKicker}</SectionKicker>
                  <h2 className="text-2xl font-extrabold uppercase tracking-tight text-neutral-950 sm:text-3xl md:text-4xl">
                    {data.reviewsTitleLead}{" "}
                    <span className={cx}>{data.reviewsTitleAccent}</span>
                  </h2>
                </div>
                <Link
                  href="/"
                  className="text-xs font-semibold text-neutral-600 underline-offset-2 hover:underline"
                >
                  View all →
                </Link>
              </div>
              <div className="mt-8 rounded-2xl border border-neutral-200 bg-neutral-50/80 p-6 sm:p-8">
                <div className="flex flex-col gap-8 md:flex-row md:items-start">
                  <div className="shrink-0 text-center md:w-40 md:text-left">
                    <p className={`text-5xl font-extrabold ${cx}`}>
                      {data.reviewsScore}
                    </p>
                    <div className="mt-2 flex justify-center gap-0.5 text-[#FFD800] md:justify-start">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <IconStar key={i} className="h-4 w-4" />
                      ))}
                    </div>
                    <p className="mt-2 font-bold text-neutral-900">
                      {data.reviewsLabel}
                    </p>
                    <p className="text-sm text-neutral-500">
                      {data.reviewsCount.toLocaleString()} reviews
                    </p>
                  </div>
                  <div className="min-w-0 flex-1 space-y-2">
                    {data.reviewDistribution.map((row) => (
                      <div
                        key={row.stars}
                        className="flex items-center gap-3 text-xs"
                      >
                        <span className="w-3 font-semibold text-neutral-600">
                          {row.stars}
                        </span>
                        <div className="h-2 min-w-0 flex-1 overflow-hidden rounded-full bg-neutral-200">
                          <div
                            className="h-full rounded-full bg-[#00CFC0]"
                            style={{
                              width: `${(row.count / maxReviews) * 100}%`,
                            }}
                          />
                        </div>
                        <span className="w-8 text-right text-neutral-500">
                          {row.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <ul className="mt-8 divide-y divide-neutral-200">
                {data.reviewsList.map((r) => (
                  <li key={r.name} className="flex gap-4 py-6 first:pt-0">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${r.avatarClass}`}
                    >
                      {r.initial}
                    </div>
                    <div className="min-w-0">
                      <p className="font-bold text-neutral-900">{r.name}</p>
                      <p className="text-xs text-neutral-500">{r.meta}</p>
                      <div className="mt-2 flex gap-0.5 text-[#FFD800]">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <IconStar key={i} className="h-3.5 w-3.5" />
                        ))}
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                        {r.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex justify-center">
                <button type="button" className={btnPrimary}>
                  Load more
                </button>
              </div>
            </section>

            {/* Policies */}
            <section>
              <p className={`text-xs font-bold uppercase tracking-[0.2em] ${cx}`}>
                {data.policiesKicker}
              </p>
              <h2 className="mt-2 text-2xl font-extrabold uppercase tracking-tight text-neutral-950 sm:text-3xl md:text-4xl">
                {data.policiesTitleLead}{" "}
                <span className={cx}>{data.policiesTitleAccent}</span>
              </h2>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {data.policies.map((pol) => (
                  <li
                    key={pol.title}
                    className="rounded-xl border border-neutral-200 bg-neutral-50/80 p-4"
                  >
                    <p className="font-bold text-neutral-900">{pol.title}</p>
                    <p className="mt-2 text-sm text-neutral-600">{pol.body}</p>
                  </li>
                ))}
              </ul>
            </section>

            {/* Similar stays */}
            <section>
              <SectionKicker>{data.similarKicker}</SectionKicker>
              <h2 className="text-2xl font-extrabold uppercase tracking-tight text-neutral-950 sm:text-3xl md:text-4xl">
                {data.similarTitleLead}{" "}
                <span className={cx}>{data.similarTitleAccent}</span>
              </h2>
              <ul
                className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {data.similarSlugs.map((slug, similarIndex) => {
                  const s = getStayBySlug(slug);
                  if (!s) return null;
                  const badge =
                    SIMILAR_STAY_BADGES[similarIndex % SIMILAR_STAY_BADGES.length];
                  return (
                    <li
                      key={`${slug}-${similarIndex}`}
                      className="relative w-[240px] shrink-0 snap-start sm:w-52 lg:w-56"
                    >
                      <Link
                        href={`/hotels/${slug}`}
                        className="group relative z-0 block overflow-hidden rounded-2xl border border-transparent bg-white shadow-[0_1px_3px_rgba(15,23,42,0.06)] transition-[border-color,box-shadow,z-index] duration-200 hover:z-10 hover:border-white hover:shadow-[0_18px_42px_rgba(15,23,42,0.22),0_0_0_1px_rgba(255,255,255,0.95)]"
                      >
                        <div className="relative aspect-[3/4] w-full overflow-hidden">
                          <Image
                            src={s.src}
                            alt=""
                            fill
                            className="pointer-events-none object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                            sizes="224px"
                          />
                          <span className="absolute left-2 top-2 rounded-md bg-[#FFE14A] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-neutral-900">
                            From ${s.from}
                          </span>
                          <span className="absolute right-2 top-2 rounded-full bg-white/90 px-2 py-0.5 text-[9px] font-bold uppercase text-neutral-800">
                            {badge}
                          </span>
                        </div>
                        <div className="p-3">
                          <p className="text-[11px] font-extrabold uppercase tracking-wide text-neutral-950">
                            {s.name}
                          </p>
                          <p className="mt-0.5 text-[10px] text-neutral-500">
                            {s.place}
                          </p>
                          <div className="mt-2 flex items-center justify-between gap-2 text-[11px]">
                            <span className={`font-bold ${cx}`}>
                              ${s.night} / night
                            </span>
                            <span className="flex items-center gap-0.5 text-neutral-600">
                              <IconStar className="h-3 w-3 text-[#FFD800]" />
                              {s.rating}{" "}
                              <span className="text-neutral-400">
                                ({s.reviews})
                              </span>
                            </span>
                          </div>
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>

          {/* CTA (footer is global in SiteChrome) */}
          <section className="rounded-2xl border border-neutral-200 bg-neutral-50/60 px-6 py-12 text-center sm:px-10 sm:py-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">
              {data.cta.kicker}
            </p>
            <h2 className="mt-3 text-2xl font-extrabold uppercase leading-tight tracking-tight text-neutral-950 sm:text-3xl md:text-4xl">
              {data.cta.titleLead}{" "}
              <span className={cx}>{data.cta.titleAccent}</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm text-neutral-600">
              {data.cta.body}
            </p>
            <button type="button" className={`mt-8 ${btnPrimary}`}>
              Reserve your stay
            </button>
          </section>
        </div>
      </div>
    </main>
  );
}
