export type BlogLink = { href: string; label: string };

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "img"; src: string; alt: string; caption?: string }
  | { type: "cta"; links: BlogLink[] };

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  keywords: string[];
  date: string;
  readTime: string;
  category: string;
  coverImage: string;
  coverAlt: string;
  content: BlogBlock[];
};

export function countBlogWords(blocks: BlogBlock[]): number {
  return blocks.reduce((total, block) => {
    if (block.type === "p" || block.type === "h2") {
      return total + block.text.split(/\s+/).filter(Boolean).length;
    }
    return total;
  }, 0);
}

export function estimateReadTime(blocks: BlogBlock[]): string {
  const words = countBlogWords(blocks);
  const minutes = Math.max(12, Math.ceil(words / 200));
  return `${minutes} min`;
}
