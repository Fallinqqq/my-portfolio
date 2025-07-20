import { motion } from 'framer-motion'
import { FaDownload, FaCalendarAlt, FaMapMarkerAlt, FaGraduationCap, FaBriefcase, FaAward, FaCode, FaPalette } from 'react-icons/fa'

const Resume = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  }

  const experiences = [
    {
      title: "Senior Front-End Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      responsibilities: [
        "Lead development of responsive web applications using React and TypeScript",
        "Collaborate with UX/UI designers to implement pixel-perfect designs",
        "Mentor junior developers and conduct code reviews",
        "Optimize application performance resulting in 40% faster load times"
      ]
    },
    {
      title: "Graphic Designer & Web Developer",
      company: "Creative Studio Inc.",
      location: "Los Angeles, CA",
      period: "2020 - 2022",
      responsibilities: [
        "Designed and developed websites for 50+ clients across various industries",
        "Created brand identities including logos, color schemes, and style guides",
        "Managed client relationships and project timelines",
        "Increased client satisfaction rate to 98% through effective communication"
      ]
    },
    {
      title: "Junior Front-End Developer",
      company: "StartupXYZ",
      location: "Remote",
      period: "2019 - 2020",
      responsibilities: [
        "Built responsive web interfaces using HTML5, CSS3, and JavaScript",
        "Collaborated with backend developers to integrate APIs",
        "Participated in agile development process and daily standups",
        "Contributed to open-source projects and company blog"
      ]
    }
  ]

  const education = [
    {
      degree: "Bachelor of Fine Arts in Graphic Design",
      school: "California College of the Arts",
      location: "Oakland, CA",
      period: "2015 - 2019",
      gpa: "3.8/4.0",
      honors: "Magna Cum Laude"
    },
    {
      degree: "Certificate in Web Development",
      school: "General Assembly",
      location: "San Francisco, CA",
      period: "2019",
      description: "Intensive 12-week program covering full-stack development"
    }
  ]

  const skills = {
    technical: [
      { name: "React/Next.js", level: 95 },
      { name: "JavaScript/TypeScript", level: 90 },
      { name: "HTML5 & CSS3", level: 95 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Node.js", level: 75 },
      { name: "Git & GitHub", level: 90 }
    ],
    design: [
      { name: "Adobe Creative Suite", level: 95 },
      { name: "Figma", level: 90 },
      { name: "Sketch", level: 85 },
      { name: "UI/UX Design", level: 90 },
      { name: "Branding", level: 85 },
      { name: "Typography", level: 90 }
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
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Resume</h1>
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
          <h2 className="text-3xl font-bold text-white mb-6">Professional Summary</h2>
          <p className="text-lg text-white/90 leading-relaxed">
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
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <FaBriefcase className="text-accent-300" /> Work Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="glass-card p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                    <p className="text-accent-300 text-lg font-semibold">{exp.company}</p>
                    <p className="text-white/70 flex items-center gap-2">
                      <FaMapMarkerAlt /> {exp.location}
                    </p>
                  </div>
                  <span className="text-white/80 bg-white/10 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                    <FaCalendarAlt /> {exp.period}
                  </span>
                </div>
                <ul className="text-white/80 space-y-2">
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
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <FaGraduationCap className="text-accent-300" /> Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="glass-card p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                    <p className="text-accent-300 font-semibold">{edu.school}</p>
                    <p className="text-white/70 flex items-center gap-2">
                      <FaMapMarkerAlt /> {edu.location}
                    </p>
                    {edu.gpa && <p className="text-white/80">GPA: {edu.gpa} - {edu.honors}</p>}
                    {edu.description && <p className="text-white/80 mt-2">{edu.description}</p>}
                  </div>
                  <span className="text-white/80 bg-white/10 px-3 py-1 rounded-full text-sm flex items-center gap-2">
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
          <h2 className="text-3xl font-bold text-white mb-8">Skills & Expertise</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <div className="glass-card p-6">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <FaCode className="text-accent-300" /> Technical Skills
              </h3>
              <div className="space-y-4">
                {skills.technical.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
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
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <FaPalette className="text-accent-300" /> Design Skills
              </h3>
              <div className="space-y-4">
                {skills.design.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
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
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <FaAward className="text-accent-300" /> Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="glass-card p-6 text-center">
                <FaAward className="text-accent-300 text-3xl mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{cert.name}</h3>
                <p className="text-accent-300 font-semibold">{cert.issuer}</p>
                <p className="text-white/70">{cert.date}</p>
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
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Work Together?</h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how my skills and experience can benefit your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              Get in Touch
            </a>
            <a 
              href="/grace-foster-resume.pdf" 
              className="bg-white/20 hover:bg-white/30 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
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
