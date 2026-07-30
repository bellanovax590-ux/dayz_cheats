import Link from "next/link";
import type { ReactNode } from "react";

const INTERNAL_PATH =
  /(\/(?:blog\/[a-z0-9-]+\/|features\/|pricing\/|faq\/|support\/|updates\/|blog\/|privacy-policy\/|refund-policy\/|terms\/))/gi;

const PATH_LABELS: Record<string, string> = {
  "/features/": "Features",
  "/pricing/": "Pricing",
  "/faq/": "FAQ",
  "/support/": "Support",
  "/updates/": "Updates",
  "/blog/": "Blog",
  "/privacy-policy/": "Privacy",
  "/refund-policy/": "Refunds",
  "/terms/": "Terms",
};

function labelForPath(path: string) {
  if (PATH_LABELS[path]) return PATH_LABELS[path];
  if (path.startsWith("/blog/")) {
    const slug = path.replace(/^\/blog\/|\/$/g, "");
    const words = slug.replace(/-/g, " ");
    return words.length > 40 ? `${words.slice(0, 37)}…` : words;
  }
  return path;
}

export function linkifyParagraph(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  const re = new RegExp(INTERNAL_PATH.source, "gi");
  let match: RegExpExecArray | null;

  while ((match = re.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    const href = match[1];
    nodes.push(
      <Link
        key={`${match.index}-${href}`}
        href={href}
        className="font-semibold text-[#bf5aff] underline decoration-[#bf5aff]/40 underline-offset-2 transition hover:text-[#d946ef] hover:decoration-[#d946ef]"
      >
        {labelForPath(href)}
      </Link>,
    );
    lastIndex = re.lastIndex;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes.length > 0 ? nodes : [text];
}
