import Link from "next/link";
import { Logo } from "./logo";
import { TelegramIcon } from "./icons";
import { TELEGRAM_SUPPORT_URL } from "@/lib/config";
import SiteSearch from "./site-search";

const NAV = [
  { href: "/category/ai-chat", label: "هوش مصنوعی", icon: "🤖" },
  { href: "/category/streaming", label: "استریم", icon: "🎬" },
  { href: "/category/music", label: "موسیقی", icon: "🎵" },
  { href: "/category/vpn", label: "VPN", icon: "🔒" },
  { href: "/category/education", label: "آموزش", icon: "📚" },
  { href: "/category/tools", label: "ابزارها", icon: "⚙️" },
  { href: "/category/gaming", label: "بازی", icon: "🎮" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur-md border-b border-rule">
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
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-ink-2 hover:text-teal hover:bg-paper-3 transition"
              >
                <span className="text-base">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <SiteSearch />
            <Link
              href={TELEGRAM_SUPPORT_URL}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal text-paper text-sm font-medium hover:bg-teal-2 transition"
            >
              <TelegramIcon className="size-4" />
              پشتیبانی
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
