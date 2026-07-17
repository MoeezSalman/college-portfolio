import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

const socials = [
  { icon: <FaGithub size={18} />, href: "#", label: "GitHub" },
  { icon: <FaLinkedinIn size={18} />, href: "#", label: "LinkedIn" },
  { icon: <FaXTwitter size={18} />, href: "#", label: "X" },
  { icon: <FaInstagram size={18} />, href: "#", label: "Instagram" },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Faculty", href: "/faculty" },
  { name: "Programs", href: "/programs" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "News & Events", href: "/news" },
  { name: "Contact", href: "/contact" },
];

const programLinks = [
  { name: "BS Computer Science", href: "/programs" },
  { name: "BS Electrical Engineering", href: "/programs" },
  { name: "BBA", href: "/programs" },
  { name: "View All Programs", href: "/programs" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-2xl font-extrabold tracking-tight text-transparent">
              College Portfolio
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              Building future leaders through quality education, innovation,
              and excellence since 1985.
            </p>

            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-slate-300">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 transition-colors duration-300 hover:text-blue-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-slate-300">
              Programs
            </h3>

            <ul className="space-y-3">
              {programLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 transition-colors duration-300 hover:text-blue-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-slate-300">
              Contact
            </h3>

            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start gap-3">
                <FiMapPin className="mt-1 shrink-0 text-blue-400" />
                <span>
                  123 University Avenue
                  <br />
                  Lahore, Pakistan
                </span>
              </li>

              <li className="flex items-center gap-3">
                <FiPhone className="shrink-0 text-blue-400" />
                <span>+92 300 1234567</span>
              </li>

              <li className="flex items-center gap-3">
                <FiMail className="shrink-0 text-blue-400" />
                <span>admissions@college.edu.pk</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800/70">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} College Portfolio. All rights reserved.</p>
          <p>
            Built with <span className="text-blue-400">Next.js</span> &{" "}
            <span className="text-blue-400">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
