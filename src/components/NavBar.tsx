"use client";
import Link from "next/link";
import { useState } from "react";


const nav = [
{ href: "/", label: "Home" },
{ href: "/music", label: "Music" },
{ href: "/media", label: "Media" },
{ href: "/tour", label: "Tour" },
{ href: "/contact", label: "Contact" },
];


export default function NavBar() {
const [open, setOpen] = useState(false);
return (
<header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
<div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
<Link href="/" className="text-xl font-bold tracking-tight">
{/* TODO: replace with artist logo if you have one */}
Nel Fuoco
</Link>
<button
className="md:hidden rounded p-2 border"
aria-label="Toggle menu"
onClick={() => setOpen((v) => !v)}
>
☰
</button>
<nav className="hidden md:flex gap-6">
{nav.map((n) => (
<Link
key={n.href}
href={n.href}
className="text-sm font-medium hover:text-blue-600"
>
{n.label}
</Link>
))}
</nav>
</div>
{open && (
<nav className="md:hidden border-t">
<div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3">
{nav.map((n) => (
<Link
key={n.href}
href={n.href}
className="text-sm font-medium"
onClick={() => setOpen(false)}
>
{n.label}
</Link>
))}
</div>
</nav>
)}
</header>
);
}