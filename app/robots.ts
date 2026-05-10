import type { MetadataRoute } from "next";
import { abs } from "@/lib/config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: abs("/sitemap.xml"),
  };
}
