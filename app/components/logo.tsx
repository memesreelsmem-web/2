import Link from "next/link";

export function Logo({ size = 40 }: { size?: number }) {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 group"
      aria-label="پارسی‌گیت — صفحه اصلی"
    >
      <span
        aria-hidden
        className="relative inline-flex items-center justify-center shrink-0"
        style={{ width: size, height: size }}
      >
        <svg
          viewBox="0 0 64 64"
          width={size}
          height={size}
          className="text-teal"
          aria-hidden
        >
          <defs>
            <pattern
              id="pgGrain"
              width="3"
              height="3"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1" cy="1" r="0.4" fill="rgba(255,255,255,0.18)" />
            </pattern>
          </defs>
          <circle cx="32" cy="32" r="30" fill="currentColor" />
          <circle cx="32" cy="32" r="30" fill="url(#pgGrain)" />
          <g
            transform="translate(32 32)"
            fill="none"
            stroke="#f0d8a0"
            strokeWidth="1.4"
            strokeLinejoin="round"
          >
            <path d="M0 -22 L7 -8 L22 -7 L11 3 L15 18 L0 11 L-15 18 L-11 3 L-22 -7 L-7 -8 Z" />
            <circle r="9" />
            <path d="M0 -10 L0 10 M-10 0 L10 0" strokeOpacity="0.6" />
          </g>
        </svg>
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-lg font-semibold tracking-tight text-ink">
          پارسی‌گیت
        </span>
        <span className="text-[11px] text-ink-3 -mt-0.5">
          مارکت‌پلیس سرویس‌های جهانی
        </span>
      </span>
    </Link>
  );
}
