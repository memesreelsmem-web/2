"use client";

import { useEffect, useState } from "react";

type Rate = {
  irrPriceTomans: number | null;
  loading: boolean;
  error: boolean;
  fetchedAt: number | null;
};

const FA_DIGITS = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

function toFa(n: number): string {
  return Math.round(n)
    .toLocaleString("en-US")
    .replace(/\d/g, (d) => FA_DIGITS[+d]);
}

export default function UsdtRateWidget({
  className = "",
}: {
  className?: string;
}) {
  const [rate, setRate] = useState<Rate>({
    irrPriceTomans: null,
    loading: true,
    error: false,
    fetchedAt: null,
  });

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch(
          "https://api.nobitex.ir/v2/orderbook/USDTIRT",
          { cache: "no-store" }
        );
        if (!res.ok) throw new Error("nobitex bad status");
        const json = (await res.json()) as { lastTradePrice?: string };
        const raw = json.lastTradePrice ? parseFloat(json.lastTradePrice) : NaN;
        if (Number.isFinite(raw) && raw > 0 && !cancelled) {
          // Nobitex returns rials; convert to tomans
          setRate({
            irrPriceTomans: raw / 10,
            loading: false,
            error: false,
            fetchedAt: Date.now(),
          });
        } else if (!cancelled) {
          setRate({
            irrPriceTomans: null,
            loading: false,
            error: true,
            fetchedAt: null,
          });
        }
      } catch {
        if (!cancelled) {
          setRate({
            irrPriceTomans: null,
            loading: false,
            error: true,
            fetchedAt: null,
          });
        }
      }
    }

    load();
    const id = setInterval(load, 60_000);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, []);

  return (
    <div
      className={`inline-flex items-center gap-3 rounded-full border border-rule bg-paper-2 px-4 py-2 ${className}`}
      aria-label="نرخ لحظه‌ای تتر در نوبیتکس"
    >
      <span className="size-2 rounded-full bg-teal animate-pulse" />
      <span className="text-xs text-ink-3">نرخ تتر</span>
      {rate.loading ? (
        <span className="text-xs text-ink-3 lat font-latin">…</span>
      ) : rate.error || rate.irrPriceTomans == null ? (
        <span className="text-xs text-ink-3">در دسترس نیست</span>
      ) : (
        <>
          <span className="text-sm font-semibold text-ink lat font-latin">
            {toFa(rate.irrPriceTomans)}
          </span>
          <span className="text-[10px] text-ink-3">تومان</span>
        </>
      )}
    </div>
  );
}
