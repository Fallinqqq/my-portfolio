import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen flex items-center justify-center section-padding"
    >
      <div className="container-centered">
        <div className="text-center text-white">
          {/* Hero Title with Animation */}
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-accent-300 to-white bg-clip-text text-transparent"
          >
            Grace Foster
          </motion.h1>
          
          {/* Subtitle with Typing Effect */}
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-2xl md:text-4xl mb-8 text-accent-300 font-light"
          >
            Graphic Designer & Front-End Developer
          </motion.h2>
          
          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg md:text-xl mb-12 max-w-4xl mx-auto text-white/90 leading-relaxed"
          >
            I create <span className="text-accent-300 font-semibold">visually stunning</span> and 
            <span className="text-accent-300 font-semibold"> user-friendly digital experiences</span> through 
            innovative design principles and clean, efficient code. My passion lies in bridging the gap 
            between beautiful aesthetics and functional technology.
          </motion.p>

          {/* Skills Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {['React', 'JavaScript', 'CSS3', 'HTML5', 'Figma', 'Adobe Creative Suite', 'UI/UX Design', 'Responsive Design'].map((skill, index) => (
              <span 
                key={skill}
                className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                {skill}
              </span>
            ))}
          </motion.div>
          
          {/* Call to Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
          >
            <Link to="/portfolio" className="btn-primary text-center">
              View My Work
            </Link>
            <Link to="/contact" className="bg-white/20 hover:bg-white/30 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm border border-white/20">
              Get In Touch
            </Link>
            <a 
              href="/resume.pdf" 
              className="bg-transparent border-2 border-accent-300 hover:bg-accent-300 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              download
            >
              <FaDownload /> Download Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.8 }}
            className="flex justify-center gap-8"
          >
            <a 
              href="https://github.com/gracefoster" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-accent-300 transition-colors duration-300 transform hover:scale-110"
            >
              <FaGithub size={28} />
            </a>
            <a 
              href="https://linkedin.com/in/gracefoster" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-accent-300 transition-colors duration-300 transform hover:scale-110"
            >
              <FaLinkedin size={28} />
            </a>
            <a 
              href="mailto:grace@example.com"
              className="text-white/70 hover:text-accent-300 transition-colors duration-300 transform hover:scale-110"
            >
              <FaEnvelope size={28} />
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Home
