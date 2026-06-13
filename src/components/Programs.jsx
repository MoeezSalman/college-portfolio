import { useState } from 'react'
import programs from '../data/programs'

export default function Programs() {
  const [expanded, setExpanded] = useState(null)

  return (
    <section className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">Academics</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-4">Programs & Courses</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            FAST NUCES offers rigorous, industry-aligned degree programs accredited by HEC, PEC, and NCEAC — preparing graduates for global careers.
          </p>
        </div>

        {/* Summary bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {programs.map(p => (
            
              <a key={p.id}
              href={`#program-${p.id}`}
              className="flex items-center gap-2 bg-[#0d1b4b] border border-blue-900 hover:border-blue-500 text-gray-300 hover:text-blue-300 text-sm px-4 py-2 rounded-full transition-all duration-200"
            >
              <span>{p.icon}</span>
              <span>{p.title}</span>
            </a>
          ))}
        </div>

        {/* Program Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {programs.map(program => (
            <div
              id={`program-${program.id}`}
              key={program.id}
              className={`bg-gradient-to-br ${program.color} border ${program.border} rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-14 h-14 rounded-xl ${program.iconBg} flex items-center justify-center text-3xl flex-shrink-0`}>
                  {program.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-white font-bold text-xl">{program.title}</h2>
                  <div className="flex flex-wrap gap-2 mt-1">
                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${program.badge}`}>
                      {program.degree}
                    </span>
                    <span className="text-xs px-3 py-1 rounded-full font-medium bg-white/10 text-gray-300">
                      {program.duration}
                    </span>
                    <span className="text-xs px-3 py-1 rounded-full font-medium bg-white/10 text-gray-300">
                      {program.accreditation}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-5">{program.description}</p>

              {/* Courses */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-white text-xs font-semibold uppercase tracking-widest">Core Courses</p>
                  <button
                    onClick={() => setExpanded(expanded === program.id ? null : program.id)}
                    className={`text-xs px-3 py-1 rounded-full border transition-all duration-200 cursor-pointer ${program.badge} border-current`}
                  >
                    {expanded === program.id ? 'Show Less ↑' : 'Show All ↓'}
                  </button>
                </div>
                <div className={`grid grid-cols-2 gap-2 overflow-hidden transition-all duration-300 ${
                  expanded === program.id ? 'max-h-96' : 'max-h-28'
                }`}>
                  {program.courses.map(course => (
                    <div key={course} className="flex items-center gap-2 text-gray-300 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                      {course}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-gradient-to-br from-[#0d1b4b] to-[#1a2f7a] border border-blue-700 rounded-2xl p-10">
          <h3 className="text-white text-2xl font-bold mb-3">Ready to Apply?</h3>
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Join 25,000+ students across Pakistan who chose FAST NUCES for a world-class education.
          </p>
          
            <a href="https://admission.nu.edu.pk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-blue-700/40 hover:-translate-y-0.5"
          >
            Apply for Admission →
          </a>
        </div>
      </div>
    </section>
  )
}