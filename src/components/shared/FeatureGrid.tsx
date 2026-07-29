import Link from "next/link";
import { features } from "@/lib/site-data";

type FeatureGridProps = {
  limit?: number;
  showCta?: boolean;
  singleRow?: boolean;
};

export function FeatureGrid({
  limit,
  showCta = false,
  singleRow = false,
}: FeatureGridProps) {
  const items = typeof limit === "number" ? features.slice(0, limit) : features;

  return (
    <div>
      <div
        className={
          singleRow
            ? "grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
            : "grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        }
      >
        {items.map((feature, index) => {
          const Icon = feature.icon;
          const number = String(index + 1).padStart(2, "0");

          return (
            <article
              key={feature.slug}
              className={`group relative border border-white/10 bg-[rgba(18,10,32,0.78)] transition hover:border-[#bf5aff]/40 hover:bg-[rgba(28,14,48,0.9)] ${
                singleRow ? "p-4" : "p-5"
              }`}
            >
              <div className="mb-3 flex items-start justify-between gap-2">
                <div className="flex h-10 w-10 items-center justify-center border border-[#bf5aff]/35 bg-[#bf5aff]/10 text-[#bf5aff]">
                  <Icon className="h-4 w-4" aria-hidden />
                </div>
                <span className="font-mono text-xs font-semibold tracking-[0.16em] text-[#bf5aff]/80">
                  {number}
                </span>
              </div>
              <h2 className="text-base font-bold uppercase tracking-wide text-white sm:text-lg">
                {feature.title}
              </h2>
              <p
                className={`mt-2 leading-relaxed text-[#c8bfd8] ${
                  singleRow ? "text-xs line-clamp-4" : "text-sm"
                }`}
              >
                {feature.description}
              </p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {feature.tags.map((tag) => (
                  <li
                    key={tag}
                    className="border border-white/10 px-2 py-0.5 text-[10px] uppercase tracking-[0.12em] text-[#a89ab8]"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>

      {showCta ? (
        <div className="mt-8">
          <Link
            href="/features/"
            className="inline-flex items-center gap-2 border border-[#bf5aff]/40 px-4 py-3 text-sm font-bold uppercase tracking-[0.14em] text-[#bf5aff] transition hover:bg-[#bf5aff]/10"
          >
            View all features
          </Link>
        </div>
      ) : null}
    </div>
  );
}
