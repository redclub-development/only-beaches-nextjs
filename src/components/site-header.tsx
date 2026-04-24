import Image from "next/image";
import Link from "next/link";

const nav = [
  { href: "/explore", label: "Explore" },
  { href: "/beaches", label: "Beaches" },
  { href: "/events", label: "Events" },
  { href: "/activities", label: "Activities" },
  { href: "/journal", label: "Journal" },
] as const;

export type SiteHeaderVariant = "overlay" | "solid";

type SiteHeaderProps = {
  /** `overlay` = transparent on hero (default). `solid` = light bar for app pages. */
  variant?: SiteHeaderVariant;
};

/** Flow spacer / `sticky` top offset for fixed solid header (mobile includes bottom nav row). */
export const SITE_HEADER_SOLID_OFFSET_CLASS = "h-[118px] md:h-[76px]";
export const SITE_HEADER_SOLID_STICKY_TOP_CLASS =
  "top-[118px] md:top-[76px]";

/** Map panel `sticky` top: fixed header + filter chip bar (approx.). */
export const SITE_HEADER_EXPLORE_MAP_STICKY_TOP_CLASS =
  "top-[174px] md:top-[132px]";

export function SiteHeader({ variant = "overlay" }: SiteHeaderProps) {
  const solid = variant === "solid";

  const headerClass = solid
    ? "fixed left-0 right-0 top-0 z-[60] w-full border-b border-neutral-200 bg-white/95 shadow-sm backdrop-blur-sm"
    : "absolute left-0 right-0 top-0 z-50 border-b border-white/10 bg-transparent";

  const headerEl = (
    <header className={headerClass}>
      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="shrink-0 rounded-br-3xl rounded-tr-xl bg-white/95 px-4 py-3 pr-6 shadow-md backdrop-blur-sm"
        >
          <Image
            src="/Images/logo.svg"
            alt="OnlyBeaches"
            width={147}
            height={39}
            className="h-7 w-auto sm:h-8"
            priority
          />
        </Link>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex lg:gap-2"
          aria-label="Main"
        >
          {nav.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={
                solid
                  ? "rounded-full px-3 py-2 text-sm font-medium text-neutral-800 transition hover:bg-neutral-100"
                  : "rounded-full px-3 py-2 text-sm font-medium text-white drop-shadow-sm transition hover:bg-white/15 hover:text-white"
              }
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Link
            href="/sign-in"
            className={
              solid
                ? "rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-800 transition hover:bg-neutral-100"
                : "rounded-full border border-white/70 px-4 py-2 text-sm font-medium text-white drop-shadow-sm transition hover:bg-white/10"
            }
          >
            Sign In
          </Link>
          <Link
            href="/get-started"
            className="rounded-full bg-[#0095FF] px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:brightness-110"
          >
            Get Started
          </Link>
        </div>
      </div>

      <nav
        className={
          solid
            ? "flex flex-wrap justify-center gap-1 border-t border-neutral-200 bg-neutral-50/90 px-4 py-2 md:hidden"
            : "flex flex-wrap justify-center gap-1 border-t border-white/10 bg-sky-950/20 px-4 py-2 backdrop-blur-sm md:hidden"
        }
        aria-label="Main mobile"
      >
        {nav.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={
              solid
                ? "rounded-full px-2 py-1 text-xs font-medium text-neutral-800"
                : "rounded-full px-2 py-1 text-xs font-medium text-white"
            }
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );

  if (solid) {
    return (
      <>
        {headerEl}
        <div
          className={`${SITE_HEADER_SOLID_OFFSET_CLASS} w-full shrink-0`}
          aria-hidden
        />
      </>
    );
  }

  return headerEl;
}
