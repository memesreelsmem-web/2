import { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME } from "@/lib/config";

export const metadata: Metadata = {
  title: `بازگشت وجه | ${SITE_NAME}`,
  description: `سیاست بازگشت وجه ${SITE_NAME}. چه زمانی پولتان برمی‌گردد، چطور درخواست بدهید و فرآیند چقدر طول می‌کشد.`,
  alternates: { canonical: "/refund" },
};

export default function RefundPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <nav className="text-xs text-ink-3 mb-6 flex items-center gap-2">
        <Link href="/" className="hover:text-teal">صفحه اصلی</Link>
        <span>/</span>
        <span className="text-ink-2">بازگشت وجه</span>
      </nav>
      <h1 className="text-3xl sm:text-4xl font-bold text-ink">
        سیاست بازگشت وجه
      </h1>
      <p className="mt-4 text-ink-3 text-sm">آخرین به‌روزرسانی: اسفند ۱۴۰۴</p>

      <div className="mt-10 space-y-6 text-ink-2 leading-8">
        <section>
          <h2 className="text-xl font-bold text-ink mb-3">قبل از فعال‌سازی</h2>
          <p>
            اگر هنوز اشتراک شما فعال نشده، می‌توانید سفارش را لغو کنید. کل مبلغ
            تتر (به‌جز کارمزد شبکه) ظرف ۲۴ ساعت به کیف پول شما بازگردانده می‌شود.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-ink mb-3">پس از فعال‌سازی، ۲۴ ساعت اول</h2>
          <p>
            اگر تا ۲۴ ساعت پس از فعال‌سازی متوجه شدید اشتراک کار نمی‌کند، با
            پشتیبانی تماس بگیرید. ابتدا تلاش می‌کنیم مشکل را رفع کنیم؛ در صورت
            عدم امکان، اشتراک رایگان جایگزین می‌شود یا کل مبلغ بازگردانده
            می‌شود.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-ink mb-3">قطعی در طول دوره</h2>
          <p>
            اگر اشتراک شما قبل از پایان دوره به دلیلی غیر از سیاست‌های
            سرویس‌دهنده‌ی اصلی قطع شود، گارانتی ما عمل می‌کند:
          </p>
          <ul className="list-disc pr-6 space-y-2 mt-2">
            <li>اگر بیش از ۵۰٪ دوره باقی مانده باشد: جایگزینی رایگان یا بازگشت ۵۰٪.</li>
            <li>اگر بین ۲۰ تا ۵۰٪ دوره باقی مانده باشد: جایگزینی نسبی یا بازگشت متناسب.</li>
            <li>اگر کمتر از ۲۰٪ دوره باقی مانده باشد: گارانتی شامل نیست.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-ink mb-3">مواردی که شامل بازگشت وجه نمی‌شوند</h2>
          <ul className="list-disc pr-6 space-y-2">
            <li>تغییر نظر کاربر پس از فعال‌سازی موفق.</li>
            <li>قطع اشتراک به دلیل تخلف کاربر از قوانین سرویس‌دهنده اصلی.</li>
            <li>تغییر رمز ایمیل توسط کاربر بدون اطلاع به ما (که باعث قفل‌شدن دسترسی مدیریت اشتراک شده).</li>
            <li>گیفت کارت‌های فعال‌شده.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-ink mb-3">چگونه درخواست دهیم؟</h2>
          <ol className="list-decimal pr-6 space-y-2">
            <li>به پشتیبانی تلگرام {SITE_NAME} پیام دهید.</li>
            <li>شماره سفارش و دلیل درخواست را اعلام کنید.</li>
            <li>آدرس کیف پول USDT برای بازگشت را ارائه دهید.</li>
            <li>تیم ما ظرف ۲۴ ساعت بررسی و پاسخ می‌دهد.</li>
          </ol>
        </section>
      </div>
    </article>
  );
}
