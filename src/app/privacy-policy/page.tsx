import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { PolicyDocument } from "@/components/shared/PolicyDocument";
import { privacyPolicySections } from "@/lib/legal-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy – dayzcheat.net",
  description:
    "Privacy policy for dayzcheat.net. Learn what data we collect when you browse DayZ cheats guides, features, and checkout links.",
  path: "/privacy-policy/",
  keywords: ["dayzcheat.net privacy", "DayZ cheats privacy policy"],
});

export default function PrivacyPolicyPage() {
  return (
    <main className="flex-1">
      <PageHero
        eyebrow="Policy"
        title="Privacy policy"
        description="How dayzcheat.net handles browsing data, support messages, and links to external checkout."
        icon={Shield}
      />
      <section className="px-4 py-14 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <PolicyDocument sections={privacyPolicySections} />
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 text-sm text-[#bf5aff]"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}
