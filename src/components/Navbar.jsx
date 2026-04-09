import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import logoSrc from '../assets/PORTFOLIO-PREP-BRANDING.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'Work', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface border-b border-soft transition-colors duration-300 overflow-visible">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 overflow-visible">
        <div className="flex items-center justify-between h-[130px] sm:h-[150px]">

          {/* Logo */}
          <Link to="/" className="inline-block select-none -ml-6 sm:-ml-8 md:-ml-10" aria-label="Grace Foster Designs">
            <img
              src={logoSrc}
              alt="Grace Foster Designs"
              className="h-[160px] sm:h-[200px] w-auto object-contain"
            />
          </Link>

          {/* Desktop nav + Resume CTA */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-base font-bold transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-accent underline underline-offset-4'
                    : 'text-ink hover:text-accent'
                }`}
                style={{ fontFamily: 'var(--font-body)', fontWeight: 400 }}
              >
                {item.name}
              </Link>
            ))}

            {/* Resume button */}
            <a
              href="/PDF/Resume-Grace_Foster-2026-Updated.pdf"
              download="Resume-Grace_Foster-2026-Updated.pdf"
              className="rounded-full px-5 py-1.5 text-sm font-medium"
              style={{ fontFamily: 'var(--font-body)', backgroundColor: 'var(--color-accent)', color: '#fbf3e7' }}
            >
              Resume
            </a>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-ink hover:text-muted transition-colors"
              aria-label="Toggle menu"
            >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden border-t border-soft"
            >
              <div className="flex flex-col py-6 gap-5">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-sm font-bold transition-colors duration-200 ${
                      location.pathname === item.path ? 'text-ink' : 'text-muted hover:text-ink'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <a
                  href="/PDF/Resume-Grace_Foster-2026-Updated.pdf"
                  download="Resume-Grace_Foster-2026-Updated.pdf"
                  className="rounded-full px-5 py-1.5 text-sm font-medium"
                  style={{ backgroundColor: 'var(--color-accent)', color: '#fbf3e7' }}
                >
                  Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar
