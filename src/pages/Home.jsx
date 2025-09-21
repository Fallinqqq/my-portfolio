import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaEnvelope, FaBehance, FaExternalLinkAlt, FaReact, FaNode, FaPython, FaDocker } from 'react-icons/fa'
import { SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql, SiDjango, SiFigma, SiAdobeillustrator, SiAdobephotoshop } from 'react-icons/si'
import ProjectModal from '../components/ProjectModal'

const Home = () => {
  const [hoveredProject, setHoveredProject] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)
  
  // Function for smooth scrolling with custom duration
  const smoothScrollTo = (element, duration = 1500) => {
    if (!element) return;
    
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - 40;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
    
    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const scrollY = easeInOutCubic(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, scrollY);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    // Easing function for smoother animation
    function easeInOutCubic(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t * t + b;
      t -= 2;
      return c / 2 * (t * t * t + 2) + b;
    }
    
    requestAnimationFrame(animation);
  };
  
  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/gracefoster', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/gracefoster', label: 'LinkedIn' },
    { icon: FaBehance, url: 'https://behance.net/gracefoster', label: 'Behance' },
    { icon: FaEnvelope, url: 'mailto:gkfoster15@gmail.com', label: 'Email' }
  ]
  
  const projects = [
    {
      id: 1,
      title: "E-Commerce Fashion Platform",
      description: "A minimalist e-commerce platform focused on user experience and clean design principles.",
      longDescription: "This modern e-commerce platform combines sleek design with powerful functionality. Built with performance and scalability in mind, it features real-time inventory management, secure payment processing, and a responsive user interface.",
      image: "/images/grace-profile.jpg",
      additionalImages: ["/images/grace-profile.jpg", "/images/grace-profile.jpg"],
      technologies: [
        { name: "React", icon: FaReact },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Tailwind CSS", icon: SiTailwindcss }
      ],
      features: [
        "Responsive design for all devices",
        "Real-time inventory tracking",
        "Secure payment integration",
        "User authentication and profiles",
        "Advanced search and filtering"
      ],
      liveLink: "https://fashion-platform-demo.com",
      githubLink: "https://github.com/gracefoster/fashion-platform"
    },
    {
      id: 2,
      title: "Brand Identity System",
      description: "Complete brand identity package including logo design, color palette, and guidelines.",
      longDescription: "A comprehensive brand identity system created for a modern wellness company. The project included logo design, typography selection, color palette development, and a complete brand guidelines document.",
      image: "/images/BehanceBrandGuide_Willow-Word_FOSTER-01.png",
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
      liveLink: "https://behance.net/yourusername"
    },
    {
      id: 3,
      title: "Task Management Dashboard",
      description: "A collaborative task management platform with real-time updates and team features.",
      longDescription: "Built for remote teams, this platform offers real-time collaboration tools, task tracking, and project management features. It includes customizable workflows, time tracking, and detailed analytics.",
      image: "/api/placeholder/1200/800",
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
      githubLink: "https://github.com/gracefoster/task-dashboard"
    },
    {
      id: 4,
      title: "AI-Powered Data Analytics Platform",
      description: "Enterprise-level data analytics platform with machine learning capabilities.",
      longDescription: "An advanced analytics platform that leverages AI to provide insights from complex datasets. Features include automated reporting, predictive analytics, and customizable dashboards.",
      image: "/api/placeholder/1200/800",
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
      githubLink: "https://github.com/gracefoster/analytics-platform"
    },
    {
      id: 5,
      title: "Sustainable Fashion Campaign",
      description: "Digital marketing campaign for an eco-friendly fashion brand.",
      longDescription: "A comprehensive digital marketing campaign highlighting sustainable fashion practices. Including social media assets, web banners, and email marketing templates.",
      image: "/api/placeholder/1200/800",
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
      liveLink: "https://behance.net/yourusername/sustainable-fashion"
    },
    {
      id: 6,
      title: "Restaurant Ordering System",
      description: "Full-stack application for managing restaurant orders and inventory.",
      longDescription: "A comprehensive system for restaurants to manage orders, inventory, and customer relationships. Includes both customer-facing and administrative interfaces.",
      image: "/api/placeholder/1200/800",
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
      githubLink: "https://github.com/gracefoster/restaurant-system"
    }
  ]

  return (
    <div className="flex flex-col items-center px-8">
      {/* Hero Section */}
      <div className="min-h-[90vh] flex items-center justify-center w-full">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-gray-800" style={{ fontFamily: '"Helvetica", "Arial", sans-serif', fontWeight: 600, fontStyle: 'normal' }}>
              Creative Graphic Designer
            </h1>
            
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              I design and build digital experiences that combine aesthetic beauty with functional excellence. Specializing in web development and brand identity design.
            </p>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex justify-center space-x-6"
            >
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-800 transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>

            {/* Clickable Double Chevron Arrow pointing to portfolio */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12"
            >
              <motion.div
                initial={{ y: 0, opacity: 0.7 }}
                animate={{ y: [0, 10, 0], opacity: [0.7, 1, 0.7] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2,
                  ease: "easeInOut" 
                }}
                className="flex justify-center"
              >
                <a 
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById('portfolio-header');
                    smoothScrollTo(element, 500); // Custom scroll with 0.5 second duration
                  }}
                  href="#portfolio-header" 
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                  aria-label="Scroll to Portfolio"
                >
                  <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5 8.25L12 15.75L19.5 8.25" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4.5 14.25L12 21.75L19.5 14.25" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </motion.div>
            </motion.div>

            {/* View Portfolio button removed */}
          </motion.div>
        </div>
      </div>
      
      {/* Portfolio Section */}
      <motion.div
        id="portfolio"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full max-w-7xl mx-auto py-16"
      >
        <h2 id="portfolio-header" className="text-3xl font-light text-center mb-12 text-gray-800">My Portfolio</h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
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
                <div className="relative overflow-hidden bg-white/70 backdrop-blur-sm rounded-lg shadow-md">
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
      </motion.div>
    </div>
  )
}

export default Home