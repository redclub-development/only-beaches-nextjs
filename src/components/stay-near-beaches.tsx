import Image from "next/image";
import Link from "next/link";
import { HorizontalCarouselRow } from "@/components/horizontal-carousel-row";
import { IconHeartNew } from "@/components/icons";
import { staysNearBeachesCatalog } from "@/data/stay-near-beaches-catalog";

export function StayNearBeaches() {
  return (
    <section className="relative overflow-hidden px-4 py-14 sm:px-6 lg:px-8 lg:py-16 section-6-background ">
      <div className="pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-3 flex items-center gap-3">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-700 sm:text-xs">
            Planning your trip? Here are the best stays
          </span>
          <span className="h-px flex-1 max-w-20 bg-neutral-400/50" />
        </div>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="text-3xl font-bold uppercase tracking-tight text-neutral-900 sm:text-4xl">
              Stay near these beaches
            </h2>
            <p className="mt-3 max-w-xl text-neutral-600">
              Handpicked stays with the best views, just steps from the sand
            </p>
          </div>
          <Link
            href="/stays"
            className="shrink-0 text-sm font-semibold text-neutral-800 underline decoration-brand-blue/50 decoration-2 underline-offset-4 hover:text-brand-blue"
          >
            View all nearby stays →
          </Link>
        </div>

        <HorizontalCarouselRow listClassName="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {staysNearBeachesCatalog.map((s) => (
            <li
              key={s.slug}
              className="w-[78vw] shrink-0 snap-start sm:w-64 lg:w-[280px]"
            >
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200/80 bg-white shadow-md transition hover:shadow-lg">
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src={s.src}
                    alt=""
                    fill
                    className="object-cover transition duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 78vw, (max-width: 1024px) 256px, 280px"
                  />
                  <Link
                    href={`/hotels/${s.slug}`}
                    className="absolute inset-0 z-[1] rounded-2xl outline-none ring-inset focus-visible:ring-2 focus-visible:ring-[#00CFC0] focus-visible:ring-offset-2"
                    aria-label={`View ${s.name} in ${s.place}`}
                  >
                    <span className="sr-only">
                      View {s.name}, from ${s.from} per night
                    </span>
                  </Link>
                  <span className="pointer-events-none absolute left-3 top-3 z-[2] rounded-md bg-orange-500 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow">
                    From ${s.from}
                  </span>
                  <button
                    type="button"
                    className="absolute right-3 top-3 z-[3] flex h-9 w-9 items-center justify-center rounded-full border border-white/50 bg-white/90 text-neutral-700 shadow backdrop-blur-sm"
                    aria-label="Save stay"
                  >
                    <IconHeartNew className="h-4 w-4" />
                  </button>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 pt-16">
                    <h3 className="text-sm font-bold uppercase tracking-wide text-white">
                      {s.name}
                    </h3>
                    <p className="mt-1 text-xs text-white/80">{s.place}</p>
                    <p className="mt-2 text-xs text-white/90">
                      ⭐ {s.rating}{" "}
                      <span className="text-white/70">({s.reviews})</span>
                    </p>
                    <p className="mt-1 text-sm font-bold text-white">
                      ${s.night} / night
                    </p>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </HorizontalCarouselRow>
      </div>
    </section>
  );
}
