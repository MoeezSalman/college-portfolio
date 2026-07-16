import Link from "next/link";
import { HiArrowRight, HiOutlineEnvelope } from "react-icons/hi2";
import Reveal from "@/components/ui/Reveal";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-[90vh] items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/college.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950/90"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
        <Reveal>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-blue-100 backdrop-blur-md">
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400"></span>
            Admissions Open 2026
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Our College
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
            Empowering students through innovation, excellence, and quality
            education.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/programs"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:gap-3 hover:shadow-xl hover:shadow-blue-600/40"
            >
              Explore Programs
              <HiArrowRight />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/25 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/20"
            >
              <HiOutlineEnvelope />
              Contact Us
            </Link>
          </div>
        </Reveal>
      </div>

      {/* Bottom fade into page */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/20 to-transparent dark:from-slate-950/40"></div>
    </section>
  );
}
