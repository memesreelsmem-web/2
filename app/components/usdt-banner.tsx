import Link from "next/link";
import { CoinIcon, BoltIcon, ShieldIcon, TelegramIcon } from "./icons";
import { TELEGRAM_SUPPORT_URL } from "@/lib/config";

export default function UsdtBanner() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-rule bg-gradient-to-br from-teal/10 via-paper-2 to-blue/5">
      <div className="absolute inset-0 hero-gradient opacity-50 pointer-events-none" aria-hidden />
      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 sm:p-12">
        <div className="lg:col-span-7">
          <p className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full bg-teal/10 border border-teal/20 text-teal">
            <CoinIcon className="size-4" />
            پرداخت با ارز دیجیتال
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight leading-tight text-ink">
            تتر بدهید، اشتراک بگیرید
          </h2>
          <p className="mt-4 text-ink-2 leading-8 max-w-2xl">
            تمام پرداخت‌ها از طریق تتر USDT انجام می‌شود. شبکه‌های TRC-20 (ترون)،
            BEP-20 (BSC)، TON و ERC-20 پشتیبانی می‌شوند. کارمزد شبکه ترون فقط
            ۱ دلار است و انتقال در ۲ تا ۵ دقیقه تأیید می‌شود.
          </p>

          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <li className="flex items-start gap-2 text-sm text-ink">
              <BoltIcon className="size-5 mt-0.5 text-teal" />
              <span>
                تأیید تراکنش
                <br />
                <span className="text-ink-3 text-xs">۲ تا ۵ دقیقه</span>
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm text-ink">
              <ShieldIcon className="size-5 mt-0.5 text-teal" />
              <span>
                بدون نیاز به کارت
                <br />
                <span className="text-ink-3 text-xs">یا وی‌پی‌ان پرداخت</span>
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm text-ink">
              <CoinIcon className="size-5 mt-0.5 text-teal" />
              <span>
                کارمزد بسیار پایین
                <br />
                <span className="text-ink-3 text-xs">از ۱ دلار</span>
              </span>
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/payment"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-teal text-paper text-sm font-semibold hover:bg-teal-2 transition glow-teal"
            >
              راهنمای کامل پرداخت تتر
            </Link>
            <Link
              href={TELEGRAM_SUPPORT_URL}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-rule-2 text-ink text-sm font-semibold hover:border-teal hover:text-teal transition"
            >
              <TelegramIcon className="size-4" />
              مشاوره پرداخت
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5 flex items-center justify-center">
          <NetworkRing />
        </div>
      </div>
    </section>
  );
}

function NetworkRing() {
  const networks = [
    { label: "TRC-20", sub: "Tron", angle: 0 },
    { label: "BEP-20", sub: "BSC", angle: 72 },
    { label: "TON", sub: "Ton", angle: 144 },
    { label: "ERC-20", sub: "Ethereum", angle: 216 },
    { label: "Polygon", sub: "MATIC", angle: 288 },
  ];
  const r = 110;
  return (
    <div className="relative size-[280px] sm:size-[320px]">
      <div className="absolute inset-6 rounded-full border-2 border-teal/10" />
      <div className="absolute inset-12 rounded-full border border-teal/10" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="size-28 rounded-full bg-teal/10 border border-teal/20 text-teal flex flex-col items-center justify-center font-semibold">
          <span className="text-2xl">USDT</span>
          <span className="text-[11px] text-ink-3 mt-0.5">Tether</span>
        </div>
      </div>
      {networks.map((n) => {
        const rad = (n.angle * Math.PI) / 180;
        const x = Math.cos(rad) * r;
        const y = Math.sin(rad) * r;
        return (
          <div
            key={n.label}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1.5 rounded-full bg-paper-3 border border-rule text-xs font-medium text-ink-2"
            style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
          >
            <span className="lat font-latin">{n.label}</span>
            <span className="text-ink-3 text-[10px] ms-1">{n.sub}</span>
          </div>
        );
      })}
    </div>
  );
}
