import testimonials from "@/data/testimonials";
import TestimonialCard from "@/components/testimonials/TestimonialCard";
import Reveal from "@/components/ui/Reveal";

export default function TestimonialsPage() {
  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-950">

      <div className="mx-auto max-w-7xl px-6">

        <Reveal>
          <div className="mb-14 text-center">

            <span className="mb-4 inline-block rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
              Testimonials
            </span>

            <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Student{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">
                Success Stories
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              Hear from our graduates about their experiences, achievements,
              and career journeys after studying at our institution.
            </p>

          </div>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2">

          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.id} delay={(index % 2) * 0.12}>
              <TestimonialCard testimonial={testimonial} />
            </Reveal>
          ))}

        </div>

      </div>

    </section>
  );
}