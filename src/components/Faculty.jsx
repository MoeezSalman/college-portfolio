const faculty = [
  { name: 'Dr. Ahmed Raza', designation: 'Professor', dept: 'Computer Science', initials: 'AR' },
  { name: 'Dr. Sara Khan', designation: 'Associate Professor', dept: 'Computer Science', initials: 'SK' },
  { name: 'Dr. Usman Tariq', designation: 'Assistant Professor', dept: 'Computer Science', initials: 'UT' },
  { name: 'Dr. Fatima Malik', designation: 'Professor', dept: 'Business Administration', initials: 'FM' },
  { name: 'Mr. Bilal Akhtar', designation: 'Lecturer', dept: 'Business Administration', initials: 'BA' },
  { name: 'Dr. Zara Hussain', designation: 'Associate Professor', dept: 'Business Administration', initials: 'ZH' },
  { name: 'Dr. Kamran Javed', designation: 'Professor', dept: 'Civil Engineering', initials: 'KJ' },
  { name: 'Ms. Nadia Siddiqui', designation: 'Assistant Professor', dept: 'Civil Engineering', initials: 'NS' },
  { name: 'Dr. Hassan Ali', designation: 'Professor', dept: 'Mechanical Engineering', initials: 'HA' },
  { name: 'Dr. Amna Qureshi', designation: 'Associate Professor', dept: 'Mechanical Engineering', initials: 'AQ' },
  { name: 'Dr. Imran Sheikh', designation: 'Professor', dept: 'Electrical Engineering', initials: 'IS' },
  { name: 'Ms. Hina Baig', designation: 'Lecturer', dept: 'Electrical Engineering', initials: 'HB' },
  { name: 'Dr. Omer Farooq', designation: 'Associate Professor', dept: 'Fintech', initials: 'OF' },
  { name: 'Ms. Sana Rizvi', designation: 'Assistant Professor', dept: 'Fintech', initials: 'SR' },
]

const departments = ['All', 'Computer Science', 'Business Administration', 'Civil Engineering', 'Mechanical Engineering', 'Electrical Engineering', 'Fintech']

const deptColors = {
  'Computer Science': 'bg-blue-900/50 text-blue-300',
  'Business Administration': 'bg-purple-900/50 text-purple-300',
  'Civil Engineering': 'bg-yellow-900/50 text-yellow-300',
  'Mechanical Engineering': 'bg-orange-900/50 text-orange-300',
  'Electrical Engineering': 'bg-green-900/50 text-green-300',
  'Fintech': 'bg-cyan-900/50 text-cyan-300',
}

import { useState } from 'react'

export default function Faculty() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? faculty : faculty.filter(f => f.dept === active)

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

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {departments.map(dept => (
            <button
              key={dept}
              onClick={() => setActive(dept)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === dept
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-700/30'
                  : 'bg-[#0d1b4b] text-gray-300 border border-blue-900 hover:border-blue-500'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map(member => (
            <div
              key={member.name}
              className="bg-gradient-to-br from-[#0d1b4b] to-[#0a0f2c] border border-blue-900 hover:border-blue-500 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-900/40"
            >
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-blue-900 flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 shadow-lg">
                {member.initials}
              </div>
              <h3 className="text-white font-bold text-base">{member.name}</h3>
              <p className="text-blue-300 text-sm mt-1">{member.designation}</p>
              <span className={`inline-block mt-3 text-xs px-3 py-1 rounded-full font-medium ${deptColors[member.dept]}`}>
                {member.dept}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-12">
          Showing {filtered.length} of {faculty.length} faculty members
        </p>
      </div>
    </section>
  )
}