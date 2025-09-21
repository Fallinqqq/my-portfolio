import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaEnvelope, FaBehance, FaExternalLinkAlt, FaReact, FaNode, FaPython, FaDocker } from 'react-icons/fa'
import { SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql, SiDjango, SiFigma, SiAdobeillustrator, SiAdobephotoshop } from 'react-icons/si'
import ProjectModal from '../components/ProjectModal'

const Home = () => {
  const [hoveredProject, setHoveredProject] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [isPaused, setIsPaused] = useState(false)
  const fullText = "Grace Foster"

  // Enhanced typing effect with backspace
  useEffect(() => {
    if (isPaused) {
      const timeout = setTimeout(() => {
        setIsPaused(false)
      }, isTyping ? 2000 : 1000) // Pause 2s after typing, 1s after backspacing
      
      return () => clearTimeout(timeout)
    }

    if (!isPaused) {
      if (isTyping) {
        // Typing forward
        if (currentIndex < fullText.length) {
          const timeout = setTimeout(() => {
            setDisplayedText(prev => prev + fullText[currentIndex])
            setCurrentIndex(prev => prev + 1)
          }, 120) // Typing speed
          
          return () => clearTimeout(timeout)
        } else {
          // Finished typing, pause then start backspacing
          setIsPaused(true)
          setIsTyping(false)
        }
      } else {
        // Backspacing
        if (currentIndex > 0) {
          const timeout = setTimeout(() => {
            setDisplayedText(prev => prev.slice(0, -1))
            setCurrentIndex(prev => prev - 1)
          }, 80) // Backspace speed (slightly faster)
          
          return () => clearTimeout(timeout)
        } else {
          // Finished backspacing, pause then start typing again
          setIsPaused(true)
          setIsTyping(true)
        }
      }
    }
  }, [currentIndex, fullText, isTyping, isPaused])
  
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
    <div className="flex flex-col items-center bg-white min-h-screen"
         style={{ fontFamily: 'var(--font-body)' }}>
      {/* Hero Section */}
      <div className="min-h-[80vh] flex items-center justify-center w-full">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center space-y-12"
          >
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl text-gray-900 min-h-[1.2em]" 
                  style={{ 
                    fontFamily: 'var(--font-heading)', 
                    fontWeight: 500,
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em'
                  }}>
                {displayedText}
                <span className="cursor-blink">|</span>
              </h1>
              
              <div className="h-px w-12 bg-gray-400 mx-auto"></div>
              
              <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
                 style={{ fontFamily: 'var(--font-body)', fontWeight: 400 }}>
                Graphic & Web Designer based in Lynchburg, VA.
              </p>
            </div>

            <p className="text-lg text-gray-500 max-w-lg mx-auto leading-relaxed"
               style={{ fontFamily: 'var(--font-body)', fontWeight: 400 }}>
              Creating thoughtful digital experiences through design and development.
            </p>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex justify-center space-x-8"
            >
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-800 transition-colors duration-300"
                  aria-label={link.label}
                >
                  <link.icon className="w-6 h-6" />
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Portfolio Section */}
      <motion.div
        id="portfolio"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="w-full max-w-6xl mx-auto pt-4 pb-20 px-8"
      >
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer portfolio-glow rounded-lg"
                onClick={() => setSelectedProject(project)}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="space-y-6 p-4 rounded-lg">
                  <div className="relative overflow-hidden bg-gray-50 rounded-lg">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full aspect-[4/3] object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl md:text-2xl text-gray-900 group-hover:text-gray-600 transition-colors duration-300"
                        style={{ 
                          fontFamily: 'var(--font-heading)', 
                          fontWeight: 500,
                          letterSpacing: '-0.01em'
                        }}>
                      {project.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed"
                       style={{ fontFamily: 'var(--font-body)', fontWeight: 400 }}>
                      {project.description}
                    </p>
                  </div>
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