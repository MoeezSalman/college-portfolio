import Image from "next/image";
import { FaStar, FaQuoteRight } from "react-icons/fa";

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="group relative flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-600/10 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-700">

      {/* Decorative quote mark */}
      <FaQuoteRight className="absolute right-8 top-8 text-4xl text-blue-100 transition-colors duration-300 group-hover:text-blue-200 dark:text-slate-800 dark:group-hover:text-slate-700" />

      <div className="flex items-center gap-4">

        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={80}
          height={80}
          className="rounded-full object-cover ring-2 ring-blue-100 ring-offset-2 ring-offset-white dark:ring-blue-500/30 dark:ring-offset-slate-900"
        />

        <div>

          <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            {testimonial.name}
          </h3>

          <p className="font-medium text-blue-600 dark:text-blue-400">
            {testimonial.program}
          </p>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            {testimonial.year}
          </p>

        </div>

      </div>

      <div className="mt-6 flex gap-1 text-amber-400">
        {Array.from({ length: testimonial.rating }).map((_, index) => (
          <FaStar key={index} />
        ))}
      </div>

      <p className="mt-6 italic leading-7 text-slate-600 dark:text-slate-300">
        "{testimonial.quote}"
      </p>
    </div>
  );
}
