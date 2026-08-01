import type { Metadata } from "next";
import type { BlogPost } from "@/lib/blog/types";
import { enhanceBlogSeo } from "@/lib/blog/keyword-seo";
import { countBlogWords } from "@/lib/blog/types";
import { DEFAULT_OG_IMAGE } from "@/lib/seo";
import { SITE_URL } from "@/lib/site-url";
import { webpSrc } from "@/lib/images";

export function blogPostMetadata(post: BlogPost): Metadata {
  const seo = enhanceBlogSeo(post);
  const url = `${SITE_URL}/blog/${post.slug}/`;
  const imageUrl = post.coverImage.startsWith("http")
    ? post.coverImage
    : `${SITE_URL}${webpSrc(post.coverImage)}`;

  return {
    title: { absolute: `${seo.metaTitle} | DayZ Cheats` },
    description: seo.metaDescription,
    keywords: seo.keywords,
    alternates: {
      canonical: `/blog/${post.slug}/`,
      languages: {
        "en-US": url,
        "x-default": url,
      },
      types: {
        "application/rss+xml": `${SITE_URL}/feed.xml`,
      },
    },
    openGraph: {
      type: "article",
      title: seo.metaTitle,
      description: seo.metaDescription,
      url,
      siteName: "DayZ Cheats",
      locale: "en_US",
      publishedTime: post.date,
      modifiedTime: post.date,
      section: post.category,
      tags: seo.keywords,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: post.coverAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.metaTitle,
      description: seo.metaDescription,
      images: [imageUrl],
    },
  };
}

export function blogPostingSchema(post: BlogPost) {
  const seo = enhanceBlogSeo(post);
  const url = `${SITE_URL}/blog/${post.slug}/`;
  const imageUrl = post.coverImage.startsWith("http")
    ? post.coverImage
    : `${SITE_URL}${webpSrc(post.coverImage)}`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: seo.schemaHeadline,
    description: seo.metaDescription,
    image: imageUrl,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "en-US",
    wordCount: countBlogWords(post.content),
    author: {
      "@type": "Organization",
      name: "DayZ Cheats",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "DayZ Cheats",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/zadeyo-logo-512.png`,
        width: 512,
        height: 512,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    keywords: seo.keywords.join(", "),
    articleSection: post.category,
    about: seo.primaryTerms.map((term) => ({
      "@type": "Thing",
      name: term,
    })),
  };
}

export function blogIndexOgImage() {
  return DEFAULT_OG_IMAGE;
}

export function blogBreadcrumbSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "DayZ Cheats Blog",
        item: `${SITE_URL}/blog/`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${SITE_URL}/blog/${post.slug}/`,
      },
    ],
  };
}

export function blogCollectionSchema(postCount: number) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "DayZ Cheats Blog – ESP, Aimbot & BattlEye Guides",
    description:
      "Searchable DayZ cheat guides covering ESP setup, aimbot settings, loot filters, radar, BattlEye updates, and safe checkout tips.",
    url: `${SITE_URL}/blog/`,
    isPartOf: {
      "@type": "WebSite",
      name: "DayZ Cheats",
      url: SITE_URL,
    },
    numberOfItems: postCount,
  };
}
