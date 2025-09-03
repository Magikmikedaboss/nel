"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null; // avoid hydration flash

  const active = theme ?? resolvedTheme ?? "neon";
  const next = active === "neon" ? "pro" : "neon";

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      className={`btn btn-outline ${className}`}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
    >
      {active === "neon" ? "Professional" : "Neon"} mode
    </button>
  );
}
