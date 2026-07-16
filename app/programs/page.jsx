"use client";

import { useEffect, useState } from "react";
import { getPrograms } from "@/lib/api";
import programTemplates from "@/data/programs";
import ProgramCard from "@/components/programs/ProgramCard";
import Reveal from "@/components/ui/Reveal";

export default function ProgramsPage() {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPrograms() {
      try {
        // Fetch dynamically from the mock API, then enrich with local
        // program templates (titles, courses) — same pattern as the news page
        const data = await getPrograms();

        const transformed = data.map((item, index) => ({
          ...programTemplates[index % programTemplates.length],
          id: item.id,
        }));

        setPrograms(transformed);
      } catch (error) {
        console.error(error);
        // Fall back to local templates if the API is unreachable
        setPrograms(programTemplates);
      } finally {
        setLoading(false);
      }
    }

    fetchPrograms();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-5 bg-slate-50 dark:bg-slate-950">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
        <p className="font-medium text-slate-500 dark:text-slate-400">
          Loading Programs...
        </p>
      </div>
    );
  }

  return (
    <section className="bg-slate-50 px-6 py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <Reveal>
          <div className="mb-14 text-center">
            <span className="mb-4 inline-block rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
              Academics
            </span>

            <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Academic{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">
                Programs
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              Discover our diverse range of degree programs designed to prepare
              students for successful careers through practical learning and
              academic excellence.
            </p>
          </div>
        </Reveal>

        {/* Program Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <Reveal key={program.id} delay={(index % 3) * 0.12}>
              <ProgramCard program={program} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
