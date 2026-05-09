import { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "خرید اشتراک هوش مصنوعی، VPN و گیفت کارت با تتر | پارسی‌گیت",
  description:
    "مارکت‌پلیس ایرانی برای خرید اشتراک ChatGPT Plus، Claude Pro، Midjourney، Cursor، Spotify و ده‌ها سرویس دیگر با پرداخت تتر USDT. تحویل تا ۱۵ دقیقه.",
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
];

export default function HomePage() {
  const bestsellers = SERVICES.filter((s) => s.bestseller).slice(0, 8);
  const aiChat = servicesByCategory("ai-chat").slice(0, 4);
  const aiImage = servicesByCategory("ai-image").slice(0, 4);
  const vpns = servicesByCategory("vpn").slice(0, 4);
  const threed = servicesByCategory("3d-marketplace").slice(0, 4);
  const subscriptions = servicesByCategory("subscription").slice(0, 4);

  const categoryCounts = Object.fromEntries(
    CATEGORIES.map((c) => [c.slug, servicesByCategory(c.slug).length])
  );

  return (
    <>
      <Hero />
      <TrustStrip />

      {/* JSON-LD: Organization */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "پارسی‌گیت",
            alternateName: "Parsigate",
            url: "https://parsigate.shop",
            description:
              "مارکت‌پلیس ایرانی برای خرید اشتراک سرویس‌های جهانی هوش مصنوعی با پرداخت تتر",
            sameAs: ["https://t.me/parsigate_support"],
          }),
        }}
      />
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

      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeading
          eyebrow="Catalog"
          title="در پارسی‌گیت چه می‌توانید بخرید؟"
          subtitle="بیش از ۵۰ سرویس فعال در ۱۳ دسته. روی هر دسته کلیک کنید و کاتالوگ کامل را ببینید."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {CATEGORIES.map((c) => (
            <CategoryTile
              key={c.slug}
              category={c}
              serviceCount={categoryCounts[c.slug]}
            />
          ))}
        </div>
      </section>

      <div className="ornament-thick mx-auto max-w-7xl opacity-50" aria-hidden />

      {/* BESTSELLERS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeading
          eyebrow="Bestsellers"
          title="پرفروش‌ترین سرویس‌های این ماه"
          subtitle="بهترین انتخاب‌های کاربران ایرانی در ماه گذشته"
          viewAllHref="/category/ai-chat"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {bestsellers.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>

      {/* AI CHAT */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeading
          eyebrow="AI Chat"
          title="چت‌بات‌های هوش مصنوعی"
          subtitle="ChatGPT، Claude، Gemini و Perplexity روی اکانت شخصی شما"
          viewAllHref="/category/ai-chat"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {aiChat.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>

      {/* AI IMAGE */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeading
          eyebrow="AI Image & Video"
          title="ساخت تصویر و ویدیو با هوش مصنوعی"
          subtitle="Midjourney، Leonardo، Runway، Pika و ابزارهای خلاقیت"
          viewAllHref="/category/ai-image"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {aiImage.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>

      {/* USDT BANNER */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <UsdtBanner />
      </section>

      {/* VPN */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeading
          eyebrow="Iran-Friendly VPN"
          title="وی‌پی‌ان تست‌شده مخصوص ایرانیان"
          subtitle="کانفیگ‌های Outline، V2Ray، WireGuard و VPN‌های تجاری معتبر — همه روی شبکه ایران تست شده"
          viewAllHref="/category/vpn"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {vpns.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>

      {/* HOW TO ORDER */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeading
          eyebrow="How it works"
          title="فقط چهار قدم تا فعال‌سازی اشتراک"
          subtitle="بدون نیاز به ثبت‌نام، فقط از طریق پشتیبانی تلگرام"
        />
        <OrderSteps />
      </section>

      {/* 3D MARKETPLACE */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeading
          eyebrow="3D Models"
          title="خرید مدل سه‌بعدی از همه پلتفرم‌ها"
          subtitle="هر مدل، براش، آسِت یا اَدآنی که نیاز دارید را برایتان از Sketchfab، CGTrader، TurboSquid، Fab و … می‌خریم"
          viewAllHref="/category/3d-marketplace"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {threed.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>

      {/* SUBSCRIPTIONS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <SectionHeading
          eyebrow="Streaming"
          title="اشتراک سرویس‌های استریم"
          subtitle="Spotify، Netflix، YouTube Premium، Discord Nitro و دیگر سرویس‌های جهانی"
          viewAllHref="/category/subscription"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {subscriptions.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
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
