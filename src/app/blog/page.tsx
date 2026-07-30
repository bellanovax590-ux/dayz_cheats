import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { BlogPostGrid } from "@/components/blog/BlogPostGrid";
import { PageHero } from "@/components/layout/PageHero";
import { blogPosts } from "@/lib/blog/index";
import { enhanceBlogSeo } from "@/lib/blog/keyword-seo";
import {
  blogCollectionSchema,
  blogIndexOgImage,
} from "@/lib/blog/seo";
import { CHECKOUT_URL } from "@/lib/checkout";
import { createPageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";
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

const blogCards = [...blogPosts]
  .sort((a, b) => (a.date < b.date ? 1 : -1))
  .map((post) => {
    const seo = enhanceBlogSeo(post);
    return {
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      category: post.category,
      date: post.date,
      readTime: post.readTime,
      coverImage: post.coverImage,
      coverAlt: post.coverAlt,
      searchText: [
        post.title,
        post.excerpt,
        post.category,
        post.slug.replace(/-/g, " "),
        ...seo.keywords,
        ...seo.primaryTerms,
      ]
        .join(" ")
        .toLowerCase(),
    };
  });

export const metadata: Metadata = createPageMetadata({
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "DayZ Cheats Blog", path: "/blog/" },
            ]),
          ),
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
            checkout. Use search above the grid for dayz aimbot, esp, cheats,
            radar, or BattlEye topics.
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
      <BlogPostGrid posts={blogCards} />
    </main>
  );
}
