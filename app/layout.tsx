import type { Metadata, Viewport } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import SiteHeader from "./components/site-header";
import SiteFooter from "./components/site-footer";

const vazir = Vazirmatn({
  variable: "--font-vazir",
  subsets: ["arabic", "latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0d6f6a",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://parsigate.shop"),
  title: {
    default: "پارسی‌گیت — خرید اشتراک هوش مصنوعی، VPN و گیفت کارت با تتر",
    template: "%s | پارسی‌گیت",
  },
  description:
    "خرید مستقیم اشتراک ChatGPT Plus، Claude Pro، Midjourney، Cursor و ده‌ها سرویس هوش مصنوعی، گیفت کارت اپل و گوگل پلی، وی‌پی‌ان و پراکسی برای کاربران ایرانی. پرداخت با تتر USDT.",
  keywords: [
    "خرید چت جی‌پی‌تی پلاس",
    "خرید Claude Pro",
    "خرید Midjourney",
    "خرید اشتراک هوش مصنوعی",
    "خرید Cursor",
    "گیفت کارت اپل",
    "وی‌پی‌ان ایران",
    "خرید با تتر",
    "USDT subscription Iran",
    "AI services Iran",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "fa-IR": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    siteName: "پارسی‌گیت",
    title: "پارسی‌گیت — مارکت‌پلیس اشتراک سرویس‌های جهانی",
    description:
      "خرید اشتراک ChatGPT، Claude، Midjourney و ده‌ها سرویس هوش مصنوعی برای کاربران ایرانی.",
  },
  twitter: {
    card: "summary_large_image",
    title: "پارسی‌گیت — خرید اشتراک سرویس‌های جهانی",
    description:
      "خرید اشتراک هوش مصنوعی، VPN، گیفت کارت و مدل سه‌بعدی با پرداخت تتر.",
  },
  robots: {
    index: true,
    follow: true,
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
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
