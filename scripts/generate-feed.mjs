import fs from "node:fs";
import path from "node:path";

const SITE_URL = "https://dayzcheat.net";
const postsDir = path.join(process.cwd(), "src/lib/blog/posts");
const outPath = path.join(process.cwd(), "public/feed.xml");

function escapeXml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function readField(content, field) {
  const match = content.match(new RegExp(`${field}:\\s*"([^"]+)"`));
  return match?.[1] ?? "";
}

const posts = fs
  .readdirSync(postsDir)
  .filter((file) => file.endsWith(".ts"))
  .map((file) => {
    const content = fs.readFileSync(path.join(postsDir, file), "utf8");
    const slug = readField(content, "slug");
    if (!slug) return null;
    return {
      slug,
      title: readField(content, "title"),
      description: readField(content, "metaDescription") || readField(content, "excerpt"),
      date: readField(content, "date"),
    };
  })
  .filter(Boolean)
  .sort((a, b) => (a.date < b.date ? 1 : -1));

const items = posts
  .map(
    (post) => `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${SITE_URL}/blog/${post.slug}/</link>
      <guid isPermaLink="true">${SITE_URL}/blog/${post.slug}/</guid>
      <pubDate>${new Date(`${post.date}T12:00:00Z`).toUTCString()}</pubDate>
      <description>${escapeXml(post.description)}</description>
    </item>`,
  )
  .join("\n");

const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>DayZ Cheats Blog – ESP, Aimbot &amp; BattlEye Guides</title>
    <link>${SITE_URL}/blog/</link>
    <description>Long-form DayZ cheat guides on ESP setup, aimbot FOV, loot filters, radar, BattlEye checks, and buying tips from dayzcheat.net.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>
`;

fs.writeFileSync(outPath, feed, "utf8");
console.log(`Generated RSS feed with ${posts.length} posts → public/feed.xml`);
