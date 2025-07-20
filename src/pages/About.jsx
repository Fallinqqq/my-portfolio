import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="section-padding"
    >
      <div className="container-centered">
        <div className="glass-card p-8">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">About Me</h1>
          <div className="text-white/90 space-y-6">
            <p className="text-lg">
              I'm a passionate Graphic Designer and Front-End Developer with a love for creating 
              beautiful, functional digital experiences. My journey combines creativity with 
              technical expertise to bring ideas to life.
            </p>
            <p className="text-lg">
              With expertise in modern web technologies and design principles, I craft solutions 
              that are both visually stunning and user-friendly.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default About
