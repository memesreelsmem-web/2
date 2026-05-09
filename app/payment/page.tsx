import { Metadata } from "next";
import Link from "next/link";
import {
  CoinIcon,
  ShieldIcon,
  BoltIcon,
  TelegramIcon,
  CheckIcon,
} from "@/app/components/icons";
import Faq from "@/app/components/faq";

export const metadata: Metadata = {
  title: "پرداخت با تتر USDT — راهنمای کامل کاربران ایرانی",
  description:
    "روش پرداخت اشتراک‌های هوش مصنوعی، گیفت کارت و وی‌پی‌ان با تتر USDT. شبکه‌های TRC-20، TON، BEP-20، ERC-20 و Polygon. کارمزد پایین و تأیید سریع.",
  alternates: { canonical: "/payment" },
};

const NETWORKS = [
  {
    name: "TRC-20",
    label: "شبکه ترون",
    fee: "حدود ۱ دلار",
    time: "۲ تا ۵ دقیقه",
    note: "محبوب‌ترین گزینه. کارمزد بسیار پایین.",
    accent: "#a83a3a",
  },
  {
    name: "TON",
    label: "شبکه تلگرام (Toncoin)",
    fee: "زیر ۰.۱ دلار",
    time: "زیر ۱ دقیقه",
    note: "اگر داخل تلگرام کیف پول دارید، انتخاب اول.",
    accent: "#0a8aea",
  },
  {
    name: "BEP-20",
    label: "شبکه بایننس BSC",
    fee: "زیر ۰.۵ دلار",
    time: "۱ تا ۳ دقیقه",
    note: "اگر اکانت بایننس دارید، گزینه عالی.",
    accent: "#fac01a",
  },
  {
    name: "ERC-20",
    label: "شبکه اتریوم",
    fee: "متغیر، ۲ تا ۱۵ دلار",
    time: "۳ تا ۱۰ دقیقه",
    note: "فقط اگر گزینه دیگری ندارید.",
    accent: "#404a8b",
  },
  {
    name: "Polygon",
    label: "شبکه پالیگان (MATIC)",
    fee: "زیر ۰.۱ دلار",
    time: "۱ تا ۲ دقیقه",
    note: "ارزان و سریع، گزینه خوب.",
    accent: "#7a3b8f",
  },
];

const FAQ = [
  {
    q: "تتر را از کجا تهیه کنم؟",
    a: "از صرافی‌های ایرانی معتبر مثل نوبیتکس، والکس، رمزینکس و بیت‌پین می‌توانید با تومان تتر بخرید. سپس روی شبکه دلخواه (پیشنهاد ما TRC-20) به کیف پول ارسال کنید.",
  },
  {
    q: "اگر در پرداخت اشتباه کنم چه می‌شود؟",
    a: "پشتیبانی ما قبل از پرداخت همه چیز را با شما چک می‌کند. اگر اشتباهی پیش بیاید (مثلاً ارسال به شبکه اشتباه)، تلاش می‌کنیم تراکنش بازگردانده شود.",
  },
  {
    q: "میزان حداقل پرداخت چقدر است؟",
    a: "حداقل پرداخت ۵ دلار است. برای مبالغ کمتر از ۲۰ دلار، پیشنهاد می‌کنیم از TRC-20 یا TON استفاده کنید تا کارمزد شبکه نسبت به پرداخت کم نباشد.",
  },
  {
    q: "آیا رسید پرداخت می‌گیرم؟",
    a: "بله. پس از تأیید تراکنش، یک رسید رسمی در تلگرام برای شما ارسال می‌شود که شامل شناسه تراکنش، مبلغ، شبکه و سفارش است.",
  },
  {
    q: "آیا پرداخت با ارز دیگری ممکن است؟",
    a: "علاوه بر USDT، Bitcoin، Ethereum، BNB، TON و Toncoin هم پذیرفته می‌شوند. برای ارزهای دیگر با پشتیبانی هماهنگ کنید.",
  },
];

export default function PaymentPage() {
  return (
    <>
      <section className="border-b border-rule bg-paper-2/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <p className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full bg-paper border border-rule-2 text-ink-2">
            <CoinIcon className="size-4 text-teal" />
            راهنمای پرداخت ارز دیجیتال
          </p>
          <h1 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tight leading-tight max-w-3xl">
            پرداخت آسان با تتر USDT —
            <span className="text-teal"> کاملاً مخصوص ایرانیان</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-ink-2 leading-8 max-w-3xl">
            تمام پرداخت‌های پارسی‌گیت از طریق تتر USDT انجام می‌شود. این انتخاب
            باعث می‌شود نه به کارت بانکی خارجی نیاز داشته باشید، نه به Wise یا
            Skrill، نه به اکانت‌های واسطه. فقط تتر بفرستید، اشتراک‌تان فعال
            می‌شود.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-12">
          <Card
            icon={BoltIcon}
            title="کارمزد بسیار پایین"
            text="کارمزد شبکه ترون از ۱ دلار شروع می‌شود. بسیار ارزان‌تر از کارت‌های اعتباری بین‌المللی."
          />
          <Card
            icon={ShieldIcon}
            title="بدون اطلاعات بانکی"
            text="نیازی به کارت اعتباری، حساب بانکی خارجی یا KYC نیست. فقط آدرس کیف پول."
          />
          <Card
            icon={CheckIcon}
            title="رسید رسمی برای شما"
            text="پس از پرداخت رسید با شناسه تراکنش از طرف ما برایتان ارسال می‌شود."
          />
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-6">
          شبکه‌های پشتیبانی‌شده
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {NETWORKS.map((n) => (
            <div
              key={n.name}
              className="rounded-2xl border border-rule bg-card p-6 relative overflow-hidden"
            >
              <span
                className="absolute top-0 right-0 w-1.5 h-full"
                style={{ background: n.accent }}
              />
              <h3 className="text-xl font-bold text-ink lat font-latin">
                USDT · {n.name}
              </h3>
              <p className="text-xs text-ink-3 mt-1">{n.label}</p>
              <ul className="mt-4 space-y-2 text-sm text-ink-2">
                <li className="flex justify-between">
                  <span>کارمزد</span>
                  <span className="font-medium">{n.fee}</span>
                </li>
                <li className="flex justify-between">
                  <span>زمان تأیید</span>
                  <span className="font-medium">{n.time}</span>
                </li>
              </ul>
              <p className="mt-4 text-xs text-ink-3 leading-6">{n.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-6">
          روند پرداخت گام‌به‌گام
        </h2>
        <ol className="space-y-4">
          {[
            "محصول مورد نظرتان را در سایت انتخاب کنید و روی «سفارش از تلگرام» بزنید.",
            "پشتیبانی، مبلغ نهایی به دلار و آدرس کیف پول USDT روی شبکه دلخواه شما را می‌فرستد.",
            "از صرافی ایرانی (نوبیتکس، والکس، …) یا کیف پول شخصی، تتر را به آدرس داده‌شده ارسال کنید.",
            "پس از تأیید شبکه (۲ تا ۵ دقیقه)، اشتراک شما روی اکانت شخصی‌تان فعال می‌شود.",
            "رسید رسمی پرداخت همراه با اطلاعات اشتراک از طریق تلگرام برایتان ارسال می‌شود.",
          ].map((step, i) => (
            <li
              key={i}
              className="flex items-start gap-4 rounded-2xl border border-rule bg-card p-5"
            >
              <span className="size-9 rounded-full bg-teal text-paper inline-flex items-center justify-center font-semibold lat font-latin shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-sm sm:text-base text-ink-2 leading-7">
                {step}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="https://t.me/parsigate_support"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-teal text-paper text-sm font-semibold hover:bg-teal-2"
          >
            <TelegramIcon className="size-4" />
            شروع سفارش از تلگرام
          </Link>
          <Link
            href="/category/ai-chat"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-paper text-ink border border-rule-2 text-sm font-semibold hover:border-teal hover:text-teal"
          >
            مشاهده کاتالوگ
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pb-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-6">
          سوال‌های متداول
        </h2>
        <Faq items={FAQ} />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: FAQ.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
      </section>
    </>
  );
}

function Card({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-rule bg-card p-6">
      <div className="size-12 rounded-xl bg-teal text-paper inline-flex items-center justify-center mb-4">
        <Icon className="size-6" />
      </div>
      <h3 className="text-base font-semibold text-ink">{title}</h3>
      <p className="mt-2 text-sm text-ink-2 leading-7">{text}</p>
    </div>
  );
}
