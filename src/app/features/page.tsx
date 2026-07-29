import type { Metadata } from "next";
import { FeaturesShowcase } from "@/components/shared/FeaturesShowcase";

export const metadata: Metadata = {
  title: "DayZ Cheat Features – ESP, Aimbot & Radar",
  description:
    "Explore 16 DayZ Cheats visuals covering Player ESP, Loot ESP, containers, Aimbot controls, radar, filters, and more.",
  alternates: { canonical: "/features/" },
};

export default function FeaturesPage() {
  return (
    <main className="flex-1">
      <FeaturesShowcase />
    </main>
  );
}
