import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/site-url";

export const dynamic = "force-static";

const staticPages: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/features/", changeFrequency: "monthly", priority: 0.9 },
  { path: "/pricing/", changeFrequency: "monthly", priority: 0.9 },
  { path: "/blog/", changeFrequency: "weekly", priority: 0.9 },
  { path: "/faq/", changeFrequency: "monthly", priority: 0.8 },
  { path: "/support/", changeFrequency: "monthly", priority: 0.75 },
  { path: "/updates/", changeFrequency: "weekly", priority: 0.75 },
  { path: "/privacy-policy/", changeFrequency: "yearly", priority: 0.3 },
  { path: "/refund-policy/", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms/", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: `${SITE_URL}${page.path}`,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}/`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...blogRoutes];
}
