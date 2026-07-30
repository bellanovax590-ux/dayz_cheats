import { ArrowRight } from "lucide-react";
import { CHECKOUT_URL } from "@/lib/checkout";

type BlogGetCheatsCtaProps = {
  variant?: "banner" | "compact" | "sticky";
};

export function BlogGetCheatsCta({ variant = "banner" }: BlogGetCheatsCtaProps) {
  if (variant === "sticky") {
    return (
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 px-4 pb-4 sm:px-8">
        <div className="pointer-events-auto mx-auto flex max-w-3xl items-center justify-between gap-3 border border-[#bf5aff]/40 bg-[#14081f]/95 px-4 py-3 shadow-[0_-8px_32px_rgba(191,90,255,0.15)] backdrop-blur-sm">
          <p className="hidden text-xs font-semibold uppercase tracking-[0.12em] text-[#c8bfd8] sm:block">
            Ready for DayZ ESP &amp; Aimbot?
          </p>
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 bg-[#bf5aff] px-4 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-[#14081f] transition hover:bg-[#d946ef] sm:ml-auto sm:w-auto"
          >
            Get DayZ Cheats
            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </a>
        </div>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <a
        href={CHECKOUT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-[#bf5aff] px-4 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-[#14081f] transition hover:bg-[#d946ef]"
      >
        Get DayZ Cheats
        <ArrowRight className="h-3.5 w-3.5" aria-hidden />
      </a>
    );
  }

  return (
    <aside
      className="blog-fade-item mt-8 border border-[#bf5aff]/35 bg-gradient-to-r from-[#bf5aff]/10 to-transparent p-5"
      aria-label="Get DayZ Cheats"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#bf5aff]">
            dayzcheat.net
          </p>
          <p className="mt-1 text-sm font-bold text-white sm:text-base">
            Get DayZ Cheats — ESP, Aimbot &amp; Radar access
          </p>
          <p className="mt-1 text-xs leading-relaxed text-[#c8bfd8] sm:text-sm">
            Compare plans, read update status, and checkout securely when you
            are ready to use DayZ cheats on your account.
          </p>
        </div>
        <a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center justify-center gap-2 bg-[#bf5aff] px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[#14081f] transition hover:bg-[#d946ef]"
        >
          Get DayZ Cheats
          <ArrowRight className="h-3.5 w-3.5" aria-hidden />
        </a>
      </div>
    </aside>
  );
}
