import Image from "next/image";
import Link from "next/link";
import { beachImages } from "@/lib/beach-images";

const moods = [
  {
    title: "Party beaches",
    count: 187,
    href: "/moods/party",
    mood: "party" as const,
    badgeClass: "bg-blue-500",
    badge: "/Images/icon1.svg",
  },
  {
    title: "Surf beaches",
    count: 512,
    href: "/moods/surf",
    mood: "surf" as const,
    badgeClass: "bg-amber-400",
    badge: "/Images/icon2.svg",
  },
  {
    title: "Hidden beaches",
    count: 187,
    href: "/moods/hidden",
    mood: "hidden" as const,
    badgeClass: "bg-violet-500",
    badge: "/Images/icon3.svg",
  },
  {
    title: "Family beaches",
    count: 512,
    href: "/moods/family",
    mood: "family" as const,
    badgeClass: "bg-slate-800",
    badge: "/Images/icon4.svg",
  },
  {
    title: "LGBTQ+ friendly beaches",
    count: 228,
    href: "/moods/lgbtq-friendly",
    mood: "lgbtq" as const,
    badgeClass: "bg-teal-500",
    badge: "/Images/icon5.svg",
  },
  {
    title: "Bikini beaches",
    count: 340,
    href: "/moods/bikini",
    mood: "bikini" as const,
    badgeClass: "bg-pink-500",
    badge: "/Images/icon6.svg",
  },
] as const;

export function FindYourVibe() {
  return (
    <section
      id="vibes"
      className="relative overflow-hidden px-4 py-14 sm:px-6 lg:px-8 lg:py-20 section-1-background "
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-3 flex items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-800">
            Find your vibe —
          </span>
          <span className="h-px flex-1 max-w-16 bg-neutral-800/40" />
        </div>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-3xl font-mono text-3xl font-bold uppercase leading-tight tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
            Find your beach in seconds
          </h2>
          <Link
            href="/browse-all-moods"
            className="shrink-0 text-sm font-semibold text-neutral-800 underline decoration-brand-blue/60 decoration-2 underline-offset-4 transition hover:text-brand-blue"
          >
            Browse all moods →
          </Link>
        </div>
        <p className="mt-4 max-w-xl text-base text-neutral-600 sm:text-lg">
          Let your mood guide your next escape.
        </p>

        <ul className="mt-10 flex gap-3 overflow-x-auto pb-2 pt-4 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-4 lg:grid lg:grid-cols-6 lg:overflow-visible [&::-webkit-scrollbar]:hidden">
          {moods.map(({ title, count, href, mood, badgeClass, badge }) => (
            <li key={href} className="w-[42vw] shrink-0 sm:w-44 lg:w-auto">
              <Link
                href={href}
                className="group relative flex aspect-[3/5] min-h-[280px] flex-col overflow-visible transition hover:shadow-xl sm:min-h-[320px]"
              >
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    src={beachImages.moods[mood]}
                    alt=""
                    fill
                    className="object-cover transition duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 1024px) 42vw, 16vw"
                  />
                </div>
                <div
                  className={`absolute left-0 -top-4 z-20 flex h-10 w-10 items-center justify-center rounded-lg text-lg shadow-md ${badgeClass}`}
                >
                  <Image src={badge} alt="" width={20} height={20} />
                </div>
                <div className="absolute inset-0 overflow-hidden bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
                <div className="relative z-10 mt-auto px-4 pb-5 text-center">
                  <span className="text-xs font-bold uppercase leading-tight tracking-wide text-white sm:text-sm">
                    {title}
                  </span>
                  <span className="mt-2 block text-xs font-medium text-white/80">
                    {count} beaches
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
