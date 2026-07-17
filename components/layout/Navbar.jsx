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
    <>
      <nav className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl shadow-sm shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-950/95">
        <div className="grid w-full grid-cols-[auto_1fr_auto] items-center px-6 py-4 lg:px-10 xl:px-14">
          {/* Logo */}
          <Link
            href="/"
            className="justify-self-start bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-2xl font-extrabold tracking-tight text-transparent transition-all duration-300 hover:from-blue-700 hover:to-indigo-700 dark:from-cyan-300 dark:via-blue-300 dark:to-sky-400 dark:hover:from-cyan-200 dark:hover:to-blue-300"
          >
            Innovia Institute
          </Link>

          {/* Desktop Links */}
          <div className="hidden justify-self-center md:flex items-center gap-2">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group relative rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-all duration-300 hover:bg-blue-50 hover:text-blue-700 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-cyan-300"
              >
                {link.name}

                <span className="absolute inset-x-4 -bottom-px h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center justify-self-end gap-2">
            <div className="hidden md:block">
              <ThemeToggle />
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="rounded-xl p-2 md:hidden"
            >
              <div className="relative h-7 w-7">
                <HiMenu
                  size={30}
                  className={`absolute transition-all duration-300 ${
                    isOpen
                      ? "rotate-90 scale-0 opacity-0"
                      : "rotate-0 scale-100 opacity-100"
                  }`}
                />

                <HiX
                  size={30}
                  className={`absolute transition-all duration-300 ${
                    isOpen
                      ? "rotate-0 scale-100 opacity-100"
                      : "-rotate-90 scale-0 opacity-0"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE DRAWER ================= */}

      <div
        className={`fixed inset-0 z-[100] md:hidden transition-all duration-500 ${
          isOpen
            ? "pointer-events-auto"
            : "pointer-events-none"
        }`}
      >
        {/* Background */}
        <div
          onClick={() => setIsOpen(false)}
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Drawer */}
        <div
          className={`absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-500 ease-in-out dark:bg-slate-950 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-200 px-6 py-6 dark:border-slate-800">
            <h2 className="text-2xl font-bold text-blue-700 dark:text-cyan-400">
              MENU
            </h2>

            <button
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-2 transition hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <HiX size={30} />
            </button>
          </div>

          {/* Navigation */}
          <div className="flex-1 px-8 py-8">
            <div className="flex flex-col items-center gap-2">
              {links.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  style={{
                    transitionDelay: `${index * 80}ms`,
                  }}
                  className={`w-full rounded-xl py-3 text-center text-lg font-bold uppercase tracking-wide text-slate-800 transition-all duration-500 hover:bg-blue-50 hover:text-blue-600 dark:text-white dark:hover:bg-slate-800 dark:hover:text-cyan-400 ${
                    isOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-12 opacity-0"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-slate-200 p-6 dark:border-slate-800">
            <div className="mb-5 flex justify-center">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}