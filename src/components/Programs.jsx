const programs = [
  {
    title: 'Computer Science',
    icon: '💻',
    degree: 'BS Computer Science (4 Years)',
    description: 'One of Pakistan\'s top-ranked CS programs with focus on software engineering, AI, and systems.',
    courses: ['Programming Fundamentals', 'Data Structures & Algorithms', 'Operating Systems', 'Database Systems', 'Artificial Intelligence', 'Software Engineering', 'Computer Networks', 'Machine Learning'],
    color: 'from-blue-900/60 to-blue-950/40',
    border: 'border-blue-700',
    badge: 'bg-blue-900/50 text-blue-300',
  },
  {
    title: 'Business Administration',
    icon: '📊',
    degree: 'BBA / MBA',
    description: 'A comprehensive business program blending management theory with modern digital business practices.',
    courses: ['Principles of Management', 'Financial Accounting', 'Marketing Management', 'Business Statistics', 'Organizational Behavior', 'Corporate Finance', 'Business Ethics', 'Entrepreneurship'],
    color: 'from-purple-900/60 to-purple-950/40',
    border: 'border-purple-700',
    badge: 'bg-purple-900/50 text-purple-300',
  },
  {
    title: 'Civil Engineering',
    icon: '🏗️',
    degree: 'BE Civil Engineering (4 Years)',
    description: 'PEC-accredited program covering structural, geotechnical, and environmental engineering.',
    courses: ['Engineering Mechanics', 'Structural Analysis', 'Fluid Mechanics', 'Geotechnical Engineering', 'Transportation Engineering', 'Construction Management', 'Concrete Technology', 'Environmental Engineering'],
    color: 'from-yellow-900/60 to-yellow-950/40',
    border: 'border-yellow-700',
    badge: 'bg-yellow-900/50 text-yellow-300',
  },
  {
    title: 'Mechanical Engineering',
    icon: '⚙️',
    degree: 'BE Mechanical Engineering (4 Years)',
    description: 'Covers thermodynamics, manufacturing, robotics, and modern mechanical systems design.',
    courses: ['Engineering Drawing', 'Thermodynamics', 'Fluid Mechanics', 'Manufacturing Processes', 'Machine Design', 'Robotics & Automation', 'Heat Transfer', 'Control Systems'],
    color: 'from-orange-900/60 to-orange-950/40',
    border: 'border-orange-700',
    badge: 'bg-orange-900/50 text-orange-300',
  },
  {
    title: 'Electrical Engineering',
    icon: '⚡',
    degree: 'BE Electrical Engineering (4 Years)',
    description: 'PEC-accredited program in power systems, electronics, telecommunications, and embedded systems.',
    courses: ['Circuit Analysis', 'Electronics', 'Signals & Systems', 'Power Systems', 'Digital Logic Design', 'Electromagnetic Theory', 'Communication Systems', 'Embedded Systems'],
    color: 'from-green-900/60 to-green-950/40',
    border: 'border-green-700',
    badge: 'bg-green-900/50 text-green-300',
  },
  {
    title: 'Fintech',
    icon: '💳',
    degree: 'BS Fintech (4 Years)',
    description: 'An interdisciplinary program combining finance, technology, and data to drive the future of financial services.',
    courses: ['Introduction to Fintech', 'Blockchain & Cryptocurrency', 'Digital Payments', 'Financial Data Analysis', 'Risk Management', 'RegTech & Compliance', 'AI in Finance', 'Open Banking'],
    color: 'from-cyan-900/60 to-cyan-950/40',
    border: 'border-cyan-700',
    badge: 'bg-cyan-900/50 text-cyan-300',
  },
]

export default function Programs() {
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

        {/* Program Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {programs.map(program => (
            <div
              key={program.title}
              className={`bg-gradient-to-br ${program.color} border ${program.border} rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
            >
              {/* Program Header */}
              <div className="flex items-start gap-4 mb-5">
                <span className="text-4xl">{program.icon}</span>
                <div>
                  <h2 className="text-white font-bold text-xl">{program.title}</h2>
                  <span className={`inline-block text-xs px-3 py-1 rounded-full font-medium mt-1 ${program.badge}`}>
                    {program.degree}
                  </span>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">{program.description}</p>

              {/* Courses */}
              <div>
                <p className="text-white text-xs font-semibold uppercase tracking-widest mb-3">Core Courses</p>
                <div className="grid grid-cols-2 gap-2">
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

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-br from-[#0d1b4b] to-[#1a2f7a] border border-blue-700 rounded-2xl p-10">
          <h3 className="text-white text-2xl font-bold mb-3">Ready to Apply?</h3>
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Join 25,000+ students across Pakistan who chose FAST NUCES for a world-class education.
          </p>
          
            <a href="https://admission.nu.edu.pk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-full transition shadow-lg shadow-blue-700/40"
          >
            Apply for Admission →
          </a>
        </div>
      </div>
    </section>
  )
}