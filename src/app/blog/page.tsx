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
import { OptimizedPicture } from "@/components/shared/OptimizedPicture";
import { blogPosts } from "@/lib/blog/index";
import { enhanceBlogSeo } from "@/lib/blog/keyword-seo";
import { blogIndexOgImage, blogCollectionSchema } from "@/lib/blog/seo";
import { createPageMetadata } from "@/lib/seo";
import { CHECKOUT_URL } from "@/lib/checkout";
import { SITE_URL } from "@/lib/site-url";

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
    name: enhanceBlogSeo(post).schemaHeadline,
  })),
};

export const metadata = createPageMetadata({
  title: "DayZ Cheats Blog – ESP, Aimbot & BattlEye Guides",
  description:
    "Searchable DayZ cheat guides on ESP setup, aimbot FOV, loot filters, radar, BattlEye checks, and buying tips. Long-form SEO articles from dayzcheat.net.",
  path: "/blog/",
  keywords: [
    "dayz cheat",
    "DayZ cheats",
    "DayZ cheat guide",
    "DayZ ESP",
    "DayZ aimbot",
    "DayZ loot ESP",
    "DayZ hack guide",
    "BattlEye",
    "dayzcheat.net",
  ],
  ogImage: blogIndexOgImage(),
});

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogCollectionSchema(blogPosts.length)),
        }}
      />
      <PageHero
        eyebrow="Blog"
        title="DayZ cheat guides & tips"
        description="Long, searchable articles on DayZ ESP, aimbot settings, loot filters, radar, BattlEye habits, and buying — built to rank for real player searches like dayz cheat, dayz esp, and dayz aimbot."
        icon={BookOpen}
      />
      <section className="border-b border-white/10 px-4 py-6 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 border border-[#bf5aff]/30 bg-[#bf5aff]/5 p-5">
          <p className="max-w-2xl text-sm leading-relaxed text-[#c8bfd8]">
            Every guide links to live DayZ cheat features, pricing, and secure
            checkout. Start with ESP setup or jump straight to access when you
            are ready.
          </p>
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#bf5aff] px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[#14081f] transition hover:bg-[#d946ef]"
          >
            Get DayZ Cheats
            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </a>
        </div>
      </section>
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
