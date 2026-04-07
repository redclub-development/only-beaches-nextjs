import Image from "next/image";
import Link from "next/link";
import { beachImages } from "@/lib/beach-images";

const filters: { label: string; active?: boolean }[] = [
  { label: "All Stories", active: true },
  { label: "Party" },
  { label: "Surf" },
  { label: "Hidden" },
  { label: "Countries" },
  { label: "Festivals" },
];

const articles = [
  {
    badge: "Guide",
    badgeClass: "bg-brand-blue",
    title: "The ultimate Bali beach guide: 30 beaches, rated",
    meta: "May 28, 2025 • 5 min read",
    excerpt:
      "From hidden coves to surf breaks — our team scored every shoreline so you can plan faster.",
    cta: "Read guide →",
    src: beachImages.home.journalThumb1,
  },
  {
    badge: "Tips",
    badgeClass: "bg-emerald-600",
    title: "How to find uncrowded beaches using our map tool",
    meta: "May 10, 2025 • 4 min read",
    excerpt:
      "Layer filters for crowd level, season, and vibe to surface beaches that feel private.",
    cta: "Read tips →",
    src: beachImages.home.journalThumb2,
  },
  {
    badge: "Tips",
    badgeClass: "bg-emerald-500",
    title: "The traveler's guide to Koh Lanta's best beaches",
    meta: "June 2, 2025 • 6 min read",
    excerpt:
      "Longtail boats, low tide sandbars, and where to catch the calmest snorkel days.",
    cta: "Read tips →",
    src: beachImages.home.journalThumb3,
  },
] as const;

export function BeachJournal() {
  return (
    <section
      className="relative overflow-hidden px-4 pb-8 pt-14 sm:px-6 lg:px-8 lg:pb-10 lg:pt-20 section-9-background "
    >
      <div className="absolute left-0 right-0 top-0 z-20 h-1" aria-hidden />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-3 flex items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-700">
            Stories & guides —
          </span>
          <span className="h-px flex-1 max-w-12 bg-neutral-400/50" />
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-3xl font-bold uppercase tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            Beach journal
          </h2>
          <Link
            href="/journal"
            className="text-sm font-semibold text-neutral-800 hover:text-brand-blue"
          >
            Read all articles →
          </Link>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
          {filters.map((f) => (
            <button
              key={f.label}
              type="button"
              className={`text-sm font-medium transition ${
                f.active
                  ? "rounded-full bg-white px-4 py-2 text-neutral-900 shadow-md shadow-neutral-900/10"
                  : "rounded-none border-0 bg-transparent px-2 py-1 text-neutral-600 hover:text-neutral-900"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:gap-10">
          <Link
            href="/journal/untouched-beaches"
            className="group relative min-h-[400px] overflow-hidden rounded-2xl border border-neutral-200/80 shadow-xl lg:col-span-7"
          >
            <Image
              src={beachImages.home.journalHero}
              alt=""
              fill
              className="object-cover transition duration-500 ease-out group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
            <span className="absolute left-4 top-4 rounded-full bg-amber-600/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
              Editorial
            </span>
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <p className="text-xs text-white/80">
                June 14, 2025 • 8 min read
              </p>
              <h3 className="mt-2 text-xl font-bold uppercase leading-tight text-white sm:text-2xl">
                The last untouched beaches: a disappearing world
              </h3>
              <p className="mt-3 max-w-lg text-sm text-white/85">
                Overtourism is reshaping coastlines faster than ever. We mapped
                the shores that still feel wild — and how to protect them.
              </p>
              <span className="mt-5 inline-flex rounded-full bg-black/50 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-md">
                Read Article →
              </span>
            </div>
          </Link>

          <ul className="flex flex-col gap-4 lg:col-span-5">
            {articles.map((a) => (
              <li key={a.title}>
                <Link
                  href="/journal"
                  className="group flex gap-4 overflow-hidden rounded-2xl border border-neutral-200/80 bg-white p-3 shadow-md transition hover:shadow-lg"
                >
                  <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-xl">
                    <Image
                      src={a.src}
                      alt=""
                      fill
                      className="object-cover transition duration-500 ease-out group-hover:scale-105"
                      sizes="112px"
                    />
                    <span
                      className={`absolute left-2 top-2 rounded px-2 py-0.5 text-[8px] font-bold uppercase tracking-wide text-white ${a.badgeClass}`}
                    >
                      {a.badge}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1 py-0.5">
                    <h4 className="text-sm font-bold uppercase leading-snug text-neutral-900">
                      {a.title}
                    </h4>
                    <p className="mt-1 text-xs text-neutral-500">{a.meta}</p>
                    <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-neutral-600">
                      {a.excerpt}
                    </p>
                    <span className="mt-2 inline-block text-xs font-semibold text-teal-600">
                      {a.cta}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
