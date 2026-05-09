import { Metadata } from "next";
import Link from "next/link";
import OrderSteps from "@/app/components/order-steps";
import { TelegramIcon, CheckIcon } from "@/app/components/icons";
import Faq from "@/app/components/faq";

export const metadata: Metadata = {
  title: "راهنمای خرید — چگونه از پارسی‌گیت سفارش دهیم؟",
  description:
    "مراحل خرید اشتراک هوش مصنوعی، گیفت کارت و وی‌پی‌ان از پارسی‌گیت. سفارش از طریق تلگرام، پرداخت با تتر، تحویل کمتر از ۱۵ دقیقه.",
  alternates: { canonical: "/how-to-order" },
};

const FAQ = [
  {
    q: "آیا باید در سایت ثبت‌نام کنم؟",
    a: "نه. تمام سفارشات از طریق پشتیبانی تلگرام انجام می‌شود. نیازی به ثبت‌نام، تأیید ایمیل یا شماره موبایل نیست.",
  },
  {
    q: "اشتراک به نام من ثبت می‌شود؟",
    a: "بله. اشتراک‌ها روی اکانت ایمیل شخصی شما فعال می‌شوند. شما کنترل کامل اکانت را دارید.",
  },
  {
    q: "اگر اکانت ندارم چه باید کنم؟",
    a: "می‌توانیم در ساخت اکانت با IP خارجی کمک کنیم تا اکانت شما در امنیت کامل باشد. هزینه‌ای ندارد.",
  },
  {
    q: "اشتراک چقدر دوام دارد؟",
    a: "هر تعرفه دقیقاً همان دوره‌ای که نوشته‌شده فعال است (مثلاً اشتراک یک‌ماهه ۳۰ روز کامل). در صورت قطع زودرس، رایگان جایگزین می‌شود.",
  },
];

export default function HowToOrderPage() {
  return (
    <>
      <section className="border-b border-rule bg-paper-2/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <p className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full bg-paper border border-rule-2 text-ink-2">
            راهنمای خرید
          </p>
          <h1 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tight leading-tight max-w-3xl">
            خیلی ساده‌تر از چیزی که فکرش را می‌کنید
          </h1>
          <p className="mt-5 text-base sm:text-lg text-ink-2 leading-8 max-w-3xl">
            بدون ثبت‌نام، بدون فرم پیچیده، بدون نیاز به Wise یا Skrill. فقط
            چهار قدم: انتخاب، سفارش از تلگرام، پرداخت تتر، تحویل.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="https://t.me/parsigate_support"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-teal text-paper text-sm font-semibold hover:bg-teal-2"
            >
              <TelegramIcon className="size-4" />
              شروع سفارش
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <OrderSteps />
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-2xl border-2 border-teal bg-card p-7">
            <h2 className="text-xl font-bold text-ink">
              چه اطلاعاتی لازم است در اختیار ما بگذارید؟
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-ink-2">
              <li className="flex gap-2">
                <CheckIcon className="size-4 text-teal mt-1" />
                <span>
                  <strong>برای اشتراک‌های هوش مصنوعی و استریم:</strong> ایمیل
                  اکانت شما (مثلاً ChatGPT، Claude، Spotify).
                </span>
              </li>
              <li className="flex gap-2">
                <CheckIcon className="size-4 text-teal mt-1" />
                <span>
                  <strong>برای گیفت کارت:</strong> منطقه و مبلغ. کد فعال‌سازی
                  مستقیم به شما تحویل داده می‌شود.
                </span>
              </li>
              <li className="flex gap-2">
                <CheckIcon className="size-4 text-teal mt-1" />
                <span>
                  <strong>برای وی‌پی‌ان:</strong> ایمیل برای ارسال کانفیگ و کلید.
                </span>
              </li>
              <li className="flex gap-2">
                <CheckIcon className="size-4 text-teal mt-1" />
                <span>
                  <strong>برای مدل سه‌بعدی:</strong> لینک محصول از مارکت‌پلیس
                  مورد نظر.
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-rule bg-paper-2 p-7">
            <h2 className="text-xl font-bold text-ink">
              چه اطلاعاتی هرگز نیاز نداریم؟
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-ink-2">
              <li className="flex gap-2">
                <span className="text-vermilion mt-1">×</span>
                <span>پسورد اکانت شما</span>
              </li>
              <li className="flex gap-2">
                <span className="text-vermilion mt-1">×</span>
                <span>اطلاعات کارت بانکی</span>
              </li>
              <li className="flex gap-2">
                <span className="text-vermilion mt-1">×</span>
                <span>کد ملی، شناسه یا اطلاعات هویتی</span>
              </li>
              <li className="flex gap-2">
                <span className="text-vermilion mt-1">×</span>
                <span>شماره موبایل (مگر برای پشتیبانی صوتی)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-vermilion mt-1">×</span>
                <span>دسترسی به اکانت شما (مگر در مورد سرویس‌هایی که تنها روش فعال‌سازی هستند، که با شما هماهنگ می‌کنیم)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pb-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-6">
          سوال‌های متداول
        </h2>
        <Faq items={FAQ} />
      </section>
    </>
  );
}
