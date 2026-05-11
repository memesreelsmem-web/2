import { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, TELEGRAM_SUPPORT_URL, TELEGRAM_NEWS_URL, abs } from "@/lib/config";
import { TelegramIcon } from "@/app/components/icons";

export const metadata: Metadata = {
  title: `تماس با ${SITE_NAME} — پشتیبانی ۲۴ ساعته تلگرام`,
  description: `راه‌های تماس با پشتیبانی ${SITE_NAME}. سفارش، مشاوره خرید، پیگیری وضعیت اشتراک و سوال‌های فنی — همه از طریق تلگرام و کانال رسمی.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            url: abs("/contact"),
            name: `تماس با ${SITE_NAME}`,
            inLanguage: "fa-IR",
          }),
        }}
      />
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <nav className="text-xs text-ink-3 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-teal">صفحه اصلی</Link>
          <span>/</span>
          <span className="text-ink-2">تماس با ما</span>
        </nav>
        <h1 className="text-3xl sm:text-5xl font-bold text-ink">تماس با ما</h1>
        <p className="mt-4 text-base sm:text-lg text-ink-2 leading-8">
          ما تمام ارتباط‌ها را از طریق تلگرام مدیریت می‌کنیم تا سفارش‌ها سریع‌تر
          پیگیری شوند و سابقه گفتگو همیشه در اختیار شما باشد.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="rounded-2xl border-2 border-teal bg-card p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-saffron-2 lat font-latin">
              Support
            </p>
            <h2 className="mt-2 text-lg font-bold text-ink">پشتیبانی تلگرام</h2>
            <p className="mt-2 text-sm text-ink-2 leading-7">
              برای سفارش، پیگیری، رفع مشکل و مشاوره قبل از خرید. پاسخگویی
              معمولاً زیر ۱۰ دقیقه.
            </p>
            <Link
              href={TELEGRAM_SUPPORT_URL}
              className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal text-paper text-sm font-semibold hover:bg-teal-2"
            >
              <TelegramIcon className="size-4" />
              ارسال پیام
            </Link>
          </div>
          <div className="rounded-2xl border border-rule bg-card p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-saffron-2 lat font-latin">
              Channel
            </p>
            <h2 className="mt-2 text-lg font-bold text-ink">کانال تخفیف‌ها</h2>
            <p className="mt-2 text-sm text-ink-2 leading-7">
              تخفیف‌های دوره‌ای، خبرهای جدید پارسی‌گیت و راهنماهای اختصاصی برای
              مشترک‌های کانال.
            </p>
            <Link
              href={TELEGRAM_NEWS_URL}
              className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-rule-2 text-ink text-sm font-semibold hover:border-teal hover:text-teal"
            >
              <TelegramIcon className="size-4" />
              عضویت در کانال
            </Link>
          </div>
        </div>

        <h2 className="mt-12 text-xl font-bold text-ink">ساعت پاسخگویی</h2>
        <p className="mt-3 text-ink-2 leading-8">
          ۲۴ ساعته، هفت روز هفته. در ساعات ۱۰ صبح تا ۲ بامداد به وقت ایران
          میانگین پاسخ‌گویی زیر ۵ دقیقه است.
        </p>

        <h2 className="mt-10 text-xl font-bold text-ink">قبل از خرید بپرسید</h2>
        <p className="mt-3 text-ink-2 leading-8">
          اگر مطمئن نیستید چه اشتراکی برای شما مناسب است، قبل از خرید با ما
          مشورت کنید. این مشاوره رایگان است و بدون هیچ تعهدی به خرید.
        </p>
      </article>
    </>
  );
}
