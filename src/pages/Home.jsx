import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="section-padding"
    >
      <div className="container-centered">
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Grace Foster
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8 text-accent-300">
            Graphic Designer & Front-End Developer
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Creating visually appealing and user-friendly digital experiences 
            through innovative design and clean code.
          </p>
          <div className="space-x-4">
            <button className="btn-primary">View My Work</button>
            <button className="bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Home
