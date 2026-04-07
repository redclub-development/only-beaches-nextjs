import Image from "next/image";

/** Served from `public/homepageBackgrounds/` (URL is root-relative, not an import). */
const FOOTER_WAVE_SRC = "/homepageBackgrounds/Section10.png";

/** Match your asset proportions; adjust if Section10.png size differs. */
const WAVE_W = 1440;
const WAVE_H = 440;

export function FooterWave() {
  return (
    <div
      className="relative z-20 isolate w-full select-none leading-none"
      aria-hidden
    >
      <Image
        src={FOOTER_WAVE_SRC}
        alt=""
        width={WAVE_W}
        height={WAVE_H}
        className="block h-auto w-full "
        sizes="100vw"
      />
    </div>
  );
}
