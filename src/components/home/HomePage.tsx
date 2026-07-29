import Link from "next/link";
import {
  ArrowRight,
  Crosshair,
  Eye,
  Shield,
  Star,
  Wrench,
} from "lucide-react";
import { FeatureStrandCards } from "@/components/shared/FeatureStrandCards";
import { BlindsCarousel } from "@/components/home/BlindsCarousel";
import { DISCORD_SERVER_ID, DISCORD_URL } from "@/lib/discord";
import { OptimizedPicture } from "@/components/shared/OptimizedPicture";
import { CHECKOUT_URL } from "@/lib/checkout";

const cheatSlides = [
  {
    src: "/images/cheat-01-esp.jpg",
    alt: "DayZ Player ESP overlay preview",
    label: "Player ESP",
  },
  {
    src: "/images/cheat-02-loot.jpg",
    alt: "DayZ Loot ESP overlay preview",
    label: "Loot ESP",
  },
  {
    src: "/images/cheat-03-aimbot.jpg",
    alt: "DayZ Aimbot FOV overlay preview",
    label: "Aimbot FOV",
  },
  {
    src: "/images/cheat-04-radar.jpg",
    alt: "DayZ 2D radar overlay preview",
    label: "2D Radar",
  },
  {
    src: "/images/cheat-05-containers.jpg",
    alt: "DayZ Containers ESP preview",
    label: "Containers",
  },
  {
    src: "/images/cheat-06-players.jpg",
    alt: "DayZ player visibility preview",
    label: "Visibility",
  },
];

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

const whyChooseUs = [
  {
    title: "Built for DayZ survival",
    description:
      "DayZ is about map control, loot timing, and reading other players. Our modules focus on Player ESP, Loot ESP, containers, Aimbot setup, and 2D radar — the tools survivors actually use.",
    icon: Eye,
  },
  {
    title: "Clear feature control",
    description:
      "Tune Aimbot FOV, smoothing, and bone selection. Filter ESP overlays so towns stay readable. Switch profiles for quiet scavenging or aggressive PvP.",
    icon: Crosshair,
  },
  {
    title: "Practical product support",
    description:
      "Choose 1 Day, 1 Week, or 1 Month access. Check updates after DayZ patches, review pricing before checkout, and reach the team when you need setup help.",
    icon: Wrench,
  },
  {
    title: "Honest risk framing",
    description:
      "DayZ uses BattlEye. We do not promise permanent protection. Status notes and changelogs help you decide when to play — without fake safety claims.",
    icon: Shield,
  },
];

export function HomePage() {
  return (
    <main className="flex-1 bg-[var(--background)] text-[var(--foreground)]">
      {/* hero + features + previews kept via existing file structure - rewritten fully below */}
      <HeroBlock />
      <FeaturesBlock />
      <PreviewBlock />

      <section
        className="border-b border-white/10 px-4 py-16 sm:px-8"
        aria-labelledby="why-heading"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#bf5aff]">
              Why choose us
            </p>
            <h2
              id="why-heading"
              className="mt-2 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl"
            >
              Why players pick DayZ Cheats
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#c8bfd8] sm:text-base">
              dayzcheat.net is focused on one game: DayZ. The product is built
              around survival priorities — visibility, loot routing, aim control,
              and radar awareness — with package options and community support
              through Discord.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {whyChooseUs.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="why-choose-card border border-white/10 bg-[rgba(18,10,32,0.85)] p-5"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center border border-[#bf5aff]/35 bg-[#bf5aff]/10 text-[#bf5aff]">
                    <Icon className="h-4 w-4" aria-hidden />
                  </div>
                  <h3 className="text-lg font-bold uppercase tracking-wide text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#c8bfd8]">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 border border-[#bf5aff]/30 bg-[#bf5aff]/5 p-5">
            <DiscordIcon className="h-8 w-8 text-[#bf5aff]" />
            <div className="min-w-0 flex-1">
              <h3 className="text-lg font-bold uppercase text-white">
                Join the Discord
              </h3>
              <p className="mt-1 text-sm text-[#c8bfd8]">
                Get update notices, setup help, and product discussion for DayZ
                Cheats. Server ID {DISCORD_SERVER_ID}.
              </p>
            </div>
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#5865F2] px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#4752c4]"
            >
              <DiscordIcon className="h-4 w-4" />
              Open Discord
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function HeroBlock() {
  return (
    <section
      className="relative overflow-hidden border-b border-white/10"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(191,90,255,0.18),transparent_42%),radial-gradient(circle_at_15%_80%,rgba(88,28,135,0.35),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-0 hud-grid opacity-40" />

      <div className="relative mx-auto grid max-w-6xl items-start gap-10 px-4 pb-16 pt-8 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:pb-20 lg:pt-10">
        <div className="max-w-2xl lg:pt-2">
          <div className="status-badge inline-flex items-center gap-2 border border-[#bf5aff]/35 bg-black/40 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#bf5aff]">
            <span className="pulse-dot h-2 w-2 rounded-full bg-[#bf5aff]" />
            Status: Operational
          </div>

          <h1
            id="hero-heading"
            className="glow-text mt-6 text-3xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            DayZ
            <span className="block text-[#bf5aff]">Cheats</span>
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-relaxed text-[#c8bfd8] sm:text-base">
            Third-party ESP and Aimbot toolkit for DayZ. Browse features,
            pricing, FAQ, and guides on dedicated pages — then choose an access
            period that fits your schedule.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-2">
            {[
              { label: "Featured", icon: "stars" as const },
              { label: "6 modules", icon: "eye" as const },
              { label: "ESP", icon: "none" as const },
              { label: "Aimbot", icon: "none" as const },
              { label: "Radar", icon: "none" as const },
              { label: "3 plans", icon: "none" as const },
            ].map((tab) => (
              <span
                key={tab.label}
                className="hero-tab inline-flex items-center gap-1.5 border border-white/15 bg-white/[0.03] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#c8bfd8]"
              >
                {tab.icon === "stars" ? (
                  <span className="flex items-center gap-0.5 text-[#bf5aff]" aria-hidden>
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star key={starIndex} className="h-2.5 w-2.5 fill-current" />
                    ))}
                  </span>
                ) : null}
                {tab.icon === "eye" ? (
                  <Eye className="h-3 w-3 text-[#bf5aff]" aria-hidden />
                ) : null}
                {tab.label}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#bf5aff] px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-[#14081f] transition hover:bg-[#d946ef]"
            >
              Get access
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#5865F2]/50 px-4 py-3 text-sm font-bold uppercase tracking-[0.14em] text-[#5865F2] transition hover:bg-[#5865F2]/10"
            >
              <DiscordIcon className="h-4 w-4" />
              Discord
            </a>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-md items-end justify-center lg:max-w-none lg:justify-end">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_55%_70%,rgba(70,30,110,0.28),transparent_55%)] blur-2xl" />
          <div className="character-magic relative z-10">
            <OptimizedPicture
              src="/images/dayz-character-cutout.png"
              alt="DayZ survivor character with purple magic branch shading"
              width={560}
              height={750}
              imgClassName="h-auto w-full max-w-[420px] object-contain lg:max-w-[480px]"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesBlock() {
  return (
    <section className="border-b border-white/10 px-4 py-16 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#bf5aff]">
              Features preview
            </p>
            <h2 className="mt-2 text-3xl font-black uppercase tracking-tight text-white">
              ESP & Aimbot modules
            </h2>
          </div>
        </div>
        <FeatureStrandCards />
      </div>
    </section>
  );
}

function PreviewBlock() {
  return (
    <section
      className="border-b border-white/10 px-4 py-16 sm:px-8"
      aria-labelledby="preview-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#bf5aff]">
            Live previews
          </p>
          <h2
            id="preview-heading"
            className="mt-2 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl"
          >
            DayZ cheats in action
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#c8bfd8] sm:text-base">
            DayZ cheats are built around map awareness and fight control. Player
            ESP and loot ESP help you read towns before you commit. Aimbot tools
            add configurable FOV, smoothing, and bone selection for PvP.
            Containers and 2D radar keep scavenging routes efficient on large
            maps. Click through the gallery to review each module preview.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[#c8bfd8] sm:text-base">
            Use these visuals to understand what each feature shows in-game, then
            compare packages on the pricing page. Feature availability can change
            after DayZ updates, so check the latest notes before you play.
          </p>
        </div>

        <BlindsCarousel slides={cheatSlides} size="large" />

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="/features/"
            className="inline-flex items-center gap-2 border border-[#bf5aff]/40 px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-[#bf5aff] transition hover:bg-[#bf5aff]/10"
          >
            View all features
          </Link>
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#bf5aff] px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-[#14081f] transition hover:bg-[#d946ef]"
          >
            Get access
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
