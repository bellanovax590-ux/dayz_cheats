import type { Metadata } from "next";
import { CircleHelp } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { faqItems } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "FAQ – DayZ Cheats, BattlEye & Compatibility",
  description:
    "Answers about DayZ Cheats, BattlEye risk, ESP and Aimbot features, system compatibility, updates, and refunds.",
  alternates: { canonical: "/faq/" },
};

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageSchema),
        }}
      />
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Straight answers about BattlEye risk, features, compatibility, and support — without guaranteed-undetected claims."
        icon={CircleHelp}
      />
      <section className="px-4 py-14 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <FaqAccordion items={faqItems} />
        </div>
      </section>
    </main>
  );
}
