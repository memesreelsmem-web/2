import { CheckIcon } from "./icons";

const STEPS = [
  {
    n: "۱",
    nLat: "01",
    title: "محصول مورد نظرتان را انتخاب کنید",
    desc: "از کاتالوگ بالای ۵۰ سرویس، گزینه دلخواهتان و تعرفه مناسب را انتخاب کنید.",
  },
  {
    n: "۲",
    nLat: "02",
    title: "از طریق تلگرام سفارش دهید",
    desc: "روی دکمه «سفارش از تلگرام» کلیک کنید، اطلاعات اکانت خود را با پشتیبانی به اشتراک بگذارید.",
  },
  {
    n: "۳",
    nLat: "03",
    title: "با تتر USDT پرداخت کنید",
    desc: "آدرس کیف پول USDT روی شبکه دلخواه شما ارسال می‌شود. مبلغ را واریز کنید.",
  },
  {
    n: "۴",
    nLat: "04",
    title: "اشتراک شما تا ۱۵ دقیقه فعال می‌شود",
    desc: "پشتیبانی، اشتراک را روی اکانت شخصی شما فعال می‌کند و تأییدیه می‌فرستد.",
  },
];

export default function OrderSteps() {
  return (
    <section className="py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {STEPS.map((s) => (
          <div
            key={s.n}
            className="relative bg-card rounded-2xl border border-rule p-6 overflow-hidden"
          >
            <div className="absolute top-4 left-4 text-7xl font-bold text-paper-3 lat font-latin leading-none select-none">
              {s.nLat}
            </div>

            <div className="relative">
              <div className="size-9 rounded-full bg-teal text-paper inline-flex items-center justify-center text-sm font-semibold mb-4">
                {s.n}
              </div>
              <h3 className="text-base font-semibold text-ink leading-snug">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-ink-2 leading-7">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-start gap-3 p-4 rounded-xl bg-paper-2 border border-rule text-sm text-ink-2">
        <CheckIcon className="size-5 text-teal shrink-0 mt-0.5" />
        <p className="leading-7">
          ما هرگز پسورد اکانت شما را نمی‌خواهیم. فعال‌سازی اشتراک از طریق دعوت
          ایمیل یا کد فعال‌سازی انجام می‌شود — مثل خرید رسمی از خود سایت اصلی.
        </p>
      </div>
    </section>
  );
}
