import { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME } from "@/lib/config";
import { ShieldIcon, BoltIcon, CheckIcon } from "@/app/components/icons";

export const metadata: Metadata = {
  title: `گارانتی و تضمین خرید | ${SITE_NAME}`,
  description: `گارانتی ${SITE_NAME} برای همه اشتراک‌ها: تضمین فعال‌بودن تا انتهای دوره، جایگزینی رایگان در صورت قطع، و بازگشت وجه در صورت بروز مشکل.`,
  alternates: { canonical: "/guarantee" },
};

export default function GuaranteePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <nav className="text-xs text-ink-3 mb-6 flex items-center gap-2">
        <Link href="/" className="hover:text-teal">صفحه اصلی</Link>
        <span>/</span>
        <span className="text-ink-2">گارانتی</span>
      </nav>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-saffron-2 lat font-latin">
        Guarantee
      </p>
      <h1 className="mt-2 text-3xl sm:text-5xl font-bold text-ink">
        گارانتی و تضمین خرید
      </h1>
      <p className="mt-5 text-base sm:text-lg text-ink-2 leading-8">
        ما به محصول‌مان مطمئنیم و این اطمینان را به شما هم منتقل می‌کنیم. هر
        اشتراک یا آسِتی که از {SITE_NAME} می‌خرید با گارانتی کامل تا انتهای
        دوره همراه است.
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="rounded-2xl border border-rule bg-card p-6">
          <ShieldIcon className="size-7 text-teal" />
          <h3 className="mt-3 text-base font-semibold text-ink">
            فعال‌بودن تضمینی
          </h3>
          <p className="mt-2 text-sm text-ink-2 leading-7">
            تا انتهای دوره خریداری‌شده اشتراک شما فعال باقی می‌ماند.
          </p>
        </div>
        <div className="rounded-2xl border border-rule bg-card p-6">
          <BoltIcon className="size-7 text-teal" />
          <h3 className="mt-3 text-base font-semibold text-ink">
            جایگزینی رایگان
          </h3>
          <p className="mt-2 text-sm text-ink-2 leading-7">
            اگر در طول دوره قطع شد، رایگان جایگزین می‌شود.
          </p>
        </div>
        <div className="rounded-2xl border border-rule bg-card p-6">
          <CheckIcon className="size-7 text-teal" />
          <h3 className="mt-3 text-base font-semibold text-ink">
            بازگشت وجه
          </h3>
          <p className="mt-2 text-sm text-ink-2 leading-7">
            در صورت عدم امکان جایگزینی، مبلغ بازگردانده می‌شود.
          </p>
        </div>
      </div>

      <h2 className="mt-12 text-2xl font-bold text-ink">گارانتی شامل چه مواردی است؟</h2>
      <ul className="mt-3 list-disc pr-6 space-y-2 text-ink-2 leading-7">
        <li>قطع شدن اشتراک قبل از پایان دوره به دلایل فنی.</li>
        <li>عدم فعال‌سازی صحیح یا کامل اشتراک در زمان توافق.</li>
        <li>ناهماهنگی بین قابلیت‌های تبلیغ‌شده و واقعیت سرویس.</li>
        <li>مسدودی اکانت در ۲۴ ساعت اول پس از فعال‌سازی.</li>
      </ul>

      <h2 className="mt-10 text-2xl font-bold text-ink">گارانتی شامل چه مواردی نیست؟</h2>
      <ul className="mt-3 list-disc pr-6 space-y-2 text-ink-2 leading-7">
        <li>تغییرات سیاست منطقه‌ای سرویس‌دهنده اصلی (مثلاً Netflix VPN crackdown).</li>
        <li>تخلف کاربر از قوانین سرویس (اشتراک‌گذاری اکانت با تعداد زیاد، استفاده نامعقول).</li>
        <li>گیفت کارت‌های فعال‌شده.</li>
        <li>اشتراک‌های آزمایشی و تخفیف‌های ویژه (که دوره کوتاه دارند).</li>
      </ul>
    </article>
  );
}
