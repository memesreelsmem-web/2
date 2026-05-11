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
        className="absolute inset-x-0 top-0 h-1"
        style={{ background: `linear-gradient(90deg, ${category.accent}, transparent)` }}
      />
      <div
        aria-hidden
        className="absolute -bottom-8 -left-8 size-36 rounded-full opacity-[0.06] transition-opacity group-hover:opacity-[0.12]"
        style={{ background: `radial-gradient(circle, ${category.accent}, transparent)` }}
      />

      <div className="relative flex flex-col gap-3 min-h-[160px]">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-semibold text-ink leading-snug pe-4">
            {category.nameFa}
          </h3>
          {serviceCount !== undefined && (
            <span className="text-xs px-2.5 py-1 rounded-full bg-paper-3 text-ink-2 lat font-latin border border-rule">
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
        <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-teal group-hover:gap-2.5 transition-all">
          ورود به دسته
          <ArrowLeftIcon className="size-4" />
        </span>
      </div>
    </Link>
  );
}
