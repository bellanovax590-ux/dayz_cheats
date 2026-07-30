import type { Metadata } from "next";
import { FeaturesShowcase } from "@/components/shared/FeaturesShowcase";
import { createPageMetadata } from "@/lib/seo";
import { breadcrumbSchema, featuresItemListSchema } from "@/lib/schema";

export const metadata: Metadata = createPageMetadata({
  title: "DayZ Cheat Features – ESP, Aimbot & Radar",
  description:
    "Explore 16 DayZ cheat features: Player ESP, Loot ESP, containers, aimbot FOV, smoothing, bone selection, 2D radar, and filters on dayzcheat.net.",
  path: "/features/",
  keywords: [
    "dayz cheat features",
    "DayZ ESP",
    "DayZ aimbot",
    "DayZ radar",
    "DayZ loot ESP",
    "dayz cheats",
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
      <FeaturesShowcase />
    </main>
  );
}
