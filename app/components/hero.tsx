import Link from "next/link";
import { TelegramIcon, ArrowLeftIcon, ShieldIcon, BoltIcon, CoinIcon } from "./icons";
import { TELEGRAM_SUPPORT_URL } from "@/lib/config";
import UsdtRateWidget from "./usdt-rate-widget";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-rule">
      <div
        aria-hidden
        className="absolute inset-0 tiles-shamsa opacity-60 pointer-events-none"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Trailing column in RTL (left side) — visuals */}
          <div className="lg:col-span-5 lg:order-2 relative">
            <HeroVisual />
          </div>

          {/* Leading column in RTL (right side) — text */}
          <div className="lg:col-span-7 lg:order-1">
            <div className="flex flex-wrap items-center gap-2">
              <p className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full bg-paper-2 border border-rule-2 text-ink-2">
                <span className="size-1.5 rounded-full bg-teal" />
                مارکت‌پلیس مخصوص ایرانیان — پرداخت با تتر USDT
              </p>
              <UsdtRateWidget />
            </div>

            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight">
              دروازه پارسی شما به{" "}
              <span className="text-teal">سرویس‌های جهانی</span>
            </h1>

            <p className="mt-5 max-w-xl text-base sm:text-lg leading-8 text-ink-2">
              ChatGPT، Claude، Midjourney، Cursor و ده‌ها سرویس هوش مصنوعی
              دیگر، گیفت کارت اپل و گوگل پلی، وی‌پی‌ان اختصاصی برای ایران، و
              مدل‌های سه‌بعدی از همه مارکت‌های جهانی — همه روی اکانت شخصی شما، با
              پرداخت تتر.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="/category/ai-chat"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-teal text-paper text-sm font-semibold hover:bg-teal-2 transition shadow-sm"
              >
                مشاهده کاتالوگ کامل
                <ArrowLeftIcon className="size-4" />
              </Link>
              <Link
                href={TELEGRAM_SUPPORT_URL}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-paper text-ink border border-rule-2 text-sm font-semibold hover:border-teal hover:text-teal transition"
              >
                <TelegramIcon className="size-4" />
                مشاوره تلگرام
              </Link>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-sm text-ink-2">
              <li className="inline-flex items-center gap-2">
                <BoltIcon className="size-5 text-teal" />
                تحویل کمتر از ۱۵ دقیقه
              </li>
              <li className="inline-flex items-center gap-2">
                <ShieldIcon className="size-5 text-teal" />
                اشتراک روی اکانت شخصی شما
              </li>
              <li className="inline-flex items-center gap-2">
                <CoinIcon className="size-5 text-teal" />
                پرداخت با تتر در همه شبکه‌ها
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative aspect-[4/5] sm:aspect-[5/5] max-w-md mx-auto">
      {/* Inner medallion */}
      <div
        aria-hidden
        className="absolute inset-6 rounded-full border-2 border-saffron/40"
      />
      <div
        aria-hidden
        className="absolute inset-12 rounded-full border border-saffron/30"
      />

      {/* Big 8-pointed star centerpiece */}
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 w-full h-full"
        aria-hidden
      >
        <defs>
          <radialGradient id="medallion" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#0d6f6a" />
            <stop offset="100%" stopColor="#094f4a" />
          </radialGradient>
          <pattern
            id="medGrain"
            width="4"
            height="4"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="0.5" fill="rgba(255,255,255,0.06)" />
          </pattern>
        </defs>
        <g transform="translate(200 200)">
          <path
            d="M0 -150 L40 -45 L150 -40 L65 25 L100 130 L0 75 L-100 130 L-65 25 L-150 -40 L-40 -45 Z"
            fill="url(#medallion)"
          />
          <path
            d="M0 -150 L40 -45 L150 -40 L65 25 L100 130 L0 75 L-100 130 L-65 25 L-150 -40 L-40 -45 Z"
            fill="url(#medGrain)"
          />
          <path
            d="M0 -150 L40 -45 L150 -40 L65 25 L100 130 L0 75 L-100 130 L-65 25 L-150 -40 L-40 -45 Z"
            fill="none"
            stroke="#e8c870"
            strokeWidth="1.5"
            strokeOpacity="0.5"
          />
          <circle r="55" fill="#fbf6e7" />
          <circle r="55" fill="none" stroke="#0d6f6a" strokeWidth="2" />
          <text
            textAnchor="middle"
            y="3"
            fill="#0d6f6a"
            fontSize="22"
            fontWeight="700"
            fontFamily="var(--font-vazir, sans-serif)"
          >
            پارسی‌گیت
          </text>
          <text
            textAnchor="middle"
            y="22"
            fill="#0d6f6a"
            fontSize="9"
            fontWeight="500"
            fontFamily="var(--font-vazir, sans-serif)"
            opacity="0.7"
          >
            از ۱۴۰۳
          </text>
        </g>
      </svg>

      {/* Floating chips */}
      <FloatingChip
        className="top-2 -right-2 sm:-right-4 rotate-[-4deg]"
        title="ChatGPT Plus"
        meta="$25 / ماه"
        color="#0d6f6a"
        mono="GPT"
      />
      <FloatingChip
        className="bottom-6 -left-2 sm:-left-4 rotate-[3deg]"
        title="Midjourney"
        meta="$38 / ماه"
        color="#1a1a2a"
        mono="MJ"
      />
      <FloatingChip
        className="bottom-32 -right-1 sm:-right-3 rotate-[-2deg]"
        title="Cursor Pro"
        meta="$25 / ماه"
        color="#1a1a1a"
        mono="Cu"
      />
      <FloatingChip
        className="top-24 -left-2 sm:-left-3 rotate-[2deg]"
        title="Outline VPN"
        meta="$9 / ماه"
        color="#a83a3a"
        mono="Ol"
      />
    </div>
  );
}

function FloatingChip({
  className = "",
  title,
  meta,
  color,
  mono,
}: {
  className?: string;
  title: string;
  meta: string;
  color: string;
  mono: string;
}) {
  return (
    <div
      className={`absolute z-10 bg-card border border-rule rounded-xl shadow-sm p-3 flex items-center gap-3 max-w-[200px] ${className}`}
    >
      <span
        className="size-9 rounded-lg flex items-center justify-center text-xs font-semibold text-paper shrink-0"
        style={{ backgroundColor: color }}
        aria-hidden
      >
        {mono}
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-[13px] font-semibold text-ink">{title}</span>
        <span className="text-[11px] text-ink-3 lat font-latin">{meta}</span>
      </span>
    </div>
  );
}
