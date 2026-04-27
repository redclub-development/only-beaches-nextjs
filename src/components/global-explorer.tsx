import Image from "next/image";
import Link from "next/link";
import { beachImages } from "@/lib/beach-images";
import {
  IconBikini,
  IconFamily,
  IconFire,
  IconLocate,
  IconMinus,
  IconMountain,
  IconPizza,
  IconPlus,
  IconSurf,
} from "@/components/icons";

const mapChips: {
  label: string;
  icon: "dot" | "fire" | "surf" | "pizza" | "mountain" | "family" | "bikini";
}[] = [
  { label: "Near me", icon: "dot" },
  { label: "Trending", icon: "fire" },
  { label: "Surfing", icon: "surf" },
  { label: "Party", icon: "pizza" },
  { label: "Hidden", icon: "mountain" },
  { label: "Family", icon: "family" },
  { label: "Bikini", icon: "bikini" },
];

const exploreMarqueeText = Array.from({ length: 24 }, () => "EXPLORE NOW").join(
  "  ·  ",
);

const mapDots: { label: string; top: string; left: string; large?: boolean }[] =
  [
    { label: "8", top: "38%", left: "44%" },
    { label: "14", top: "45%", left: "58%" },
    { label: "278", top: "52%", left: "36%", large: true },
    { label: "35", top: "33%", left: "52%" },
    { label: "11", top: "48%", left: "72%" },
    { label: "478", top: "40%", left: "70%", large: true },
  ];

function ChipIcon({ type }: { type: (typeof mapChips)[number]["icon"] }) {
  switch (type) {
    case "dot":
      return (
        <span
          className="h-2 w-2 shrink-0 rounded-full bg-red-500"
          aria-hidden
        />
      );
    case "fire":
      return <IconFire className="shrink-0 text-orange-500" />;
    case "surf":
      return <IconSurf className="shrink-0 text-brand-blue" />;
    case "pizza":
      return <IconPizza className="shrink-0 text-amber-600" />;
    case "mountain":
      return <IconMountain className="shrink-0 text-stone-600" />;
    case "family":
      return <IconFamily className="shrink-0 text-brand-blue" />;
    case "bikini":
      return <IconBikini className="shrink-0 text-brand-pink" />;
    default:
      return null;
  }
}

export function GlobalExplorer() {
  return (
    <section
      id="global-explorer"
      className="relative overflow-hidden px-4 py-14 sm:px-6 lg:px-8 lg:py-20 section-2-background "
    >
      <div
        className="pointer-events-none absolute inset-0  from-pink-50/70 via-neutral-50 to-sky-100/60"
        aria-hidden
      />
      <div
        className=" pointer-events-none absolute inset-0 opacity-70"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-3 flex items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-800">
            Global explorer
          </span>
          <span className="h-px flex-1 max-w-16 bg-neutral-800/40" />
        </div>

        <h2 className="max-w-4xl text-3xl font-bold uppercase leading-tight tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
          10,000+ beaches. <span className="text-brand-pink">One map.</span>
        </h2>
        <p className="mt-4 max-w-2xl text-base text-neutral-600 sm:text-lg">
          Find your perfect spot instantly. Filter by vibe, weather, and crowd
        </p>

        <Link
          href="/explore-beaches"
          className="mt-8 inline-flex rounded-full bg-brand-blue px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-blue/30 transition hover:bg-brand-cyan"
        >
          Start Exploring the Map →
        </Link>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {mapChips.map(({ label, icon }) => (
              <button
                key={label}
                type="button"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-200/90 bg-white/90 px-4 py-2 text-sm font-medium text-neutral-800 shadow-sm backdrop-blur-sm transition hover:border-brand-blue/40 hover:bg-white"
              >
                <ChipIcon type={icon} />
                {label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-neutral-700 sm:ml-auto">
            <span className="relative flex h-2.5 w-2.5 shrink-0" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            1.2K People exploring now
          </div>
        </div>

        <div className="relative mx-auto mt-10 w-full">
          <div
            className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-neutral-200/80 bg-neutral-200 shadow-xl shadow-neutral-900/10 sm:aspect-[16/9]"
            aria-label="Beach regions map"
          >
            <Image
              src={beachImages.mapPanel}
              alt=""
              fill
              className="object-cover object-center"
              sizes="(max-width: 1280px) 100vw, 1152px"
            />
            {mapDots.map(({ label, top, left, large }) => (
              <div
                key={`${label}-${top}`}
                className={`absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-brand-blue font-bold text-white shadow-md ${
                  large ? "h-10 min-w-10 px-1 text-[10px]" : "h-8 w-8 text-xs"
                }`}
                style={{ top, left }}
              >
                {label}
              </div>
            ))}

            <div className="absolute bottom-4 right-4 flex flex-col gap-1 rounded-xl border border-neutral-200 bg-white/95 p-1 shadow-lg backdrop-blur-sm">
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-neutral-700 transition hover:bg-neutral-100"
                aria-label="Zoom in"
              >
                <IconPlus />
              </button>
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-neutral-700 transition hover:bg-neutral-100"
                aria-label="Zoom out"
              >
                <IconMinus />
              </button>
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-neutral-700 transition hover:bg-neutral-100"
                aria-label="My location"
              >
                <IconLocate />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bg-brand-pink py-2.5 sm:py-3.5"
        style={{
          bottom: "8%",
          right: "0%",
          width: "min(220%, 1280px)",
          transform: "translate(50%, 50%) rotate(-16deg)",
          transformOrigin: "center center",
        }}
      >
        <div className="overflow-hidden">
          <div className="flex w-max animate-marquee-explore items-center motion-reduce:animate-none">
            <span className="inline-flex shrink-0 items-center whitespace-nowrap px-6 text-xs font-bold uppercase tracking-[0.35em] text-white sm:text-sm sm:tracking-[0.42em]">
              {exploreMarqueeText}
            </span>
            <span className="inline-flex shrink-0 items-center whitespace-nowrap px-6 text-xs font-bold uppercase tracking-[0.35em] text-white sm:text-sm sm:tracking-[0.42em]">
              {exploreMarqueeText}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
