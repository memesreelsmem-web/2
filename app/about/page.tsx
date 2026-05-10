import { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, TELEGRAM_SUPPORT_URL, abs } from "@/lib/config";
import { TelegramIcon } from "@/app/components/icons";

export const metadata: Metadata = {
  title: `درباره ${SITE_NAME} — مارکت‌پلیس سرویس‌های جهانی برای ایرانی‌ها`,
  description: `${SITE_NAME} مارکت‌پلیس واسطه‌ای است که به ایرانیان امکان خرید قانونی اشتراک هوش مصنوعی، گیفت کارت، وی‌پی‌ان و آسِت‌های دیجیتال جهانی را با تتر USDT می‌دهد.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            url: abs("/about"),
            name: `درباره ${SITE_NAME}`,
            inLanguage: "fa-IR",
          }),
        }}
      />

      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <nav className="text-xs text-ink-3 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-teal">صفحه اصلی</Link>
          <span>/</span>
          <span className="text-ink-2">درباره ما</span>
        </nav>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-saffron-2 lat font-latin">
          About us
        </p>
        <h1 className="mt-2 text-3xl sm:text-5xl font-bold text-ink">
          ما کی هستیم؟
        </h1>
        <p className="mt-5 text-base sm:text-lg text-ink-2 leading-8">
          {SITE_NAME} یک مارکت‌پلیس واسطه‌ی متخصص برای کاربران ایرانی است. ما به
          مردم کمک می‌کنیم به سرویس‌های دیجیتالی جهانی که در ایران به‌خاطر
          تحریم، فیلترینگ یا محدودیت‌های پرداختی در دسترس نیستند، دسترسی قانونی
          و امن داشته باشند — از اشتراک ChatGPT و Claude گرفته تا گیفت کارت اپل،
          وی‌پی‌ان و مدل‌های سه‌بعدی حرفه‌ای.
        </p>

        <h2 className="mt-12 text-2xl font-bold text-ink">چه کاری می‌کنیم؟</h2>
        <p className="mt-3 text-ink-2 leading-8">
          ما به‌عنوان واسطه عمل می‌کنیم: شما در پارسی‌گیت محصول را انتخاب می‌کنید،
          پشتیبانی ما در تلگرام آدرس کیف پول USDT را به شما می‌دهد، شما تتر را
          ارسال می‌کنید و ما اشتراک یا آسِت مورد نظرتان را روی اکانت شخصی شما
          (یا با تحویل فایل) فعال می‌کنیم. در بیش از ۹۰٪ موارد کل فرآیند زیر ۱۵
          دقیقه طول می‌کشد.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-ink">چرا اعتماد کنید؟</h2>
        <ul className="mt-3 list-disc pr-6 space-y-2 text-ink-2 leading-7">
          <li>هیچ اشتراک کرک‌شده، مشترک یا VIP-Group نمی‌فروشیم.</li>
          <li>همه فعال‌سازی‌ها روی ایمیل شخصی شما انجام می‌شود؛ کنترل اکانت با شماست.</li>
          <li>گارانتی فعال‌بودن تا انتهای دوره — در صورت قطع، رایگان جایگزین می‌شود.</li>
          <li>پشتیبانی شبانه‌روزی در تلگرام، با پاسخ کمتر از ۱۰ دقیقه.</li>
          <li>پرداخت با تتر روی همه شبکه‌ها (TRC-20، TON، BEP-20، ERC-20، Polygon).</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-ink">برای کی هستیم؟</h2>
        <p className="mt-3 text-ink-2 leading-8">
          توسعه‌دهنده‌ها، طراحان، دانشجویان، تحقیق‌گرها، تولیدکنندگان محتوا،
          کسب‌وکارهای کوچک، گیمرها و هر کسی که می‌خواهد به ابزارهای جهانی
          دیجیتال دسترسی کامل داشته باشد — بدون نیاز به کارت اعتباری بین‌المللی،
          بدون VPN معلق در زمان پرداخت، و بدون ریسک مسدودی اکانت.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-ink">قیمت‌های شفاف</h2>
        <p className="mt-3 text-ink-2 leading-8">
          همه قیمت‌ها در سایت به دلار آمریکا (USD) نمایش داده می‌شوند. در زمان
          سفارش، معادل تتر USDT بر اساس قیمت لحظه‌ای از شما دریافت می‌شود. هیچ
          هزینه‌ی پنهانی وجود ندارد — کارمزد شبکه روی پلتفرم کیف پول شما (مثلاً
          نوبیتکس) محاسبه می‌شود نه روی ما.
        </p>

        <div className="mt-12 rounded-2xl border border-rule bg-paper-2 p-6">
          <p className="text-sm text-ink-2 leading-7">
            سوالی دارید یا می‌خواهید قبل از خرید مشاوره بگیرید؟ پشتیبانی ما در
            تلگرام ۲۴ ساعته آماده پاسخگویی است.
          </p>
          <Link
            href={TELEGRAM_SUPPORT_URL}
            className="mt-4 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-teal text-paper text-sm font-semibold hover:bg-teal-2"
          >
            <TelegramIcon className="size-4" />
            تماس از تلگرام
          </Link>
        </div>
      </article>
    </>
  );
}
