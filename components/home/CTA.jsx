import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-indigo-700 to-violet-800 py-28 text-white">
      {/* Decorative glows */}
      <div className="pointer-events-none absolute -top-32 left-1/4 h-80 w-80 rounded-full bg-blue-400/25 blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-32 right-1/4 h-80 w-80 rounded-full bg-violet-400/25 blur-3xl"></div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>

        <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
          Ready to Shape Your Future?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-blue-100">
          Join a vibrant academic community committed to excellence,
          innovation, and student success. Start your journey with us today.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/programs"
            className="rounded-2xl bg-white px-8 py-4 font-semibold text-blue-700 shadow-lg shadow-slate-950/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-slate-950/30"
          >
            Explore Programs
          </Link>

          <Link
            href="/contact"
            className="rounded-2xl border border-white/30 bg-white/10 px-8 py-4 font-semibold backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/20"
          >
            Contact Admissions
          </Link>
        </div>

        </Reveal>
      </div>
    </section>
  );
}
