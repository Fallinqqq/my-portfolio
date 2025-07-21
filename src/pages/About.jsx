import { motion } from 'framer-motion'
import { FaCode, FaPalette, FaLightbulb, FaUsers, FaGraduationCap, FaAward } from 'react-icons/fa'

// Import the image directly for better bundling
import graceProfile from '../assets/grace-profile.jpg'

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="section-padding"
    >
      <div className="container-centered">
        {/* Header with Profile Image */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Profile Image with Creative Frame */}
          <div className="relative mb-8 flex justify-center">
            <div className="relative group">
              {/* Decorative background circles */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-accent-400 to-primary-300 rounded-full opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
              
              {/* Main image container */}
              <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-text-primary/30 shadow-2xl group-hover:scale-105 transition-transform duration-300">
                <img 
                  src={graceProfile} 
                  alt="Grace Foster - Graphic Designer & Front-End Developer"
                  className="w-full h-full object-cover relative z-10"
                  onError={(e) => {
                    console.log('Image failed to load from assets, trying public path');
                    e.target.src = '/images/grace-profile.jpg';
                    e.target.onerror = () => {
                      console.log('Both image paths failed');
                      e.target.style.display = 'none';
                    };
                  }}
                  onLoad={() => console.log('Image loaded successfully')}
                />
                {/* Fallback content if image doesn't load */}
                <div className="absolute inset-0 flex items-center justify-center bg-primary-400/20 text-text-primary text-lg font-semibold z-0">
                  GF
                </div>
                {/* Subtle overlay for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-background-primary/20 to-transparent"></div>
              </div>
              
              {/* Floating accent elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent-400 rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-primary-400 rounded-full opacity-60 animate-pulse delay-1000"></div>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-text-primary mb-4">About Me</h1>
          <p className="text-xl text-accent-400 max-w-3xl mx-auto">
            Passionate about creating beautiful, functional designs that make a difference
          </p>
          
          {/* Personal tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-6 flex flex-wrap justify-center gap-3"
          >
            <span className="px-4 py-2 bg-primary-400/20 text-primary-300 rounded-full text-sm font-medium">
              Creative Problem Solver
            </span>
            <span className="px-4 py-2 bg-accent-400/20 text-accent-400 rounded-full text-sm font-medium">
              Design Enthusiast
            </span>
            <span className="px-4 py-2 bg-primary-300/20 text-primary-300 rounded-full text-sm font-medium">
              Code Artist
            </span>
          </motion.div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Story */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card p-8"
          >
            <h2 className="text-3xl font-bold text-text-primary mb-6">My Journey</h2>
            <div className="text-text-primary/90 space-y-4 text-lg leading-relaxed">
              <p>
                Hi, I'm Grace! I'm a passionate <span className="text-accent-400 font-semibold">Graphic Designer</span> and 
                <span className="text-accent-400 font-semibold"> Front-End Developer</span> with over 5 years of experience 
                creating digital experiences that captivate and engage users.
              </p>
              <p>
                My journey began with a love for art and design, which naturally evolved into a fascination 
                with how technology can bring creative visions to life. I specialize in bridging the gap 
                between beautiful aesthetics and functional, user-friendly interfaces.
              </p>
              <p>
                When I'm not coding or designing, you can find me exploring new coffee shops, 
                sketching in my notebook, or experimenting with the latest design trends and web technologies.
              </p>
            </div>
          </motion.div>

          {/* Skills & Expertise */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-card p-8"
          >
            <h2 className="text-3xl font-bold text-text-primary mb-6">Expertise</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <FaPalette className="text-accent-400 text-2xl mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">Design</h3>
                  <p className="text-text-primary/80">UI/UX Design, Branding, Typography, Color Theory, Adobe Creative Suite</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FaCode className="text-accent-400 text-2xl mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">Development</h3>
                  <p className="text-text-primary/80">React, JavaScript, TypeScript, CSS3, HTML5, Responsive Design</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FaLightbulb className="text-accent-400 text-2xl mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">Strategy</h3>
                  <p className="text-text-primary/80">User Research, Wireframing, Prototyping, Design Systems</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { number: '50+', label: 'Projects Completed', icon: FaAward },
            { number: '5+', label: 'Years Experience', icon: FaGraduationCap },
            { number: '30+', label: 'Happy Clients', icon: FaUsers },
            { number: '100%', label: 'Passion Driven', icon: FaLightbulb }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="glass-card p-6 text-center"
            >
              <stat.icon className="text-accent-400 text-3xl mx-auto mb-4" />
              <div className="text-3xl font-bold text-text-primary mb-2">{stat.number}</div>
              <div className="text-text-primary/80 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values & Philosophy */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass-card p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">My Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-accent-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-background-primary text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">User-Centered</h3>
              <p className="text-text-primary/80">
                Every design decision is made with the user's needs and experience at the forefront.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-accent-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaLightbulb className="text-background-primary text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">Innovation</h3>
              <p className="text-text-primary/80">
                Constantly exploring new technologies and design trends to deliver cutting-edge solutions.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-accent-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCode className="text-background-primary text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-3">Quality</h3>
              <p className="text-text-primary/80">
                Attention to detail and commitment to delivering high-quality, maintainable code.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-text-primary mb-6">Let's Work Together</h2>
          <p className="text-xl text-text-primary/90 mb-8 max-w-2xl mx-auto">
            I'm always excited to collaborate on new projects and bring creative ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              Start a Project
            </a>
            <a 
              href="/resume.pdf" 
              className="bg-text-primary/20 hover:bg-text-primary/30 text-text-primary font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              download
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default About
