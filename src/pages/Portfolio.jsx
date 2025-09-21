import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FaGithub, FaExternalLinkAlt, FaReact, FaNode, FaPython, FaDocker, FaAd } from 'react-icons/fa'
import { SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql, SiDjango, SiFigma, SiAdobeillustrator, SiAdobephotoshop } from 'react-icons/si'
import ProjectModal from '../components/ProjectModal'

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [hoveredProject, setHoveredProject] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)
  
  const categories = ['All', 'Web Development', 'Branding', 'Design']
  
  const projects = [
    {
      id: 1,
      title: "Commvault",
      description: "Created various marketing Resources for Commvault including brochures, banners, and digital ads.",
      longDescription: "Created various marketing materials for cross functional teams at Commvault including various Data sheets, infographics, whitepapers, and digital ads.",
      image: "/images/grace-profile.jpg",
      additionalImages: ["/images/grace-profile.jpg", "/images/grace-profile.jpg"],
      category: "Web Development",
      technologies: [
        { name: "Adobe Indesign", icon: SiAdobeillustrator }, // Using illustrator as fallback
        { name: "Adobe Illustrator", icon: SiAdobeillustrator },
        { name: "Adobe Photoshop", icon: SiAdobephotoshop },
      ],
      features: [
        "Infographics",
        "Whitepapers",
        "Data sheets",
        "Digital ads",
        "Print materials",
        "Brand consistency"
      ],
      liveLink: "https://fashion-platform-demo.com",
      githubLink: "https://github.com/gracefoster/fashion-platform",
      featured: true
    },
    {
      id: 2,
      title: "Brand Identity System",
      description: "Complete brand identity package including logo design, color palette, and guidelines.",
      longDescription: "A comprehensive brand identity system created for a modern wellness company. The project included logo design, typography selection, color palette development, and a complete brand guidelines document.",
      image: "/images/BehanceBrandGuide_Willow-Word_FOSTER-01.png",
      category: "Branding",
      technologies: [
        { name: "Figma", icon: SiFigma },
        { name: "Illustrator", icon: SiAdobeillustrator },
        { name: "Photoshop", icon: SiAdobephotoshop }
      ],
      features: [
        "Logo design and variations",
        "Typography system",
        "Color palette",
        "Brand guidelines document",
        "Marketing collateral templates"
      ],
      liveLink: "https://behance.net/yourusername",
      featured: false
    },
    {
      id: 3,
      title: "Task Management Dashboard",
      description: "A collaborative task management platform with real-time updates and team features.",
      longDescription: "Built for remote teams, this platform offers real-time collaboration tools, task tracking, and project management features. It includes customizable workflows, time tracking, and detailed analytics.",
      image: "/api/placeholder/1200/800",
      category: "Web Development",
      technologies: [
        { name: "React", icon: FaReact },
        { name: "Node.js", icon: FaNode },
        { name: "MongoDB", icon: SiMongodb }
      ],
      features: [
        "Real-time collaboration",
        "Custom workflow creation",
        "Time tracking",
        "Team management",
        "Performance analytics"
      ],
      liveLink: "https://task-dashboard-demo.com",
      githubLink: "https://github.com/gracefoster/task-dashboard",
      featured: true
    },
    {
      id: 4,
      title: "AI-Powered Data Analytics Platform",
      description: "Enterprise-level data analytics platform with machine learning capabilities.",
      longDescription: "An advanced analytics platform that leverages AI to provide insights from complex datasets. Features include automated reporting, predictive analytics, and customizable dashboards.",
      image: "/api/placeholder/1200/800",
      category: "Web Development",
      technologies: [
        { name: "Python", icon: FaPython },
        { name: "Django", icon: SiDjango },
        { name: "PostgreSQL", icon: SiPostgresql }
      ],
      features: [
        "Machine learning algorithms",
        "Automated reporting",
        "Custom dashboard creation",
        "Data visualization tools",
        "API integration"
      ],
      liveLink: "https://analytics-platform-demo.com",
      githubLink: "https://github.com/gracefoster/analytics-platform",
      featured: true
    },
    {
      id: 5,
      title: "Sustainable Fashion Campaign",
      description: "Digital marketing campaign for an eco-friendly fashion brand.",
      longDescription: "A comprehensive digital marketing campaign highlighting sustainable fashion practices. Including social media assets, web banners, and email marketing templates.",
      image: "/api/placeholder/1200/800",
      category: "Design",
      technologies: [
        { name: "Photoshop", icon: SiAdobephotoshop },
        { name: "Illustrator", icon: SiAdobeillustrator }
      ],
      features: [
        "Social media kit",
        "Email templates",
        "Web banners",
        "Print materials",
        "Brand guidelines"
      ],
      liveLink: "https://behance.net/yourusername/sustainable-fashion",
      featured: false
    },
    {
      id: 6,
      title: "Restaurant Ordering System",
      description: "Full-stack application for managing restaurant orders and inventory.",
      longDescription: "A comprehensive system for restaurants to manage orders, inventory, and customer relationships. Includes both customer-facing and administrative interfaces.",
      image: "/api/placeholder/1200/800",
      category: "Web Development",
      technologies: [
        { name: "React", icon: FaReact },
        { name: "Node.js", icon: FaNode },
        { name: "Docker", icon: FaDocker }
      ],
      features: [
        "Online ordering system",
        "Inventory management",
        "Table reservations",
        "Customer profiles",
        "Analytics dashboard"
      ],
      liveLink: "https://restaurant-system-demo.com",
      githubLink: "https://github.com/gracefoster/restaurant-system",
      featured: true
    },
    {
      id: 7,
      title: "Travel Blog Theme",
      description: "Custom WordPress theme for travel bloggers with modern design elements.",
      longDescription: "A fully customizable WordPress theme designed specifically for travel bloggers. Features include custom post types, interactive maps, and social media integration.",
      image: "/api/placeholder/1200/800",
      category: "Design",
      technologies: [
        { name: "Figma", icon: SiFigma },
        { name: "React", icon: FaReact },
        { name: "Tailwind CSS", icon: SiTailwindcss }
      ],
      features: [
        "Responsive design",
        "Custom post types",
        "Interactive maps",
        "Social media integration",
        "SEO optimization"
      ],
      liveLink: "https://travel-theme-demo.com",
      githubLink: "https://github.com/gracefoster/travel-theme",
      featured: false
    },
    {
      id: 8,
      title: "Healthcare App UI Kit",
      description: "Comprehensive UI kit for healthcare applications with accessibility features.",
      longDescription: "A complete UI kit designed specifically for healthcare applications. Includes components optimized for accessibility and compliance with healthcare industry standards.",
      image: "/api/placeholder/1200/800",
      category: "Design",
      technologies: [
        { name: "Figma", icon: SiFigma },
        { name: "Illustrator", icon: SiAdobeillustrator }
      ],
      features: [
        "WCAG 2.1 compliant",
        "Component library",
        "Design system",
        "Style guide",
        "Prototype examples"
      ],
      liveLink: "https://behance.net/yourusername/healthcare-ui",
      featured: true
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-24 pb-8 px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center space-x-4 sm:space-x-8 mb-8">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects
            .filter(project => selectedCategory === 'All' || project.category === selectedCategory)
            .map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden bg-gray-100 rounded-lg shadow-md">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {hoveredProject === project.id && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center p-4 text-white"
                    >
                      <h3 className="text-xl font-bold mb-2 text-center">{project.title}</h3>
                      <p className="text-sm text-center mb-4 opacity-90">{project.description}</p>
                      <button className="bg-white text-black px-4 py-2 rounded-full text-sm hover:bg-gray-100 transition-colors">
                        View Details
                      </button>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default Portfolio
