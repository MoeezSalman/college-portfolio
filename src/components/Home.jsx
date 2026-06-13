import { Link } from 'react-router-dom'

const programs = [
  { title: 'Computer Science', icon: '💻', desc: 'AI, software engineering, data science & more.', path: '/programs' },
  { title: 'Business Administration', icon: '📊', desc: 'Finance, marketing, management & strategy.', path: '/programs' },
  { title: 'Civil Engineering', icon: '🏗️', desc: 'Structures, geotechnics & urban development.', path: '/programs' },
  { title: 'Mechanical Engineering', icon: '⚙️', desc: 'Thermodynamics, robotics & manufacturing.', path: '/programs' },
  { title: 'Electrical Engineering', icon: '⚡', desc: 'Power systems, electronics & communications.', path: '/programs' },
  { title: 'Fintech', icon: '💳', desc: 'Blockchain, digital payments & financial systems.', path: '/programs' },
]

const stats = [
  { label: 'Students Enrolled', value: '25,000+' },
  { label: 'Faculty Members', value: '1,200+' },
  { label: 'Campuses Nationwide', value: '6' },
  { label: 'Years of Excellence', value: '30+' },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f2c] via-[#0d1b4b] to-[#1a2f7a]" />
        {/* Animated circles */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-700 opacity-20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 opacity-10 rounded-full blur-3xl animate-pulse" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <span className="inline-block bg-blue-600/20 border border-blue-500/40 text-blue-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
            Welcome to FAST NUCES
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Shaping the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Future
            </span>{' '}
            of Pakistan
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Pakistan's premier institution for computing, engineering, and business — empowering 25,000+ students across 6 campuses to innovate, lead, and excel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/programs"
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-blue-700/40"
            >
              Explore Programs →
            </Link>
            <Link
              to="/faculty"
              className="border border-blue-500 text-blue-300 hover:bg-blue-900/40 font-semibold px-8 py-3.5 rounded-full transition-all duration-200"
            >
              Meet Our Faculty
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#060d26] border-y border-blue-900 py-12">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map(s => (
            <div key={s.label}>
              <p className="text-3xl md:text-4xl font-extrabold text-blue-400">{s.value}</p>
              <p className="text-gray-400 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">About the Institute</span>
            <h2 className="text-4xl font-bold text-white mt-3 mb-6 leading-tight">
              A Legacy of Excellence Since 1994
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              FAST NUCES (National University of Computer & Emerging Sciences) was established by the Foundation for Advancement of Science & Technology (FAST) and granted university charter in 2000. With six campuses across Pakistan, it stands as one of the most respected institutions in the country.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Our vision is to become a world-class institution fostering innovation, research, and entrepreneurship. We are committed to producing graduates who are not only technically proficient but also ethical and socially responsible leaders.
            </p>
            <div className="flex gap-6">
              <div className="border-l-2 border-blue-500 pl-4">
                <p className="text-white font-semibold">Our Mission</p>
                <p className="text-gray-400 text-sm">Excellence in education, research & community</p>
              </div>
              <div className="border-l-2 border-blue-500 pl-4">
                <p className="text-white font-semibold">Our Vision</p>
                <p className="text-gray-400 text-sm">A globally recognized research university</p>
              </div>
            </div>
          </div>

          {/* Visual card */}
          <div className="bg-gradient-to-br from-[#0d1b4b] to-[#1a2f7a] rounded-2xl p-8 border border-blue-800 shadow-xl">
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'HEC Ranked', value: 'Category W' },
                { label: 'Founded', value: '1994' },
                { label: 'Accreditation', value: 'PEC & NCEAC' },
                { label: 'Campuses', value: 'ISB · LHR · KHI · PSH · CFD · CHN' },
              ].map(item => (
                <div key={item.label} className="bg-[#0a0f2c]/60 rounded-xl p-4">
                  <p className="text-blue-400 text-xs uppercase tracking-wide mb-1">{item.label}</p>
                  <p className="text-white font-semibold text-sm">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS QUICK LINKS */}
      <section className="py-20 px-6 bg-[#060d26]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">Academic Programs</span>
            <h2 className="text-4xl font-bold text-white mt-3">Explore Our Departments</h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto">
              Choose from a wide range of undergraduate and graduate programs designed for the modern world.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map(p => (
              <Link
                to={p.path}
                key={p.title}
                className="group bg-gradient-to-br from-[#0d1b4b] to-[#0a0f2c] border border-blue-900 hover:border-blue-500 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/40 hover:-translate-y-1"
              >
                <span className="text-4xl">{p.icon}</span>
                <h3 className="text-white font-bold text-lg mt-4 mb-2 group-hover:text-blue-400 transition">
                  {p.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
                <p className="text-blue-400 text-sm mt-4 font-medium">Learn more →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}