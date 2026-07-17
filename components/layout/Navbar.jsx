"use client";

import ThemeToggle from "@/components/ui/ThemeToggle";
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";

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
    <nav className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl shadow-sm shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-950/95">
      <div className="flex w-full items-center justify-between px-6 py-4 lg:px-10 xl:px-14">

        {/* Logo */}
        <Link
          href="/"
          className="
            text-2xl
            font-extrabold
            tracking-tight
            transition-all
            duration-300

            bg-gradient-to-r
            from-slate-900
            via-slate-800
            to-slate-700
            bg-clip-text
            text-transparent

            hover:from-blue-700
            hover:to-indigo-700

            dark:from-cyan-300
            dark:via-blue-300
            dark:to-sky-400
            dark:hover:from-cyan-200
            dark:hover:to-blue-300
          "
        >
          
          Innovia Institute
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="
                group
                relative
                rounded-full
                px-4
                py-2
                text-sm
                font-medium
                text-slate-600
                transition-all
                duration-300

                hover:bg-blue-50
                hover:text-blue-700

                dark:text-slate-300
                dark:hover:bg-slate-900
                dark:hover:text-cyan-300
              "
            >
              {link.name}

              <span className="absolute inset-x-4 -bottom-px h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
            </Link>
          ))}

          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Button */}
        <button
          className="rounded-xl p-2 text-2xl text-slate-700 transition hover:bg-slate-100 dark:text-white dark:hover:bg-slate-900 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="space-y-1 border-t border-slate-200 bg-white/95 px-4 pb-6 pt-3 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950 md:hidden">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block rounded-xl px-4 py-3 font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-700 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-cyan-300"
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