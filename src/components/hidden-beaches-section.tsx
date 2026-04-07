import Image from "next/image";
import Link from "next/link";
import { beachImages } from "@/lib/beach-images";
import { IconHeart } from "@/components/icons";

export function HiddenBeachesSection() {
  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24 section-4-background ">
      <div className=" pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-6 z-[2] select-none text-center text-[clamp(2.75rem,12vw,10rem)] font-bold uppercase leading-none tracking-tight text-neutral-200/35 sm:bottom-10"
        aria-hidden
      >
        Hidden beaches
      </div>
      <Image
        src={beachImages.home.leavesLeft}
        alt=""
        width={124}
        height={244}
        className="pointer-events-none absolute left-0 top-0 z-[2] h-[min(42vw,260px)] w-auto max-w-[min(52vw,320px)] select-none sm:h-[min(38vw,300px)] lg:h-[320px] lg:max-w-[380px]"
        aria-hidden
      />
      <Image
        src={beachImages.home.leavesRight}
        alt=""
        width={139}
        height={244}
        className="pointer-events-none absolute right-0 top-0 z-[2] h-[min(42vw,260px)] w-auto max-w-[min(52vw,320px)] select-none sm:h-[min(38vw,300px)] lg:h-[320px] lg:max-w-[380px]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl pb-20 sm:pb-24 lg:pb-28">
        <div className="mb-3 flex items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-800">
            Off the map
          </span>
          <span className="h-px flex-1 max-w-12 bg-neutral-400/60" />
        </div>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold uppercase tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
              Hidden beaches
            </h2>
            <p className="mt-4 text-neutral-600">
              Shores that remain untouched. Discover the places most travellers
              never find.
            </p>
          </div>
          <Link
            href="/beaches/hidden"
            className="shrink-0 text-sm font-semibold text-neutral-800 underline decoration-brand-blue/50 decoration-2 underline-offset-4 hover:text-brand-blue"
          >
            Uncover all secrets →
          </Link>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-12 lg:grid-rows-2">
          <div className="group relative min-h-[320px] overflow-hidden rounded-2xl border border-neutral-200/80 shadow-lg lg:col-span-7 lg:row-span-2 lg:min-h-[480px]">
            <Image
              src={beachImages.home.hiddenHero}
              alt=""
              fill
              className="object-cover transition duration-500 ease-out group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
            <Link
              href="/beaches/anse-source-dargent"
              className="absolute inset-0 z-10"
              aria-label="Anse Source d'Argent"
            />
            <span className="pointer-events-none absolute left-4 top-4 z-[5] rounded-md bg-brand-blue px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
              Secret
            </span>
            <button
              type="button"
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/90 text-neutral-700 shadow backdrop-blur-sm"
              aria-label="Save"
            >
              <IconHeart className="h-5 w-5" />
            </button>
            <div className="pointer-events-none absolute inset-0 z-[8] bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-[9] p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-yellow">
                Seychelles · Indian Ocean
              </p>
              <h3 className="mt-2 text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl">
                Anse Source d&apos;Argent
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-white/20 px-3 py-1 text-[10px] font-semibold uppercase text-white backdrop-blur-sm">
                  Boat Access Only
                </span>
                <span className="rounded-full bg-white/20 px-3 py-1 text-[10px] font-semibold uppercase text-white backdrop-blur-sm">
                  Marine Reserve
                </span>
              </div>
              <p className="mt-3 text-xs text-white/85">
                ⚓ 15 min by longtail boat · Best visited at low tide
              </p>
            </div>
          </div>

          <div className="group relative min-h-[220px] overflow-hidden rounded-2xl border border-neutral-200/80 shadow-lg lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:min-h-[232px]">
            <Image
              src={beachImages.home.hiddenPalawan}
              alt=""
              fill
              className="object-cover transition duration-500 ease-out group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
            <Link
              href="/beaches/secret-beach-palawan"
              className="absolute inset-0 z-10"
              aria-label="Secret Beach Palawan"
            />
            <span className="pointer-events-none absolute left-3 top-3 z-[5] rounded-md bg-emerald-600 px-2.5 py-1 text-[9px] font-bold uppercase text-white">
              Hidden gem
            </span>
            <button
              type="button"
              className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-white/90 text-neutral-700"
              aria-label="Save"
            >
              <IconHeart className="h-4 w-4" />
            </button>
            <div className="pointer-events-none absolute inset-0 z-[8] bg-gradient-to-t from-black/88 via-black/30 to-transparent" />
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-[9] p-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-brand-yellow">
                Philippines
              </p>
              <h3 className="mt-1 text-lg font-bold uppercase text-white">
                Secret Beach, Palawan
              </h3>
              <div className="mt-2 flex flex-wrap gap-1">
                {["Boat Access Only", "No Crowd", "Best In Sunset"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-white/15 px-2 py-0.5 text-[9px] font-semibold text-white"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="mt-2 text-[10px] text-white/85">
                🚤 20 min by speedboat · Snorkeling is best at high tide
              </p>
            </div>
          </div>

          <div className="group relative min-h-[220px] overflow-hidden rounded-2xl border border-neutral-200/80 shadow-lg lg:col-span-5 lg:col-start-8 lg:row-start-2 lg:min-h-[232px]">
            <Image
              src={beachImages.home.hiddenBarril}
              alt=""
              fill
              className="object-cover transition duration-500 ease-out group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
            <Link
              href="/beaches/praia-do-barril"
              className="absolute inset-0 z-10"
              aria-label="Praia do Barril"
            />
            <span className="pointer-events-none absolute left-3 top-3 z-[5] rounded-md bg-amber-400 px-2.5 py-1 text-[9px] font-bold uppercase text-neutral-900 shadow-sm">
              Undiscovered
            </span>
            <button
              type="button"
              className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-white/90 text-neutral-700"
              aria-label="Save"
            >
              <IconHeart className="h-4 w-4" />
            </button>
            <div className="pointer-events-none absolute inset-0 z-[8] bg-gradient-to-t from-black/88 via-black/30 to-transparent" />
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-[9] p-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-brand-yellow">
                Portugal · Atlantic
              </p>
              <h3 className="mt-1 text-lg font-bold uppercase text-white">
                Praia do Barril
              </h3>
              <div className="mt-2 flex flex-wrap gap-1">
                {["Boat Access Only", "Best for Families"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-white/15 px-2 py-0.5 text-[9px] font-semibold text-white"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="mt-2 text-[10px] text-white/85">
                🚃 Trolley Access · Peak season is crowded
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
