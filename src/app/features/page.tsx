import type { Metadata } from "next";
import { FeaturesShowcase } from "@/components/shared/FeaturesShowcase";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "DayZ Cheat Features – ESP, Aimbot & Radar",
  description:
    "Explore 16 DayZ Cheats visuals covering Player ESP, Loot ESP, containers, Aimbot controls, radar, filters, and more.",
  path: "/features/",
  keywords: ["DayZ ESP", "DayZ aimbot", "DayZ radar", "DayZ cheat features"],
});

export default function FeaturesPage() {
  return (
    <main className="flex-1 overflow-x-hidden">
      <FeaturesShowcase />
    </main>
  );
}
