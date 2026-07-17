"use client";

import DashboardCard from "@/components/admin/DashboardCard";
import Reveal from "@/components/ui/Reveal";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import {
  HiOutlineUsers,
  HiOutlineAcademicCap,
  HiOutlineBookOpen,
  HiOutlineBuildingOffice2,
  HiOutlineDocumentPlus,
  HiOutlineMegaphone,
  HiOutlineUserPlus,
  HiOutlineCalendarDays,
  HiOutlineCheckCircle,
  HiOutlineTrophy,
  HiOutlineArrowRightOnRectangle,
} from "react-icons/hi2";

const stats = [
  {
    title: "Students",
    value: "4,350",
    trend: "+12% this semester",
    icon: <HiOutlineUsers size={22} />,
  },
  {
    title: "Faculty",
    value: "220",
    trend: "+8 new hires",
    icon: <HiOutlineAcademicCap size={22} />,
  },
  {
    title: "Programs",
    value: "35",
    trend: "+3 this year",
    icon: <HiOutlineBookOpen size={22} />,
  },
  {
    title: "Departments",
    value: "12",
    trend: "+1 this year",
    icon: <HiOutlineBuildingOffice2 size={22} />,
  },
];

const enrollment = [
  { program: "BS Computer Science", filled: 82 },
  { program: "BS Electrical Engineering", filled: 64 },
  { program: "BBA", filled: 71 },
  { program: "BS Software Engineering", filled: 90 },
];

const activities = [
  {
    icon: <HiOutlineCheckCircle size={20} />,
    text: "New admission application received.",
    time: "10 minutes ago",
  },
  {
    icon: <HiOutlineMegaphone size={20} />,
    text: "Tech Fest 2026 event published.",
    time: "1 hour ago",
  },
  {
    icon: <HiOutlineAcademicCap size={20} />,
    text: "Faculty profile updated.",
    time: "3 hours ago",
  },
  {
    icon: <HiOutlineTrophy size={20} />,
    text: "New scholarship announcement.",
    time: "Yesterday",
  },
];

const quickActions = [
  { icon: <HiOutlineUserPlus size={20} />, label: "Add Student" },
  { icon: <HiOutlineDocumentPlus size={20} />, label: "Publish News" },
  { icon: <HiOutlineCalendarDays size={20} />, label: "Schedule Event" },
  { icon: <HiOutlineAcademicCap size={20} />, label: "Add Faculty" },
];

const upcomingEvents = [
  { name: "Annual Tech Fest", date: "Aug 5" },
  { name: "Career Fair", date: "Aug 18" },
  { name: "Research & Innovation Expo", date: "Sep 2" },
];

export default function DashboardPage() {
  const router = useRouter();

  const logout = () => {
    Cookies.remove("admin-auth");

    router.push("/admin/login");
  };

  return (
    <section className="min-h-screen bg-slate-50 px-6 py-10 dark:bg-slate-950 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <Reveal>
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-5xl">
                Admin{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">
                  Dashboard
                </span>
              </h1>

              <p className="mt-2 text-slate-500 dark:text-slate-400">
                Welcome back, Admin. Here's what's happening today.
              </p>
            </div>

            <button
              onClick={logout}
              className="inline-flex items-center gap-2 self-start rounded-2xl bg-gradient-to-r from-red-500 to-rose-600 px-5 py-3 font-semibold text-white shadow-lg shadow-red-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-red-500/40 sm:self-auto"
            >
              <HiOutlineArrowRightOnRectangle size={20} />
              Logout
            </button>
          </div>
        </Reveal>

        {/* KPI Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.title} delay={index * 0.08}>
              <DashboardCard
                title={stat.title}
                value={stat.value}
                trend={stat.trend}
                icon={stat.icon}
              />
            </Reveal>
          ))}
        </div>

        {/* Main content */}
        <div className="mt-8 grid gap-6 lg:grid-cols-3">

          {/* Left column */}
          <div className="space-y-6 lg:col-span-2">

            {/* Enrollment */}
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Enrollment by Program
                </h2>

                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  Seats filled for Fall 2026 intake
                </p>

                <div className="mt-6 space-y-5">
                  {enrollment.map((item) => (
                    <div key={item.program}>
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span className="font-medium text-slate-700 dark:text-slate-200">
                          {item.program}
                        </span>
                        <span className="font-semibold text-slate-500 dark:text-slate-400">
                          {item.filled}%
                        </span>
                      </div>

                      <div className="h-2.5 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"
                          style={{ width: `${item.filled}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Recent Activities */}
            <Reveal delay={0.15}>
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <h2 className="mb-6 text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Recent Activities
                </h2>

                <ul className="space-y-5">
                  {activities.map((activity) => (
                    <li key={activity.text} className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                        {activity.icon}
                      </div>

                      <div className="flex-1">
                        <p className="font-medium text-slate-700 dark:text-slate-200">
                          {activity.text}
                        </p>
                        <p className="mt-0.5 text-sm text-slate-400 dark:text-slate-500">
                          {activity.time}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Right column */}
          <div className="space-y-6">

            {/* Quick Actions */}
            <Reveal delay={0.2}>
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <h2 className="mb-6 text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Quick Actions
                </h2>

                <div className="grid grid-cols-2 gap-3">
                  {quickActions.map((action) => (
                    <button
                      key={action.label}
                      className="flex flex-col items-center gap-2.5 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-300 dark:hover:border-blue-700 dark:hover:bg-blue-500/10 dark:hover:text-blue-400"
                    >
                      {action.icon}
                      {action.label}
                    </button>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Upcoming Events */}
            <Reveal delay={0.25}>
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <h2 className="mb-6 text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Upcoming Events
                </h2>

                <ul className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <li
                      key={event.name}
                      className="flex items-center justify-between gap-3"
                    >
                      <span className="font-medium text-slate-700 dark:text-slate-200">
                        {event.name}
                      </span>

                      <span className="shrink-0 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                        {event.date}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Status card */}
            <Reveal delay={0.3}>
              <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white shadow-lg shadow-blue-600/25">
                <h2 className="text-xl font-bold tracking-tight">
                  All Systems Operational
                </h2>

                <p className="mt-2 leading-7 text-blue-100">
                  Admissions portal, faculty directory, and news feed are
                  running smoothly.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
