import type { Metadata, Viewport } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import SiteHeader from "./components/site-header";
import SiteFooter from "./components/site-footer";
import {
  SITE_URL,
  SITE_NAME,
  SITE_NAME_LATIN,
  TELEGRAM_SUPPORT_URL,
  TELEGRAM_NEWS_URL,
  abs,
} from "@/lib/config";

const vazir = Vazirmatn({
  variable: "--font-vazir",
  subsets: ["arabic", "latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0d6f6a",
};

const homeTitle = `${SITE_NAME} | خرید اشتراک هوش مصنوعی، VPN و گیفت‌کارت با تتر USDT — تحویل ۱۵ دقیقه`;
const homeDescription =
  "خرید مستقیم ۷۰+ سرویس جهانی روی اکانت شخصی شما: ChatGPT Plus، Claude Pro، Midjourney، Cursor، Spotify، Netflix، گیفت‌کارت و وی‌پی‌ان. پرداخت با تتر USDT روی همه شبکه‌ها (TRC-20، TON، BEP-20، ERC-20، Polygon)، تحویل ۱۵ دقیقه، گارانتی فعال‌بودن، پشتیبانی ۲۴ ساعته در تلگرام.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: homeTitle,
    template: `%s | ${SITE_NAME}`,
  },
  description: homeDescription,
  keywords: [
    "خرید چت جی‌پی‌تی پلاس",
    "خرید ChatGPT Plus",
    "خرید Claude Pro",
    "خرید Midjourney",
    "خرید اشتراک هوش مصنوعی",
    "خرید اکانت پرمیوم",
    "خرید Cursor",
    "گیفت کارت اپل",
    "گیفت کارت گوگل پلی",
    "وی‌پی‌ان ایران",
    "خرید با تتر",
    "خرید با USDT",
    "USDT subscription Iran",
    "AI services Iran",
    "خرید اشتراک با ارز دیجیتال",
    "خرید نتفلیکس",
    "خرید اسپاتیفای",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "fa-IR": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    siteName: SITE_NAME,
    url: SITE_URL,
    title: homeTitle,
    description: homeDescription,
    images: [
      {
        url: abs("/opengraph-image"),
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — ${SITE_NAME_LATIN}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
    images: [abs("/opengraph-image")],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "shopping",
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  alternateName: SITE_NAME_LATIN,
  url: SITE_URL,
  logo: abs("/logo.png"),
  image: abs("/opengraph-image"),
  description:
    "مارکت‌پلیس ایرانی برای خرید اشتراک سرویس‌های جهانی هوش مصنوعی، گیفت‌کارت، وی‌پی‌ان و مدل سه‌بعدی با پرداخت تتر USDT.",
  areaServed: { "@type": "Country", name: "Iran" },
  sameAs: [TELEGRAM_SUPPORT_URL, TELEGRAM_NEWS_URL],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      url: TELEGRAM_SUPPORT_URL,
      areaServed: "IR",
      availableLanguage: ["Persian", "fa"],
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  alternateName: SITE_NAME_LATIN,
  url: SITE_URL,
  inLanguage: "fa-IR",
  publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL.replace(/\/$/, "")}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${vazir.variable} antialiased h-full`}
    >
      <body className="min-h-full bg-paper text-ink flex flex-col font-sans">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
