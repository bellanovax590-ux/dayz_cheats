import type { BlogPost } from "@/lib/blog/types";

export function getRelatedPosts(post: BlogPost, allPosts: BlogPost[], limit = 3) {
  const sameCategory = allPosts.filter(
    (item) => item.slug !== post.slug && item.category === post.category,
  );

  const sharedKeywords = allPosts.filter((item) => {
    if (item.slug === post.slug) return false;
    const overlap = item.keywords.filter((keyword) =>
      post.keywords.some(
        (target) => target.toLowerCase() === keyword.toLowerCase(),
      ),
    );
    return overlap.length >= 2;
  });

  const ranked = [...sameCategory, ...sharedKeywords].filter(
    (item, index, list) =>
      list.findIndex((candidate) => candidate.slug === item.slug) === index,
  );

  if (ranked.length >= limit) {
    return ranked.slice(0, limit);
  }

  const fallback = allPosts
    .filter((item) => item.slug !== post.slug)
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  const merged = [...ranked];
  for (const item of fallback) {
    if (merged.length >= limit) break;
    if (!merged.some((entry) => entry.slug === item.slug)) {
      merged.push(item);
    }
  }

  return merged.slice(0, limit);
}
