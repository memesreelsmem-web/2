import type { MetadataRoute } from "next";
import { SITE_NAME, SITE_NAME_LATIN } from "@/lib/config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} — ${SITE_NAME_LATIN}`,
    short_name: SITE_NAME,
    description:
      "مارکت‌پلیس ایرانی برای خرید اشتراک هوش مصنوعی، گیفت کارت، وی‌پی‌ان و آسِت‌های دیجیتال با پرداخت تتر USDT.",
    start_url: "/",
    display: "standalone",
    background_color: "#fbf6e7",
    theme_color: "#0d6f6a",
    lang: "fa-IR",
    dir: "rtl",
    orientation: "portrait",
    icons: [
      { src: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
    ],
  };
}
