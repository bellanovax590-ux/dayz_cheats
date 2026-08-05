import type { Metadata } from "next";
import { CircleHelp } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { faqItems } from "@/lib/site-data";
import { createPageMetadata } from "@/lib/seo";
import { PRIMARY_KEYWORDS } from "@/lib/keywords";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = createPageMetadata({
  title: "FAQ – DayZ Cheats, BattlEye & Compatibility",
  description:
    "Answers about DayZ Cheats, BattlEye risk, ESP and Aimbot features, system compatibility, updates, and refunds.",
  path: "/faq/",
  keywords: ["dayz cheats faq", "battleye", ...PRIMARY_KEYWORDS],
});

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "FAQ", path: "/faq/" },
            ]),
          ),
        }}
      />
      <PageHero
        eyebrow="FAQ"
        title="DayZ cheats FAQ"
        description="Straight answers about DayZ cheats, BattlEye risk, ESP, aimbot, compatibility, and support — without guaranteed-undetected claims."
        icon={CircleHelp}
      />
      <section className="px-4 py-14 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
          />
          <p className="mb-8 text-sm leading-relaxed text-[#c8bfd8] sm:text-base">
            Use this DayZ cheats FAQ before you buy or launch. Questions cover
            BattlEye enforcement, ESP and aimbot features, HWID resets, refunds,
            and what to expect after DayZ patches.
          </p>
          <FaqAccordion items={faqItems} />
        </div>
      </section>
    </main>
  );
}
