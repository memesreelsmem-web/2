import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CATEGORIES, CATEGORY_BY_SLUG } from "@/lib/categories";
import { servicesByCategory } from "@/lib/services";
import ServiceCard from "@/app/components/service-card";
import { ArrowLeftIcon } from "@/app/components/icons";
import Faq from "@/app/components/faq";
import { abs, SITE_NAME } from "@/lib/config";
import { CATEGORY_CONTENT } from "@/lib/category-content";

export async function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = CATEGORY_BY_SLUG[slug];
  if (!category) return {};
  const count = servicesByCategory(slug).length;
  const title = `خرید ${category.nameFa} با تتر USDT — تحویل ۱۵ دقیقه (${count} سرویس)`;
  const description = `${category.descriptionFa} پرداخت با تتر USDT روی همه شبکه‌ها (TRC-20، TON، BEP-20)، فعال‌سازی روی اکانت شخصی شما، تحویل کمتر از ۱۵ دقیقه. ${count} سرویس فعال در ${SITE_NAME}.`;
  return {
    title,
    description,
    alternates: { canonical: `/category/${category.slug}` },
    openGraph: {
      title,
      description,
      type: "website",
      url: abs(`/category/${category.slug}`),
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = CATEGORY_BY_SLUG[slug];
  if (!category) notFound();

  const services = servicesByCategory(slug);
  const otherCategories = CATEGORIES.filter(
    (c) => c.slug !== slug && c.group === category.group
  ).slice(0, 4);
  const content = CATEGORY_CONTENT[slug as keyof typeof CATEGORY_CONTENT];

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: category.nameFa,
    numberOfItems: services.length,
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: abs(`/service/${s.slug}`),
      name: s.nameFa,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "صفحه اصلی", item: abs("/") },
      { "@type": "ListItem", position: 2, name: category.nameFa, item: abs(`/category/${category.slug}`) },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {content?.faq && content.faq.length > 0 && (
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: content.faq.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
      )}

      <section
        className="border-b border-rule relative overflow-hidden"
        style={{ background: `${category.accent}10` }}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'><g fill='none' stroke='black' stroke-width='1'><path d='M80 12 L100 60 L150 60 L110 95 L130 145 L80 110 L30 145 L50 95 L10 60 L60 60 Z'/></g></svg>\")",
            backgroundSize: "200px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <nav className="text-xs text-ink-3 mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-teal">
              صفحه اصلی
            </Link>
            <span>/</span>
            <span className="text-ink-2">{category.nameFa}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <p
                className="inline-flex items-center gap-2 px-3 py-1 text-[11px] font-medium rounded-full text-paper"
                style={{ background: category.accent }}
              >
                <span className="lat font-latin">{category.subtitleFa}</span>
              </p>
              <h1 className="mt-4 text-3xl sm:text-5xl font-bold text-ink leading-tight">
                {content?.h1 ?? `خرید ${category.nameFa} با تتر USDT`}
              </h1>
              <p className="mt-4 text-base sm:text-lg text-ink-2 leading-8 max-w-3xl">
                {content?.lead ?? category.descriptionFa}
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-left">
              <div className="inline-flex flex-col gap-1 px-5 py-3 rounded-2xl bg-card border border-rule">
                <span className="text-xs text-ink-3">تعداد سرویس‌ها</span>
                <span className="text-3xl font-bold text-teal lat font-latin">
                  {services.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {services.length === 0 ? (
          <p className="text-ink-3 text-center py-20">
            هنوز محصولی در این دسته اضافه نشده است.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        )}
      </section>

      {content?.intro && content.intro.length > 0 && (
        <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pb-12">
          <div className="prose prose-rtl prose-ink max-w-none">
            {content.intro.map((para, i) => (
              <p key={i} className="text-base text-ink-2 leading-8 mb-5">
                {para}
              </p>
            ))}
          </div>
        </section>
      )}

      {content?.faq && content.faq.length > 0 && (
        <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pb-16">
          <h2 className="text-2xl font-bold text-ink mb-6">سوال‌های متداول</h2>
          <Faq items={content.faq} />
        </section>
      )}

      {otherCategories.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
          <h2 className="text-lg font-semibold text-ink mb-5">
            دسته‌های مشابه
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {otherCategories.map((c) => (
              <Link
                key={c.slug}
                href={`/category/${c.slug}`}
                className="group flex items-center justify-between gap-2 px-4 py-3 rounded-xl border border-rule bg-card hover:border-teal transition"
              >
                <div>
                  <p className="text-sm font-medium text-ink">{c.nameFa}</p>
                  <p className="text-[11px] text-ink-3 lat font-latin">
                    {c.subtitleFa}
                  </p>
                </div>
                <ArrowLeftIcon className="size-4 text-ink-3 group-hover:text-teal" />
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}

export const dynamicParams = false;
