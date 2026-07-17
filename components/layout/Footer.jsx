import Link from "next/link";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";
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
    <footer className="relative overflow-hidden border-t border-slate-200 bg-gradient-to-b from-stone-200 via-blue-100 to-stone-300 transition-colors duration-300 dark:border-slate-800 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.08),transparent_40%)]"></div>
      <div className="w-full px-6 py-16 lg:px-10 xl:px-14">
        <div className="grid gap-14 lg:grid-cols-[2fr_1fr_1fr_1.4fr]">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:bg-gradient-to-r dark:from-blue-300 dark:via-cyan-300 dark:to-sky-400 dark:bg-clip-text dark:text-transparent">
              Innovia Institute
            </h2>

            <p className="mt-5 max-w-xs leading-8 text-slate-600 dark:text-slate-400">
              Building future leaders through quality education,
              innovation, and excellence since 1985.
            </p>

            <div className="mt-7 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-300 bg-slate-100 text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-blue-500 dark:hover:bg-blue-500/10 dark:hover:text-blue-400"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-base text-slate-600 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Programs
            </h3>

            <ul className="space-y-4">
              {programLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-base text-slate-600 transition hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Contact
            </h3>

            <ul className="space-y-5 text-slate-600 dark:text-slate-400">
              <li className="flex items-start gap-4">
                <FiMapPin className="mt-1 text-lg text-blue-600 dark:text-blue-400" />
                <span>
                  123 University Avenue
                  <br />
                  Lahore, Pakistan
                </span>
              </li>

              <li className="flex items-center gap-4">
                <FiPhone className="text-lg text-blue-600 dark:text-blue-400" />
                <span>+92 300 1234567</span>
              </li>

              <li className="flex items-center gap-4">
                <FiMail className="text-lg text-blue-600 dark:text-blue-400" />
                <span>admissions@college.edu.pk</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-stone-200 dark:border-slate-800">
        <div className="w-full px-6 py-6 lg:px-10 xl:px-14">
          <p className="text-center text-sm font-medium text-slate-600 dark:text-slate-400">
            © {new Date().getFullYear()} College Portfolio. All rights reserved.
          </p>
        </div>
      </div>

    </footer>
  );
}