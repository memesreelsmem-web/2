/**
 * Central site config. All site-wide URLs and contact handles come from here so
 * that the deployment env can override them without touching components.
 */

const fromEnv = (name: string, fallback: string) => {
  const v = process.env[name];
  return v && v.trim().length > 0 ? v.trim() : fallback;
};

export const SITE_URL = fromEnv("NEXT_PUBLIC_SITE_URL", "https://parsigate.shop");
export const SITE_NAME = fromEnv("NEXT_PUBLIC_SITE_NAME", "پارسی‌گیت");
export const SITE_NAME_LATIN = fromEnv("NEXT_PUBLIC_SITE_NAME_LATIN", "Parsigate");

export const TELEGRAM_SUPPORT_USERNAME = fromEnv(
  "NEXT_PUBLIC_TELEGRAM_SUPPORT",
  "parsigate_support"
);
export const TELEGRAM_NEWS_USERNAME = fromEnv(
  "NEXT_PUBLIC_TELEGRAM_NEWS",
  "parsigate_news"
);

export const TELEGRAM_SUPPORT_URL = `https://t.me/${TELEGRAM_SUPPORT_USERNAME}`;
export const TELEGRAM_NEWS_URL = `https://t.me/${TELEGRAM_NEWS_USERNAME}`;

export const SUPPORT_HOURS_FA = "پشتیبانی ۲۴ ساعته";
export const DELIVERY_TIME_FA = "تحویل ۱۵ دقیقه";

export const NOBITEX_API_URL = "https://api.nobitex.ir/v2/orderbook/USDTIRT";

/**
 * Builds a deep-link to the Telegram support bot/account, optionally pre-filling
 * a start parameter so we can track which service the user clicked from.
 */
export function buildTelegramStart(payload?: string): string {
  if (!payload) return TELEGRAM_SUPPORT_URL;
  return `${TELEGRAM_SUPPORT_URL}?start=${encodeURIComponent(payload)}`;
}

/** Absolute URL helper that respects SITE_URL. */
export function abs(path: string): string {
  if (path.startsWith("http")) return path;
  const base = SITE_URL.replace(/\/$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}
