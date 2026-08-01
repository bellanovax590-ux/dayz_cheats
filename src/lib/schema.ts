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

export function pricingServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "DayZ Cheats – ESP, Aimbot & Radar Access",
    description:
      "Timed access to DayZ cheats with Player ESP, Loot ESP, Aimbot, 2D radar, and support on dayzcheat.net.",
    provider: {
      "@type": "Organization",
      name: "DayZ Cheats",
      url: SITE_URL,
    },
    serviceType: "Game software access",
    url: `${SITE_URL}/pricing/`,
    image: `${SITE_URL}/images/og-default.webp`,
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "DayZ Cheats Access Plans",
      itemListElement: plans.map((plan) => ({
        "@type": "Offer",
        name: `${plan.name} – ${plan.duration}`,
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
    },
  };
}

/** @deprecated Use pricingServiceSchema */
export function pricingProductSchema() {
  return pricingServiceSchema();
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
