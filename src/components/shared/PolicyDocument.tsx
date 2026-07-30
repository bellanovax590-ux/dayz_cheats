import type { PolicySection } from "@/lib/legal-content";

type PolicyDocumentProps = {
  sections: PolicySection[];
};

export function PolicyDocument({ sections }: PolicyDocumentProps) {
  return (
    <div className="space-y-8 text-sm leading-relaxed text-[#c8bfd8] sm:text-base">
      {sections.map((section) => (
        <section key={section.heading}>
          <h2 className="text-lg font-bold uppercase tracking-wide text-white">
            {section.heading}
          </h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="mt-3">
              {paragraph}
            </p>
          ))}
        </section>
      ))}
    </div>
  );
}
