import { motion } from 'framer-motion'
import { FaDownload, FaCalendarAlt, FaMapMarkerAlt, FaGraduationCap, FaBriefcase, FaAward, FaCode, FaPalette } from 'react-icons/fa'

const Resume = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  }

  const experiences = [
    {
      title: "Graphic Designer",
      company: "[Your Current Company]",
      location: "[Location]",
      period: "[Start Date] - Present",
      responsibilities: [
        "Create compelling visual designs for digital and print media",
        "Develop brand identities and marketing materials",
        "Collaborate with clients to understand design requirements",
        "Manage multiple projects while meeting tight deadlines"
      ]
    },
    {
      title: "Web Designer",
      company: "[Previous Company]",
      location: "[Location]",
      period: "[Start Date] - [End Date]",
      responsibilities: [
        "Design and develop responsive websites",
        "Work with cross-functional teams to deliver user-centered designs",
        "Create wireframes, prototypes, and design mockups",
        "Optimize websites for performance and accessibility"
      ]
    },
    {
      title: "Design Intern",
      company: "[Company/Agency Name]",
      location: "[Location]",
      period: "[Start Date] - [End Date]",
      responsibilities: [
        "Assisted senior designers with various design projects",
        "Created social media graphics and marketing materials",
        "Participated in brainstorming sessions and design critiques",
        "Gained experience with Adobe Creative Suite and design workflows"
      ]
    }
  ]

  const education = [
    {
      degree: "Bachelor of Fine Arts in Graphic Design",
      school: "[Your University Name]",
      location: "[Location]",
      period: "[Start Year] - [Graduation Year]",
      description: "Focused on visual communication, typography, branding, and digital design",
      gpa: "[Your GPA]",
      honors: "[Any honors or distinctions]"
    },
    {
      degree: "Certificate/Diploma in Web Design",
      school: "[Institution/Online Platform]",
      location: "[Location or Online]",
      period: "[Year]",
      description: "Specialized training in web development and responsive design principles"
    }
  ]

  const skills = {
    design: [
      { name: "Adobe Creative Suite", level: 95 },
      { name: "Photoshop", level: 95 },
      { name: "Illustrator", level: 90 },
      { name: "InDesign", level: 88 },
      { name: "Figma", level: 85 },
      { name: "Brand Identity Design", level: 90 }
    ],
    technical: [
      { name: "HTML5 & CSS3", level: 85 },
      { name: "JavaScript", level: 75 },
      { name: "Responsive Design", level: 90 },
      { name: "WordPress", level: 80 },
      { name: "Web Design", level: 88 },
      { name: "Typography", level: 92 }
    ]
  }

  const certifications = [
    {
      name: "Google UX Design Certificate",
      issuer: "Google",
      date: "2023"
    },
    {
      name: "React Developer Certification",
      issuer: "Meta",
      date: "2022"
    },
    {
      name: "Adobe Certified Expert",
      issuer: "Adobe",
      date: "2021"
    }
  ]

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
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-text-primary mb-6">Resume</h1>
          <p className="text-xl text-accent-300 mb-8">
            5+ years of experience in design and development
          </p>
          <a 
            href="/grace-foster-resume.pdf" 
            className="btn-primary inline-flex items-center gap-2"
            download
          >
            <FaDownload /> Download PDF Resume
          </a>
        </motion.div>

        {/* Professional Summary */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card p-8 mb-12"
        >
          <h2 className="text-3xl font-bold text-text-primary mb-6">Professional Summary</h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            Passionate and detail-oriented Front-End Developer and Graphic Designer with over 5 years 
            of experience creating engaging digital experiences. Proven track record of delivering 
            high-quality projects that combine aesthetic excellence with functional design. 
            Expertise in modern web technologies, design principles, and user experience optimization.
          </p>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-text-primary mb-8 flex items-center gap-3">
            <FaBriefcase className="text-accent-300" /> Work Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="glass-card p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-text-primary">{exp.title}</h3>
                    <p className="text-accent-300 text-lg font-semibold">{exp.company}</p>
                    <p className="text-text-primary/70 flex items-center gap-2">
                      <FaMapMarkerAlt /> {exp.location}
                    </p>
                  </div>
                  <span className="text-text-primary/80 bg-white/10 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                    <FaCalendarAlt /> {exp.period}
                  </span>
                </div>
                <ul className="text-text-primary/80 space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-accent-300 mt-2">•</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-text-primary mb-8 flex items-center gap-3">
            <FaGraduationCap className="text-accent-300" /> Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="glass-card p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-text-primary mb-1">{edu.degree}</h3>
                    <p className="text-accent-300 font-semibold">{edu.school}</p>
                    <p className="text-text-primary/70 flex items-center gap-2">
                      <FaMapMarkerAlt /> {edu.location}
                    </p>
                    {edu.gpa && <p className="text-text-primary/80">GPA: {edu.gpa} - {edu.honors}</p>}
                    {edu.description && <p className="text-text-primary/80 mt-2">{edu.description}</p>}
                  </div>
                  <span className="text-text-primary/80 bg-white/10 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                    <FaCalendarAlt /> {edu.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-text-primary mb-8">Skills & Expertise</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <div className="glass-card p-6">
              <h3 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
                <FaCode className="text-accent-300" /> Technical Skills
              </h3>
              <div className="space-y-4">
                {skills.technical.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-text-primary font-medium">{skill.name}</span>
                      <span className="text-accent-300">{skill.level}%</span>
                    </div>
                    <div className="bg-white/20 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-accent-400 to-accent-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Design Skills */}
            <div className="glass-card p-6">
              <h3 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
                <FaPalette className="text-accent-300" /> Design Skills
              </h3>
              <div className="space-y-4">
                {skills.design.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-text-primary font-medium">{skill.name}</span>
                      <span className="text-accent-300">{skill.level}%</span>
                    </div>
                    <div className="bg-white/20 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-accent-400 to-accent-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-text-primary mb-8 flex items-center gap-3">
            <FaAward className="text-accent-300" /> Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="glass-card p-6 text-center">
                <FaAward className="text-accent-300 text-3xl mx-auto mb-4" />
                <h3 className="text-lg font-bold text-text-primary mb-2">{cert.name}</h3>
                <p className="text-accent-300 font-semibold">{cert.issuer}</p>
                <p className="text-text-primary/70">{cert.date}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center glass-card p-8"
        >
          <h2 className="text-3xl font-bold text-text-primary mb-4">Ready to Work Together?</h2>
          <p className="text-xl text-text-primary/90 mb-8">
            Let's discuss how my skills and experience can benefit your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-accent-500 hover:bg-opacity-80 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get in Touch
            </a>
            <a 
              href="/grace-foster-resume.pdf" 
              className="bg-primary-300 hover:bg-opacity-80 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
              download
            >
              <FaDownload /> Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Resume
