"use client";

import { useState } from "react";
import type { FaqItem } from "@/lib/types";

export default function Faq({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="rounded-2xl border border-rule bg-card divide-y divide-rule overflow-hidden">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 text-right px-5 py-4 hover:bg-paper-2/60"
            >
              <span className="text-sm sm:text-base font-semibold text-ink">
                {item.q}
              </span>
              <span
                className={`shrink-0 size-7 rounded-full border border-rule-2 inline-flex items-center justify-center text-teal transition-transform ${isOpen ? "rotate-45" : ""}`}
                aria-hidden
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4">
                  <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                </svg>
              </span>
            </button>
            {isOpen && (
              <div className="px-5 pb-5 text-sm text-ink-2 leading-7">
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
