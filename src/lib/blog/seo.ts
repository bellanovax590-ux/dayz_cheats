import type { BlogPost } from "@/lib/blog/types";

const SITE_URL = "https://dayzcheat.net";

export function blogPostMetadata(post: BlogPost) {
  const url = `${SITE_URL}/blog/${post.slug}/`;
  const imageUrl = post.coverImage.startsWith("http")
    ? post.coverImage
    : `${SITE_URL}${post.coverImage}`;

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
      images: [{ url: imageUrl, alt: post.coverAlt }],
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
    : `${SITE_URL}${post.coverImage}`;

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
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    keywords: post.keywords.join(", "),
  };
}
