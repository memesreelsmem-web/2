import type { CategoryDef } from "./types";

export const CATEGORIES: CategoryDef[] = [
  {
    slug: "ai-chat",
    nameFa: "چت‌بات و دستیار هوش مصنوعی",
    subtitleFa: "ChatGPT, Claude, Gemini, Perplexity",
    descriptionFa:
      "اشتراک سرویس‌های گفتگوی هوش مصنوعی برای پاسخ‌گویی، تحقیق و نوشتن متن‌های حرفه‌ای.",
    accent: "#0d6f6a",
    group: "ai",
  },
  {
    slug: "ai-image",
    nameFa: "تولید تصویر با هوش مصنوعی",
    subtitleFa: "Midjourney, Leonardo, Ideogram, Flux",
    descriptionFa:
      "ابزارهای ساخت تصویر و آرت با هوش مصنوعی برای طراحان، بازاریاب‌ها و سازندگان محتوا.",
    accent: "#b85a2e",
    group: "ai",
  },
  {
    slug: "ai-video",
    nameFa: "ساخت ویدیو با هوش مصنوعی",
    subtitleFa: "Runway, Pika, Kling, HeyGen, Sora",
    descriptionFa:
      "اشتراک سرویس‌های تولید و ادیت ویدیو با هوش مصنوعی برای ساخت تیزر، آواتار و ویدیوی تبلیغاتی.",
    accent: "#7a3b8f",
    group: "ai",
  },
  {
    slug: "ai-audio",
    nameFa: "موسیقی و صدا با هوش مصنوعی",
    subtitleFa: "ElevenLabs, Suno, Udio, Murf",
    descriptionFa:
      "ابزارهای ساخت صدا، دوبله، ترانه و افکت‌های صوتی با هوش مصنوعی.",
    accent: "#1f5f88",
    group: "ai",
  },
  {
    slug: "ai-code",
    nameFa: "هوش مصنوعی برای برنامه‌نویسی",
    subtitleFa: "Cursor, Copilot, Windsurf, v0",
    descriptionFa:
      "دستیارهای کدنویسی هوشمند برای توسعه‌دهندگان و تیم‌های مهندسی.",
    accent: "#15524a",
    group: "ai",
  },
  {
    slug: "ai-productivity",
    nameFa: "بهره‌وری و نوشتن هوشمند",
    subtitleFa: "Notion AI, Grammarly, Jasper",
    descriptionFa:
      "ابزارهای بهره‌وری و نوشتن متن با هوش مصنوعی برای کسب‌وکار و دانشجو.",
    accent: "#8a6b1f",
    group: "ai",
  },
  {
    slug: "ai-design",
    nameFa: "طراحی و خلاقیت",
    subtitleFa: "Adobe Firefly, Canva Pro, Figma",
    descriptionFa: "اشتراک ابزارهای طراحی گرافیک، UX و خلق محتوای دیجیتال.",
    accent: "#a83a3a",
    group: "ai",
  },
  {
    slug: "ai-research",
    nameFa: "تحقیق و جستجوی هوشمند",
    subtitleFa: "Perplexity, Consensus, Elicit",
    descriptionFa:
      "موتورهای جستجو و تحقیق علمی مبتنی بر هوش مصنوعی برای پژوهشگران.",
    accent: "#2e6b4f",
    group: "ai",
  },
  {
    slug: "3d-marketplace",
    nameFa: "خرید مدل‌های سه‌بعدی",
    subtitleFa: "Sketchfab, CGTrader, TurboSquid, Fab",
    descriptionFa:
      "خرید مدل‌های سه‌بعدی، تکسچر و آسِت از تمام مارکت‌پلیس‌های بزرگ جهان به نام شما.",
    accent: "#1d4d6e",
    group: "3d",
  },
  {
    slug: "vpn",
    nameFa: "وی‌پی‌ان مخصوص ایران",
    subtitleFa: "Outline, V2Ray, WireGuard, Trojan",
    descriptionFa:
      "کانفیگ‌های اختصاصی و پایدار برای کاربران ایرانی، با تست واقعی روی شبکه داخلی.",
    accent: "#0d4f4a",
    group: "access",
  },
  {
    slug: "proxy",
    nameFa: "پراکسی اختصاصی",
    subtitleFa: "Residential, Mobile, Datacenter",
    descriptionFa:
      "پراکسی‌های ثابت و چرخشی برای کارهای تخصصی، اسکریپت، اتومیشن و مدیریت حساب.",
    accent: "#404a8b",
    group: "access",
  },
  {
    slug: "gift-card",
    nameFa: "گیفت کارت و کیف پول",
    subtitleFa: "App Store, Google Play, Steam",
    descriptionFa:
      "خرید گیفت کارت‌های منطقه‌های مختلف برای شارژ اپ‌استور، گوگل پلی، استیم و پلی‌استیشن.",
    accent: "#8a3b6b",
    group: "extras",
  },
  {
    slug: "subscription",
    nameFa: "اشتراک سرویس‌های جهانی",
    subtitleFa: "Netflix, Spotify, YouTube Premium",
    descriptionFa:
      "اشتراک سرویس‌های استریم و سرگرمی جهانی، روی اکانت شخصی شما.",
    accent: "#a8324a",
    group: "extras",
  },
];

export const CATEGORY_BY_SLUG: Record<string, CategoryDef> = Object.fromEntries(
  CATEGORIES.map((c) => [c.slug, c])
);
