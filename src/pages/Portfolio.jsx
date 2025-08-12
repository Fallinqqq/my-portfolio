import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [hoveredProject, setHoveredProject] = useState(null)
  
  const categories = ['All', 'Web Development', 'Branding', 'Design']
  
  const projects = [
    {
      id: 1,
      title: "E-Commerce Fashion Platform",
      description: "A minimalist e-commerce platform focused on user experience and clean design principles.",
      image: "/api/placeholder/1200/800",
      category: "Web Development",
      technologies: [
        { name: "React", icon: FaReact },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Tailwind CSS", icon: SiTailwindcss }
      ],
      liveLink: "https://fashion-platform-demo.com",
      githubLink: "https://github.com/gracefoster/fashion-platform",
      featured: true
    },
    // ... rest of your projects
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-24 px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Category Filter */}
        <div className="flex justify-center space-x-8 mb-20">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`text-sm tracking-wide transition-colors ${
                selectedCategory === category
                  ? 'text-black'
                  : 'text-gray-400 hover:text-black'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects
            .filter(project => selectedCategory === 'All' || project.category === selectedCategory)
            .map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden bg-gray-100">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {hoveredProject === project.id && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center"
                    >
                      <div className="flex space-x-4">
                        {project.liveLink && (
                          <a 
                            href={project.liveLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors"
                          >
                            <FaExternalLinkAlt className="w-5 h-5" />
                          </a>
                        )}
                        {project.githubLink && (
                          <a 
                            href={project.githubLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors"
                          >
                            <FaGithub className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </motion.div>
                  )}
                </div>
                <div className="mt-4 space-y-2">
                  <h3 className="text-lg font-light">{project.title}</h3>
                  <p className="text-sm text-gray-500">{project.category}</p>
                  <p className="text-sm text-gray-600 line-clamp-2">{project.description}</p>
                  <div className="flex space-x-2 pt-2">
                    {project.technologies.map((tech) => (
                      <tech.icon 
                        key={tech.name}
                        className="w-5 h-5 text-gray-400 hover:text-gray-600 transition-colors"
                        title={tech.name}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Portfolio
