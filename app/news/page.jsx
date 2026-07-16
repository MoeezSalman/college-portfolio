"use client";

import { useEffect, useState } from "react";
import { getNews } from "@/lib/api";
import NewsCard from "@/components/news/NewsCard";
import eventTemplates from "@/data/eventTemplates";
import Reveal from "@/components/ui/Reveal";

export default function NewsPage() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        const data = await getNews();

        const capitalize = (text) =>
          text.charAt(0).toUpperCase() + text.slice(1);

        // Title & body come from the mock API; category, date and
        // image come from the local event templates
        const transformed = data.map((item, index) => ({
          ...eventTemplates[index % eventTemplates.length],
          id: item.id,
          title: capitalize(item.title),
          body: capitalize(item.body),
        }));

        setNews(transformed);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-5 bg-slate-50 dark:bg-slate-950">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
        <p className="font-medium text-slate-500 dark:text-slate-400">
          Loading News...
        </p>
      </div>
    );
  }

  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-12 text-center">
            <span className="mb-4 inline-block rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
              Campus Updates
            </span>

            <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Latest News &{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">
                Events
              </span>
            </h1>

            <p className="mt-5 text-lg text-slate-600 dark:text-slate-300">
              Stay updated with our latest announcements and campus events.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item, index) => (
            <Reveal key={item.id} delay={(index % 3) * 0.12}>
              <NewsCard news={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}