import type { Metadata } from "next";
import { HomePage } from "@/components/home/HomePage";
import { CHECKOUT_URL } from "@/lib/checkout";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "DayZ Cheats",
  applicationCategory: "GameApplication",
  operatingSystem: "Windows",
  url: "https://dayzcheat.net/",
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

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema),
        }}
      />
      <HomePage />
    </>
  );
}
