import type { Metadata } from "next";
import type { BlogPost } from "@/lib/blog/types";
import { DEFAULT_OG_IMAGE } from "@/lib/seo";
import { SITE_URL } from "@/lib/site-url";
import { webpSrc } from "@/lib/images";

export function blogPostMetadata(post: BlogPost): Metadata {
  const url = `${SITE_URL}/blog/${post.slug}/`;
  const imageUrl = post.coverImage.startsWith("http")
    ? post.coverImage
    : `${SITE_URL}${webpSrc(post.coverImage)}`;

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: {
      canonical: `/blog/${post.slug}/`,
      types: {
        "application/rss+xml": `${SITE_URL}/feed.xml`,
      },
    },
    openGraph: {
      type: "article",
      title: post.metaTitle,
      description: post.metaDescription,
      url,
      siteName: "DayZ Cheats",
      locale: "en_US",
      publishedTime: post.date,
      modifiedTime: post.date,
      section: post.category,
      tags: post.keywords,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: post.coverAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: [imageUrl],
    },
  };
}

export function blogPostingSchema(post: BlogPost) {
  const url = `${SITE_URL}/blog/${post.slug}/`;
  const imageUrl = post.coverImage.startsWith("http")
    ? post.coverImage
    : `${SITE_URL}${webpSrc(post.coverImage)}`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: imageUrl,
    datePublished: post.date,
    dateModified: post.date,
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
        url: `${SITE_URL}/images/zadeyo-logo.webp`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    keywords: post.keywords.join(", "),
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
