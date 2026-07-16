"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiXMark } from "react-icons/hi2";

export default function NewsCard({ news }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-600/10 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-700">

        <div className="relative h-56 flex-none overflow-hidden">
          <Image
              src={news.image}
              alt={news.title}
              fill
              sizes="(max-width:768px) 100vw,
                  (max-width:1200px) 50vw,
                  33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Subtle image gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent"></div>
        </div>

        <div className="flex flex-1 flex-col p-7">

          <div className="mb-4 flex items-center justify-between">

            <span className="rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700 ring-1 ring-blue-100 dark:from-blue-500/10 dark:to-indigo-500/10 dark:text-blue-300 dark:ring-blue-500/20">
              {news.category}
            </span>

            <span className="text-sm text-slate-500 dark:text-slate-400">
              {news.date}
            </span>

          </div>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400 line-clamp-2">
            {news.title}
          </h2>

          <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300 line-clamp-4">
            {news.body}
          </p>

          <button
            onClick={() => setOpen(true)}
            className="mt-auto inline-flex items-center gap-2 self-start pt-6 font-semibold text-blue-600 transition-all duration-300 hover:gap-3 dark:text-blue-400"
          >
            Read More
            <span aria-hidden="true">→</span>
          </button>

        </div>

      </article>

      {/* Detail Popup */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 24 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white shadow-2xl dark:bg-slate-900"
            >
              <div className="relative h-64 sm:h-72">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  sizes="(max-width:768px) 100vw, 672px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent"></div>

                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                  className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-slate-950/50 text-white backdrop-blur-md transition hover:bg-slate-950/80"
                >
                  <HiXMark size={22} />
                </button>
              </div>

              <div className="p-8">
                <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                  <span className="rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700 ring-1 ring-blue-100 dark:from-blue-500/10 dark:to-indigo-500/10 dark:text-blue-300 dark:ring-blue-500/20">
                    {news.category}
                  </span>

                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    {news.date}
                  </span>
                </div>

                <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  {news.title}
                </h2>

                <p className="mt-6 whitespace-pre-line leading-8 text-slate-600 dark:text-slate-300">
                  {news.body}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
