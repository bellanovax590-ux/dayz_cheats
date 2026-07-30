"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Search,
  Tag,
} from "lucide-react";
import { OptimizedPicture } from "@/components/shared/OptimizedPicture";

export type BlogCardPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  coverImage: string;
  coverAlt: string;
  searchText: string;
};

type BlogPostGridProps = {
  posts: BlogCardPost[];
};

export function BlogPostGrid({ posts }: BlogPostGridProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const initial = params.get("q");
    if (initial) setQuery(initial);
  }, []);

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return posts;
    return posts.filter((post) => post.searchText.includes(term));
  }, [posts, query]);

  return (
    <>
      <section className="border-b border-white/10 px-4 py-6 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <label
            htmlFor="blog-search"
            className="text-xs font-semibold uppercase tracking-[0.16em] text-[#bf5aff]"
          >
            Search DayZ cheat guides
          </label>
          <div className="relative mt-3">
            <Search
              className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#a89ab8]"
              aria-hidden
            />
            <input
              id="blog-search"
              type="search"
              name="q"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search dayz aimbot, esp, cheats, radar, battleye…"
              className="w-full border border-white/15 bg-[rgba(18,10,32,0.85)] py-3 pl-11 pr-4 text-sm text-white outline-none transition focus:border-[#bf5aff]/50"
            />
          </div>
          <p className="mt-2 text-xs text-[#a89ab8]">
            {filtered.length} guide{filtered.length === 1 ? "" : "s"} match
            {query.trim() ? ` “${query.trim()}”` : " your search"}
          </p>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post, index) => (
            <article
              key={post.slug}
              className={`blog-card group flex flex-col overflow-hidden border border-white/10 bg-transparent transition hover:border-[#bf5aff]/45 blog-fade-item blog-fade-delay-${Math.min(index % 9, 8)}`}
            >
              <Link
                href={`/blog/${post.slug}/`}
                className="relative block overflow-hidden"
              >
                <OptimizedPicture
                  src={post.coverImage}
                  alt={post.coverAlt}
                  imgClassName="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  loading={index < 3 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : undefined}
                  width={720}
                  height={450}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07050f]/80 via-transparent to-transparent" />
              </Link>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex flex-wrap gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#a89ab8]">
                  <span className="inline-flex items-center gap-1 text-[#bf5aff]">
                    <Tag className="h-3 w-3" aria-hidden />
                    {post.category}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <CalendarDays className="h-3 w-3" aria-hidden />
                    {post.date}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock3 className="h-3 w-3" aria-hidden />
                    {post.readTime}
                  </span>
                </div>
                <h2 className="mt-4 text-xl font-bold text-white">
                  <Link
                    href={`/blog/${post.slug}/`}
                    className="transition hover:text-[#bf5aff]"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#c8bfd8]">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}/`}
                  className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#bf5aff]"
                >
                  Read article
                  <ArrowRight
                    className="h-3.5 w-3.5 transition group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>
        {filtered.length === 0 ? (
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-[#c8bfd8]">
            No guides matched that search. Try &quot;dayz esp&quot;,
            &quot;dayz aimbot&quot;, or &quot;dayz cheats&quot;.
          </p>
        ) : null}
      </section>
    </>
  );
}
