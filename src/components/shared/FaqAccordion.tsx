"use client";

import { useId, useState } from "react";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";
import type { FaqItem } from "@/lib/site-data";

type FaqAccordionProps = {
  items: FaqItem[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <div
            key={item.question}
            className="faq-box overflow-hidden border border-white/10 bg-transparent"
          >
            <h2 className="text-base font-bold">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-white/[0.03] sm:text-base"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="inline-flex items-start gap-3">
                  <MessageCircleQuestion
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#bf5aff]"
                    aria-hidden
                  />
                  {item.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-[#bf5aff] transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden
                />
              </button>
            </h2>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="border-t border-white/10 px-5 py-4 text-sm font-bold leading-relaxed text-[#c8bfd8]"
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
