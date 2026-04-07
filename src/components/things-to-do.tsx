import Image from "next/image";
import Link from "next/link";
import { beachImages } from "@/lib/beach-images";

const smallCards = [
  {
    tag: "Island escapes in Hawaii",
    title: "Mediterranean sailing & island hopping",
    desc: "The most scenic sailing routes in the world, with beaches only accessible by boat.",
    src: beachImages.home.sailMed,
  },
  {
    tag: "Sunset beaches in Florida",
    title: "Aegean sea: best islands to visit",
    desc: "Set sail through the azure waters of the Aegean and discover hidden beaches.",
    src: beachImages.home.aegeanJump,
  },
  {
    tag: "Party beaches in Miami",
    title: "Pacific island paradise trail",
    desc: "Seven islands, seven beaches — each more stunning than the last.",
    src: beachImages.home.pacificSunset,
  },
] as const;

export function ThingsToDo() {
  return (
    <section className="relative overflow-x-hidden px-4 py-14 sm:px-6 lg:px-8 lg:py-20 section-7-background ">
      <div className="pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-3 flex items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-800">
            Handpicked
          </span>
          <span className="h-px flex-1 max-w-10 bg-neutral-400/50" />
        </div>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="text-2xl font-bold uppercase tracking-tight text-neutral-900 sm:text-3xl lg:text-4xl">
              Things to do near your beach
            </h2>
            <p className="mt-3 text-neutral-600">
              Top experiences around your selected beaches.
            </p>
          </div>
          <Link
            href="/experiences"
            className="shrink-0 text-sm font-semibold text-neutral-800 underline decoration-brand-blue/50 decoration-2 underline-offset-4 hover:text-brand-blue"
          >
            Explore Collection →
          </Link>
        </div>

        <Link
          href="/experiences/snorkelling"
          className="group relative mt-10 block h-[clamp(300px,56vw,600px)] w-full min-h-[300px] overflow-hidden rounded-lg border border-neutral-200/80 shadow-xl sm:h-[clamp(340px,48vw,560px)] sm:min-h-[340px] lg:h-[min(480px,52vw)] lg:min-h-[400px]"
        >
          <Image
            src={beachImages.home.snorkel}
            alt=""
            fill
            className="object-cover object-center transition duration-500 ease-out group-hover:scale-105"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/20" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
            <p className="text-xs font-bold uppercase tracking-widest text-white/90">
              Surf spots in California
            </p>
            <h3 className="mt-2 max-w-3xl text-2xl font-bold uppercase leading-tight text-white sm:text-3xl lg:text-4xl">
              World&apos;s best snorkelling & diving beaches
            </h3>
            <p className="mt-4 max-w-2xl text-sm text-white/90 sm:text-base">
              Crystal-clear waters, vibrant coral reefs, and marine life that
              will take your breath away. 24 destinations curated by marine
              biologists.
            </p>
            <span className="mt-6 inline-flex rounded-full border border-white/30 bg-black/30 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition group-hover:bg-black/40">
              Explore Collection →
            </span>
          </div>
        </Link>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {smallCards.map((c) => (
            <Link
              key={c.title}
              href="/experiences"
              className="group relative aspect-[4/5] w-full overflow-hidden rounded-lg border border-neutral-200/80 shadow-lg lg:aspect-[3/4]"
            >
              <Image
                src={c.src}
                alt=""
                fill
                className="object-cover transition duration-500 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-[10px] font-bold uppercase tracking-wider text-white/85">
                  {c.tag}
                </p>
                <h4 className="mt-2 text-sm font-bold uppercase leading-snug text-white sm:text-base">
                  {c.title}
                </h4>
                <p className="mt-2 text-xs text-white/80">{c.desc}</p>
                <span className="mt-4 inline-flex rounded-full border border-white/25 bg-black/25 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm">
                  Explore →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
