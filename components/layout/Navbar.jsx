"use client";
import ThemeToggle from "@/components/ui/ThemeToggle";
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Faculty", href: "/faculty" },
    { name: "Programs", href: "/programs" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "News", href: "/news" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/70 shadow-sm shadow-slate-900/5 backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-950/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-2xl font-extrabold tracking-tight text-transparent"
        >
          College Portfolio
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors duration-300 hover:bg-blue-50 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800/80 dark:hover:text-blue-400"
            >
              {link.name}
              <span className="absolute inset-x-4 -bottom-px h-px bg-gradient-to-r from-blue-500/0 via-blue-500 to-blue-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
            </Link>
          ))}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Button */}
        <button
          className="rounded-xl p-2 text-2xl text-slate-700 transition hover:bg-slate-100 dark:text-white dark:hover:bg-slate-800 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="space-y-1 border-t border-slate-200/70 bg-white/95 px-4 pb-6 pt-3 backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-950/95 md:hidden">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block rounded-xl px-4 py-3 font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-slate-800/80 dark:hover:text-blue-400"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="px-4 pt-3">
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
}
