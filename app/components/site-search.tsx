"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { SERVICES } from "@/lib/services";
import { CATEGORIES } from "@/lib/categories";

type Result = {
  href: string;
  title: string;
  subtitle: string;
  kind: "service" | "category";
};

function score(query: string, ...fields: string[]): number {
  const q = query.trim().toLowerCase();
  if (!q) return 0;
  let best = 0;
  for (const field of fields) {
    if (!field) continue;
    const f = field.toLowerCase();
    if (f === q) best = Math.max(best, 100);
    else if (f.startsWith(q)) best = Math.max(best, 70);
    else if (f.includes(q)) best = Math.max(best, 40);
  }
  return best;
}

export default function SiteSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const corpus = useMemo<Result[]>(
    () => [
      ...SERVICES.map((s) => ({
        href: `/service/${s.slug}`,
        title: s.nameFa,
        subtitle: s.name,
        kind: "service" as const,
      })),
      ...CATEGORIES.map((c) => ({
        href: `/category/${c.slug}`,
        title: c.nameFa,
        subtitle: c.subtitleFa,
        kind: "category" as const,
      })),
    ],
    []
  );

  const results = useMemo<Result[]>(() => {
    if (!query.trim()) return [];
    return corpus
      .map((r) => ({ r, s: score(query, r.title, r.subtitle) }))
      .filter((x) => x.s > 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, 10)
      .map((x) => x.r);
  }, [query, corpus]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(true);
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 30);
    } else {
      setQuery("");
    }
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="جستجو در محصولات"
        className="inline-flex items-center justify-center size-10 sm:size-auto sm:gap-2 sm:px-3 sm:py-2 rounded-full sm:rounded-md bg-paper-2 text-ink-2 hover:text-teal hover:bg-paper-3 border border-rule transition"
        type="button"
      >
        <SearchIcon className="size-4" />
        <span className="hidden sm:inline text-sm">جستجو…</span>
        <kbd className="hidden md:inline text-[10px] px-1.5 py-0.5 rounded bg-paper border border-rule text-ink-3 lat font-latin">
          ⌘K
        </kbd>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm flex items-start justify-center pt-[12vh] px-4"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="w-full max-w-2xl rounded-2xl bg-paper border border-rule-2 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 px-4 py-3 border-b border-rule">
              <SearchIcon className="size-5 text-ink-3" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="نام سرویس، دسته، یا کلمه کلیدی…"
                className="flex-1 bg-transparent outline-none text-base placeholder:text-ink-3"
                dir="auto"
              />
              <button
                onClick={() => setOpen(false)}
                aria-label="بستن"
                className="text-ink-3 hover:text-ink text-sm"
                type="button"
              >
                Esc
              </button>
            </div>
            <div className="max-h-[60vh] overflow-y-auto">
              {query.trim() && results.length === 0 && (
                <p className="px-5 py-8 text-center text-sm text-ink-3">
                  چیزی پیدا نشد. کلمه دیگری امتحان کنید.
                </p>
              )}
              {!query.trim() && (
                <div className="px-4 py-4">
                  <p className="text-[11px] text-ink-3 mb-2">پیشنهادها</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "ChatGPT Plus",
                      "Claude",
                      "Midjourney",
                      "Cursor",
                      "Spotify",
                      "وی‌پی‌ان",
                      "گیفت کارت",
                    ].map((s) => (
                      <button
                        key={s}
                        onClick={() => setQuery(s)}
                        className="text-xs px-3 py-1 rounded-full border border-rule bg-paper-2 hover:border-teal hover:text-teal"
                        type="button"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {results.length > 0 && (
                <ul className="py-2">
                  {results.map((r) => (
                    <li key={r.href}>
                      <Link
                        href={r.href}
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-between gap-3 px-5 py-3 hover:bg-paper-2"
                      >
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-ink truncate">
                            {r.title}
                          </p>
                          <p className="text-[11px] text-ink-3 lat font-latin truncate">
                            {r.subtitle}
                          </p>
                        </div>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-paper-2 border border-rule text-ink-3 shrink-0">
                          {r.kind === "service" ? "محصول" : "دسته"}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function SearchIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
      aria-hidden
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" strokeLinecap="round" />
    </svg>
  );
}
