import Image from "next/image";
import Link from "next/link";
import { IconMapPin } from "@/components/icons";

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
  /**
   * When `true`, use with `variant="solid"`: location pill (light teal), Sign In as a
   * plain text link — matches browse-by-mood marketing mockups.
   */
  withLocationSelector?: boolean;
};

/** Flow spacer / `sticky` top offset for fixed solid header (mobile includes bottom nav row). */
export const SITE_HEADER_SOLID_OFFSET_CLASS = "h-[118px] md:h-[76px]";
/** Mobile keeps room for logo + bottom nav row; `md+` fixed bar height target 65px. */
export const SITE_HEADER_MARKETING_SOLID_OFFSET_CLASS = "h-[118px] md:h-[65px]";
export const SITE_HEADER_SOLID_STICKY_TOP_CLASS =
  "top-[118px] md:top-[76px]";
/** Sticky `top` when using solid header + `withLocationSelector` (matches marketing spacer). */
export const SITE_HEADER_MARKETING_SOLID_STICKY_TOP_CLASS =
  "top-[118px] md:top-[65px]";

/** Map panel `sticky` top: marketing header + explore filter chip bar (approx.). */
export const SITE_HEADER_EXPLORE_MAP_STICKY_TOP_CLASS =
  "top-[174px] md:top-[121px]";

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function SiteHeader({
  variant = "overlay",
  withLocationSelector = false,
}: SiteHeaderProps) {
  const solid = variant === "solid";
  const marketing = solid && withLocationSelector;

  const headerClass = solid
    ? marketing
      ? "fixed left-0 right-0 top-0 z-[60] w-full border-b border-neutral-200/90 bg-white shadow-[0_4px_14px_-4px_rgba(15,23,42,0.08)]"
      : "fixed left-0 right-0 top-0 z-[60] w-full border-b border-neutral-200 bg-white shadow-sm"
    : "absolute left-0 right-0 top-0 z-50 border-b border-white/10 bg-transparent";

  const logoWrapClass = marketing
    ? "shrink-0 py-0 pr-2 md:py-0"
    : "shrink-0 rounded-br-3xl rounded-tr-xl bg-white/95 px-4 py-3 pr-6 shadow-md backdrop-blur-sm";

  const headerRowClass = marketing
    ? "relative mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-2 sm:gap-3 sm:px-6 md:h-[65px] md:py-0 md:items-center lg:px-8"
    : "relative mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6 lg:px-8";

  const headerEl = (
    <header className={headerClass}>
      <div className={headerRowClass}>
        <Link
          href="/"
          className={`${logoWrapClass} ${marketing ? "flex flex-col justify-center" : ""}`}
        >
          <Image
            src="/Images/logo.svg"
            alt="OnlyBeaches"
            width={147}
            height={39}
            className={
              marketing
                ? "h-6 w-auto md:h-[26px]"
                : "h-7 w-auto sm:h-8"
            }
            priority
          />
        </Link>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-0.5 md:flex lg:gap-1"
          aria-label="Main"
        >
          {nav.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={
                marketing
                  ? "rounded-full px-2 py-1 text-xs font-medium text-neutral-800 transition hover:bg-neutral-100 md:text-[13px]"
                  : solid
                    ? "rounded-full px-3 py-2 text-sm font-medium text-neutral-800 transition hover:bg-neutral-100"
                    : "rounded-full px-3 py-2 text-sm font-medium text-white drop-shadow-sm transition hover:bg-white/15 hover:text-white"
              }
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2 md:gap-2">
          {marketing ? (
            <button
              type="button"
              className="hidden items-center gap-1.5 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-2.5 py-1 text-left text-[11px] font-semibold text-neutral-800 transition hover:bg-brand-cyan/15 lg:inline-flex lg:px-3 lg:text-xs"
            >
              <IconMapPin className="h-3.5 w-3.5 shrink-0 text-[#00CFC0]" />
              <span className="max-w-[6.5rem] truncate lg:max-w-[9rem]">
                Los Angeles, CA
              </span>
              <ChevronDown className="shrink-0 text-neutral-500" />
            </button>
          ) : null}
          <Link
            href="/sign-in"
            className={
              marketing
                ? "hidden px-1 text-xs font-medium text-neutral-600 transition hover:text-neutral-900 sm:inline md:text-[13px]"
                : solid
                  ? "rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-800 transition hover:bg-neutral-100"
                  : "rounded-full border border-white/70 px-4 py-2 text-sm font-medium text-white drop-shadow-sm transition hover:bg-white/10"
            }
          >
            Sign In
          </Link>
          <Link
            href="/get-started"
            className={
              marketing
                ? "rounded-full bg-brand-blue px-3 py-1.5 text-xs font-semibold text-white shadow-md shadow-brand-cyan/20 transition hover:brightness-110 md:text-[13px]"
                : "rounded-full bg-brand-blue px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-cyan/25 transition hover:brightness-110"
            }
          >
            Get Started
          </Link>
        </div>
      </div>

      <nav
        className={
          marketing
            ? "flex flex-wrap justify-center gap-1 border-t border-neutral-100 bg-white px-4 py-2 md:hidden"
            : solid
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
    const spacerClass = marketing
      ? SITE_HEADER_MARKETING_SOLID_OFFSET_CLASS
      : SITE_HEADER_SOLID_OFFSET_CLASS;
    return (
      <>
        {headerEl}
        <div
          className={`${spacerClass} w-full shrink-0 bg-white`}
          aria-hidden
        />
      </>
    );
  }

  return headerEl;
}
