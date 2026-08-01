import { featureShowcases, plans } from "@/lib/site-data";
import { SITE_URL } from "@/lib/site-url";

export function breadcrumbSchema(
  items: Array<{ name: string; path: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function pricingPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "DayZ Cheats Pricing – ESP & Aimbot Access Plans",
    description:
      "Compare DayZ cheats pricing: 1 Day, 1 Week, and 1 Month access for ESP, aimbot, and radar on dayzcheat.net.",
    url: `${SITE_URL}/pricing/`,
    inLanguage: "en-US",
    isPartOf: {
      "@type": "WebSite",
      name: "DayZ Cheats",
      url: SITE_URL,
    },
    mainEntity: {
      "@type": "ItemList",
      name: "DayZ Cheats Access Plans",
      numberOfItems: plans.length,
      itemListElement: plans.map((plan, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: `${plan.name} – ${plan.duration}`,
        url: `${SITE_URL}/pricing/#${plan.id}`,
        description: plan.description,
      })),
    },
  };
}

export function featuresItemListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "DayZ Cheat Features – ESP, Aimbot & Radar",
    description:
      "Complete list of DayZ cheat modules including Player ESP, Loot ESP, containers, aimbot, and 2D radar.",
    numberOfItems: featureShowcases.length,
    itemListElement: featureShowcases.map((feature, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: feature.title,
      url: `${SITE_URL}/features/#${feature.slug}`,
      description: feature.description,
    })),
  };
}

export function contactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "DayZ Cheats Support",
    description:
      "Contact DayZ Cheats support for billing, HWID, loader access, and update questions on dayzcheat.net.",
    url: `${SITE_URL}/support/`,
    mainEntity: {
      "@type": "Organization",
      name: "DayZ Cheats",
      url: SITE_URL,
    },
  };
}

export function webPageSchema(options: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: options.name,
    description: options.description,
    url: `${SITE_URL}${options.path}`,
    inLanguage: "en-US",
    isPartOf: {
      "@type": "WebSite",
      name: "DayZ Cheats",
      url: SITE_URL,
    },
  };
}
