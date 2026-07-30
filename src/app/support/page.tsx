import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CreditCard, LifeBuoy, Mail } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { CHECKOUT_URL } from "@/lib/checkout";
import { DISCORD_SERVER_ID, DISCORD_URL } from "@/lib/discord";
import { createPageMetadata } from "@/lib/seo";
import { breadcrumbSchema, contactPageSchema } from "@/lib/schema";

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

export const metadata: Metadata = createPageMetadata({
  title: "DayZ Cheats Support – Billing & Setup Help",
  description:
    "Contact DayZ Cheats support for loader access, HWID resets, billing, and update questions on dayzcheat.net.",
  path: "/support/",
  keywords: [
    "DayZ cheats support",
    "dayz cheat help",
    "HWID reset DayZ",
    "dayzcheat.net support",
  ],
});

export default function SupportPage() {
  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactPageSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "DayZ Cheats Support", path: "/support/" },
            ]),
          ),
        }}
      />
      <PageHero
        eyebrow="Support"
        title="DayZ cheats customer support"
        description="Contact support with your order ID for access, update, or billing help. Join Discord for faster community help, or open checkout if you still need access."
        icon={LifeBuoy}
      />
      <section className="px-4 py-14 sm:px-8">
        <div className="mx-auto max-w-3xl space-y-4">
          <div className="flex items-start gap-3 border border-white/10 bg-[rgba(18,10,32,0.85)] p-5">
            <Mail className="mt-0.5 h-5 w-5 text-[#bf5aff]" aria-hidden />
            <div>
              <h2 className="font-bold uppercase tracking-wide text-white">
                How to reach us
              </h2>
              <p className="mt-2 text-sm text-[#c8bfd8]">
                Include your order ID and a short description of the issue.
                Response times can vary during major DayZ patches. Read the{" "}
                <Link href="/blog/dayz-cheats-support-checklist/" className="text-[#bf5aff] underline">
                  support checklist
                </Link>{" "}
                before opening a ticket.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#5865F2] px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#4752c4]"
            >
              <DiscordIcon className="h-4 w-4" />
              Join Discord
            </a>
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#bf5aff] px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-[#14081f] transition hover:bg-[#d946ef]"
            >
              <CreditCard className="h-4 w-4" aria-hidden />
              Get DayZ Cheats
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
          </div>

          <p className="text-xs text-[#a89ab8]">
            Discord server ID: {DISCORD_SERVER_ID}
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
