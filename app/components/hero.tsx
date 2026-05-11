import Link from "next/link";
import { TelegramIcon, ArrowLeftIcon, ShieldIcon, BoltIcon, CoinIcon } from "./icons";
import { TELEGRAM_SUPPORT_URL } from "@/lib/config";
import UsdtRateWidget from "./usdt-rate-widget";

const PROMO_BANNERS = [
  {
    title: "ChatGPT Plus",
    subtitle: "اشتراک رسمی روی اکانت شما",
    price: "از $25",
    gradient: "from-emerald-600 to-cyan-700",
    href: "/service/chatgpt-plus",
    emoji: "🤖",
  },
  {
    title: "Claude Pro",
    subtitle: "هوش مصنوعی پیشرفته Anthropic",
    price: "از $25",
    gradient: "from-orange-600 to-amber-700",
    href: "/service/claude-pro",
    emoji: "🧠",
  },
  {
    title: "Spotify Premium",
    subtitle: "موسیقی بدون تبلیغات",
    price: "از $2.5",
    gradient: "from-green-600 to-emerald-800",
    href: "/service/spotify-premium",
    emoji: "🎵",
  },
  {
    title: "VPN اختصاصی",
    subtitle: "تست‌شده مخصوص ایران",
    price: "از $5",
    gradient: "from-blue-600 to-indigo-800",
    href: "/category/vpn",
    emoji: "🔒",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="hero-gradient absolute inset-0 pointer-events-none" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-8 lg:pt-16 lg:pb-12">
        {/* Main hero content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 lg:order-1">
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-full bg-teal/10 border border-teal/20 text-teal">
                <span className="size-1.5 rounded-full bg-teal animate-pulse" />
                مارکت‌پلیس AI برای ایرانیان
              </span>
              <UsdtRateWidget />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight">
              خرید اشتراک{" "}
              <span className="gradient-text">سرویس‌های جهانی</span>
              <br />
              با پرداخت تتر
            </h1>

            <p className="mt-5 max-w-xl text-base sm:text-lg leading-8 text-ink-2">
              بیش از ۱۰۰۰ سرویس — ChatGPT، Claude، Midjourney، Spotify،
              Netflix و ده‌ها سرویس دیگر. فعال‌سازی روی اکانت شخصی شما.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="/category/ai-chat"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-teal text-paper text-sm font-semibold hover:bg-teal-2 transition glow-teal"
              >
                مشاهده کاتالوگ
                <ArrowLeftIcon className="size-4" />
              </Link>
              <Link
                href={TELEGRAM_SUPPORT_URL}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-paper-3 text-ink border border-rule-2 text-sm font-semibold hover:border-teal hover:text-teal transition"
              >
                <TelegramIcon className="size-4" />
                مشاوره تلگرام
              </Link>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-ink-2">
              <li className="inline-flex items-center gap-2">
                <BoltIcon className="size-5 text-teal" />
                تحویل کمتر از ۱۵ دقیقه
              </li>
              <li className="inline-flex items-center gap-2">
                <ShieldIcon className="size-5 text-teal" />
                روی اکانت شخصی شما
              </li>
              <li className="inline-flex items-center gap-2">
                <CoinIcon className="size-5 text-teal" />
                پرداخت با تتر USDT
              </li>
            </ul>
          </div>

          {/* Promo cards grid */}
          <div className="lg:col-span-5 lg:order-2">
            <div className="grid grid-cols-2 gap-3">
              {PROMO_BANNERS.map((b) => (
                <Link
                  key={b.title}
                  href={b.href}
                  className="group relative overflow-hidden rounded-2xl p-4 card-lift"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${b.gradient} opacity-90`} />
                  <div className="absolute inset-0 shimmer" />
                  <div className="relative text-white">
                    <span className="text-2xl">{b.emoji}</span>
                    <h3 className="mt-2 text-sm font-bold">{b.title}</h3>
                    <p className="text-[11px] opacity-80 mt-0.5">{b.subtitle}</p>
                    <p className="mt-2 text-xs font-semibold bg-white/20 inline-block px-2 py-0.5 rounded-full lat font-latin">
                      {b.price}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
