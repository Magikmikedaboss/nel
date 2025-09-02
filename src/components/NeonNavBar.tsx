"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/music", label: "Music" },
  { href: "/media", label: "Media" },
  { href: "/tour", label: "Tour" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50">
      <div className="relative glass-neon">
        <div className="wrap flex h-16 items-center justify-between text-white">
          <Link href="/" className="neon-logo" aria-label="Nel Fuoco — Home">
            Nel Fuoco
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`nav-link ${pathname === l.href ? "active" : ""}`}
              >
                {l.label}
              </Link>
            ))}
            <Link href="/music" className="ml-2 neon-cta">Listen</Link>
          </nav>

          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden neon-outline"
            aria-expanded={open}
            aria-controls="mnav"
          >
            Menu
          </button>
        </div>
        <div className="neon-bar" />
      </div>

      {open && (
        <div
          id="mnav"
          className="md:hidden bg-gray-900/70 backdrop-blur-md border-b border-white/20"
        >
          <div className="wrap py-3 flex flex-col">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={
                  "px-3 py-2 rounded-md transition " +
                  (pathname === l.href
                    ? "bg-fuchsia-500/15 text-white"
                    : "text-white/80 hover:text-white hover:bg-white/5")
                }
              >
                {l.label}
              </Link>
            ))}
            <Link href="/music" className="mt-2 neon-cta">Listen</Link>
          </div>
        </div>
      )}
    </header>
  );
}
