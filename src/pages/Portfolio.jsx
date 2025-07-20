import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaGithub, FaExternalLinkAlt, FaReact, FaJs, FaCss3Alt, FaHtml5, FaFigma } from 'react-icons/fa'
import { SiTailwindcss, SiTypescript, SiAdobephotoshop, SiAdobeillustrator } from 'react-icons/si'

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Fashion Platform",
      description: "A modern, responsive e-commerce platform for a fashion brand featuring advanced filtering, shopping cart functionality, and payment integration.",
      image: "/api/placeholder/600/400",
      category: "Web Development",
      technologies: [
        { name: "React", icon: FaReact, color: "#61DAFB" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" }
      ],
      liveLink: "https://fashion-platform-demo.com",
      githubLink: "https://github.com/gracefoster/fashion-platform",
      featured: true
    },
    {
      id: 2,
      title: "Brand Identity Design",
      description: "Complete brand identity package including logo design, color palette, typography, and brand guidelines for a tech startup.",
      image: "/api/placeholder/600/400",
      category: "Branding",
      technologies: [
        { name: "Adobe Illustrator", icon: SiAdobeillustrator, color: "#FF9A00" },
        { name: "Photoshop", icon: SiAdobephotoshop, color: "#31A8FF" },
        { name: "Figma", icon: FaFigma, color: "#F24E1E" }
      ],
      liveLink: "https://brand-showcase.com",
      featured: true
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Intuitive task management application with drag-and-drop functionality, team collaboration features, and real-time updates.",
      image: "/api/placeholder/600/400",
      category: "Web Development",
      technologies: [
        { name: "React", icon: FaReact, color: "#61DAFB" },
        { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
        { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" }
      ],
      liveLink: "https://task-manager-demo.com",
      githubLink: "https://github.com/gracefoster/task-manager"
    },
    {
      id: 4,
      title: "Restaurant Website Redesign",
      description: "Complete website redesign for a local restaurant featuring online reservations, menu showcase, and mobile optimization.",
      image: "/api/placeholder/600/400",
      category: "Web Design",
      technologies: [
        { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
        { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
        { name: "JavaScript", icon: FaJs, color: "#F7DF1E" }
      ],
      liveLink: "https://restaurant-redesign.com"
    },
    {
      id: 5,
      title: "Mobile App UI Design",
      description: "User interface design for a fitness tracking mobile app with focus on user experience and intuitive navigation.",
      image: "/api/placeholder/600/400",
      category: "UI/UX Design",
      technologies: [
        { name: "Figma", icon: FaFigma, color: "#F24E1E" },
        { name: "Adobe Illustrator", icon: SiAdobeillustrator, color: "#FF9A00" }
      ],
      liveLink: "https://fitness-app-design.com"
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing my work with modern animations, responsive design, and optimized performance.",
      image: "/api/placeholder/600/400",
      category: "Web Development",
      technologies: [
        { name: "React", icon: FaReact, color: "#61DAFB" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "JavaScript", icon: FaJs, color: "#F7DF1E" }
      ],
      liveLink: "https://gracefoster-portfolio.com",
      githubLink: "https://github.com/gracefoster/portfolio"
    }
  ]

  const categories = ["All", "Web Development", "Branding", "Web Design", "UI/UX Design"]
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="section-padding"
    >
      <div className="container-centered">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">My Portfolio</h1>
          <p className="text-xl text-accent-300 max-w-3xl mx-auto mb-12">
            A showcase of my creative work spanning web development, design, and branding projects
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                  activeCategory === category
                    ? 'bg-accent-400 text-white'
                    : 'bg-white/10 text-white/80 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.filter(project => project.featured).map((project, index) => (
              <motion.div
                key={project.id}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="glass-card overflow-hidden group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 bg-accent-400 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-white/80 mb-4 leading-relaxed">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span key={tech.name} className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm">
                        <tech.icon style={{ color: tech.color }} />
                        {tech.name}
                      </span>
                    ))}
                  </div>
                  
                  {/* Links */}
                  <div className="flex gap-4">
                    <a 
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-accent-400 hover:bg-accent-500 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                    {project.githubLink && (
                      <a 
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                      >
                        <FaGithub /> Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8">All Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card overflow-hidden group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-accent-400 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/80 text-sm mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="flex gap-3">
                    <a 
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-accent-400 hover:bg-accent-500 text-white py-2 rounded-lg transition-colors duration-300 text-sm"
                    >
                      View
                    </a>
                    {project.githubLink && (
                      <a 
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg transition-colors duration-300"
                      >
                        <FaGithub />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16 glass-card p-8"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Like What You See?</h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how I can help bring your next project to life.
          </p>
          <a href="/contact" className="btn-primary">
            Start a Project
          </a>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Portfolio
