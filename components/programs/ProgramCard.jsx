import {
  HiOutlineCpuChip,
  HiOutlineBolt,
  HiOutlineChartBar,
  HiOutlineCheckCircle,
} from "react-icons/hi2";

// Modern icons per program (falls back to the emoji from data)
const programIcons = {
  1: <HiOutlineCpuChip size={30} />,
  2: <HiOutlineBolt size={30} />,
  3: <HiOutlineChartBar size={30} />,
};

export default function ProgramCard({ program }) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-600/10 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-700">

      {/* Top gradient accent */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/25 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
        {programIcons[program.id] ?? (
          <span className="text-3xl">{program.icon}</span>
        )}
      </div>

      <h2 className="mb-3 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
        {program.title}
      </h2>

      <p className="mb-6 leading-relaxed text-slate-600 dark:text-slate-300">
        {program.description}
      </p>

      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
        Core Courses
      </h3>

      <ul className="space-y-2.5">
        {program.courses.map((course) => (
          <li
            key={course}
            className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300"
          >
            <HiOutlineCheckCircle className="shrink-0 text-blue-600 dark:text-blue-400" size={18} />
            {course}
          </li>
        ))}
      </ul>
    </div>
  );
}
