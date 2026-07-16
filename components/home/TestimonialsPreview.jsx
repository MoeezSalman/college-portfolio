import Link from "next/link";
import testimonials from "@/data/testimonials";
import TestimonialCard from "@/components/testimonials/TestimonialCard";
import Reveal from "@/components/ui/Reveal";
import { HiArrowRight } from "react-icons/hi2";

export default function TestimonialsPreview() {
  return (
    <section className="py-24">

      <div className="mx-auto max-w-7xl px-6">

        <Reveal>
          <div className="mb-14 text-center">

            <span className="mb-4 inline-block rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
              Success Stories
            </span>

            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Student Testimonials
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
              Discover how our students achieved academic and professional success.
            </p>

          </div>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-3">

          {testimonials.slice(0, 3).map((testimonial, index) => (
            <Reveal key={testimonial.id} delay={index * 0.12}>
              <TestimonialCard testimonial={testimonial} />
            </Reveal>
          ))}

        </div>

        <Reveal delay={0.2}>
          <div className="mt-14 text-center">

            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:gap-3 hover:shadow-xl hover:shadow-blue-600/35"
            >
              View All Testimonials
              <HiArrowRight />
            </Link>

          </div>
        </Reveal>

      </div>

    </section>
  );
}
