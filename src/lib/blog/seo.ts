import type { BlogPost } from "@/lib/blog/types";
import { DEFAULT_OG_IMAGE } from "@/lib/seo";
import { SITE_URL } from "@/lib/site-url";
import { webpSrc } from "@/lib/images";

export function blogPostMetadata(post: BlogPost) {
  const url = `${SITE_URL}/blog/${post.slug}/`;
  const imageUrl = post.coverImage.startsWith("http")
    ? post.coverImage
    : `${SITE_URL}${webpSrc(post.coverImage)}`;

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}/` },
    openGraph: {
      type: "article" as const,
      title: post.title,
      description: post.metaDescription,
      url,
      publishedTime: post.date,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: post.coverAlt }],
    },
    twitter: {
      card: "summary_large_image" as const,
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
