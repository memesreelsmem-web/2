import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  POSTS,
  POST_BY_SLUG,
  BLOG_CATEGORIES,
  sectionId,
  type BlogSection,
} from "@/lib/blog";
import { SERVICE_BY_SLUG } from "@/lib/services";
import { formatPersianDate } from "@/lib/persian-calendar";
import { abs, SITE_NAME } from "@/lib/config";
import Faq from "@/app/components/faq";

export async function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = POST_BY_SLUG[slug];
  if (!post) return {};
  return {
    title: `${post.title} | بلاگ ${SITE_NAME}`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.dateIso,
      url: abs(`/blog/${post.slug}`),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = POST_BY_SLUG[slug];
  if (!post) notFound();

  const categoryFa = BLOG_CATEGORIES.find((c) => c.slug === post.category)?.nameFa;
  const toc = post.body
    .filter((s): s is { type: "h2"; text: string; id?: string } => s.type === "h2")
    .map((s) => ({ id: s.id || sectionId(s.text), text: s.text }));

  const related = (post.relatedPosts || [])
    .map((s) => POST_BY_SLUG[s])
    .filter(Boolean);
  const relatedServices = (post.relatedServices || [])
    .map((s) => SERVICE_BY_SLUG[s])
    .filter(Boolean);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.dateIso,
    dateModified: post.dateIso,
    inLanguage: "fa-IR",
    url: abs(`/blog/${post.slug}`),
    author: { "@type": "Organization", name: SITE_NAME, url: abs("/") },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: abs("/"),
      logo: { "@type": "ImageObject", url: abs("/opengraph-image") },
    },
    mainEntityOfPage: abs(`/blog/${post.slug}`),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "صفحه اصلی", item: abs("/") },
      { "@type": "ListItem", position: 2, name: "بلاگ", item: abs("/blog") },
      { "@type": "ListItem", position: 3, name: post.title, item: abs(`/blog/${post.slug}`) },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {post.faq && post.faq.length > 0 && (
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: post.faq.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
      )}

      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <nav className="text-xs text-ink-3 mb-6 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-teal">
            صفحه اصلی
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-teal">
            بلاگ
          </Link>
          <span>/</span>
          <span className="text-ink-2">{categoryFa}</span>
        </nav>

        <p className="text-[11px] text-ink-3 flex items-center gap-2 flex-wrap">
          <span className="px-2 py-0.5 rounded-full bg-paper-2 border border-rule">
            {categoryFa}
          </span>
          <span>{formatPersianDate(post.dateIso)}</span>
          <span>·</span>
          <span>{post.readingMinutes} دقیقه مطالعه</span>
        </p>

        <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-ink leading-tight">
          {post.title}
        </h1>
        <p className="mt-4 text-base text-ink-2 leading-8 border-r-4 border-teal pr-4">
          {post.excerpt}
        </p>

        {toc.length > 2 && (
          <nav
            className="mt-8 rounded-2xl border border-rule bg-paper-2 p-5"
            aria-label="فهرست مطالب"
          >
            <p className="text-xs font-semibold text-ink mb-3">فهرست مطالب</p>
            <ol className="space-y-2 text-sm text-ink-2 list-decimal pr-5">
              {toc.map((t) => (
                <li key={t.id}>
                  <a href={`#${t.id}`} className="hover:text-teal">
                    {t.text}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className="mt-10 space-y-5">
          {post.body.map((s, i) => (
            <SectionRenderer key={i} s={s} />
          ))}
        </div>

        {post.faq && post.faq.length > 0 && (
          <section className="mt-14">
            <h2 className="text-2xl font-bold text-ink mb-6">سوال‌های متداول</h2>
            <Faq items={post.faq} />
          </section>
        )}

        {relatedServices.length > 0 && (
          <section className="mt-14">
            <h2 className="text-lg font-semibold text-ink mb-4">
              محصول‌های مرتبط
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {relatedServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/service/${s.slug}`}
                  className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl border border-rule bg-card hover:border-teal"
                >
                  <div>
                    <p className="text-sm font-medium text-ink">{s.nameFa}</p>
                    <p className="text-[11px] text-ink-3 lat font-latin">
                      {s.name}
                    </p>
                  </div>
                  <span className="text-xs text-teal font-medium">
                    خرید →
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {related.length > 0 && (
          <section className="mt-14">
            <h2 className="text-lg font-semibold text-ink mb-4">
              مطالعه بعدی
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="px-4 py-3 rounded-xl border border-rule bg-card hover:border-teal block"
                >
                  <p className="text-sm font-medium text-ink leading-7 line-clamp-2">
                    {r.title}
                  </p>
                  <p className="mt-1 text-[11px] text-ink-3">
                    {r.readingMinutes} دقیقه
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}

function SectionRenderer({ s }: { s: BlogSection }) {
  switch (s.type) {
    case "p":
      return <p className="text-base text-ink-2 leading-8">{s.text}</p>;
    case "h2":
      return (
        <h2
          id={s.id || sectionId(s.text)}
          className="text-2xl font-bold text-ink mt-10 mb-3 scroll-mt-24"
        >
          {s.text}
        </h2>
      );
    case "h3":
      return (
        <h3
          id={s.id || sectionId(s.text)}
          className="text-lg font-semibold text-ink mt-6 mb-2 scroll-mt-24"
        >
          {s.text}
        </h3>
      );
    case "ul":
      return (
        <ul className="list-disc pr-6 space-y-2 text-ink-2 leading-7">
          {s.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="list-decimal pr-6 space-y-2 text-ink-2 leading-7">
          {s.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ol>
      );
    case "quote":
      return (
        <blockquote className="border-r-4 border-saffron pr-4 italic text-ink-2 leading-8">
          <p>{s.text}</p>
          {s.cite && (
            <cite className="block mt-2 text-xs text-ink-3 not-italic">
              — {s.cite}
            </cite>
          )}
        </blockquote>
      );
    case "callout":
      return (
        <aside className="rounded-2xl border border-saffron/30 bg-saffron/10 p-5 text-sm text-ink-2 leading-7">
          {s.text}
        </aside>
      );
  }
}

export const dynamicParams = false;
