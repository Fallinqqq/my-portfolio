import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import logoSrc from '../assets/PORTFOLIO-PREP-BRANDING.png'

const workDropdown = [
  { name: 'Graphic Design', path: '/graphic-design' },
  { name: 'Web Design',     path: '/web-design' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [workOpen, setWorkOpen] = useState(false)
  const [mobileWorkOpen, setMobileWorkOpen] = useState(false)
  const location = useLocation()
  const dropdownRef = useRef(null)

  const navItems = [
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setWorkOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const isWorkActive = location.pathname === '/graphic-design' || location.pathname === '/web-design' || location.pathname.startsWith('/projects')

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
              fetchpriority="high"
              decoding="sync"
            />
          </Link>

          {/* Desktop nav + Resume CTA */}
          <div className="hidden md:flex items-center gap-8">

            {/* Home */}
            <Link
              to="/"
              className={`text-base transition-colors duration-200 ${
                location.pathname === '/' ? 'text-accent underline underline-offset-4' : 'text-ink hover:text-accent'
              }`}
              style={{ fontFamily: 'var(--font-body)', fontWeight: 400 }}
            >
              Home
            </Link>

            {/* Work dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setWorkOpen((o) => !o)}
                className={`flex items-center gap-1 text-base font-bold transition-colors duration-200 ${
                  isWorkActive ? 'text-accent underline underline-offset-4' : 'text-ink hover:text-accent'
                }`}
                style={{ fontFamily: 'var(--font-body)', fontWeight: 400 }}
              >
                Work
                <svg
                  className={`w-3 h-3 mt-0.5 transition-transform duration-200 ${workOpen ? 'rotate-180' : ''}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence>
                {workOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-0 mt-2 w-44 bg-surface border border-soft rounded-lg shadow-lg py-1 z-50"
                  >
                    {workDropdown.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={() => setWorkOpen(false)}
                        className="block px-4 py-2.5 text-sm text-ink hover:text-accent hover:bg-soft transition-colors duration-150"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

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
              href="/PDF/Grace_Foster_Resume_2026.pdf"
              download="Grace_Foster_Resume_2026.pdf"
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
                {/* Home */}
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-bold transition-colors duration-200 ${
                    location.pathname === '/' ? 'text-ink' : 'text-muted hover:text-ink'
                  }`}
                >
                  Home
                </Link>

                {/* Work with sub-items */}
                <div>
                  <button
                    onClick={() => setMobileWorkOpen((o) => !o)}
                    className="flex items-center gap-1 text-sm font-bold text-muted hover:text-ink transition-colors duration-200"
                  >
                    Work
                    <svg
                      className={`w-3 h-3 mt-0.5 transition-transform duration-200 ${mobileWorkOpen ? 'rotate-180' : ''}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {mobileWorkOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.18 }}
                        className="overflow-hidden pl-3 mt-2 flex flex-col gap-3 border-l border-soft"
                      >
                        {workDropdown.map((item) => (
                          <Link key={item.name} to={item.path}
                            onClick={() => { setIsOpen(false); setMobileWorkOpen(false) }}
                            className="text-sm text-muted hover:text-ink transition-colors">
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

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
                  href="/PDF/Grace_Foster_Resume_2026.pdf"
                  download="Grace_Foster_Resume_2026.pdf"
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
