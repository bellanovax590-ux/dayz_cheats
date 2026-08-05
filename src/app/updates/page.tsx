import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, RefreshCw } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { createPageMetadata } from "@/lib/seo";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = createPageMetadata({
  title: "DayZ Cheats Updates – BattlEye Status & Patch Notes",
  description:
    "DayZ cheats update status, BattlEye patch guidance, and maintenance notes. Check before you launch ESP or aimbot on dayzcheat.net.",
  path: "/updates/",
  keywords: [
    "DayZ cheats updates",
    "BattlEye status",
    "DayZ patch cheat status",
    "dayz cheat maintenance",
  ],
});

export default function UpdatesPage() {
  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageSchema({
              name: "DayZ Cheats Updates",
              description:
                "DayZ cheats update status, BattlEye patch guidance, and maintenance notes.",
              path: "/updates/",
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "DayZ Cheats Updates", path: "/updates/" },
            ]),
          ),
        }}
      />
      <PageHero
        eyebrow="Updates"
        title="DayZ cheats updates & status"
        description="Check DayZ cheats loader status after patches and BattlEye maintenance before you enable ESP, aimbot, or radar."
        icon={RefreshCw}
      />
      <section className="border-b border-white/10 px-4 py-6 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Updates" }]}
          />
        </div>
      </section>
      <section className="px-4 py-14 sm:px-8">
        <div className="mx-auto max-w-3xl space-y-6 text-sm leading-relaxed text-[#c8bfd8] sm:text-base">
          <p>
            This DayZ cheats updates page tracks loader status and patch-day
            guidance. Review it whenever Steam ships a new DayZ build or BattlEye
            maintenance is announced.
          </p>
          <div className="border border-[#bf5aff]/30 bg-[#bf5aff]/5 p-5">
            <p className="font-bold uppercase tracking-wide text-white">
              Current status: Operational
            </p>
            <p className="mt-2">
              dayzcheat.net lists DayZ cheat access as operational. Always
              verify loader version against the latest game build before
              injecting — especially on patch day.
            </p>
          </div>

          <section>
            <h2 className="text-lg font-bold uppercase tracking-wide text-white">
              After every DayZ patch
            </h2>
            <p className="mt-3">
              Steam updates can break ESP, aimbot, or radar overlays until the
              cheat build is re-tested. Read our{" "}
              <Link href="/blog/battleye-updates-what-to-check/" className="text-[#bf5aff] underline">
                BattlEye updates checklist
              </Link>{" "}
              and confirm status here before launching on your main account.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold uppercase tracking-wide text-white">
              Related guides
            </h2>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/blog/dayz-esp-setup-basics/" className="text-[#bf5aff] underline">
                  DayZ ESP setup basics
                </Link>
              </li>
              <li>
                <Link href="/blog/how-to-buy-dayz-cheats/" className="text-[#bf5aff] underline">
                  How to buy DayZ cheats safely
                </Link>
              </li>
              <li>
                <Link href="/faq/" className="text-[#bf5aff] underline">
                  FAQ — HWID, refunds, and ban policy
                </Link>
              </li>
            </ul>
          </section>

          <p className="border border-white/10 bg-[rgba(18,10,32,0.85)] p-5 text-xs text-[#a89ab8]">
            Detailed public changelogs will be posted on this page as they are
            released. Join Discord from the homepage for faster update notices.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#bf5aff]"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}
