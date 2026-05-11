import Link from "next/link";
import type { Service } from "@/lib/types";
import { ArrowLeftIcon } from "./icons";

function pickStartingPrice(service: Service) {
  const valid = service.tariffs.filter((t) => t.priceUsd > 0);
  if (valid.length === 0) return null;
  return valid.reduce((min, t) => (t.priceUsd < min.priceUsd ? t : min));
}

function pickBestDiscount(service: Service): number | null {
  const valid = service.tariffs.filter(
    (t) => t.priceUsd > 0 && t.oldPriceUsd && t.oldPriceUsd > t.priceUsd
  );
  if (valid.length === 0) return null;
  const best = valid.reduce((max, t) => {
    const pct = Math.round(((t.oldPriceUsd! - t.priceUsd) / t.oldPriceUsd!) * 100);
    return pct > max ? pct : max;
  }, 0);
  return best > 0 ? best : null;
}

export default function ServiceCard({ service }: { service: Service }) {
  const start = pickStartingPrice(service);
  const discount = pickBestDiscount(service);
  const isCommission = service.tariffs.every((t) => t.priceUsd === 0);
  const textOnBrand = service.brandTextColor || "#fbf6e7";

  return (
    <Link
      href={`/service/${service.slug}`}
      aria-label={service.nameFa}
      className="group block rounded-2xl border border-rule bg-card overflow-hidden card-lift"
    >
      <div
        className="relative h-36 px-5 pt-5 pb-4 overflow-hidden"
        style={{ backgroundColor: service.brandColor, color: textOnBrand }}
      >
        <div
          className="absolute inset-0 opacity-25 pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><g fill='none' stroke='white' stroke-width='0.6'><path d='M40 8 L46 22 L60 18 L54 32 L68 38 L54 44 L60 58 L46 54 L40 68 L34 54 L20 58 L26 44 L12 38 L26 32 L20 18 L34 22 Z'/></g></svg>\")",
            backgroundRepeat: "repeat",
            backgroundSize: "60px 60px",
          }}
          aria-hidden
        />

        <div className="relative flex items-start justify-between">
          <div
            className="size-14 rounded-xl flex items-center justify-center text-xl font-semibold"
            style={{
              background: "rgba(255,255,255,0.16)",
              border: "1px solid rgba(255,255,255,0.3)",
            }}
            aria-hidden
          >
            {service.monogram}
          </div>

          <div className="flex flex-col gap-1.5 items-end">
            {discount && (
              <span className="inline-flex items-center gap-1 text-[10px] px-2 py-1 rounded-full bg-red-600 text-white font-semibold lat font-latin">
                {discount}% تخفیف
              </span>
            )}
            {service.bestseller && (
              <span className="inline-flex items-center gap-1 text-[10px] px-2 py-1 rounded-full bg-saffron text-ink font-medium">
                پرفروش
              </span>
            )}
            {service.popular && !service.bestseller && (
              <span className="inline-flex items-center gap-1 text-[10px] px-2 py-1 rounded-full bg-paper text-ink font-medium">
                محبوب
              </span>
            )}
            {service.region && (
              <span className="text-[10px] opacity-80">
                {service.region}
              </span>
            )}
          </div>
        </div>

        <div className="relative mt-3">
          <h3 className="text-lg font-semibold leading-tight line-clamp-1">
            {service.nameFa}
          </h3>
          <p className="text-xs opacity-80 mt-0.5 lat font-latin">
            {service.name}
          </p>
        </div>
      </div>

      <div className="px-5 pt-4 pb-5 space-y-4">
        <p className="text-[13px] leading-6 text-ink-2 line-clamp-2 min-h-[3rem]">
          {service.shortFa}
        </p>

        <div className="flex items-end justify-between pt-1 border-t border-rule">
          <div className="pt-3">
            {isCommission ? (
              <>
                <p className="text-[10px] text-ink-3">قیمت سرویس</p>
                <p className="text-base font-semibold text-teal">
                  بر اساس قیمت سایت اصلی
                </p>
                <p className="text-[10px] text-ink-3 mt-0.5">
                  + ۲۵٪ کارمزد واسطه
                </p>
              </>
            ) : (
              <>
                <p className="text-[10px] text-ink-3">شروع قیمت از</p>
                <p className="text-xl font-semibold text-teal lat font-latin">
                  ${start?.priceUsd}
                  <span className="text-xs text-ink-3 ms-1">USD</span>
                </p>
                <p className="text-[10px] text-ink-3 mt-0.5">{start?.period}</p>
              </>
            )}
          </div>
          <span className="pt-3 inline-flex items-center gap-1.5 text-sm font-medium text-teal group-hover:gap-2.5 transition-all">
            مشاهده <ArrowLeftIcon className="size-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
