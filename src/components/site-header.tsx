import Image from "next/image";
import Link from "next/link";

const nav = [
  { href: "/explore", label: "Explore" },
  { href: "/beaches", label: "Beaches" },
  { href: "/events", label: "Events" },
  { href: "/activities", label: "Activities" },
  { href: "/journal", label: "Journal" },
] as const;

export function SiteHeader() {
  return (
    <header className="absolute left-0 right-0 top-0 z-50 border-b border-white/10 bg-transparent">
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
              className="rounded-full px-3 py-2 text-sm font-medium text-white drop-shadow-sm transition hover:bg-white/15 hover:text-white"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Link
            href="/sign-in"
            className="rounded-full border border-white/70 px-4 py-2 text-sm font-medium text-white drop-shadow-sm transition hover:bg-white/10"
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
        className="flex flex-wrap justify-center gap-1 border-t border-white/10 bg-sky-950/20 px-4 py-2 backdrop-blur-sm md:hidden"
        aria-label="Main mobile"
      >
        {nav.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="rounded-full px-2 py-1 text-xs font-medium text-white"
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
