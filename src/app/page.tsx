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
  title: "DayZ Cheats – ESP & Aimbot | DayZ",
  description:
    "DayZ Cheats with Player ESP, Loot ESP, Aimbot, and 2D radar. Compare features, pricing, FAQ, and searchable blog guides on dayzcheat.net.",
  path: "/",
  keywords: [
    "dayz cheat",
    "DayZ cheats",
    "DayZ cheat ESP",
    "DayZ ESP",
    "DayZ aimbot",
    "DayZ radar",
    "dayz hack",
    "dayzcheat.net",
  ],
});

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "DayZ Cheats",
  applicationCategory: "GameApplication",
  operatingSystem: "Windows",
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/images/og-default.webp`,
  description:
    "DayZ Cheats is a third-party toolkit featuring ESP, aimbot, and 2D radar for DayZ with pricing, blog guides, and support on dayzcheat.net.",
  inLanguage: "en-US",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "DayZ Cheats",
  url: SITE_URL,
  description:
    "Official DayZ Cheats site for ESP, Aimbot, pricing, FAQ, blog guides, and support.",
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
          __html: JSON.stringify(softwareApplicationSchema),
        }}
      />
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
