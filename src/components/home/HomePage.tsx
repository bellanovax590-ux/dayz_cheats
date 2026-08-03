import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Crosshair,
  Eye,
  Shield,
  Star,
  Wrench,
} from "lucide-react";
import { FeatureStrandCards } from "@/components/shared/FeatureStrandCards";
import { BlindsCarousel } from "@/components/home/BlindsCarousel";
import { OptimizedPicture } from "@/components/shared/OptimizedPicture";
import { blogPosts } from "@/lib/blog";
import { CHECKOUT_URL } from "@/lib/checkout";
import { KEYWORD_TOPICS } from "@/lib/keywords";

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
      <KeywordTopicsBlock />
      <PreviewBlock />
      <BlogGuidesBlock />

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
        </div>
      </section>
    </main>
  );
}

function BlogGuidesBlock() {
  const featuredGuides = [...blogPosts]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 6);

  return (
    <section
      className="border-b border-white/10 px-4 py-16 sm:px-8"
      aria-labelledby="blog-guides-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#bf5aff]">
              <BookOpen className="h-3.5 w-3.5" aria-hidden />
              Blog
            </p>
            <h2
              id="blog-guides-heading"
              className="mt-2 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl"
            >
              DayZ cheat guides &amp; tips
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#c8bfd8] sm:text-base">
              Searchable long-form articles on DayZ ESP, aimbot, loot filters,
              radar, BattlEye updates, and buying. Each guide links to{" "}
              <Link href="/features/" className="text-[#bf5aff] underline-offset-2 hover:underline">
                features
              </Link>
              ,{" "}
              <Link href="/pricing/" className="text-[#bf5aff] underline-offset-2 hover:underline">
                pricing
              </Link>
              , and checkout.
            </p>
          </div>
          <Link
            href="/blog/"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#bf5aff]"
          >
            View all guides
            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featuredGuides.map((post) => (
            <article
              key={post.slug}
              className="group border border-white/10 transition hover:border-[#bf5aff]/45"
            >
              <Link href={`/blog/${post.slug}/`} className="block p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#bf5aff]">
                  {post.category}
                </p>
                <h3 className="mt-2 text-lg font-bold text-white transition group-hover:text-[#bf5aff]">
                  {post.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[#c8bfd8]">
                  {post.excerpt}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
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
            DayZ{" "}
            <span className="block text-[#bf5aff]">Cheats</span>
            <span className="mt-2 block text-base font-bold normal-case tracking-normal text-[#c8bfd8] sm:text-xl">
              ESP, Aimbot &amp; Radar for DayZ
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-relaxed text-[#c8bfd8] sm:text-base">
            DayZ cheats with Player ESP, Loot ESP, aimbot, and 2D radar for
            survival servers. Compare{" "}
            <Link href="/features/" className="text-[#bf5aff] underline-offset-2 hover:underline">
              features
            </Link>
            ,{" "}
            <Link href="/pricing/" className="text-[#bf5aff] underline-offset-2 hover:underline">
              pricing
            </Link>
            , and{" "}
            <Link href="/faq/" className="text-[#bf5aff] underline-offset-2 hover:underline">
              FAQ
            </Link>{" "}
            — then choose an access plan or read setup guides.
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
            <Link
              href="/pricing/"
              className="inline-flex items-center gap-2 border border-[#bf5aff]/40 px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-[#bf5aff] transition hover:bg-[#bf5aff]/10"
            >
              View pricing
            </Link>
            <Link
              href="/updates/"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-[#a89ab8] transition hover:text-[#bf5aff]"
            >
              Status &amp; updates
            </Link>
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
              ESP, Aimbot &amp; Radar modules
            </h2>
          </div>
        </div>
        <FeatureStrandCards />
      </div>
    </section>
  );
}

function KeywordTopicsBlock() {
  return (
    <section
      className="border-b border-white/10 px-4 py-16 sm:px-8"
      aria-labelledby="keyword-topics-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#bf5aff]">
            Popular searches
          </p>
          <h2
            id="keyword-topics-heading"
            className="mt-2 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl"
          >
            DayZ cheats, ESP, aimbot &amp; more
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#c8bfd8] sm:text-base">
            Players search for DayZ cheats, DayZ ESP, DayZ aimbot, wallhack
            visibility, loot ESP, radar, and hack tools every day. Below is what
            each term means on dayzcheat.net and where to learn more.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {KEYWORD_TOPICS.map((topic) => (
            <article
              key={topic.term}
              className="border border-white/10 bg-[rgba(18,10,32,0.85)] p-5"
            >
              <h3 className="text-lg font-bold uppercase tracking-wide text-white">
                {topic.term}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#c8bfd8]">
                {topic.description}
              </p>
              <Link
                href={topic.href}
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#bf5aff] hover:underline"
              >
                {topic.linkLabel}
                <ArrowRight className="h-3 w-3" aria-hidden />
              </Link>
            </article>
          ))}
        </div>
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
            DayZ cheats combine player ESP, loot ESP, and 2D radar so you can
            read contacts before fights. ESP visibility works like a practical
            wallhack layer for players, infected, and containers. Aimbot tools
            add configurable FOV, smoothing, and bone selection — tuned for
            controlled PvP, not reckless triggerbot spam. Click through the
            gallery to review each module preview.
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
          <Link
            href="/pricing/"
            className="inline-flex items-center gap-2 border border-white/15 px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:border-[#bf5aff]/40"
          >
            Compare pricing
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
