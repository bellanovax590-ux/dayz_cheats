import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Scale } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { PolicyDocument } from "@/components/shared/PolicyDocument";
import { termsSections } from "@/lib/legal-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Terms of Use – DayZ Cheats",
  description:
    "Terms of use for dayzcheat.net and DayZ cheats information, including risk disclosure for ESP, aimbot, and BattlEye enforcement.",
  path: "/terms/",
  keywords: ["DayZ cheats terms", "dayzcheat.net terms of use"],
});

export default function TermsPage() {
  return (
    <main className="flex-1">
      <PageHero
        eyebrow="Policy"
        title="Terms of use"
        description="Rules for using dayzcheat.net and purchasing DayZ cheat access through official checkout links."
        icon={Scale}
      />
      <section className="px-4 py-14 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <PolicyDocument sections={termsSections} />
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
