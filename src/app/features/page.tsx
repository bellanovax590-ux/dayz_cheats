import type { Metadata } from "next";
import { FeaturesShowcase } from "@/components/shared/FeaturesShowcase";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PRIMARY_KEYWORDS } from "@/lib/keywords";
import { createPageMetadata } from "@/lib/seo";
import { breadcrumbSchema, featuresItemListSchema } from "@/lib/schema";

export const metadata: Metadata = createPageMetadata({
  title: "DayZ Cheat Features – ESP, Aimbot & Radar",
  description:
    "Explore 16 DayZ cheat features: Player ESP, Loot ESP, containers, aimbot FOV, smoothing, bone selection, 2D radar, and filters on dayzcheat.net.",
  path: "/features/",
  keywords: [
    "dayz cheat features",
    "dayz esp",
    "dayz aimbot",
    "dayz radar",
    "dayz wallhack",
    "dayz loot esp",
    ...PRIMARY_KEYWORDS,
  ],
});

export default function FeaturesPage() {
  return (
    <main className="flex-1 overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(featuresItemListSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "DayZ Cheat Features", path: "/features/" },
            ]),
          ),
        }}
      />
      <div className="mx-auto max-w-6xl px-4 pt-6 sm:px-8">
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Features" }]}
        />
      </div>
      <FeaturesShowcase />
    </main>
  );
}
