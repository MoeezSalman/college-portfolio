"use client";

import { useState } from "react";

export default function FacultyCard({ faculty }) {
  // Generated avatar used when no local photo exists for this faculty member
  const fallback = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    faculty.name
  )}&background=2563eb&color=fff&size=200`;

  // Try the local photo first: public/images/faculty/faculty<id>.png
  const [src, setSrc] = useState(`/images/faculty/faculty${faculty.id}.png`);

  return (
    <div className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 text-slate-900 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-600/10 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:hover:border-blue-700">
      <img
        src={src}
        onError={() => setSrc(fallback)}
        alt={faculty.name}
        className="mx-auto mb-5 h-28 w-28 rounded-full object-cover ring-4 ring-blue-100 ring-offset-2 ring-offset-white transition-transform duration-300 group-hover:scale-105 dark:ring-blue-500/30 dark:ring-offset-slate-900"
      />

      <h3 className="text-center text-xl font-bold tracking-tight text-slate-900 dark:text-white">
        {faculty.name}
      </h3>

      <p className="mx-auto mt-3 w-fit rounded-full bg-blue-50 px-3.5 py-1 text-center text-sm font-semibold text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
        Assistant Professor
      </p>

      <p className="mt-3 text-center text-slate-600 dark:text-slate-300">
        Department of {faculty.department || faculty.company.bs}
      </p>

      <p className="mt-auto pt-4 text-center text-sm text-slate-500 dark:text-slate-400">
        {faculty.email}
      </p>
    </div>
  );
}
