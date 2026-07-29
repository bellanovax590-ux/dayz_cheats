import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Scale } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use for DayZ Cheats on dayzcheat.net.",
  alternates: { canonical: "/terms/" },
};

export default function TermsPage() {
  return (
    <main className="flex-1">
      <PageHero
        eyebrow="Policy"
        title="Terms of use"
        description="Terms of use for DayZ Cheats will be published on this page."
        icon={Scale}
      />
      <section className="px-4 py-14 sm:px-8">
        <div className="mx-auto max-w-3xl">
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
