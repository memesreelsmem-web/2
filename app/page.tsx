import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Hero from "./components/hero";
import TrustStrip from "./components/trust-strip";
import SectionHeading from "./components/section-heading";
import CategoryTile from "./components/category-tile";
import ServiceCard from "./components/service-card";
import UsdtBanner from "./components/usdt-banner";
import OrderSteps from "./components/order-steps";
import Faq from "./components/faq";
import { CATEGORIES } from "@/lib/categories";
import { SERVICES, servicesByCategory } from "@/lib/services";
import { latestPosts } from "@/lib/blog";
import { formatPersianDate } from "@/lib/persian-calendar";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const HOME_FAQ = [
  {
    q: "چه چیزهایی در پارسی‌گیت می‌توانم بخرم؟",
    a: "اشتراک تمام سرویس‌های هوش مصنوعی محبوب جهان (ChatGPT، Claude، Midjourney، Cursor و …)، گیفت کارت اپل و گوگل پلی، اشتراک Spotify، Netflix، YouTube Premium، وی‌پی‌ان و پراکسی مخصوص ایران، و خرید مدل‌های سه‌بعدی از Sketchfab، CGTrader، TurboSquid و دیگر مارکت‌های جهانی.",
  },
  {
    q: "آیا اشتراک روی اکانت خودم فعال می‌شود؟",
    a: "بله. تقریباً همه اشتراک‌ها روی اکانت ایمیل شخصی شما فعال می‌شوند. ما هرگز پسورد شما را نمی‌خواهیم؛ فعال‌سازی از طریق دعوت رسمی، گیفت یا کد فعال انجام می‌شود.",
  },
  {
    q: "روند خرید چگونه است؟",
    a: "محصول را انتخاب کنید، روی «سفارش از تلگرام» بزنید. پشتیبانی شبانه‌روزی، آدرس کیف پول USDT را به شما می‌دهد. پس از واریز، اشتراک حداکثر تا ۱۵ دقیقه فعال می‌شود.",
  },
  {
    q: "چه شبکه‌هایی برای پرداخت تتر پشتیبانی می‌شود؟",
    a: "TRC-20 (شبکه ترون)، TON (شبکه تلگرام)، BEP-20 (شبکه بایننس)، ERC-20 (شبکه اتریوم) و Polygon. پیشنهاد می‌کنیم برای کارمزد پایین از TRC-20 یا TON استفاده کنید.",
  },
  {
    q: "آیا برای کاربران ایرانی مشکلی پیش نمی‌آید؟",
    a: "ما تمام سرویس‌ها را با IP غیر ایران فعال می‌کنیم تا اکانت شما در امنیت کامل باشد. برای استفاده روزمره از ChatGPT و سرویس‌های مشابه به وی‌پی‌ان نیاز دارید که از ما هم می‌توانید بخرید.",
  },
  {
    q: "اگر اشتراک قبل از پایان مدت قطع شد چه می‌شود؟",
    a: "همه سرویس‌ها گارانتی فعال‌بودن تا انتهای دوره را دارند. در صورت بروز هر مشکل، اشتراک شما رایگان جایگزین یا مبلغش بازگردانده می‌شود.",
  },
  {
    q: "تفاوت پارسی‌گیت با گروه‌های فروش اکانت تلگرامی چیست؟",
    a: "ما اکانت مشترک یا کرک‌شده نمی‌فروشیم. هر اشتراک قانونی و فعال روی ایمیل شخصی شما با IP خارجی فعال می‌شود. هیچ ریسک مسدودیتی وجود ندارد و کنترل کامل اکانت با شماست.",
  },
  {
    q: "چقدر طول می‌کشد تا اشتراک تحویل داده شود؟",
    a: "حداکثر ۱۵ دقیقه پس از تأیید پرداخت. در بیش از ۹۰٪ موارد تحویل زیر ۵ دقیقه است.",
  },
];

const POPULAR_BRANDS = [
  { name: "ChatGPT", logo: "/logos/openai.png", href: "/service/chatgpt-plus" },
  { name: "Claude", logo: "/logos/anthropic.png", href: "/service/claude-pro" },
  { name: "Midjourney", logo: "/logos/midjourney.png", href: "/service/midjourney" },
  { name: "Spotify", logo: "/logos/spotify.png", href: "/service/spotify-premium" },
  { name: "Netflix", logo: "/logos/netflix.png", href: "/service/netflix" },
  { name: "Canva", logo: "/logos/canva.png", href: "/service/canva-pro" },
  { name: "YouTube", logo: "/logos/youtube.png", href: "/service/youtube-premium" },
  { name: "Cursor", logo: "/logos/cursor.png", href: "/service/cursor" },
  { name: "Apple", logo: "/logos/apple.png", href: "/category/gift-card" },
  { name: "Adobe", logo: "/logos/adobe.png", href: "/service/adobe-creative-cloud" },
];

export default function HomePage() {
  const bestsellers = SERVICES.filter((s) => s.bestseller).slice(0, 8);
  const aiChat = servicesByCategory("ai-chat").slice(0, 6);
  const aiImage = servicesByCategory("ai-image").slice(0, 4);
  const vpns = servicesByCategory("vpn").slice(0, 4);
  const threed = servicesByCategory("3d-marketplace").slice(0, 4);
  const subscriptions = servicesByCategory("subscription").slice(0, 6);
  const streaming = servicesByCategory("streaming").slice(0, 6);
  const tools = servicesByCategory("tools").slice(0, 6);
  const recentPosts = latestPosts(3);

  const categoryCounts = Object.fromEntries(
    CATEGORIES.map((c) => [c.slug, servicesByCategory(c.slug).length])
  );

  return (
    <>
      <Hero />
      <TrustStrip />

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: HOME_FAQ.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      {/* POPULAR BRANDS — symmetric grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-lg font-bold text-ink mb-5">محبوب‌ترین برندها</h2>
        <div className="grid grid-cols-5 sm:grid-cols-5 lg:grid-cols-10 gap-3">
          {POPULAR_BRANDS.map((b) => (
            <Link
              key={b.name}
              href={b.href}
              className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-card border border-rule hover:border-teal/30 transition group"
            >
              <div className="relative size-10 sm:size-12 group-hover:scale-110 transition-transform">
                <Image src={b.logo} alt={b.name} fill className="object-contain" sizes="48px" unoptimized />
              </div>
              <span className="text-[11px] text-ink-2 group-hover:text-teal transition whitespace-nowrap lat font-latin">{b.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* BESTSELLERS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <SectionHeading
          eyebrow="Bestsellers"
          title="پرفروش‌ترین سرویس‌ها"
          subtitle="بهترین انتخاب‌های کاربران ایرانی"
          viewAllHref="/category/ai-chat"
        />
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
          {bestsellers.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>

      <div className="ornament-thick mx-auto max-w-7xl" aria-hidden />

      {/* AI CHAT */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <SectionHeading
          eyebrow="AI Chat"
          title="چت‌بات‌های هوش مصنوعی"
          subtitle="ChatGPT، Claude، Gemini و Perplexity روی اکانت شخصی شما"
          viewAllHref="/category/ai-chat"
        />
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
          {aiChat.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>

      {/* STREAMING */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <SectionHeading
          eyebrow="Streaming"
          title="سرویس‌های استریم و موسیقی"
          subtitle="Spotify، Netflix، YouTube Premium و دیگر سرویس‌های استریم"
          viewAllHref="/category/streaming"
        />
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
          {streaming.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>

      {/* USDT BANNER */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <UsdtBanner />
      </section>

      {/* TOOLS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <SectionHeading
          eyebrow="Tools & SaaS"
          title="ابزارها و نرم‌افزارها"
          subtitle="Canva، Adobe، Notion و ده‌ها ابزار حرفه‌ای دیگر"
          viewAllHref="/category/tools"
        />
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
          {tools.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <SectionHeading
          eyebrow="Catalog"
          title="همه دسته‌بندی‌ها"
          subtitle="بیش از ۱۰۰۰ سرویس فعال در دسته‌بندی‌های مختلف"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {CATEGORIES.map((c) => (
            <CategoryTile
              key={c.slug}
              category={c}
              serviceCount={categoryCounts[c.slug]}
            />
          ))}
        </div>
      </section>

      <div className="ornament-thick mx-auto max-w-7xl" aria-hidden />

      {/* HOW TO ORDER */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <SectionHeading
          eyebrow="How it works"
          title="فقط چهار قدم تا فعال‌سازی"
          subtitle="بدون نیاز به ثبت‌نام، فقط از طریق پشتیبانی تلگرام"
        />
        <OrderSteps />
      </section>

      {/* VPN */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <SectionHeading
          eyebrow="VPN"
          title="وی‌پی‌ان مخصوص ایرانیان"
          subtitle="کانفیگ‌های تست‌شده روی شبکه ایران"
          viewAllHref="/category/vpn"
        />
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
          {vpns.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>

      {/* BLOG */}
      {recentPosts.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <SectionHeading
            eyebrow="Blog"
            title="مقاله‌های راهنما"
            subtitle="جدیدترین راهنماهای خرید و آموزش‌ها"
            viewAllHref="/blog"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recentPosts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group block rounded-2xl border border-rule bg-card p-6 card-lift"
              >
                <p className="text-[11px] text-ink-3 flex items-center gap-2">
                  <span>{formatPersianDate(p.dateIso)}</span>
                  <span>·</span>
                  <span>{p.readingMinutes} دقیقه مطالعه</span>
                </p>
                <h3 className="mt-3 text-base font-semibold text-ink leading-7 line-clamp-2 group-hover:text-teal transition">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-ink-2 leading-7 line-clamp-2">
                  {p.excerpt}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-teal">
                  ادامه مطلب →
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeading
          eyebrow="FAQ"
          title="سوال‌های متداول"
          subtitle="هر سوالی که قبل از خرید دارید، احتمالاً اینجا پاسخ داده شده"
        />
        <Faq items={HOME_FAQ} />
      </section>
    </>
  );
}
