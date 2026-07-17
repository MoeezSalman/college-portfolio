"use client";

import DashboardCard from "@/components/admin/DashboardCard";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  const logout = () => {
    Cookies.remove("admin-auth");

    router.push("/admin/login");
  };

  return (
    <section className="min-h-screen bg-slate-50 p-10 dark:bg-slate-950">

      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-5xl">
          Admin Dashboard
        </h1>

        <button
          onClick={logout}
          className="rounded-2xl bg-gradient-to-r from-red-500 to-rose-600 px-5 py-3 font-semibold text-white shadow-lg shadow-red-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-red-500/40"
        >
          Logout
        </button>

      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

        <DashboardCard
          title="Students"
          value="4,350"
        />

        <DashboardCard
          title="Faculty"
          value="220"
        />

        <DashboardCard
          title="Programs"
          value="35"
        />

        <DashboardCard
          title="Departments"
          value="12"
        />

      </div>

      <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">

        <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Recent Activities
        </h2>

        <ul className="space-y-4">

          <li>✅ New admission application received.</li>

          <li>📢 Tech Fest 2026 event published.</li>

          <li>👨‍🏫 Faculty profile updated.</li>

          <li>🎓 New scholarship announcement.</li>

        </ul>

      </div>

    </section>
  );
}