import type { BlogPost } from "@/lib/blog/types";

const CORE_KEYWORDS = ["dayz cheats", "dayz cheat", "dayz esp", "dayz aimbot"] as const;

function includesTerm(text: string, term: string) {
  return text.toLowerCase().includes(term.toLowerCase());
}

function detectPrimaryTerms(post: BlogPost): string[] {
  const haystack = [
    post.slug,
    post.title,
    post.category,
    ...post.keywords,
  ]
    .join(" ")
    .toLowerCase();

  const terms: string[] = [];

  if (/aimbot|recoil|sniper|bone|fov|smoothing|pvp/.test(haystack)) {
    terms.push("DayZ aimbot");
  }
  if (/esp|loot|overlay|player esp|container|medical|infected|vehicle/.test(haystack)) {
    terms.push("DayZ ESP");
  }
  if (/radar|2d radar/.test(haystack)) {
    terms.push("DayZ radar");
  }
  if (/cheat|battleye|buy|support|hotkey|profile|vanilla/.test(haystack)) {
    terms.push("DayZ cheats");
  }

  if (terms.length === 0) {
    terms.push("DayZ cheats");
  }

  return [...new Set(terms)];
}

function trimTitle(title: string, max = 58) {
  if (title.length <= max) return title;
  return `${title.slice(0, max - 1).trimEnd()}…`;
}

export function enhanceBlogSeo(post: BlogPost) {
  const primaryTerms = detectPrimaryTerms(post);
  const leadTerm = primaryTerms[0];

  let metaTitle = post.metaTitle.replace(/\s*\|\s*dayzcheat\.net\s*$/i, "").trim();
  if (!includesTerm(metaTitle, leadTerm)) {
    metaTitle = `${leadTerm} – ${metaTitle}`;
  }
  if (!includesTerm(metaTitle, "DayZ cheats") && !includesTerm(metaTitle, "DayZ cheat")) {
    metaTitle = `${metaTitle} | DayZ Cheats`;
  }

  let metaDescription = post.metaDescription.trim();
  if (!includesTerm(metaDescription, leadTerm)) {
    metaDescription = `${leadTerm} guide: ${metaDescription}`;
  }
  if (!includesTerm(metaDescription, "dayzcheat.net")) {
    metaDescription = `${metaDescription} Read on dayzcheat.net.`;
  }

  const keywords = [
    ...primaryTerms,
    ...primaryTerms.map((term) => term.toLowerCase()),
    "dayz cheat",
    "dayz cheats esp",
    "dayz cheats aimbot",
    ...post.keywords,
  ].filter((value, index, list) => {
    const key = value.toLowerCase();
    return list.findIndex((item) => item.toLowerCase() === key) === index;
  });

  const schemaHeadline = includesTerm(post.title, leadTerm)
    ? post.title
    : `${leadTerm} – ${post.title}`;

  return {
    metaTitle: trimTitle(metaTitle),
    metaDescription: metaDescription.slice(0, 160),
    keywords,
    schemaHeadline: trimTitle(schemaHeadline, 110),
    primaryTerms,
  };
}

export function blogSearchTags(post: BlogPost) {
  return enhanceBlogSeo(post).primaryTerms;
}

export { CORE_KEYWORDS };
