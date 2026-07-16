"use client";

import { useEffect, useState } from "react";
import { getNews } from "@/lib/api";
import Link from "next/link";
import NewsCard from "@/components/news/NewsCard";
import eventTemplates from "@/data/eventTemplates";
import Reveal from "@/components/ui/Reveal";
import { HiArrowRight } from "react-icons/hi2";

export default function NewsPreview() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function loadNews() {
      const data = await getNews();

      const capitalize = (text) =>
        text.charAt(0).toUpperCase() + text.slice(1);

      // Title & body come from the mock API; category, date and
      // image come from the local event templates
      const transformed = data.slice(0, 3).map((item, index) => ({
        ...eventTemplates[index % eventTemplates.length],
        id: item.id,
        title: capitalize(item.title),
        body: capitalize(item.body),
      }));

      setNews(transformed);
    }

    loadNews();
  }, []);

  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-900/40">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-14 text-center">
            <span className="mb-4 inline-block rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
              Campus Updates
            </span>

            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Latest News
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
              Explore the latest happenings around campus.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-3">
          {news.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.12}>
              <NewsCard news={item} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-14 text-center">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:gap-3 hover:shadow-xl hover:shadow-blue-600/35"
            >
              View All News
              <HiArrowRight />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
