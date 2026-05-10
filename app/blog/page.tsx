import { Metadata } from "next";
import Link from "next/link";
import { POSTS, BLOG_CATEGORIES } from "@/lib/blog";
import { formatPersianDate } from "@/lib/persian-calendar";
import { abs, SITE_NAME } from "@/lib/config";

export const metadata: Metadata = {
  title: `بلاگ ${SITE_NAME} — راهنمای خرید، مقایسه و آموزش (۲۰۲۶)`,
  description: `راهنماهای جامع خرید ChatGPT Plus، Claude، Midjourney و دیگر سرویس‌های هوش مصنوعی برای ایرانی‌ها. مقایسه ابزارها، آموزش پرداخت با تتر USDT، و خبرهای دنیای AI.`,
  alternates: { canonical: "/blog" },
  openGraph: {
    title: `بلاگ ${SITE_NAME}`,
    description:
      "راهنماهای خرید و مقایسه سرویس‌های هوش مصنوعی برای کاربران ایرانی.",
    type: "website",
    url: abs("/blog"),
  },
};

export default function BlogIndex() {
  const sorted = [...POSTS].sort((a, b) => (a.dateIso < b.dateIso ? 1 : -1));

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: `بلاگ ${SITE_NAME}`,
            url: abs("/blog"),
            inLanguage: "fa-IR",
            blogPost: sorted.slice(0, 20).map((p) => ({
              "@type": "BlogPosting",
              headline: p.title,
              url: abs(`/blog/${p.slug}`),
              datePublished: p.dateIso,
              description: p.excerpt,
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "صفحه اصلی", item: abs("/") },
              { "@type": "ListItem", position: 2, name: "بلاگ", item: abs("/blog") },
            ],
          }),
        }}
      />

      <section className="border-b border-rule bg-paper-2">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <nav className="text-xs text-ink-3 mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-teal">
              صفحه اصلی
            </Link>
            <span>/</span>
            <span className="text-ink-2">بلاگ</span>
          </nav>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-saffron-2 lat font-latin">
            Blog
          </p>
          <h1 className="mt-2 text-3xl sm:text-5xl font-bold text-ink">
            راهنمای خرید و مقایسه سرویس‌های هوش مصنوعی
          </h1>
          <p className="mt-4 text-base sm:text-lg text-ink-2 leading-8 max-w-3xl">
            مقاله‌های راهنما، مقایسه ابزارها، آموزش پرداخت با تتر، و اخبار
            هوش مصنوعی. همه‌ی مقاله‌ها بر اساس تجربه‌ی واقعی کاربران ایرانی
            نوشته شده‌اند.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap gap-2 mb-8">
          <span className="px-3 py-1.5 rounded-full bg-paper-2 text-ink-2 text-xs border border-rule">
            همه ({POSTS.length})
          </span>
          {BLOG_CATEGORIES.map((c) => {
            const count = POSTS.filter((p) => p.category === c.slug).length;
            if (count === 0) return null;
            return (
              <span
                key={c.slug}
                className="px-3 py-1.5 rounded-full bg-paper-2 text-ink-3 text-xs border border-rule"
              >
                {c.nameFa} ({count})
              </span>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sorted.map((p) => {
            const catFa = BLOG_CATEGORIES.find((c) => c.slug === p.category)?.nameFa;
            return (
              <article
                key={p.slug}
                className="rounded-2xl border border-rule bg-card overflow-hidden card-lift"
              >
                <Link href={`/blog/${p.slug}`} className="block p-6">
                  <p className="text-[11px] text-ink-3 flex items-center gap-2 flex-wrap">
                    <span className="px-2 py-0.5 rounded-full bg-paper-2 border border-rule">
                      {catFa}
                    </span>
                    <span>{formatPersianDate(p.dateIso)}</span>
                    <span>·</span>
                    <span>{p.readingMinutes} دقیقه</span>
                  </p>
                  <h2 className="mt-3 text-lg font-semibold text-ink leading-7 line-clamp-2">
                    {p.title}
                  </h2>
                  <p className="mt-2 text-sm text-ink-2 leading-7 line-clamp-3">
                    {p.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-teal">
                    خواندن مقاله →
                  </span>
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
