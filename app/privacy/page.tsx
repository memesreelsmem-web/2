import { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME } from "@/lib/config";

export const metadata: Metadata = {
  title: `حریم خصوصی | ${SITE_NAME}`,
  description: `سیاست حفظ حریم خصوصی ${SITE_NAME}. چه اطلاعاتی از شما جمع‌آوری می‌شود، چگونه نگهداری می‌شود و چه کسی به آن دسترسی دارد.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <nav className="text-xs text-ink-3 mb-6 flex items-center gap-2">
        <Link href="/" className="hover:text-teal">صفحه اصلی</Link>
        <span>/</span>
        <span className="text-ink-2">حریم خصوصی</span>
      </nav>
      <h1 className="text-3xl sm:text-4xl font-bold text-ink">حریم خصوصی</h1>
      <p className="mt-4 text-ink-3 text-sm">آخرین به‌روزرسانی: اسفند ۱۴۰۴</p>

      <div className="mt-10 space-y-6 text-ink-2 leading-8">
        <section>
          <h2 className="text-xl font-bold text-ink mb-3">چه اطلاعاتی جمع‌آوری می‌کنیم؟</h2>
          <ul className="list-disc pr-6 space-y-2">
            <li>یوزرنیم تلگرام شما (برای ارتباط).</li>
            <li>ایمیل که می‌خواهید اشتراک روی آن فعال شود.</li>
            <li>هش تراکنش تتر شما (برای تأیید پرداخت).</li>
            <li>سابقه سفارش‌ها (برای پشتیبانی و گارانتی).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-ink mb-3">چه اطلاعاتی جمع‌آوری <em>نمی‌کنیم</em>؟</h2>
          <ul className="list-disc pr-6 space-y-2">
            <li>رمز عبور اکانت‌های شما (ما هرگز رمز نمی‌خواهیم).</li>
            <li>محتوای چت یا فایل‌های شما در سرویس‌های هوش مصنوعی.</li>
            <li>اطلاعات کارت بانکی (چون پرداخت با تتر است نه کارت).</li>
            <li>اطلاعات هویتی (مدارک شناسایی، کد ملی و …).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-ink mb-3">چه کسی به اطلاعات دسترسی دارد؟</h2>
          <p>
            فقط تیم پشتیبانی {SITE_NAME} برای انجام سفارش و رسیدگی به مشکلات.
            هیچ اطلاعاتی با اشخاص ثالث به اشتراک گذاشته نمی‌شود، مگر در موارد
            قانونی الزام‌آور.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-ink mb-3">نگهداری اطلاعات</h2>
          <p>
            سابقه سفارش‌ها برای ۱۲ ماه نگه داشته می‌شود (برای ارائه گارانتی).
            پس از این مدت، تمام اطلاعات شخصی به‌جز هش تراکنش‌ها حذف می‌شوند.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-ink mb-3">کوکی‌ها</h2>
          <p>
            سایت {SITE_NAME} از کوکی غیرضروری استفاده نمی‌کند. فقط کوکی‌های فنی
            پایه برای کارکرد سایت در مرورگر استفاده می‌شود.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-ink mb-3">حقوق شما</h2>
          <ul className="list-disc pr-6 space-y-2">
            <li>درخواست مشاهده اطلاعات شخصی ثبت‌شده.</li>
            <li>درخواست حذف اطلاعات شخصی.</li>
            <li>درخواست اصلاح اطلاعات.</li>
          </ul>
          <p className="mt-2">
            برای هر یک از این درخواست‌ها از طریق تلگرام پشتیبانی پیام دهید.
          </p>
        </section>
      </div>
    </article>
  );
}
