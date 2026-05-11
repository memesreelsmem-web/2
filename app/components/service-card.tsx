import Link from "next/link";
import Image from "next/image";
import type { Service } from "@/lib/types";
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
    const pct = Math.round(
      ((t.oldPriceUsd! - t.priceUsd) / t.oldPriceUsd!) * 100
    );
    return pct > max ? pct : max;
  }, 0);
  return best > 0 ? best : null;
}

export default function ServiceCard({ service }: { service: Service }) {
  const start = pickStartingPrice(service);
  const discount = pickBestDiscount(service);
  const isCommission = service.tariffs.every((t) => t.priceUsd === 0);
  const logoUrl =
    service.imageUrl || getServiceLogo(service.slug, service.name);

  return (
    <Link
      href={`/service/${service.slug}`}
      aria-label={service.nameFa}
      className="group block"
    >
      {/* Full-bleed image card — like kupikod.com */}
      <div
        className="relative aspect-square rounded-2xl overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${service.brandColor}33, ${service.brandColor}cc)`,
        }}
      >
        {/* Background pattern */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at 30% 20%, ${service.brandColor}88, transparent 60%), radial-gradient(ellipse at 70% 80%, ${service.brandColor}44, transparent 60%)`,
          }}
        />

        {/* Logo — large and centered */}
        <div className="absolute inset-0 flex items-center justify-center p-6">
          {logoUrl ? (
            <div className="relative w-2/3 h-2/3 group-hover:scale-110 transition-transform duration-300">
              <Image
                src={logoUrl}
                alt={service.name}
                fill
                className="object-contain drop-shadow-lg"
                sizes="(max-width:640px) 40vw, 200px"
                unoptimized
              />
            </div>
          ) : (
            <span
              className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
              aria-hidden
            >
              {service.monogram}
            </span>
          )}
        </div>

        {/* Brand name overlay — bottom */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent px-3 pb-3 pt-10">
          <p className="text-sm font-bold text-white lat font-latin drop-shadow-md truncate">
            {service.name}
          </p>
        </div>

        {/* Badges — top */}
        <div className="absolute top-2.5 right-2.5 flex flex-col gap-1">
          {discount && <span className="badge-discount">−{discount}%</span>}
          {service.bestseller && <span className="badge-hot">پرفروش</span>}
        </div>
      </div>

      {/* Price + name below the card — like kupikod.com */}
      <div className="mt-2 px-1">
        <div className="flex items-center gap-2">
          {isCommission ? (
            <span className="text-sm font-bold text-teal">کارمزدی</span>
          ) : (
            <>
              <span className="text-sm font-bold text-teal lat font-latin">
                ${start?.priceUsd}
              </span>
              {discount && (
                <span className="text-xs text-rose-400 lat font-latin">
                  −{discount}%
                </span>
              )}
              {start?.oldPriceUsd && (
                <span className="text-xs text-ink-3 line-through lat font-latin">
                  ${start.oldPriceUsd}
                </span>
              )}
            </>
          )}
        </div>
        <p className="text-xs text-ink-2 truncate mt-0.5">{service.nameFa}</p>
      </div>
    </Link>
  );
}
