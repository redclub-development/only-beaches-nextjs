import Image from "next/image";
import Link from "next/link";
import { beachImages } from "@/lib/beach-images";

const waveTeal = "#43C1B6";
const waveBlue = "#3A7BC8";

function IconHeart({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M12 21s-7-4.5-7-10a5 5 0 0 1 9.5-2A5 5 0 0 1 19 11c0 5.5-7 10-7 10z" />
    </svg>
  );
}

function IconFolder({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
    </svg>
  );
}

function IconShare({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="M8.6 13.5l6.8 3.5M15.4 6.5L8.6 10" />
    </svg>
  );
}

const steps = [
  { Icon: IconHeart, label: "Save Beaches" },
  { Icon: IconFolder, label: "Create Lists" },
  { Icon: IconShare, label: "Share Plans" },
] as const;

function TopWaves() {
  return (
    <div className="relative z-[1] h-[52px] w-full shrink-0 sm:h-[64px] md:h-[72px]">
      {/* Darker blue behind */}
      <svg
        className="absolute inset-x-0 bottom-0 h-[85%] w-full"
        style={{ color: waveBlue }}
        viewBox="0 0 1440 56"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          fill="currentColor"
          d="M0,56 L0,38 Q180,18 360,32 T720,30 T1080,34 T1440,28 L1440,56 Z"
        />
      </svg>
      {/* Teal in front (on top) */}
      <svg
        className="absolute inset-x-0 bottom-0 h-full w-full"
        style={{ color: waveTeal }}
        viewBox="0 0 1440 64"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          fill="currentColor"
          d="M0,64 L0,42 Q240,14 480,36 T960,32 T1440,24 L1440,64 Z"
        />
      </svg>
    </div>
  );
}

function BottomWaves() {
  return (
    <div className="relative z-[1] h-[56px] w-full shrink-0 sm:h-[68px] md:h-[80px]">
      {/* Thicker teal band (back / lower) */}
      <svg
        className="absolute inset-x-0 top-0 h-full w-full"
        style={{ color: waveTeal }}
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          fill="currentColor"
          d="M0,0 L0,22 Q200,48 400,28 T800,36 T1440,18 L1440,0 Z"
        />
      </svg>
      {/* Darker blue on top of teal */}
      <svg
        className="absolute inset-x-0 top-0 h-[70%] w-full"
        style={{ color: waveBlue }}
        viewBox="0 0 1440 56"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          fill="currentColor"
          d="M0,0 L0,16 Q220,40 440,24 T880,30 T1440,14 L1440,0 Z"
        />
      </svg>
    </div>
  );
}

export function PlanBeachTripCta() {
  return (
    <section className="relative w-full overflow-hidden bg-[#2a4a7a]">
      <TopWaves />

      <div className="relative min-h-[min(52vh,520px)] w-full">
        <Image
          src={beachImages.home.planTripBg}
          alt=""
          fill
          className="object-cover object-[center_35%]"
          sizes="100vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-[#1a1f3c]/72" />
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/40 via-transparent to-[#0f1428]/50 mix-blend-multiply" />
        <div
          className="absolute inset-0 opacity-[0.35] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
          aria-hidden
        />

        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 py-14 text-center sm:py-16 md:py-20">
          <h2 className="text-balance text-[clamp(1.75rem,5vw,3.25rem)] font-bold uppercase leading-[1.08] tracking-tight">
            <span className="text-transparent [-webkit-text-stroke:1.5px_rgb(255_255_255)] [paint-order:stroke_fill] sm:[-webkit-text-stroke-width:2px]">
              Plan your{" "}
            </span>
            <span className="text-white">beach trip</span>
          </h2>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:mt-14 sm:gap-5 md:gap-8">
            {steps.map(({ Icon, label }, i) => (
              <div key={label} className="flex items-center gap-3 sm:gap-5 md:gap-8">
                {i > 0 && (
                  <div
                    className="hidden h-px w-10 shrink-0 bg-white/95 sm:block md:w-14"
                    aria-hidden
                  />
                )}
                <div className="flex flex-col items-center gap-2.5">
                  <div className="flex h-[3rem] w-[3rem] items-center justify-center rounded-[10px] bg-white text-neutral-800 shadow-sm sm:h-[3.25rem] sm:w-[3.25rem]">
                    <Icon className="text-neutral-800" />
                  </div>
                  <span className="max-w-[7rem] text-center text-xs font-semibold uppercase leading-snug tracking-wide text-white sm:text-[13px]">
                    {label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/plan"
            className="mt-12 inline-flex items-center gap-2 rounded-full bg-brand-cyan px-9 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-[0_0_28px_rgba(0,207,192,0.55),0_4px_14px_rgba(0,0,0,0.2)] transition hover:brightness-110 sm:mt-14"
          >
            Start Planning
            <span className="text-lg leading-none" aria-hidden>
              →
            </span>
          </Link>
        </div>
      </div>

      <BottomWaves />
    </section>
  );
}
