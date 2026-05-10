import type { MetadataRoute } from "next";
import { CATEGORIES } from "@/lib/categories";
import { SERVICES } from "@/lib/services";
import { POSTS } from "@/lib/blog";
import { BEST_PAGES } from "@/lib/best-pages";
import { abs } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPaths: Array<[string, number, MetadataRoute.Sitemap[number]["changeFrequency"]]> = [
    ["/", 1, "weekly"],
    ["/blog", 0.9, "weekly"],
    ["/payment", 0.8, "monthly"],
    ["/how-to-order", 0.8, "monthly"],
    ["/about", 0.6, "yearly"],
    ["/contact", 0.6, "yearly"],
    ["/guarantee", 0.6, "yearly"],
    ["/refund", 0.5, "yearly"],
    ["/terms", 0.4, "yearly"],
    ["/privacy", 0.4, "yearly"],
  ];

  const staticUrls: MetadataRoute.Sitemap = staticPaths.map(([p, priority, changeFrequency]) => ({
    url: abs(p),
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const categoryUrls: MetadataRoute.Sitemap = CATEGORIES.map((c) => ({
    url: abs(`/category/${c.slug}`),
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const serviceUrls: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: abs(`/service/${s.slug}`),
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const blogUrls: MetadataRoute.Sitemap = POSTS.map((p) => ({
    url: abs(`/blog/${p.slug}`),
    lastModified: new Date(p.dateIso),
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  const bestUrls: MetadataRoute.Sitemap = BEST_PAGES.map((b) => ({
    url: abs(`/best/${b.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticUrls, ...categoryUrls, ...serviceUrls, ...blogUrls, ...bestUrls];
}
