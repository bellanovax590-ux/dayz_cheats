import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/site-url";

export const dynamic = "force-static";

const buildDate = new Date();

const staticPages: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "/", changeFrequency: "daily", priority: 1 },
  { path: "/features/", changeFrequency: "weekly", priority: 0.95 },
  { path: "/pricing/", changeFrequency: "weekly", priority: 0.95 },
  { path: "/blog/", changeFrequency: "daily", priority: 0.95 },
  { path: "/faq/", changeFrequency: "monthly", priority: 0.85 },
  { path: "/support/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/updates/", changeFrequency: "weekly", priority: 0.8 },
  { path: "/privacy-policy/", changeFrequency: "yearly", priority: 0.4 },
  { path: "/refund-policy/", changeFrequency: "yearly", priority: 0.4 },
  { path: "/terms/", changeFrequency: "yearly", priority: 0.4 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified: buildDate,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}/`,
    lastModified: new Date(post.date),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [...staticRoutes, ...blogRoutes];
}
