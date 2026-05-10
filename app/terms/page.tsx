import { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME } from "@/lib/config";

export const metadata: Metadata = {
  title: `شرایط استفاده | ${SITE_NAME}`,
  description: `شرایط استفاده از خدمات ${SITE_NAME}: تعهدات کاربر، تعهدات ما، محدودیت‌های مسئولیت و قوانین خرید.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <nav className="text-xs text-ink-3 mb-6 flex items-center gap-2">
        <Link href="/" className="hover:text-teal">صفحه اصلی</Link>
        <span>/</span>
        <span className="text-ink-2">شرایط استفاده</span>
      </nav>
      <h1 className="text-3xl sm:text-4xl font-bold text-ink">
        شرایط و قوانین استفاده
      </h1>
      <p className="mt-4 text-ink-3 text-sm">آخرین به‌روزرسانی: اسفند ۱۴۰۴</p>

      <div className="mt-10 space-y-6 text-ink-2 leading-8">
        <section>
          <h2 className="text-xl font-bold text-ink mb-3">۱. تعریف خدمات</h2>
          <p>
            {SITE_NAME} یک سرویس واسطه است که خرید اشتراک سرویس‌های دیجیتالی
            جهانی (هوش مصنوعی، گیفت کارت، استریم، وی‌پی‌ان) و آسِت‌های دیجیتال
            (مدل‌های سه‌بعدی، تکسچر و …) را برای کاربران ایرانی با پرداخت تتر
            USDT تسهیل می‌کند. ما خود سرویس‌ها نیستیم — صرفاً به‌عنوان واسط
            خرید عمل می‌کنیم.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-ink mb-3">۲. شرایط سفارش</h2>
          <ul className="list-disc pr-6 space-y-2">
            <li>سفارش‌ها فقط از طریق تلگرام رسمی ما پذیرفته می‌شوند.</li>
            <li>تمام قیمت‌ها به دلار آمریکا (USD) است و معادل تتر آن دریافت می‌شود.</li>
            <li>پس از پرداخت، فعال‌سازی حداکثر ۱۵ دقیقه طول می‌کشد (در بیش از ۹۰٪ موارد زیر ۵ دقیقه).</li>
            <li>کاربر باید آدرس ایمیلی که می‌خواهد اشتراک روی آن فعال شود را در زمان سفارش به ما اعلام کند.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-ink mb-3">۳. تعهدات ما</h2>
          <ul className="list-disc pr-6 space-y-2">
            <li>تحویل اشتراک فعال روی ایمیل شخصی شما در زمان توافق‌شده.</li>
            <li>گارانتی فعال‌بودن اشتراک تا انتهای دوره خریداری‌شده.</li>
            <li>پشتیبانی شبانه‌روزی برای رفع مشکلات احتمالی.</li>
            <li>محرمانه نگه‌داشتن اطلاعات کاربر (ایمیل، پرداخت‌ها، چت‌ها).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-ink mb-3">۴. تعهدات کاربر</h2>
          <ul className="list-disc pr-6 space-y-2">
            <li>ارائه آدرس ایمیل صحیح در زمان سفارش.</li>
            <li>پرداخت کامل و دقیق مبلغ تتر روی شبکه اعلام‌شده.</li>
            <li>عدم تغییر رمز ایمیل تا قبل از تأیید فعال‌سازی (در صورت لزوم برای فعال‌سازی).</li>
            <li>استفاده از اشتراک طبق شرایط سرویس‌دهنده اصلی (OpenAI، Anthropic، Adobe و …).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-ink mb-3">۵. محدودیت مسئولیت</h2>
          <p>
            {SITE_NAME} مسئولیتی در قبال تغییرات سیاست‌های سرویس‌دهنده‌های اصلی
            (مثلاً مسدودی منطقه‌ای، تغییر قیمت رسمی، یا حذف ویژگی‌ها) ندارد، اما
            در صورت بروز چنین شرایطی، در حد امکان به جایگزینی یا بازگشت
            متناسب وجه کمک می‌کند.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-ink mb-3">۶. لغو سفارش</h2>
          <p>
            سفارش‌ها قبل از فعال‌سازی قابل لغو هستند و مبلغ تتر کامل
            بازگردانده می‌شود (کارمزد شبکه از سمت کاربر). پس از فعال‌سازی،
            بازگشت وجه طبق سیاست بازگشت وجه ما انجام می‌شود.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-ink mb-3">۷. تغییر در شرایط</h2>
          <p>
            ما حق تغییر این شرایط را با اطلاع‌رسانی ۱۴ روز قبل از طریق کانال
            تلگرام برای خود محفوظ می‌داریم.
          </p>
        </section>
      </div>
    </article>
  );
}
