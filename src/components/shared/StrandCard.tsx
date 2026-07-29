"use client";

import Link from "next/link";
import { OptimizedPicture } from "@/components/shared/OptimizedPicture";
import { features } from "@/lib/site-data";
import { SandParticles } from "@/components/shared/SandParticles";

type StrandCardProps = {
  slug: string;
  index: number;
};

export function StrandCard({ slug, index }: StrandCardProps) {
  const feature = features.find((item) => item.slug === slug);
  if (!feature) return null;

  const Icon = feature.icon;
  const number = String(index + 1).padStart(2, "0");
  const [firstWord, ...restWords] = feature.title.split(" ");
  const restTitle = restWords.join(" ");

  return (
    <article className="strand-card group relative overflow-hidden border border-[#bf5aff]/45">
      <SandParticles
        maxCount={100}
        density={320}
        magneticRadius={110}
        className="z-[4]"
      />

      <div
        className="strand-card-bg absolute inset-0 z-0 opacity-35"
        aria-hidden
      />
      <div className="strand-card-overlay absolute inset-0 z-[2] bg-gradient-to-r from-[#07050f]/95 via-[#07050f]/80 to-[#07050f]/55" />

      <div
        className="strand-lines pointer-events-none absolute inset-0 z-[3]"
        aria-hidden
      />

      <div className="relative z-10 grid min-h-0 gap-5 p-4 sm:min-h-[260px] sm:grid-cols-[1.2fr_0.8fr] sm:gap-6 sm:p-7 lg:min-h-[300px] lg:p-8">
        <div className="flex flex-col justify-center">
          <div className="mb-4 flex items-center gap-3">
            <span className="font-mono text-xs tracking-[0.22em] text-[#bf5aff]">
              {number}
            </span>
            <span className="flex h-8 w-8 items-center justify-center border border-[#bf5aff]/40 text-[#bf5aff]">
              <Icon className="h-4 w-4" aria-hidden />
            </span>
          </div>

          <h3 className="text-xl font-black uppercase tracking-[0.06em] text-white sm:text-3xl lg:text-4xl">
            {firstWord}{" "}
            <span className="text-[#bf5aff]">
              {restTitle || feature.highlight}
            </span>
          </h3>

          <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#bf5aff]/90">
            {feature.highlight}
          </p>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
            {feature.description}
          </p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {feature.tags.map((tag) => (
              <li
                key={tag}
                className="border border-[#bf5aff]/30 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-[#d8b4fe]"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-center sm:justify-end">
          <Link
            href="/features/"
            className="strand-thumb relative w-full max-w-[280px] border border-[#bf5aff]/50 bg-black/40 p-2 transition group-hover:border-[#bf5aff] group-hover:shadow-[0_0_24px_rgba(191,90,255,0.25)]"
          >
            <OptimizedPicture
              src={feature.image}
              alt={`${feature.title} DayZ cheat preview`}
              imgClassName="aspect-[16/10] w-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : undefined}
              width={640}
              height={400}
            />
            <span className="mt-2 block text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-[#bf5aff]">
              Click to view
            </span>
            <span className="pointer-events-none absolute -left-3 top-1/2 hidden h-2 w-2 -translate-y-1/2 rounded-full bg-[#bf5aff] sm:block" />
            <span className="pointer-events-none absolute -left-10 top-1/2 hidden h-px w-7 -translate-y-1/2 bg-[#bf5aff]/70 sm:block" />
          </Link>
        </div>
      </div>
    </article>
  );
}
