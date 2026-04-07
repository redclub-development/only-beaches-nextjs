"use client";

type CarouselControlsProps = {
  className?: string;
  /** Screenshots show controls left-aligned under the carousel */
  align?: "left" | "center";
  /** 0–1; omit for a static decorative bar (legacy sections) */
  progress?: number;
  onPrev?: () => void;
  onNext?: () => void;
};

function ChevronLeft({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M15 18l-6-6 6-6"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M9 18l6-6-6-6"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CarouselControls({
  className = "",
  align = "left",
  progress: progressProp,
  onPrev,
  onNext,
}: CarouselControlsProps) {
  const progress = progressProp ?? 0.26;
  const barPct = Math.min(100, Math.max(0, progress * 100));

  return (
    <div
      className={`mt-8 flex flex-wrap items-center gap-3 sm:gap-4 ${align === "center" ? "justify-center" : "justify-start"} ${className}`}
    >
      <button
        type="button"
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#A8DAF5] text-white shadow-sm ring-1 ring-white/60 transition hover:bg-[#8EC8EF] active:scale-95"
        aria-label="Previous"
        onClick={onPrev}
      >
        <ChevronLeft className="relative right-px" />
      </button>
      <button
        type="button"
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#A8DAF5] text-white shadow-sm ring-1 ring-white/60 transition hover:bg-[#8EC8EF] active:scale-95"
        aria-label="Next"
        onClick={onNext}
      >
        <ChevronRight className="relative left-px" />
      </button>
      <div className="h-1 min-w-[120px] flex-1 max-w-md rounded-full bg-[#D4E8F7] sm:min-w-[200px]">
        <div
          className="h-full rounded-full bg-[#0091DA] transition-all duration-150 ease-out"
          style={{ width: `${barPct}%` }}
        />
      </div>
    </div>
  );
}
