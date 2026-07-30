import { CHECKOUT_URL } from "@/lib/checkout";
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

export function pricingProductSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "DayZ Cheats – ESP, Aimbot & Radar Access",
    description:
      "Timed access to DayZ cheats with Player ESP, Loot ESP, Aimbot, 2D radar, and support on dayzcheat.net.",
    brand: {
      "@type": "Brand",
      name: "DayZ Cheats",
    },
    url: `${SITE_URL}/pricing/`,
    image: `${SITE_URL}/images/og-default.webp`,
    offers: plans.map((plan) => ({
      "@type": "Offer",
      name: plan.name,
      description: plan.description,
      url: plan.checkoutHref || CHECKOUT_URL,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "DayZ Cheats",
        url: SITE_URL,
      },
    })),
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
