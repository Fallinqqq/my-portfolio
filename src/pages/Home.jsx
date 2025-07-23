import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaBehance } from 'react-icons/fa'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen flex items-center justify-center section-padding"
    >
      <div className="container-centered">
        <div className="text-center text-text-primary">
          {/* Hero Title with Animation */}
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-accent-400"
          >
            Fostaa Designs
          </motion.h1>
          
          {/* Subtitle with Typing Effect */}
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-2xl md:text-4xl mb-8 text-text-primary font-light"
          >
            Graphic Designer & Front-End Developer
          </motion.h2>
          
          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg md:text-xl mb-12 max-w-4xl mx-auto text-text-primary/80 leading-relaxed"
          >
            I create <span className="text-text-accent font-semibold">visually stunning</span> and 
            <span className="text-text-accent font-semibold"> user-friendly digital experiences</span> through 
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
            {['Web Design', 'Graphic Design', 'Editorial Design', 'Brand Design', 'Adobe Creative Suite'].map((skill, index) => (
              <span 
                key={skill}
                className="bg-accent-400 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                {skill}
              </span>
            ))}
          </motion.div>

          {/* Latest Projects Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mb-16"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-text-primary">
              Latest Projects
            </h3>
            
            {/* Infinite Carousel Container */}
            <div className="relative max-w-7xl mx-auto px-4">
              <div className="overflow-hidden">
                <div className="flex animate-infinite-scroll">
                  {/* First set of projects */}
                  <div className="w-full md:w-1/2 lg:w-1/4 flex-shrink-0 px-3">
                    <div className="group cursor-pointer">
                      <div className="bg-text-primary/10 backdrop-blur-sm border border-text-primary/20 rounded-xl p-6 hover:bg-text-primary/20 transition-all duration-300 transform hover:scale-105">
                        <div className="h-48 bg-primary-400 rounded-lg mb-4 flex items-center justify-center">
                          <span className="text-white font-medium">Project Image</span>
                        </div>
                        <h4 className="text-lg font-semibold text-text-primary mb-2">Modern Logo Design</h4>
                        <p className="text-text-secondary text-sm">Clean, minimalist logo with brand guidelines.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-full md:w-1/2 lg:w-1/4 flex-shrink-0 px-3">
                    <div className="group cursor-pointer">
                      <div className="bg-text-primary/10 backdrop-blur-sm border border-text-primary/20 rounded-xl p-6 hover:bg-text-primary/20 transition-all duration-300 transform hover:scale-105">
                        <div className="h-48 bg-primary-400 rounded-lg mb-4 flex items-center justify-center">
                          <span className="text-white font-medium">Project Image</span>
                        </div>
                        <h4 className="text-lg font-semibold text-text-primary mb-2">Creative Poster Series</h4>
                        <p className="text-text-secondary text-sm">Bold typography and vibrant color schemes.</p>
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-1/2 lg:w-1/4 flex-shrink-0 px-3">
                    <div className="group cursor-pointer">
                      <div className="bg-text-primary/10 backdrop-blur-sm border border-text-primary/20 rounded-xl p-6 hover:bg-text-primary/20 transition-all duration-300 transform hover:scale-105">
                        <div className="h-48 bg-primary-400 rounded-lg mb-4 flex items-center justify-center">
                          <span className="text-white font-medium">Project Image</span>
                        </div>
                        <h4 className="text-lg font-semibold text-text-primary mb-2">Magazine Layout</h4>
                        <p className="text-text-secondary text-sm">Editorial design with focus on typography.</p>
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-1/2 lg:w-1/4 flex-shrink-0 px-3">
                    <div className="group cursor-pointer">
                      <div className="bg-text-primary/10 backdrop-blur-sm border border-text-primary/20 rounded-xl p-6 hover:bg-text-primary/20 transition-all duration-300 transform hover:scale-105">
                        <div className="h-48 bg-primary-400 rounded-lg mb-4 flex items-center justify-center">
                          <span className="text-white font-medium">Project Image</span>
                        </div>
                        <h4 className="text-lg font-semibold text-text-primary mb-2">Brand Identity</h4>
                        <p className="text-text-secondary text-sm">Complete branding package and guidelines.</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Duplicate set for seamless loop */}
                  <div className="w-full md:w-1/2 lg:w-1/4 flex-shrink-0 px-3">
                    <div className="group cursor-pointer">
                      <div className="bg-text-primary/10 backdrop-blur-sm border border-text-primary/20 rounded-xl p-6 hover:bg-text-primary/20 transition-all duration-300 transform hover:scale-105">
                        <div className="h-48 bg-primary-400 rounded-lg mb-4 flex items-center justify-center">
                          <span className="text-white font-medium">Project Image</span>
                        </div>
                        <h4 className="text-lg font-semibold text-text-primary mb-2">Modern Logo Design</h4>
                        <p className="text-text-secondary text-sm">Clean, minimalist logo with brand guidelines.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-full md:w-1/2 lg:w-1/4 flex-shrink-0 px-3">
                    <div className="group cursor-pointer">
                      <div className="bg-text-primary/10 backdrop-blur-sm border border-text-primary/20 rounded-xl p-6 hover:bg-text-primary/20 transition-all duration-300 transform hover:scale-105">
                        <div className="h-48 bg-primary-400 rounded-lg mb-4 flex items-center justify-center">
                          <span className="text-white font-medium">Project Image</span>
                        </div>
                        <h4 className="text-lg font-semibold text-text-primary mb-2">Creative Poster Series</h4>
                        <p className="text-text-secondary text-sm">Bold typography and vibrant color schemes.</p>
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-1/2 lg:w-1/4 flex-shrink-0 px-3">
                    <div className="group cursor-pointer">
                      <div className="bg-text-primary/10 backdrop-blur-sm border border-text-primary/20 rounded-xl p-6 hover:bg-text-primary/20 transition-all duration-300 transform hover:scale-105">
                        <div className="h-48 bg-primary-400 rounded-lg mb-4 flex items-center justify-center">
                          <span className="text-white font-medium">Project Image</span>
                        </div>
                        <h4 className="text-lg font-semibold text-text-primary mb-2">Magazine Layout</h4>
                        <p className="text-text-secondary text-sm">Editorial design with focus on typography.</p>
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-1/2 lg:w-1/4 flex-shrink-0 px-3">
                    <div className="group cursor-pointer">
                      <div className="bg-text-primary/10 backdrop-blur-sm border border-text-primary/20 rounded-xl p-6 hover:bg-text-primary/20 transition-all duration-300 transform hover:scale-105">
                        <div className="h-48 bg-primary-400 rounded-lg mb-4 flex items-center justify-center">
                          <span className="text-white font-medium">Project Image</span>
                        </div>
                        <h4 className="text-lg font-semibold text-text-primary mb-2">Brand Identity</h4>
                        <p className="text-text-secondary text-sm">Complete branding package and guidelines.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Call to Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
          >
            <Link to="/portfolio" className="bg-accent-400 hover:bg-opacity-80 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
              View My Work
            </Link>
            <Link to="/contact" className="bg-accent-500 hover:bg-opacity-80 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get In Touch
            </Link>
            <a 
              href="/resume.pdf" 
              className="bg-primary-300 hover:bg-opacity-80 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
              download
            >
              <FaDownload /> Download Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="flex justify-center gap-8"
          >
            <a 
              href="https://github.com/Fallinqqq" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-400 hover:text-accent-400 transition-colors duration-300 transform hover:scale-110"
            >
              <FaGithub size={28} />
            </a>
            <a 
              href="https://www.linkedin.com/in/gracekfoster/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-400 hover:text-accent-400 transition-colors duration-300 transform hover:scale-110"
            >
              <FaLinkedin size={28} />
            </a>
            <a 
              href="https://www.behance.net/gracefostaa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-400 hover:text-accent-400 transition-colors duration-300 transform hover:scale-110"
            >
              <FaBehance size={28} />
            </a>
            <a 
              href="mailto:gkfoster15@gmail.com"
              className="text-primary-400 hover:text-accent-400 transition-colors duration-300 transform hover:scale-110"
            >
              <FaEnvelope size={28} />
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Home
