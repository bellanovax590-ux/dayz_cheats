import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CalendarDays,
  Clock3,
  Tag,
} from "lucide-react";
import { BlogArticleBody } from "@/components/blog/BlogArticleBody";
import { BlogBreadcrumbs } from "@/components/blog/BlogBreadcrumbs";
import { BlogGetCheatsCta } from "@/components/blog/BlogGetCheatsCta";
import { OptimizedPicture } from "@/components/shared/OptimizedPicture";
import { blogPosts } from "@/lib/blog/index";
import { getRelatedPosts } from "@/lib/blog/related";
import {
  blogBreadcrumbSchema,
  blogPostMetadata,
  blogPostingSchema,
} from "@/lib/blog/seo";
import { CHECKOUT_URL } from "@/lib/checkout";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return { title: "Article not found" };

  return blogPostMetadata(post);
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  const related = getRelatedPosts(post, blogPosts);

  return (
    <main className="flex-1 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostingSchema(post)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogBreadcrumbSchema(post)),
        }}
      />
      <article className="border-b border-white/10 px-4 py-14 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/blog/"
            className="blog-fade-item inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#bf5aff]"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
            Back to blog
          </Link>
          <BlogBreadcrumbs postTitle={post.title} />

          <div className="blog-fade-item blog-fade-delay-1 relative mt-6 overflow-hidden border border-white/10">
            <OptimizedPicture
              src={post.coverImage}
              alt={post.coverAlt}
              imgClassName="aspect-[16/9] w-full object-cover"
              loading="eager"
              fetchPriority="high"
              width={1200}
              height={675}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07050f]/70 via-transparent to-transparent" />
          </div>

          <div className="blog-fade-item blog-fade-delay-2 mt-6 flex flex-wrap gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#a89ab8]">
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

          <h1 className="blog-fade-item blog-fade-delay-3 glow-text mt-4 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
            {post.title}
          </h1>
          <p className="blog-fade-item blog-fade-delay-4 mt-4 text-base font-medium text-[#c8bfd8]">
            {post.excerpt}
          </p>

          <BlogGetCheatsCta />

          <BlogArticleBody blocks={post.content} />

          <div className="blog-fade-item mt-12 flex flex-wrap gap-4 border-t border-white/10 pt-8">
            <Link
              href="/features/"
              className="inline-flex items-center gap-2 border border-[#bf5aff]/40 px-4 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[#bf5aff] transition hover:bg-[#bf5aff]/10"
            >
              <BookOpen className="h-3.5 w-3.5" aria-hidden />
              Features
            </Link>
            <Link
              href="/pricing/"
              className="inline-flex items-center gap-2 border border-white/20 px-4 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:border-[#bf5aff]/50"
            >
              Pricing
            </Link>
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#bf5aff] px-4 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[#14081f] transition hover:bg-[#d946ef]"
            >
              Get DayZ Cheats
              <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </a>
          </div>
        </div>
      </article>

      <section className="px-4 py-14 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="blog-fade-item text-2xl font-black uppercase tracking-tight text-white">
            More guides
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {related.map((item, index) => (
              <Link
                key={item.slug}
                href={`/blog/${item.slug}/`}
                className={`blog-card blog-fade-item blog-fade-delay-${index + 1} group overflow-hidden border border-white/10 transition hover:border-[#bf5aff]/45`}
              >
                <OptimizedPicture
                  src={item.coverImage}
                  alt={item.coverAlt}
                  imgClassName="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                  width={720}
                  height={450}
                />
                <div className="p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#bf5aff]">
                    {item.category}
                  </p>
                  <h3 className="mt-2 text-base font-bold text-white transition group-hover:text-[#bf5aff]">
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <BlogGetCheatsCta variant="sticky" />
    </main>
  );
}
