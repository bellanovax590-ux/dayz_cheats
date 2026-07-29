import type { LucideIcon } from "lucide-react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export function PageHero({
  eyebrow,
  title,
  description,
  icon: Icon,
}: PageHeroProps) {
  return (
    <div className="relative overflow-hidden border-b border-white/10 px-4 py-14 sm:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(191,90,255,0.18),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 hud-grid opacity-30" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-4 inline-flex items-center gap-2 border border-[#bf5aff]/35 bg-[#bf5aff]/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#bf5aff]">
          <Icon className="h-3.5 w-3.5" aria-hidden />
          {eyebrow}
        </div>
        <h1 className="glow-text text-3xl font-black uppercase tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#c8bfd8] sm:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}
