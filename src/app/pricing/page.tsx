import type { Metadata } from "next";
import Link from "next/link";
import { CreditCard, ShieldAlert } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { PricingPlans } from "@/components/shared/PricingPlans";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { createPageMetadata } from "@/lib/seo";
import { breadcrumbSchema, pricingPageSchema } from "@/lib/schema";

export const metadata: Metadata = createPageMetadata({
  title: "DayZ Cheats Pricing – ESP & Aimbot Access Plans",
  description:
    "Compare DayZ cheats pricing: 1 Day, 1 Week, and 1 Month access for ESP, aimbot, and radar. Secure checkout on dayzcheat.net.",
  path: "/pricing/",
  keywords: [
    "dayz cheats price",
    "DayZ cheats pricing",
    "buy DayZ ESP",
    "DayZ aimbot buy",
    "dayz cheat cost",
  ],
});

export default function PricingPage() {
  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pricingPageSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "DayZ Cheats Pricing", path: "/pricing/" },
            ]),
          ),
        }}
      />
      <PageHero
        eyebrow="Pricing"
        title="DayZ cheats pricing & access plans"
        description="Three clear durations for DayZ Cheats ESP, aimbot, and radar. Final prices appear on checkout. Third-party tools may violate game terms."
        icon={CreditCard}
      />
      <section className="px-4 py-14 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Pricing" }]}
          />
          <PricingPlans />
          <div className="mt-8 flex items-start gap-3 border border-amber-400/25 bg-amber-400/5 px-4 py-3 text-sm text-amber-100/90">
            <ShieldAlert
              className="mt-0.5 h-4 w-4 shrink-0 text-amber-300"
              aria-hidden
            />
            <p>
              Review the{" "}
              <Link href="/refund-policy/" className="underline">
                refund policy
              </Link>
              ,{" "}
              <Link href="/faq/" className="underline">
                FAQ
              </Link>
              , and{" "}
              <Link href="/terms/" className="underline">
                terms
              </Link>{" "}
              before purchasing DayZ cheats.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
