import type { Metadata } from "next";
import { preload } from "react-dom";
import { HomePage } from "@/components/home/HomePage";
import { PRIMARY_KEYWORDS } from "@/lib/keywords";
import { createPageMetadata } from "@/lib/seo";
import { SITE_URL } from "@/lib/site-url";

preload("/images/dayz-character-cutout.webp", {
  as: "image",
  fetchPriority: "high",
});

export const metadata: Metadata = createPageMetadata({
  title: "DayZ Cheats – ESP, Aimbot & Radar",
  description:
    "DayZ cheats with Player ESP, Loot ESP, aimbot, wallhack visibility, 2D radar, and recoil assist. Compare features, pricing, FAQ, and blog guides on dayzcheat.net.",
  path: "/",
  keywords: [...PRIMARY_KEYWORDS],
});

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "DayZ Cheats",
  alternateName: [
    "dayz cheats",
    "dayz esp",
    "dayz aimbot",
    "dayz hack",
    "dayzcheat.net",
  ],
  url: SITE_URL,
  description:
    "Official DayZ Cheats site for ESP, aimbot, radar, wallhack-style visibility, pricing, FAQ, blog guides, and support.",
  inLanguage: "en-US",
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/blog/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
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
