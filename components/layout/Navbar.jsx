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
      {/* ================= NAVBAR ================= */}
      <nav
        className="
          sticky top-0 z-50

          border-b border-stone-300

          bg-stone-200/90
          backdrop-blur-2xl

          shadow-lg

          dark:border-slate-800
          dark:bg-slate-900/90
        "
      >
        <div className="grid w-full grid-cols-[auto_1fr_auto] items-center px-6 py-4 lg:px-10 xl:px-14">

          {/* ================= Logo ================= */}
          <Link
            href="/"
            className="justify-self-start bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-700 bg-clip-text text-2xl font-extrabold tracking-tight text-transparent transition-all duration-300 hover:scale-105 dark:from-cyan-300 dark:via-blue-300 dark:to-sky-400"
          >
            Innovia Institute
          </Link>

          {/* ================= Desktop Links ================= */}
          <div className="hidden items-center justify-self-center md:flex">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="
                  group
                  relative
                  rounded-full
                  px-5
                  py-2.5
                  text-sm
                  font-semibold
                  text-slate-600
                  transition-all
                  duration-300

                  hover:bg-white
                  hover:text-blue-700
                  hover:shadow-md
                  hover:shadow-blue-200

                  dark:text-slate-300
                  dark:hover:bg-slate-800
                  dark:hover:text-cyan-300
                  dark:hover:shadow-none
                "
              >
                {link.name}

                <span
                  className="
                    absolute
                    left-4
                    right-4
                    -bottom-0.5
                    h-0.5
                    scale-x-0
                    rounded-full
                    bg-gradient-to-r
                    from-blue-500
                    via-cyan-400
                    to-indigo-500
                    transition-transform
                    duration-300
                    group-hover:scale-x-100
                  "
                />
              </Link>
            ))}
          </div>

          {/* ================= Right Side ================= */}
          <div className="flex items-center justify-self-end gap-3">

            {/* Desktop Theme */}
            <div className="hidden md:block">
              <ThemeToggle />
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="
                rounded-xl
                p-2
                transition
                hover:bg-white
                hover:shadow-md

                dark:hover:bg-slate-800

                md:hidden
              "
            >
              <div className="relative h-7 w-7">

                <HiMenu
                  size={28}
                  className={`absolute text-slate-700 transition-all duration-300 dark:text-white ${
                    isOpen
                      ? "rotate-90 scale-0 opacity-0"
                      : "rotate-0 scale-100 opacity-100"
                  }`}
                />

                <HiX
                  size={28}
                  className={`absolute text-slate-700 transition-all duration-300 dark:text-white ${
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
        {/* Overlay */}
        <div
          onClick={() => setIsOpen(false)}
          className={`absolute inset-0 bg-slate-900/45 backdrop-blur-sm transition-opacity duration-500 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Drawer */}
        <div
          className={`absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-gradient-to-b from-white via-slate-50 to-blue-50 shadow-2xl transition-transform duration-500 ease-in-out dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >

          {/* Header */}
          <div className="flex items-center justify-between border-b border-blue-100 px-6 py-6 dark:border-slate-800">

            <h2 className="text-2xl font-extrabold text-blue-700 dark:text-cyan-400">
              MENU
            </h2>

            <button
              onClick={() => setIsOpen(false)}
              className="rounded-xl p-2 transition hover:bg-white hover:shadow dark:hover:bg-slate-800"
            >
              <HiX size={28} />
            </button>
          </div>

          {/* Links */}
          <div className="flex-1 px-8 py-10">
            <div className="flex flex-col gap-3">

              {links.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  style={{
                    transitionDelay: `${index * 70}ms`,
                  }}
                  className={`rounded-2xl py-4 text-center text-lg font-bold tracking-wide text-slate-700 transition-all duration-500 hover:bg-white hover:text-blue-700 hover:shadow-lg dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-cyan-300 ${
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
          <div className="border-t border-blue-100 p-6 dark:border-slate-800">

            <div className="mb-4 flex justify-center">
              <ThemeToggle />
            </div>

            <p className="text-center text-sm text-slate-500 dark:text-slate-400">
              Innovia Institute
            </p>

          </div>
        </div>
      </div>
    </>
  );
}