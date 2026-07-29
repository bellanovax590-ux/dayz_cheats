import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Clock3,
  Tag,
} from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { blogPosts } from "@/lib/blog/index";

const SITE_URL = "https://dayzcheat.net";

const blogListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "DayZ Cheats Blog Guides",
  description:
    "Long-form guides on DayZ ESP, aimbot, loot filters, radar, and BattlEye update habits.",
  numberOfItems: blogPosts.length,
  itemListElement: blogPosts.map((post, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: `${SITE_URL}/blog/${post.slug}/`,
    name: post.title,
  })),
};

export const metadata: Metadata = {
  title: "DayZ Cheats Blog – ESP, Aimbot & BattlEye Guides",
  description:
    "Long-form DayZ cheats guides on ESP setup, aimbot FOV, loot filters, radar, BattlEye checks, and buying tips. Plain English SEO articles from dayzcheat.net.",
  alternates: { canonical: "/blog/" },
  keywords: [
    "DayZ cheats",
    "DayZ ESP",
    "DayZ aimbot",
    "DayZ loot ESP",
    "BattlEye",
    "dayzcheat.net",
  ],
  openGraph: {
    title: "DayZ Cheats Blog – Guides & Tips",
    description:
      "In-depth DayZ ESP, aimbot, and radar guides written for players who want clear setup advice and honest BattlEye risk notes.",
    url: "https://dayzcheat.net/blog/",
  },
};

export default function BlogPage() {
  const posts = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogListSchema),
        }}
      />
      <PageHero
        eyebrow="Blog"
        title="DayZ cheats guides & tips"
        description="Long, easy-to-read articles on DayZ ESP, aimbot settings, loot filters, radar, BattlEye habits, and buying — built to help dayzcheat.net rank for real player searches."
        icon={BookOpen}
      />
      <section className="px-4 py-14 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <article
              key={post.slug}
              className={`blog-card group flex flex-col overflow-hidden border border-white/10 bg-transparent transition hover:border-[#bf5aff]/45 blog-fade-item blog-fade-delay-${Math.min(index % 9, 8)}`}
            >
              <Link
                href={`/blog/${post.slug}/`}
                className="relative block overflow-hidden"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.coverImage}
                  alt={post.coverAlt}
                  className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  loading={index < 3 ? "eager" : "lazy"}
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
                  <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" aria-hidden />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
