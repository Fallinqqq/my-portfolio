import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaEnvelope, FaBehance } from 'react-icons/fa'

const Home = () => {
  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/gracefoster', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/gracefoster', label: 'LinkedIn' },
    { icon: FaBehance, url: 'https://behance.net/gracefoster', label: 'Behance' },
    { icon: FaEnvelope, url: 'mailto:gkfoster15@gmail.com', label: 'Email' }
  ]

  return (
    <div className="flex items-center justify-center min-h-screen px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
            Creative Graphic Designer
          </h1>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            I design and build digital experiences that combine aesthetic beauty with functional excellence. Specializing in web development and brand identity design.
          </p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-black transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="pt-8"
          >
            <Link
              to="/portfolio"
              className="inline-block px-6 py-3 text-sm font-light tracking-wide text-black border border-black hover:bg-black hover:text-white transition-colors"
            >
              View Portfolio
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Home
