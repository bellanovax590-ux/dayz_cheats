import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, RefreshCw } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Updates",
  description: "DayZ Cheats product updates and maintenance notes.",
  alternates: { canonical: "/updates/" },
};

export default function UpdatesPage() {
  return (
    <main className="flex-1">
      <PageHero
        eyebrow="Updates"
        title="Product updates"
        description="Changelogs and maintenance notes will appear here after DayZ patches and product releases."
        icon={RefreshCw}
      />
      <section className="px-4 py-14 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="border border-white/10 bg-[rgba(18,10,32,0.85)] p-5 text-sm text-[#c8bfd8]">
            No public changelog entries are listed yet. Check back after the next
            maintenance window.
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex items-center gap-2 text-sm text-[#bf5aff]"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}
