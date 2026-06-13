import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#060d26] border-t border-blue-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        <div>
          <p className="text-white font-bold text-lg mb-2">FAST NUCES</p>
          <p className="text-sm leading-relaxed">
            National University of Computer & Emerging Sciences — shaping the leaders of tomorrow through excellence in education and research.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <p className="text-white font-semibold mb-3">Quick Links</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-blue-400 transition">Home</Link></li>
            <li><Link to="/programs" className="hover:text-blue-400 transition">Programs</Link></li>
            <li><Link to="/faculty" className="hover:text-blue-400 transition">Faculty</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-white font-semibold mb-3">Contact Us</p>
          <ul className="space-y-2 text-sm">
            <li>A.K. Brohi Road, H-11/4, Islamabad</li>
            <li>+92-51-111-128-128</li>
            <li>info@nu.edu.pk</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs py-4 border-t border-blue-900">
        {new Date().getFullYear()} FAST NUCES. All rights reserved.
      </div>
    </footer>
  )
}