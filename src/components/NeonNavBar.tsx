"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/music", label: "Music" },
  { href: "/media", label: "Media" },
  { href: "/tour", label: "Tour" },
  { href: "/contact", label: "Booking" },
];

type Theme = "neon" | "pro";

export default function NeonNavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("neon");

  // Close the mobile menu on route change
  useEffect(() => setOpen(false), [pathname]);

  // Hydrate theme from localStorage and apply to <html data-theme="...">
  useEffect(() => {
    const saved = (typeof window !== "undefined"
      ? (localStorage.getItem("theme") as Theme | null)
      : null) || "neon";
    setTheme(saved);
    document.documentElement.dataset.theme = saved;
  }, []);

  const toggleTheme = () => {
    const next: Theme = theme === "neon" ? "pro" : "neon";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="glass-neon sticky top-0 z-50">
      <div className="wrap relative flex h-16 md:h-20 items-center justify-between">
        {/* Brand */}
        <Link href="/" className="neon-logo">
          Nel Fuoco
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:block" aria-label="Primary">
          <ul className="flex items-center gap-1">
            {LINKS.map((l) => {
              const active = isActive(l.href);
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`nav-link ${active ? "active" : ""}`}
                    aria-current={active ? "page" : undefined}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right-side actions (desktop) */}
        <div className="hidden md:flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="btn btn-outline"
            aria-label="Toggle theme"
            aria-pressed={theme === "pro"}
            title={theme === "neon" ? "Switch to Pro theme" : "Switch to Neon theme"}
          >
            {theme === "neon" ? "Neon" : "Pro"}
          </button>
          <Link href="/tour" className="btn btn-primary">
            Tickets
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden btn btn-outline"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
            <path fill="currentColor" d="M3 6h18v2H3zM3 11h18v2H3zM3 16h18v2H3z" />
          </svg>
        </button>

        {/* Mobile drawer */}
        <nav
          id="mobile-menu"
          className={`absolute left-0 right-0 top-full md:hidden ${open ? "block" : "hidden"}`}
          aria-label="Mobile"
        >
          <ul className="border-t border-white/10 bg-black/70 backdrop-blur-md shadow-lg p-3 space-y-1">
            {LINKS.map((l) => {
              const active = isActive(l.href);
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`nav-link block ${active ? "active" : ""}`}
                    aria-current={active ? "page" : undefined}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
            <li className="flex gap-2 pt-2">
              <button
                type="button"
                onClick={toggleTheme}
                className="btn btn-outline w-full justify-center"
                aria-label="Toggle theme"
                aria-pressed={theme === "pro"}
              >
                Theme: {theme === "neon" ? "Neon" : "Pro"}
              </button>
              <Link href="/tour" className="btn btn-primary w-full justify-center">
                Tickets
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
