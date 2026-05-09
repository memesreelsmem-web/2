import Link from "next/link";
import type { CategoryDef } from "@/lib/types";
import { ArrowLeftIcon } from "./icons";

export default function CategoryTile({
  category,
  serviceCount,
}: {
  category: CategoryDef;
  serviceCount?: number;
}) {
  return (
    <Link
      href={`/category/${category.slug}`}
      className="group relative block rounded-2xl border border-rule bg-card p-5 card-lift overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-1.5"
        style={{ background: category.accent }}
      />
      <div
        aria-hidden
        className="absolute -bottom-10 -left-10 size-44 opacity-[0.07] transition-opacity group-hover:opacity-[0.12]"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full" aria-hidden>
          <g
            transform="translate(100 100)"
            fill="none"
            stroke={category.accent}
            strokeWidth="1.5"
          >
            <path d="M0 -80 L22 -22 L80 -20 L34 14 L52 70 L0 40 L-52 70 L-34 14 L-80 -20 L-22 -22 Z" />
            <circle r="30" />
            <circle r="50" />
          </g>
        </svg>
      </div>

      <div className="relative flex flex-col gap-3 min-h-[180px]">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-ink leading-snug pe-4">
            {category.nameFa}
          </h3>
          {serviceCount !== undefined && (
            <span className="text-xs px-2 py-1 rounded-full bg-paper-2 text-ink-3 lat font-latin">
              {serviceCount}
            </span>
          )}
        </div>
        <p className="text-xs text-ink-3 lat font-latin tracking-wide">
          {category.subtitleFa}
        </p>
        <p className="text-sm text-ink-2 leading-7 mt-auto pe-1">
          {category.descriptionFa}
        </p>
        <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-teal group-hover:gap-2.5 transition-all">
          ورود به دسته
          <ArrowLeftIcon className="size-4" />
        </span>
      </div>
    </Link>
  );
}
