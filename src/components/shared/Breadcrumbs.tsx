import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-4 flex flex-wrap items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#a89ab8]"
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <span key={item.label} className="inline-flex items-center gap-1">
            {index > 0 ? (
              <ChevronRight className="h-3 w-3 opacity-60" aria-hidden />
            ) : null}
            {item.href && !isLast ? (
              <Link href={item.href} className="transition hover:text-[#bf5aff]">
                {item.label}
              </Link>
            ) : (
              <span className="text-[#c8bfd8]" aria-current="page">
                {item.label}
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
