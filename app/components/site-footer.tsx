import Link from "next/link";
import { Logo } from "./logo";
import { CATEGORIES } from "@/lib/categories";
import { TelegramIcon } from "./icons";
import {
  TELEGRAM_SUPPORT_URL,
  TELEGRAM_NEWS_URL,
  SITE_NAME,
} from "@/lib/config";

export default function SiteFooter() {
  const aiCats = CATEGORIES.filter((c) => c.group === "ai");
  const otherCats = CATEGORIES.filter((c) => c.group !== "ai");

  return (
    <footer className="mt-20 border-t border-rule bg-paper-2">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <Logo size={48} />
            <p className="mt-4 text-sm text-ink-2 leading-7 max-w-sm">
              {SITE_NAME} مارکت‌پلیسی برای کاربران ایرانی است که می‌خواهند به
              سرویس‌های جهانی هوش مصنوعی، گیفت کارت، وی‌پی‌ان و آسِت‌های دیجیتال
              دسترسی داشته باشند. همه پرداخت‌ها با تتر USDT انجام می‌شود.
            </p>

            <div className="mt-6 inline-flex flex-wrap items-center gap-2">
              <Link
                href={TELEGRAM_SUPPORT_URL}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal text-paper text-sm font-medium hover:bg-teal-2 transition"
              >
                <TelegramIcon className="size-4" />
                پشتیبانی تلگرام
              </Link>
              <Link
                href={TELEGRAM_NEWS_URL}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-rule-2 text-ink-2 text-sm hover:text-teal hover:border-teal transition"
              >
                <TelegramIcon className="size-4" />
                کانال تخفیف‌ها
              </Link>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold text-ink mb-3">
              هوش مصنوعی
            </h4>
            <ul className="space-y-2 text-sm">
              {aiCats.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/category/${c.slug}`}
                    className="text-ink-2 hover:text-teal transition"
                  >
                    {c.nameFa}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold text-ink mb-3">
              دسته‌های دیگر
            </h4>
            <ul className="space-y-2 text-sm">
              {otherCats.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/category/${c.slug}`}
                    className="text-ink-2 hover:text-teal transition"
                  >
                    {c.nameFa}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold text-ink mb-3">راهنماها</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/how-to-order" className="text-ink-2 hover:text-teal transition">
                  راهنمای خرید
                </Link>
              </li>
              <li>
                <Link href="/payment" className="text-ink-2 hover:text-teal transition">
                  پرداخت با تتر
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-ink-2 hover:text-teal transition">
                  بلاگ
                </Link>
              </li>
              <li>
                <Link href="/best/best-ai-for-iran" className="text-ink-2 hover:text-teal transition">
                  بهترین هوش مصنوعی‌ها
                </Link>
              </li>
              <li>
                <Link href="/best/best-vpn-iran" className="text-ink-2 hover:text-teal transition">
                  بهترین وی‌پی‌ان‌ها
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold text-ink mb-3">پارسی‌گیت</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-ink-2 hover:text-teal transition">
                  درباره ما
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-ink-2 hover:text-teal transition">
                  تماس با ما
                </Link>
              </li>
              <li>
                <Link href="/guarantee" className="text-ink-2 hover:text-teal transition">
                  گارانتی و تضمین
                </Link>
              </li>
              <li>
                <Link href="/refund" className="text-ink-2 hover:text-teal transition">
                  بازگشت وجه
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-ink-2 hover:text-teal transition">
                  شرایط استفاده
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-ink-2 hover:text-teal transition">
                  حریم خصوصی
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-rule flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-ink-3">
          <p>
            © {new Date().getFullYear()} {SITE_NAME} — تمامی حقوق برای کاربران
            محفوظ است.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-paper-3 border border-rule text-ink-3 lat font-latin text-[11px]">
              USDT TRC-20
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-paper-3 border border-rule text-ink-3 lat font-latin text-[11px]">
              USDT TON
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-paper-3 border border-rule text-ink-3 lat font-latin text-[11px]">
              USDT BEP-20
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-paper-3 border border-rule text-ink-3 text-[11px]">
              تتر شبکه‌های دیگر
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
