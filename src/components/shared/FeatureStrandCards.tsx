import { features } from "@/lib/site-data";
import { StrandCard } from "@/components/shared/StrandCard";

type FeatureStrandCardsProps = {
  limit?: number;
};

export function FeatureStrandCards({ limit }: FeatureStrandCardsProps) {
  const items = typeof limit === "number" ? features.slice(0, limit) : features;

  return (
    <div className="space-y-5">
      {items.map((feature, index) => (
        <StrandCard key={feature.slug} slug={feature.slug} index={index} />
      ))}
    </div>
  );
}
