import Link from "next/link";
import { Logo } from "./logo";
import { TelegramIcon } from "./icons";

const NAV = [
  { href: "/category/ai-chat", label: "هوش مصنوعی" },
  { href: "/category/ai-image", label: "تصویر و ویدیو" },
  { href: "/category/3d-marketplace", label: "مدل سه‌بعدی" },
  { href: "/category/vpn", label: "وی‌پی‌ان و پراکسی" },
  { href: "/category/gift-card", label: "گیفت کارت" },
  { href: "/payment", label: "پرداخت تتر" },
  { href: "/how-to-order", label: "راهنمای خرید" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-paper/85 backdrop-blur-sm border-b border-rule">
      <div className="ornament-band w-full opacity-70" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Logo />

          <nav
            className="hidden lg:flex items-center gap-1 text-sm"
            aria-label="منوی اصلی"
          >
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-md text-ink-2 hover:text-teal hover:bg-paper-2 transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="https://t.me/parsigate_support"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal text-paper text-sm font-medium hover:bg-teal-2 transition"
            >
              <TelegramIcon className="size-4" />
              پشتیبانی تلگرام
            </Link>
            <Link
              href="/category/ai-chat"
              className="lg:hidden inline-flex items-center justify-center size-10 rounded-full bg-teal text-paper"
              aria-label="جستجوی محصولات"
            >
              <SearchIcon className="size-5" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function SearchIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
      aria-hidden
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" strokeLinecap="round" />
    </svg>
  );
}
