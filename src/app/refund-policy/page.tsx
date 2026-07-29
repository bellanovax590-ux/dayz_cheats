import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Refund conditions for DayZ Cheats purchases.",
  alternates: { canonical: "/refund-policy/" },
};

export default function RefundPolicyPage() {
  return (
    <main className="flex-1">
      <PageHero
        eyebrow="Policy"
        title="Refund policy"
        description="Accurate refund conditions will be published here before public launch. Until then, contact support with your order details."
        icon={Shield}
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
