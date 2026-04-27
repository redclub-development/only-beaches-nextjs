import Image from "next/image";
import Link from "next/link";

const explore = [
  "World Map",
  "Top Beaches",
  "Hidden Gems",
  "By Activity",
  "By Mood",
  "Events",
] as const;
const destinations = [
  "Southeast Asia",
  "Mediterranean",
  "Caribbean",
  "Pacific Islands",
  "Indian Ocean",
  "Atlantic Coast",
] as const;
const resources = [
  "Travel Guides",
  "Beach Journal",
  "Surf Reports",
  "Weather Guide",
  "Packing Lists",
  "Visa Info",
] as const;
const company = [
  "About Us",
  "Careers",
  "Partners",
  "Press Kit",
  "Contact",
  "Privacy Policy",
] as const;

const social = [
  {
    name: "X",
    href: "https://twitter.com",
    label: "𝕏",
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    label: "f",
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    label: "◎",
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    label: "▶",
  },
  {
    name: "Threads",
    href: "https://threads.net",
    label: "@",
  },
] as const;

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly string[];
}) {
  return (
    <div>
      <h3 className="text-sm font-bold uppercase tracking-wide text-white">
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((item) => (
          <li key={item}>
            <Link
              href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-sm text-[#94A3B8] transition hover:text-white"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export type SiteFooterVariant = "home" | "app";

type SiteFooterProps = {
  /**
   * `home` — overlaps preceding wave/section (negative margin).  
   * `app` — inner pages; flush top, normal padding.
   */
  variant?: SiteFooterVariant;
};

export function SiteFooter({ variant = "home" }: SiteFooterProps) {
  const footerClass =
    variant === "home"
      ? "relative z-10 -mt-20 bg-brand-footer px-4 pb-16 pt-32 text-white sm:-mt-24 sm:px-6 sm:pt-36 lg:px-8"
      : "relative z-10 bg-brand-footer px-4 pb-16 pt-16 text-white sm:px-6 sm:pt-20 lg:px-8";

  return (
    <footer className={footerClass}>
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block">
              <Image
                src="/Images/logo.svg"
                alt="OnlyBeaches"
                width={147}
                height={39}
                className="h-9 w-auto sm:h-10"
              />
            </Link>
            <p className="mt-3 text-sm font-medium tracking-tight text-white/95">
              Endless Beaches. Endless Vibes.
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#94A3B8]">
              The world&apos;s most comprehensive platform for beach discovery,
              planning, and travel inspiration.
            </p>
            <p className="mt-8 text-sm font-medium text-white">
              Get weekly beach recommendations
            </p>
            <form className="mt-3 flex flex-col gap-2 sm:flex-row" action="#">
              <input
                type="email"
                placeholder="your@email.com"
                className="min-h-11 flex-1 rounded-lg border border-white/15 bg-black/30 px-4 text-sm text-white placeholder:text-[#64748B] focus:border-brand-subscribe focus:outline-none focus:ring-2 focus:ring-brand-subscribe/25"
              />
              <button
                type="button"
                className="rounded-lg bg-brand-subscribe px-6 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            <FooterColumn title="Explore" links={explore} />
            <FooterColumn title="Destinations" links={destinations} />
            <FooterColumn title="Resources" links={resources} />
            <FooterColumn title="Company" links={company} />
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-6 border-t border-white/10 pt-8 sm:flex-row sm:justify-between">
          <p className="text-center text-xs text-[#94A3B8] sm:text-left">
            © {new Date().getFullYear()} OnlyBeaches. All rights reserved. Made with{" "}
            <span className="text-red-500" aria-hidden>
              ❤️
            </span>{" "}
            for beach lovers everywhere.
          </p>
          <div className="flex items-center gap-3">
            {social.map(({ name, href, label }) => (
              <Link
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-sm font-bold text-white transition hover:border-white/50 hover:bg-white/5"
                aria-label={name}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
