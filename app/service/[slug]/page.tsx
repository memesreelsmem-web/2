import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES, SERVICE_BY_SLUG, servicesByCategory } from "@/lib/services";
import { CATEGORY_BY_SLUG } from "@/lib/categories";
import {
  CheckIcon,
  TelegramIcon,
  ArrowLeftIcon,
  CoinIcon,
  ShieldIcon,
  BoltIcon,
} from "@/app/components/icons";
import ServiceCard from "@/app/components/service-card";
import Faq from "@/app/components/faq";

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICE_BY_SLUG[slug];
  if (!service) return {};
  const start = service.tariffs.find((t) => t.priceUsd > 0);
  return {
    title: `خرید ${service.nameFa} (${service.name}) با تتر`,
    description: `${service.shortFa}. خرید مستقیم اشتراک ${service.name} روی اکانت شخصی شما${start ? ` با شروع قیمت ${start.priceUsd} دلار` : ""}. پرداخت با تتر USDT، تحویل تا ۱۵ دقیقه.`,
    alternates: { canonical: `/service/${service.slug}` },
    openGraph: {
      title: `خرید ${service.nameFa} | پارسی‌گیت`,
      description: service.taglineFa,
      type: "website",
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICE_BY_SLUG[slug];
  if (!service) notFound();

  const category = CATEGORY_BY_SLUG[service.category];
  const related = servicesByCategory(service.category)
    .filter((s) => s.slug !== service.slug)
    .slice(0, 4);
  const isCommission = service.tariffs.every((t) => t.priceUsd === 0);
  const textOnBrand = service.brandTextColor || "#fbf6e7";
  const tgUrl = `https://t.me/parsigate_support?start=${encodeURIComponent(`order_${service.slug}`)}`;

  // Find best (popular) and most expensive tariff for schema
  const lowest = service.tariffs.reduce(
    (a, b) => (a.priceUsd > 0 && a.priceUsd < (b.priceUsd || Infinity) ? a : b),
    service.tariffs[0]
  );

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${service.nameFa} (${service.name})`,
    description: service.descriptionFa,
    brand: { "@type": "Brand", name: service.name },
    offers: service.tariffs
      .filter((t) => t.priceUsd > 0)
      .map((t) => ({
        "@type": "Offer",
        name: t.name,
        price: t.priceUsd,
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: `https://parsigate.shop/service/${service.slug}`,
      })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "صفحه اصلی", item: "https://parsigate.shop/" },
      {
        "@type": "ListItem",
        position: 2,
        name: category.nameFa,
        item: `https://parsigate.shop/category/${category.slug}`,
      },
      { "@type": "ListItem", position: 3, name: service.nameFa },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 pb-12">
          <nav className="text-xs text-ink-3 mb-6 flex items-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-teal">
              صفحه اصلی
            </Link>
            <span>/</span>
            <Link
              href={`/category/${category.slug}`}
              className="hover:text-teal"
            >
              {category.nameFa}
            </Link>
            <span>/</span>
            <span className="text-ink-2">{service.nameFa}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Brand panel */}
            <div className="lg:col-span-5 lg:order-2">
              <div
                className="relative rounded-3xl overflow-hidden h-72 sm:h-96 p-8"
                style={{
                  backgroundColor: service.brandColor,
                  color: textOnBrand,
                }}
              >
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'><g fill='none' stroke='white' stroke-width='1'><path d='M60 10 L70 32 L92 28 L82 50 L102 60 L82 70 L92 92 L70 88 L60 110 L50 88 L28 92 L38 70 L18 60 L38 50 L28 28 L50 32 Z'/><circle cx='60' cy='60' r='18'/></g></svg>\")",
                    backgroundSize: "150px",
                    backgroundRepeat: "repeat",
                  }}
                />
                <div className="relative h-full flex flex-col">
                  <div className="flex items-start justify-between">
                    <div
                      className="size-20 rounded-2xl flex items-center justify-center text-2xl font-semibold"
                      style={{
                        background: "rgba(255,255,255,0.16)",
                        border: "1px solid rgba(255,255,255,0.3)",
                      }}
                    >
                      {service.monogram}
                    </div>
                    <div className="flex flex-col gap-2 items-end">
                      {service.bestseller && (
                        <span className="text-[11px] px-2.5 py-1 rounded-full bg-saffron text-ink font-medium">
                          پرفروش
                        </span>
                      )}
                      {service.region && (
                        <span className="text-[11px] opacity-80">
                          ریجن: {service.region}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="mt-auto">
                    <p className="text-xs opacity-70 lat font-latin">
                      {service.name}
                    </p>
                    <h1 className="mt-1 text-3xl sm:text-4xl font-bold leading-tight">
                      {service.nameFa}
                    </h1>
                    <p className="mt-2 text-sm opacity-90">
                      {service.taglineFa}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Info column */}
            <div className="lg:col-span-7 lg:order-1">
              <p className="inline-flex items-center gap-2 px-3 py-1 text-[11px] font-medium rounded-full bg-paper-2 border border-rule-2 text-ink-2">
                <span className="size-1.5 rounded-full bg-teal" />
                {category.nameFa}
              </p>
              <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-ink leading-tight">
                {service.taglineFa}
              </h2>
              <p className="mt-4 text-ink-2 leading-8 whitespace-pre-line">
                {service.descriptionFa}
              </p>

              {service.features.length > 0 && (
                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-ink-2">
                      <CheckIcon className="size-4 text-teal mt-1 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={tgUrl}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-teal text-paper text-sm font-semibold hover:bg-teal-2 transition shadow-sm"
                >
                  <TelegramIcon className="size-4" />
                  سفارش از تلگرام
                </Link>
                <Link
                  href="/payment"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-paper text-ink border border-rule-2 text-sm font-semibold hover:border-teal hover:text-teal transition"
                >
                  <CoinIcon className="size-4" />
                  راهنمای پرداخت تتر
                </Link>
              </div>

              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-ink-3">
                <li className="inline-flex items-center gap-1.5">
                  <BoltIcon className="size-4 text-teal" />
                  تحویل ۱۵ دقیقه
                </li>
                <li className="inline-flex items-center gap-1.5">
                  <ShieldIcon className="size-4 text-teal" />
                  اکانت شخصی شما
                </li>
                <li className="inline-flex items-center gap-1.5">
                  <CoinIcon className="size-4 text-teal" />
                  پرداخت تتر
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tariffs */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between mb-8 gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-saffron-2 lat font-latin">
              Tariffs
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-ink">
              تعرفه‌ها و قیمت‌گذاری
            </h2>
            <p className="mt-2 text-sm text-ink-2 leading-7">
              قیمت‌ها به دلار آمریکا. پرداخت معادل با تتر USDT انجام می‌شود.
            </p>
          </div>
          {!isCommission && lowest && (
            <p className="hidden sm:block text-xs text-ink-3">
              ارزان‌ترین تعرفه:{" "}
              <span className="lat font-latin font-semibold text-teal">
                ${lowest.priceUsd}
              </span>
            </p>
          )}
        </div>

        {isCommission ? (
          <CommissionPanel />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.tariffs.map((t, i) => {
              const isCommissionOnly = t.priceUsd === 0;
              return (
                <div
                  key={i}
                  className={`relative rounded-2xl border-2 p-6 bg-card ${t.popular ? "border-teal shadow-md" : "border-rule"}`}
                >
                  {t.popular && (
                    <span className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-saffron text-ink text-[11px] font-semibold">
                      پیشنهاد محبوب
                    </span>
                  )}
                  <h3 className="text-lg font-semibold text-ink">{t.name}</h3>
                  <p className="text-xs text-ink-3 mt-1">{t.period}</p>

                  <div className="mt-4 flex items-end gap-2">
                    {isCommissionOnly ? (
                      <span className="text-2xl font-bold text-teal">
                        قیمت سایت + ۲۵٪
                      </span>
                    ) : (
                      <>
                        <span className="text-3xl font-bold text-teal lat font-latin">
                          ${t.priceUsd}
                        </span>
                        <span className="text-xs text-ink-3 mb-1.5">USD</span>
                        {t.oldPriceUsd && (
                          <span className="ms-auto text-sm text-ink-3 line-through lat font-latin mb-1">
                            ${t.oldPriceUsd}
                          </span>
                        )}
                      </>
                    )}
                  </div>
                  {t.note && (
                    <p className="mt-2 text-xs text-ink-3">{t.note}</p>
                  )}

                  <Link
                    href={`${tgUrl}_${i}`}
                    className={`mt-5 w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full text-sm font-semibold transition ${t.popular ? "bg-teal text-paper hover:bg-teal-2" : "bg-paper-2 text-ink hover:bg-paper-3"}`}
                  >
                    <TelegramIcon className="size-4" />
                    سفارش این تعرفه
                  </Link>
                </div>
              );
            })}
          </div>
        )}

        {/* Crypto info card */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="rounded-2xl border border-rule bg-paper-2 p-5">
            <div className="size-10 rounded-xl bg-teal text-paper inline-flex items-center justify-center mb-3">
              <CoinIcon className="size-5" />
            </div>
            <h4 className="text-sm font-semibold text-ink">پرداخت تتر USDT</h4>
            <p className="mt-2 text-xs text-ink-2 leading-6">
              شبکه‌های TRC-20، TON، BEP-20، ERC-20 و Polygon. کارمزد از ۱ دلار.
            </p>
          </div>
          <div className="rounded-2xl border border-rule bg-paper-2 p-5">
            <div className="size-10 rounded-xl bg-teal text-paper inline-flex items-center justify-center mb-3">
              <BoltIcon className="size-5" />
            </div>
            <h4 className="text-sm font-semibold text-ink">تحویل سریع</h4>
            <p className="mt-2 text-xs text-ink-2 leading-6">
              میانگین زمان فعال‌سازی پس از پرداخت کمتر از ۱۵ دقیقه است.
            </p>
          </div>
          <div className="rounded-2xl border border-rule bg-paper-2 p-5">
            <div className="size-10 rounded-xl bg-teal text-paper inline-flex items-center justify-center mb-3">
              <ShieldIcon className="size-5" />
            </div>
            <h4 className="text-sm font-semibold text-ink">گارانتی فعال‌بودن</h4>
            <p className="mt-2 text-xs text-ink-2 leading-6">
              اشتراک تا انتهای دوره گارانتی است. در صورت قطع، رایگان جایگزین
              می‌شود.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {service.faq && service.faq.length > 0 && (
        <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-saffron-2 lat font-latin">
              FAQ
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-ink">
              سوال‌های متداول درباره {service.nameFa}
            </h2>
          </div>
          <Faq items={service.faq} />
          <script
            type="application/ld+json"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: service.faq.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              }),
            }}
          />
        </section>
      )}

      {/* Related */}
      {related.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-end justify-between mb-8 gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-saffron-2 lat font-latin">
                Related
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-ink">
                سرویس‌های مشابه در دسته {category.nameFa}
              </h2>
            </div>
            <Link
              href={`/category/${category.slug}`}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-teal hover:gap-2.5 transition-all whitespace-nowrap"
            >
              مشاهده دسته کامل
              <ArrowLeftIcon className="size-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {related.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}

function CommissionPanel() {
  return (
    <div className="rounded-2xl border-2 border-teal bg-card p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div>
          <h3 className="text-xl font-bold text-ink">
            خرید آسِت یا مدل دلخواه شما با کارمزد ۲۵٪
          </h3>
          <p className="mt-3 text-sm text-ink-2 leading-7">
            لینک محصول مورد نظر شما را در هر مارکت‌پلیسی که هست برای ما بفرستید.
            ما قیمت اصلی به دلار + ۲۵٪ کارمزد را به شما اعلام می‌کنیم. پس از
            پرداخت، آسِت را خریداری می‌کنیم و فایل آن (یا اکانت شامل آن) را به
            شما تحویل می‌دهیم.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-ink-2">
            <li className="flex items-start gap-2">
              <CheckIcon className="size-4 text-teal mt-1" />
              فایل‌های FBX، OBJ، GLB، Blend، USD، STL و …
            </li>
            <li className="flex items-start gap-2">
              <CheckIcon className="size-4 text-teal mt-1" />
              تحویل از طریق گوگل درایو، WeTransfer یا تلگرام
            </li>
            <li className="flex items-start gap-2">
              <CheckIcon className="size-4 text-teal mt-1" />
              لایسنس واقعی به نام شما (در پلتفرم‌هایی که نیاز است)
            </li>
          </ul>
        </div>
        <div className="rounded-xl bg-paper-2 p-6">
          <p className="text-xs text-ink-3 mb-3">مثال:</p>
          <div className="flex items-baseline justify-between text-sm">
            <span className="text-ink-2">قیمت روی مارکت‌پلیس</span>
            <span className="lat font-latin font-semibold">$40</span>
          </div>
          <div className="flex items-baseline justify-between text-sm mt-2">
            <span className="text-ink-2">کارمزد ما (۲۵٪)</span>
            <span className="lat font-latin font-semibold">$10</span>
          </div>
          <hr className="my-3 border-rule" />
          <div className="flex items-baseline justify-between">
            <span className="text-ink font-semibold">قیمت نهایی برای شما</span>
            <span className="lat font-latin font-bold text-teal text-xl">
              $50
            </span>
          </div>
          <Link
            href="https://t.me/parsigate_support"
            className="mt-5 w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-teal text-paper text-sm font-semibold hover:bg-teal-2"
          >
            <TelegramIcon className="size-4" />
            ارسال لینک محصول
          </Link>
        </div>
      </div>
    </div>
  );
}
