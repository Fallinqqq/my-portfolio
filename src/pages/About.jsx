import { motion } from 'framer-motion'
import graceProfile from '../assets/grace-profile.jpg'
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload, FaCode, FaBriefcase } from 'react-icons/fa'

const About = () => {
  return (
    <div className="pt-24 pb-8 px-8">
      <div className="max-w-3xl mx-auto">
        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="mb-8 relative inline-block">
            <div className="w-48 h-48 mx-auto overflow-hidden rounded-full border-4 border-gray-200 shadow-lg">
              <img 
                src={graceProfile} 
                alt="Grace Foster"
                className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                onError={(e) => {
                  e.target.src = '/images/grace-profile.jpg';
                }}
              />
            </div>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            About Me
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-600 mb-8 leading-relaxed"
          >
            I'm a passionate Graphic Designer and Front-End Developer with a keen eye for detail and a love for creating beautiful, functional designs. I specialize in bringing creative ideas to life through clean code and intuitive user experiences.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center space-x-6"
          >
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="mailto:gkfoster15@gmail.com" 
              className="text-gray-600 hover:text-red-500 transition-colors"
            >
              <FaEnvelope size={24} />
            </a>
          </motion.div>
        </motion.div>
        
        {/* Professional Summary */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mb-4"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Professional Summary</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Skills Section */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <FaCode className="mr-2 text-gray-700" />
                Skills
              </h3>
              <div className="space-y-3">
                <p className="font-medium">Design</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">Adobe Creative Suite</span>
                  <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">Photoshop</span>
                  <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">Illustrator</span>
                  <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">InDesign</span>
                  <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">Figma</span>
                </div>
              
                <p className="font-medium mt-4">Development</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">HTML5 & CSS3</span>
                  <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">JavaScript</span>
                  <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm">Responsive Design</span>
                </div>
              </div>
            </div>
            
            {/* Experience Highlight */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <FaBriefcase className="mr-2 text-gray-700" />
                Experience
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium">Graphic Designer</p>
                  <p className="text-gray-600 text-sm">2020 - Present</p>
                  <p className="text-sm mt-1">Creating compelling visual designs for digital and print media</p>
                </div>
                <div>
                  <p className="font-medium">Web Designer</p>
                  <p className="text-gray-600 text-sm">2018 - 2020</p>
                  <p className="text-sm mt-1">Designed and developed responsive websites</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              For more details about my experience, education, and skills, please download my resume.
            </p>
            
            {/* Download Resume Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4"
            >
              <a 
                href="/files/GraceFoster-Resume.pdf" 
                download="GraceFoster-Resume.pdf"
                className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors"
              >
                <FaDownload className="mr-2" />
                Download Resume
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
