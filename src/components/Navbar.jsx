import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex items-center h-20 relative">
          {/* Left side - About link */}
          <div className="hidden md:flex">
            <Link
              to="/about"
              className={`text-base transition-colors duration-300 ${
                location.pathname === '/about'
                  ? 'text-black'
                  : 'text-gray-500 hover:text-black'
              }`}
              style={{ 
                fontFamily: 'var(--font-heading)', 
                fontWeight: 500,
                letterSpacing: '-0.01em'
              }}
            >
              About
            </Link>
          </div>

          {/* Center - Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link to="/" 
                  className="text-lg text-black hover:text-gray-600 transition-colors duration-300" 
                  style={{ 
                    fontFamily: 'var(--font-heading)', 
                    fontWeight: 500,
                    letterSpacing: '-0.01em'
                  }}>
              Grace Foster
            </Link>
          </div>

          {/* Right side - Contact link */}
          <div className="hidden md:flex ml-auto">
            <Link
              to="/contact"
              className={`text-base transition-colors duration-300 ${
                location.pathname === '/contact'
                  ? 'text-black'
                  : 'text-gray-500 hover:text-black'
              }`}
              style={{ 
                fontFamily: 'var(--font-heading)', 
                fontWeight: 500,
                letterSpacing: '-0.01em'
              }}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-black hover:text-gray-600 transition-colors ml-auto"
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

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden py-6 border-t border-gray-100"
          >
            <div className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-base transition-colors duration-300 ${
                    location.pathname === item.path
                      ? 'text-black'
                      : 'text-gray-500 hover:text-black'
                  }`}
                  style={{ 
                    fontFamily: 'var(--font-heading)', 
                    fontWeight: 500,
                    letterSpacing: '-0.01em'
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
