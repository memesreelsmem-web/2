import Link from "next/link";
import { Logo } from "./logo";
import { TelegramIcon } from "./icons";
import { TELEGRAM_SUPPORT_URL } from "@/lib/config";
import SiteSearch from "./site-search";

const NAV = [
  { href: "/category/ai-chat", label: "هوش مصنوعی" },
  { href: "/category/ai-image", label: "تصویر و ویدیو" },
  { href: "/category/3d-marketplace", label: "مدل سه‌بعدی" },
  { href: "/category/vpn", label: "وی‌پی‌ان و پراکسی" },
  { href: "/category/gift-card", label: "گیفت کارت" },
  { href: "/blog", label: "بلاگ" },
  { href: "/payment", label: "پرداخت تتر" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-paper/85 backdrop-blur-sm border-b border-rule">
      <div className="ornament-band w-full opacity-70" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Logo />

          <nav
            className="hidden xl:flex items-center gap-1 text-sm"
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
            <SiteSearch />
            <Link
              href={TELEGRAM_SUPPORT_URL}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal text-paper text-sm font-medium hover:bg-teal-2 transition"
            >
              <TelegramIcon className="size-4" />
              پشتیبانی تلگرام
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
