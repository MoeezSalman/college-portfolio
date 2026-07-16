import {
  HiOutlineAcademicCap,
  HiOutlineUserGroup,
  HiOutlineBookOpen,
  HiOutlineTrophy,
} from "react-icons/hi2";
import Reveal from "@/components/ui/Reveal";

const stats = [
  {
    icon: <HiOutlineAcademicCap size={32} />,
    number: "12,000+",
    label: "Graduates",
  },
  {
    icon: <HiOutlineUserGroup size={32} />,
    number: "250+",
    label: "Faculty Members",
  },
  {
    icon: <HiOutlineBookOpen size={32} />,
    number: "35+",
    label: "Academic Programs",
  },
  {
    icon: <HiOutlineTrophy size={32} />,
    number: "95%",
    label: "Graduate Employment",
  },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-indigo-700 to-violet-800 py-20 text-white">
      {/* Decorative glow */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-violet-400/20 blur-3xl"></div>

      <div className="relative mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, index) => (
          <Reveal key={item.label} delay={index * 0.1}>
            <div className="group h-full rounded-3xl border border-white/15 bg-white/10 p-8 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-white/30 hover:bg-white/15">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-blue-100 transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>

              <h2 className="text-4xl font-extrabold tracking-tight">
                {item.number}
              </h2>

              <p className="mt-3 font-medium text-blue-100/90">
                {item.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
