import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { OptimizedPicture } from "@/components/shared/OptimizedPicture";
import { linkifyParagraph } from "@/lib/blog/linkify";
import type { BlogBlock } from "@/lib/blog/types";

type BlogArticleBodyProps = {
  blocks: BlogBlock[];
};

function isExternal(href: string) {
  return href.startsWith("http");
}

export function BlogArticleBody({ blocks }: BlogArticleBodyProps) {
  return (
    <div className="blog-article-body mt-10 space-y-6 text-sm leading-relaxed text-[#ddd5e8] sm:text-base">
      {blocks.map((block, index) => {
        const delayClass = `blog-fade-item blog-fade-delay-${Math.min(index, 8)}`;

        if (block.type === "h2") {
          return (
            <h2
              key={`h2-${index}-${block.text}`}
              className={`${delayClass} pt-2 text-xl font-black uppercase tracking-tight text-white sm:text-2xl`}
            >
              {block.text}
            </h2>
          );
        }

        if (block.type === "p") {
          return (
            <p key={`p-${index}`} className={delayClass}>
              {linkifyParagraph(block.text)}
            </p>
          );
        }

        if (block.type === "img") {
          return (
            <figure
              key={`img-${index}-${block.src}`}
              className={`${delayClass} overflow-hidden border border-white/10 bg-black/30`}
            >
              <OptimizedPicture
                src={block.src}
                alt={block.alt}
                imgClassName="aspect-[16/9] w-full object-cover"
                loading="lazy"
                width={960}
                height={540}
              />
              {block.caption ? (
                <figcaption className="border-t border-white/10 px-4 py-3 text-xs leading-relaxed text-[#a89ab8]">
                  {block.caption}
                </figcaption>
              ) : null}
            </figure>
          );
        }

        return (
          <div
            key={`cta-${index}`}
            className={`${delayClass} flex flex-wrap gap-3 border border-[#bf5aff]/25 bg-[#bf5aff]/5 p-4`}
          >
            {block.links.map((link) =>
              isExternal(link.href) ? (
                <a
                  key={`${link.href}-${link.label}`}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#bf5aff] px-4 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-[#14081f] transition hover:bg-[#d946ef]"
                >
                  {link.label}
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                </a>
              ) : (
                <Link
                  key={`${link.href}-${link.label}`}
                  href={link.href}
                  className="inline-flex items-center gap-2 border border-[#bf5aff]/40 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-[#bf5aff] transition hover:bg-[#bf5aff]/10"
                >
                  {link.label}
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                </Link>
              ),
            )}
          </div>
        );
      })}
    </div>
  );
}
