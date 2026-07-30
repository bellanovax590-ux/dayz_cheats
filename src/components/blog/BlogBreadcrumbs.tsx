import Link from "next/link";
import { ChevronRight } from "lucide-react";

type BlogBreadcrumbsProps = {
  postTitle: string;
};

export function BlogBreadcrumbs({ postTitle }: BlogBreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="blog-fade-item mt-4 flex flex-wrap items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#a89ab8]"
    >
      <Link href="/" className="transition hover:text-[#bf5aff]">
        Home
      </Link>
      <ChevronRight className="h-3 w-3 opacity-60" aria-hidden />
      <Link href="/blog/" className="transition hover:text-[#bf5aff]">
        Blog
      </Link>
      <ChevronRight className="h-3 w-3 opacity-60" aria-hidden />
      <span className="text-[#c8bfd8]" aria-current="page">
        {postTitle}
      </span>
    </nav>
  );
}
