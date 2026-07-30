import type { Metadata } from "next";
import { preload } from "react-dom";
import { HomePage } from "@/components/home/HomePage";
import { CHECKOUT_URL } from "@/lib/checkout";
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
    "DayZ Cheats is a third-party toolkit featuring ESP and Aimbot modules for DayZ, with pricing plans, updates, and support information.",
  offers: [
    {
      "@type": "Offer",
      name: "1 Day Access",
      url: CHECKOUT_URL,
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      name: "1 Week Access",
      url: CHECKOUT_URL,
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      name: "1 Month Access",
      url: CHECKOUT_URL,
      availability: "https://schema.org/InStock",
    },
  ],
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
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/blog/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
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
