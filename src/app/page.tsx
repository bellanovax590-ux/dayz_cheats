import type { Metadata } from "next";
import { preload } from "react-dom";
import { HomePage } from "@/components/home/HomePage";
import { createPageMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site-url";

preload("/images/dayz-character-cutout.webp", {
  as: "image",
  fetchPriority: "high",
});

export const metadata: Metadata = createPageMetadata({
  title: "DayZ Cheats – ESP, Aimbot & Radar",
  description:
    "DayZ cheats with Player ESP, Loot ESP, aimbot, and 2D radar. Compare features, pricing, FAQ, and searchable blog guides on dayzcheat.net.",
  path: "/",
  keywords: [
    "dayz cheat",
    "DayZ cheats",
    "DayZ ESP",
    "DayZ aimbot",
    "DayZ radar",
    "DayZ wallhack",
    "DayZ player ESP",
    "DayZ loot ESP",
    "dayz hack",
    "dayzcheat.net",
  ],
});

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "DayZ Cheats",
  url: SITE_URL,
  description:
    "Official DayZ Cheats site for ESP, aimbot, radar, pricing, FAQ, blog guides, and support.",
  inLanguage: "en-US",
  publisher: {
    "@type": "Organization",
    name: "DayZ Cheats",
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/zadeyo-logo-512.png`,
      width: 512,
      height: 512,
    },
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <HomePage />
    </>
  );
}
