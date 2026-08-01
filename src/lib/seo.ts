import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site-url";

export const DEFAULT_OG_IMAGE = "/images/og-default.webp";

export function createPageMetadata(options: {
  title?: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
}): Metadata {
  const ogImage = options.ogImage ?? DEFAULT_OG_IMAGE;
  const pageTitle = options.title;

  return {
    title: pageTitle ? { absolute: pageTitle } : undefined,
    description: options.description,
    keywords: options.keywords,
    alternates: {
      canonical: options.path,
      languages: {
        "en-US": `${SITE_URL}${options.path}`,
        "x-default": `${SITE_URL}${options.path}`,
      },
      types: {
        "application/rss+xml": `${SITE_URL}/feed.xml`,
      },
    },
    openGraph: {
      title: pageTitle,
      description: options.description,
      url: `${SITE_URL}${options.path}`,
      siteName: "DayZ Cheats",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "DayZ Cheats – ESP and Aimbot for DayZ",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: options.description,
      images: [ogImage],
    },
  };
}
