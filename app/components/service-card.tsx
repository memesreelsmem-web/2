import Link from "next/link";
import Image from "next/image";
import type { Service } from "@/lib/types";
import { ArrowLeftIcon } from "./icons";
import { getServiceLogo } from "@/lib/brand-logos";

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
  const logoUrl = service.imageUrl || getServiceLogo(service.slug, service.name);

  return (
    <Link
      href={`/service/${service.slug}`}
      aria-label={service.nameFa}
      className="group block rounded-2xl border border-rule bg-card overflow-hidden card-lift"
    >
      {/* Image area — large, visual, like kupikod.com */}
      <div
        className="relative aspect-[4/3] overflow-hidden"
        style={{
          background: `linear-gradient(145deg, ${service.brandColor}22, ${service.brandColor}66)`,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 30% 40%, ${service.brandColor}44, transparent 70%)`,
          }}
        />

        {/* Logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          {logoUrl ? (
            <div className="relative size-20 sm:size-24 rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm border border-white/10 p-3 group-hover:scale-105 transition-transform duration-300">
              <Image
                src={logoUrl}
                alt={service.name}
                fill
                className="object-contain p-2"
                sizes="96px"
                unoptimized
              />
            </div>
          ) : (
            <div
              className="size-20 sm:size-24 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl font-bold text-white bg-white/10 backdrop-blur-sm border border-white/10 group-hover:scale-105 transition-transform duration-300"
              aria-hidden
            >
              {service.monogram}
            </div>
          )}
        </div>

        {/* Badges — top right */}
        <div className="absolute top-3 right-3 flex flex-col gap-1.5">
          {discount && (
            <span className="badge-discount">
              −{discount}%
            </span>
          )}
          {service.bestseller && (
            <span className="badge-hot">
              پرفروش
            </span>
          )}
        </div>

        {/* Brand name overlay — bottom */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent px-4 pb-3 pt-8">
          <p className="text-sm font-semibold text-white/90 lat font-latin drop-shadow-sm">
            {service.name}
          </p>
        </div>
      </div>

      {/* Info section */}
      <div className="px-4 pt-3 pb-4 space-y-2">
        <h3 className="text-sm font-bold leading-snug line-clamp-2 text-ink min-h-[2.5rem]">
          {service.nameFa}
        </h3>
        <p className="text-xs leading-5 text-ink-3 line-clamp-2">
          {service.shortFa}
        </p>

        <div className="flex items-end justify-between pt-2 border-t border-rule">
          <div>
            {isCommission ? (
              <p className="text-sm font-semibold text-teal">کارمزدی</p>
            ) : (
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-bold text-teal lat font-latin">
                  ${start?.priceUsd}
                </span>
                {start?.oldPriceUsd && (
                  <span className="text-xs text-ink-3 line-through lat font-latin">
                    ${start.oldPriceUsd}
                  </span>
                )}
              </div>
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
