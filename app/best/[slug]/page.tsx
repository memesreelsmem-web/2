import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BEST_PAGES } from "@/lib/best-pages";
import { SERVICE_BY_SLUG } from "@/lib/services";
import ServiceCard from "@/app/components/service-card";
import Faq from "@/app/components/faq";
import { abs, SITE_NAME } from "@/lib/config";

const BY_SLUG = Object.fromEntries(BEST_PAGES.map((p) => [p.slug, p]));

export async function generateStaticParams() {
  return BEST_PAGES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = BY_SLUG[slug];
  if (!page) return {};
  return {
    title: `${page.title} | ${SITE_NAME}`,
    description: page.metaDescription,
    alternates: { canonical: `/best/${page.slug}` },
    openGraph: {
      title: page.title,
      description: page.metaDescription,
      type: "article",
      url: abs(`/best/${page.slug}`),
    },
  };
}

export default async function BestPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = BY_SLUG[slug];
  if (!page) notFound();

  const services = page.serviceSlugs.map((s) => SERVICE_BY_SLUG[s]).filter(Boolean);

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: page.h1,
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
      { "@type": "ListItem", position: 2, name: page.title, item: abs(`/best/${page.slug}`) },
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
      {page.faq && page.faq.length > 0 && (
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: page.faq.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
      )}

      <section className="border-b border-rule bg-paper-2">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <nav className="text-xs text-ink-3 mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-teal">
              صفحه اصلی
            </Link>
            <span>/</span>
            <span className="text-ink-2">{page.title}</span>
          </nav>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-saffron-2 lat font-latin">
            Curated list
          </p>
          <h1 className="mt-2 text-3xl sm:text-5xl font-bold text-ink leading-tight">
            {page.h1}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-ink-2 leading-8 max-w-3xl">
            {page.intro}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pb-12 space-y-4">
        {page.body.map((b, i) => {
          if (b.type === "h2")
            return (
              <h2 key={i} className="text-2xl font-bold text-ink mt-8 mb-2">
                {b.text}
              </h2>
            );
          if (b.type === "p")
            return (
              <p key={i} className="text-base text-ink-2 leading-8">
                {b.text}
              </p>
            );
          return (
            <ul
              key={i}
              className="list-disc pr-6 space-y-2 text-ink-2 leading-7"
            >
              {b.items.map((it, j) => (
                <li key={j}>{it}</li>
              ))}
            </ul>
          );
        })}
      </section>

      {page.faq && page.faq.length > 0 && (
        <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pb-16">
          <h2 className="text-2xl font-bold text-ink mb-6">سوال‌های متداول</h2>
          <Faq items={page.faq} />
        </section>
      )}
    </>
  );
}

export const dynamicParams = false;
