import { CheckIcon } from "./icons";

const STEPS = [
  {
    n: "۱",
    nLat: "01",
    title: "محصول مورد نظرتان را انتخاب کنید",
    desc: "از کاتالوگ بیش از ۱۰۰۰ سرویس، گزینه دلخواهتان و تعرفه مناسب را انتخاب کنید.",
    emoji: "🔍",
  },
  {
    n: "۲",
    nLat: "02",
    title: "از طریق تلگرام سفارش دهید",
    desc: "روی دکمه «سفارش از تلگرام» کلیک کنید، اطلاعات اکانت خود را با پشتیبانی به اشتراک بگذارید.",
    emoji: "💬",
  },
  {
    n: "۳",
    nLat: "03",
    title: "با تتر USDT پرداخت کنید",
    desc: "آدرس کیف پول USDT روی شبکه دلخواه شما ارسال می‌شود. مبلغ را واریز کنید.",
    emoji: "💎",
  },
  {
    n: "۴",
    nLat: "04",
    title: "اشتراک شما تا ۱۵ دقیقه فعال می‌شود",
    desc: "پشتیبانی، اشتراک را روی اکانت شخصی شما فعال می‌کند و تأییدیه می‌فرستد.",
    emoji: "🚀",
  },
];

export default function OrderSteps() {
  return (
    <section className="py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {STEPS.map((s) => (
          <div
            key={s.n}
            className="relative bg-card rounded-2xl border border-rule p-6 overflow-hidden group hover:border-teal/30 transition"
          >
            <div className="absolute top-4 left-4 text-6xl font-bold text-paper-3 lat font-latin leading-none select-none">
              {s.nLat}
            </div>

            <div className="relative">
              <span className="text-3xl mb-3 block">{s.emoji}</span>
              <div className="size-8 rounded-full bg-teal/10 border border-teal/20 text-teal inline-flex items-center justify-center text-sm font-semibold mb-3">
                {s.n}
              </div>
              <h3 className="text-sm font-semibold text-ink leading-snug">
                {s.title}
              </h3>
              <p className="mt-2 text-xs text-ink-2 leading-6">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-start gap-3 p-4 rounded-xl bg-paper-2 border border-rule text-sm text-ink-2">
        <CheckIcon className="size-5 text-teal shrink-0 mt-0.5" />
        <p className="leading-7">
          ما هرگز پسورد اکانت شما را نمی‌خواهیم. فعال‌سازی اشتراک از طریق دعوت
          ایمیل یا کد فعال‌سازی انجام می‌شود — مثل خرید رسمی از خود سایت اصلی.
        </p>
      </div>
    </section>
  );
}
