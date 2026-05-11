import { BoltIcon, ShieldIcon, CoinIcon, HeadphoneIcon, StarIcon } from "./icons";

const ITEMS = [
  {
    icon: BoltIcon,
    label: "تحویل ۱۵ دقیقه",
    sub: "میانگین زمان فعال‌سازی",
  },
  {
    icon: ShieldIcon,
    label: "اکانت شخصی شما",
    sub: "بدون نیاز به پسورد",
  },
  {
    icon: CoinIcon,
    label: "پرداخت تتر USDT",
    sub: "TRC-20 / TON / BEP-20",
  },
  {
    icon: HeadphoneIcon,
    label: "پشتیبانی ۲۴ ساعته",
    sub: "از طریق تلگرام",
  },
  {
    icon: StarIcon,
    label: "+۵۰ سرویس فعال",
    sub: "هوش مصنوعی، VPN، ۳D",
  },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-rule bg-paper-2/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-5">
          {ITEMS.map(({ icon: Icon, label, sub }) => (
            <li key={label} className="flex items-start gap-3">
              <span className="shrink-0 size-10 rounded-xl bg-paper border border-rule-2 inline-flex items-center justify-center text-teal">
                <Icon className="size-5" />
              </span>
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-semibold text-ink">{label}</span>
                <span className="text-[11px] text-ink-3 mt-0.5">{sub}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
