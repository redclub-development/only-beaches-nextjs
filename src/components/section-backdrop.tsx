import Image from "next/image";

type SectionBackdropProps = {
  src: string;
  alt: string;
  overlayClassName: string;
  priority?: boolean;
  className?: string;
};

export function SectionBackdrop({
  src,
  alt,
  overlayClassName,
  priority = false,
  className = "",
}: SectionBackdropProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 ${className}`}
      aria-hidden
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority={priority}
        quality={85}
      />
      <div className={`absolute inset-0 ${overlayClassName}`} />
    </div>
  );
}
