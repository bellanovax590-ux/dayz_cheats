"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { OptimizedPicture } from "@/components/shared/OptimizedPicture";

export type CarouselSlide = {
  src: string;
  alt: string;
  label: string;
};

type BlindsCarouselProps = {
  slides: CarouselSlide[];
  size?: "default" | "large";
  className?: string;
};

const BLIND_COUNT = 8;

export function BlindsCarousel({
  slides,
  size = "default",
  className = "",
}: BlindsCarouselProps) {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const goTo = useCallback(
    (next: number, dir: "next" | "prev") => {
      if (animating || next === index) return;
      setDirection(dir);
      setPrevIndex(index);
      setIndex(next);
      setAnimating(true);
    },
    [animating, index],
  );

  const next = () => goTo((index + 1) % slides.length, "next");
  const prev = () =>
    goTo((index - 1 + slides.length) % slides.length, "prev");

  useEffect(() => {
    if (!animating) return;
    const timer = window.setTimeout(() => setAnimating(false), 700);
    return () => window.clearTimeout(timer);
  }, [animating]);

  const current = slides[index];
  const previous = slides[prevIndex];
  const frameClass =
    size === "large"
      ? "aspect-[16/10] min-h-[200px] sm:aspect-[16/8] sm:min-h-[320px] lg:min-h-[480px]"
      : "aspect-[16/9] min-h-[180px]";

  return (
    <div className={`w-full ${className}`}>
      <div
        className={`group relative w-full cursor-pointer overflow-hidden border border-white/10 bg-black/40 ${frameClass}`}
        onClick={next}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            next();
          }
        }}
        role="button"
        tabIndex={0}
        aria-label="Show next DayZ cheat preview"
      >
        <OptimizedPicture
          src={current.src}
          alt={current.alt}
          imgClassName="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
          width={1280}
          height={640}
        />

        {animating ? (
          <div
            className={`blinds-overlay absolute inset-0 ${
              direction === "next" ? "blinds-next" : "blinds-prev"
            }`}
            aria-hidden
          >
            {Array.from({ length: BLIND_COUNT }).map((_, blindIndex) => (
              <div
                key={blindIndex}
                className="blinds-strip overflow-hidden"
                style={{
                  animationDelay: `${blindIndex * 0.05}s`,
                }}
              >
                <OptimizedPicture
                  src={previous.src}
                  alt=""
                  imgClassName="blinds-strip-img max-w-none"
                  style={{
                    width: `${BLIND_COUNT * 100}%`,
                    left: `${-blindIndex * 100}%`,
                  }}
                  loading="eager"
                  width={1280}
                  height={640}
                />
              </div>
            ))}
          </div>
        ) : null}

        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            prev();
          }}
          className="absolute left-2 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center border border-white/20 bg-black/50 text-white opacity-80 transition hover:border-[#bf5aff]/50 hover:opacity-100"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            next();
          }}
          className="absolute right-2 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center border border-white/20 bg-black/50 text-white opacity-80 transition hover:border-[#bf5aff]/50 hover:opacity-100"
          aria-label="Next image"
        >
          <ChevronRight className="h-4 w-4" />
        </button>

        <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between bg-gradient-to-t from-black/70 to-transparent px-3 py-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
            {current.label}
          </p>
          <p className="font-mono text-[11px] text-[#a89ab8]">
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(slides.length).padStart(2, "0")}
          </p>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {slides.map((slide, slideIndex) => (
          <button
            key={slide.src}
            type="button"
            onClick={() =>
              goTo(slideIndex, slideIndex > index ? "next" : "prev")
            }
            className={`h-1.5 min-w-8 flex-1 transition ${
              slideIndex === index ? "bg-[#7a5690]" : "bg-white/15 hover:bg-white/30"
            }`}
            aria-label={`Show ${slide.label}`}
          />
        ))}
      </div>
    </div>
  );
}
