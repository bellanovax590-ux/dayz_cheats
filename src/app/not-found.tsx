import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Home, LayoutGrid } from "lucide-react";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 py-20 text-center sm:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#bf5aff]">
        404
      </p>
      <h1 className="mt-3 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#c8bfd8]">
        That URL does not exist on dayzcheat.net. Browse DayZ cheat features,
        pricing, or our searchable blog guides instead.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#bf5aff] px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[#14081f]"
        >
          <Home className="h-4 w-4" aria-hidden />
          Home
        </Link>
        <Link
          href="/features/"
          className="inline-flex items-center gap-2 border border-[#bf5aff]/40 px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[#bf5aff]"
        >
          <LayoutGrid className="h-4 w-4" aria-hidden />
          Features
        </Link>
        <Link
          href="/blog/"
          className="inline-flex items-center gap-2 border border-white/20 px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white"
        >
          <BookOpen className="h-4 w-4" aria-hidden />
          Blog guides
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </main>
  );
}
