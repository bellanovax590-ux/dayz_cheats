"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  BookOpen,
  CircleHelp,
  CreditCard,
  Home,
  LayoutGrid,
  Menu,
  X,
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
  onNavigate,
  mobile = false,
}: {
  href: string;
  label: string;
  icon: LucideIcon;
  active: boolean;
  onNavigate?: () => void;
  mobile?: boolean;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={`nav-link inline-flex items-center gap-2 border-b transition ${
        mobile
          ? "w-full px-3 py-3 text-sm font-semibold uppercase tracking-[0.14em]"
          : "shrink-0 gap-1.5 px-2 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] sm:gap-2 sm:px-3 sm:text-xs sm:tracking-[0.16em]"
      } ${
        active
          ? "border-[var(--nav-underline)] text-[var(--nav-text)]"
          : "border-transparent text-[var(--nav-text)] hover:border-[var(--nav-underline)]"
      }`}
    >
      <Icon className={mobile ? "h-4 w-4" : "h-3.5 w-3.5"} aria-hidden />
      {label}
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuState, setMenuState] = useState({ pathname, open: false });
  const menuOpen =
    menuState.pathname === pathname ? menuState.open : false;
  const setMenuOpen = (value: boolean | ((prev: boolean) => boolean)) => {
    setMenuState((prev) => {
      const currentOpen = prev.pathname === pathname ? prev.open : false;
      const nextOpen =
        typeof value === "function" ? value(currentOpen) : value;
      return { pathname, open: nextOpen };
    });
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname.startsWith(href.replace(/\/$/, ""));

  return (
    <header className="site-header sticky top-0 z-40 overflow-hidden border-b border-[color:var(--header-border)] bg-[color:var(--header-bg)] backdrop-blur-md">
      <HeaderSandParticles />

      <div className="relative z-10 mx-auto max-w-6xl px-3 py-3 sm:px-8">
        <div className="flex items-center justify-between gap-3">
          <Link href="/" className="flex min-w-0 shrink-0 items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/icon-48.png"
              alt="Zadeyo DayZ Cheats logo"
              width={32}
              height={32}
              className="h-8 w-8 shrink-0 rounded-sm object-contain"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
            <span className="hidden truncate text-sm font-black uppercase tracking-[0.18em] text-[var(--nav-text)] sm:inline">
              DayZ Cheats
            </span>
          </Link>

          <nav
            className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 lg:flex lg:gap-1"
            aria-label="Primary"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                icon={item.icon}
                active={isActive(item.href)}
              />
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-0.5 sm:gap-2">
            <ThemeToggle />
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 border-b border-transparent px-2 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--nav-text)] transition hover:border-[var(--nav-underline)] sm:gap-2 sm:px-3 sm:text-xs sm:tracking-[0.16em]"
            >
              <CreditCard className="h-3.5 w-3.5" aria-hidden />
              <span className="hidden sm:inline">Get cheats</span>
              <span className="sm:hidden">Get</span>
            </a>
            <button
              type="button"
              className="inline-flex items-center justify-center border-b border-transparent p-2 text-[var(--nav-text)] transition hover:border-[var(--nav-underline)] lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? (
                <X className="h-5 w-5" aria-hidden />
              ) : (
                <Menu className="h-5 w-5" aria-hidden />
              )}
            </button>
          </div>
        </div>

        {menuOpen ? (
          <nav
            id="mobile-nav"
            className="mt-3 border-t border-[color:var(--header-border)] pt-3 lg:hidden"
            aria-label="Mobile primary"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  icon={item.icon}
                  active={isActive(item.href)}
                  mobile
                  onNavigate={() => setMenuOpen(false)}
                />
              ))}
            </div>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
