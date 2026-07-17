"use client";

import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="rounded-full border border-slate-200 bg-white p-2.5
                 text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-amber-300
                 transition-all duration-300 hover:scale-110 hover:border-blue-300 hover:text-blue-600
                 dark:hover:border-amber-400/50"
      aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
    </button>
  );
}
