import { motion } from 'framer-motion'

const Portfolio = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="section-padding"
    >
      <div className="container-centered">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">My Portfolio</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="glass-card p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Project {item}</h3>
              <p className="text-white/80">
                A showcase of my work in design and development.
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Portfolio
