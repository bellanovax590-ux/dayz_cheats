"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  CircleHelp,
  CreditCard,
  Home,
  LayoutGrid,
  type LucideIcon,
} from "lucide-react";
import { HeaderSandParticles } from "@/components/layout/HeaderSandParticles";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { CHECKOUT_URL } from "@/lib/checkout";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/features/", label: "Features", icon: LayoutGrid },
  { href: "/pricing/", label: "Pricing", icon: CreditCard },
  { href: "/faq/", label: "FAQ", icon: CircleHelp },
  { href: "/blog/", label: "Blog", icon: BookOpen },
];

function NavLink({
  href,
  label,
  icon: Icon,
  active,
}: {
  href: string;
  label: string;
  icon: LucideIcon;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`nav-link inline-flex shrink-0 items-center gap-1.5 border-b px-2 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] transition sm:gap-2 sm:px-3 sm:text-xs sm:tracking-[0.16em] ${
        active
          ? "border-[var(--nav-underline)] text-[var(--nav-text)]"
          : "border-transparent text-[var(--nav-text)] hover:border-[var(--nav-underline)]"
      }`}
    >
      <Icon className="h-3.5 w-3.5" aria-hidden />
      {label}
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header sticky top-0 z-40 overflow-hidden border-b border-[color:var(--header-border)] bg-[color:var(--header-bg)] backdrop-blur-md">
      <HeaderSandParticles />

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 px-3 py-3 sm:gap-4 sm:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/zadeyo-logo.webp"
            alt="DayZ Cheats logo"
            width={32}
            height={32}
            className="h-8 w-8 rounded-sm object-contain"
          />
          <span className="block text-sm font-black uppercase tracking-[0.18em] text-[var(--nav-text)]">
            DayZ Cheats
          </span>
        </Link>

        <nav
          className="flex min-w-0 flex-wrap items-center justify-center gap-0.5 sm:gap-1"
          aria-label="Primary"
        >
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href.replace(/\/$/, ""));

            return (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                icon={item.icon}
                active={active}
              />
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          <ThemeToggle />
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-b border-transparent px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[var(--nav-text)] transition hover:border-[var(--nav-underline)]"
          >
            <CreditCard className="h-3.5 w-3.5" aria-hidden />
            <span className="hidden sm:inline">Get cheats</span>
            <span className="sm:hidden">Get</span>
          </a>
        </div>
      </div>
    </header>
  );
}
