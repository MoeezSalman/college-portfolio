import { Link } from 'react-router-dom'
import programs from '../data/programs'
import stats from '../data/stats'

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f2c] via-[#0d1b4b] to-[#1a2f7a]" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-700 opacity-20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 opacity-10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600 opacity-5 rounded-full blur-3xl" />

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
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-blue-700/40 hover:shadow-blue-500/50 hover:-translate-y-0.5"
            >
              Explore Programs →
            </Link>
            <Link
              to="/faculty"
              className="border border-blue-500 text-blue-300 hover:bg-blue-900/40 font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5"
            >
              Meet Our Faculty
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#060d26] border-y border-blue-900 py-14">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map(s => (
            <div key={s.label} className="group">
              <p className="text-3xl mb-1">{s.icon}</p>
              <p className="text-3xl md:text-4xl font-extrabold text-blue-400 group-hover:text-blue-300 transition-colors duration-200">
                {s.value}
              </p>
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
              FAST NUCES was established by the Foundation for Advancement of Science & Technology and granted a university charter in 2000. With six campuses across Pakistan, it stands as one of the most respected institutions in the country.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Our vision is to become a world-class institution fostering innovation, research, and entrepreneurship — producing graduates who are technically proficient, ethical, and socially responsible.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
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

          <div className="bg-gradient-to-br from-[#0d1b4b] to-[#1a2f7a] rounded-2xl p-8 border border-blue-800 shadow-xl">
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'HEC Ranked', value: 'Category W' },
                { label: 'Founded', value: '1994' },
                { label: 'Accreditation', value: 'PEC & NCEAC' },
                { label: 'Campuses', value: 'ISB · LHR · KHI · PSH · CFD · CHN' },
                { label: 'Research Papers', value: '5,000+' },
                { label: 'Industry Partners', value: '200+' },
              ].map(item => (
                <div
                  key={item.label}
                  className="bg-[#0a0f2c]/60 rounded-xl p-4 hover:bg-[#0a0f2c]/80 transition-colors duration-200"
                >
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
                to="/programs"
                key={p.id}
                className="group bg-gradient-to-br from-[#0d1b4b] to-[#0a0f2c] border border-blue-900 hover:border-blue-500 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-blue-900/40 hover:-translate-y-1"
              >
                <span className="text-4xl">{p.icon}</span>
                <h3 className="text-white font-bold text-lg mt-4 mb-2 group-hover:text-blue-400 transition-colors duration-200">
                  {p.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{p.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className={`text-xs px-3 py-1 rounded-full font-medium ${p.badge}`}>
                    {p.duration}
                  </span>
                  <p className="text-blue-400 text-sm font-medium group-hover:translate-x-1 transition-transform duration-200">
                    Learn more →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CAMPUSES */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">Our Reach</span>
          <h2 className="text-4xl font-bold text-white mt-3">6 Campuses Across Pakistan</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { city: 'Islamabad', code: 'ISB' },
            { city: 'Lahore', code: 'LHR' },
            { city: 'Karachi', code: 'KHI' },
            { city: 'Peshawar', code: 'PSH' },
            { city: 'Faisalabad', code: 'CFD' },
            { city: 'Chiniot', code: 'CHN' },
          ].map(campus => (
            <div
              key={campus.code}
              className="bg-gradient-to-br from-[#0d1b4b] to-[#0a0f2c] border border-blue-900 hover:border-blue-500 rounded-xl p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-900/40"
            >
              <p className="text-blue-400 font-bold text-lg">{campus.code}</p>
              <p className="text-gray-300 text-sm mt-1">{campus.city}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}