import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CreditCard,
  HelpCircle,
  LifeBuoy,
  List,
  ShieldAlert,
} from "lucide-react";
import { featureShowcases } from "@/lib/site-data";
import { OptimizedPicture } from "@/components/shared/OptimizedPicture";
import { DISCORD_URL } from "@/lib/discord";

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

function FeaturesSidebar() {
  return (
    <aside
      className="mx-auto w-full max-w-7xl px-4 sm:px-8"
      aria-label="Features page resources"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="border border-white/10 bg-[rgba(18,10,32,0.88)] p-5 backdrop-blur-sm">
          <div className="mb-3 flex items-center gap-2 text-[#bf5aff]">
            <CreditCard className="h-4 w-4" aria-hidden />
            <h2 className="text-xs font-bold uppercase tracking-[0.18em]">
              Access
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-[#c8bfd8]">
            1 Day, 1 Week, or 1 Month. Checkout opens on the purchase page.
          </p>
          <Link
            href="/pricing/"
            className="mt-4 inline-flex w-full items-center justify-center gap-2 bg-[#bf5aff] px-4 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-[#14081f] transition hover:bg-[#d946ef]"
          >
            View pricing
            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </Link>
        </div>

        <div className="border border-amber-400/25 bg-amber-400/5 p-5">
          <div className="mb-2 flex items-center gap-2 text-amber-200">
            <ShieldAlert className="h-4 w-4" aria-hidden />
            <h2 className="text-xs font-bold uppercase tracking-[0.18em]">
              Risk note
            </h2>
          </div>
          <p className="text-xs leading-relaxed text-amber-100/85">
            No product can promise permanent BattlEye protection. Detection risk
            changes after game updates. Using cheats can violate game terms and
            may lead to account penalties.
          </p>
          <Link
            href="/blog/battleye-updates-what-to-check/"
            className="mt-3 inline-flex text-xs font-semibold uppercase tracking-[0.12em] text-amber-200 underline-offset-2 hover:underline"
          >
            Read checklist
          </Link>
        </div>

        <div className="border border-white/10 bg-[rgba(18,10,32,0.88)] p-5 backdrop-blur-sm">
          <div className="mb-3 flex items-center gap-2 text-[#bf5aff]">
            <HelpCircle className="h-4 w-4" aria-hidden />
            <h2 className="text-xs font-bold uppercase tracking-[0.18em]">
              Useful links
            </h2>
          </div>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link
                href="/faq/"
                className="inline-flex items-center gap-2 text-[#c8bfd8] transition hover:text-[#bf5aff]"
              >
                <BookOpen className="h-3.5 w-3.5" aria-hidden />
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/updates/"
                className="inline-flex items-center gap-2 text-[#c8bfd8] transition hover:text-[#bf5aff]"
              >
                <List className="h-3.5 w-3.5" aria-hidden />
                Updates
              </Link>
            </li>
            <li>
              <Link
                href="/support/"
                className="inline-flex items-center gap-2 text-[#c8bfd8] transition hover:text-[#bf5aff]"
              >
                <LifeBuoy className="h-3.5 w-3.5" aria-hidden />
                Support
              </Link>
            </li>
            <li>
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#c8bfd8] transition hover:text-[#bf5aff]"
              >
                <DiscordIcon className="h-3.5 w-3.5" />
                Discord
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}

export function FeaturesShowcase() {
  return (
    <div className="relative pb-20 pt-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(191,90,255,0.12),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 hud-grid opacity-20" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 border border-white/15 bg-black/30 px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white transition hover:border-[#bf5aff]/50 hover:text-[#bf5aff]"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
          Back to home
        </Link>

        <header className="mb-12 max-w-2xl lg:mb-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#bf5aff]">
            Feature showcase
          </p>
          <h1 className="mt-3 text-3xl font-black uppercase tracking-tight text-white sm:text-5xl">
            DayZ cheat modules
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-[#c8bfd8] sm:text-base">
            Sixteen DayZ cheat modules covering ESP, aimbot, radar, loot
            filters, and awareness tools. Each preview shows what the DayZ
            cheats product can display in-game — capabilities only, not a safety
            guarantee against BattlEye.
          </p>
        </header>
      </div>

      <div className="relative space-y-0">
        {featureShowcases.map((feature, index) => {
          const Icon = feature.icon;
          const reversed = index % 2 === 1;
          const isExternal = feature.ctaHref.startsWith("http");
          const secondaryExternal =
            feature.secondaryCtaHref?.startsWith("http") ?? false;

          return (
            <article
              key={feature.slug}
              id={`feature-${String(index + 1).padStart(2, "0")}`}
              className="feature-showcase-card group relative w-full border-y border-white/10 bg-[rgba(12,8,22,0.72)] px-4 py-8 transition-[transform,box-shadow,border-color] duration-150 hover:-translate-y-1 hover:border-[#bf5aff]/35 hover:shadow-[0_14px_40px_rgba(191,90,255,0.14)] sm:px-6 sm:py-12 lg:relative lg:left-1/2 lg:w-screen lg:max-w-[100vw] lg:-translate-x-1/2 lg:px-8 lg:py-20 lg:hover:-translate-x-1/2 lg:hover:-translate-y-1"
            >
              <div className="mx-auto grid w-full max-w-7xl items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-14">
                <div
                  className={`space-y-4 ${reversed ? "lg:order-2" : "lg:order-1"}`}
                >
                  <div className="feature-showcase-heading relative inline-flex max-w-full flex-wrap items-baseline gap-x-3 gap-y-0 pb-2">
                    <p className="shrink-0 font-black tabular-nums text-sm uppercase tracking-[0.12em] text-[#bf5aff] sm:text-base">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h2 className="text-xl font-black uppercase tracking-tight text-white sm:text-3xl lg:text-4xl">
                      {feature.title}
                    </h2>
                    <span
                      className="pointer-events-none absolute bottom-0 left-0 h-0.5 w-0 bg-[#bf5aff] transition-[width] duration-150 ease-out group-hover:w-full"
                      aria-hidden
                    />
                  </div>
                  <p className="max-w-xl text-sm leading-relaxed text-[#c8bfd8] sm:text-base">
                    {feature.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <span className="inline-flex h-9 w-9 items-center justify-center border border-[#bf5aff]/40 text-[#bf5aff]">
                      <Icon className="h-4 w-4" aria-hidden />
                    </span>
                    {isExternal ? (
                      <a
                        href={feature.ctaHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#bf5aff] px-4 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-[#14081f] transition hover:bg-[#d946ef]"
                      >
                        {feature.ctaLabel}
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                      </a>
                    ) : (
                      <Link
                        href={feature.ctaHref}
                        className="inline-flex items-center gap-2 bg-[#bf5aff] px-4 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-[#14081f] transition hover:bg-[#d946ef]"
                      >
                        {feature.ctaLabel}
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                      </Link>
                    )}
                    {feature.secondaryCtaLabel && feature.secondaryCtaHref ? (
                      secondaryExternal ? (
                        <a
                          href={feature.secondaryCtaHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 border border-white/20 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:border-[#bf5aff]/50"
                        >
                          {feature.secondaryCtaLabel}
                        </a>
                      ) : (
                        <Link
                          href={feature.secondaryCtaHref}
                          className="inline-flex items-center gap-2 border border-white/20 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:border-[#bf5aff]/50"
                        >
                          {feature.secondaryCtaLabel}
                        </Link>
                      )
                    ) : null}
                  </div>
                </div>

                <div
                  className={`relative ${reversed ? "lg:order-1" : "lg:order-2"}`}
                >
                  <div className="relative overflow-hidden border border-white/10 bg-black/40 shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
                    <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#07050f]/50 via-transparent to-transparent" />
                    <OptimizedPicture
                      src={feature.image}
                      alt={feature.imageAlt}
                      imgClassName="aspect-[16/10] w-full object-cover"
                      loading={index < 2 ? "eager" : "lazy"}
                      fetchPriority={index === 0 ? "high" : undefined}
                      width={880}
                      height={550}
                    />
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="relative mt-16 lg:mt-20">
        <FeaturesSidebar />
      </div>
    </div>
  );
}
