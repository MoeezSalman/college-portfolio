import { useState } from 'react'
import faculty from '../data/faculty'

const departments = ['All', 'Computer Science', 'Business Administration', 'Civil Engineering', 'Mechanical Engineering', 'Electrical Engineering', 'Fintech']

const deptColors = {
  'Computer Science': 'bg-blue-900/50 text-blue-300',
  'Business Administration': 'bg-purple-900/50 text-purple-300',
  'Civil Engineering': 'bg-yellow-900/50 text-yellow-300',
  'Mechanical Engineering': 'bg-orange-900/50 text-orange-300',
  'Electrical Engineering': 'bg-green-900/50 text-green-300',
  'Fintech': 'bg-cyan-900/50 text-cyan-300',
}

const avatarColors = [
  'from-blue-600 to-blue-900',
  'from-purple-600 to-purple-900',
  'from-green-600 to-green-900',
  'from-orange-600 to-orange-900',
  'from-cyan-600 to-cyan-900',
  'from-pink-600 to-pink-900',
]

export default function Faculty() {
  const [active, setActive] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = faculty.filter(f => {
    const matchDept = active === 'All' || f.dept === active
    const matchSearch = f.name.toLowerCase().includes(search.toLowerCase()) ||
      f.designation.toLowerCase().includes(search.toLowerCase())
    return matchDept && matchSearch
  })

  return (
    <section className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">Our People</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-4">Meet the Faculty</h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Our distinguished faculty brings decades of industry and academic experience to shape the next generation of leaders.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search by name or designation..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full bg-[#0d1b4b] border border-blue-900 focus:border-blue-500 text-white placeholder-gray-500 text-sm rounded-full pl-11 pr-5 py-3 outline-none transition-colors duration-200"
            />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {departments.map(dept => (
            <button
              key={dept}
              onClick={() => setActive(dept)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                active === dept
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-700/30'
                  : 'bg-[#0d1b4b] text-gray-300 border border-blue-900 hover:border-blue-500 hover:text-blue-300'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((member, idx) => (
              <div
                key={member.id}
                className="bg-gradient-to-br from-[#0d1b4b] to-[#0a0f2c] border border-blue-900 hover:border-blue-500 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-900/40 group"
              >
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${avatarColors[idx % avatarColors.length]} flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                  {member.initials}
                </div>
                <h3 className="text-white font-bold text-base">{member.name}</h3>
                <p className="text-blue-300 text-sm mt-1">{member.designation}</p>
                <p className="text-gray-500 text-xs mt-1">{member.experience} Experience</p>
                <span className={`inline-block mt-3 text-xs px-3 py-1 rounded-full font-medium ${deptColors[member.dept]}`}>
                  {member.dept}
                </span>
                <div className="mt-4 pt-4 border-t border-blue-900/50">
                  
                   <a href={`mailto:${member.email}`}
                    className="text-gray-500 hover:text-blue-400 text-xs transition-colors duration-200 truncate block"
                  >
                    ✉ {member.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500">
            <p className="text-4xl mb-4">🔍</p>
            <p className="text-lg">No faculty members found.</p>
            <p className="text-sm mt-2">Try adjusting your search or filter.</p>
          </div>
        )}

        <p className="text-center text-gray-500 text-sm mt-12">
          Showing <span className="text-blue-400 font-semibold">{filtered.length}</span> of{' '}
          <span className="text-blue-400 font-semibold">{faculty.length}</span> faculty members
        </p>
      </div>
    </section>
  )
}