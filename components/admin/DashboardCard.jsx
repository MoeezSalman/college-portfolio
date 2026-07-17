import { HiArrowTrendingUp } from "react-icons/hi2";

export default function DashboardCard({
  title,
  value,
  icon,
  trend,
}) {
  return (
    <div className="group h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-600/10 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-700">

      <div className="flex items-start justify-between">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          {title}
        </h3>

        {icon && (
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/25 transition-transform duration-300 group-hover:scale-110">
            {icon}
          </div>
        )}
      </div>

      <p className="mt-2 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
        {value}
      </p>

      {trend && (
        <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
          <HiArrowTrendingUp size={14} />
          {trend}
        </p>
      )}
    </div>
  );
}
