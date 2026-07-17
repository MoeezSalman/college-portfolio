import {
  HiOutlineAcademicCap,
  HiOutlineUserGroup,
  HiOutlineBookOpen,
  HiOutlineTrophy,
} from "react-icons/hi2";
import Reveal from "@/components/ui/Reveal";

const stats = [
  {
    icon: <HiOutlineAcademicCap size={30} />,
    number: "12,000+",
    label: "Graduates",
  },
  {
    icon: <HiOutlineUserGroup size={30} />,
    number: "250+",
    label: "Faculty Members",
  },
  {
    icon: <HiOutlineBookOpen size={30} />,
    number: "35+",
    label: "Academic Programs",
  },
  {
    icon: <HiOutlineTrophy size={30} />,
    number: "95%",
    label: "Graduate Employment",
  },
];

export default function Stats() {
  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-14 text-center">
            <span className="mb-4 inline-block rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
              Our Impact
            </span>

            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              University in{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">
                Numbers
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
              A legacy of academic excellence, innovation, and student success.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.1}>
              <div className="group rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-600/10 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-700">

                {/* Icon */}
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/25 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  {item.icon}
                </div>

                {/* Number */}
                <h3 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  {item.number}
                </h3>

                {/* Label */}
                <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">
                  {item.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}