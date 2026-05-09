import Link from "next/link";
import { ArrowLeftIcon } from "./icons";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  viewAllHref,
  viewAllLabel = "مشاهده همه",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  viewAllHref?: string;
  viewAllLabel?: string;
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
      <div className="max-w-2xl">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-saffron-2 lat font-latin">
            {eyebrow}
          </p>
        )}
        <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-ink tracking-tight leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 text-sm sm:text-base text-ink-2 leading-7">
            {subtitle}
          </p>
        )}
      </div>
      {viewAllHref && (
        <Link
          href={viewAllHref}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-teal hover:gap-2.5 transition-all whitespace-nowrap"
        >
          {viewAllLabel}
          <ArrowLeftIcon className="size-4" />
        </Link>
      )}
    </div>
  );
}
