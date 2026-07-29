import type { Metadata } from "next";
import Link from "next/link";
import { CreditCard, ShieldAlert } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { PricingPlans } from "@/components/shared/PricingPlans";

export const metadata: Metadata = {
  title: "Pricing – DayZ Cheats Access Plans",
  description:
    "Compare DayZ Cheats access periods: 1 Day, 1 Week, and 1 Month. Checkout opens on the external purchase page.",
  alternates: { canonical: "/pricing/" },
};

export default function PricingPage() {
  return (
    <main className="flex-1">
      <PageHero
        eyebrow="Pricing"
        title="Choose your access period"
        description="Three clear durations for DayZ Cheats. Final prices and payment details appear on checkout. Using third-party game tools can violate game terms."
        icon={CreditCard}
      />
      <section className="px-4 py-14 sm:px-8">
        <div className="mx-auto max-w-6xl">
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
              </Link>{" "}
              and{" "}
              <Link href="/terms/" className="underline">
                terms
              </Link>{" "}
              before purchasing.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
