import Image from "next/image";
import Link from "next/link";
import { beachImages } from "@/lib/beach-images";

const tabs: { label: string; active?: boolean }[] = [
  { label: "Near You", active: true },
  { label: "Party" },
  { label: "Surf" },
  { label: "Music" },
];

const sideEvents = [
  {
    date: "08 JUL",
    status: "🔥 Happening this week",
    title: "Sunset Music Festival",
    place: "Tulum, Mexico",
    tags: ["Music", "Beach", "Cultural"],
  },
  {
    date: "15 JUL",
    status: "🔥 Happening this week",
    title: "International Freediving Cup",
    place: "Dahab, Egypt",
    tags: ["Sport", "Diving"],
  },
  {
    date: "28 JUL",
    status: "🔥 Almost sold out",
    title: "Full Moon Party",
    place: "Koh Pha Ngan, Thailand",
    tags: ["Party", "Nightlife"],
  },
  {
    date: "03 AUG",
    status: "🔥 Almost sold out",
    title: "Biarritz Surf Festival",
    place: "Biarritz, France",
    tags: ["Surfing", "Competition"],
  },
] as const;

export function BeachEventsLifestyle() {
  return (
    <section className="relative overflow-hidden px-4 py-14 sm:px-6 lg:px-8 lg:py-20 section-8-background ">
      <div className="pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-3 flex items-center gap-3">
          <span className="h-px w-8 bg-neutral-800/50" />
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-900">
            Upcoming events
          </span>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-3xl font-bold uppercase tracking-tight text-neutral-900 sm:text-4xl">
            Beach events & lifestyle
          </h2>
          <Link
            href="/events"
            className="text-sm font-semibold text-neutral-900 underline decoration-neutral-400 decoration-1 underline-offset-4 hover:text-brand-blue"
          >
            All events →
          </Link>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {tabs.map((t) => (
            <button
              key={t.label}
              type="button"
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                t.active
                  ? "bg-white text-neutral-900 shadow-md shadow-neutral-900/10"
                  : "bg-[#F0EEE6] text-neutral-800 hover:bg-[#e8e4d8]"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <article className="group relative min-h-[420px] overflow-hidden rounded-2xl border border-neutral-200/60 bg-neutral-900 shadow-xl">
            <Image
              src={beachImages.home.surfEvent}
              alt=""
              fill
              className="object-cover transition duration-500 ease-out group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <span className="absolute left-4 top-4 rounded-md bg-[#E8A598] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-sm">
              Featured event
            </span>
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <p className="text-sm font-semibold text-orange-400">
                🔥 Happening this week
              </p>
              <p className="mt-2 text-xs font-bold uppercase tracking-widest text-white/85">
                July 18–22, 2025 · Bali, Indonesia
              </p>
              <h3 className="mt-3 text-xl font-bold uppercase leading-tight text-white sm:text-2xl">
                World Surf League Championship Tour
              </h3>
              <p className="mt-3 max-w-md text-sm text-white/85">
                Watch the world&apos;s best surfers compete on Bali&apos;s
                legendary Keramas wave.
              </p>
              <Link
                href="/events/wsl-bali"
                className="mt-6 inline-flex rounded-xl bg-[#00A3FF] px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-cyan"
              >
                Get Tickets →
              </Link>
            </div>
          </article>

          <ul className="flex flex-col gap-4">
            {sideEvents.map((e) => (
              <li key={e.title}>
                <article className="flex gap-4 rounded-2xl border border-neutral-200/70 bg-white p-4 shadow-sm transition hover:shadow-md">
                  <div className="flex w-14 shrink-0 flex-col justify-center text-center">
                    <span className="text-lg font-bold leading-none text-slate-800">
                      {e.date.split(" ")[0]}
                    </span>
                    <span className="text-[10px] font-bold uppercase text-slate-500">
                      {e.date.split(" ")[1]}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="inline-block rounded-md bg-[#FFE8D6] px-2 py-0.5 text-[10px] font-semibold text-neutral-800">
                      {e.status}
                    </span>
                    <h4 className="mt-2 font-bold text-neutral-900">
                      {e.title}
                    </h4>
                    <p className="mt-1 text-xs text-neutral-500">
                      📍 {e.place}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {e.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-neutral-100 px-2 py-0.5 text-[10px] font-medium text-neutral-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
