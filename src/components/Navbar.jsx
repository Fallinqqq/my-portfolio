import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import logoSrc from '../assets/PORTFOLIO-PREP-BRANDING.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'About', path: '/about' },
    { name: 'Websites', path: '/web-design' },
    { name: 'Graphics', path: '/graphic-design' },
  ]

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-[#FFFDF5] border-b border-soft transition-colors duration-300 overflow-visible rounded-b-3xl"
      style={{ boxShadow: '0 16px 32px -4px rgba(231, 241, 168, 0.95)' }}
    >
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
          <div className="hidden md:flex items-center gap-7">

            {/* Home */}
            <Link
              to="/"
              className={`text-xs transition-colors duration-200 ${
                location.pathname === '/' ? 'text-accent' : 'text-ink hover:text-accent'
              }`}
              style={{ fontFamily: 'var(--font-body)', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase' }}
            >
              Home
            </Link>

            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-xs transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-accent'
                    : 'text-ink hover:text-accent'
                }`}
                style={{ fontFamily: 'var(--font-body)', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase' }}
              >
                {item.name}
              </Link>
            ))}

            {/* Contact button */}
            <Link
              to="/contact"
              className="rounded-full px-5 py-2 text-xs bg-accent hover:bg-soft text-[#fffdf5] hover:text-ink hover:scale-110 transition-all duration-200"
              style={{ fontFamily: 'var(--font-body)', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase' }}
            >
              Let's Chat
            </Link>
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
                  className={`text-xs transition-colors duration-200 ${
                    location.pathname === '/' ? 'text-ink' : 'text-muted hover:text-ink'
                  }`}
                  style={{ fontFamily: 'var(--font-body)', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase' }}
                >
                  Home
                </Link>

                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-xs transition-colors duration-200 ${
                      location.pathname === item.path ? 'text-ink' : 'text-muted hover:text-ink'
                    }`}
                    style={{ fontFamily: 'var(--font-body)', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase' }}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="rounded-full px-5 py-1.5 text-xs w-fit bg-accent hover:bg-soft text-[#fffdf5] hover:text-ink hover:scale-110 transition-all duration-200"
                  style={{ fontFamily: 'var(--font-body)', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase' }}
                >
                  Let's Chat
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar
