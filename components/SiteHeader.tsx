"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/now", label: "Now" },
  { href: "/path", label: "Path" },
  { href: "/work", label: "Work" },
  { href: "/writing", label: "Writing" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="mx-auto flex w-full max-w-2xl flex-col gap-4 px-6 pt-[max(1.5rem,env(safe-area-inset-top))] pb-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
      <Link
        href="/"
        translate="no"
        className="nav-link shrink-0 text-ink"
        aria-current={pathname === "/" ? "page" : undefined}
      >
        Justin Jia
      </Link>
      <nav aria-label="Primary" className="site-nav">
        <ul className="flex min-w-0 flex-wrap gap-x-4 gap-y-2 sm:justify-end">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="nav-link"
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
