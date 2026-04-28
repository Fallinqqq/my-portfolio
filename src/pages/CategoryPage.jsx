import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'

const CategoryPage = ({ category }) => {
  const filtered = projects.filter(p => p.category === category)

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-20 md:py-24">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 sm:mb-16"
        >
          <p className="text-xs uppercase tracking-widest text-muted mb-3">Work</p>
          <h1
            className="text-ink"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.02em' }}
          >
            {category}
          </h1>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-10 gap-y-12 sm:gap-y-16">
          {filtered.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: (index % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link to={project.path || `/projects/${project.id}`} className="group block">
                <div className={`overflow-hidden mb-4 sm:mb-5 ${project.imageBg || 'bg-card'}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full aspect-[4/3] transition-transform duration-700 ease-out group-hover:scale-[1.03] ${project.imageFit || 'object-cover'}`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="flex items-start justify-between">
                  <div>
                    <h3
                      className="text-ink group-hover:text-muted transition-colors duration-200 mb-1"
                      style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700, fontSize: '18px', letterSpacing: '-0.01em' }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-muted leading-relaxed" style={{ fontSize: '18px' }}>{project.description}</p>
                  </div>
                  <span className="text-muted text-xl ml-4 mt-0.5 group-hover:translate-x-1 transition-transform duration-200 shrink-0">→</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default CategoryPage
