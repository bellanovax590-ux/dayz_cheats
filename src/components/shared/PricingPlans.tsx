import { ArrowUpRight, Check, Clock3, CalendarDays, CalendarRange } from "lucide-react";
import { plans } from "@/lib/site-data";

const planIcons = {
  "1-day": Clock3,
  "1-week": CalendarDays,
  "1-month": CalendarRange,
} as const;

export function PricingPlans() {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {plans.map((plan, index) => {
        const Icon = planIcons[plan.id as keyof typeof planIcons] ?? Clock3;
        return (
          <article
            key={plan.id}
            id={plan.id}
            className={`pricing-card blog-fade-item blog-fade-delay-${index} group flex flex-col border p-6 ${
              plan.highlighted
                ? "pricing-card-featured border-[#bf5aff]/55 bg-[rgba(36,16,56,0.92)] shadow-[0_0_40px_rgba(191,90,255,0.12)]"
                : "border-white/10 bg-[rgba(18,10,32,0.85)]"
            }`}
          >
            {plan.highlighted ? (
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#bf5aff]">
                Most selected
              </p>
            ) : (
              <div className="mb-3 h-4" aria-hidden />
            )}
            <div className="mb-3 flex h-11 w-11 items-center justify-center border border-[#bf5aff]/35 bg-[#bf5aff]/10 text-[#bf5aff] transition-transform duration-200 group-hover:scale-110 group-hover:border-[#bf5aff]">
              <Icon className="h-5 w-5" aria-hidden />
            </div>
            <h2 className="text-2xl font-black uppercase tracking-wide text-white">
              {plan.name}
            </h2>
            <p className="mt-1 text-sm text-[#a89ab8]">{plan.duration}</p>
            <p className="mt-4 text-sm leading-relaxed text-[#c8bfd8]">
              {plan.description}
            </p>
            <ul className="mt-5 flex-1 space-y-2">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm text-[#ddd5e8]"
                >
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#bf5aff]"
                    aria-hidden
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href={plan.checkoutHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`pricing-buy-btn mt-6 inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold uppercase tracking-[0.16em] transition-all duration-200 ${
                plan.highlighted
                  ? "bg-[#bf5aff] text-[#14081f] hover:bg-[#d946ef] hover:shadow-[0_0_24px_rgba(191,90,255,0.45)]"
                  : "border border-[#bf5aff]/40 text-[#bf5aff] hover:border-[#bf5aff] hover:bg-[#bf5aff]/10 hover:shadow-[0_0_20px_rgba(191,90,255,0.2)]"
              }`}
            >
              {plan.priceLabel}
              <ArrowUpRight className="pricing-buy-icon h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
            </a>
          </article>
        );
      })}
    </div>
  );
}
