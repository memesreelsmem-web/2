/**
 * Persian calendar (Jalali) date formatting using the platform `Intl` API.
 * Browsers and Node 20+ ship with the `persian` calendar built in.
 */

const PERSIAN_DIGITS = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"] as const;

export function toPersianDigits(input: string | number): string {
  return String(input).replace(/\d/g, (d) => PERSIAN_DIGITS[Number(d)]);
}

export function formatPersianDate(input: Date | string): string {
  const date = typeof input === "string" ? new Date(input) : input;
  // fa-IR-u-ca-persian forces Jalali calendar. Numeric output looks like 1404/12/05; we want
  // the long form like "۵ اسفند ۱۴۰۴".
  return new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

export function formatPersianDateTime(input: Date | string): string {
  const date = typeof input === "string" ? new Date(input) : input;
  return new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}
