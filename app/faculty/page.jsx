"use client";

import { useEffect, useState } from "react";
import { getFaculty } from "@/lib/api";
import FacultyCard from "@/components/faculty/FacultyCard";
import SearchBar from "@/components/faculty/SearchBar";
import Reveal from "@/components/ui/Reveal";

const DEPARTMENTS = ["Computer Science", "Engineering", "Business"];
const CATEGORIES = ["All", ...DEPARTMENTS];

export default function FacultyPage() {
  const [faculty, setFaculty] = useState([]);
  const [filteredFaculty, setFilteredFaculty] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchFaculty() {
      try {
        const data = await getFaculty();

        // Assign each faculty member a department
        const withDepartments = data.map((member, index) => ({
          ...member,
          department: DEPARTMENTS[index % DEPARTMENTS.length],
        }));

        setFaculty(withDepartments);
        setFilteredFaculty(withDepartments);
      } catch (err) {
        setError("Failed to load faculty.");
      } finally {
        setLoading(false);
      }
    }

    fetchFaculty();
  }, []);

  useEffect(() => {
    const filtered = faculty.filter((member) => {
      const matchesSearch = member.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || member.department === category;

      return matchesSearch && matchesCategory;
    });

    setFilteredFaculty(filtered);
  }, [search, category, faculty]);

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-5 bg-slate-50 dark:bg-slate-950">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
        <p className="font-medium text-slate-500 dark:text-slate-400">
          Loading Faculty...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 font-medium text-red-500 dark:bg-slate-950">
        {error}
      </div>
    );
  }

  return (
    <section className="bg-slate-50 px-6 py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-10 text-center">
            <span className="mb-4 inline-block rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
              Our Team
            </span>

            <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Meet Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">
                Faculty
              </span>
            </h1>

            <p className="mt-5 text-lg text-slate-600 dark:text-slate-300">
              Search and explore our experienced faculty members.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mb-8 max-w-xl">
            <SearchBar
              value={search}
              onChange={setSearch}
            />
          </div>

          {/* Department Filters */}
          <div className="mb-12 flex flex-wrap items-center justify-center gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={
                  category === cat
                    ? "rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-300"
                    : "rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-slate-600 transition-all duration-300 hover:border-blue-300 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-blue-700 dark:hover:text-blue-400"
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredFaculty.map((member, index) => (
            <Reveal key={member.id} delay={(index % 4) * 0.08}>
              <FacultyCard faculty={member} />
            </Reveal>
          ))}
        </div>

        {filteredFaculty.length === 0 && (
          <p className="py-16 text-center text-lg text-slate-500 dark:text-slate-400">
            No faculty members found matching your filters.
          </p>
        )}
      </div>
    </section>
  );
}
