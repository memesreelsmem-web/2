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

  return (
    <Link
      href={`/service/${service.slug}`}
      aria-label={service.nameFa}
      className="group block rounded-2xl border border-rule bg-card overflow-hidden card-lift"
    >
      {/* Top section with brand color gradient */}
      <div
        className="relative h-32 px-5 pt-4 pb-3 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${service.brandColor}, ${service.brandColor}dd)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

        <div className="relative flex items-start justify-between">
          <div
            className="size-12 rounded-xl flex items-center justify-center text-lg font-bold text-white"
            style={{
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
            aria-hidden
          >
            {service.monogram}
          </div>

          <div className="flex flex-col gap-1.5 items-end">
            {discount && (
              <span className="badge-discount">
                {discount}%−
              </span>
            )}
            {service.bestseller && (
              <span className="badge-hot">
                🔥 پرفروش
              </span>
            )}
          </div>
        </div>

        <div className="relative mt-2">
          <p className="text-xs text-white/70 lat font-latin">
            {service.name}
          </p>
        </div>
      </div>

      {/* Bottom section */}
      <div className="px-5 pt-4 pb-5 space-y-3">
        <h3 className="text-sm font-semibold leading-snug line-clamp-1 text-ink">
          {service.nameFa}
        </h3>
        <p className="text-[12px] leading-5 text-ink-3 line-clamp-2 min-h-[2.5rem]">
          {service.shortFa}
        </p>

        <div className="flex items-end justify-between pt-3 border-t border-rule">
          <div>
            {isCommission ? (
              <>
                <p className="text-[10px] text-ink-3">قیمت سرویس</p>
                <p className="text-sm font-semibold text-teal">
                  بر اساس قیمت اصلی
                </p>
              </>
            ) : (
              <>
                <p className="text-[10px] text-ink-3">شروع از</p>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xl font-bold text-teal lat font-latin">
                    ${start?.priceUsd}
                  </span>
                  {start?.oldPriceUsd && (
                    <span className="text-xs text-ink-3 line-through lat font-latin">
                      ${start.oldPriceUsd}
                    </span>
                  )}
                </div>
              </>
            )}
          </div>
          <span className="inline-flex items-center gap-1 text-xs font-medium text-teal group-hover:gap-2 transition-all">
            مشاهده <ArrowLeftIcon className="size-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
