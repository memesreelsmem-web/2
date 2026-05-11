import { ALL_POSTS } from "./blog-posts";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  /** ISO date e.g. "2026-02-24" */
  dateIso: string;
  /** Persian-calendar formatted date e.g. "۵ اسفند ۱۴۰۴" */
  datePersian: string;
  category: BlogCategory;
  readingMinutes: number;
  /** Internal links to related service slugs */
  relatedServices?: string[];
  /** Internal links to related blog slugs */
  relatedPosts?: string[];
  /** Long-form Markdown-ish body, rendered through a thin renderer (no MDX dep). */
  body: BlogSection[];
  /** Optional FAQ at the bottom with FAQPage schema. */
  faq?: { q: string; a: string }[];
};

export type BlogSection =
  | { type: "p"; text: string }
  | { type: "h2"; text: string; id?: string }
  | { type: "h3"; text: string; id?: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string; cite?: string }
  | { type: "callout"; text: string };

export type BlogCategoryDef = {
  slug: BlogCategory;
  nameFa: string;
};

export type BlogCategory =
  | "how-to-buy"
  | "comparisons"
  | "ai-news"
  | "guides"
  | "usdt-payment"
  | "troubleshooting";

export const BLOG_CATEGORIES: BlogCategoryDef[] = [
  { slug: "how-to-buy", nameFa: "راهنمای خرید" },
  { slug: "comparisons", nameFa: "مقایسه و انتخاب" },
  { slug: "ai-news", nameFa: "اخبار هوش مصنوعی" },
  { slug: "guides", nameFa: "آموزش‌ها" },
  { slug: "usdt-payment", nameFa: "پرداخت تتر" },
  { slug: "troubleshooting", nameFa: "رفع مشکل" },
];

/** Helper to produce an id for the table-of-contents anchors. */
export function sectionId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[\s\u200c]+/g, "-")
    .replace(/[^\w\u0600-\u06FF\-]/g, "")
    .slice(0, 64);
}

export const POSTS: BlogPost[] = ALL_POSTS;

export const POST_BY_SLUG: Record<string, BlogPost> = Object.fromEntries(
  POSTS.map((p) => [p.slug, p])
);

export function postsByCategory(category: BlogCategory): BlogPost[] {
  return POSTS.filter((p) => p.category === category);
}

export function latestPosts(limit = 6): BlogPost[] {
  return [...POSTS]
    .sort((a, b) => (a.dateIso < b.dateIso ? 1 : -1))
    .slice(0, limit);
}
