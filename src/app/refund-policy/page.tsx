import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { PolicyDocument } from "@/components/shared/PolicyDocument";
import { refundPolicySections } from "@/lib/legal-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Refund Policy – DayZ Cheats",
  description:
    "Refund policy for DayZ cheats purchases through dayzcheat.net checkout. Eligible cases, exclusions, and how to contact support.",
  path: "/refund-policy/",
  keywords: ["DayZ cheats refund", "dayzcheat.net refund policy"],
});

export default function RefundPolicyPage() {
  return (
    <main className="flex-1">
      <PageHero
        eyebrow="Policy"
        title="Refund policy"
        description="When refunds apply for DayZ cheat access, and when BattlEye bans or user error are excluded."
        icon={Shield}
      />
      <section className="px-4 py-14 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <PolicyDocument sections={refundPolicySections} />
          <Link
            href="/support/"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#bf5aff]"
          >
            Contact support for refund requests
          </Link>
          <Link
            href="/"
            className="mt-4 inline-flex items-center gap-2 text-sm text-[#bf5aff]"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}
