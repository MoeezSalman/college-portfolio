import Reveal from "@/components/ui/Reveal";

export default function About() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid items-center gap-14 md:grid-cols-2">
        <Reveal>
          <span className="mb-4 inline-block rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
            Who We Are
          </span>

          <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            About Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">
              Institute
            </span>
          </h2>

          <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
            Founded in 1985 as a small teaching institute with just three
            classrooms and a hundred students, our college has grown into one
            of the region&apos;s leading centers of higher education — home to
            35+ academic programs, 250+ faculty members, and a worldwide
            community of more than 12,000 alumni.
          </p>

          <div className="mt-6 rounded-2xl border-l-4 border-blue-600 bg-blue-50 p-6 dark:border-blue-500 dark:bg-blue-500/10">
            <h3 className="mb-2 font-bold text-slate-900 dark:text-white">
              Our Vision
            </h3>
            <p className="leading-7 text-slate-600 dark:text-slate-300">
              To empower every student to become an innovator, leader, and
              lifelong learner — through excellence in teaching, meaningful
              research, and strong industry collaboration.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative">
            {/* Decorative gradient glow behind the image */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-600/20 to-violet-600/20 blur-2xl"></div>

            <img
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200"
              alt="College campus"
              className="relative aspect-[4/3] w-full rounded-3xl object-cover shadow-2xl shadow-slate-900/20 ring-1 ring-slate-900/10 dark:ring-white/10"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
