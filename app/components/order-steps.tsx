import { CheckIcon, BoltIcon, ShieldIcon, CoinIcon } from "./icons";

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
  );
}

function ChatIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
    </svg>
  );
}

function RocketIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
    </svg>
  );
}

const STEPS = [
  {
    n: "۱",
    nLat: "01",
    title: "محصول مورد نظرتان را انتخاب کنید",
    desc: "از کاتالوگ بیش از ۱۰۰۰ سرویس، گزینه دلخواهتان و تعرفه مناسب را انتخاب کنید.",
    Icon: SearchIcon,
  },
  {
    n: "۲",
    nLat: "02",
    title: "از طریق تلگرام سفارش دهید",
    desc: "روی دکمه «سفارش از تلگرام» کلیک کنید، اطلاعات اکانت خود را با پشتیبانی به اشتراک بگذارید.",
    Icon: ChatIcon,
  },
  {
    n: "۳",
    nLat: "03",
    title: "با تتر USDT پرداخت کنید",
    desc: "آدرس کیف پول USDT روی شبکه دلخواه شما ارسال می‌شود. مبلغ را واریز کنید.",
    Icon: CoinIcon,
  },
  {
    n: "۴",
    nLat: "04",
    title: "اشتراک شما تا ۱۵ دقیقه فعال می‌شود",
    desc: "پشتیبانی، اشتراک را روی اکانت شخصی شما فعال می‌کند و تأییدیه می‌فرستد.",
    Icon: RocketIcon,
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
              <s.Icon className="size-8 text-teal mb-3" />
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
